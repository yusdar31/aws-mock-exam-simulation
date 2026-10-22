import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
const db = new PGlite();
await db.exec(`CREATE ROLE anon; CREATE ROLE authenticated; CREATE SCHEMA auth; CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;`);
await db.exec(
  readFileSync("supabase/migrations/20261019_classroom_upgrade.sql", "utf8"),
);
const migration = readFileSync(
  "supabase/migrations/20261022_classroom_learners.sql",
  "utf8",
);
await db.exec(migration);
const qs = JSON.parse(readFileSync("src/data/banks/ccp-id.json", "utf8"))
  .filter((q) => q.status === "approved")
  .slice(0, 3);
const user = randomUUID(),
  other = randomUUID();
await db.query("insert into auth.users values ($1),($2)", [user, other]);
async function rpc(action, payload = {}, uid = "") {
  await db.exec("RESET ROLE");
  await db.query("select set_config('request.jwt.claim.sub',$1,false)", [uid]);
  await db.exec(`SET ROLE ${uid ? "authenticated" : "anon"}`);
  return (
    await db.query("select public.classroom_rpc($1,$2::jsonb) result", [
      action,
      JSON.stringify(payload),
    ])
  ).rows[0].result;
}
async function admin(sql, args = []) {
  await db.exec("RESET ROLE");
  return db.query(sql, args);
}
after(() => db.close());
test("account history and cross-browser resume preserve identity, answers and private flags without leaking answers", async () => {
  const host = randomUUID(),
    token = randomUUID();
  const room = await rpc("create", {
    token: host,
    title: "Account learner test",
    minutes: 20,
    questions: qs,
  });
  const access = { code: room.code, token };
  const joined = await rpc(
    "join",
    { ...access, name: "Learner", account: true },
    user,
  );
  assert.equal(joined.member.accountLinked, true);
  await rpc("start", { code: room.code, token: host });
  await admin(
    "update public.classroom_rooms set starts_at=clock_timestamp()-interval '1 second' where code=$1",
    [room.code],
  );
  await rpc(
    "save",
    { ...access, revision: 0, answers: { [qs[0].id]: qs[0].correctAnswers } },
    user,
  );
  const flagged = await rpc("flag", { ...access, flags: [qs[1].id] }, user);
  assert.deepEqual(flagged.member.flags, [qs[1].id]);
  assert.equal(flagged.questions[0].correctAnswers, undefined);
  await assert.rejects(
    rpc("flag", { ...access, flags: ["foreign-question"] }, user),
  );
  await assert.rejects(rpc("account_history"));
  assert.equal((await rpc("account_history", {}, other)).items.length, 0);
  assert.equal(
    (await rpc("account_history", {}, user)).items[0].code,
    room.code,
  );
  await assert.rejects(
    rpc("account_resume", { code: room.code, token: randomUUID() }, other),
  );
  const next = { ...access, token: randomUUID() };
  const restored = await rpc("account_resume", next, user);
  assert.equal(restored.member.id, joined.member.id);
  assert.deepEqual(restored.member.answers, {
    [qs[0].id]: qs[0].correctAnswers,
  });
  assert.deepEqual(restored.member.flags, [qs[1].id]);
  assert.equal(restored.participantCount, 1);
  await assert.rejects(rpc("state", access, user));
  await assert.rejects(
    rpc("save", { ...next, revision: 1, answers: {} }, user),
  );
  await admin("select 1");
  await db.exec(migration);
  const preserved = await rpc("state", next, user);
  assert.deepEqual(preserved.member.flags, [qs[1].id]);
  await rpc("finish", { code: room.code, token: host });
  await rpc("reveal", { code: room.code, token: host });
  await admin(
    "update public.classroom_rooms set expires_at=clock_timestamp()-interval '1 day' where code=$1",
    [room.code],
  );
  const later = await rpc(
    "account_resume",
    { ...next, token: randomUUID() },
    user,
  );
  assert.equal(later.member.score, 1);
  assert.deepEqual(later.questions[0].correctAnswers, qs[0].correctAnswers);
  await assert.rejects(
    rpc("account_resume", { ...next, token: randomUUID() }, other),
  );
  await admin("select 1");
  await db.exec("SET ROLE authenticated");
  await assert.rejects(
    db.query("select * from public.classroom_account_links"),
  );
});
test("an existing guest can link their own access but cannot claim another account or link twice under another identity", async () => {
  const host = randomUUID(),
    token = randomUUID();
  const room = await rpc("create", {
    token: host,
    title: "Guest linking",
    minutes: 10,
    questions: qs,
  });
  const access = { code: room.code, token };
  await rpc("join", { ...access, name: "Guest" });
  await assert.rejects(rpc("link_account", access));
  const linked = await rpc("link_account", access, user);
  assert.equal(linked.member.accountLinked, true);
  const rejoinAccess = { ...access, token: randomUUID() };
  const rejoined = await rpc("join", { ...rejoinAccess, name: "New browser", account: true }, user);
  assert.equal(rejoined.member.id, linked.member.id);
  assert.equal(rejoined.participantCount, 1);
  await assert.rejects(rpc("link_account", rejoinAccess, other));
  await assert.rejects(
    rpc("link_account", { ...access, token: randomUUID() }, other),
  );
  assert.equal((await rpc("account_history", {}, other)).items.length, 0);
});

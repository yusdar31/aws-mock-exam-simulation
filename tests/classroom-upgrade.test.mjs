import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
const db = new PGlite();
await db.exec(`CREATE ROLE anon; CREATE ROLE authenticated; CREATE SCHEMA auth; CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT (current_setting('request.jwt.claims',true)::jsonb->>'sub')::uuid $$;
CREATE FUNCTION auth.jwt() RETURNS jsonb LANGUAGE sql STABLE AS $$ SELECT coalesce(current_setting('request.jwt.claims',true),'{}')::jsonb $$;`);
const sql = readFileSync(
  "supabase/migrations/20261019_classroom_upgrade.sql",
  "utf8",
);
await db.exec(sql);
await db.exec(sql);
const questions = JSON.parse(
  readFileSync("src/data/banks/ccp-id.json", "utf8"),
).slice(0, 3);
let host = randomUUID(),
  code,
  alice = randomUUID(),
  bob = randomUUID(),
  aliceId;
async function rpc(action, payload = {}, fn = "classroom_rpc") {
  await db.exec("SET ROLE anon");
  return (
    await db.query(`SELECT public.${fn}($1,$2::jsonb) as result`, [
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
test("rerunning the upgrade preserves an existing room snapshot and saved answers", async () => {
  const token = randomUUID(),
    member = randomUUID();
  const room = await rpc("create", {
    token,
    title: "Preserve existing room",
    minutes: 10,
    questions,
  });
  await rpc("join", {
    code: room.code,
    token: member,
    name: "Existing learner",
  });
  await rpc("start", { code: room.code, token });
  await admin(
    "UPDATE public.classroom_rooms SET starts_at=clock_timestamp()-interval '1 second' WHERE code=$1",
    [room.code],
  );
  await rpc("save", {
    code: room.code,
    token: member,
    revision: 0,
    answers: { [questions[0].id]: questions[0].correctAnswers },
  });
  await db.exec("RESET ROLE");
  await db.exec(sql);
  const restored = await rpc("state", { code: room.code, token: member });
  assert.equal(restored.member.revision, 1);
  assert.deepEqual(
    restored.member.answers[questions[0].id],
    questions[0].correctAnswers,
  );
  assert.equal(restored.title, "Preserve existing room");
});
test("upgrade is repeatable, previews questions only for host, and records readiness", async () => {
  assert.equal((await rpc("health")).version, 2);
  const room = await rpc("create", {
    token: host,
    title: "Upgrade",
    minutes: 15,
    questions,
  });
  code = room.code;
  assert.equal(room.questions.length, 3);
  const a = await rpc("join", { code, token: alice, name: "Alice" });
  aliceId = a.member.id;
  assert.equal(a.questions.length, 0);
  assert.equal(a.member.ready, false);
  await rpc("ready", { code, token: alice, ready: true });
  assert.equal(
    (await rpc("state", { code, token: host })).participants[0].ready,
    true,
  );
  await assert.rejects(
    rpc("settings", { code, token: alice, allowLate: true }),
    /instruktur/,
  );
  await rpc("join", { code, token: bob, name: "Bob" });
  await rpc("remove", {
    code,
    token: host,
    memberId: (await rpc("state", { code, token: bob })).member.id,
  });
  await assert.rejects(rpc("state", { code, token: bob }), /Akses/);
  await rpc("settings", { code, token: host, allowLate: true });
  const start = await rpc("start", { code, token: host });
  await admin(
    "UPDATE public.classroom_rooms SET starts_at=clock_timestamp()-interval '1 second' WHERE code=$1",
    [code],
  );
  const b = await rpc("join", { code, token: bob, name: "Bob" });
  assert.equal(b.endsAt, start.endsAt);
  await assert.rejects(
    rpc("remove", { code, token: host, memberId: aliceId }),
    /sebelum/,
  );
});
test("host-approved recovery rotates credentials without changing answers or time; transfer revokes previous host", async () => {
  const saved = await rpc("save", {
    code,
    token: alice,
    revision: 0,
    answers: { [questions[0].id]: questions[0].correctAnswers },
  });
  const recoveryToken = randomUUID();
  await rpc("reset_member", {
    code,
    token: host,
    memberId: aliceId,
    recoveryToken,
  });
  await assert.rejects(
    rpc("recover", { code, token: randomUUID(), recoveryToken: randomUUID() }),
    /pemulihan/,
  );
  const oldAlice = alice;
  alice = randomUUID();
  const recovered = await rpc("recover", { code, token: alice, recoveryToken });
  assert.deepEqual(recovered.member.answers, saved.member.answers);
  assert.equal(recovered.endsAt, saved.endsAt);
  await assert.rejects(rpc("state", { code, token: oldAlice }), /Akses/);
  await assert.rejects(
    rpc("recover", { code, token: randomUUID(), recoveryToken }),
    /pemulihan/,
  );
  const transferToken = randomUUID();
  await rpc("transfer", { code, token: host, transferToken });
  const oldHost = host;
  host = randomUUID();
  await rpc("claim_host", { code, token: host, transferToken });
  await assert.rejects(rpc("state", { code, token: oldHost }), /Akses/);
  await assert.rejects(
    rpc("claim_host", { code, token: randomUUID(), transferToken }),
    /pemindahan/,
  );
});
test("last submission closes on the server without host; synchronized review never reveals keys early", async () => {
  const a = await rpc("state", { code, token: alice });
  await rpc("submit", {
    code,
    token: alice,
    revision: a.member.revision,
    answers: a.member.answers,
  });
  const b = await rpc("submit", { code, token: bob, revision: 0, answers: {} });
  assert.equal(b.status, "closed");
  assert.equal(b.member.score, null);
  assert.equal(b.questions[0].correctAnswers, undefined);
  await rpc("review", { code, token: host, reviewIndex: 1, reviewSync: true });
  assert.equal((await rpc("state", { code, token: alice })).reviewSync, false);
  await assert.rejects(
    rpc("review", { code, token: alice, reviewIndex: 0, reviewSync: true }),
    /instruktur/,
  );
  await rpc("reveal", { code, token: host });
  const review = await rpc("state", { code, token: alice });
  assert.equal(review.reviewSync, true);
  assert.equal(review.reviewIndex, 1);
  assert.deepEqual(
    review.questions[0].correctAnswers,
    questions[0].correctAnswers,
  );
  await assert.rejects(
    rpc("review", { code, token: host, reviewIndex: 99, reviewSync: true }),
    /tidak valid/,
  );
});
test("persistent reports are idempotent, private by capability, and reviewed only by trusted admin", async () => {
  const payload = {
    id: randomUUID(),
    token: randomUUID(),
    questionId: questions[0].id,
    version: 1,
    reason: "explanation",
    detail: "Please review the explanation for this question.",
  };
  assert.equal((await rpc("health", {}, "report_rpc")).ready, true);
  assert.equal((await rpc("submit", payload, "report_rpc")).received, true);
  await rpc("submit", payload, "report_rpc");
  await assert.rejects(
    db.query("SELECT * FROM public.question_reports"),
    /permission denied/,
  );
  assert.equal(
    (
      await rpc(
        "status",
        { items: [{ id: payload.id, token: randomUUID() }] },
        "report_rpc",
      )
    ).items.length,
    0,
  );
  assert.equal(
    (await rpc("status", { items: [payload] }, "report_rpc")).items[0].status,
    "pending",
  );
  await assert.rejects(rpc("list", {}, "report_rpc"), /admin/);
  await assert.rejects(
    rpc(
      "submit",
      { ...payload, id: randomUUID(), detail: "short" },
      "report_rpc",
    ),
    /tidak valid/,
  );
  await admin("SELECT set_config('request.jwt.claims',$1,false)", [
    JSON.stringify({ sub: randomUUID(), app_metadata: { role: "admin" } }),
  ]);
  assert.equal((await rpc("list", {}, "report_rpc")).items.length, 1);
  await rpc(
    "resolve",
    {
      id: payload.id,
      status: "in_review",
      resolution: "Checking the reference.",
    },
    "report_rpc",
  );
  assert.equal(
    (await rpc("status", { items: [payload] }, "report_rpc")).items[0].status,
    "in_review",
  );
  await rpc(
    "resolve",
    {
      id: payload.id,
      status: "resolved",
      resolution: "Explanation clarified.",
    },
    "report_rpc",
  );
  assert.equal(
    (await rpc("status", { items: [payload] }, "report_rpc")).items[0]
      .resolution,
    "Explanation clarified.",
  );
});

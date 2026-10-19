import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
const db = new PGlite();
await db.exec("CREATE ROLE anon; CREATE ROLE authenticated;");
const sql = readFileSync(
  "supabase/migrations/20261018_live_classroom.sql",
  "utf8",
);
await db.exec(sql);
await db.exec(sql);
const questions = JSON.parse(
  readFileSync("src/data/banks/ccp-id.json", "utf8"),
).slice(0, 3);
const host = randomUUID(),
  alice = randomUUID(),
  bob = randomUUID();
let code;
async function rpc(action, payload = {}) {
  await db.exec("SET ROLE anon");
  const result = await db.query(
    "select public.classroom_rpc($1,$2::jsonb) as result",
    [action, JSON.stringify(payload)],
  );
  return result.rows[0].result;
}
async function admin(sql, args = []) {
  await db.exec("RESET ROLE");
  return db.query(sql, args);
}
after(() => db.close());
test("live classroom migration is repeatable; anonymous guests cannot read tables or grade directly", async () => {
  assert.equal((await rpc("health")).ready, true);
  await assert.rejects(
    db.query("SELECT * FROM public.classroom_rooms"),
    /permission denied/,
  );
  await assert.rejects(
    db.query("SELECT * FROM public.classroom_members"),
    /permission denied/,
  );
  await assert.rejects(
    db.query("SELECT public.classroom_score('[]','{}')"),
    /permission denied/,
  );
});
test("host creates one immutable packet; names and code join waiting room without exposing answers", async () => {
  const room = await rpc("create", {
    token: host,
    title: "AWS re/Start",
    minutes: 15,
    questions,
  });
  code = room.code;
  assert.equal((await rpc("create", { token: host })).code, code);
  assert.equal(room.questions.length, 0);
  await assert.rejects(rpc("start", { code, token: host }), /minimal satu/);
  const a = await rpc("join", { code, token: alice, name: "Alice" });
  const b = await rpc("join", { code, token: bob, name: "Bob" });
  assert.equal(a.member.name, "Alice");
  assert.equal(b.member.name, "Bob");
  assert.equal(a.questions.length, 0);
  assert.equal(b.participantCount, 2);
  await assert.rejects(
    rpc("join", { code, token: randomUUID(), name: "ALICE" }),
    /Nama sudah/,
  );
  await assert.rejects(rpc("state", { code, token: randomUUID() }), /Akses/);
  await assert.rejects(rpc("start", { code, token: alice }), /instruktur/);
});
test("common start and deadline are server-owned; participants receive identical questions/options and only their answers", async () => {
  const start = await rpc("start", { code, token: host });
  assert.equal(start.endsAt - start.startsAt, 15 * 60000);
  assert.equal(
    (await rpc("state", { code, token: alice })).startsAt,
    start.startsAt,
  );
  assert.equal((await rpc("state", { code, token: bob })).endsAt, start.endsAt);
  await assert.rejects(
    rpc("save", { code, token: alice, revision: 0, answers: {} }),
    /belum dimulai/,
  );
  await assert.rejects(
    rpc("join", { code, token: randomUUID(), name: "Late" }),
    /sudah dimulai/,
  );
  await admin(
    "UPDATE public.classroom_rooms SET starts_at=clock_timestamp()-interval '1 second' WHERE code=$1",
    [code],
  );
  const a = await rpc("state", { code, token: alice }),
    b = await rpc("state", { code, token: bob });
  assert.deepEqual(a.questions, b.questions);
  assert.equal(a.questions[0].correctAnswers, undefined);
  assert.equal(a.questions[0].explanation, undefined);
  assert.equal(a.participants, undefined);
  assert.deepEqual(a.questions[0].options, questions[0].options);
});
test("independent autosave uses revisions, validates options, and freezes idempotent submission", async () => {
  const answers = { [questions[0].id]: questions[0].correctAnswers };
  await assert.rejects(
    rpc("save", {
      code,
      token: alice,
      revision: 0,
      answers: { [questions[0].id]: ["FAKE"] },
    }),
    /Pilihan/,
  );
  const a = await rpc("save", { code, token: alice, revision: 0, answers });
  assert.equal(a.member.revision, 1);
  assert.deepEqual(a.member.answers, answers);
  assert.deepEqual(
    (await rpc("state", { code, token: bob })).member.answers,
    {},
  );
  await assert.rejects(
    rpc("save", { code, token: alice, revision: 0, answers: {} }),
    /tab lain/,
  );
  const submitted = await rpc("submit", {
    code,
    token: alice,
    revision: 1,
    answers,
  });
  assert.equal(submitted.member.submitted, true);
  const retry = await rpc("submit", {
    code,
    token: alice,
    revision: 1,
    answers: {},
  });
  assert.deepEqual(retry.member.answers, answers);
  await assert.rejects(
    rpc("save", { code, token: alice, revision: 2, answers: {} }),
    /sudah dikumpulkan/,
  );
  const hostState = await rpc("state", { code, token: host });
  assert.equal(hostState.participants[0].answered, 1);
  assert.equal(hostState.participants[0].answers, null);
  await assert.rejects(rpc("reveal", { code, token: host }), /Akhiri/);
});
test("deadline rejects late answers; host grades on stored answers and explicitly releases review", async () => {
  await admin(
    "UPDATE public.classroom_rooms SET ends_at=clock_timestamp()-interval '1 second' WHERE code=$1",
    [code],
  );
  await assert.rejects(
    rpc("save", { code, token: bob, revision: 0, answers: {} }),
    /berakhir/,
  );
  const b = await rpc("state", { code, token: bob });
  assert.equal(b.status, "closed");
  assert.equal(b.member.score, null);
  assert.equal(b.questions[0].correctAnswers, undefined);
  const hostState = await rpc("state", { code, token: host });
  assert.equal(hostState.participants.find((p) => p.name === "Alice").score, 1);
  assert.equal(hostState.participants.find((p) => p.name === "Bob").score, 0);
  await assert.rejects(rpc("reveal", { code, token: bob }), /instruktur/);
  await rpc("reveal", { code, token: host });
  const a = await rpc("state", { code, token: alice });
  assert.equal(a.member.score, 1);
  assert.deepEqual(a.questions[0].correctAnswers, questions[0].correctAnswers);
  assert.equal(a.participants, undefined);
});

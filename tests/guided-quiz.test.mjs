import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
const db = new PGlite();
await db.exec(`CREATE ROLE anon;CREATE ROLE authenticated;CREATE SCHEMA auth;CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;`);
for (const file of [
  "20261019_classroom_upgrade.sql",
  "20261022_classroom_learners.sql",
  "20261102_guided_quiz.sql",
])
  await db.exec(readFileSync(`supabase/migrations/${file}`, "utf8"));
const qs = [
  {
    id: "q1",
    prompt: "FIRST QUESTION",
    options: [
      { id: "A", text: "First" },
      { id: "B", text: "Second" },
    ],
    correctAnswers: ["B"],
    explanation: "FIRST EXPLANATION",
    type: "single",
    lang: "en",
    examType: "ccp",
    domain: "Cloud Concepts",
  },
  {
    id: "q2",
    prompt: "FUTURE QUESTION",
    options: [
      { id: "A", text: "One" },
      { id: "B", text: "Two" },
      { id: "C", text: "Three" },
    ],
    correctAnswers: ["A", "C"],
    explanation: "FUTURE EXPLANATION",
    type: "multiple",
    lang: "en",
    examType: "ccp",
    domain: "Cloud Concepts",
  },
];
async function rpc(action, payload = {}, user = "") {
  await db.exec("RESET ROLE");
  await db.query("select set_config('request.jwt.claim.sub',$1,false)", [user]);
  await db.exec(`SET ROLE ${user ? "authenticated" : "anon"}`);
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
async function room(seconds = 0) {
  const host = randomUUID(),
    token = randomUUID();
  const state = await rpc("create", {
    token: host,
    title: "Guided class",
    questions: qs,
    minutes: 15,
    mode: "quiz",
    seconds,
  });
  const code = state.code;
  await rpc("join", { code, token, name: "Learner" });
  return { host: { code, token: host }, member: { code, token }, state };
}
after(() => db.close());

test("guided migration is repeatable, preserves exams, and cannot be bypassed through its private implementation", async () => {
  const token = randomUUID();
  const old = await rpc("create", {
    token,
    title: "Existing exam",
    questions: qs,
    minutes: 15,
  });
  await db.exec("RESET ROLE");
  await db.exec(
    readFileSync("supabase/migrations/20261102_guided_quiz.sql", "utf8"),
  );
  const current = await rpc("state", { code: old.code, token });
  assert.equal(current.mode, "exam");
  assert.equal(current.total, 2);
  assert.equal(current.status, "waiting");
  assert.equal((await rpc("health")).guidedQuiz, true);
  await assert.rejects(
    db.query("select public.classroom_exam_rpc_v3('health','{}')"),
    /permission denied/,
  );
  await assert.rejects(
    db.query("select * from public.classroom_rooms"),
    /permission denied/,
  );
  const member = randomUUID();
  await rpc("join", { code: old.code, token: member, name: "Exam learner" });
  await rpc("start", { code: old.code, token });
  await admin(
    "update public.classroom_rooms set starts_at=clock_timestamp()-interval '1 second' where code=$1",
    [old.code],
  );
  await rpc("submit", {
    code: old.code,
    token: member,
    revision: 0,
    answers: { q1: ["B"], q2: ["A", "C"] },
  });
  await rpc("reveal", { code: old.code, token });
  assert.equal(
    (await rpc("state", { code: old.code, token: member })).member.score,
    2,
  );
});

test("each round reveals one identical question, locks first answers, and publishes scores only after host review", async () => {
  const { host, member } = await room();
  assert.equal((await rpc("state", member)).questions.length, 0);
  await assert.rejects(rpc("quiz_start", member), /Hanya host/);
  await rpc("quiz_start", host);
  const playing = await rpc("state", member),
    instructor = await rpc("state", host);
  assert.deepEqual(playing.questions, instructor.questions);
  assert.equal(playing.questions.length, 1);
  assert.equal(playing.questions[0].id, "q1");
  assert.equal(playing.questions[0].correctAnswers, undefined);
  assert.ok(!JSON.stringify(playing).includes("FUTURE"));
  await assert.rejects(
    rpc("save", { ...member, answers: { q2: ["A", "C"] }, revision: 0 }),
    /kontrol kuis/,
  );
  await assert.rejects(
    rpc("quiz_answer", { ...member, questionIndex: 1, selected: ["A", "C"] }),
    /Soal sudah berganti/,
  );
  await assert.rejects(
    rpc("quiz_answer", { ...member, questionIndex: 0, selected: ["Z"] }),
    /Lengkapi/,
  );
  await rpc("quiz_answer", { ...member, questionIndex: 0, selected: ["B"] });
  const retry = await rpc("quiz_answer", {
    ...member,
    questionIndex: 0,
    selected: ["A"],
  });
  assert.deepEqual(retry.member.answers.q1, ["B"]);
  assert.equal(retry.member.score, 0);
  assert.equal(retry.quizLeaderboard[0].score, 0);
  assert.equal(retry.quizDistribution, null);
  await assert.rejects(
    rpc("quiz_reveal", { ...host, questionIndex: 0 }),
    /Tutup jawaban/,
  );
  await rpc("quiz_close", { ...host, questionIndex: 0 });
  assert.equal(
    (await rpc("state", member)).questions[0].correctAnswers,
    undefined,
  );
  await rpc("quiz_reveal", { ...host, questionIndex: 0 });
  const review = await rpc("state", member);
  assert.deepEqual(review.questions[0].correctAnswers, ["B"]);
  assert.equal(review.member.score, 1);
  assert.deepEqual(review.quizDistribution, { A: 0, B: 1 });
  await rpc("quiz_next", { ...host, questionIndex: 0 });
  await assert.rejects(
    rpc("quiz_next", { ...host, questionIndex: 0 }),
    /Soal sudah berganti/,
  );
  await assert.rejects(
    rpc("quiz_answer", { ...member, questionIndex: 0, selected: ["A"] }),
    /Soal sudah berganti/,
  );
  const second = await rpc("state", member);
  assert.equal(second.questions[0].id, "q2");
  assert.equal(second.questions[0].correctAnswers, undefined);
  assert.equal(second.member.score, 1);
  await assert.rejects(
    rpc("quiz_answer", { ...member, questionIndex: 1, selected: ["A"] }),
    /Lengkapi/,
  );
  await rpc("quiz_answer", {
    ...member,
    questionIndex: 1,
    selected: ["C", "A"],
  });
  await rpc("quiz_close", { ...host, questionIndex: 1 });
  await rpc("quiz_reveal", { ...host, questionIndex: 1 });
  const final = await rpc("quiz_finish", host);
  assert.equal(final.status, "closed");
  assert.equal(final.quizLeaderboard[0].score, 2);
  assert.equal((await rpc("state", member)).member.score, 2);
});

test("deadline is authoritative and early finish does not expose future keys", async () => {
  const { host, member } = await room(15);
  await rpc("quiz_start", host);
  await admin(
    "update public.classroom_rooms set quiz_deadline=clock_timestamp()-interval '1 second' where code=$1",
    [host.code],
  );
  await assert.rejects(
    rpc("quiz_answer", { ...member, questionIndex: 0, selected: ["B"] }),
    /sudah ditutup/,
  );
  assert.equal((await rpc("state", member)).quizPhase, "locked");
  await rpc("quiz_reveal", { ...host, questionIndex: 0 });
  const final = await rpc("quiz_finish", host);
  assert.equal(final.questions.length, 1);
  assert.ok(!JSON.stringify(final).includes("FUTURE"));
  const stranger = randomUUID();
  await assert.rejects(
    rpc("state", { code: host.code, token: stranger }),
    /Akses sesi ditolak/,
  );
});

test("account resume from another browser preserves locked picks and late enrollment does not grant earlier answers", async () => {
  const user = randomUUID();
  await admin("insert into auth.users values ($1)", [user]);
  const { host } = await room();
  const token = randomUUID();
  await rpc(
    "join",
    { ...host, token, name: "Account learner", account: true },
    user,
  );
  await rpc("quiz_start", host);
  await rpc(
    "quiz_answer",
    { code: host.code, token, questionIndex: 0, selected: ["B"] },
    user,
  );
  const next = randomUUID();
  const resumed = await rpc(
    "account_resume",
    { code: host.code, token: next },
    user,
  );
  assert.deepEqual(resumed.member.answers.q1, ["B"]);
  assert.equal(resumed.questions[0].correctAnswers, undefined);
  await assert.rejects(
    rpc("state", { code: host.code, token }),
    /Akses sesi ditolak/,
  );
  await assert.rejects(
    rpc("join", { code: host.code, token: randomUUID(), name: "Late" }),
    /sudah dimulai/,
  );
  await rpc("quiz_close", { ...host, questionIndex: 0 });
  await rpc("quiz_reveal", { ...host, questionIndex: 0 });
  assert.equal(
    (await rpc("state", { code: host.code, token: next }, user)).member.score,
    1,
  );
  await rpc("quiz_finish", host);
  await admin(
    "update public.classroom_rooms set expires_at=clock_timestamp()-interval '1 second' where code=$1",
    [host.code],
  );
  const another = randomUUID();
  const reopened = await rpc(
    "account_resume",
    { code: host.code, token: another },
    user,
  );
  assert.equal(reopened.member.score, 1);
  assert.equal(reopened.questions.length, 1);
});

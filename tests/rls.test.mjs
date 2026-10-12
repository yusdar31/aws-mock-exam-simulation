import { test, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { PGlite } from "@electric-sql/pglite";
const db = new PGlite();
await db.exec(`CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role;
 CREATE SCHEMA auth; CREATE TABLE auth.users(id uuid primary key,raw_user_meta_data jsonb default '{}');
 CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT (current_setting('request.jwt.claims',true)::jsonb->>'sub')::uuid $$;
 CREATE FUNCTION auth.jwt() RETURNS jsonb LANGUAGE sql STABLE AS $$ SELECT current_setting('request.jwt.claims',true)::jsonb $$;
 GRANT USAGE ON SCHEMA auth TO anon,authenticated; GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA auth TO anon,authenticated;`);
const migration = fs.readFileSync(
  "supabase/migrations/20261013_exam_studio.sql",
  "utf8",
);
await db.exec(migration);
await db.exec(migration);
const student = "11111111-1111-4111-8111-111111111111",
  other = "22222222-2222-4222-8222-222222222222",
  coach = "33333333-3333-4333-8333-333333333333";
await db.query(
  "INSERT INTO auth.users(id,raw_user_meta_data) VALUES($1,'{\"name\":\"Learner\"}'),($2,'{}'),($3,'{}')",
  [student, other, coach],
);
after(() => db.close());
async function actor(id, role = "authenticated", appRole = "student") {
  await db.exec("RESET ROLE");
  await db.query("SELECT set_config('request.jwt.claims',$1,false)", [
    JSON.stringify({ sub: id, app_metadata: { role: appRole } }),
  ]);
  await db.exec(`SET ROLE ${role}`);
}
const insertHistory = (owner, attempt, assignment = null) =>
  db.query(
    "INSERT INTO public.exam_history(user_id,attempt_id,exam_type,submitted_at,score,total_questions,score_rate,duration_seconds,assignment_id) VALUES($1,$2,'ccp',1000,1,1,100,10,$3)",
    [owner, attempt, assignment],
  );
test("migration is repeatable; anonymous cannot read history", async () => {
  await actor(null, "anon");
  await assert.rejects(
    db.query("SELECT * FROM public.exam_history"),
    /permission denied/,
  );
});
test("student cannot insert or read another student history", async () => {
  await actor(student);
  await insertHistory(student, "own-attempt");
  await assert.rejects(insertHistory(other, "forged"), /row-level security/);
  assert.equal(
    (await db.query("SELECT * FROM public.exam_history")).rows.length,
    1,
  );
  await actor(other);
  assert.equal(
    (await db.query("SELECT * FROM public.exam_history")).rows.length,
    0,
  );
  await assert.rejects(
    db
      .query(
        "UPDATE public.exam_history SET user_id=$1 WHERE attempt_id='own-attempt' RETURNING *",
        [other],
      )
      .then((r) => {
        if (!r.rows.length) throw new Error("no unauthorized rows changed");
      }),
  );
});
test("sessions are user-scoped and stale timestamps cannot replace newer snapshots", async () => {
  await actor(student);
  const snapshot = { id: "active-attempt", userId: student };
  await db.query("INSERT INTO public.exam_sessions VALUES($1,$2,100)", [
    student,
    snapshot,
  ]);
  await db.query(
    "UPDATE public.exam_sessions SET updated_at=50 WHERE user_id=$1",
    [student],
  );
  assert.equal(
    (await db.query("SELECT updated_at FROM public.exam_sessions")).rows[0]
      .updated_at,
    100,
  );
  await actor(other);
  assert.equal(
    (await db.query("SELECT * FROM public.exam_sessions")).rows.length,
    0,
  );
  await assert.rejects(
    db.query("INSERT INTO public.exam_sessions VALUES($1,$2,200)", [
      other,
      snapshot,
    ]),
    /row-level security/,
  );
});
test("resubmission cannot overwrite an already submitted score", async () => {
  await actor(student);
  await db.query(
    "UPDATE public.exam_history SET score_rate=0 WHERE attempt_id='own-attempt'",
  );
  assert.equal(
    (
      await db.query(
        "SELECT score_rate FROM public.exam_history WHERE attempt_id='own-attempt'",
      )
    ).rows[0].score_rate,
    100,
  );
});
let batch, assignment;
test("only coaches create batches; joining is controlled by invitation code", async () => {
  await actor(student);
  await assert.rejects(
    db.query(
      "INSERT INTO public.batches(name,coach_id) VALUES('Forbidden',$1)",
      [student],
    ),
    /row-level security/,
  );
  await actor(coach, "authenticated", "coach");
  const b = await db.query(
    "INSERT INTO public.batches(name,coach_id) VALUES('Batch 17',$1) RETURNING *",
    [coach],
  );
  batch = b.rows[0];
  const a = await db.query(
    "INSERT INTO public.assignments(batch_id,title,config,due_at) VALUES($1,'Mock 1','{}',now()+interval '1 day') RETURNING id",
    [batch.id],
  );
  assignment = a.rows[0].id;
  await actor(student);
  assert.equal((await db.query("SELECT * FROM public.batches")).rows.length, 0);
  await assert.rejects(
    db.query("SELECT public.join_batch($1)", ["wrong-code"]),
    /Kode kelas/,
  );
  await db.query("SELECT public.join_batch($1)", [batch.join_code]);
  assert.equal(
    (await db.query("SELECT * FROM public.assignments")).rows.length,
    1,
  );
});
test("only the assigned-batch coach can read class reports", async () => {
  await actor(student);
  await insertHistory(student, "class-attempt", assignment);
  await assert.rejects(
    db.query("SELECT * FROM public.batch_report($1)", [batch.id]),
    /Akses ditolak/,
  );
  await actor(coach, "authenticated", "coach");
  const report = await db.query("SELECT * FROM public.batch_report($1)", [
    batch.id,
  ]);
  assert.equal(report.rows.length, 1);
  assert.equal(report.rows[0].name, "Learner");
  // General coach role does not authorize unrelated classes or private attempts.
  assert.equal(
    (await db.query("SELECT * FROM public.exam_history")).rows.length,
    1,
  );
  await actor(other);
  await assert.rejects(
    db.query("SELECT * FROM public.batch_report($1)", [batch.id]),
    /Akses ditolak/,
  );
  await assert.rejects(
    insertHistory(other, "outside-class", assignment),
    /row-level security/,
  );
});

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const js = ts.transpileModule(
  fs
    .readFileSync("src/lib/exam.ts", "utf8")
    .replace(
      /import catalog from .*?;/,
      "const catalog = " +
        fs.readFileSync("src/data/certifications.json", "utf8") +
        ";",
    ),
  {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2023,
    },
  },
).outputText;
const {
  quotas,
  selectQuestions,
  shuffle,
  makeAttempt,
  remaining,
  dueQuestions,
  answered,
  isSession,
} = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);
for (const type of ["ccp", "saa"])
  for (const lang of ["id", "en"])
    test(`65 unique blueprint questions: ${type}/${lang}`, () => {
      const pool = JSON.parse(
        fs.readFileSync(`src/data/banks/${type}-${lang}.json`),
      );
      const config = {
        examType: type,
        lang,
        mode: "simulation",
        duration: type === "ccp" ? 90 : 130,
        limit: 65,
        domains: [],
      };
      const sample = selectQuestions(pool, config);
      assert.equal(sample.length, 65);
      assert.equal(new Set(sample.map((q) => q.id)).size, 65);
      for (const [domain, count] of Object.entries(quotas(type)))
        assert.equal(sample.filter((q) => q.domain === domain).length, count);
      for (const q of sample) {
        assert.equal(q.lang, lang);
        assert.equal(q.examType, type);
        assert.ok(
          q.correctAnswers.every((id) => q.options.some((o) => o.id === id)),
        );
      }
    });
test("reject empty, insufficient and invalid practice selections before starting", () => {
  const config = {
    examType: "saa",
    lang: "id",
    mode: "practice",
    limit: 10,
    domains: [],
    duration: 0,
  };
  assert.throws(() => selectQuestions([], config), /Tidak ada/);
  assert.throws(
    () => selectQuestions([], { ...config, mode: "simulation" }),
    /membutuhkan/,
  );
  assert.throws(() => selectQuestions([], { ...config, limit: 0 }), /1–200/);
});
test("Fisher–Yates preserves input and never duplicates entries", () => {
  const input = [1, 2, 3, 4];
  const copy = shuffle(input, () => 0);
  assert.deepEqual(input, [1, 2, 3, 4]);
  assert.deepEqual([...copy].sort(), input);
  assert.notDeepEqual(copy, input);
});
test("untimed stays null and timed sessions expire against absolute deadline", () => {
  assert.equal(remaining({ deadline: null }, 1000), null);
  assert.equal(remaining({ deadline: 5000 }, 1000), 4);
  assert.equal(remaining({ deadline: 5000 }, 7000), 0);
});
test("multiple-answer completion requires the required count", () => {
  const q = { id: "multiple", correctAnswers: ["A", "B"] };
  assert.equal(answered(q, { multiple: ["A"] }), false);
  assert.equal(answered(q, { multiple: ["A", "C"] }), true);
});
test("attempt captures answers, question version and exact domain performance", () => {
  const q = {
    id: "one",
    domain: "Cloud Concepts",
    correctAnswers: ["B"],
    version: 2,
  };
  const session = {
    id: "attempt",
    userId: "user",
    config: { examType: "ccp", lang: "id", mode: "practice" },
    questions: [q],
    answers: { one: ["B"] },
    elapsed: 12,
    questionTimes: { one: 12 },
  };
  const result = makeAttempt(session, 1000);
  assert.equal(result.id, "attempt");
  assert.equal(result.scoreRate, 100);
  assert.equal(result.durationSeconds, 12);
  assert.equal(result.session.questions[0].version, 2);
  assert.equal(result.domainPerformance[0].correct, 1);
});
test("scheduled review stays within language and certification and delays mastered items", () => {
  const q = { id: "one", correctAnswers: ["A"] };
  const a = {
    submittedAt: 1000,
    examType: "ccp",
    lang: "id",
    session: { questions: [q], answers: { one: ["B"] } },
  };
  assert.equal(dueQuestions([a], "ccp", "id", 1001).length, 1);
  assert.equal(dueQuestions([a], "saa", "id", 1001).length, 0);
  assert.equal(dueQuestions([a], "ccp", "en", 1001).length, 0);
  const correct = { ...a, session: { ...a.session, answers: { one: ["A"] } } };
  assert.equal(dueQuestions([correct], "ccp", "id", 1001).length, 0);
});

test("malformed persisted sessions are rejected before rendering", () => {
  assert.equal(isSession(null), false);
  assert.equal(
    isSession({
      id: "bad",
      userId: "user",
      config: {
        examType: "ccp",
        lang: "id",
        mode: "practice",
        limit: 1,
        duration: 0,
        domains: [],
      },
      questions: [
        {
          id: "bad",
          prompt: "bad",
          options: [null, null, null, null],
          correctAnswers: ["A"],
        },
      ],
    }),
    false,
  );
});

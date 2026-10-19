import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
const js = ts.transpileModule(
  readFileSync("src/lib/classroomResults.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2023,
    },
  },
).outputText;
const { rankParticipants, answerOutcome } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);
test("classroom ranking sorts descending and shares rank for ties without mutating the roster", () => {
  const roster = [
    { id: "z", name: "Zara", score: 1 },
    { id: "b", name: "Bob", score: 3 },
    { id: "a", name: "Alice", score: 3 },
    { id: "n", name: "Nina", score: 0 },
  ];
  const original = structuredClone(roster);
  assert.deepEqual(
    rankParticipants(roster).map((p) => [p.name, p.rank, p.score]),
    [
      ["Alice", 1, 3],
      ["Bob", 1, 3],
      ["Zara", 3, 1],
      ["Nina", 4, 0],
    ],
  );
  assert.deepEqual(roster, original);
  assert.deepEqual(rankParticipants([]), []);
});
test("host review distinguishes empty, partial, incorrect and complete multiple answers independent of order", () => {
  const q = { correctAnswers: ["A", "C"] };
  assert.equal(answerOutcome(q), "unanswered");
  assert.equal(answerOutcome(q, []), "unanswered");
  assert.equal(answerOutcome(q, ["A"]), "incorrect");
  assert.equal(answerOutcome(q, ["A", "B"]), "incorrect");
  assert.equal(answerOutcome(q, ["A", "A"]), "incorrect");
  assert.equal(answerOutcome(q, ["C", "A"]), "correct");
  assert.equal(answerOutcome({ correctAnswers: ["B"] }, ["B"]), "correct");
});

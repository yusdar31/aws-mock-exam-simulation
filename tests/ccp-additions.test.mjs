import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { buildCcp20261102 } from "../scripts/curated/ccp-20261102.mjs";
import {
  normalizeQuestion,
  questionIssues,
} from "../backend/src/services/questionSchema.js";
import gateway from "../api/questions/[...path].js";

const banks = Object.fromEntries(
  ["id", "en"].map((lang) => [
    lang,
    JSON.parse(readFileSync(`src/data/banks/ccp-${lang}.json`, "utf8")),
  ]),
);
const hashes = {
  id: "8d2e96ca5881be3f0fdcd1ffedb2f8498c459e0c693373dd77ed239b9f2bcbff",
  en: "0896fe8994f53f24b92796a100294d98f807c71bc90fcb275b9766d5a65c8850",
};
for (const lang of ["id", "en"])
  test(`100 new CCP ${lang} questions preserve previous content, cover all domains and have complete rationales`, () => {
    const questions = buildCcp20261102(lang),
      bank = banks[lang];
    assert.equal(questions.length, 100);
    assert.equal(bank.length, lang === "id" ? 495 : 238);
    assert.equal(bank.filter((q) => q.status === "approved").length, 238);
    assert.equal(
      createHash("sha256")
        .update(
          JSON.stringify(bank.filter((q) => !q.id.startsWith("ccp-scenario-"))),
        )
        .digest("hex"),
      hashes[lang],
    );
    assert.deepEqual(
      bank.filter((q) => q.id.startsWith("ccp-scenario-")),
      questions,
    );
    assert.equal(new Set(bank.map((q) => q.id)).size, bank.length);
    const normalize = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
    assert.equal(
      new Set(bank.map((q) => normalize(q.prompt))).size,
      bank.length,
    );
    const counts = {};
    for (const q of questions) {
      assert.deepEqual(questionIssues(normalizeQuestion(q)), [], q.id);
      counts[q.domain] = (counts[q.domain] || 0) + 1;
      assert.equal(q.difficulty, "foundational");
      assert.equal(q.verifiedAt, "2026-11-02");
      assert.ok(q.prompt.length <= 600, q.id);
      assert.equal(
        new Set(Object.values(q.optionExplanations)).size,
        q.options.length,
        q.id,
      );
      if (q.type === "multiple")
        assert.ok(
          q.prompt.includes(
            lang === "en" ? "Choose 2 answers" : "Pilih 2 jawaban",
          ),
        );
    }
    assert.deepEqual(Object.values(counts), [24, 30, 34, 12]);
    assert.equal(questions.filter((q) => q.type === "multiple").length, 7);
    assert.equal(
      new Set(
        questions
          .filter((q) => q.type === "single")
          .map((q) => q.correctAnswers[0]),
      ).size,
      4,
    );
  });

test("new CCP translations have one-to-one IDs, matching option order and identical answer keys", () => {
  const id = buildCcp20261102("id"),
    en = buildCcp20261102("en");
  for (const [i, q] of id.entries()) {
    assert.equal(q.id.replace("-id-", "-en-"), en[i].id);
    assert.deepEqual(q.correctAnswers, en[i].correctAnswers);
    assert.deepEqual(
      q.options.map((o) => o.id),
      en[i].options.map((o) => o.id),
    );
    assert.equal(q.topic, en[i].topic);
    assert.equal(q.domain, en[i].domain);
    assert.notEqual(q.prompt, en[i].prompt);
    assert.equal(q.sourceUrl, en[i].sourceUrl);
  }
});

test("release API paginates all 238 reviewed CCP questions in both languages", async () => {
  const upstream = process.env.QUESTION_API_ORIGIN;
  delete process.env.QUESTION_API_ORIGIN;
  try {
    for (const lang of ["id", "en"]) {
      const all = [];
      for (let page = 1; page <= 3; page++) {
        let body, status;
        await gateway(
          {
            method: "GET",
            headers: {},
            url: `/api/questions/approved?examType=ccp&lang=${lang}&limit=100&page=${page}`,
          },
          {
            setHeader() {},
            status(code) {
              status = code;
              return this;
            },
            json(value) {
              body = value;
            },
          },
        );
        assert.equal(status, 200);
        assert.equal(body.total, 238);
        all.push(...body.items);
      }
      assert.deepEqual(
        new Set(all.map((q) => q.id)),
        new Set(
          banks[lang].filter((q) => q.status === "approved").map((q) => q.id),
        ),
      );
    }
  } finally {
    if (upstream === undefined) delete process.env.QUESTION_API_ORIGIN;
    else process.env.QUESTION_API_ORIGIN = upstream;
  }
});

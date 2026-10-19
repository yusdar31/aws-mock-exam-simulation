import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import {
  normalizeQuestion,
  questionIssues,
} from "../backend/src/services/questionSchema.js";
import gateway from "../api/questions/[...path].js";
const catalog = JSON.parse(
  fs.readFileSync("src/data/certifications.json", "utf8"),
);
const code = ts.transpileModule(
  fs
    .readFileSync("src/lib/exam.ts", "utf8")
    .replace(
      /import catalog from .*?;/,
      "const catalog=" + JSON.stringify(catalog) + ";",
    ),
  { compilerOptions: { module: ts.ModuleKind.ESNext } },
).outputText;
const { quotas, selectQuestions } = await import(
  "data:text/javascript;base64," + Buffer.from(code).toString("base64")
);
test("catalog quotas have correct totals including GCP and fractional domain weights", () => {
  for (const [type, c] of Object.entries(catalog))
    for (const count of [c.questions, 13, 65])
      assert.equal(
        Object.values(quotas(type, count)).reduce((a, b) => a + b, 0),
        count,
      );
  assert.equal(catalog["gcp-ace"].questions, 50);
  assert.deepEqual(catalog["gcp-ace"].languages, ["id"]);
});
test("AWS repeated simulations prefer unseen questions within every domain", () => {
  for (const type of ["ccp", "saa"]) {
    const pool = JSON.parse(
      fs.readFileSync(`src/data/banks/${type}-en.json`, "utf8"),
    );
    const config = {
      examType: type,
      lang: "en",
      mode: "simulation",
      domains: [],
      limit: 65,
      duration: 0,
    };
    const first = selectQuestions(pool, config),
      recent = first.map((q) => q.id),
      second = selectQuestions(pool, config, recent);
    assert.equal(second.length, 65);
    assert.equal(second.filter((q) => recent.includes(q.id)).length, 0);
    assert.ok(pool.length >= 130);
  }
});
test("new-only practice rejects exhausted content and reviewed filtering excludes archives", () => {
  const pool = JSON.parse(
    fs.readFileSync("src/data/banks/ccp-id.json", "utf8"),
  );
  const config = {
    examType: "ccp",
    lang: "id",
    mode: "practice",
    domains: Object.keys(catalog.ccp.blueprint),
    limit: 10,
    duration: 0,
    content: "new",
  };
  assert.throws(() =>
    selectQuestions(
      pool,
      config,
      pool.map((q) => q.id),
    ),
  );
  assert.ok(
    selectQuestions(pool, { ...config, content: "reviewed" }).every(
      (q) => q.verifiedAt,
    ),
  );
});
test("GCP editorial schema preserves provider and accepts Google references", () => {
  const q = normalizeQuestion({
    examType: "gcp-ace",
    lang: "id",
    domain: Object.keys(catalog["gcp-ace"].blueprint)[0],
    prompt: "Atur zona default CLI",
    options: ["A", "B", "C", "D"].map((id) => ({ id, text: id })),
    correctAnswers: ["A"],
    explanation: "Penjelasan",
    sourceUrl: "https://cloud.google.com/sdk/gcloud/reference/config/set",
    verifiedAt: "2026-10-18",
    optionExplanations: {
      A: "Konfigurasi zona",
      B: "Konfigurasi project",
      C: "Daftar akun",
      D: "Daftar region",
    },
  });
  assert.equal(q.examType, "gcp-ace");
  assert.deepEqual(questionIssues(q), []);
  assert.ok(
    questionIssues({
      ...q,
      sourceUrl: "https://cloud.google.com.evil.invalid/fake",
    }).includes("missing_google_reference"),
  );
});
test("release bank gateway returns validated paginated data without a configured central service", async () => {
  const previous = process.env.QUESTION_API_ORIGIN;
  delete process.env.QUESTION_API_ORIGIN;
  try {
    for (const [query, status] of [
      ["examType=ccp&lang=en&page=2&limit=10", 200],
      ["examType=gcp-ace&lang=en", 400],
      ["examType=__proto__&lang=id", 400],
    ]) {
      let result;
      const response = {
        setHeader() {},
        status(code) {
          this.code = code;
          return this;
        },
        json(body) {
          result = { status: this.code, body };
        },
      };
      await gateway(
        { url: "/api/questions/approved?" + query, method: "GET", headers: {} },
        response,
      );
      assert.equal(result.status, status);
      if (status === 200) {
        assert.equal(result.body.items.length, 10);
        assert.equal(result.body.source, "release");
        assert.ok(result.body.items.every((q) => q.lang === "en"));
      }
    }
  } finally {
    if (previous === undefined) delete process.env.QUESTION_API_ORIGIN;
    else process.env.QUESTION_API_ORIGIN = previous;
  }
});

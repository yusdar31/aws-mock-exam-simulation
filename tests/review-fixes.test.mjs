import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import { handleReports } from "../server/reportGateway.js";
const transpile = (code) =>
  ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2023,
    },
  }).outputText;
const url = (code) =>
  "data:text/javascript;base64," + Buffer.from(code).toString("base64");
const examUrl = url(
  transpile(
    fs
      .readFileSync("src/lib/exam.ts", "utf8")
      .replace(
        /import catalog from .*?;/,
        () =>
          `const catalog=${fs.readFileSync("src/data/certifications.json", "utf8")};`,
      ),
  ),
);
const focused = url(
  transpile(fs.readFileSync("src/lib/focusedPractice.ts", "utf8")).replace(
    /from ["']\.\/exam["']/,
    () => `from ${JSON.stringify(examUrl)}`,
  ),
);
const { focusedPractice } = await import(focused);
test("focus practice rotates paused packets and respects reviewed/new/archive choices", () => {
  const data = new Map();
  globalThis.sessionStorage = {
    getItem: (k) => data.get(k) || null,
    setItem: (k, v) => data.set(k, v),
  };
  const pool = JSON.parse(
    fs.readFileSync("src/data/banks/ccp-id.json", "utf8"),
  );
  const config = {
    examType: "ccp",
    lang: "id",
    mode: "practice",
    duration: 0,
    limit: 10,
    domains: ["Cloud Concepts"],
    content: "reviewed",
  };
  const first = focusedPractice(pool, config, [], "Cloud Concepts"),
    second = focusedPractice(pool, config, [], "Cloud Concepts");
  assert.equal(first.length, 10);
  assert.equal(second.length, 10);
  assert.equal(
    second.filter((q) => first.some((v) => v.id === q.id)).length,
    0,
  );
  assert.ok(
    [...first, ...second].every(
      (q) => q.verifiedAt && q.domain === "Cloud Concepts",
    ),
  );
  const seen = [
    {
      examType: "ccp",
      lang: "id",
      submittedAt: Date.now(),
      session: { questions: pool, answers: {} },
    },
  ];
  assert.deepEqual(
    focusedPractice(
      pool,
      { ...config, content: "new" },
      seen,
      "Cloud Concepts",
    ),
    [],
  );
  assert.ok(
    focusedPractice(
      pool,
      { ...config, content: "archive" },
      [],
      "Cloud Concepts",
    ).every((q) => !q.verifiedAt),
  );
});
test("deeper bilingual teaching cases retain paired identifiers, complete option explanations and valid source metadata", () => {
  for (const type of ["ccp", "saa"]) {
    const id = JSON.parse(
        fs.readFileSync(`src/data/banks/${type}-id.json`, "utf8"),
      ),
      en = JSON.parse(
        fs.readFileSync(`src/data/banks/${type}-en.json`, "utf8"),
      ).filter((q) => q.version === 3);
    assert.equal(en.length, 4);
    const cases = id.filter((q) =>
      en.some((pair) => pair.id === q.id.replace("-id-", "-en-")),
    );
    assert.equal(cases.length, 4);
    assert.equal(new Set(cases.map((q) => q.domain)).size, 4);
    for (const q of cases) {
      const pair = en.find((v) => v.id === q.id.replace("-id-", "-en-"));
      assert.ok(pair);
      assert.equal(pair.domain, q.domain);
      assert.ok(q.prompt.length > 40 && q.prompt.length <= 600);
      assert.ok(q.version >= pair.version);
      assert.ok(q.options.every((o) => q.optionExplanations[o.id]));
      assert.equal(new URL(q.sourceUrl).hostname, "docs.aws.amazon.com");
    }
  }
});
test("report gateway maps health/submission/status/admin actions and forwards real authentication only to Supabase", async () => {
  const previous = {
    url: process.env.VITE_SUPABASE_URL,
    key: process.env.VITE_SUPABASE_ANON_KEY,
    fetch: globalThis.fetch,
  };
  process.env.VITE_SUPABASE_URL = "https://database.invalid";
  process.env.VITE_SUPABASE_ANON_KEY = "test-public-key";
  const calls = [];
  globalThis.fetch = async (target, init) => {
    calls.push({
      target,
      ...JSON.parse(init.body),
      authorization: init.headers.Authorization,
    });
    return new Response(
      JSON.stringify({ ready: true, received: true, items: [] }),
    );
  };
  const call = async (path, method, body = {}, authorization) => {
    let result;
    const response = {
      setHeader() {},
      status(status) {
        this.statusCode = status;
        return this;
      },
      json(data) {
        result = { status: this.statusCode, data };
      },
    };
    await handleReports(
      { method, body, headers: authorization ? { authorization } : {} },
      response,
      new URL(path, "https://app.invalid"),
    );
    return result;
  };
  try {
    assert.equal(
      (await call("/api/questions/reports/health", "GET")).status,
      200,
    );
    assert.equal(
      (await call("/api/questions/reports", "POST", { id: "example" })).status,
      201,
    );
    await call("/api/questions/reports/status", "POST", { items: [] });
    await call(
      "/api/questions/reports/example",
      "PATCH",
      { status: "resolved" },
      "Bearer verified-user-token",
    );
    assert.deepEqual(
      calls.map((v) => v.action),
      ["health", "submit", "status", "resolve"],
    );
    assert.equal(calls.at(-1).payload.id, "example");
    assert.equal(calls.at(-1).authorization, "Bearer verified-user-token");
    globalThis.fetch = async () =>
      new Response(
        JSON.stringify({
          code: "P0001",
          message: "Hanya admin yang dapat meninjau laporan.",
        }),
        { status: 400 },
      );
    assert.equal((await call("/api/questions/reports", "GET")).status, 403);
    globalThis.fetch = async () =>
      new Response(JSON.stringify({ code: "PGRST202" }), { status: 404 });
    assert.equal(
      (await call("/api/questions/reports/health", "GET")).status,
      503,
    );
  } finally {
    globalThis.fetch = previous.fetch;
    for (const [name, value] of [
      ["VITE_SUPABASE_URL", previous.url],
      ["VITE_SUPABASE_ANON_KEY", previous.key],
    ]) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  }
});

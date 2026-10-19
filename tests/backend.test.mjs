import { test, after } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
process.env.DATA_DIR = mkdtempSync(join(tmpdir(), "exam-sqlite-test-"));
process.env.SEED_BUILTINS = "false";
process.env.GEMINI_API_KEY = "";
process.env.GEMINI_MODEL = "";
const { createApp } = await import("../backend/src/app.js");
const { insertQuestions, getQuestion, database } =
  await import("../backend/src/database.js");
const { normalizeQuestion, questionIssues } =
  await import("../backend/src/services/questionSchema.js");
const resolver = async (token) => {
  if (token === "admin") return { id: "admin-user", role: "admin" };
  if (token === "student") return { id: "student-user", role: "student" };
  throw Object.assign(new Error("Invalid token"), { status: 401 });
};
const server = createApp({ resolver }).listen(0, "127.0.0.1");
await new Promise((resolve) => server.once("listening", resolve));
const base = `http://127.0.0.1:${server.address().port}/api`;
after(() => {
  server.close();
  database.close();
});
const request = (path, token, method = "GET", body) =>
  fetch(base + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
const valid = normalizeQuestion({
  id: "fixture",
  examType: "ccp",
  lang: "id",
  domain: "Cloud Concepts",
  status: "draft",
  prompt: "Apa itu elastisitas?",
  options: ["A", "B", "C", "D"].map((id) => ({ id, text: id })),
  correctAnswers: ["A"],
  explanation: "Kapasitas menyesuaikan demand.",
  sourceUrl:
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  verifiedAt: "2026-10-13",
  optionExplanations: {
    A: "Sesuai.",
    B: "Tidak sesuai.",
    C: "Tidak sesuai.",
    D: "Tidak sesuai.",
  },
});
test("participant reports are durable, idempotent and only readable or resolved by admins", async () => {
  const report = {
    id: "00000000-0000-4000-8000-000000000001",
    questionId: "fixture",
    version: 1,
    reason: "answer",
    detail: "Kunci jawaban tampaknya perlu diperiksa.",
  };
  assert.equal(
    (await request("/questions/reports", null, "POST", report)).status,
    201,
  );
  assert.equal(
    (await request("/questions/reports", null, "POST", report)).status,
    201,
  );
  assert.equal((await request("/questions/reports", null)).status, 401);
  assert.equal((await request("/questions/reports", "student")).status, 403);
  const list = await (await request("/questions/reports", "admin")).json();
  assert.equal(list.items.filter((r) => r.id === report.id).length, 1);
  assert.equal(
    (
      await request(`/questions/reports/${report.id}`, "student", "PATCH", {
        status: "resolved",
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await request(`/questions/reports/${report.id}`, "admin", "PATCH", {
        status: "resolved",
      })
    ).status,
    200,
  );
  assert.equal(
    (
      await request("/questions/reports", null, "POST", {
        ...report,
        id: "invalid",
      })
    ).status,
    400,
  );
});
test("anonymous and student cannot access or mutate administration", async () => {
  for (const [token, status] of [
    [null, 401],
    ["student", 403],
    ["bad", 401],
  ]) {
    const r = await request("/questions", token);
    assert.equal(r.status, status);
    const mutation = await request(
      "/questions/fixture",
      "" + (token || ""),
      "PUT",
      { prompt: "bad" },
    );
    assert.equal(mutation.status, status);
  }
});
test("language and certification survive validation, approval and paginated retrieval", async () => {
  insertQuestions([valid]);
  assert.deepEqual(questionIssues(valid), []);
  const approve = await request("/questions/fixture/approve", "admin", "POST", {
    version: 1,
  });
  assert.equal(approve.status, 200);
  assert.equal(getQuestion("fixture").lang, "id");
  const response = await request(
    "/questions/approved?examType=ccp&lang=id&limit=1",
  );
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(payload.total, 1);
  assert.equal(payload.items[0].examType, "ccp");
  assert.equal(payload.items[0].lang, "id");
  const english = await request("/questions/approved?examType=ccp&lang=en");
  assert.equal((await english.json()).total, 0);
});
test("publication rejects incomplete editorial data and bulk skips invalid drafts", async () => {
  const bad = normalizeQuestion({
    ...valid,
    id: "bad-fixture",
    correctAnswers: ["X"],
    sourceUrl: "",
  });
  insertQuestions([bad]);
  const r = await request("/questions/bad-fixture/approve", "admin", "POST", {
    version: 1,
  });
  assert.equal(r.status, 422);
  const bulk = await request("/questions/bulk/approve-drafts", "admin", "POST");
  const result = await bulk.json();
  assert.equal(result.approved, 0);
  assert.equal(result.skipped, 1);
});
test("optimistic versions reject stale writes without losing another edit", async () => {
  const before = getQuestion("fixture");
  const first = await request("/questions/fixture", "admin", "PUT", {
    version: before.version,
    prompt: "Updated prompt",
    status: "draft",
  });
  assert.equal(first.status, 200);
  const second = await request("/questions/fixture", "admin", "PUT", {
    version: before.version,
    prompt: "Stale prompt",
  });
  assert.equal(second.status, 409);
  assert.equal(getQuestion("fixture").prompt, "Updated prompt");
  assert.ok(
    database.prepare("SELECT count(*) AS n FROM audit_log").get().n >= 3,
  );
});
test("malformed input and unauthorized origins are rejected", async () => {
  const response = await request("/questions/import-json", "admin", "POST", {
    items: [],
  });
  assert.equal(response.status, 400);
  const origin = await fetch(base + "/questions/approved", {
    headers: { Origin: "https://untrusted.example" },
  });
  assert.equal(origin.status, 403);
});
test("unpublished built-in IDs are returned as exclusions and edits require a version", async () => {
  const response = await request("/questions/approved?examType=ccp&lang=id");
  const payload = await response.json();
  assert.ok(payload.excludedIds.includes("fixture"));
  const edit = await request("/questions/fixture", "admin", "PUT", {
    prompt: "No version",
  });
  assert.equal(edit.status, 428);
});
test("performance summary separates mobile and desktop samples", async () => {
  const response = await fetch(base + "/metrics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "LCP", value: 1900, device: "mobile" }),
  });
  assert.equal(response.status, 204);
  const summary = await request("/questions/metrics/summary", "admin");
  const data = await summary.json();
  assert.equal(data.mobile.LCP.p75, 1900);
  assert.equal(data.desktop.LCP.samples, 0);
});
test("translation requires login and fails safely without a configured model", async () => {
  const anonymous = await request("/questions/translate", null, "POST", {
    text: "Fixture",
  });
  assert.equal(anonymous.status, 401);
  const invalid = await request("/questions/translate", "student", "POST", {
    text: "",
  });
  assert.equal(invalid.status, 400);
  const unavailable = await request("/questions/translate", "student", "POST", {
    text: "Fixture",
  });
  assert.equal(unavailable.status, 503);
});

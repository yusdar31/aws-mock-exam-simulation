import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import { buildAceScenarios } from "../scripts/curated/gcp-ace-scenarios.mjs";
import { aceGuideCoverage } from "../scripts/curated/gcp-ace-coverage.mjs";
import { gearRevisedSuffixes } from "../scripts/curated/gcp-ace-gear-calibration.mjs";
import {
  normalizeQuestion,
  questionIssues,
} from "../backend/src/services/questionSchema.js";
import gateway from "../api/questions/[...path].js";

const catalog = JSON.parse(
  fs.readFileSync("src/data/certifications.json", "utf8"),
);
const source = fs
  .readFileSync("src/lib/exam.ts", "utf8")
  .replace(
    /import catalog from .*?;/,
    "const catalog=" + JSON.stringify(catalog) + ";",
  );
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { selectQuestions, quotas, isSession, canonicalDomain } = await import(
  "data:text/javascript;base64," + Buffer.from(output).toString("base64")
);
const bank = JSON.parse(
  fs.readFileSync("src/data/banks/gcp-ace-id.json", "utf8"),
);
const legacy = JSON.parse(
  fs.readFileSync("scripts/curated/gcp-ace-legacy-id.json", "utf8"),
);
const fresh = buildAceScenarios();
const normalized = (text) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

test("GEAR-style calibration keeps realistic alternatives, correct operational distinctions and revised versions", () => {
  assert.equal(gearRevisedSuffixes.length, 55);
  for (const suffix of gearRevisedSuffixes) {
    const q = fresh.find(
      (q) =>
        q.id === `ace-scenario-id-20261022-${String(suffix).padStart(3, "0")}`,
    );
    assert.ok(q);
    assert.equal(q.version, 2);
    assert.equal(q.options.length, 4);
    assert.equal(q.correctAnswers.length, 1);
    assert.equal(new Set(Object.values(q.optionExplanations)).size, 4);
  }
  for (const [suffix, answer] of [
    [39, /Vertical Pod Autoscaler/],
    [51, /IP eksternal statis/],
    [55, /Cloud Trace/],
    [58, /Cloud Profiler/],
    [71, /instance template.*managed instance group.*autoscaling/],
  ]) {
    const q = fresh.find((q) =>
      q.id.endsWith(`20261022-${String(suffix).padStart(3, "0")}`),
    );
    assert.match(
      q.options.find((o) => o.id === q.correctAnswers[0]).text,
      answer,
    );
  }
  const query = fresh.find((q) => q.id === "ace-scenario-id-20261022-065");
  assert.ok(query.options.every((o) => o.text.startsWith("SELECT ")));
  assert.match(
    query.options.find((o) => o.id === query.correctAnswers[0]).text,
    /status = 'FAILED' LIMIT 100/,
  );
  const notebook = fresh.find((q) => q.id === "ace-scenario-id-20261022-044");
  assert.ok(
    notebook.options.every(
      (o) => !/Cloud DNS|Cloud Billing|Cloud NAT/.test(o.text),
    ),
  );
});

test("ACE has representative scenarios mapped to all 94 guide considerations and all 12 objectives", () => {
  assert.equal(aceGuideCoverage.length, 94);
  assert.equal(
    new Set(aceGuideCoverage.map((row) => row.consideration)).size,
    94,
  );
  const counts = Object.fromEntries(
    [
      "1.1",
      "1.2",
      "2.1",
      "2.2",
      "2.3",
      "2.4",
      "3.1",
      "3.2",
      "3.3",
      "3.4",
      "4.1",
      "4.2",
    ].map((objective) => [
      objective,
      aceGuideCoverage.filter((row) => row.objective === objective).length,
    ]),
  );
  assert.deepEqual(
    Object.values(counts),
    [12, 4, 12, 4, 6, 2, 16, 8, 5, 14, 3, 8],
  );
  const ids = new Set(fresh.map((q) => q.id));
  for (const row of aceGuideCoverage) {
    assert.ok(row.questions.length > 0, row.consideration);
    assert.ok(
      row.questions.every((id) => ids.has(id)),
      row.consideration,
    );
  }
  assert.deepEqual(
    new Set(fresh.map((q) => q.objective)),
    new Set(Object.keys(counts)),
  );
  for (const topic of [
    "agent-runtime-managed-deployment-choice",
    "agent-runtime-runtime-identity",
    "managed-lustre-parallel-filesystem",
    "netapp-smb-file-service",
    "application-design-center-terraform",
    "database-center-fleet-health",
    "ngfw-iam-governed-tags",
    "managed-prometheus-existing-metrics",
    "cloud-hub-app-health-context",
    "gemini-monitoring-evidence-review",
  ])
    assert.ok(
      fresh.some((q) => q.topic === topic),
      topic,
    );
});

test("ACE has 171 unique original, publishable scenarios with complete option-specific rationales", () => {
  assert.equal(fresh.length, 171);
  assert.equal(bank.length, legacy.length + 171);
  assert.equal(new Set(bank.map((q) => q.id)).size, bank.length);
  assert.equal(
    new Set(bank.map((q) => normalized(q.prompt))).size,
    bank.length,
  );
  assert.equal(new Set(fresh.map((q) => q.topic)).size, 171);
  assert.deepEqual(
    bank.filter((q) => q.id.startsWith("ace-scenario-")),
    fresh,
  );
  const counts = {};
  const positions = new Set();
  for (const q of fresh) {
    assert.deepEqual(questionIssues(normalizeQuestion(q)), [], q.id);
    counts[q.domain] = (counts[q.domain] || 0) + 1;
    assert.equal(q.sourceRef, "original-practice-scenarios");
    assert.ok(/^\d\.\d$/.test(q.objective));
    assert.ok(["2026-10-21", "2026-10-22"].includes(q.verifiedAt));
    assert.equal(
      new Set(
        q.options.map((o) => o.text.toLowerCase().replace(/\s+/g, " ").trim()),
      ).size,
      q.options.length,
      q.id,
    );
    assert.equal(
      new Set(Object.values(q.optionExplanations)).size,
      q.options.length,
      q.id,
    );
    if (q.type === "multiple")
      assert.ok(q.prompt.includes(`Pilih ${q.correctAnswers.length} jawaban`));
    else positions.add(q.correctAnswers[0]);
  }
  assert.equal(positions.size, 4);
  assert.ok(fresh.some((q) => q.type === "multiple"));
  assert.deepEqual(Object.values(counts), [33, 56, 58, 24]);
});

test("ACE preserves old question IDs, prompts, options, answers and rationale while mapping old domains", () => {
  for (const old of legacy) {
    const current = bank.find((q) => q.id === old.id);
    for (const key of [
      "id",
      "prompt",
      "options",
      "correctAnswers",
      "explanation",
    ])
      assert.deepEqual(current[key], old[key], `${old.id}: ${key}`);
    assert.equal(current.domain, canonicalDomain("gcp-ace", old.domain));
  }
  const q = legacy.find((item) =>
    Object.hasOwn(catalog["gcp-ace"].domainAliases, item.domain),
  );
  const stored = {
    id: "old-ace-session",
    userId: "guest",
    config: {
      examType: "gcp-ace",
      lang: "id",
      mode: "practice",
      limit: 1,
      duration: 0,
      domains: [q.domain],
    },
    questions: [q],
    index: 0,
    answers: { [q.id]: [q.options[0].id] },
    flags: [q.id],
    deadline: null,
    remaining: null,
    elapsed: 10,
    questionTimes: {},
    savedAt: 1,
    state: "paused",
  };
  assert.ok(isSession(stored));
});

test("ACE simulations use the current four-domain 10/15/15/10 allocation and rotate two complete packets", () => {
  assert.deepEqual(Object.values(quotas("gcp-ace")), [10, 15, 15, 10]);
  const config = {
    examType: "gcp-ace",
    lang: "id",
    mode: "simulation",
    limit: 50,
    duration: 120,
    domains: [],
    content: "all",
  };
  for (let run = 0; run < 10; run++) {
    const first = selectQuestions(bank, config);
    const second = selectQuestions(
      bank,
      config,
      first.map((q) => q.id),
    );
    for (const packet of [first, second]) {
      assert.equal(packet.length, 50);
      assert.equal(new Set(packet.map((q) => q.id)).size, 50);
      for (const [domain, expected] of Object.entries(quotas("gcp-ace")))
        assert.equal(
          packet.filter((q) => q.domain === domain).length,
          expected,
        );
      assert.ok(packet.every((q) => q.id.startsWith("ace-scenario-")));
    }
    assert.equal(new Set([...first, ...second].map((q) => q.id)).size, 100);
  }
  for (const oldDomain of Object.keys(catalog["gcp-ace"].domainAliases)) {
    const selected = selectQuestions(bank, {
      ...config,
      mode: "practice",
      limit: 3,
      domains: [oldDomain],
    });
    assert.ok(
      selected.every((q) => q.domain === canonicalDomain("gcp-ace", oldDomain)),
    );
  }
});

test("release API publishes and paginates the complete new ACE bank", async () => {
  const previous = process.env.QUESTION_API_ORIGIN;
  delete process.env.QUESTION_API_ORIGIN;
  try {
    const items = [];
    for (const page of [1, 2, 3, 4, 5, 6]) {
      let body, status;
      await gateway(
        {
          method: "GET",
          headers: {},
          url: `/api/questions/approved?examType=gcp-ace&lang=id&limit=30&page=${page}`,
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
      assert.equal(body.total, 171);
      assert.equal(body.source, "release");
      items.push(...body.items);
    }
    assert.deepEqual(
      new Set(items.map((q) => q.id)),
      new Set(fresh.map((q) => q.id)),
    );
  } finally {
    if (previous === undefined) delete process.env.QUESTION_API_ORIGIN;
    else process.env.QUESTION_API_ORIGIN = previous;
  }
});

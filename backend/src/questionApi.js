import express from "express";
import crypto from "node:crypto";
import {
  listQuestions,
  readQuestions,
  insertQuestions,
  editQuestion,
  approveValidDrafts,
  audit,
  database,
  hiddenQuestionIds,
} from "./database.js";
import {
  normalizeQuestion,
  questionIssues,
} from "./services/questionSchema.js";
import { detectDuplicates } from "./services/similarity.js";
import { parseRawDump } from "./services/dumpParser.js";
import { createDraftQuestionsFromParsedEntries } from "./services/questionNormalizer.js";
import { requireUser, requireAdmin, rateLimit } from "./access.js";
export function createQuestionRouter(resolver) {
  const router = express.Router();
  const paging = (query) => ({
    page: Math.max(1, parseInt(query.page) || 1),
    limit: Math.min(200, Math.max(1, parseInt(query.limit) || 50)),
  });
  router.get("/approved", rateLimit(120), (request, response) => {
    response.set("Cache-Control", "public, max-age=60").json({
      ...listQuestions({
        ...paging(request.query),
        status: "approved",
        examType: request.query.examType,
        lang: request.query.lang,
      }),
      excludedIds: hiddenQuestionIds(
        request.query.examType,
        request.query.lang,
      ),
    });
  });
  router.post(
    "/translate",
    rateLimit(30),
    requireUser(resolver),
    rateLimit(3),
    async (request, response) => {
      const text = request.body?.text;
      if (typeof text !== "string" || !text.trim() || text.length > 5000)
        return response
          .status(400)
          .json({ error: "Teks terjemahan harus 1–5000 karakter." });
      if (!process.env.GEMINI_API_KEY || !process.env.GEMINI_MODEL)
        return response
          .status(503)
          .json({ error: "Terjemahan tambahan belum tersedia." });
      const { translateToIndonesian } =
        await import("./services/aiGenerator.js");
      response.json({ translated: await translateToIndonesian(text) });
    },
  );
  router.use(rateLimit(120), requireUser(resolver), requireAdmin, rateLimit());
  router.get("/", (request, response) =>
    response.json(
      listQuestions({
        ...paging(request.query),
        status: request.query.status,
        examType: request.query.examType,
        lang: request.query.lang,
        search: String(request.query.search || "").slice(0, 200),
      }),
    ),
  );
  router.get("/audit", (_request, response) =>
    response.json({
      items: database
        .prepare("SELECT * FROM audit_log ORDER BY id DESC LIMIT 100")
        .all(),
    }),
  );
  async function importItems(rawItems, sourceRef, actor) {
    if (!Array.isArray(rawItems) || !rawItems.length || rawItems.length > 200)
      throw Object.assign(new Error("Impor harus memuat 1–200 soal."), {
        status: 400,
      });
    if (
      rawItems.some(
        (item) => !item || typeof item !== "object" || Array.isArray(item),
      )
    )
      throw Object.assign(new Error("Setiap soal harus berupa objek JSON."), {
        status: 400,
      });
    const existing = await readQuestions(),
      items = [];
    for (const raw of rawItems) {
      const q = normalizeQuestion({
        ...raw,
        id: crypto.randomUUID(),
        status: "draft",
        sourceRef,
        version: 1,
      });
      q.issues = [
        ...questionIssues(q),
        ...detectDuplicates(q, [...existing, ...items]),
      ];
      items.push(q);
    }
    insertQuestions(items, actor);
    return { imported: items.length, items };
  }
  router.post("/import-json", async (request, response) =>
    response
      .status(201)
      .json(
        await importItems(
          request.body?.items,
          String(request.body?.sourceRef || "json-import"),
          request.user.id,
        ),
      ),
  );
  router.post("/import-dump-fast", async (request, response) => {
    const {
      rawText,
      sourceRef = "manual-import",
      examType = "saa",
      lang = "en",
    } = request.body || {};
    if (
      typeof rawText !== "string" ||
      !rawText.trim() ||
      rawText.length > 500000
    )
      return response
        .status(400)
        .json({ error: "Teks impor tidak valid atau terlalu besar." });
    const drafts = createDraftQuestionsFromParsedEntries(
      parseRawDump(rawText),
      sourceRef,
    ).map((q) => ({ ...q, examType, lang }));
    response
      .status(201)
      .json(await importItems(drafts, sourceRef, request.user.id));
  });
  router.post("/generate-ai", rateLimit(3), async (request, response) => {
    const count = Number(request.body?.count ?? 5);
    if (!Number.isInteger(count) || count < 1 || count > 15)
      return response.status(400).json({ error: "Jumlah soal AI harus 1–15." });
    const { generateQuestionsFromAI } =
      await import("./services/aiGenerator.js");
    const raw = await generateQuestionsFromAI(
      request.body?.domain || "all",
      count,
    );
    response.status(201).json(
      await importItems(
        raw.map((q) => ({ ...q, examType: "saa", lang: "en" })),
        "ai-generated-review-required",
        request.user.id,
      ),
    );
  });
  router.put("/:id", (request, response) =>
    response.json({
      item: editQuestion(request.params.id, request.body, request.user.id),
    }),
  );
  for (const [action, status] of [
    ["approve", "approved"],
    ["reject", "rejected"],
  ])
    router.post(`/:id/${action}`, (request, response) =>
      response.json({
        item: editQuestion(
          request.params.id,
          { ...request.body, status },
          request.user.id,
        ),
      }),
    );
  router.post("/bulk/approve-drafts", (request, response) =>
    response.json(approveValidDrafts(request.user.id)),
  );
  router.get("/metrics/summary", (_request, response) => {
    const entries = database
      .prepare("SELECT body FROM metrics ORDER BY id DESC LIMIT 1000")
      .all()
      .map((row) => JSON.parse(row.body));
    function summarize(group) {
      const summary = {};
      for (const name of ["LCP", "INP", "CLS"]) {
        const values = group
          .filter((e) => e.name === name)
          .map((e) => e.value)
          .sort((a, b) => a - b);
        summary[name] = {
          samples: values.length,
          p75: values.length
            ? values[Math.ceil(values.length * 0.75) - 1]
            : null,
        };
      }
      return summary;
    }
    response.json({
      all: summarize(entries),
      mobile: summarize(entries.filter((e) => e.device === "mobile")),
      desktop: summarize(entries.filter((e) => e.device === "desktop")),
    });
  });
  router.post("/audit-note", (request, response) => {
    audit(request.user.id, "note", {
      note: String(request.body?.note || "").slice(0, 1000),
    });
    response.json({ saved: true });
  });
  return router;
}

import { DatabaseSync } from "node:sqlite";
import { mkdirSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  normalizeQuestion,
  questionIssues,
} from "./services/questionSchema.js";
const dataDirectory =
  process.env.DATA_DIR ||
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../data");
mkdirSync(dataDirectory, { recursive: true });
export const database = new DatabaseSync(
  path.join(dataDirectory, "exam.sqlite"),
);
database.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
  CREATE TABLE IF NOT EXISTS questions (id TEXT PRIMARY KEY, status TEXT NOT NULL, exam_type TEXT NOT NULL, lang TEXT NOT NULL, domain TEXT NOT NULL, version INTEGER NOT NULL, body TEXT NOT NULL);
  CREATE INDEX IF NOT EXISTS questions_filter ON questions(status,exam_type,lang,domain);
  CREATE TABLE IF NOT EXISTS audit_log (id INTEGER PRIMARY KEY, actor TEXT NOT NULL, action TEXT NOT NULL, detail TEXT NOT NULL, created_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS metrics (id INTEGER PRIMARY KEY, body TEXT NOT NULL, created_at TEXT NOT NULL);`);
database.exec(
  "CREATE TABLE IF NOT EXISTS question_reports (id TEXT PRIMARY KEY, question_id TEXT NOT NULL, version INTEGER NOT NULL, reason TEXT NOT NULL, detail TEXT NOT NULL, created_at TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'open')",
);
const put = database.prepare(
  "INSERT INTO questions VALUES (?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET status=excluded.status,exam_type=excluded.exam_type,lang=excluded.lang,domain=excluded.domain,version=excluded.version,body=excluded.body",
);
function putQuestion(item) {
  put.run(
    item.id,
    item.status,
    item.examType,
    item.lang,
    item.domain,
    item.version,
    JSON.stringify(item),
  );
}
if (
  !database
    .prepare("SELECT value FROM metadata WHERE key='json_migrated'")
    .get()
) {
  const legacy = path.join(dataDirectory, "questions.json");
  const items = existsSync(legacy)
    ? JSON.parse(readFileSync(legacy, "utf8"))
    : [];
  database.exec("BEGIN IMMEDIATE");
  try {
    for (const item of items) {
      const q = normalizeQuestion(item);
      q.issues = questionIssues(q);
      if (q.issues.length) q.status = "draft";
      putQuestion(q);
    }
    database
      .prepare("INSERT INTO metadata VALUES (?,?)")
      .run("json_migrated", new Date().toISOString());
    database.exec("COMMIT");
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}
const builtinSeed = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../data/builtin-seed.json",
);
if (process.env.SEED_BUILTINS !== "false" && existsSync(builtinSeed)) {
  const seed = JSON.parse(readFileSync(builtinSeed, "utf8"));
  const insert = database.prepare(
    "INSERT OR IGNORE INTO questions VALUES (?,?,?,?,?,?,?)",
  );
  database.exec("BEGIN IMMEDIATE");
  try {
    for (const raw of seed) {
      const q = normalizeQuestion(raw);
      q.issues = questionIssues(q);
      if (!q.issues.length)
        insert.run(
          q.id,
          q.status,
          q.examType,
          q.lang,
          q.domain,
          q.version,
          JSON.stringify(q),
        );
    }
    database.exec("COMMIT");
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}
export function hiddenQuestionIds(examType, lang) {
  const conditions = ["status!='approved'"],
    values = [];
  for (const [column, value] of [
    ["exam_type", examType],
    ["lang", lang],
  ])
    if (value && value !== "all") {
      conditions.push(`${column}=?`);
      values.push(value);
    }
  return database
    .prepare(`SELECT id FROM questions WHERE ${conditions.join(" AND ")}`)
    .all(...values)
    .map((row) => row.id);
}
export function listQuestions({
  status,
  examType,
  lang,
  search = "",
  page = 1,
  limit = 50,
} = {}) {
  const clauses = [],
    values = [];
  for (const [column, value] of [
    ["status", status],
    ["exam_type", examType],
    ["lang", lang],
  ])
    if (value && value !== "all") {
      clauses.push(`${column}=?`);
      values.push(value);
    }
  if (search) {
    clauses.push("json_extract(body,'$.prompt') LIKE ?");
    values.push(`%${search}%`);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const total = database
    .prepare(`SELECT count(*) AS total FROM questions ${where}`)
    .get(...values).total;
  const items = database
    .prepare(
      `SELECT body FROM questions ${where} ORDER BY rowid DESC LIMIT ? OFFSET ?`,
    )
    .all(...values, limit, (page - 1) * limit)
    .map((row) => JSON.parse(row.body));
  return { items, total, page, limit };
}
export async function readQuestions() {
  return database
    .prepare("SELECT body FROM questions")
    .all()
    .map((row) => JSON.parse(row.body));
}
export function getQuestion(id) {
  const row = database.prepare("SELECT body FROM questions WHERE id=?").get(id);
  return row ? JSON.parse(row.body) : null;
}
export function audit(actor, action, detail) {
  database
    .prepare(
      "INSERT INTO audit_log(actor,action,detail,created_at) VALUES(?,?,?,?)",
    )
    .run(actor, action, JSON.stringify(detail), new Date().toISOString());
}
export function insertQuestions(items, actor = "scheduler") {
  database.exec("BEGIN IMMEDIATE");
  try {
    for (const item of items) putQuestion(item);
    audit(actor, "import", { ids: items.map((q) => q.id) });
    database.exec("COMMIT");
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}
export function editQuestion(id, input, actor) {
  database.exec("BEGIN IMMEDIATE");
  try {
    const old = getQuestion(id);
    if (!old)
      throw Object.assign(new Error("Soal tidak ditemukan."), { status: 404 });
    if (!Number.isInteger(input.version))
      throw Object.assign(
        new Error("Versi soal wajib dikirim. Muat ulang sebelum mengedit."),
        { status: 428 },
      );
    if (input.version !== old.version)
      throw Object.assign(
        new Error(
          "Soal telah diubah pengguna lain. Muat ulang sebelum menyimpan.",
        ),
        { status: 409 },
      );
    const item = normalizeQuestion({
      ...old,
      ...input,
      id,
      version: old.version + 1,
      updatedAt: new Date().toISOString(),
    });
    item.issues = questionIssues(item);
    if (item.status === "approved" && item.issues.length)
      throw Object.assign(
        new Error(`Belum dapat dipublikasikan: ${item.issues.join(", ")}`),
        { status: 422 },
      );
    putQuestion(item);
    audit(actor, "edit", {
      id,
      beforeVersion: old.version,
      version: item.version,
      status: item.status,
    });
    database.exec("COMMIT");
    return item;
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}
export function approveValidDrafts(actor) {
  database.exec("BEGIN IMMEDIATE");
  try {
    let approved = 0,
      skipped = 0;
    for (const row of database
      .prepare("SELECT body FROM questions WHERE status='draft'")
      .all()) {
      const q = JSON.parse(row.body);
      q.issues = questionIssues(q);
      if (q.issues.length) {
        skipped++;
        continue;
      }
      putQuestion({
        ...q,
        status: "approved",
        version: q.version + 1,
        updatedAt: new Date().toISOString(),
      });
      approved++;
    }
    audit(actor, "bulk-approve", { approved, skipped });
    database.exec("COMMIT");
    return { approved, skipped };
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}

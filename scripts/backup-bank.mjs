import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
if (existsSync("backend/.env")) process.loadEnvFile("backend/.env");
const directory = resolve(process.env.DATA_DIR || "backend/data");
const input = resolve(directory, "exam.sqlite");
if (!existsSync(input))
  throw new Error("Database belum dibuat. Jalankan backend terlebih dahulu.");
const output = resolve(
  process.argv[2] ||
    `backups/bank-${new Date().toISOString().replace(/[:.]/g, "-")}.sqlite`,
);
if (existsSync(output))
  throw new Error("File backup sudah ada; pilih nama baru.");
mkdirSync(dirname(output), { recursive: true });
const db = new DatabaseSync(input, { readOnly: true });
try {
  db.prepare("VACUUM INTO ?").run(output);
  console.log(`Backup konsisten tersimpan: ${output}`);
} finally {
  db.close();
}

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
const js = ts.transpileModule(fs.readFileSync("src/i18n/catalog.ts", "utf8"), {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2023,
  },
}).outputText;
const { translate, readLanguage, LANGUAGE_STORAGE_KEY } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);

test("language preference validates stored values and tolerates denied storage", () => {
  assert.equal(
    readLanguage({
      getItem: (key) => (key === LANGUAGE_STORAGE_KEY ? "en" : null),
    }),
    "en",
  );
  assert.equal(readLanguage({ getItem: () => "fr" }), "id");
  assert.equal(
    readLanguage({
      getItem: () => {
        throw new Error("SecurityError");
      },
    }),
    "id",
  );
});
test("translated counts and persisted status messages preserve dynamic values", () => {
  assert.equal(
    translate("Soal {index} dari {total}", "en", { index: 3, total: 65 }),
    "Question 3 of 65",
  );
  assert.equal(
    translate("Tersedia 12 soal; kurangi jumlah soal.", "en"),
    "12 questions are available; reduce the question count.",
  );
  assert.equal(
    translate("4 dipublikasikan, 2 masih perlu review.", "en"),
    "4 published, 2 still need review.",
  );
  assert.equal(
    translate("Soal {index} dari {total}", "id", { index: 3, total: 65 }),
    "Soal 3 dari 65",
  );
});
test("unknown text is preserved, including prototype names and user content", () => {
  for (const text of [
    "constructor",
    "toString",
    "Custom batch title",
    "<script>alert(1)</script>",
  ]) {
    assert.equal(translate(text, "en"), text);
    assert.equal(translate(text, "id"), text);
  }
  assert.equal(translate("Cloud Concepts", "id"), "Konsep Cloud");
  assert.equal(translate("Cloud Concepts", "en"), "Cloud Concepts");
});

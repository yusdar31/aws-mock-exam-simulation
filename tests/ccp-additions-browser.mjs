import { chromium, expect } from "@playwright/test";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";
import assert from "node:assert/strict";
const remote = !!process.env.EXAM_TEST_URL;
const base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4199";
const out = `artifacts/ccp-20261102/${remote ? "production" : "local"}`;
mkdirSync(out, { recursive: true });
const server = remote
  ? null
  : spawn(
      process.execPath,
      [
        "node_modules/vite/bin/vite.js",
        "preview",
        "--host",
        "127.0.0.1",
        "--port",
        "4199",
        "--strictPort",
      ],
      { windowsHide: true, stdio: "pipe" },
    );
let browser;
const errors = [];
try {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {}
    await wait(200);
  }
  const executablePath = existsSync(chromium.executablePath())
    ? chromium.executablePath()
    : (
        await import("../../career-ops/node_modules/playwright/index.mjs")
      ).chromium.executablePath();
  browser = await chromium.launch({ headless: true, executablePath });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  if (!remote)
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.pathname === "/api/questions/approved") {
        const lang = url.searchParams.get("lang"),
          type = url.searchParams.get("examType");
        if (type === "ccp" && ["en", "id"].includes(lang)) {
          const all = JSON.parse(
            readFileSync(`src/data/banks/ccp-${lang}.json`, "utf8"),
          ).filter((q) => q.status === "approved");
          const limit = Number(url.searchParams.get("limit") || 200),
            page = Number(url.searchParams.get("page") || 1);
          return route.fulfill({
            json: {
              items: all.slice((page - 1) * limit, page * limit),
              total: all.length,
              source: "release",
              excludedIds: [],
            },
          });
        }
      }
      return url.origin === new URL(base).origin
        ? route.continue()
        : route.abort();
    });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (dialog) => dialog.accept());
  await page.goto(base);
  await page
    .getByRole("button", { name: "Coba latihan sebagai tamu", exact: true })
    .click();
  await page.locator('.app-header a[href="#banks"]').click();
  for (const lang of ["en", "id"]) {
    const bank = JSON.parse(
      readFileSync(`src/data/banks/ccp-${lang}.json`, "utf8"),
    );
    await page.locator(`h2 a[href="#banks/ccp-${lang}"]`).click();
    await page
      .getByLabel("Cari soal", { exact: true })
      .fill(`ccp-scenario-${lang}-20261102-`);
    await expect(
      page.getByText("20 dari 100 soal ditampilkan", { exact: true }),
    ).toBeVisible();
    for (let i = 0; i < 4; i++)
      await page
        .getByRole("button", { name: "Tampilkan soal berikutnya", exact: true })
        .click();
    await expect(page.locator(".bank-question")).toHaveCount(100);
    const q = bank.find((q) => q.id === `ccp-scenario-${lang}-20261102-023`);
    await page.getByLabel("Cari soal", { exact: true }).fill(q.id);
    await page.locator(".bank-question summary").click();
    await expect(page.locator(".bank-question")).toContainText(q.prompt);
    await expect(page.locator(".rationale .is-correct")).toHaveCount(2);
    await expect(page.locator(".rationale .review-choice")).toHaveCount(5);
    await page.setViewportSize({ width: 375, height: 812 });
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    );
    await page.locator(".bank-question").scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${out}/${lang}-review-mobile.png` });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page
      .getByRole("button", { name: "Siapkan simulasi", exact: true })
      .click();
    await expect(page.getByLabel("Bahasa soal", { exact: true })).toHaveValue(
      lang,
    );
    await page
      .getByRole("button", { name: "Mulai simulasi", exact: true })
      .click();
    await expect(page.locator(".question-panel")).toBeVisible();
    const saved = await page.evaluate(
      () =>
        new Promise((resolve, reject) => {
          const request = indexedDB.open("aws-exam-v2");
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            const db = request.result,
              tx = db.transaction("sessions"),
              get = tx.objectStore("sessions").get("guest");
            get.onsuccess = () => resolve(get.result);
            tx.oncomplete = () => db.close();
          };
        }),
    );
    assert.equal(saved.questions.length, 65);
    assert.ok(
      saved.questions.every((q) => q.lang === lang && q.status === "approved"),
    );
    assert.ok(
      saved.questions.some((q) =>
        q.id.startsWith(`ccp-scenario-${lang}-20261102-`),
      ),
    );
    await page
      .getByRole("button", { name: "Simpan & keluar", exact: true })
      .click();
    await page.locator('.app-header a[href="#banks"]').click();
  }
  assert.deepEqual(errors, []);
  console.log(
    `${remote ? "Production" : "Local"} CCP: all 100 additions in each language, paired multiple-answer explanations, mobile layout and both simulation languages passed.`,
  );
} finally {
  await browser?.close();
  server?.kill();
}

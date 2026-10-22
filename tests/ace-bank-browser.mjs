import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, readFileSync, mkdirSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
import assert from "node:assert/strict";

const remote = !!process.env.EXAM_TEST_URL;
const base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4198";
const out = `artifacts/ace-20261021/${remote ? "production" : "local"}`;
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
        "4198",
        "--strictPort",
      ],
      { windowsHide: true, stdio: "pipe" },
    );
let browser, page;
const errors = [];
try {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {
      /* wait for preview */
    }
    await wait(200);
  }
  let executablePath;
  if (!existsSync(chromium.executablePath()))
    executablePath = (
      await import("../../career-ops/node_modules/playwright/index.mjs")
    ).chromium.executablePath();
  browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const bank = JSON.parse(
    readFileSync("src/data/banks/gcp-ace-id.json", "utf8"),
  );
  if (!remote)
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.pathname === "/api/questions/approved") {
        const items = bank.filter(
          (q) =>
            q.status === "approved" &&
            q.examType === url.searchParams.get("examType") &&
            q.lang === url.searchParams.get("lang"),
        );
        return route.fulfill({
          json: {
            items,
            total: items.length,
            excludedIds: [],
            source: "release",
          },
        });
      }
      return url.origin === new URL(base).origin
        ? route.continue()
        : route.abort();
    });
  await context.addInitScript(() => {
    if (!localStorage.getItem("exam-study-config-v1"))
      localStorage.setItem(
        "exam-study-config-v1",
        JSON.stringify({
          examType: "gcp-ace",
          lang: "id",
          mode: "practice",
          limit: 10,
          duration: 0,
          domains: [
            "Perencanaan dan Konfigurasi Solusi Cloud",
            "Penerapan dan Implementasi Solusi Cloud",
          ],
          content: "all",
        }),
      );
  });
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (dialog) => dialog.accept());
  const snapshot = () =>
    page.evaluate(
      () =>
        new Promise((resolve, reject) => {
          const request = indexedDB.open("aws-exam-v2");
          request.onerror = () => reject(request.error);
          request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction("sessions");
            const get = transaction.objectStore("sessions").get("guest");
            get.onsuccess = () => resolve(get.result);
            transaction.oncomplete = () => db.close();
          };
        }),
    );
  await page.goto(base);
  await page
    .getByRole("button", { name: "Coba latihan sebagai tamu", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeEnabled();
  const preferences = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("exam-study-config-v1")),
  );
  assert.deepEqual(preferences.domains, [
    "Perencanaan dan Implementasi Solusi Cloud",
  ]);
  await page.locator('.app-header a[href="#banks"]').click();
  await page.locator('h2 a[href="#banks/gcp-ace-id"]').click();
  await expect(page.locator(".bank-domains li")).toHaveCount(4);
  await page
    .getByLabel("Cari soal", { exact: true })
    .fill("ace-scenario-id-20261022-");
  await expect(
    page.getByText("20 dari 71 soal ditampilkan", { exact: true }),
  ).toBeVisible();
  const archived = bank.find((q) => !q.optionExplanations);
  assert.ok(archived);
  await page.getByLabel("Cari soal", { exact: true }).fill(archived.id);
  await page.locator(".bank-question summary").first().click();
  const review = page.locator(".bank-question .rationale").first();
  await expect(review.locator(".review-choice")).toHaveCount(
    archived.options.length,
  );
  await expect(review.locator("details")).toHaveCount(0);
  await expect(review.locator(".review-choice-reason")).toHaveCount(0);
  await expect(review).not.toContainText("Bandingkan opsi ini");
  await expect(review).toContainText(
    "Pembahasan rinci setiap opsi belum tersedia",
  );
  await page.getByLabel("Bahasa tampilan").selectOption("en");
  await expect(review).toContainText("Correct answer");
  await expect(review).not.toContainText("Distractor");
  await expect(review).toContainText("Detailed explanations for each option");
  await page.getByLabel("Display language").selectOption("id");
  await page
    .getByLabel("Cari soal", { exact: true })
    .fill("ace-scenario-id-20261021-");
  await expect(
    page.getByText("20 dari 100 soal ditampilkan", { exact: true }),
  ).toBeVisible();
  await page.locator(".bank-question summary").first().click();
  await expect(page.locator(".bank-question .rationale").first()).toBeVisible();
  await expect(review.locator(".review-choice")).toHaveCount(4);
  await expect(review.locator(".review-choice-reason")).toHaveCount(3);
  await expect(review.locator(".review-choice-status")).toHaveCount(1);
  await page.setViewportSize({ width: 375, height: 812 });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  );
  await review.scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${out}/review-mobile.png`, fullPage: false });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.screenshot({ path: `${out}/new-scenarios.png`, fullPage: false });
  await page
    .getByRole("button", { name: "Siapkan simulasi", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mulai simulasi", exact: true }),
  ).toBeEnabled();
  await page
    .getByRole("button", { name: "Mulai simulasi", exact: true })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  const first = await snapshot();
  assert.equal(first.questions.length, 50);
  assert.equal(first.config.duration, 0); // simulation deadline comes from certification metadata
  assert.ok(first.deadline - first.savedAt <= 120 * 60 * 1000);
  assert.ok(first.deadline - first.savedAt > 119 * 60 * 1000);
  assert.ok(first.questions.every((q) => q.id.startsWith("ace-scenario-id-")));
  assert.deepEqual(
    Object.fromEntries(
      Object.keys(
        JSON.parse(readFileSync("src/data/certifications.json", "utf8"))[
          "gcp-ace"
        ].blueprint,
      ).map((domain, i) => [
        domain,
        first.questions.filter((q) => q.domain === domain).length,
      ]),
    ),
    {
      "Pengaturan Lingkungan Solusi Cloud": 10,
      "Perencanaan dan Implementasi Solusi Cloud": 15,
      "Memastikan Operasi Solusi Cloud yang Berhasil": 15,
      "Konfigurasi Akses dan Keamanan": 10,
    },
  );
  await page.locator(".choice input").first().check();
  await page.getByLabel("Bahasa tampilan").selectOption("en");
  const changed = await snapshot();
  assert.deepEqual(
    changed.questions.map((q) => q.id),
    first.questions.map((q) => q.id),
  );
  assert.equal(changed.deadline, first.deadline);
  assert.equal(changed.answers[first.questions[0].id].length, 1);
  await page.getByLabel("Display language").selectOption("id");
  const navigatorToggle = page.getByRole("button", { name: /Navigator/ });
  if (await navigatorToggle.isVisible()) await navigatorToggle.click();
  await page
    .getByRole("button", { name: "Review semua soal", exact: true })
    .click();
  await page.getByRole("button", { name: "Submit ujian", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Ulangi konfigurasi ini", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Mulai simulasi", exact: true })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  const second = await snapshot();
  assert.equal(second.questions.length, 50);
  assert.equal(
    new Set([...first.questions, ...second.questions].map((q) => q.id)).size,
    100,
  );
  await page.setViewportSize({ width: 375, height: 812 });
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  );
  assert.deepEqual(errors, []);
  console.log(
    `${remote ? "Production" : "Local"} ACE: new scenarios, four domains, legacy preferences, explanations, 50-question simulation, preserved answers/deadline, and two non-overlapping packets passed.`,
  );
} catch (error) {
  await page
    ?.screenshot({ path: `${out}/failure.png`, fullPage: true })
    .catch(() => {});
  throw error;
} finally {
  await browser?.close();
  server?.kill();
}

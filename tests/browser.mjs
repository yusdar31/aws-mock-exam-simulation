import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
const port = 4175,
  base = `http://127.0.0.1:${port}`;
const preview = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(port),
    "--strictPort",
  ],
  { windowsHide: true, stdio: "pipe" },
);
let browser, page;
const artifacts = "artifacts/browser";
mkdirSync(artifacts, { recursive: true });
const results = [],
  errors = [];
try {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {}
    await wait(200);
  }
  let executablePath;
  if (!existsSync(chromium.executablePath())) {
    try {
      const previous =
        await import("../../career-ops/node_modules/playwright/index.mjs");
      if (existsSync(previous.chromium.executablePath()))
        executablePath = previous.chromium.executablePath();
    } catch {}
  }
  browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
  });
  await context.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "127.0.0.1"
      ? route.continue()
      : route.abort(),
  );
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (d) => d.accept());
  await page.goto(base);
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(
    page.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeEnabled();
  await page.screenshot({
    path: `${artifacts}/lobby-desktop.png`,
    fullPage: true,
  });
  await page.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await page.waitForTimeout(1200);
  await expect(page.locator(".timer")).toHaveText("Tanpa batas");
  results.push("Untimed exam remains active");
  await page.locator(".choice input").first().check();
  await page.getByRole("button", { name: "Tandai untuk review" }).click();
  await page.getByRole("button", { name: "Simpan & jeda" }).click();
  await expect(
    page.getByRole("button", { name: "Lanjutkan sesi" }),
  ).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(page.locator(".choice input").first()).toBeChecked();
  results.push("Reload/resume preserves answers and flags");
  for (const width of [360, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    const dimensions = await page.evaluate(() => ({
      viewport: innerWidth,
      body: document.documentElement.scrollWidth,
    }));
    expect(dimensions.body).toBeLessThanOrEqual(width);
    await page.screenshot({
      path: `${artifacts}/exam-${width}.png`,
      fullPage: true,
    });
  }
  results.push("No horizontal overflow at 360/390/768");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: /Navigator/ }).click();
  await expect(page.locator(".navigator")).toBeVisible();
  await expect(page.locator(".navigator-grid button").first()).toHaveAttribute(
    "aria-current",
    "step",
  );
  await page.getByRole("button", { name: "Review semua soal" }).click();
  await page.getByRole("button", { name: "Submit ujian" }).click();
  await expect(
    page.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeVisible();
  await expect(page.getByText(/scaled score atau prediksi/)).toBeVisible();
  results.push("Manual submit stores result and snapshot");
  const pdfDownload = page.waitForEvent("download", { timeout: 30000 });
  await page.getByRole("button", { name: "Unduh PDF", exact: true }).click();
  const download = await pdfDownload;
  await download.saveAs(`${artifacts}/result.pdf`);
  results.push("Result PDF downloads successfully");

  const stored = await page.evaluate(
    () =>
      new Promise((resolve, reject) => {
        const r = indexedDB.open("aws-exam-v2");
        r.onsuccess = () => {
          const t = r.result.transaction(["sessions", "attempts"]);
          const a = t.objectStore("attempts").getAll(),
            s = t.objectStore("sessions").get("guest");
          t.oncomplete = () => resolve({ attempts: a.result, saved: s.result });
          t.onerror = reject;
        };
      }),
  );
  expect(stored.attempts.length).toBe(1);
  expect(stored.saved).toBeUndefined();
  await page.screenshot({
    path: `${artifacts}/result-mobile.png`,
    fullPage: true,
  });
  await page
    .getByRole("button", { name: "Ruang belajar", exact: true })
    .click();
  await page.getByRole("button", { name: /Solutions Architect/ }).click();
  await expect(
    page.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeEnabled();
  await page
    .getByRole("button", { name: "Simulasi penuh", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mulai simulasi", exact: true }),
  ).toBeEnabled();
  await page
    .getByRole("button", { name: "Mulai simulasi", exact: true })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await expect(page.locator(".exam-header")).toContainText("65");
  results.push("SAA Indonesian full simulation starts with 65 questions");
  await page.getByRole("button", { name: "Simpan & keluar" }).click();
  await page.evaluate(
    () =>
      new Promise((resolve, reject) => {
        const r = indexedDB.open("aws-exam-v2");
        r.onsuccess = () => {
          const t = r.result.transaction("sessions", "readwrite"),
            s = t.objectStore("sessions");
          const g = s.get("guest");
          g.onsuccess = () => {
            const value = g.result;
            value.deadline = Date.now() + 400;
            value.remaining = 1;
            s.put(value);
          };
          t.oncomplete = resolve;
          t.onerror = reject;
        };
      }),
  );
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(
    page.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeVisible();
  await page.waitForTimeout(1100);
  const expiry = await page.evaluate(
    () =>
      new Promise((resolve) => {
        const r = indexedDB.open("aws-exam-v2");
        r.onsuccess = () => {
          const t = r.result.transaction(["sessions", "attempts"]),
            a = t.objectStore("attempts").getAll(),
            s = t.objectStore("sessions").get("guest");
          t.oncomplete = () =>
            resolve({ attempts: a.result.length, saved: s.result });
        };
      }),
  );
  expect(expiry.attempts).toBe(2);
  expect(expiry.saved).toBeUndefined();
  results.push(
    "Expiry finalizes once, persists history and clears active session",
  );
  await page
    .getByRole("button", { name: "Ruang belajar", exact: true })
    .click();
  await page.getByRole("link", { name: "Riwayat", exact: true }).click();
  await page.getByLabel("Sertifikasi", { exact: true }).selectOption("saa");
  await expect(page.getByRole("button", { name: "Buka review" })).toHaveCount(
    1,
  );
  await page.getByRole("button", { name: "Buka review" }).click();
  await expect(
    page.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeVisible();
  results.push(
    "Certification-filtered history reopens saved question versions",
  );
  await page.getByRole("link", { name: "Riwayat", exact: true }).click();
  await page.getByRole("button", { name: /Catatan soal salah/ }).click();
  await expect(
    page.getByRole("heading", { name: "Catatan soal yang perlu diperkuat" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Latih kembali hingga 20 soal" })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await expect(page.locator(".exam-header")).toContainText("CLF-C02");
  results.push(
    "Wrong-answer notebook restarts a practice in its original certification",
  );
  await page.getByRole("button", { name: "Simpan & jeda" }).click();
  await page.getByRole("button", { name: /Solutions Architect/ }).click();
  await page.getByLabel("Bahasa soal", { exact: true }).selectOption("en");
  await page
    .getByRole("button", { name: "Simulasi penuh", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mulai simulasi", exact: true }),
  ).toBeEnabled();
  await page
    .getByRole("button", { name: "Mulai simulasi", exact: true })
    .click();
  await page.getByRole("button", { name: /Navigator/ }).click();
  await page.getByRole("button", { name: "Review semua soal" }).click();
  await page.getByRole("button", { name: "Submit ujian" }).click();
  await page
    .getByRole("button", { name: "Tampilkan Bahasa Indonesia" })
    .first()
    .click();
  await expect(
    page.getByText("Penjelasan Bahasa Indonesia", { exact: true }),
  ).toBeVisible();
  results.push(
    "English review provides Indonesian rationale from paired local questions",
  );
  expect(errors).toEqual([]);
  writeFileSync(
    `${artifacts}/results.json`,
    JSON.stringify({ results, errors }, null, 2),
  );
  console.log(results.map((r) => `PASS ${r}`).join("\n"));
} catch (error) {
  console.error(
    JSON.stringify({
      errors,
      url: page?.url(),
      body: page ? await page.locator("body").innerText() : "",
    }),
  );
  if (page)
    await page.screenshot({ path: `${artifacts}/failure.png`, fullPage: true });
  throw error;
} finally {
  await browser?.close();
  preview.kill();
}

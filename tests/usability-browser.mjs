import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as wait } from "node:timers/promises";
const require = createRequire(import.meta.url),
  out = "artifacts/usability",
  base = "http://127.0.0.1:4189";
mkdirSync(out, { recursive: true });
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4189",
    "--strictPort",
  ],
  { windowsHide: true, stdio: "pipe" },
);
const results = [],
  errors = [],
  scans = [];
let browser, page;
try {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(base)).ok) break;
    } catch {}
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
    viewport: { width: 390, height: 844 },
  });
  let reportsOnline = false;
  await context.route("**/*", (route) => {
    const u = new URL(route.request().url());
    if (u.pathname === "/api/questions/approved")
      return route.fulfill({
        json: { items: [], excludedIds: [], total: 0, source: "release" },
      });
    if (u.pathname === "/api/questions/reports")
      return route.fulfill(
        reportsOnline
          ? { status: 201, json: { received: true } }
          : { status: 503, json: { error: "Service unavailable" } },
      );
    return u.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  let acceptDialogs = true,
    dialogCount = 0;
  page.on("dialog", (d) => {
    dialogCount++;
    return acceptDialogs ? d.accept() : d.dismiss();
  });
  const scan = async (screen) => {
    await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
    const r = await page.evaluate(async () => {
      const r = await axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
        },
      });
      return {
        violations: r.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
        incomplete: r.incomplete.map((v) => v.id),
      };
    });
    scans.push({ screen, ...r });
    expect(r.violations).toEqual([]);
  };
  const snapshot = () =>
    page.evaluate(
      () =>
        new Promise((resolve) => {
          const r = indexedDB.open("aws-exam-v2");
          r.onsuccess = () => {
            const db = r.result,
              t = db.transaction("sessions"),
              q = t.objectStore("sessions").get("guest");
            t.oncomplete = () => {
              resolve(q.result);
              db.close();
            };
          };
        }),
    );
  await page.goto(base);
  await expect(
    page.getByRole("button", { name: "Coba 10 soal tanpa akun" }),
  ).toBeVisible();
  await scan("auth-light");
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  const start = () =>
    page.getByRole("button", { name: "Mulai latihan", exact: true });
  await expect(start()).toBeEnabled();
  const box = await start().boundingBox();
  expect(box.y + box.height).toBeLessThanOrEqual(844);
  results.push("Mobile launch action is visible without scrolling");
  await page.getByLabel("Jumlah soal", { exact: true }).fill("1.5");
  await expect(start()).toBeDisabled();
  await expect(
    page
      .getByText("Masukkan jumlah soal bulat antara 1 dan 138.", {
        exact: true,
      })
      .first(),
  ).toBeVisible();
  results.push("Invalid fractional counts are explained before starting");
  await page.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await scan("lobby-light");
  await page.getByRole("button", { name: /Associate Cloud Engineer/ }).click();
  await expect(page.locator(".launch-panel h2")).toHaveText(
    "Associate Cloud Engineer (ACE)",
  );
  await expect(
    page
      .getByLabel("Bahasa soal", { exact: true })
      .locator('option[value="en"]'),
  ).toHaveAttribute("disabled", "");
  await page
    .getByRole("button", { name: "Simulasi penuh", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Mulai simulasi", exact: true }),
  ).toBeDisabled();
  await expect(page.locator(".launch-panel dl")).toContainText("50");
  await page.getByRole("button", { name: "Latihan", exact: true }).click();
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(page.locator(".track.selected strong")).toHaveText(
    "Associate Cloud Engineer (ACE)",
  );
  results.push(
    "GCP metadata, unavailable English, simulation capacity and preferences are consistent",
  );
  await page.getByRole("button", { name: /Cloud Practitioner/ }).click();
  await expect(start()).toBeEnabled();
  await start().click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await page.locator(".choice input").first().check();
  await page.getByRole("button", { name: "Ragu", exact: true }).click();
  await page
    .getByRole("button", { name: "Simpan materi", exact: true })
    .click();
  await page.getByText("Catatan pribadi", { exact: true }).click();
  await page
    .getByLabel("Catatan untuk soal ini")
    .fill("Catatan regresi: pelajari konsep ini kembali.");
  await expect
    .poll(async () => (await snapshot())?.confidence)
    .not.toEqual(undefined);
  const before = await snapshot();
  await page.goBack();
  await expect(
    page.getByRole("button", { name: "Lanjutkan sesi" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await expect(page.locator(".choice input").first()).toBeChecked();
  expect((await snapshot()).attemptId).toBe(before.attemptId);
  await expect(
    page.getByRole("button", { name: "Ragu", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  results.push("Browser Back preserves the session, answers and confidence");
  await page.goBack();
  await expect(
    page.getByRole("button", { name: "Lanjutkan sesi" }),
  ).toBeVisible();
  const dialogsBefore = dialogCount;
  acceptDialogs = false;
  await start().click();
  await expect.poll(() => dialogCount).toBe(dialogsBefore + 1);
  expect((await snapshot()).attemptId).toBe(before.attemptId);
  acceptDialogs = true;
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(page.locator(".choice-list")).toBeVisible();
  results.push(
    "Declining a new-session confirmation retains the existing answers",
  );
  const other = await context.newPage();
  await other.goto(base);
  await other
    .getByRole("button", { name: "Coba latihan sebagai tamu" })
    .click();
  await other.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(other.getByRole("alert")).toContainText("tab lain");
  expect((await snapshot()).attemptId).toBe(before.attemptId);
  await other.close();
  results.push("A second tab cannot take over or overwrite an active exam");
  await page.getByText("Laporkan masalah soal", { exact: true }).click();
  await page
    .getByLabel("Jelaskan masalah")
    .fill("Mohon periksa alasan opsi pada soal ini.");
  await page
    .getByRole("button", { name: "Kirim laporan", exact: true })
    .click();
  await expect(
    page.getByRole("status").filter({ hasText: "Laporan tersimpan lokal" }),
  ).toBeVisible();
  await scan("exam-light");
  await page.getByRole("button", { name: "Simpan & jeda" }).click();
  await page
    .getByRole("link", { name: "Rencana & catatan", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Rencana & catatan" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Materi & catatan tersimpan", exact: true })
    .click();
  await expect(page.getByLabel("Catatan untuk soal ini")).toHaveValue(
    "Catatan regresi: pelajari konsep ini kembali.",
  );
  reportsOnline = true;
  await page.getByRole("button", { name: "Laporan soal", exact: true }).click();
  await page.getByRole("button", { name: "Kirim ulang laporan" }).click();
  await expect(
    page.getByRole("button", { name: "Kirim ulang laporan" }),
  ).toBeDisabled();
  results.push(
    "Bookmarks and notes persist; failed reports remain pending and retry successfully",
  );
  await page.getByText("Pengaturan baca", { exact: true }).click();
  await page.getByLabel("Mode gelap", { exact: true }).check();
  await page.getByLabel("Ukuran teks", { exact: true }).selectOption("20");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await scan("study-dark");
  await page.screenshot({ path: `${out}/study-dark.png`, fullPage: true });
  await page.getByRole("link", { name: "Ruang belajar", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Persiapkan percobaan Anda" }),
  ).toBeVisible();
  await scan("lobby-dark");
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await scan("exam-dark");
  await page.getByRole("button", { name: /Navigator/ }).click();
  await page.getByRole("button", { name: "Review semua soal" }).click();
  await page.getByRole("button", { name: "Submit ujian", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeFocused();
  await scan("result-dark");
  results.push(
    "Reading preferences apply across screens and result heading receives focus",
  );
  await expect(page.locator(".review-option").first()).not.toHaveText("");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Unduh PDF", exact: true }).click();
  const download = await downloadPromise;
  await download.saveAs(`${out}/all-results.pdf`);
  expect(readFileSync(`${out}/all-results.pdf`).subarray(0, 4).toString()).toBe(
    "%PDF",
  );
  results.push(
    "Review contains complete option text and full PDF export downloads",
  );
  await page
    .getByRole("link", { name: "Rencana & catatan", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Rencana & catatan" }),
  ).toBeVisible();
  const backupPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Cadangan & pindah perangkat", exact: true })
    .click();
  await page.getByRole("button", { name: "Unduh cadangan JSON" }).click();
  await (await backupPromise).saveAs(`${out}/backup.json`);
  const backup = JSON.parse(readFileSync(`${out}/backup.json`));
  expect(backup.attempts).toHaveLength(1);
  await page
    .getByLabel("Pilih cadangan JSON")
    .setInputFiles(`${out}/backup.json`);
  await page.getByRole("button", { name: "Gabungkan cadangan" }).click();
  await expect(page.getByRole("status")).toContainText(
    "0 hasil berhasil diimpor.",
  );
  results.push(
    "Backup import validates and merges without duplicating existing attempts",
  );
  await page.getByLabel("Pilih cadangan JSON").setInputFiles({
    name: "invalid.json",
    mimeType: "application/json",
    buffer: Buffer.from(
      JSON.stringify({
        ...backup,
        attempts: [{ ...backup.attempts[0], id: "must-not-be-written" }, null],
      }),
    ),
  });
  await page.getByRole("button", { name: "Gabungkan cadangan" }).click();
  await expect(page.getByRole("status")).toContainText("Cadangan tidak valid.");
  const verifyBackup = page.waitForEvent("download");
  await page.getByRole("button", { name: "Unduh cadangan JSON" }).click();
  await (await verifyBackup).saveAs(`${out}/after-invalid.json`);
  expect(
    JSON.parse(readFileSync(`${out}/after-invalid.json`)).attempts,
  ).toHaveLength(1);
  results.push("An invalid backup is rejected before any result is written");
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("link", { name: "Ruang belajar", exact: true }).click();
  for (const width of [320, 360, 390, 768, 1366]) {
    await page.setViewportSize({ width, height: 844 });
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      )
      .toBe(true);
  }
  results.push(
    "Reading settings survive reload; lobby fits 320/360/390/768/1366 pixels",
  );
  await page.getByLabel("Jumlah soal", { exact: true }).fill("12");
  await start().click();
  await expect(page.locator(".choice-list")).toBeVisible();
  const twelve = await snapshot();
  await page
    .getByRole("button", { name: "Review semua soal", exact: true })
    .click();
  await page.getByRole("button", { name: "Submit ujian", exact: true }).click();
  await expect(page.locator(".review-question")).toHaveCount(10);
  await page.getByLabel("Isi ekspor PDF", { exact: true }).selectOption("all");
  const full = page.waitForEvent("download");
  await page.getByRole("button", { name: "Unduh PDF", exact: true }).click();
  await (await full).saveAs(`${out}/full-12.pdf`);
  expect(
    readFileSync(`${out}/full-12.pdf`).includes(
      Buffer.from(twelve.questions[11].id),
    ),
  ).toBe(true);
  results.push(
    "Complete PDF includes question 12 while the visible review has only 10 questions",
  );
  expect(errors).toEqual([]);
  console.log(results.map((r) => `PASS ${r}`).join("\n"));
} catch (error) {
  if (page) {
    await page.screenshot({ path: `${out}/failure.png`, fullPage: true });
    console.error(await page.locator("body").innerText());
  }
  throw error;
} finally {
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ results, errors, scans }, null, 2),
  );
  await browser?.close();
  server.kill();
}

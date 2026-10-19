import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as wait } from "node:timers/promises";
const require = createRequire(import.meta.url);
const base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4192";
const remote = !!process.env.EXAM_TEST_URL;
const out = `artifacts/exam-layout-fix/${remote ? "production" : "local"}`;
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
        "4192",
        "--strictPort",
      ],
      { windowsHide: true, stdio: "pipe" },
    );
const results = [],
  scans = [],
  errors = [];
let browser, page;
try {
  for (let i = 0; i < 60; i++) {
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
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  if (!remote)
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.pathname === "/api/questions/approved")
        return route.fulfill({
          json: { items: [], excludedIds: [], total: 0, source: "release" },
        });
      return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
    });
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (d) => d.accept());
  const fits = async () =>
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  const scan = async (screen) => {
    await page.evaluate(async () => {
      await document.fonts.ready;
    });
    await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
    const result = await page.evaluate(async () => {
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
        incompleteDetails: r.incomplete.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      };
    });
    scans.push({ screen, ...result });
    expect(result.violations).toEqual([]);
  };
  await page.goto(base);
  await expect(
    page.getByRole("button", { name: "Coba 10 soal tanpa akun" }),
  ).toBeVisible();
  await scan("auth-desktop-light");
  await page.screenshot({ path: `${out}/auth-desktop.png`, fullPage: true });
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await fits();
  }
  results.push(
    "Authentication reflows at 320/375/768/1024/1440px with reduced motion",
  );
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: `${out}/auth-mobile.png`, fullPage: true });
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(page.locator(".learning-overview")).toBeVisible();
  await expect(page.locator(".track.selected .track-indicator")).toBeVisible();
  await scan("lobby-mobile-light");
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await fits();
    const action = page.getByRole("button", {
      name: "Mulai latihan",
      exact: true,
    });
    await expect(action).toBeEnabled();
    if (width <= 900) {
      const box = await action.boundingBox();
      expect(box.y + box.height).toBeLessThanOrEqual(900);
    }
  }
  results.push(
    "Lobby reflows at all target widths and the mobile launch action remains visible",
  );
  await scan("lobby-desktop-light");
  await page.screenshot({ path: `${out}/lobby-desktop.png`, fullPage: true });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: `${out}/lobby-mobile.png`, fullPage: true });
  await page.addStyleTag({
    content:
      "* { letter-spacing: .12em !important; word-spacing: .16em !important; line-height: 1.5 !important; } p { margin-bottom: 2em !important; }",
  });
  await fits();
  await expect(
    page.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeInViewport();
  results.push("Text spacing overrides preserve page width and launch access");
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await page.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(page.locator(".choice-list")).toBeVisible();
  await page.locator(".choice input").first().check();
  await scan("exam-mobile-light");
  await page.screenshot({ path: `${out}/exam-mobile.png`, fullPage: true });
  await page.setViewportSize({ width: 812, height: 375 });
  await fits();
  const last = page.locator(".choice input").last();
  await last.focus();
  const box = await last.boundingBox();
  const header = await page.locator(".exam-header").boundingBox();
  const footer = await page.locator(".exam-footer").boundingBox();
  expect(box.y + box.height).toBeGreaterThan(header.y + header.height);
  expect(box.y).toBeLessThan(footer.y);
  results.push(
    "Exam answers remain keyboard reachable between fixed bars in landscape",
  );
  await page.goBack();
  await expect(
    page.getByRole("button", { name: "Lanjutkan sesi" }),
  ).toBeVisible();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByText("Pengaturan baca", { exact: true }).click();
  await page.getByLabel("Mode gelap", { exact: true }).check();
  await scan("lobby-desktop-dark");
  await page.screenshot({ path: `${out}/lobby-dark.png`, fullPage: true });
  await page
    .getByRole("link", { name: "Rencana & catatan", exact: true })
    .click();
  await scan("study-dark");
  await page.screenshot({ path: `${out}/study-dark.png`, fullPage: true });
  await page.getByRole("link", { name: "Riwayat", exact: true }).click();
  await scan("history-dark");
  results.push(
    "Dark lobby, study and history pass the automated accessibility scan",
  );
  await page.getByRole("link", { name: "Ruang belajar", exact: true }).click();
  await page.getByRole("button", { name: "Lanjutkan sesi" }).click();
  await expect(page.locator(".choice input").first()).toBeChecked();
  await scan("exam-dark");
  results.push(
    "Resuming preserves the selected answer across theme and screen changes",
  );
  await page.screenshot({ path: `${out}/exam-desktop-short.png` });
  await page
    .getByRole("button", { name: "Simpan & jeda", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Simulasi penuh", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Mulai simulasi", exact: true })
    .click();
  await expect(page.locator(".navigator-grid button")).toHaveCount(65);
  for (const width of [1024, 1440, 1890, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    await fits();
    const panel = await page.locator(".navigator").boundingBox();
    const cell = await page
      .locator(".navigator-grid button")
      .first()
      .boundingBox();
    expect(panel.x).toBeGreaterThanOrEqual(24);
    expect(panel.x).toBeLessThanOrEqual(32);
    expect(panel.width).toBeGreaterThanOrEqual(300);
    expect(Math.abs(cell.width - cell.height)).toBeLessThan(1);
    expect(cell.width).toBeGreaterThanOrEqual(44);
    expect(cell.width).toBeLessThanOrEqual(64);
    const content = await page.locator(".exam-content").boundingBox();
    expect(width - content.x - content.width).toBeLessThanOrEqual(40);
    expect(content.x - panel.x - panel.width).toBeGreaterThanOrEqual(16);
    expect(content.x - panel.x - panel.width).toBeLessThanOrEqual(32);
    if (width === 1890) await page.screenshot({ path: `${out}/exam-1890.png` });
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await scan("full-navigator-desktop-dark");
  await page.screenshot({ path: `${out}/exam-desktop-65.png` });
  await page.locator(".navigator-grid button").last().click();
  await expect(page.locator(".question-panel h1")).toBeFocused();
  await expect(page.locator(".navigator-grid button").last()).toHaveAttribute(
    "aria-current",
    "step",
  );
  results.push(
    "Exam uses the desktop width without empty side gutters; navigator buttons remain square and reach question 65",
  );
  for (const width of [320, 375, 768]) {
    await page.setViewportSize({ width, height: 844 });
    await expect(page.locator(".navigator")).toBeHidden();
    await page.getByRole("button", { name: /Navigator/ }).click();
    await expect(page.locator(".navigator")).toBeVisible();
    await fits();
    const cell = await page
      .locator(".navigator-grid button")
      .first()
      .boundingBox();
    expect(cell.width).toBeGreaterThanOrEqual(44);
    expect(Math.abs(cell.width - cell.height)).toBeLessThan(1);
    await page.locator(".navigator-grid button").first().click();
    await expect(page.locator(".navigator")).toBeHidden();
    await expect(page.locator(".question-panel h1")).toBeFocused();
  }
  results.push(
    "Phone and tablet navigators open, reflow and return focus to the chosen question",
  );
  await page
    .getByRole("button", { name: "Simpan & keluar", exact: true })
    .click();
  await page.setViewportSize({ width: 1890, height: 774 });
  await page.getByRole("button", { name: /Associate Cloud Engineer/ }).click();
  await page.getByRole("button", { name: "Latihan", exact: true }).click();
  await page.getByLabel("Jumlah soal", { exact: true }).fill("20");
  await page.getByText("Pengaturan baca", { exact: true }).click();
  await page.getByLabel("Mode gelap", { exact: true }).uncheck();
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(page.locator(".navigator-grid button")).toHaveCount(20);
  await page.getByLabel("Bahasa tampilan", { exact: true }).selectOption("en");
  await page.locator(".navigator-grid button").nth(3).click();
  await expect(page.locator(".question-panel h1")).toHaveAttribute(
    "lang",
    "id",
  );
  const gcpContent = await page.locator(".exam-content").boundingBox();
  expect(gcpContent.width).toBeGreaterThan(1400);
  expect(1890 - gcpContent.x - gcpContent.width).toBeLessThanOrEqual(40);
  await fits();
  await page.screenshot({ path: `${out}/gcp-1890.png` });
  results.push(
    "GCP practice with English UI uses the full desktop workspace at the reported screen size",
  );
  expect(errors).toEqual([]);
  console.log(results.map((r) => `PASS ${r}`).join("\n"));
} catch (error) {
  if (page)
    await page.screenshot({ path: `${out}/failure.png`, fullPage: true });
  throw error;
} finally {
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ base, results, scans, errors }, null, 2),
  );
  await browser?.close();
  server?.kill();
}

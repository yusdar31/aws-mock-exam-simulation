import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";

const require = createRequire(import.meta.url);
const remote = !!process.env.EXAM_TEST_URL;
const base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4194";
const out = `artifacts/question-banks/${remote ? "production" : "local"}`;
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
        "4194",
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
    reducedMotion: "reduce",
  });
  let offline = false;
  const builtin = JSON.parse(
    readFileSync("src/data/banks/ccp-id.json", "utf8"),
  );
  const selected = builtin
    .filter((q) => q.id.startsWith("curated-"))
    .slice(0, 2);
  const updated = {
    ...selected[0],
    prompt: "Pertanyaan katalog dari bank pusat terbaru",
    version: selected[0].version + 1,
  };
  if (!remote)
    await context.route("**/*", (route) => {
      const url = new URL(route.request().url());
      if (url.pathname === "/api/questions/approved") {
        if (offline)
          return route.fulfill({
            status: 503,
            json: { error: "Offline fixture" },
          });
        const patched =
          url.searchParams.get("examType") === "ccp" &&
          url.searchParams.get("lang") === "id";
        return route.fulfill({
          json: {
            items: patched ? [updated] : [],
            total: patched ? 1 : 0,
            excludedIds: patched
              ? builtin
                  .filter((q) => !selected.some((item) => item.id === q.id))
                  .map((q) => q.id)
              : [],
            source: "release",
          },
        });
      }
      return url.origin === new URL(base).origin
        ? route.continue()
        : route.abort();
    });
  page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("dialog", (dialog) => dialog.accept());
  await page.goto(base);
  await page
    .getByRole("button", { name: "Jelajahi bank soal", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Bank soal", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".bank-card")).toHaveCount(5);
  await expect(page.locator('.app-header a[href="#banks"]')).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(page.locator('.bank-card[aria-busy="true"]')).toHaveCount(0, {
    timeout: 30000,
  });
  if (!remote) {
    const card = page
      .locator(".bank-card")
      .filter({ has: page.locator('a[href="#banks/ccp-id"]') });
    await expect(card.locator("dd").first()).toHaveText("2");
    await expect(
      card.getByRole("button", { name: "Siapkan simulasi" }),
    ).toBeDisabled();
  }
  await page.getByLabel("Penyedia sertifikasi").selectOption("Google Cloud");
  await expect(page.locator(".bank-card")).toHaveCount(1);
  await page.getByLabel("Bahasa soal", { exact: true }).selectOption("en");
  await expect(
    page.getByRole("heading", { name: "Tidak ada bank yang cocok" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Hapus filter", exact: true }).click();
  await page.getByLabel("Cari bank soal", { exact: true }).fill("SAA-C03");
  await expect(page.locator(".bank-card")).toHaveCount(2);
  await page.getByLabel("Cari bank soal", { exact: true }).fill("");
  await page.screenshot({ path: `${out}/desktop.png`, fullPage: true });

  for (const [width, height] of [
    [375, 812],
    [812, 375],
    [768, 1024],
  ]) {
    await page.setViewportSize({ width, height });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: `${out}/mobile-light.png`, fullPage: true });
  await page.evaluate(() => {
    document.documentElement.dataset.theme = "dark";
  });
  await page.screenshot({ path: `${out}/mobile-dark.png`, fullPage: true });
  await page.evaluate(() => {
    document.documentElement.dataset.theme = "light";
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator('h2 a[href="#banks/ccp-id"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Cloud Practitioner",
  );
  await expect(page.locator(".bank-question").first()).toBeVisible();
  if (!remote) {
    await expect(page.locator(".bank-question")).toHaveCount(2);
    await expect(page.locator(".bank-question").first()).toContainText(
      updated.prompt,
    );
    await page
      .getByLabel("Cari soal", { exact: true })
      .fill("tidak-ada-soal-yang-cocok");
    await expect(page.locator(".bank-question")).toHaveCount(0);
    await page.getByLabel("Cari soal", { exact: true }).fill(updated.id);
    await expect(page.locator(".bank-question")).toHaveCount(1);
  }
  await page.locator(".bank-question summary").first().click();
  await expect(page.locator(".bank-question .rationale").first()).toBeVisible();
  await page.getByLabel("Bahasa tampilan").selectOption("en");
  await expect(
    page.getByLabel("Search questions", { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Bahasa Indonesia",
  );
  await page.reload();
  await page
    .getByRole("button", { name: "Browse question banks", exact: true })
    .click();
  await expect(page).toHaveURL(/#banks\/ccp-id$/);
  await expect(page.locator(".bank-question").first()).toBeVisible();
  await page.getByLabel("Display language").selectOption("id");
  await page
    .getByLabel("Domain materi", { exact: true })
    .selectOption(selected[0].domain);
  const domainLabel = await page
    .getByLabel("Domain materi", { exact: true })
    .locator("option:checked")
    .textContent();
  await expect(page.locator(".bank-question-meta").first()).toContainText(
    domainLabel,
  );
  await page
    .getByRole("button", { name: "Siapkan latihan", exact: true })
    .click();
  await expect(page).toHaveURL(/#lobby$/);
  await expect(page.getByLabel("Bahasa soal", { exact: true })).toHaveValue(
    "id",
  );
  if (!remote)
    await expect(page.getByLabel("Jumlah soal", { exact: true })).toHaveValue(
      "2",
    );
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(page.locator(".question-panel")).toBeVisible();
  await page
    .getByRole("button", { name: "Simpan & jeda", exact: true })
    .click();
  await page.locator('.app-header a[href="#banks"]').click();
  await page.locator('.app-header nav a[href="#lobby"]').click();
  await expect(
    page.getByRole("button", { name: "Lanjutkan sesi", exact: true }),
  ).toBeVisible();
  await page.locator('.app-header a[href="#banks"]').click();
  if (!remote) {
    offline = true;
    await page
      .getByRole("button", { name: "Muat ulang bank", exact: true })
      .click();
    await expect(page.locator('.bank-card[aria-busy="true"]')).toHaveCount(0);
    const card = page
      .locator(".bank-card")
      .filter({ has: page.locator('a[href="#banks/ccp-id"]') });
    await expect(card.locator("dd").first()).toHaveText("2");
    await expect(card).toContainText("bank terakhir yang tersimpan");
  }
  await page.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
  for (const theme of ["light", "dark"]) {
    await page.evaluate((theme) => {
      document.documentElement.dataset.theme = theme;
    }, theme);
    const violations = await page.evaluate(async () =>
      (
        await window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
        })
      ).violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    );
    expect(violations, `${theme} accessibility`).toEqual([]);
  }
  await page.locator('h2 a[href="#banks/ccp-en"]').click();
  await expect(page.locator(".bank-question")).toHaveCount(20);
  await page
    .getByRole("button", { name: "Tampilkan soal berikutnya", exact: true })
    .click();
  await expect(page.locator(".bank-question")).toHaveCount(40);
  await page.locator(".bank-question summary").first().click();
  await page.screenshot({ path: `${out}/detail.png`, fullPage: true });
  await page
    .getByRole("button", { name: "Siapkan simulasi", exact: true })
    .click();
  await expect(page).toHaveURL(/#lobby$/);
  await expect(page.getByLabel("Bahasa soal", { exact: true })).toHaveValue(
    "en",
  );
  await expect(
    page.getByRole("button", { name: "Mulai simulasi", exact: true }),
  ).toBeEnabled();
  await page.locator('.app-header a[href="#banks"]').click();
  await page.evaluate(() => {
    location.hash = "banks/not-a-bank";
  });
  await expect(
    page.getByRole("heading", { name: "Bank tidak ditemukan" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Kembali ke daftar bank" }).click();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
  console.log(
    "Question bank catalog: filters, details, published updates/withdrawals, language, deep links, session preservation, offline cache and accessible responsive layouts passed.",
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

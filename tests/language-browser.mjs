import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
const remote = process.env.EXAM_TEST_URL;
const port = 4178,
  base = remote || `http://127.0.0.1:${port}`;
const preview = remote
  ? null
  : spawn(
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
const errors = [],
  results = [];
const artifacts = "artifacts/language";
mkdirSync(artifacts, { recursive: true });
async function snapshot() {
  return page.evaluate(
    () =>
      new Promise((resolve, reject) => {
        const request = indexedDB.open("aws-exam-v2");
        request.onerror = reject;
        request.onsuccess = () => {
          const db = request.result,
            transaction = db.transaction("sessions"),
            row = transaction.objectStore("sessions").get("guest");
          transaction.oncomplete = () => {
            db.close();
            resolve(row.result);
          };
          transaction.onerror = reject;
        };
      }),
  );
}
try {
  if (!remote)
    for (let i = 0; i < 50; i++) {
      try {
        if ((await fetch(base)).ok) break;
      } catch {}
      await wait(200);
    }
  let executablePath;
  if (!existsSync(chromium.executablePath())) {
    const previous =
      await import("../../career-ops/node_modules/playwright/index.mjs");
    executablePath = previous.chromium.executablePath();
  }
  browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
  });
  if (!remote)
    await context.route("**/*", (route) =>
      new URL(route.request().url()).hostname === "127.0.0.1"
        ? route.continue()
        : route.abort(),
    );
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (d) => d.accept());
  await page.goto(base);
  await page.getByLabel("Bahasa tampilan", { exact: true }).selectOption("en");
  await expect(
    page.getByRole("heading", { name: "Welcome back" }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.reload();
  await expect(
    page.getByLabel("Display language", { exact: true }),
  ).toHaveValue("en");
  results.push(
    "English UI selection persists across reload with document language",
  );
  const second = await context.newPage();
  await second.goto(base);
  await second
    .getByLabel("Display language", { exact: true })
    .selectOption("id");
  await expect(page.getByLabel("Bahasa tampilan", { exact: true })).toHaveValue(
    "id",
  );
  await second
    .getByLabel("Bahasa tampilan", { exact: true })
    .selectOption("en");
  await expect(
    page.getByLabel("Display language", { exact: true }),
  ).toHaveValue("en");
  await second.close();
  results.push("Language preference stays consistent across tabs");
  await page.getByRole("button", { name: "Try practice as a guest" }).click();
  await expect(
    page.getByRole("button", { name: "Start practice", exact: true }),
  ).toBeEnabled();
  await expect(
    page.getByLabel("Question language", { exact: true }),
  ).toHaveValue("id");
  await page.getByLabel("Number of questions", { exact: true }).fill("3");
  await page.getByLabel("Duration", { exact: true }).selectOption("15");
  await page
    .getByRole("button", { name: "Start practice", exact: true })
    .click();
  await page.locator(".choice input").first().check();
  await page.getByRole("button", { name: "Flag for review" }).click();
  await expect(page.locator(".save-state")).toHaveText(
    "Progress saved on this device",
  );
  const before = await snapshot();
  await page.getByLabel("Display language", { exact: true }).selectOption("id");
  await expect(
    page.getByRole("button", { name: "Simpan & jeda" }),
  ).toBeVisible();
  const after = await snapshot();
  for (const key of [
    "id",
    "answers",
    "flags",
    "questions",
    "deadline",
    "config",
    "index",
  ])
    expect(after[key]).toEqual(before[key]);
  await expect(page.locator(".question-panel h1")).toHaveAttribute(
    "lang",
    "id",
  );
  results.push(
    "Switching UI language preserves questions, answers, flags and deadline",
  );
  await page.getByLabel("Bahasa tampilan", { exact: true }).selectOption("en");
  for (const width of [360, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    await expect(
      page.getByLabel("Display language", { exact: true }),
    ).toBeVisible();
  }
  await page.screenshot({
    path: `${artifacts}/exam-mobile-en.png`,
    fullPage: true,
  });
  results.push("English exam and language control fit mobile screens");
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.getByRole("button", { name: "Review all questions" }).click();
  await page.getByRole("button", { name: "Submit exam" }).click();
  await expect(
    page.getByRole("heading", { name: "Review your attempt" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "History", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "History & progress" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Open review" })).toHaveCount(
    1,
  );
  await page.getByLabel("Display language", { exact: true }).selectOption("id");
  await expect(
    page.getByRole("heading", { name: "Riwayat & perkembangan" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Buka review" })).toHaveCount(
    1,
  );
  results.push("Results and history switch language without losing attempts");
  await page.getByRole("link", { name: "Ruang belajar", exact: true }).click();
  await page.getByLabel("Bahasa soal", { exact: true }).selectOption("en");
  await expect(
    page.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeEnabled();
  await page.getByLabel("Jumlah soal", { exact: true }).fill("1");
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(page.locator(".question-panel h1")).toHaveAttribute(
    "lang",
    "en",
  );
  await expect(
    page.getByRole("button", { name: "Simpan & jeda" }),
  ).toBeVisible();
  expect((await snapshot()).config.lang).toBe("en");
  results.push(
    "English questions work independently from Indonesian interface",
  );
  expect(errors).toEqual([]);
  writeFileSync(
    `${artifacts}/results.json`,
    JSON.stringify({ base, results, errors }, null, 2),
  );
  console.log(results.map((result) => `PASS ${result}`).join("\n"));
} catch (error) {
  if (page)
    await page.screenshot({ path: `${artifacts}/failure.png`, fullPage: true });
  throw error;
} finally {
  await browser?.close();
  preview?.kill();
}

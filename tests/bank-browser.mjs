import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
const port = 4177,
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
let browser;
try {
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
  const context = await browser.newContext();
  let offline = false;
  const bank = JSON.parse(readFileSync("src/data/banks/ccp-id.json")),
    original = bank.find((q) => q.id === "curated-ccp-id-1");
  const updated = {
    ...original,
    prompt: "Soal terbaru dari bank pusat",
    version: 2,
  };
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.pathname === "/api/questions/approved")
      return offline
        ? route.fulfill({ status: 503, json: { error: "Offline" } })
        : route.fulfill({
            json: {
              items: [updated],
              total: 1,
              excludedIds: bank
                .filter((q) => q.id !== original.id)
                .map((q) => q.id),
            },
          });
    return url.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  page.on("dialog", (d) => d.accept());
  await page.goto(base);
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(
    page.getByText(/1 soal sesuai cakupan · 1 soal dalam bahasa ini/),
  ).toBeVisible();
  await page.getByLabel("Jumlah soal", { exact: true }).fill("1");
  await page
    .getByRole("button", { name: "Mulai latihan", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Soal terbaru dari bank pusat" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Simpan & jeda" }).click();
  offline = true;
  await page.reload();
  await page.getByRole("button", { name: "Coba latihan sebagai tamu" }).click();
  await expect(
    page.getByText(
      "Bank pusat belum tersedia. Menggunakan bank terakhir yang tersimpan di perangkat.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(
    page.getByText(/1 soal sesuai cakupan · 1 soal dalam bahasa ini/),
  ).toBeVisible();
  console.log(
    "PASS Central edits replace built-in versions; rejected IDs stay excluded in cached offline bank",
  );
} finally {
  await browser?.close();
  preview.kill();
}

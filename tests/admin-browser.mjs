import { chromium, expect } from "@playwright/test";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
const port = 4176,
  base = `http://127.0.0.1:${port}`,
  userId = "44444444-4444-4444-8444-444444444444";
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
const errors = [];
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
  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
  });
  const user = {
    id: userId,
    email: "admin@example.invalid",
    user_metadata: { name: "Test Admin" },
    aud: "authenticated",
    role: "authenticated",
  };
  const token =
    Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString(
      "base64url",
    ) +
    "." +
    Buffer.from(
      JSON.stringify({
        sub: userId,
        exp: Math.floor(Date.now() / 1000) + 3600,
        aud: "authenticated",
      }),
    ).toString("base64url") +
    ".test-signature";
  let offline = false,
    saved = 0,
    batches = [],
    assignments = [];
  let question = {
    ...JSON.parse(readFileSync("src/data/banks/saa-id.json"))[0],
    status: "draft",
  };
  await context.route("**/*", async (route) => {
    const request = route.request(),
      url = new URL(request.url()),
      method = request.method();
    if (url.pathname === "/api/identity")
      return route.fulfill({
        json: {
          id: userId,
          email: user.email,
          name: "Test Admin",
          role: "admin",
        },
      });
    if (url.pathname === "/api/questions/approved")
      return route.fulfill({ json: { items: [], total: 0 } });
    if (url.pathname === "/api/questions")
      return route.fulfill({ json: { items: [question], total: 1 } });
    if (url.pathname.startsWith("/api/questions/") && method === "PUT") {
      if (offline)
        return route.fulfill({
          status: 503,
          json: { error: "Offline fixture" },
        });
      question = {
        ...question,
        ...request.postDataJSON(),
        version: question.version + 1,
      };
      saved++;
      return route.fulfill({ json: { item: question } });
    }
    if (url.pathname.includes("/auth/v1/token"))
      return route.fulfill({
        json: {
          access_token: token,
          refresh_token: "fixture-refresh",
          token_type: "bearer",
          expires_in: 3600,
          user,
        },
      });
    if (url.pathname.includes("/auth/v1/user"))
      return route.fulfill({ json: user });
    if (url.pathname.includes("/rest/v1/batches")) {
      if (method === "POST") {
        const input = request.postDataJSON();
        batches = [
          {
            ...(Array.isArray(input) ? input[0] : input),
            id: "55555555-5555-4555-8555-555555555555",
            join_code: "fixture-invitation-code",
          },
        ];
        return route.fulfill({ json: [] });
      }
      return route.fulfill({ json: batches });
    }
    if (url.pathname.includes("/rest/v1/assignments")) {
      if (method === "POST") {
        const input = request.postDataJSON();
        assignments = [
          {
            ...(Array.isArray(input) ? input[0] : input),
            id: "66666666-6666-4666-8666-666666666666",
          },
        ];
        return route.fulfill({ json: [] });
      }
      return route.fulfill({ json: assignments });
    }
    if (url.pathname.includes("/rest/v1/rpc/batch_report"))
      return route.fulfill({
        json: [
          {
            user_id: "learner",
            name: "Learner",
            assignment_id: "assignment",
            score_rate: 50,
            domain_performance: [{ domain: "Cloud Concepts", accuracy: 50 }],
            submitted_at: Date.now(),
          },
        ],
      });
    if (url.pathname.includes("/rest/v1/")) return route.fulfill({ json: [] });
    if (url.hostname === "127.0.0.1") return route.continue();
    return route.abort();
  });
  page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("dialog", (d) => d.accept());
  await page.goto(base);
  await page.getByLabel("Email", { exact: true }).fill(user.email);
  await page.getByLabel("Password", { exact: true }).fill("TestPassword123!");
  await page.getByRole("button", { name: "Masuk", exact: true }).click();
  await page.getByRole("link", { name: "Admin", exact: true }).click();
  await page.locator(".admin-question-list button").first().click();
  offline = true;
  await page.getByRole("button", { name: "Simpan draft", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Draft lokal belum tersinkron" }),
  ).toBeVisible();
  expect(saved).toBe(0);
  offline = false;
  await page
    .getByRole("button", { name: "Sinkronkan antrean", exact: true })
    .click();
  await expect(
    page.getByText("Antrean berhasil disinkronkan.", { exact: true }),
  ).toBeVisible();
  expect(saved).toBe(1);
  console.log(
    "PASS Offline admin edits remain pending and retry to the central bank",
  );
  mkdirSync("artifacts/browser", { recursive: true });
  await page.screenshot({
    path: "artifacts/browser/admin-desktop.png",
    fullPage: true,
  });
  await page.getByRole("link", { name: "Kelas", exact: true }).click();
  await page.getByLabel("Nama batch", { exact: true }).fill("Batch 17");
  await page.getByRole("button", { name: "Buat batch baru" }).click();
  await expect(
    page.getByText("fixture-invitation-code", { exact: true }),
  ).toBeVisible();
  await page.getByLabel("Judul", { exact: true }).fill("Simulasi CCP 1");
  await page.getByLabel("Tenggat", { exact: true }).fill("2026-11-01T19:00");
  await page
    .getByRole("button", { name: "Simpan penugasan", exact: true })
    .click();
  await expect(page.getByText("Simulasi CCP 1", { exact: true })).toBeVisible();
  await expect(page.getByText("Learner", { exact: true })).toBeVisible();
  console.log(
    "PASS Coach creates batch/assignment and sees participants needing support",
  );
  await page.screenshot({
    path: "artifacts/browser/coach-desktop.png",
    fullPage: true,
  });
  expect(errors).toEqual([]);
} catch (error) {
  console.error({
    errors,
    url: page?.url(),
    body: page ? await page.locator("body").innerText() : "",
  });
  throw error;
} finally {
  await browser?.close();
  preview.kill();
}

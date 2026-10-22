import { chromium, expect } from "@playwright/test";
import { PGlite } from "@electric-sql/pglite";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { setTimeout as wait } from "node:timers/promises";
const base = "http://127.0.0.1:4197",
  out = "artifacts/classroom-learners-20261022";
mkdirSync(out, { recursive: true });
const db = new PGlite();
await db.exec(`CREATE ROLE anon; CREATE ROLE authenticated; CREATE SCHEMA auth; CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;`);
for (const file of [
  "20261019_classroom_upgrade.sql",
  "20261022_classroom_learners.sql",
])
  await db.exec(readFileSync(`supabase/migrations/${file}`, "utf8"));
const uid = randomUUID(),
  host = randomUUID();
await db.query("insert into auth.users values ($1)", [uid]);
let queue = Promise.resolve();
function rpc(action, payload = {}, account = "") {
  const task = queue.then(async () => {
    await db.exec("RESET ROLE");
    await db.query("select set_config('request.jwt.claim.sub',$1,false)", [
      account,
    ]);
    await db.exec(`SET ROLE ${account ? "authenticated" : "anon"}`);
    return (
      await db.query("select public.classroom_rpc($1,$2::jsonb) result", [
        action,
        JSON.stringify(payload),
      ])
    ).rows[0].result;
  });
  queue = task.catch(() => {});
  return task;
}
const questions = JSON.parse(readFileSync("src/data/banks/ccp-id.json", "utf8"))
  .filter((q) => q.status === "approved")
  .slice(0, 3);
const room = await rpc("create", {
  token: host,
  title: "Learner feedback class",
  questions,
  minutes: 20,
});
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4197",
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
  const env = readFileSync(".env", "utf8");
  const project = new URL(
    env.match(/VITE_SUPABASE_URL=["']?([^\s"']+)/)[1],
  ).hostname.split(".")[0];
  const user = {
    id: uid,
    email: "learner@example.test",
    aud: "authenticated",
    role: "authenticated",
    user_metadata: { name: "Learner" },
    app_metadata: { provider: "email" },
    created_at: new Date().toISOString(),
  };
  async function fresh() {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
    });
    await context.addInitScript(
      ({ key, user }) => {
        const token = [
          "eyJhbGciOiJIUzI1NiJ9",
          btoa(
            JSON.stringify({
              sub: user.id,
              role: "authenticated",
              exp: Math.floor(Date.now() / 1000) + 3600,
            }),
          ),
          "test-signature",
        ].join(".");
        localStorage.setItem(
          key,
          JSON.stringify({
            access_token: token,
            refresh_token: "test-refresh",
            expires_at: Math.floor(Date.now() / 1000) + 3600,
            expires_in: 3600,
            token_type: "bearer",
            user,
          }),
        );
      },
      { key: `sb-${project}-auth-token`, user },
    );
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.pathname.endsWith("/rpc/classroom_rpc")) {
        const input = route.request().postDataJSON();
        try {
          return route.fulfill({
            json: await rpc(input.action, input.payload, uid),
          });
        } catch (e) {
          return route.fulfill({ status: 400, json: { message: e.message } });
        }
      }
      if (url.pathname === "/auth/v1/user")
        return route.fulfill({ json: user });
      if (url.pathname === "/api/identity")
        return route.fulfill({
          json: { ...user, name: "Learner", role: "student" },
        });
      if (url.origin !== new URL(base).origin)
        return route.fulfill({ json: [] });
      return route.continue();
    });
    const page = await context.newPage();
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${base}/#live/${room.code}`);
    await expect(
      page.getByText("Masuk sebagai learner@example.test", { exact: true }),
    ).toBeVisible();
    return { context, page };
  }
  const first = await fresh();
  await first.page.getByLabel("Nama peserta", { exact: true }).fill("Learner");
  await first.page
    .getByRole("button", { name: "Gabung sesi", exact: true })
    .click();
  await expect(
    first.page.getByRole("heading", { name: "Ruang tunggu", exact: true }),
  ).toBeVisible();
  await rpc("start", { code: room.code, token: host });
  await expect(first.page.locator(".choice-list")).toBeVisible({
    timeout: 15000,
  });
  await expect(
    first.page.getByRole("button", {
      name: "Tandai untuk review",
      exact: true,
    }),
  ).toBeEnabled({ timeout: 15000 });
  await first.page.locator(".choice input").first().check();
  await first.page
    .getByRole("button", { name: "Tandai untuk review", exact: true })
    .click();
  await expect(
    first.page.getByRole("button", { name: "Hapus tanda review", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  // Flag acknowledgement must also flush the answer queued just before it.
  const credential = await first.page.evaluate(() =>
    JSON.parse(sessionStorage.getItem("aws-classroom-access-v1")),
  );
  const stored = (await rpc("state", credential, uid)).member.answers;
  if (stored[questions[0].id]?.[0] !== questions[0].options[0].id)
    throw new Error("Flag returned before pending answer was stored");
  await expect(first.page.locator(".live-actions")).not.toContainText(
    "kumpulkan",
  );
  await first.page
    .getByRole("button", { name: "Tinjau & kumpulkan", exact: true })
    .click();
  await expect(first.page.getByRole("dialog")).toContainText("1 ditandai");
  await first.page
    .getByRole("button", { name: "Kembali mengerjakan", exact: true })
    .click();
  await expect(first.page.getByRole("dialog")).toHaveCount(0);
  await expect(first.page.locator(".choice input").first()).toBeChecked();
  await first.context.close();
  const second = await fresh();
  await second.page
    .getByRole("button", { name: `Buka sesi ${room.code}`, exact: true })
    .click();
  await expect(second.page.locator(".choice input").first()).toBeChecked();
  await expect(
    second.page.getByRole("button", {
      name: "Hapus tanda review",
      exact: true,
    }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    second.page.getByText("Sesi ini tersimpan ke akun Anda.", { exact: true }),
  ).toBeVisible();
  await second.page.setViewportSize({ width: 375, height: 812 });
  await second.page
    .getByRole("button", { name: "Tinjau & kumpulkan", exact: true })
    .click();
  await expect(second.page.getByRole("dialog")).toBeVisible();
  await second.page.screenshot({ path: `${out}/submit-mobile.png` });
  await second.page.keyboard.press("Escape");
  await expect(second.page.getByRole("dialog")).toHaveCount(0);
  await second.page.getByLabel("Bahasa tampilan").selectOption("en");
  await second.page
    .getByRole("button", { name: "Review & submit", exact: true })
    .click();
  await expect(second.page.getByRole("dialog")).toContainText(
    "2 incomplete questions",
  );
  await second.page
    .getByRole("button", { name: "Yes, submit answers", exact: true })
    .click();
  await expect(second.page.getByRole("dialog")).toHaveCount(0);
  await rpc("reveal", { code: room.code, token: host });
  await expect(second.page.locator(".rationale")).toBeVisible({
    timeout: 15000,
  });
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(
    "PASS: account join, private flags, canceled submit, fresh-browser restoration, mobile dialog, language switch, immutable submit and released review.",
  );
} finally {
  await browser?.close();
  server.kill();
  await db.close();
}

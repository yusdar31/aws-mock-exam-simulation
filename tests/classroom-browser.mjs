import { chromium, expect } from "@playwright/test";
import { PGlite } from "@electric-sql/pglite";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const base = "http://127.0.0.1:4193",
  out = "artifacts/classroom";
mkdirSync(out, { recursive: true });
const db = new PGlite();
await db.exec("CREATE ROLE anon; CREATE ROLE authenticated;");
await db.exec(
  readFileSync("supabase/migrations/20261018_live_classroom.sql", "utf8"),
);
const preview = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4193",
    "--strictPort",
  ],
  { windowsHide: true, stdio: "pipe" },
);
const scans = [];
const errors = [],
  results = [],
  payloads = [];
let browser;
let queue = Promise.resolve(),
  aliceOffline = false;
async function rpc(action, payload) {
  const run = queue.then(async () => {
    await db.exec("SET ROLE anon");
    const r = await db.query(
      "SELECT public.classroom_rpc($1,$2::jsonb) as result",
      [action, JSON.stringify(payload)],
    );
    return r.rows[0].result;
  });
  queue = run.catch(() => {});
  return run;
}
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
  async function context(name, clock = 0) {
    console.log(`Browser context: ${name}`);
    const c = await browser.newContext({
      viewport: { width: 1280, height: 900 },
    });
    if (clock)
      await c.addInitScript((delta) => {
        const original = Date.now;
        Date.now = () => original() + delta;
      }, clock);
    await c.route("**/*", async (route) => {
      const u = new URL(route.request().url());
      if (u.pathname.endsWith("/rpc/classroom_rpc")) {
        if (name === "Alice" && aliceOffline) return route.abort();
        const input = route.request().postDataJSON();
        try {
          const data = await rpc(input.action, input.payload);
          payloads.push({ who: name, action: input.action, data });
          return route.fulfill({ json: data });
        } catch (e) {
          console.log(
            `Classroom RPC rejected (${name}, ${input.action}): ${e.message}`,
          );
          return route.fulfill({
            status: 400,
            json: { code: "P0001", message: e.message },
          });
        }
      }
      return u.hostname === "127.0.0.1" ? route.continue() : route.abort();
    });
    const p = await c.newPage();
    p.on("pageerror", (e) => errors.push(e.message));
    p.on("dialog", (d) => d.accept());
    return { c, p };
  }
  const host = await context("Host"),
    alice = await context("Alice", 600000),
    bob = await context("Bob", -480000);
  async function scan(page, screen) {
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
          targets: v.nodes.map((n) => n.target),
        })),
        incomplete: r.incomplete.map((v) => v.id),
      };
    });
    scans.push({ screen, ...r });
    expect(r.violations).toEqual([]);
  }
  await host.p.goto(`${base}/#live`);
  await expect(
    host.p.getByRole("button", { name: "Buat sesi", exact: true }),
  ).toBeEnabled();
  await host.p.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await host.p.getByLabel("Durasi (menit)", { exact: true }).fill("1");
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(host.p.locator(".room-code")).toBeVisible();
  const code = await host.p.locator(".room-code").innerText();
  const extraTab = await host.c.newPage();
  await extraTab.goto(`${base}/#live/${code}`);
  await expect(
    extraTab.getByRole("button", { name: "Gabung sesi", exact: true }),
  ).toBeEnabled();
  await extraTab.close();
  for (const { p } of [alice, bob]) await p.goto(`${base}/#live/${code}`);
  await alice.p.getByLabel("Nama peserta", { exact: true }).fill("Alice");
  await bob.p.getByLabel("Nama peserta", { exact: true }).fill("Bob");
  for (const { p } of [alice, bob]) {
    await expect(
      p.getByRole("button", { name: "Gabung sesi", exact: true }),
    ).toBeEnabled();
    await p.getByRole("button", { name: "Gabung sesi", exact: true }).click();
    await expect(
      p.getByText("Anda sudah bergabung. Tunggu instruktur memulai sesi."),
    ).toBeVisible();
  }
  await expect(host.p.locator(".participant-list > li")).toHaveCount(2);
  expect(
    payloads
      .filter((x) => x.who !== "Host" && x.data.status === "waiting")
      .every((x) => x.data.questions.length === 0),
  ).toBe(true);
  await host.p.screenshot({ path: `${out}/host-waiting.png`, fullPage: true });
  await scan(host.p, "host-waiting");
  results.push(
    "Named guests join by code/link; waiting room hides questions and answer keys",
  );
  await host.p
    .getByRole("button", { name: "Mulai untuk semua peserta" })
    .click();
  await expect(alice.p.locator(".choice-list")).toBeVisible({ timeout: 12000 });
  await expect(bob.p.locator(".choice-list")).toBeVisible({ timeout: 12000 });
  await expect(
    host.p.getByRole("heading", { name: "Soal sesi", exact: true }),
  ).toBeVisible();
  await expect(host.p.locator(".live-host-questions h3")).toHaveText(
    await alice.p.locator("article h2").innerText(),
  );
  expect(await host.p.locator(".live-host-options li").count()).toBe(
    await alice.p.locator(".choice input").count(),
  );
  await host.p
    .getByRole("button", { name: "Lihat soal 2", exact: true })
    .click();
  await expect(host.p.locator(".live-host-questions .eyebrow")).toHaveText(
    "Soal 2/3",
  );
  await expect(alice.p.locator("article .eyebrow")).toHaveText("Soal 1/3");
  await host.p
    .getByRole("button", { name: "Lihat soal 1", exact: true })
    .click();
  results.push(
    "Host can view identical live questions/options and navigate independently without moving participants",
  );
  const a = payloads.findLast(
      (x) => x.who === "Alice" && x.data.questions.length,
    ),
    b = payloads.findLast((x) => x.who === "Bob" && x.data.questions.length);
  expect(a.data.questions).toEqual(b.data.questions);
  expect(a.data.endsAt).toBe(b.data.endsAt);
  expect(a.data.questions[0].correctAnswers).toBeUndefined();
  const timerA = await alice.p.locator(".live-timer").innerText(),
    timerB = await bob.p.locator(".live-timer").innerText();
  const seconds = (value) => {
    const [minutes, seconds] = value.split(":").map(Number);
    return minutes * 60 + seconds;
  };
  expect(
    Math.abs(seconds(timerA) - seconds(timerB)),
  ).toBeLessThanOrEqual(2);
  results.push(
    "All participants receive identical packets/options/deadlines despite different device clocks",
  );
  await scan(alice.p, "participant-active");
  await alice.p.locator(".choice input").first().check();
  await bob.p.locator(".choice input").nth(1).check();
  await expect(
    alice.p.getByText(
      "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron.",
    ),
  ).toHaveCount(0);
  await expect
    .poll(
      () =>
        payloads.filter((x) => x.action === "save" && x.who === "Bob").length,
    )
    .toBeGreaterThan(0);
  const savedA = payloads.findLast(
      (x) => x.who === "Alice" && x.data.member?.revision > 0,
    ),
    savedB = payloads.findLast(
      (x) => x.who === "Bob" && x.data.member?.revision > 0,
    );
  expect(savedA.data.member.answers).not.toEqual(savedB.data.member.answers);
  aliceOffline = true;
  await alice.p
    .getByRole("button", { name: "Berikutnya", exact: true })
    .click();
  await alice.p.locator(".choice input").first().check();
  await expect(
    alice.p.getByText(
      "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron.",
    ),
  ).toBeVisible();
  aliceOffline = false;
  await alice.p.evaluate(() => window.dispatchEvent(new Event("online")));
  await expect(
    alice.p.getByText(
      "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron.",
    ),
  ).toHaveCount(0);
  await alice.p.reload();
  await expect(alice.p.locator(".choice input").first()).toBeChecked();
  await alice.p
    .getByLabel("Bahasa tampilan", { exact: true })
    .selectOption("en");
  await expect(alice.p.locator(".choice input").first()).toBeChecked();
  results.push(
    "Answers remain independent; queued answers retry after reconnect and survive reload/language switching",
  );
  await alice.p
    .getByRole("button", { name: "Submit answers", exact: true })
    .click();
  await expect(
    alice.p.getByRole("heading", { name: "Answers submitted", exact: true }),
  ).toBeVisible();
  await expect(bob.p.locator(".choice-list")).toBeVisible();
  await host.p
    .getByRole("button", { name: "Akhiri sesi", exact: true })
    .click();
  await expect(
    bob.p.getByText("Tunggu instruktur membuka hasil dan pembahasan."),
  ).toBeVisible();
  await expect(
    host.p.getByRole("button", { name: "Buka hasil & pembahasan" }),
  ).toBeEnabled();
  await expect(
    host.p.getByRole("heading", { name: "Peringkat peserta", exact: true }),
  ).toBeVisible();
  await host.p
    .getByRole("button", { name: "Pembahasan kelas", exact: true })
    .click();
  await expect(
    host.p.locator(".live-host-questions .live-answer-result"),
  ).toHaveCount(2);
  await expect(host.p.locator(".live-host-questions .rationale")).toBeVisible();
  const download = host.p.waitForEvent("download");
  await host.p.getByRole("button", { name: "Unduh rekap CSV" }).click();
  await (await download).saveAs(`${out}/results.csv`);
  expect(readFileSync(`${out}/results.csv`, "utf8")).toContain("Alice");
  expect(readFileSync(`${out}/results.csv`, "utf8")).toContain("Bob");
  await host.p.getByRole("button", { name: "Buka hasil & pembahasan" }).click();
  await expect(bob.p.locator(".rationale")).toBeVisible();
  await expect(alice.p.locator(".rationale")).toBeVisible();
  await host.p.screenshot({ path: `${out}/host-results.png`, fullPage: true });
  await scan(host.p, "host-results");
  await alice.p.screenshot({
    path: `${out}/participant-review.png`,
    fullPage: true,
  });
  results.push(
    "Individual submit freezes answers; host ends the common session, exports CSV and explicitly releases review",
  );
  for (const width of [320, 375, 768, 1440]) {
    await bob.p.setViewportSize({ width, height: 900 });
    expect(
      await bob.p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  }
  results.push("Classroom participant layout fits phones, tablets and desktop");
  await alice.c.close();
  await bob.c.close();
  await host.p
    .getByRole("button", { name: "Keluar dari sesi", exact: true })
    .click();
  await host.p
    .getByRole("button", { name: new RegExp(`Lanjutkan sesi ${code}`) })
    .click();
  await expect(
    host.p.locator(".live-table").first().locator("tbody tr"),
  ).toHaveCount(2);
  await host.p
    .getByRole("button", { name: "Keluar dari sesi", exact: true })
    .click();
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(host.p.locator(".room-code")).toBeVisible();
  expect(await host.p.locator(".room-code").innerText()).not.toBe(code);
  results.push(
    "Instructor access can be resumed; creating another session generates a fresh room",
  );
  const secondCode = await host.p.locator(".room-code").innerText();
  const dave = await context("Dave");
  await dave.p.goto(`${base}/#live/${secondCode}`);
  await expect(
    dave.p.getByRole("button", { name: "Gabung sesi", exact: true }),
  ).toBeEnabled({ timeout: 20000 });
  await dave.p.getByLabel("Nama peserta", { exact: true }).fill("Dave");
  await expect(
    dave.p.getByRole("button", { name: "Gabung sesi", exact: true }),
  ).toBeEnabled();
  await dave.p
    .getByRole("button", { name: "Gabung sesi", exact: true })
    .click();
  await expect(host.p.locator(".participant-list > li")).toHaveCount(1);
  await host.p
    .getByRole("button", { name: "Mulai untuk semua peserta" })
    .click();
  const expire = queue.then(async () => {
    await db.exec("RESET ROLE");
    await db.query(
      "UPDATE public.classroom_rooms SET starts_at=clock_timestamp()-interval '2 minutes',ends_at=clock_timestamp()-interval '1 second' WHERE code=$1",
      [secondCode],
    );
  });
  queue = expire.catch(() => {});
  await expire;
  await expect(
    dave.p.getByText("Tunggu instruktur membuka hasil dan pembahasan."),
  ).toBeVisible();
  await expect(
    host.p.getByRole("button", { name: "Buka hasil & pembahasan" }),
  ).toBeEnabled();
  results.push(
    "The server deadline ends the classroom session without an instructor or participant submit",
  );
  await dave.c.close();
  await host.p
    .getByRole("button", { name: "Keluar dari sesi", exact: true })
    .click();
  await host.p.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(host.p.locator(".room-code")).toBeVisible();
  const thirdCode = await host.p.locator(".room-code").innerText();
  const eve = await context("Eve"),
    fred = await context("Fred"),
    gina = await context("Gina");
  for (const [name, guest] of [
    ["Eve", eve],
    ["Fred", fred],
    ["Gina", gina],
  ]) {
    await guest.p.goto(`${base}/#live/${thirdCode}`);
    await expect(
      guest.p.getByRole("button", { name: "Gabung sesi", exact: true }),
    ).toBeEnabled({ timeout: 20000 });
    await guest.p.getByLabel("Nama peserta", { exact: true }).fill(name);
    await guest.p
      .getByRole("button", { name: "Gabung sesi", exact: true })
      .click();
    await expect(
      guest.p.getByText(
        "Anda sudah bergabung. Tunggu instruktur memulai sesi.",
      ),
    ).toBeVisible();
  }
  await host.p
    .getByRole("button", { name: "Mulai untuk semua peserta" })
    .click();
  await expect(eve.p.locator(".choice-list")).toBeVisible({ timeout: 12000 });
  const getPacket = queue.then(async () => {
    await db.exec("RESET ROLE");
    return (
      await db.query(
        "SELECT questions FROM public.classroom_rooms WHERE code=$1",
        [thirdCode],
      )
    ).rows[0].questions;
  });
  queue = getPacket.catch(() => {});
  const packet = await getPacket;
  const wrong = packet[0].options.findIndex(
    (o) => !packet[0].correctAnswers.includes(o.id),
  );
  await gina.p.locator(".choice input").nth(wrong).check();
  for (const guest of [eve, fred]) {
    for (const [i, q] of packet.entries()) {
      await guest.p.locator(".live-numbers button").nth(i).click();
      for (const id of q.correctAnswers)
        await guest.p
          .locator(".choice input")
          .nth(q.options.findIndex((o) => o.id === id))
          .check();
    }
    await guest.p
      .getByRole("button", { name: "Kumpulkan jawaban", exact: true })
      .click();
    await expect(
      guest.p.getByRole("heading", {
        name: "Jawaban sudah dikumpulkan",
        exact: true,
      }),
    ).toBeVisible();
  }
  await expect(
    host.p.getByRole("heading", { name: "Sesi berlangsung", exact: true }),
  ).toBeVisible();
  // Final participant submits while host is disconnected; returning host must finalize once.
  await host.p.goto("about:blank");
  await gina.p
    .getByRole("button", { name: "Kumpulkan jawaban", exact: true })
    .click();
  await expect(
    gina.p.getByRole("heading", {
      name: "Jawaban sudah dikumpulkan",
      exact: true,
    }),
  ).toBeVisible();
  await host.p.goto(`${base}/#live/${thirdCode}`);
  await expect(
    host.p.getByRole("heading", { name: "Peringkat peserta", exact: true }),
  ).toBeVisible({ timeout: 12000 });
  const ranked = host.p.locator(".live-table").first().locator("tbody tr");
  await expect(ranked).toHaveCount(3);
  expect(await ranked.locator("td:first-child").allTextContents()).toEqual([
    "1",
    "1",
    "3",
  ]);
  expect(await ranked.locator('th[scope="row"]').allTextContents()).toEqual([
    "Eve",
    "Fred",
    "Gina",
  ]);
  expect(await ranked.locator("td:nth-child(3)").allTextContents()).toEqual([
    "3/3 · 100%",
    "3/3 · 100%",
    "0/3 · 0%",
  ]);
  await host.p
    .getByRole("button", { name: "Pembahasan kelas", exact: true })
    .click();
  await expect(host.p.locator(".live-review-summary")).toHaveText(
    "2 benar · 1 salah · 0 belum dijawab",
  );
  expect(await host.p.locator(".live-answer-result").allTextContents()).toEqual(
    ["Benar", "Benar", "Salah"],
  );
  await host.p
    .getByRole("button", { name: "Lihat soal 2", exact: true })
    .click();
  await expect(host.p.locator(".live-review-summary")).toHaveText(
    "2 benar · 0 salah · 1 belum dijawab",
  );
  await expect(
    gina.p.getByText("Tunggu instruktur membuka hasil dan pembahasan."),
  ).toBeVisible();
  await expect(gina.p.locator(".rationale")).toHaveCount(0);
  await scan(host.p, "host-ranking-review");
  await host.p.screenshot({
    path: `${out}/host-ranking-review.png`,
    fullPage: true,
  });
  for (const width of [320, 375, 768, 1440]) {
    await host.p.setViewportSize({ width, height: 900 });
    expect(
      await host.p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
  }
  await host.p
    .getByLabel("Bahasa tampilan", { exact: true })
    .selectOption("en");
  await expect(
    host.p.getByRole("heading", { name: "Class review", exact: true }),
  ).toBeVisible();
  await expect(host.p.locator(".live-review-summary")).toHaveText(
    "2 correct · 0 incorrect · 1 unanswered",
  );
  await host.p.reload();
  await expect(
    host.p.getByRole("heading", { name: "Participant rankings", exact: true }),
  ).toBeVisible();
  results.push(
    "All submissions trigger host finalization after reconnect; ranking handles ties and zero scores; correct/unanswered review, privacy, reload, bilingual and responsive host screens pass",
  );
  const unavailable = await context("Unavailable");
  await unavailable.c.route("**/rest/v1/rpc/classroom_rpc", (route) =>
    route.fulfill({
      status: 404,
      json: { code: "PGRST202", message: "Function is not installed" },
    }),
  );
  await unavailable.p.goto(`${base}/#live`);
  await expect(unavailable.p.getByRole("alert")).toContainText(
    "Ujian bersama belum diaktifkan di server.",
  );
  await expect(
    unavailable.p.getByRole("button", { name: "Buat sesi", exact: true }),
  ).toBeDisabled();
  await expect(
    unavailable.p.getByRole("button", { name: "Gabung sesi", exact: true }),
  ).toBeDisabled();
  results.push(
    "Unavailable server setup disables classroom actions and explains the activation requirement",
  );
  expect(errors).toEqual([]);
  console.log(results.map((r) => `PASS ${r}`).join("\n"));
} finally {
  if (browser && results.length < 10) {
    for (const [i, c] of browser.contexts().entries()) {
      const p = c.pages()[0];
      if (p) {
        console.log(
          `Final page ${i}: ${(
            await p
              .locator("body")
              .innerText()
              .catch(() => "")
          ).slice(0, 1200)}`,
        );
        await p
          .screenshot({ path: `${out}/debug-${i}.png`, fullPage: true })
          .catch(() => {});
      }
    }
  }
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ results, errors, scans }, null, 2),
  );
  await browser?.close();
  preview.kill();
  await queue;
  await db.close();
}

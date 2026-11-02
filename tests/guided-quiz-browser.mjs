import { chromium, expect } from "@playwright/test";
import { PGlite } from "@electric-sql/pglite";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as wait } from "node:timers/promises";
const require = createRequire(import.meta.url);
const remote = !!process.env.EXAM_TEST_URL;
const base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4192";
const out = `artifacts/guided-quiz-20261102/${remote ? "production" : "local"}`;
mkdirSync(out, { recursive: true });
const db = new PGlite();
await db.exec(`CREATE ROLE anon;CREATE ROLE authenticated;CREATE SCHEMA auth;CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;`);
for (const file of [
  "20261019_classroom_upgrade.sql",
  "20261022_classroom_learners.sql",
  "20261102_guided_quiz.sql",
])
  await db.exec(readFileSync(`supabase/migrations/${file}`, "utf8"));
const bank = JSON.parse(readFileSync("src/data/banks/ccp-id.json", "utf8"));
const packet = ["001", "023", "002"].map((suffix) =>
  bank.find((q) => q.id === `ccp-scenario-id-20261102-${suffix}`),
);
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
let queue = Promise.resolve(),
  browser;
const inputs = [];
const errors = [],
  scans = [],
  responses = [];
async function rpc(action, payload) {
  const task = queue.then(async () => {
    await db.exec("RESET ROLE;SET ROLE anon");
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
async function context(name) {
  const c = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  if (name === "Host")
    await c.addInitScript(
      (packet) =>
        localStorage.setItem(
          "exam-classroom-templates-v1",
          JSON.stringify([
            {
              id: "repeatable-packet",
              title: "Guided exam review",
              questions: packet,
              minutes: 15,
              mode: "quiz",
              seconds: 0,
            },
          ]),
        ),
      packet,
    );
  await c.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.pathname.endsWith("/rpc/classroom_rpc")) {
      const input = route.request().postDataJSON();
      inputs.push(input);
      try {
        const data = await rpc(input.action, input.payload);
        responses.push({ name, action: input.action, data });
        return route.fulfill({ json: data });
      } catch (e) {
        return route.fulfill({ status: 400, json: { message: e.message } });
      }
    }
    if (url.pathname === "/api/questions/approved")
      return route.fulfill({
        json: {
          items: bank.filter((q) => q.status === "approved"),
          total: 238,
          source: "release",
          excludedIds: [],
        },
      });
    return url.origin === new URL(base).origin
      ? route.continue()
      : route.abort();
  });
  const p = await c.newPage();
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("dialog", (d) => d.accept());
  return { c, p };
}
async function scan(p, name) {
  await p.evaluate(() =>
    Promise.all(
      document
        .getAnimations()
        .map((animation) => animation.finished.catch(() => {})),
    ),
  );
  await p.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
  const violations = await p.evaluate(async () =>
    (
      await axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
        },
      })
    ).violations.map((v) => ({
      id: v.id,
      targets: v.nodes.map((n) => n.target),
    })),
  );
  scans.push({ name, violations });
  expect(violations).toEqual([]);
}
async function join(person, code, name) {
  await person.p.goto(`${base}/#live/${code}`);
  await person.p.getByLabel("Nama peserta", { exact: true }).fill(name);
  await person.p
    .getByRole("button", { name: "Gabung sesi", exact: true })
    .click();
  await expect(
    person.p.getByRole("heading", { name: "Ruang tunggu kuis", exact: true }),
  ).toBeVisible();
  await person.p
    .getByRole("button", { name: "Saya siap", exact: true })
    .click();
}
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
  const host = await context("Host"),
    alice = await context("Alice"),
    bob = await context("Bob");
  await host.p.goto(`${base}/#live`);
  await host.p
    .getByText("Pilih topik & template kelas", { exact: true })
    .click();
  await host.p
    .getByLabel("Template tersimpan", { exact: true })
    .selectOption("repeatable-packet");
  await host.p
    .getByRole("button", { name: "Gunakan template", exact: true })
    .click();
  await expect(host.p.getByLabel("Mode sesi", { exact: true })).toHaveValue(
    "quiz",
  );
  await expect(
    host.p.getByLabel("Waktu per soal (detik)", { exact: true }),
  ).toHaveValue("0");
  await host.p
    .getByRole("button", { name: "Simpan sebagai template", exact: true })
    .click();
  const saved = await host.p.evaluate(
    () => JSON.parse(localStorage.getItem("exam-classroom-templates-v1"))[0],
  );
  expect(saved.mode).toBe("quiz");
  expect(saved.seconds).toBe(0);
  expect(saved.questions.map((q) => q.id)).toEqual(packet.map((q) => q.id));
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(
    host.p.getByRole("heading", { name: "Ruang tunggu kuis", exact: true }),
  ).toBeVisible();
  const code = responses.find((r) => r.name === "Host" && r.action === "create")
    .data.code;
  await join(alice, code, "Alice");
  await join(bob, code, "Bob");
  await expect(host.p.locator(".quiz-lobby-list li")).toHaveCount(2);
  await scan(host.p, "lobby");
  await host.p.getByRole("button", { name: "Mulai kuis", exact: true }).click();
  await expect(alice.p.locator(".quiz-question h2")).toHaveText(
    packet[0].prompt,
  );
  await expect(bob.p.locator(".quiz-question h2")).toHaveText(packet[0].prompt);
  async function verticalChoices(p) {
    const boxes = await p.locator(".quiz-choice").evaluateAll((els) =>
      els.map((el) => {
        const { x, y, width, height } = el.getBoundingClientRect();
        return { x, y, width, height };
      }),
    );
    expect(boxes.length).toBe(4);
    expect(boxes.every((box) => box.height < 160)).toBe(true);
    for (let i = 1; i < boxes.length; i++) {
      expect(Math.abs(boxes[i].x - boxes[0].x)).toBeLessThan(1);
      expect(boxes[i].y).toBeGreaterThanOrEqual(
        boxes[i - 1].y + boxes[i - 1].height,
      );
    }
  }
  await verticalChoices(host.p);
  await verticalChoices(alice.p);
  await expect(alice.p.locator(".rationale")).toHaveCount(0);
  const answer = async (person, ids) => {
    for (const id of ids)
      await person.p
        .locator(".quiz-choice")
        .filter({
          has: person.p.locator(".quiz-letter", {
            hasText: new RegExp(`^${id}\\.$`),
          }),
        })
        .locator("input")
        .check();
    await person.p
      .getByRole("button", { name: "Kirim jawaban kuis", exact: true })
      .click();
    await expect(
      person.p.getByText(
        "Jawaban terkirim dan terkunci. Tunggu pembahasan dari host.",
        { exact: true },
      ),
    ).toBeVisible();
  };
  await answer(alice, packet[0].correctAnswers);
  await answer(bob, [
    packet[0].options.find((o) => !packet[0].correctAnswers.includes(o.id)).id,
  ]);
  await alice.p.reload();
  await expect(
    alice.p.getByText(
      "Jawaban terkirim dan terkunci. Tunggu pembahasan dari host.",
      { exact: true },
    ),
  ).toBeVisible();
  await expect(
    host.p.getByText("2 dari 2 peserta sudah menjawab", { exact: true }),
  ).toBeVisible();
  await host.p
    .getByRole("button", { name: "Tutup jawaban", exact: true })
    .click();
  await expect(
    alice.p.getByText("Jawaban ditutup. Tunggu host membuka pembahasan.", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(alice.p.locator(".rationale")).toHaveCount(0);
  await host.p
    .getByRole("button", { name: "Tampilkan pembahasan", exact: true })
    .click();
  await expect(alice.p.locator(".classroom-verdict")).toContainText(
    "Jawaban Anda benar",
  );
  await expect(bob.p.locator(".classroom-verdict")).toContainText(
    "Jawaban Anda salah",
  );
  await expect(host.p.locator(".quiz-leaderboard li").first()).toContainText(
    "Alice",
  );
  await verticalChoices(host.p);
  await host.p
    .getByRole("button", { name: "Mode presentasi", exact: true })
    .click();
  await expect(host.p.locator(".quiz-presentation")).toBeVisible();
  await host.p.keyboard.press("Shift+Tab");
  expect(
    await host.p
      .locator(".quiz-presentation")
      .evaluate((el) => el.contains(document.activeElement)),
  ).toBe(true);
  await scan(host.p, "presentation");
  await host.p.keyboard.press("Escape");
  await scan(host.p, "host-review");
  for (const theme of ["light", "dark"]) {
    await bob.p.evaluate(
      (value) => (document.documentElement.dataset.theme = value),
      theme,
    );
    await bob.p.setViewportSize({ width: 375, height: 900 });
    expect(
      await bob.p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
    await scan(bob.p, `mobile-${theme}`);
    await bob.p.locator(".classroom-verdict").scrollIntoViewIfNeeded();
    await bob.p.screenshot({ path: `${out}/review-${theme}.png` });
  }
  await host.p
    .getByRole("button", { name: "Lanjut ke soal berikutnya", exact: true })
    .click();
  await expect(alice.p.locator(".quiz-question h2")).toHaveText(
    packet[1].prompt,
  );
  await expect(alice.p.locator(".rationale")).toHaveCount(0);
  await answer(alice, packet[1].correctAnswers);
  await answer(bob, packet[1].correctAnswers);
  await host.p
    .getByRole("button", { name: "Tutup jawaban", exact: true })
    .click();
  await host.p
    .getByRole("button", { name: "Tampilkan pembahasan", exact: true })
    .click();
  await expect(alice.p.locator(".classroom-verdict")).toContainText(
    "Jawaban Anda benar",
  );
  await host.p.getByLabel("Bahasa tampilan").selectOption("en");
  await expect(
    host.p.getByRole("button", {
      name: "Continue to next question",
      exact: true,
    }),
  ).toBeVisible();
  await host.p
    .getByRole("button", { name: "Finish quiz", exact: true })
    .click();
  await expect(
    host.p.getByRole("heading", { name: "Final quiz rankings", exact: true }),
  ).toBeVisible();
  await expect(
    alice.p.getByRole("heading", { name: "Peringkat akhir kuis", exact: true }),
  ).toBeVisible();
  await expect(alice.p.locator(".quiz-leaderboard li").first()).toContainText(
    "2 poin",
  );
  expect(
    responses
      .filter((r) => r.name !== "Host" && r.data.mode === "quiz")
      .every((r) => !JSON.stringify(r.data).includes(packet[2].prompt)),
  ).toBe(true);
  await host.p.getByLabel("Display language").selectOption("id");
  await host.p
    .getByRole("button", { name: "Keluar dari sesi", exact: true })
    .click();
  await host.p
    .getByText("Pilih topik & template kelas", { exact: true })
    .click();
  await host.p
    .getByLabel("Template tersimpan", { exact: true })
    .selectOption(saved.id);
  await host.p
    .getByRole("button", { name: "Gunakan template", exact: true })
    .click();
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(
    host.p.getByRole("heading", { name: "Ruang tunggu kuis", exact: true }),
  ).toBeVisible();
  const replay = responses
    .filter((r) => r.name === "Host" && r.action === "create")
    .at(-1).data;
  expect(replay.code).not.toBe(code);
  expect(replay.participantCount).toBe(0);
  expect(
    inputs
      .filter((r) => r.action === "create")
      .at(-1)
      .payload.questions.map((q) => q.id),
  ).toEqual(packet.map((q) => q.id));
  // Real Web Audio scheduling plus server-driven expiry; polling must not repeat the cue.
  await host.p.evaluate(() => {
    window.quizNotes = 0;
    const original = AudioContext.prototype.createOscillator;
    AudioContext.prototype.createOscillator = function (...args) {
      window.quizNotes++;
      return original.apply(this, args);
    };
  });
  await host.p
    .getByRole("button", { name: "Suara: nonaktif", exact: true })
    .click();
  const charlie = await context("Charlie");
  await join(charlie, replay.code, "Charlie");
  const timed = queue.then(() =>
    db.exec(
      `RESET ROLE; UPDATE public.classroom_rooms SET quiz_seconds=120 WHERE code='${replay.code}';`,
    ),
  );
  queue = timed.catch(() => {});
  await timed;
  await host.p.getByRole("button", { name: "Mulai kuis", exact: true }).click();
  await expect(host.p.locator(".live-timer")).toContainText("02:");
  const expireSoon = async () => {
    const task = queue.then(() =>
      db.exec(
        `RESET ROLE; UPDATE public.classroom_rooms SET quiz_deadline=clock_timestamp()+interval '4 seconds' WHERE code='${replay.code}';`,
      ),
    );
    queue = task.catch(() => {});
    await task;
  };
  await verticalChoices(host.p);
  await host.p.screenshot({
    path: `${out}/answering-vertical.png`,
    fullPage: true,
  });
  await expireSoon();
  await expect(host.p.locator(".live-timer")).toHaveText("Waktu habis", {
    timeout: 12000,
  });
  await expect.poll(() => host.p.evaluate(() => window.quizNotes)).toBe(3);
  await wait(2200);
  expect(await host.p.evaluate(() => window.quizNotes)).toBe(3);
  await verticalChoices(host.p);
  await verticalChoices(charlie.p);
  await expect(
    charlie.p.getByRole("button", { name: "Kirim jawaban kuis", exact: true }),
  ).toHaveCount(0);
  await host.p.screenshot({
    path: `${out}/expired-vertical.png`,
    fullPage: true,
  });
  await host.p
    .getByRole("button", { name: "Tampilkan pembahasan", exact: true })
    .click();
  await verticalChoices(host.p);
  await host.p.screenshot({
    path: `${out}/host-review-vertical.png`,
    fullPage: true,
  });
  await host.p
    .getByRole("button", { name: "Suara: aktif", exact: true })
    .click();
  expect(
    await host.p.evaluate(() => localStorage.getItem("exam-quiz-sound")),
  ).toBe("off");
  await host.p
    .getByRole("button", { name: "Lanjut ke soal berikutnya", exact: true })
    .click();
  await expireSoon();
  await expect(host.p.locator(".live-timer")).toHaveText("Waktu habis", {
    timeout: 12000,
  });
  expect(await host.p.evaluate(() => window.quizNotes)).toBe(3);
  expect(errors).toEqual([]);
  console.log(
    `${remote ? "Production" : "Local"} guided quiz: reusable packet, synchronized rounds, answer locks, no future leaks, multiple answers, review, ranking, reload, presentation, mobile, dark mode and accessibility passed.`,
  );
} finally {
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ errors, scans }, null, 2),
  );
  await browser?.close();
  server?.kill();
  await queue;
  await db.close();
}

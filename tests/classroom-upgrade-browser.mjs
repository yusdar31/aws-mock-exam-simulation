import { chromium, expect as baseExpect } from "@playwright/test";
import { PGlite } from "@electric-sql/pglite";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
import { createRequire } from "node:module";
const expect = baseExpect.configure({ timeout: 15000 }),
  require = createRequire(import.meta.url);
const base = "http://127.0.0.1:4196",
  out = "artifacts/review-fixes-2026-10-19/browser";
mkdirSync(out, { recursive: true });
const db = new PGlite();
await db.exec(`CREATE ROLE anon;CREATE ROLE authenticated;CREATE SCHEMA auth;CREATE TABLE auth.users(id uuid primary key);
CREATE FUNCTION auth.uid() RETURNS uuid LANGUAGE sql STABLE AS $$ SELECT NULL::uuid $$;
CREATE FUNCTION auth.jwt() RETURNS jsonb LANGUAGE sql STABLE AS $$ SELECT '{}'::jsonb $$;`);
await db.exec(
  readFileSync("supabase/migrations/20261019_classroom_upgrade.sql", "utf8"),
);
const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    "4196",
    "--strictPort",
  ],
  { windowsHide: true, stdio: "pipe" },
);
let queue = Promise.resolve(),
  browser,
  offline = false;
const results = [],
  errors = [],
  scans = [],
  responses = [],
  counts = new Map();
function sql(fn) {
  const task = queue.then(fn);
  queue = task.catch(() => {});
  return task;
}
async function rpc(action, payload = {}, fn = "classroom_rpc") {
  return sql(async () => {
    await db.exec("SET ROLE anon");
    return (
      await db.query(`SELECT public.${fn}($1,$2::jsonb) as result`, [
        action,
        JSON.stringify(payload),
      ])
    ).rows[0].result;
  });
}
async function context(name) {
  const c = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  await c.route("**/*", async (route) => {
    const u = new URL(route.request().url());
    if (u.pathname.endsWith("/rpc/classroom_rpc")) {
      if (name === "Recovered" && offline) return route.abort();
      const input = route.request().postDataJSON();
      counts.set(name, (counts.get(name) || 0) + 1);
      try {
        const data = await rpc(input.action, input.payload);
        responses.push({ name, action: input.action, data });
        return route.fulfill({ json: data });
      } catch (e) {
        return route.fulfill({ status: 400, json: { message: e.message } });
      }
    }
    if (u.pathname.startsWith("/api/questions/reports")) {
      const action = u.pathname.endsWith("/health")
        ? "health"
        : u.pathname.endsWith("/status")
          ? "status"
          : route.request().method() === "POST"
            ? "submit"
            : "list";
      try {
        return route.fulfill({
          json: await rpc(
            action,
            route.request().postDataJSON() || {},
            "report_rpc",
          ),
        });
      } catch (e) {
        return route.fulfill({ status: 400, json: { error: e.message } });
      }
    }
    if (u.pathname === "/api/questions/approved")
      return route.fulfill({
        json: { items: [], excludedIds: [], source: "release", total: 0 },
      });
    return u.hostname === "127.0.0.1" ? route.continue() : route.abort();
  });
  const p = await c.newPage();
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("dialog", (d) => d.accept());
  return { c, p, name };
}
async function scan(p, name) {
  await p.addScriptTag({ path: require.resolve("axe-core/axe.min.js") });
  const r = await p.evaluate(async () => {
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
  scans.push({ name, ...r });
  expect(r.violations).toEqual([]);
}
async function join(guest, code, name) {
  await guest.p.goto(`${base}/#live/${code}`);
  await expect(
    guest.p.getByRole("button", { name: "Gabung sesi", exact: true }),
  ).toBeEnabled();
  await guest.p.getByLabel("Nama peserta", { exact: true }).fill(name);
  await guest.p
    .getByRole("button", { name: "Gabung sesi", exact: true })
    .click();
  await expect(
    guest.p
      .getByRole("heading", { name: "Ruang tunggu", exact: true })
      .or(guest.p.locator(".choice-list")),
  ).toBeVisible();
}
async function recover(guest, code, secret, host = false) {
  await guest.p.goto(`${base}/#live/${code}`);
  await guest.p
    .getByText("Pulihkan akses atau pindah host", { exact: true })
    .click();
  const form = guest.p
    .locator("details")
    .filter({
      has: guest.p.getByText("Pulihkan akses atau pindah host", {
        exact: true,
      }),
    })
    .locator("form");
  await form
    .getByLabel("Peran", { exact: true })
    .selectOption(host ? "host" : "member");
  await form.getByLabel("Kode pemulihan dari host").fill(secret);
  await form
    .getByRole("button", { name: "Pulihkan akses", exact: true })
    .click();
}
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
  const host = await context("Host"),
    alice = await context("Alice"),
    bob = await context("Bob");
  await host.p.goto(`${base}/#live`);
  await expect(
    host.p.getByRole("button", { name: "Buat sesi", exact: true }),
  ).toBeEnabled();
  await host.p.getByLabel("Judul sesi", { exact: true }).fill("Demo upgrade");
  await host.p.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await host.p.getByLabel("Durasi (menit)", { exact: true }).fill("5");
  await host.p
    .getByRole("button", { name: "Preview paket soal", exact: true })
    .click();
  await expect(host.p.locator(".packet-preview")).toBeVisible();
  await host.p
    .getByRole("button", { name: "Simpan sebagai template", exact: true })
    .click();
  await expect(host.p.getByRole("status")).toContainText("Template tersimpan");
  await host.p.getByRole("button", { name: "Buat sesi", exact: true }).click();
  await expect(host.p.locator(".room-code")).toBeVisible();
  const code = await host.p.locator(".room-code").innerText();
  await expect(
    host.p.getByRole("img", { name: "Pindai untuk bergabung ke sesi" }),
  ).toBeVisible();
  await host.p
    .getByLabel("Izinkan peserta terlambat dengan batas waktu yang sama", {
      exact: true,
    })
    .click();
  await expect(
    host.p.getByLabel(
      "Izinkan peserta terlambat dengan batas waktu yang sama",
      { exact: true },
    ),
  ).toBeChecked();
  await join(alice, code, "Alice");
  await join(bob, code, "Bob");
  await alice.p.getByRole("button", { name: "Saya siap", exact: true }).click();
  await bob.p.getByRole("button", { name: "Saya siap", exact: true }).click();
  await expect(host.p.locator(".participant-list li")).toHaveCount(2);
  await expect(host.p.locator(".participant-list")).toContainText("Siap");
  await scan(host.p, "host-waiting-v2");
  const spare = await context("Spare");
  await join(spare, code, "Wrong name");
  await expect(host.p.locator(".participant-list li")).toHaveCount(3);
  await host.p
    .locator(".participant-list li")
    .filter({ hasText: "Wrong name" })
    .getByRole("button", { name: "Keluarkan", exact: true })
    .click();
  await expect(host.p.locator(".participant-list li")).toHaveCount(2);
  await spare.c.close();
  await host.p.getByRole("button", { name: "Soal sesi", exact: true }).click();
  await expect(host.p.locator(".live-host-options li")).toHaveCount(4);
  const previewPrompt = await host.p
    .locator(".live-host-questions h3")
    .innerText();
  await host.p
    .getByRole("button", { name: "Mulai untuk semua peserta", exact: true })
    .click();
  await expect(alice.p.locator(".choice-list")).toBeVisible();
  await expect(alice.p.locator("article h2")).toHaveText(previewPrompt);
  await host.p
    .getByRole("button", { name: "Mode presentasi", exact: true })
    .click();
  await expect(host.p.locator(".presentation")).toBeVisible();
  await host.p.keyboard.press("Escape");
  await expect(host.p.locator(".presentation")).toHaveCount(0);
  results.push(
    "Packet preview/template and QR work; ready guests join, host removes a waiting participant and presents the identical live question.",
  );
  const carlos = await context("Carlos");
  await join(carlos, code, "Carlos");
  const packet = await sql(async () => {
    await db.exec("RESET ROLE");
    return (
      await db.query(
        "SELECT questions FROM public.classroom_rooms WHERE code=$1",
        [code],
      )
    ).rows[0].questions;
  });
  const states = responses.filter(
    (r) =>
      r.name !== "Host" &&
      r.data.questions?.length &&
      r.data.status === "running",
  );
  expect(
    states.every((r) => r.data.questions[0].correctAnswers === undefined),
  ).toBe(true);
  const a = responses.findLast((r) => r.name === "Alice" && r.data.startsAt),
    late = responses.findLast((r) => r.name === "Carlos" && r.data.startsAt);
  expect(a.data.endsAt).toBe(late.data.endsAt);
  await alice.p
    .locator(".choice input")
    .nth(
      packet[0].options.findIndex((o) => o.id === packet[0].correctAnswers[0]),
    )
    .check();
  await expect
    .poll(() =>
      responses.some(
        (r) =>
          r.name === "Alice" &&
          r.action === "save" &&
          r.data.member?.revision > 0,
      ),
    )
    .toBe(true);
  await host.p
    .getByRole("button", { name: "Monitor peserta", exact: true })
    .click();
  await host.p
    .locator(".participant-list li")
    .filter({ hasText: "Alice" })
    .getByRole("button", { name: "Pulihkan akses", exact: true })
    .click();
  const recoveryToken = await host.p
    .getByRole("textbox", { name: "Pemulihan akses Alice", exact: true })
    .inputValue();
  const recovered = await context("Recovered");
  await recover(recovered, code, recoveryToken);
  await expect(
    recovered.p
      .locator(".choice input")
      .nth(
        packet[0].options.findIndex(
          (o) => o.id === packet[0].correctAnswers[0],
        ),
      ),
  ).toBeChecked();
  await alice.c.close();
  offline = true;
  await recovered.p.locator(".live-numbers button").nth(1).click();
  await recovered.p
    .locator(".choice input")
    .nth(
      packet[1].options.findIndex((o) => o.id === packet[1].correctAnswers[0]),
    )
    .check();
  await expect(
    recovered.p.getByText(
      "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron.",
    ),
  ).toBeVisible();
  offline = false;
  await recovered.p.evaluate(() => window.dispatchEvent(new Event("online")));
  await expect(
    recovered.p.getByText(
      "Ada jawaban belum tersimpan. Tetap buka halaman ini sampai tersinkron.",
    ),
  ).toHaveCount(0);
  await host.p
    .getByText("Pindahkan host ke perangkat lain", { exact: true })
    .click();
  await host.p
    .getByRole("button", { name: "Buat kode pindah host", exact: true })
    .click();
  const transfer = await host.p
    .getByRole("textbox", { name: "Kode pindah host", exact: true })
    .inputValue();
  const nextHost = await context("NextHost");
  await recover(nextHost, code, transfer, true);
  await expect(
    nextHost.p.getByRole("button", { name: "Akhiri sesi", exact: true }),
  ).toBeVisible();
  await host.c.close();
  results.push(
    "Late guests share the deadline; host-approved recovery retains answers; offline writes retry; host transfers to a fresh browser.",
  );
  for (const guest of [recovered, carlos]) {
    for (const [i, q] of packet.entries()) {
      await guest.p.locator(".live-numbers button").nth(i).click();
      for (const id of q.correctAnswers)
        await guest.p
          .locator(".choice input")
          .nth(q.options.findIndex((o) => o.id === id))
          .check();
    }
    await guest.p
      .getByRole("button", { name: "Tinjau & kumpulkan", exact: true })
      .click();
    await guest.p
      .getByRole("button", { name: "Ya, kumpulkan jawaban", exact: true })
      .click();
  }
  const wrong = Math.max(
    0,
    packet[0].options.findIndex(
      (o) => !packet[0].correctAnswers.includes(o.id),
    ),
  );
  await bob.p.locator(".choice input").nth(wrong).check();
  await bob.p
    .getByRole("button", { name: "Tinjau & kumpulkan", exact: true })
    .click();
  await bob.p
    .getByRole("button", { name: "Ya, kumpulkan jawaban", exact: true })
    .click();
  await expect(
    nextHost.p.getByRole("heading", { name: "Peringkat peserta", exact: true }),
  ).toBeVisible();
  const ranks = nextHost.p.locator(".ranking-table tbody tr");
  expect(await ranks.locator("td:first-child").allTextContents()).toEqual([
    "1",
    "1",
    "3",
  ]);
  await expect(bob.p.locator(".rationale")).toHaveCount(0);
  await nextHost.p.waitForTimeout(3200);
  const before = counts.get("NextHost");
  await nextHost.p.waitForTimeout(5100);
  expect(counts.get("NextHost")).toBe(before);
  const dl = nextHost.p.waitForEvent("download");
  await nextHost.p
    .getByRole("button", { name: "Unduh rekap CSV", exact: true })
    .click();
  await (await dl).saveAs(`${out}/ranks.csv`);
  expect(readFileSync(`${out}/ranks.csv`, "utf8")).toContain("Carlos");
  for (const width of [320, 375, 768, 1440]) {
    await nextHost.p.setViewportSize({ width, height: 900 });
    expect(
      await nextHost.p.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBe(true);
    if (width < 600) {
      await expect(nextHost.p.locator(".live-rank-cards")).toBeVisible();
      expect(
        await nextHost.p.locator(".live-rank-cards li").first().innerText(),
      ).toContain("3/3");
    }
  }
  await nextHost.p.setViewportSize({ width: 375, height: 844 });
  await nextHost.p.screenshot({
    path: `${out}/rank-mobile.png`,
    fullPage: true,
  });
  await scan(nextHost.p, "rank-mobile");
  await nextHost.p
    .getByRole("button", { name: "Analisis kelas", exact: true })
    .click();
  await expect(
    nextHost.p.getByRole("heading", {
      name: "Prioritas pembahasan",
      exact: true,
    }),
  ).toBeVisible();
  await nextHost.p
    .getByRole("button", { name: "Pembahasan kelas", exact: true })
    .click();
  await expect(nextHost.p.locator(".live-review-summary")).toHaveText(
    "2 benar · 1 salah · 0 belum dijawab",
  );
  await scan(nextHost.p, "host-review");
  await nextHost.p
    .getByRole("button", { name: "Buka hasil & pembahasan", exact: true })
    .click();
  await expect(bob.p.locator(".rationale")).toBeVisible();
  await nextHost.p
    .getByLabel("Sinkronkan pembahasan ke peserta", { exact: true })
    .click();
  await expect(
    nextHost.p.getByLabel("Sinkronkan pembahasan ke peserta", { exact: true }),
  ).toBeChecked();
  await nextHost.p
    .getByRole("button", { name: "Lihat soal 2", exact: true })
    .click();
  await expect(bob.p.locator("article .eyebrow")).toHaveText("Soal 2/3");
  await bob.p.getByLabel("Ikuti pembahasan host", { exact: true }).uncheck();
  await bob.p.locator(".live-numbers button").first().click();
  await nextHost.p
    .getByRole("button", { name: "Lihat soal 3", exact: true })
    .click();
  await bob.p.waitForTimeout(2000);
  await expect(bob.p.locator("article .eyebrow")).toHaveText("Soal 1/3");
  results.push(
    "Server auto-finalizes all submissions; tied rankings, CSV, mobile score cards, domain analytics and opt-in synchronized review work; final host polling stops.",
  );
  await bob.p
    .getByRole("button", { name: "Latih soal salah", exact: true })
    .click();
  await expect(bob.p.locator(".choice-list")).toBeVisible();
  await expect(bob.p.locator(".exam-header")).toContainText("3");
  await bob.p.getByText("Laporkan masalah soal", { exact: true }).click();
  await bob.p
    .getByLabel("Jelaskan masalah")
    .fill("Uji lokal: mohon periksa kejelasan pembahasan soal ini.");
  await bob.p
    .getByRole("button", { name: "Kirim laporan", exact: true })
    .click();
  await expect(bob.p.locator('.question-tools [role="status"]')).toContainText(
    "Laporan diterima",
  );
  await bob.p
    .getByRole("button", { name: "Simpan & jeda", exact: true })
    .click();
  await bob.p
    .getByRole("link", { name: "Rencana & catatan", exact: true })
    .click();
  await bob.p
    .getByRole("button", { name: "Laporan soal", exact: true })
    .click();
  await bob.p
    .getByRole("button", { name: "Periksa status laporan", exact: true })
    .click();
  await expect(bob.p.locator(".report-receipt")).toContainText("Diterima");
  await sql(async () => {
    await db.exec("RESET ROLE");
    await db.exec(
      "UPDATE public.question_reports SET status='in_review',resolution='Referensi sedang diperiksa.'",
    );
  });
  await bob.p
    .getByRole("button", { name: "Periksa status laporan", exact: true })
    .click();
  await expect(bob.p.locator(".report-receipt")).toContainText(
    "Sedang ditinjau",
  );
  await sql(async () => {
    await db.exec("RESET ROLE");
    await db.exec(
      "UPDATE public.question_reports SET status='resolved',resolution='Pembahasan sudah diperjelas.'",
    );
  });
  await bob.p
    .getByRole("button", { name: "Periksa status laporan", exact: true })
    .click();
  await expect(bob.p.locator(".report-receipt")).toContainText(
    "Selesai ditinjau",
  );
  await expect(bob.p.locator(".report-receipt")).toContainText(
    "Pembahasan sudah diperjelas.",
  );
  await scan(bob.p, "report-status");
  await nextHost.p
    .getByRole("button", { name: "Keluar dari sesi", exact: true })
    .click();
  await expect(nextHost.p.locator(".classroom-history")).toContainText(
    "Demo upgrade",
  );
  await nextHost.p
    .getByRole("button", {
      name: `Hapus akses lokal sesi ${code}`,
      exact: true,
    })
    .click();
  await expect(nextHost.p.locator(".classroom-history")).toHaveCount(0);
  expect(errors).toEqual([]);
  results.push(
    "Class errors start private practice without an account; titled session history and local removal work.",
  );
  console.log(results.map((r) => "PASS " + r).join("\n"));
} finally {
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ results, errors, scans }, null, 2),
  );
  if (browser && results.length < 4) {
    for (const [i, c] of browser.contexts().entries()) {
      const p = c.pages()[0];
      if (p) {
        await p
          .screenshot({ path: `${out}/failure-${i}.png`, fullPage: true })
          .catch(() => {});
        console.log(
          `Debug ${i}: ${(
            await p
              .locator("body")
              .innerText()
              .catch(() => "")
          ).slice(0, 1600)}`,
        );
      }
    }
  }
  await browser?.close();
  server.kill();
  await queue;
  await db.close();
}

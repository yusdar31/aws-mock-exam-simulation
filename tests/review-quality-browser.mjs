import { chromium, expect as baseExpect } from "@playwright/test";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { setTimeout as wait } from "node:timers/promises";
const expect = baseExpect.configure({ timeout: 15000 }),
  require = createRequire(import.meta.url),
  base = process.env.EXAM_TEST_URL || "http://127.0.0.1:4197",
  out = `artifacts/review-fixes-2026-10-19/quality${process.env.EXAM_TEST_URL ? '-production' : ''}`;
mkdirSync(out, { recursive: true });
const server = process.env.EXAM_TEST_URL ? null : spawn(
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
const results = [],
  scans = [],
  errors = [],
  metrics = {};
let browser;
async function scan(page, name) {
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
      incomplete: r.incomplete.map((v) => ({
        id: v.id,
        targets: v.nodes.map((n) => n.target),
      })),
    };
  });
  scans.push({ name, ...r });
  expect(r.violations).toEqual([]);
  // Recheck color-contrast nodes after centering them away from the fixed launch bar.
  for (const issue of r.incomplete.filter((v) => v.id === "color-contrast"))
    for (const target of issue.targets) {
      if (target.length !== 1) continue;
      const node = page.locator(target[0]);
      await node.scrollIntoViewIfNeeded();
      const data = await node.evaluate((el) => {
        el.scrollIntoView({ block: "center" });
        const style = getComputedStyle(el);
        let parent = el,
          bg = "";
        while (parent) {
          bg = getComputedStyle(parent).backgroundColor;
          if (
            !bg.endsWith(", 0)") &&
            bg !== "transparent" &&
            bg !== "rgba(0, 0, 0, 0)"
          )
            break;
          parent = parent.parentElement;
        }
        return {
          foreground: style.color,
          background: bg,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          disabled: el.matches(":disabled") || !!el.closest(":disabled"),
        };
      });
      const rgb = (s) => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
      const lum = (s) =>
        rgb(s)
          .map((v) => v / 255)
          .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
          .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
      const a = lum(data.foreground),
        b = lum(data.background),
        ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      const threshold =
        parseFloat(data.fontSize) >= 24 ||
        (parseFloat(data.fontSize) >= 18.66 && Number(data.fontWeight) >= 700)
          ? 3
          : 4.5;
      scans.push({
        name: `${name}-contrast-check`,
        target,
        data,
        ratio,
        threshold,
      });
      if (!data.disabled) expect(ratio).toBeGreaterThanOrEqual(threshold);
    }
}
async function snapshot(p) {
  return p.evaluate(
    () =>
      new Promise((resolve) => {
        const r = indexedDB.open("aws-exam-v2");
        r.onsuccess = () => {
          const db = r.result,
            q = db.transaction("sessions").objectStore("sessions").get("guest");
          q.onsuccess = () => {
            resolve(q.result);
            db.close();
          };
        };
      }),
  );
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
  const c = await browser.newContext({ viewport: { width: 375, height: 844 } });
  await c.route("**/api/questions/approved?**", (route) =>
    route.fulfill({
      json: { items: [], excludedIds: [], source: "release", total: 0 },
    }),
  );
  const p = await c.newPage();
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("dialog", (d) => d.accept());
  await p.goto(base);
  const join = p.getByRole("link", { name: "Gabung ujian kelas", exact: true });
  await expect(join).toBeVisible();
  const box = await join.boundingBox();
  metrics.joinClassBottom = box.y + box.height;
  expect(metrics.joinClassBottom).toBeLessThanOrEqual(844);
  await scan(p, "auth-mobile");
  await p.screenshot({ path: `${out}/auth-mobile.png`, fullPage: true });
  await p
    .getByRole("button", { name: "Coba latihan sebagai tamu", exact: true })
    .click();
  await expect(
    p.getByRole("button", { name: "Mulai latihan", exact: true }),
  ).toBeEnabled();
  await expect(p.locator('select:has(option[value="archive"])')).toHaveValue(
    "reviewed",
  );
  await scan(p, "lobby-mobile");
  await p.getByLabel("Jumlah soal", { exact: true }).fill("3");
  await p.getByRole("button", { name: "Mulai latihan", exact: true }).click();
  await expect(p.locator(".choice-list")).toBeVisible();
  await p.getByRole("button", { name: "Simpan materi", exact: true }).click();
  await p.getByRole("button", { name: /Navigator/ }).click();
  await p
    .getByRole("button", { name: "Review semua soal", exact: true })
    .click();
  await p.getByRole("button", { name: "Submit ujian", exact: true }).click();
  await expect(
    p.getByRole("heading", { name: "Evaluasi percobaan Anda" }),
  ).toBeVisible();
  metrics.resultMobileHeight = await p.evaluate(
    () => document.documentElement.scrollHeight,
  );
  expect(metrics.resultMobileHeight).toBeLessThan(4000);
  await scan(p, "compact-result-mobile");
  await p.screenshot({ path: `${out}/result-mobile.png`, fullPage: true });
  await p
    .getByRole("button", { name: "Soal salah berikutnya", exact: true })
    .click();
  await expect.poll(() =>
    p.evaluate(() => document.activeElement?.id?.startsWith("result-question-")),
  ).toBe(true);
  await p.locator(".review-explanation summary").first().click();
  await expect(
    p.locator(".review-explanation").first().locator(".review-option").first(),
  ).toBeVisible();
  results.push(
    "Join class fits the first mobile viewport; default AWS content is reviewed; compact review stays under 4000px for three questions and retains full option explanations.",
  );
  await p.getByRole("link", { name: "Riwayat", exact: true }).click();
  await p.getByRole("button", { name: /Catatan soal salah/ }).click();
  await expect(p.locator(".answer-summary dd").nth(1)).not.toBeEmpty();
  await p.getByRole("link", { name: "Rencana & catatan", exact: true }).click();
  await p
    .getByLabel("Domain fokus", { exact: true })
    .selectOption({ index: 1 });
  await p
    .getByRole("button", { name: "Latih domain fokus", exact: true })
    .click();
  await expect(p.locator(".choice-list")).toBeVisible();
  await expect
    .poll(async () => (await snapshot(p))?.questions?.length)
    .toBe(10);
  const first = (await snapshot(p)).questions.map((q) => q.id);
  await p.getByRole("button", { name: "Simpan & jeda", exact: true }).click();
  await p.getByRole("link", { name: "Rencana & catatan", exact: true }).click();
  await p
    .getByRole("button", { name: "Latih domain fokus", exact: true })
    .click();
  await expect(p.locator(".choice-list")).toBeVisible();
  await expect
    .poll(async () => (await snapshot(p))?.questions?.length)
    .toBe(10);
  const second = (await snapshot(p)).questions.map((q) => q.id);
  metrics.focusOverlap = first.filter((id) => second.includes(id)).length;
  expect(metrics.focusOverlap).toBe(0);
  await p.getByRole("button", { name: "Simpan & jeda", exact: true }).click();
  await p.getByRole("link", { name: "Rencana & catatan", exact: true }).click();
  await p
    .getByRole("button", { name: "Materi & catatan tersimpan", exact: true })
    .click();
  await expect(
    p.getByRole("heading", { name: "Materi & catatan tersimpan", exact: true }),
  ).toBeVisible();
  await expect(
    p.getByRole("heading", {
      name: "Cadangan & pindah perangkat",
      exact: true,
    }),
  ).toHaveCount(0);
  await scan(p, "notes-mobile");
  results.push(
    "Wrong-answer notebook includes answer text; focus practice rotates all ten questions; study tasks are separated into accessible sections.",
  );
  await c.close();
  // Presentation fixtures use no cloud classroom records.
  const qs = JSON.parse(readFileSync("src/data/banks/ccp-id.json", "utf8"))
    .filter((q) => q.status === "approved")
    .slice(0, 3)
    .map((q) => ({ ...q, required: q.correctAnswers.length }));
  let closed = false,
    total = 30;
  const fc = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  await fc.addInitScript(() =>
    sessionStorage.setItem(
      "aws-classroom-access-v1",
      JSON.stringify({
        code: "FADEC001",
        token: "10000000-0000-4000-8000-000000000001",
        role: "host",
      }),
    ),
  );
  await fc.route("**/rest/v1/rpc/classroom_rpc", async (route) => {
    if (route.request().postDataJSON().action === "health")
      return route.fulfill({ json: { ready: true, version: 2 } });
    const now = Date.now();
    return route.fulfill({
      json: {
        version: 2,
        code: "FADEC001",
        title: "Classroom presentation fixture",
        status: closed ? "closed" : "running",
        host: true,
        minutes: 15,
        startsAt: now - 10000,
        endsAt: now + 800000,
        serverNow: now,
        revealed: closed,
        total: 3,
        participantCount: total,
        questions: qs,
        participants: Array.from({ length: total }, (_, i) => ({
          id: String(i),
          name: `Participant ${String(i + 1).padStart(3, "0")}`,
          answered: 2,
          ready: true,
          submitted: closed,
          score: closed ? i % 3 : null,
          lastSeen: now,
          answers: closed ? {} : null,
        })),
      },
    });
  });
  const fp = await fc.newPage();
  fp.on("pageerror", (e) => errors.push(e.message));
  await fp.goto(`${base}/#live/FADEC001`);
  await expect(fp.locator(".live-host-questions")).toBeVisible();
  metrics.hostQuestionTop = await fp
    .locator(".live-host-questions")
    .evaluate((el) => el.getBoundingClientRect().top + scrollY);
  expect(metrics.hostQuestionTop).toBeLessThan(900);
  await fp.screenshot({ path: `${out}/host-30.png`, fullPage: true });
  expect(await fp.locator('.host-toolbar button[aria-pressed="true"]').evaluate(
    el => getComputedStyle(el).borderColor,
  )).not.toBe(await fp.locator('.host-toolbar button[aria-pressed="false"]').first().evaluate(
    el => getComputedStyle(el).borderColor,
  ));
  await fp
    .getByRole("button", { name: "Monitor peserta", exact: true })
    .click();
  await expect(fp.locator(".participant-list > li")).toHaveCount(10);
  await scan(fp, "host-monitor");
  for (const count of [5, 100]) {
    total = count;
    await fp.reload();
    await fp
      .getByRole("button", { name: "Monitor peserta", exact: true })
      .click();
    await expect(fp.locator(".participant-list > li")).toHaveCount(
      Math.min(10, count),
    );
  }
  closed = true;
  await fp.reload();
  await fp.setViewportSize({ width: 320, height: 844 });
  await expect(fp.locator(".live-rank-cards")).toBeVisible();
  const score = await fp
    .locator(".live-rank-cards li > strong:last-child")
    .first()
    .boundingBox();
  expect(score.x + score.width).toBeLessThanOrEqual(320);
  expect(await fp.evaluate(() => document.documentElement.scrollWidth)).toBe(
    320,
  );
  await fp.screenshot({ path: `${out}/ranking-320.png`, fullPage: true });
  await fp.setViewportSize({ width: 1440, height: 900 });
  await fp.getByRole('button', { name: 'Pembahasan kelas', exact: true }).click();
  const control = fp.locator('.host-dashboard .inline-control');
  const labelBox = await control.boundingBox();
  const inputBox = await control.locator('input').boundingBox();
  expect(Math.abs(inputBox.x - labelBox.x)).toBeLessThan(4);
  expect(labelBox.height).toBeGreaterThanOrEqual(44);
  await fp.screenshot({ path: `${out}/host-review.png`, fullPage: true });
  results.push(
    "Fixtures with 5/30/100 participants keep the host question above 900px, paginate the monitor and show the ranking score without horizontal scrolling at 320px.",
  );
  expect(errors).toEqual([]);
  console.log(results.map((r) => "PASS " + r).join("\n"));
  console.log(JSON.stringify(metrics));
} finally {
  writeFileSync(
    `${out}/results.json`,
    JSON.stringify({ results, errors, scans, metrics }, null, 2),
  );
  await browser?.close();
  server?.kill();
}

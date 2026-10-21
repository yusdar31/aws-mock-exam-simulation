import { spawnSync } from "node:child_process";
for (const file of [
  "browser.mjs",
  "admin-browser.mjs",
  "bank-browser.mjs",
  "question-banks-browser.mjs",
  "ace-bank-browser.mjs",
  "language-browser.mjs",
  "usability-browser.mjs",
  "studio-browser.mjs",
  "classroom-browser.mjs",
  "classroom-upgrade-browser.mjs",
  "review-quality-browser.mjs",
]) {
  const result = spawnSync(process.execPath, [`tests/${file}`], {
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.status !== 0) {
    process.exitCode = result.status || 1;
    break;
  }
}

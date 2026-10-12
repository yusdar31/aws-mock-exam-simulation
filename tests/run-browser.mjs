import { spawnSync } from "node:child_process";
for (const file of ["browser.mjs", "admin-browser.mjs", "bank-browser.mjs"]) {
  const result = spawnSync(process.execPath, [`tests/${file}`], {
    stdio: "inherit",
    windowsHide: true,
  });
  if (result.status !== 0) {
    process.exitCode = result.status || 1;
    break;
  }
}

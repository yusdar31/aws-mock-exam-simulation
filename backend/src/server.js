import "dotenv/config";
import { createApp } from "./app.js";
import { startAutoGenerator } from "./scheduler.js";
const port = Number(process.env.PORT || 4000);
createApp().listen(port, "0.0.0.0", () => {
  console.log("Backend listening on port " + port);
  if (process.env.AI_SCHEDULER_ENABLED === "true") startAutoGenerator();
});

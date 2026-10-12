import express from "express";
import { createQuestionRouter } from "./questionApi.js";
import { requireUser, rateLimit } from "./access.js";
import { database } from "./database.js";
export function createApp({ resolver } = {}) {
  const app = express();
  app.disable("x-powered-by");
  const origins = (
    process.env.ALLOWED_ORIGINS || "http://localhost:4173,http://127.0.0.1:4173"
  ).split(",");
  app.use((request, response, next) => {
    const origin = request.headers.origin;
    if (origin && !origins.includes(origin))
      return response.status(403).json({ error: "Origin tidak diizinkan." });
    if (origin)
      response.set("Access-Control-Allow-Origin", origin).set("Vary", "Origin");
    response
      .set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
      .set("Access-Control-Allow-Headers", "Content-Type,Authorization");
    response.set("X-Content-Type-Options", "nosniff");
    if (request.method === "OPTIONS") return response.sendStatus(204);
    next();
  });
  app.use(express.json({ limit: "2mb" }));
  app.get("/health", (_request, response) => response.json({ status: "ok" }));
  app.get(
    "/api/identity",
    rateLimit(),
    requireUser(resolver),
    (request, response) => response.json(request.user),
  );
  app.use("/api/questions", createQuestionRouter(resolver));
  app.post("/api/metrics", rateLimit(20), (request, response) => {
    const { name, value, device } = request.body || {};
    if (
      !["LCP", "INP", "CLS"].includes(name) ||
      !Number.isFinite(value) ||
      value < 0 ||
      value > 100000
    )
      return response.sendStatus(400);
    database.prepare("INSERT INTO metrics(body,created_at) VALUES(?,?)").run(
      JSON.stringify({
        name,
        value,
        device: device === "mobile" ? "mobile" : "desktop",
      }),
      new Date().toISOString(),
    );
    database
      .prepare(
        "DELETE FROM metrics WHERE id NOT IN (SELECT id FROM metrics ORDER BY id DESC LIMIT 10000)",
      )
      .run();
    response.sendStatus(204);
  });
  app.use((error, _request, response, _next) =>
    response.status(error.status || 500).json({
      error: error.status
        ? error.message
        : "Layanan mengalami gangguan. Coba lagi.",
    }),
  );
  return app;
}

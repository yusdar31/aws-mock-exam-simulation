import { isSession, makeAttempt } from "./exam";
import { getAttempts, saveAttempt } from "./storage";
import type { Attempt, Session } from "../types";
export function downloadJson(value: unknown, filename: string) {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export async function restoreAttempts(input: unknown, userId: string) {
  if (!Array.isArray(input) || input.length > 1000)
    throw new Error("Cadangan tidak valid.");
  const sessions = input.map((a: Attempt) => {
    if (
      !a ||
      typeof a.id !== "string" ||
      a.id.length > 200 ||
      (a.session
        ? !isSession(a.session)
        : !(
            ["ccp", "saa", "gcp-ace"].includes(a.examType) &&
            ["id", "en"].includes(a.lang) &&
            ["practice", "simulation"].includes(a.mode) &&
            Number.isInteger(a.score) &&
            Number.isInteger(a.totalQuestions) &&
            a.totalQuestions > 0 &&
            a.totalQuestions <= 200 &&
            a.score >= 0 &&
            a.score <= a.totalQuestions &&
            Number.isFinite(a.durationSeconds) &&
            a.durationSeconds >= 0 &&
            Array.isArray(a.domainPerformance) &&
            a.domainPerformance.every(
              (d) =>
                d &&
                typeof d.domain === "string" &&
                Number.isInteger(d.total) &&
                d.total > 0 &&
                d.total <= 200 &&
                Number.isInteger(d.correct) &&
                d.correct >= 0 &&
                d.correct <= d.total,
            )
          )) ||
      !Number.isFinite(a.submittedAt) ||
      a.submittedAt < 0 ||
      a.submittedAt > Date.now() + 60000
    )
      throw new Error("Cadangan tidak valid.");
    return a;
  });
  // Validate the entire file before writing. Existing results are never overwritten.
  const existing = new Set((await getAttempts(userId, 10000)).map((a) => a.id));
  let imported = 0;
  for (const a of sessions) {
    const digest = new Uint8Array(
      await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(`${userId}:${a.id}`),
      ),
    );
    const hex = [...digest.slice(0, 16)]
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("");
    const id =
      a.userId === userId
        ? a.id
        : `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-8${hex.slice(17, 20)}-${hex.slice(20, 32)}`;
    if (existing.has(id)) continue;
    if (a.session) {
      const session: Session = {
        ...a.session,
        id,
        userId,
        assignmentId: undefined,
      };
      await saveAttempt(makeAttempt(session, a.submittedAt));
    } else {
      await saveAttempt({
        ...a,
        id,
        userId,
        scoreRate: Math.round((a.score / a.totalQuestions) * 100),
        domainPerformance: a.domainPerformance.map((d) => ({
          ...d,
          accuracy: Math.round((d.correct / d.total) * 100),
        })),
        synced: false,
        assignmentId: undefined,
      });
    }
    existing.add(id);
    imported++;
  }
  return imported;
}

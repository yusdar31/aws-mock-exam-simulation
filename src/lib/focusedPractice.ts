import type { Attempt, Config, Question } from "../types";
import { dueQuestions, selectQuestions, simulationReady } from "./exam";

// Keep an additional short selection history, including practice attempts that
// were paused/replaced. Completed history alone cannot prevent that repetition.
export function focusedPractice(
  pool: Question[],
  config: Config,
  attempts: Attempt[],
  domain?: string,
): Question[] {
  const key = `exam-focus-recent-${config.examType}-${config.lang}`;
  let recent: string[] = [];
  try {
    recent = JSON.parse(sessionStorage.getItem(key) || "[]");
    if (!Array.isArray(recent)) recent = [];
  } catch {
    /* Storage can be unavailable. */
  }
  const seen = attempts.flatMap(
    (a) => a.session?.questions.map((q) => q.id) || [],
  );
  const candidates = pool.filter(
    (q) =>
      q.examType === config.examType &&
      q.lang === config.lang &&
      (!domain || q.domain === domain) &&
      (!q.status || q.status === "approved") &&
      (config.content !== "reviewed" || simulationReady(q)) &&
      (config.content !== "archive" || !simulationReady(q)) &&
      (config.content !== "new" || !seen.includes(q.id)),
  );
  if (!candidates.length) return [];
  const due = new Set(
    dueQuestions(attempts, config.examType, config.lang).map((q) => q.id),
  );
  const chosen = selectQuestions(
    candidates,
    {
      ...config,
      mode: "practice",
      limit: Math.min(10, candidates.length),
      domains: [...new Set(candidates.map((q) => q.domain))],
    },
    [...recent, ...seen],
  );
  // A due error can replace a previously seen non-due item, without suppressing
  // new questions or repeating the immediately previous packet unnecessarily.
  const review = candidates.filter(
    (q) =>
      due.has(q.id) &&
      !recent.includes(q.id) &&
      !chosen.some((v) => v.id === q.id),
  );
  for (const q of review.slice(0, 2)) {
    const i = chosen.findIndex((v) => seen.includes(v.id) && !due.has(v.id));
    if (i >= 0) chosen[i] = q;
  }
  try {
    sessionStorage.setItem(
      key,
      JSON.stringify([...chosen.map((q) => q.id), ...recent].slice(0, 100)),
    );
  } catch {
    /* Selection still works. */
  }
  return chosen;
}

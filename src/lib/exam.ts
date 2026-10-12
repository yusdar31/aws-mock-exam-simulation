import type { Attempt, Config, ExamType, Question, Session } from "../types";

export const BLUEPRINT: Record<ExamType, Record<string, number>> = {
  ccp: {
    "Cloud Concepts": 24,
    "Security & Compliance": 30,
    "Technology & Services": 34,
    "Billing & Pricing": 12,
  },
  saa: {
    "Secure Architectures": 30,
    "Resilient Architectures": 26,
    "High-Performing Architectures": 24,
    "Cost-Optimized Architectures": 20,
  },
};
export const PRACTICE_TARGET = 80;
export const EXAM_MINUTES = { ccp: 90, saa: 130 };
export function isSession(value: unknown): value is Session {
  if (!value || typeof value !== "object") return false;
  const s = value as Partial<Session>,
    config = s.config;
  if (
    typeof s.id !== "string" ||
    typeof s.userId !== "string" ||
    !config ||
    !["ccp", "saa"].includes(config.examType) ||
    !["id", "en"].includes(config.lang) ||
    !["practice", "simulation"].includes(config.mode)
  )
    return false;
  if (
    !Number.isInteger(config.limit) ||
    config.limit < 1 ||
    config.limit > 200 ||
    !Number.isFinite(config.duration) ||
    config.duration < 0 ||
    !Array.isArray(config.domains)
  )
    return false;
  if (
    !Array.isArray(s.questions) ||
    !s.questions.length ||
    s.questions.length > 200 ||
    !s.questions.every(
      (q) =>
        q &&
        typeof q.id === "string" &&
        typeof q.prompt === "string" &&
        Array.isArray(q.options) &&
        q.options.length >= 4 &&
        q.options.every(
          (o) => o && typeof o.id === "string" && typeof o.text === "string",
        ) &&
        ["single", "multiple"].includes(q.type) &&
        Number.isInteger(q.version) &&
        q.version > 0 &&
        Array.isArray(q.correctAnswers) &&
        q.correctAnswers.length > 0 &&
        q.correctAnswers.every((a) => q.options.some((o) => o.id === a)),
    )
  )
    return false;
  if (
    !Number.isInteger(s.index) ||
    s.index! < 0 ||
    s.index! >= s.questions.length ||
    !Number.isFinite(s.savedAt) ||
    !Number.isFinite(s.elapsed) ||
    s.elapsed! < 0
  )
    return false;
  if (
    (s.deadline !== null && !Number.isFinite(s.deadline)) ||
    (s.remaining !== null &&
      (!Number.isFinite(s.remaining) || s.remaining! < 0))
  )
    return false;
  if (
    !s.answers ||
    typeof s.answers !== "object" ||
    !Object.values(s.answers).every(
      (a) => Array.isArray(a) && a.every((v) => typeof v === "string"),
    ) ||
    !Array.isArray(s.flags) ||
    !s.flags.every((v) => typeof v === "string") ||
    !s.questionTimes ||
    typeof s.questionTimes !== "object"
  )
    return false;
  return ["active", "paused"].includes(s.state || "");
}
export function formatTime(seconds: number | null) {
  if (seconds === null) return "Tanpa batas";
  const value = Math.max(0, Math.floor(seconds));
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, "0")}:${(value % 60).toString().padStart(2, "0")}`;
}
export function matches(a: string[] = [], b: string[] = []) {
  return (
    a.length === b.length &&
    [...a].sort().every((v, i) => v === [...b].sort()[i])
  );
}
export function answered(
  question: Question,
  answers: Record<string, string[]>,
) {
  return (answers[question.id]?.length ?? 0) === question.correctAnswers.length;
}
export function shuffle<T>(input: T[], random = Math.random): T[] {
  const copy = [...input];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
export function quotas(type: ExamType, count = 65) {
  const raw = Object.entries(BLUEPRINT[type]).map(([domain, weight]) => ({
    domain,
    exact: (weight * count) / 100,
    count: Math.floor((weight * count) / 100),
  }));
  const rest = count - raw.reduce((sum, q) => sum + q.count, 0);
  const ranked = [...raw].sort(
    (a, b) => b.exact - b.count - (a.exact - a.count),
  );
  for (let i = 0; i < rest; i++) ranked[i].count++;
  return Object.fromEntries(raw.map((q) => [q.domain, q.count]));
}
export function selectQuestions(
  pool: Question[],
  config: Config,
  recent: string[] = [],
): Question[] {
  const source = pool.filter(
    (q) =>
      q.examType === config.examType &&
      q.lang === config.lang &&
      (!q.status || q.status === "approved"),
  );
  if (config.mode === "simulation") {
    const selected: Question[] = [];
    for (const [domain, count] of Object.entries(quotas(config.examType))) {
      const group = source.filter(
        (q) =>
          q.domain === domain &&
          q.verifiedAt &&
          q.optionExplanations &&
          q.sourceUrl,
      );
      if (group.length < count)
        throw new Error(
          `Simulasi membutuhkan ${count} soal ${domain}; tersedia ${group.length}. Pilih latihan atau tambahkan bank soal.`,
        );
      selected.push(...shuffle(group).slice(0, count));
    }
    return shuffle(selected);
  }
  if (!Number.isInteger(config.limit) || config.limit < 1 || config.limit > 200)
    throw new Error("Jumlah soal harus 1–200.");
  const filtered = source.filter((q) => config.domains.includes(q.domain));
  if (!filtered.length)
    throw new Error(
      "Tidak ada soal untuk pilihan ini. Pilih minimal satu domain yang tersedia.",
    );
  if (config.limit > filtered.length)
    throw new Error(`Tersedia ${filtered.length} soal; kurangi jumlah soal.`);
  return [
    ...shuffle(filtered.filter((q) => !recent.includes(q.id))),
    ...shuffle(filtered.filter((q) => recent.includes(q.id))),
  ].slice(0, config.limit);
}
export function makeAttempt(
  session: Session,
  submittedAt = Date.now(),
): Attempt {
  const domains = new Map<string, DomainPerformanceInternal>();
  let score = 0;
  for (const q of session.questions) {
    const correct = Number(matches(session.answers[q.id], q.correctAnswers));
    score += correct;
    const domain = domains.get(q.domain) ?? {
      domain: q.domain,
      correct: 0,
      total: 0,
    };
    domain.total++;
    domain.correct += correct;
    domains.set(q.domain, domain);
  }
  return {
    id: session.id,
    userId: session.userId,
    examType: session.config.examType,
    lang: session.config.lang,
    mode: session.config.mode,
    submittedAt,
    score,
    totalQuestions: session.questions.length,
    scoreRate: Math.round(
      (score / Math.max(1, session.questions.length)) * 100,
    ),
    durationSeconds: Math.round(session.elapsed),
    domainPerformance: [...domains.values()].map((d) => ({
      ...d,
      accuracy: Math.round((d.correct / d.total) * 100),
    })),
    session,
    synced: false,
    assignmentId: session.assignmentId,
  };
}
type DomainPerformanceInternal = {
  domain: string;
  correct: number;
  total: number;
};
export function remaining(session: Session, now = Date.now()) {
  return session.deadline === null
    ? null
    : Math.max(0, Math.ceil((session.deadline - now) / 1000));
}
export function dueQuestions(
  attempts: Attempt[],
  examType: ExamType,
  lang: string,
  now = Date.now(),
) {
  const latest = new Map<
    string,
    { question: Question; correct: boolean; at: number; streak: number }
  >();
  for (const attempt of [...attempts].sort(
    (a, b) => a.submittedAt - b.submittedAt,
  )) {
    if (
      attempt.examType !== examType ||
      attempt.lang !== lang ||
      !attempt.session
    )
      continue;
    for (const question of attempt.session.questions) {
      const previous = latest.get(question.id);
      const correct = matches(
        attempt.session.answers[question.id],
        question.correctAnswers,
      );
      latest.set(question.id, {
        question,
        correct,
        at: attempt.submittedAt,
        streak: correct ? (previous?.streak ?? 0) + 1 : 0,
      });
    }
  }
  return [...latest.values()]
    .filter(
      (entry) =>
        !entry.correct ||
        now >=
          entry.at +
            [1, 3, 7, 14, 30][Math.min(Math.max(0, entry.streak - 1), 4)] *
              86400000,
    )
    .map((entry) => entry.question);
}

import type { Attempt, Config, ExamType, Question, Session } from "../types";
import catalog from "../data/certifications.json" with { type: "json" };

export const BLUEPRINT: Record<ExamType, Record<string, number>> = {
  ccp: catalog.ccp.blueprint,
  saa: catalog.saa.blueprint,
  "gcp-ace": catalog["gcp-ace"].blueprint,
};
export const PRACTICE_TARGET = 80;
export function canonicalDomain(type: ExamType, domain: string): string {
  const aliases: Record<string, string> = catalog["gcp-ace"].domainAliases;
  return type === "gcp-ace" && Object.hasOwn(aliases, domain)
    ? aliases[domain]
    : domain;
}
export const EXAM_MINUTES = Object.fromEntries(
  Object.entries(catalog).map(([key, value]) => [key, value.minutes]),
) as Record<ExamType, number>;
export const EXAM_COUNTS = Object.fromEntries(
  Object.entries(catalog).map(([key, value]) => [key, value.questions]),
) as Record<ExamType, number>;
export function simulationReady(q: Question) {
  return Boolean(
    q.verifiedAt &&
    q.sourceUrl &&
    q.optionExplanations &&
    q.options.every((o) => q.optionExplanations?.[o.id]?.trim()),
  );
}
export function isQuestion(value: unknown): value is Question {
  if (!value || typeof value !== "object") return false;
  const q = value as Question;
  return (
    typeof q.id === "string" &&
    q.id.length > 0 &&
    q.id.length <= 200 &&
    Object.hasOwn(catalog, q.examType) &&
    ["id", "en"].includes(q.lang) &&
    typeof q.domain === "string" &&
    typeof q.prompt === "string" &&
    q.prompt.length <= 6000 &&
    typeof q.explanation === "string" &&
    q.explanation.length <= 12000 &&
    ["single", "multiple"].includes(q.type) &&
    Number.isInteger(q.version) &&
    q.version > 0 &&
    Array.isArray(q.options) &&
    q.options.length >= 4 &&
    q.options.length <= 6 &&
    q.options.every(
      (o) =>
        o &&
        typeof o.id === "string" &&
        typeof o.text === "string" &&
        o.text.length <= 3000,
    ) &&
    new Set(q.options.map((o) => o.id)).size === q.options.length &&
    Array.isArray(q.correctAnswers) &&
    q.correctAnswers.length > 0 &&
    q.correctAnswers.every((a) => q.options.some((o) => o.id === a)) &&
    (q.type !== "single" || q.correctAnswers.length === 1) &&
    (!q.optionExplanations ||
      (typeof q.optionExplanations === "object" &&
        Object.values(q.optionExplanations).every(
          (v) => typeof v === "string",
        ))) &&
    (!q.sourceUrl ||
      (typeof q.sourceUrl === "string" &&
        /^https:\/\/(docs\.aws\.amazon\.com|aws\.amazon\.com|cloud\.google\.com|docs\.cloud\.google\.com)\//.test(
          q.sourceUrl,
        )))
  );
}
export function isSession(value: unknown): value is Session {
  if (!value || typeof value !== "object") return false;
  const s = value as Partial<Session>,
    config = s.config;
  if (
    typeof s.id !== "string" ||
    typeof s.userId !== "string" ||
    !config ||
    !["ccp", "saa", "gcp-ace"].includes(config.examType) ||
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
    !s.questions.every(isQuestion)
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
  const ids = new Set(s.questions.map((q) => q.id));
  if (
    ids.size !== s.questions.length ||
    Object.entries(s.questionTimes).some(
      ([id, n]) => !ids.has(id) || !Number.isFinite(n) || n < 0,
    )
  )
    return false;
  if (
    s.confidence &&
    (typeof s.confidence !== "object" ||
      Object.entries(s.confidence).some(
        ([id, v]) => !ids.has(id) || !["sure", "unsure"].includes(v),
      ))
  )
    return false;
  if (
    Object.entries(s.answers).some(
      ([id, answers]) =>
        !ids.has(id) ||
        answers.some(
          (a) =>
            !s
              .questions!.find((q) => q.id === id)!
              .options.some((o) => o.id === a),
        ),
    )
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
export function quotas(type: ExamType, count = EXAM_COUNTS[type]) {
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
        (q) => q.domain === domain && simulationReady(q),
      );
      if (group.length < count)
        throw new Error(
          `Simulasi membutuhkan ${count} soal ${domain}; tersedia ${group.length}. Pilih latihan atau tambahkan bank soal.`,
        );
      selected.push(
        ...[
          ...shuffle(group.filter((q) => !recent.includes(q.id))),
          ...shuffle(group.filter((q) => recent.includes(q.id))),
        ].slice(0, count),
      );
    }
    return shuffle(selected);
  }
  if (!Number.isInteger(config.limit) || config.limit < 1 || config.limit > 200)
    throw new Error("Jumlah soal harus 1–200.");
  const requestedDomains = config.domains.map((domain) =>
    canonicalDomain(config.examType, domain),
  );
  const filtered = source.filter(
    (q) =>
      requestedDomains.includes(canonicalDomain(q.examType, q.domain)) &&
      (config.content !== "new" || !recent.includes(q.id)) &&
      (config.content !== "reviewed" || simulationReady(q)) &&
      (config.content !== "archive" || !simulationReady(q)),
  );
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
        attempts.some(
          (a) =>
            a.session?.confidence?.[entry.question.id] === "unsure" &&
            a.submittedAt === entry.at,
        ) ||
        now >=
          entry.at +
            [1, 3, 7, 14, 30][Math.min(Math.max(0, entry.streak - 1), 4)] *
              86400000,
    )
    .map((entry) => entry.question);
}

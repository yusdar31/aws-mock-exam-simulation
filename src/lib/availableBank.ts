import { loadBank } from "./banks";
import { loadApproved } from "./api";
import type { ExamType, Language, Question } from "../types";

// Use the same published additions, withdrawals and offline fallback everywhere.
export async function loadAvailableBank(
  examType: ExamType,
  lang: Language,
  remote = true,
): Promise<{ questions: Question[]; notice: string }> {
  const builtin = await loadBank(examType, lang);
  let items: Question[] = [];
  let excludedIds: string[] = [];
  let notice = "";
  if (remote) {
    try {
      const payload = await loadApproved(examType, lang);
      items = payload.items;
      excludedIds = payload.excludedIds;
      if (payload.offline)
        notice =
          "Bank pusat belum tersedia. Menggunakan bank terakhir yang tersimpan di perangkat.";
      else if (payload.source === "release")
        notice = "Bank rilis siap digunakan.";
    } catch {
      notice = "Menggunakan bank bawaan. Bank pusat belum tersedia.";
    }
  }
  const excluded = new Set(excludedIds);
  const byId = new Map(
    builtin.filter((q) => !excluded.has(q.id)).map((q) => [q.id, q]),
  );
  for (const question of items) {
    const previous = byId.get(question.id);
    if (!previous || question.version >= previous.version)
      byId.set(question.id, question);
  }
  const questions = [
    ...new Map(
      [...byId.values()].map((q) => [
        `${q.examType}:${q.lang}:${q.prompt.toLowerCase().replace(/\s+/g, " ").trim()}`,
        q,
      ]),
    ).values(),
  ];
  return { questions, notice };
}

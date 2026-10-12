import type { Attempt, Question, Session } from "../types";
import { saveAttempt, saveSession } from "./storage";
export async function migrateLegacy(userId: string) {
  const marker = `aws_exam_migrated_${userId}`;
  if (localStorage.getItem(marker)) return;
  const rawHistory = localStorage.getItem(`mockExamHistory_${userId}`);
  if (rawHistory) {
    const items = JSON.parse(rawHistory) as Attempt[];
    if (Array.isArray(items))
      for (const item of items)
        if (item.id && item.userId === userId)
          await saveAttempt({
            ...item,
            lang: item.lang || "id",
            mode: item.mode || "practice",
            synced: false,
          });
  }
  const raw = localStorage.getItem(`active_exam_session_${userId}`);
  if (raw) {
    const old = JSON.parse(raw) as {
      userId: string;
      examType: "ccp" | "saa";
      examQuestions: Question[];
      currentIndex: number;
      selectedAnswers: Session["answers"];
      markedQuestionIds: string[];
      remainingSeconds: number;
      examConfigDuration: number;
      savedAt: number;
    };
    if (
      old.userId === userId &&
      Array.isArray(old.examQuestions) &&
      old.examQuestions.length &&
      old.examQuestions.every(
        (q) => q.id && q.options?.length && q.correctAnswers?.length,
      )
    ) {
      const questions = old.examQuestions.map((q) => ({
        ...q,
        examType: old.examType,
        version: q.version || 1,
        lang: q.lang || ("en" as const),
      }));
      await saveSession({
        id: crypto.randomUUID(),
        userId,
        questions,
        config: {
          examType: old.examType,
          lang: questions[0].lang,
          mode: "practice",
          limit: questions.length,
          duration: old.examConfigDuration > 0 ? old.examConfigDuration : 0,
          domains: [...new Set(questions.map((q) => q.domain))],
        },
        index: Math.max(0, Math.min(old.currentIndex, questions.length - 1)),
        answers: old.selectedAnswers || {},
        flags: old.markedQuestionIds || [],
        deadline: null,
        remaining: old.remainingSeconds < 0 ? null : old.remainingSeconds,
        elapsed: Math.max(
          0,
          old.examConfigDuration * 60 - old.remainingSeconds,
        ),
        questionTimes: {},
        savedAt: Date.now(),
        state: "paused",
      });
    }
  }
  localStorage.setItem(marker, "1");
}

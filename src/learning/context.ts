import { createContext, useContext } from "react";
import { isQuestion } from "../lib/exam";
import type { Question } from "../types";
export type Annotation = {
  question: Question;
  note: string;
  bookmarked: boolean;
};
export type Report = {
  id: string;
  token?: string;
  reviewStatus?: "pending" | "in_review" | "resolved";
  resolution?: string;
  questionId: string;
  version: number;
  examType: string;
  reason: string;
  detail: string;
  createdAt: number;
  status: "pending" | "sent";
};
export type LearningData = {
  annotations: Record<string, Annotation>;
  reports: Report[];
  plan: { weeklyGoal: number; focusDomain: string };
  reading: { size: number; wide: boolean; dark: boolean };
};
export const defaults: LearningData = {
  annotations: {},
  reports: [],
  plan: { weeklyGoal: 3, focusDomain: "" },
  reading: { size: 16, wide: false, dark: false },
};
export function readLearning(userId: string): LearningData {
  try {
    const data = JSON.parse(
      localStorage.getItem(`exam-learning-${userId}`) || "null",
    );
    if (!data || typeof data !== "object") return structuredClone(defaults);
    const annotations = Object.fromEntries(
      Object.entries(data.annotations || {}).filter(([, value]) => {
        const a = value as Annotation;
        return (
          isQuestion(a?.question) &&
          typeof a.note === "string" &&
          typeof a.bookmarked === "boolean"
        );
      }),
    );
    return {
      annotations: annotations as LearningData["annotations"],
      reports: Array.isArray(data.reports)
        ? data.reports.filter(
            (r: Report) =>
              r &&
              typeof r.id === "string" &&
              typeof r.detail === "string" &&
              ["pending", "sent"].includes(r.status),
          )
        : [],
      plan: {
        weeklyGoal: Math.max(
          1,
          Math.min(14, Number(data.plan?.weeklyGoal) || 3),
        ),
        focusDomain: String(data.plan?.focusDomain || ""),
      },
      reading: {
        size: [16, 18, 20].includes(data.reading?.size)
          ? data.reading.size
          : 16,
        wide: data.reading?.wide === true,
        dark: data.reading?.dark === true,
      },
    };
  } catch {
    return structuredClone(defaults);
  }
}
export const LearningContext = createContext<{
  data: LearningData;
  update: (updater: (data: LearningData) => LearningData) => boolean;
  error: string;
}>({ data: defaults, update: () => false, error: "" });
export const useLearning = () => useContext(LearningContext);

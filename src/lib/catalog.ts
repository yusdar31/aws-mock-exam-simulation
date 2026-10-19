import data from "../data/certifications.json";
import type { ExamType, Language } from "../types";
export const CERTIFICATIONS = data;
export const EXAM_TYPES = Object.keys(data) as ExamType[];
export function availableLanguage(
  type: ExamType,
  language: Language,
): Language {
  return data[type].languages.includes(language)
    ? language
    : (data[type].languages[0] as Language);
}

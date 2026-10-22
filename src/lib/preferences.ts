import type { Config, ExamType, Language } from "../types";
import { CERTIFICATIONS, availableLanguage } from "./catalog";
import { canonicalDomain } from "./exam";
const key = "exam-study-config-v1";
export function readConfig(): Config {
  let value: Partial<Config> = {};
  try {
    value = JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    /* Use defaults. */
  }
  const examType: ExamType = Object.hasOwn(
    CERTIFICATIONS,
    value?.examType || "",
  )
    ? value.examType!
    : "ccp";
  const domains = Object.keys(CERTIFICATIONS[examType].blueprint);
  const requested = Array.isArray(value?.domains)
    ? [
        ...new Set(
          value.domains.map((d) =>
            typeof d === "string" ? canonicalDomain(examType, d) : "",
          ),
        ),
      ]
    : undefined;
  return {
    examType,
    lang: availableLanguage(
      examType,
      (value?.lang === "en" ? "en" : "id") as Language,
    ),
    mode: value?.mode === "simulation" ? "simulation" : "practice",
    limit:
      Number.isInteger(value?.limit) && value.limit! > 0 && value.limit! <= 200
        ? value.limit!
        : 20,
    duration: [0, 15, 30, 45, 60].includes(value?.duration || 0)
      ? value.duration || 0
      : 0,
    domains:
      requested && requested.every((d) => domains.includes(d))
        ? requested
        : domains,
    content: ["all", "new", "reviewed", "archive"].includes(
      value?.content || "",
    )
      ? value.content
      : "reviewed",
  };
}
export function writeConfig(value: Config) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Session persistence uses IndexedDB. */
  }
}

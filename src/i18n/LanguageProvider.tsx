import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "../types";
import { LANGUAGE_STORAGE_KEY, readLanguage, translate } from "./catalog";
import { LanguageContext } from "./context";

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return readLanguage(window.localStorage);
    } catch {
      return "id";
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "id"
        ? "AWS Exam Studio - Latihan CCP & SAA"
        : "AWS Exam Studio - CCP & SAA Practice";
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      /* The in-memory choice still works. */
    }
  }, [language]);
  useEffect(() => {
    const change = (event: StorageEvent) => {
      if (
        event.key === LANGUAGE_STORAGE_KEY &&
        ["id", "en"].includes(event.newValue || "")
      ) {
        setLanguage(event.newValue as Language);
      }
    };
    window.addEventListener("storage", change);
    return () => window.removeEventListener("storage", change);
  }, []);
  const value = useMemo(
    () => ({
      language,
      locale: language === "id" ? ("id-ID" as const) : ("en-US" as const),
      setLanguage,
      t: (text: string, values?: Record<string, string | number>) =>
        translate(text, language, values),
    }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

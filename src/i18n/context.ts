import { createContext, useContext } from "react";
import type { Language } from "../types";

export type LanguageContextValue = {
  language: Language;
  locale: "id-ID" | "en-US";
  setLanguage: (language: Language) => void;
  t: (text: string, values?: Record<string, string | number>) => string;
};
export const LanguageContext = createContext<LanguageContextValue | null>(null);
export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required");
  return value;
}

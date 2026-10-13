import { useLanguage } from "../i18n/context";
import type { Language } from "../types";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label
      className="language-selector"
      title={t(
        "Bahasa tampilan hanya mengubah menu dan petunjuk. Bahasa soal dipilih secara terpisah.",
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18" />
      </svg>
      <span className="sr-only">{t("Bahasa tampilan")}</span>
      <select
        aria-label={t("Bahasa tampilan")}
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
      >
        <option value="id" lang="id">
          Bahasa Indonesia
        </option>
        <option value="en" lang="en">
          English
        </option>
      </select>
    </label>
  );
}

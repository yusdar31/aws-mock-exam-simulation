import { useLanguage } from "../i18n/context";
import { useLearning } from "../learning/context";
export default function ReadingSettings() {
  const { t } = useLanguage(),
    { data, update, error } = useLearning();
  return (
    <details className="reading-settings">
      <summary>{t("Pengaturan baca")}</summary>
      <div>
        <label>
          {t("Ukuran teks")}
          <select
            aria-label={t("Ukuran teks")}
            value={data.reading.size}
            onChange={(e) =>
              update((d) => ({
                ...d,
                reading: { ...d.reading, size: Number(e.target.value) },
              }))
            }
          >
            {[16, 18, 20].map((n) => (
              <option key={n} value={n}>
                {n} px
              </option>
            ))}
          </select>
        </label>
        <label className="check-label">
          <input
            type="checkbox"
            checked={data.reading.wide}
            onChange={(e) =>
              update((d) => ({
                ...d,
                reading: { ...d.reading, wide: e.target.checked },
              }))
            }
          />
          {t("Bacaan lebar")}
        </label>
        <label className="check-label">
          <input
            type="checkbox"
            checked={data.reading.dark}
            onChange={(e) =>
              update((d) => ({
                ...d,
                reading: { ...d.reading, dark: e.target.checked },
              }))
            }
          />
          {t("Mode gelap")}
        </label>
        {error && <p role="alert">{t(error)}</p>}
      </div>
    </details>
  );
}

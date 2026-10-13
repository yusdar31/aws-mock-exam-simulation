import { useLanguage } from "../i18n/context";
import { useMemo, useState } from "react";
import type { Attempt, Config, Question, Session } from "../types";
import {
  BLUEPRINT,
  dueQuestions,
  EXAM_MINUTES,
  PRACTICE_TARGET,
  quotas,
} from "../lib/exam";
export default function Lobby({
  config,
  onConfig,
  pool,
  loading,
  bankNotice,
  attempts,
  saved,
  onResume,
  onDiscard,
  onStart,
  onPractice,
}: {
  config: Config;
  onConfig: (value: Config) => void;
  pool: Question[];
  loading: boolean;
  bankNotice: string;
  attempts: Attempt[];
  saved: Session | null;
  onResume: () => void;
  onDiscard: () => void;
  onStart: () => void;
  onPractice: (questions: Question[]) => void;
}) {
  const { t } = useLanguage();
  const [notice, setNotice] = useState("");
  const domains = Object.keys(BLUEPRINT[config.examType]);
  const counts = Object.fromEntries(
    domains.map((domain) => [
      domain,
      pool.filter((q) => q.domain === domain).length,
    ]),
  );
  const capacity = pool.filter((q) => config.domains.includes(q.domain)).length;
  const simulationCounts = Object.fromEntries(
    domains.map((domain) => [
      domain,
      pool.filter(
        (q) =>
          q.domain === domain &&
          q.verifiedAt &&
          q.optionExplanations &&
          q.sourceUrl,
      ).length,
    ]),
  );
  const missing = Object.entries(quotas(config.examType)).filter(
    ([domain, count]) => simulationCounts[domain] < count,
  );
  const currentAttempts = attempts.filter(
    (a) => a.examType === config.examType && a.lang === config.lang,
  );
  const due = useMemo(
    () => dueQuestions(attempts, config.examType, config.lang),
    [attempts, config.examType, config.lang],
  );
  function weakest() {
    const scores = new Map<string, { correct: number; total: number }>();
    for (const attempt of currentAttempts)
      for (const domain of attempt.domainPerformance) {
        const old = scores.get(domain.domain) || { correct: 0, total: 0 };
        old.correct += domain.correct;
        old.total += domain.total;
        scores.set(domain.domain, old);
      }
    const weakest = [...scores].sort(
      (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total,
    )[0]?.[0];
    if (!weakest) {
      setNotice("Selesaikan satu latihan agar rekomendasi domain tersedia.");
      return;
    }
    const questions = pool.filter((q) => q.domain === weakest).slice(0, 10);
    if (questions.length) onPractice(questions);
    else setNotice("Domain ini belum tersedia dalam bahasa yang dipilih.");
  }
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">{t("RUANG BELAJAR")}</span>
          <h1>{t("Persiapkan percobaan Anda")}</h1>
          <p>{t("Pilih jalur, tentukan fokus, dan mulai saat Anda siap.")}</p>
        </div>
      </div>
      {saved && (
        <section className="resume-banner" role="status">
          <div>
            <strong>{t("Ada sesi yang belum selesai")}</strong>
            <p>
              {saved.config.examType.toUpperCase()} ·{" "}
              {Object.keys(saved.answers).length}/{saved.questions.length}{" "}
              {t("soal memiliki jawaban")}{" "}
            </p>
          </div>
          <div className="actions">
            <button className="primary" onClick={onResume}>
              {" "}
              {t("Lanjutkan sesi")}{" "}
            </button>
            <button onClick={onDiscard}>{t("Hapus sesi")}</button>
          </div>
        </section>
      )}
      <div className="lobby-grid">
        <div className="stack">
          <section className="panel">
            <h2>{t("Jalur sertifikasi")}</h2>
            <div className="track-grid">
              {(["ccp", "saa"] as const).map((type) => (
                <button
                  key={type}
                  className={`track ${type === config.examType ? "selected" : ""}`}
                  aria-pressed={type === config.examType}
                  onClick={() =>
                    onConfig({
                      ...config,
                      examType: type,
                      domains: Object.keys(BLUEPRINT[type]),
                    })
                  }
                >
                  <span className="eyebrow">
                    {type === "ccp"
                      ? t("CLF-C02 · FOUNDATIONAL")
                      : t("SAA-C03 · ASSOCIATE")}
                  </span>
                  <strong>
                    {type === "ccp"
                      ? "Cloud Practitioner"
                      : "Solutions Architect"}
                  </strong>
                  <span>
                    {type === "ccp"
                      ? t("Konsep cloud, keamanan, layanan, dan biaya.")
                      : t(
                          "Desain arsitektur aman, tangguh, cepat, dan efisien.",
                        )}
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="panel">
            <h2>{t("Mode belajar")}</h2>
            <div className="segmented">
              {(["practice", "simulation"] as const).map((mode) => (
                <button
                  aria-pressed={config.mode === mode}
                  className={config.mode === mode ? "selected" : ""}
                  key={mode}
                  onClick={() => onConfig({ ...config, mode })}
                >
                  {mode === "practice" ? t("Latihan") : t("Simulasi penuh")}
                </button>
              ))}
            </div>
            <p>
              {config.mode === "practice"
                ? t(
                    "Pembahasan dapat dibuka setelah menjawab. Anda dapat menjeda sesi.",
                  )
                : t(
                    "65 soal · {minutes} menit · waktu terus berjalan setelah keluar. Tanpa petunjuk jawaban.",
                    { minutes: EXAM_MINUTES[config.examType] },
                  )}
            </p>
            <label>
              {" "}
              {t("Bahasa soal")}{" "}
              <select
                aria-label={t("Bahasa soal")}
                value={config.lang}
                onChange={(event) =>
                  onConfig({
                    ...config,
                    lang: event.target.value as Config["lang"],
                  })
                }
              >
                <option value="id">{t("Bahasa Indonesia")}</option>
                <option value="en">{t("English")}</option>
              </select>
            </label>
            {config.mode === "practice" && (
              <div className="two-columns">
                <label>
                  {" "}
                  {t("Jumlah soal")}{" "}
                  <input
                    type="number"
                    aria-describedby="capacity"
                    min={1}
                    max={Math.min(200, capacity)}
                    value={config.limit}
                    onChange={(e) =>
                      onConfig({ ...config, limit: Number(e.target.value) })
                    }
                  />
                </label>
                <label>
                  {" "}
                  {t("Durasi")}{" "}
                  <select
                    aria-label={t("Durasi")}
                    value={config.duration}
                    onChange={(e) =>
                      onConfig({ ...config, duration: Number(e.target.value) })
                    }
                  >
                    <option value={0}>{t("Tanpa batas waktu")}</option>
                    {[15, 30, 45, 60].map((value) => (
                      <option key={value} value={value}>
                        {value} {t("menit")}{" "}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
            <small id="capacity">
              {loading
                ? t("Memuat bank soal…")
                : t(
                    "{count} soal sesuai cakupan · {total} soal dalam bahasa ini",
                    { count: capacity, total: pool.length },
                  )}
            </small>
          </section>
          <section className="panel">
            <h2>{t("Cakupan domain")}</h2>
            <div className="domain-list">
              {domains.map((domain) => (
                <label key={domain}>
                  <input
                    type="checkbox"
                    disabled={config.mode === "simulation"}
                    checked={
                      config.mode === "simulation" ||
                      config.domains.includes(domain)
                    }
                    onChange={() =>
                      onConfig({
                        ...config,
                        domains: config.domains.includes(domain)
                          ? config.domains.filter((d) => d !== domain)
                          : [...config.domains, domain],
                      })
                    }
                  />
                  <span>
                    {t(domain)}
                    <small>
                      {counts[domain] || 0} {t("soal tersedia")}
                    </small>
                  </span>
                  <span className="domain-weight">
                    {BLUEPRINT[config.examType][domain]}%
                  </span>
                </label>
              ))}
            </div>
            <small>
              {" "}
              {t(
                "Persentase mengikuti bobot blueprint untuk pemilihan soal simulasi.",
              )}{" "}
            </small>
          </section>
        </div>
        <aside className="stack launch-column">
          <section className="panel launch-panel">
            <span className="eyebrow">
              {config.mode === "simulation"
                ? t("SIMULASI PENUH")
                : t("LATIHAN PERSONAL")}
            </span>
            <h2>
              {config.examType === "ccp"
                ? "Cloud Practitioner"
                : "Solutions Architect"}
            </h2>
            <dl>
              <div>
                <dt>{t("Soal")}</dt>
                <dd>{config.mode === "simulation" ? 65 : config.limit}</dd>
              </div>
              <div>
                <dt>{t("Waktu")}</dt>
                <dd>
                  {config.mode === "simulation"
                    ? t("{minutes} menit", {
                        minutes: EXAM_MINUTES[config.examType],
                      })
                    : config.duration
                      ? t("{minutes} menit", { minutes: config.duration })
                      : t("Tanpa batas")}
                </dd>
              </div>
              <div>
                <dt>{t("Target latihan")}</dt>
                <dd>
                  {PRACTICE_TARGET}
                  {t("% akurasi")}
                </dd>
              </div>
            </dl>
            <small>{t("Target ini bukan skor kelulusan resmi AWS.")}</small>
            {bankNotice && <p className="notice">{t(bankNotice)}</p>}
            {config.mode === "simulation" && missing.length > 0 && (
              <p className="notice">
                {" "}
                {t("Bank belum cukup:")}{" "}
                {missing
                  .map(
                    ([domain, count]) =>
                      `${t(domain)} (${simulationCounts[domain]}/${count})`,
                  )
                  .join(", ")}
                .
              </p>
            )}
            <button
              className="primary full-width"
              disabled={
                loading ||
                !pool.length ||
                (config.mode === "simulation" && missing.length > 0) ||
                (config.mode === "practice" &&
                  (!capacity || config.limit < 1 || config.limit > capacity))
              }
              onClick={onStart}
            >
              {config.mode === "simulation"
                ? t("Mulai simulasi")
                : t("Mulai latihan")}
            </button>
            <a
              href={`https://docs.aws.amazon.com/aws-certification/latest/${config.examType === "ccp" ? "cloud-practitioner-02/cloud-practitioner-02" : "solutions-architect-associate-03/solutions-architect-associate-03"}.html`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              {t("Lihat panduan ujian AWS ↗")}{" "}
            </a>
          </section>
          <section className="panel">
            <h2>{t("Belajar dari hasil")}</h2>
            <p>
              {t(
                "{count} soal perlu diulang. Rekomendasi berdasarkan riwayat {exam} dalam bahasa ini.",
                { count: due.length, exam: config.examType.toUpperCase() },
              )}
            </p>
            <button
              className="secondary full-width"
              disabled={!due.length}
              onClick={() => onPractice(due.slice(0, 20))}
            >
              {" "}
              {t("Ulangi materi terjadwal")}{" "}
            </button>
            <button className="text-button" onClick={weakest}>
              {" "}
              {t("Latihan domain terlemah")}{" "}
            </button>
            {notice && <p role="status">{t(notice)}</p>}
            {currentAttempts[0] && (
              <small>
                {t("Akurasi terakhir:")} {currentAttempts[0].scoreRate}%
              </small>
            )}
          </section>
        </aside>
      </div>
    </main>
  );
}

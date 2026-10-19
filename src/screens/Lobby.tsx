import { useLanguage } from "../i18n/context";
import { useMemo, useState } from "react";
import type { Attempt, Config, Question, Session } from "../types";
import {
  BLUEPRINT,
  dueQuestions,
  EXAM_MINUTES,
  PRACTICE_TARGET,
  quotas,
  simulationReady,
  EXAM_COUNTS,
} from "../lib/exam";
import { CERTIFICATIONS, EXAM_TYPES, availableLanguage } from "../lib/catalog";
import StudioIcon from "../components/StudioIcon";
import { focusedPractice } from "../lib/focusedPractice";
export default function Lobby({
  config,
  onConfig,
  pool,
  loading,
  busy,
  bankNotice,
  attempts,
  saved,
  onResume,
  onDiscard,
  onRetryBank,
  onStart,
  onPractice,
}: {
  config: Config;
  onConfig: (value: Config) => void;
  pool: Question[];
  loading: boolean;
  busy: boolean;
  bankNotice: string;
  attempts: Attempt[];
  saved: Session | null;
  onResume: () => void;
  onDiscard: () => void;
  onRetryBank: () => void;
  onStart: () => void;
  onPractice: (questions: Question[]) => void;
}) {
  const { t } = useLanguage();
  const [notice, setNotice] = useState("");
  const certification = CERTIFICATIONS[config.examType];
  const seen = new Set(
    attempts.flatMap((a) => a.session?.questions.map((q) => q.id) || []),
  );
  const eligible = pool.filter(
    (q) =>
      (config.content !== "new" || !seen.has(q.id)) &&
      (config.content !== "reviewed" || simulationReady(q)) &&
      (config.content !== "archive" || !simulationReady(q)),
  );
  const domains = Object.keys(BLUEPRINT[config.examType]);
  const counts = Object.fromEntries(
    domains.map((domain) => [
      domain,
      eligible.filter((q) => q.domain === domain).length,
    ]),
  );
  const capacity = eligible.filter((q) =>
    config.domains.includes(q.domain),
  ).length;
  const simulationCounts = Object.fromEntries(
    domains.map((domain) => [
      domain,
      pool.filter((q) => q.domain === domain && simulationReady(q)).length,
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
  const startReason = busy
    ? t("Menyimpan…")
    : loading
      ? t("Memuat bank soal\u2026")
      : !capacity && config.mode === "practice"
        ? t(
            "Tidak ada soal pada cakupan ini. Pilih domain atau jenis materi lain.",
          )
        : config.mode === "simulation" && missing.length
          ? t("Simulasi belum tersedia untuk bank ini. Pilih Latihan.")
          : config.mode === "practice" &&
              (!Number.isInteger(config.limit) ||
                config.limit < 1 ||
                config.limit > Math.min(200, capacity))
            ? t("Masukkan jumlah soal bulat antara 1 dan {max}.", {
                max: Math.min(200, capacity),
              })
            : "";
  const count =
    config.mode === "simulation" ? EXAM_COUNTS[config.examType] : config.limit;
  const startLabel =
    config.mode === "simulation" ? t("Mulai simulasi") : t("Mulai latihan");
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
    const questions = focusedPractice(pool, config, attempts, weakest);
    if (questions.length) onPractice(questions);
    else setNotice("Domain ini belum tersedia dalam bahasa yang dipilih.");
  }
  return (
    <main className="page lobby-page">
      <div className="page-heading">
        <div>
          <h1>{t("Persiapkan percobaan Anda")}</h1>
          <p>{t("Pilih jalur, tentukan fokus, dan mulai saat Anda siap.")}</p>
        </div>
        <span className="context-chip">
          {certification.code} · {config.lang.toUpperCase()}
        </span>
      </div>
      <dl className="learning-overview" aria-label={t("Ringkasan belajar")}>
        <div>
          <dt>{t("Sesi selesai")}</dt>
          <dd>{currentAttempts.length}</dd>
        </div>
        <div>
          <dt>{t("Soal unik dipelajari")}</dt>
          <dd>
            {
              new Set(
                currentAttempts.flatMap(
                  (a) => a.session?.questions.map((q) => q.id) || [],
                ),
              ).size
            }
          </dd>
        </div>
        <div>
          <dt>{t("Perlu diulang")}</dt>
          <dd>{due.length}</dd>
        </div>
      </dl>
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
            <button className="primary" disabled={busy} onClick={onResume}>
              {" "}
              {t("Lanjutkan sesi")}{" "}
            </button>
            <button disabled={busy} onClick={onDiscard}>
              {t("Hapus sesi")}
            </button>
          </div>
        </section>
      )}
      {!currentAttempts.length && (
        <section className="panel onboarding">
          <h2>{t("Mulai dari tujuan Anda")}</h2>
          <p>
            {t(
              "CCP untuk dasar cloud, SAA untuk desain arsitektur, dan ACE untuk operasi Google Cloud.",
            )}
          </p>
          <div className="actions">
            <button
              onClick={() =>
                onConfig({
                  ...config,
                  mode: "practice",
                  limit: 10,
                  duration: 0,
                  content: config.examType === "gcp-ace" ? "all" : "reviewed",
                  domains,
                })
              }
            >
              {t("Saya baru mulai \u00b7 10 soal")}
            </button>
            <button
              onClick={() =>
                onConfig({ ...config, mode: "simulation", domains })
              }
            >
              {t("Saya ingin simulasi")}
            </button>
          </div>
        </section>
      )}
      <div className="lobby-grid">
        <div className="stack">
          <section className="panel setup-section">
            <div className="setup-heading">
              <h2>{t("Jalur sertifikasi")}</h2>
            </div>
            <div className="track-grid">
              {EXAM_TYPES.map((type) => (
                <button
                  key={type}
                  className={`track ${type === config.examType ? "selected" : ""}`}
                  aria-pressed={type === config.examType}
                  onClick={() =>
                    onConfig({
                      ...config,
                      examType: type,
                      lang: availableLanguage(type, config.lang),
                      content: type==='gcp-ace'?'all':config.content==='all'&&config.examType==='gcp-ace'?'reviewed':config.content,
                      domains: Object.keys(BLUEPRINT[type]),
                    })
                  }
                >
                  <span className="eyebrow">
                    {CERTIFICATIONS[type].code} · {CERTIFICATIONS[type].level}
                  </span>
                  <span className="track-indicator" aria-hidden="true">
                    {type === config.examType && <StudioIcon name="check" />}
                  </span>
                  <strong>{CERTIFICATIONS[type].name}</strong>
                  <span>{t(CERTIFICATIONS[type].description)}</span>
                  {type === "gcp-ace" && (
                    <small>
                      {t("Latihan tersedia \u00b7 Simulasi menunggu review")}
                    </small>
                  )}
                </button>
              ))}
            </div>
          </section>
          <section className="panel setup-section">
            <div className="setup-heading">
              <h2>{t("Mode belajar")}</h2>
            </div>
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
                    "{count} soal · {minutes} menit · waktu terus berjalan setelah keluar. Tanpa petunjuk jawaban.",
                    {
                      count: EXAM_COUNTS[config.examType],
                      minutes: EXAM_MINUTES[config.examType],
                    },
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
                <option
                  value="en"
                  disabled={!certification.languages.includes("en")}
                >
                  {t(
                    certification.languages.includes("en")
                      ? "English"
                      : "English belum tersedia",
                  )}
                </option>
              </select>
            </label>
            {config.mode === "practice" && (
              <div className="two-columns">
                <label>
                  {" "}
                  {t("Jumlah soal")}{" "}
                  <input
                    type="number"
                    aria-describedby="capacity start-reason"
                    aria-invalid={
                      !Number.isInteger(config.limit) ||
                      config.limit < 1 ||
                      config.limit > Math.min(200, capacity)
                    }
                    step={1}
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
            {config.mode === "practice" && (
              <>
                <div className="actions question-presets">
                  {[10, 20].map((n) => (
                    <button
                      key={n}
                      disabled={capacity < n}
                      onClick={() => onConfig({ ...config, limit: n })}
                    >
                      {n} {t("soal")}
                    </button>
                  ))}
                  <button
                    disabled={!capacity}
                    onClick={() =>
                      onConfig({ ...config, limit: Math.min(200, capacity) })
                    }
                  >
                    {t("Semua tersedia")}
                  </button>
                </div>
                <label>
                  {t("Jenis materi")}
                  <select
                    value={config.content || "all"}
                    onChange={(e) =>
                      onConfig({
                        ...config,
                        content: e.target.value as Config["content"],
                      })
                    }
                  >
                    <option value="all">{t("Semua materi")}</option>
                    <option value="new">{t("Belum pernah dicoba")}</option>
                    <option value="reviewed">
                      {t("Materi dengan referensi")}
                    </option>
                    <option value="archive">{t("Arsip latihan")}</option>
                  </select>
                </label>
              </>
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
          <details className="panel domain-settings">
            <summary>{t("Cakupan domain")}</summary>
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
          </details>
        </div>
        <aside className="stack launch-column">
          <section className="panel launch-panel">
            <span className="eyebrow">
              {config.mode === "simulation"
                ? t("SIMULASI PENUH")
                : t("LATIHAN PERSONAL")}
            </span>
            <h2>{certification.name}</h2>
            <dl>
              <div>
                <dt>{t("Soal")}</dt>
                <dd>{count}</dd>
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
            <small>
              {config.examType === "gcp-ace"
                ? t(
                    "Bank latihan GCP ACE, bukan soal resmi atau representasi ujian Google Cloud.",
                  )
                : t("Target ini bukan skor kelulusan resmi AWS.")}
            </small>
            {bankNotice && (
              <div className="bank-status">
                <p>{t(bankNotice)}</p>
                <button className="text-button" onClick={onRetryBank}>
                  {t("Coba perbarui bank")}
                </button>
              </div>
            )}
            <p id="start-reason" role="status">
              {startReason}
            </p>
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
              className="primary full-width start-button"
              aria-describedby="start-reason"
              disabled={!!startReason}
              onClick={onStart}
            >
              {startLabel}
              <StudioIcon name="arrow" />
            </button>
            <a href={certification.guide} target="_blank" rel="noreferrer">
              {" "}
              {t("Lihat panduan ujian {provider} ↗", {
                provider: certification.provider,
              })}{" "}
            </a>
          </section>
          <section className="panel">
            <h2>{t("Belajar dari hasil")}</h2>
            <p>
              {t("{count} soal unik sudah dipelajari.", {
                count: new Set(
                  currentAttempts.flatMap(
                    (a) => a.session?.questions.map((q) => q.id) || [],
                  ),
                ).size,
              })}
            </p>
            <small>
              {t(
                "{count} soal memenuhi syarat simulasi. Pengulangan dapat memengaruhi skor.",
                { count: pool.filter(simulationReady).length },
              )}
            </small>
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
      <div className="mobile-launch">
        <span>
          {count} {t("soal")} ·{" "}
          {config.mode === "simulation"
            ? `${certification.minutes} ${t("menit")}`
            : config.duration
              ? `${config.duration} ${t("menit")}`
              : t("Tanpa batas")}
        </span>
        <button
          className="primary"
          aria-describedby="start-reason"
          disabled={!!startReason}
          onClick={onStart}
        >
          {startLabel}
          <StudioIcon name="arrow" />
        </button>
        {startReason && <small>{startReason}</small>}
      </div>
    </main>
  );
}

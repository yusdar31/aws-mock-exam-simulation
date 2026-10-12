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
          <span className="eyebrow">RUANG BELAJAR</span>
          <h1>Persiapkan percobaan Anda</h1>
          <p>Pilih jalur, tentukan fokus, dan mulai saat Anda siap.</p>
        </div>
      </div>
      {saved && (
        <section className="resume-banner" role="status">
          <div>
            <strong>Ada sesi yang belum selesai</strong>
            <p>
              {saved.config.examType.toUpperCase()} ·{" "}
              {Object.keys(saved.answers).length}/{saved.questions.length} soal
              memiliki jawaban
            </p>
          </div>
          <div className="actions">
            <button className="primary" onClick={onResume}>
              Lanjutkan sesi
            </button>
            <button onClick={onDiscard}>Hapus sesi</button>
          </div>
        </section>
      )}
      <div className="lobby-grid">
        <div className="stack">
          <section className="panel">
            <h2>Jalur sertifikasi</h2>
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
                      ? "CLF-C02 · FOUNDATIONAL"
                      : "SAA-C03 · ASSOCIATE"}
                  </span>
                  <strong>
                    {type === "ccp"
                      ? "Cloud Practitioner"
                      : "Solutions Architect"}
                  </strong>
                  <span>
                    {type === "ccp"
                      ? "Konsep cloud, keamanan, layanan, dan biaya."
                      : "Desain arsitektur aman, tangguh, cepat, dan efisien."}
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="panel">
            <h2>Mode belajar</h2>
            <div className="segmented">
              {(["practice", "simulation"] as const).map((mode) => (
                <button
                  aria-pressed={config.mode === mode}
                  className={config.mode === mode ? "selected" : ""}
                  key={mode}
                  onClick={() => onConfig({ ...config, mode })}
                >
                  {mode === "practice" ? "Latihan" : "Simulasi penuh"}
                </button>
              ))}
            </div>
            <p>
              {config.mode === "practice"
                ? "Pembahasan dapat dibuka setelah menjawab. Anda dapat menjeda sesi."
                : `65 soal · ${EXAM_MINUTES[config.examType]} menit · waktu terus berjalan setelah keluar. Tanpa petunjuk jawaban.`}
            </p>
            <label>
              Bahasa soal
              <select
                aria-label="Bahasa soal"
                value={config.lang}
                onChange={(event) =>
                  onConfig({
                    ...config,
                    lang: event.target.value as Config["lang"],
                  })
                }
              >
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
              </select>
            </label>
            {config.mode === "practice" && (
              <div className="two-columns">
                <label>
                  Jumlah soal
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
                  Durasi
                  <select
                    aria-label="Durasi"
                    value={config.duration}
                    onChange={(e) =>
                      onConfig({ ...config, duration: Number(e.target.value) })
                    }
                  >
                    <option value={0}>Tanpa batas waktu</option>
                    {[15, 30, 45, 60].map((value) => (
                      <option key={value} value={value}>
                        {value} menit
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
            <small id="capacity">
              {loading
                ? "Memuat bank soal…"
                : `${capacity} soal sesuai cakupan · ${pool.length} soal dalam bahasa ini`}
            </small>
          </section>
          <section className="panel">
            <h2>Cakupan domain</h2>
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
                    {domain}
                    <small>{counts[domain] || 0} soal tersedia</small>
                  </span>
                  <span className="domain-weight">
                    {BLUEPRINT[config.examType][domain]}%
                  </span>
                </label>
              ))}
            </div>
            <small>
              Persentase mengikuti bobot blueprint untuk pemilihan soal
              simulasi.
            </small>
          </section>
        </div>
        <aside className="stack launch-column">
          <section className="panel launch-panel">
            <span className="eyebrow">
              {config.mode === "simulation"
                ? "SIMULASI PENUH"
                : "LATIHAN PERSONAL"}
            </span>
            <h2>
              {config.examType === "ccp"
                ? "Cloud Practitioner"
                : "Solutions Architect"}
            </h2>
            <dl>
              <div>
                <dt>Soal</dt>
                <dd>{config.mode === "simulation" ? 65 : config.limit}</dd>
              </div>
              <div>
                <dt>Waktu</dt>
                <dd>
                  {config.mode === "simulation"
                    ? `${EXAM_MINUTES[config.examType]} menit`
                    : config.duration
                      ? `${config.duration} menit`
                      : "Tanpa batas"}
                </dd>
              </div>
              <div>
                <dt>Target latihan</dt>
                <dd>{PRACTICE_TARGET}% akurasi</dd>
              </div>
            </dl>
            <small>Target ini bukan skor kelulusan resmi AWS.</small>
            {bankNotice && <p className="notice">{bankNotice}</p>}
            {config.mode === "simulation" && missing.length > 0 && (
              <p className="notice">
                Bank belum cukup:{" "}
                {missing
                  .map(
                    ([domain, count]) =>
                      `${domain} (${simulationCounts[domain]}/${count})`,
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
              Mulai {config.mode === "simulation" ? "simulasi" : "latihan"}
            </button>
            <a
              href={`https://docs.aws.amazon.com/aws-certification/latest/${config.examType === "ccp" ? "cloud-practitioner-02/cloud-practitioner-02" : "solutions-architect-associate-03/solutions-architect-associate-03"}.html`}
              target="_blank"
              rel="noreferrer"
            >
              Lihat panduan ujian AWS ↗
            </a>
          </section>
          <section className="panel">
            <h2>Belajar dari hasil</h2>
            <p>
              {due.length} soal perlu diulang. Rekomendasi berdasarkan riwayat{" "}
              {config.examType.toUpperCase()} dalam bahasa ini.
            </p>
            <button
              className="secondary full-width"
              disabled={!due.length}
              onClick={() => onPractice(due.slice(0, 20))}
            >
              Ulangi materi terjadwal
            </button>
            <button className="text-button" onClick={weakest}>
              Latihan domain terlemah
            </button>
            {notice && <p role="status">{notice}</p>}
            {currentAttempts[0] && (
              <small>Akurasi terakhir: {currentAttempts[0].scoreRate}%</small>
            )}
          </section>
        </aside>
      </div>
    </main>
  );
}

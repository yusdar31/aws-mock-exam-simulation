import { useLanguage } from "../i18n/context";
import { useState } from "react";
import CompactReview from "../components/CompactReview";
import type { Attempt, ExamType, Language, Question } from "../types";
import { formatTime, matches, PRACTICE_TARGET } from "../lib/exam";
export default function History({
  attempts,
  onOpen,
  onLoadMore,
  onPractice,
  initialType,
  initialLang,
}: {
  initialType: ExamType;
  initialLang: Language;
  attempts: Attempt[];
  onOpen: (attempt: Attempt) => void;
  onLoadMore: () => Promise<void>;
  onPractice: (questions: Question[]) => void;
}) {
  const { t, locale } = useLanguage();
  const [view, setView] = useState<"attempts" | "notebook">("attempts");
  const [type, setType] = useState<ExamType>(initialType),
    [lang, setLang] = useState<Language>(initialLang),
    [mode, setMode] = useState("all"),
    [page, setPage] = useState(1),
    [loading, setLoading] = useState(false);
  const list = attempts.filter(
    (a) =>
      a.examType === type &&
      a.lang === lang &&
      (mode === "all" || a.mode === mode),
  );
  const average = list.length
    ? Math.round(list.reduce((sum, a) => sum + a.scoreRate, 0) / list.length)
    : 0;
  const latest = new Map<string, { question: Question; answers: string[] }>();
  for (const attempt of [...list].reverse())
    for (const question of attempt.session?.questions || [])
      latest.set(question.id, {
        question,
        answers: attempt.session?.answers[question.id] || [],
      });
  const notebook = [...latest.values()].filter(
    (item) => !matches(item.answers, item.question.correctAnswers),
  );
  const wrong = new Set(notebook.map((item) => item.question.id));
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">{t("LEARNING ANALYTICS")}</span>
          <h1>{t("Riwayat & perkembangan")}</h1>
          <p>
            {" "}
            {t(
              "Bandingkan percobaan pada sertifikasi, bahasa, dan mode yang sama.",
            )}{" "}
          </p>
        </div>
      </div>
      <section className="panel">
        <p>
          {t("{count} hasil tersimpan di semua filter.", {
            count: attempts.length,
          })}
        </p>
        <button
          className="text-button"
          onClick={() => {
            setType(initialType);
            setLang(initialLang);
            setMode("all");
            setPage(1);
          }}
        >
          {t("Reset filter")}
        </button>
        <div className="filter-row">
          <label>
            {" "}
            {t("Sertifikasi")}{" "}
            <select
              aria-label={t("Sertifikasi")}
              value={type}
              onChange={(e) => {
                setType(e.target.value as ExamType);
                setPage(1);
              }}
            >
              <option value="ccp">CLF-C02</option>
              <option value="saa">SAA-C03</option>
              <option value="gcp-ace">Google Cloud ACE</option>
            </select>
          </label>
          <label>
            {" "}
            {t("Bahasa")}{" "}
            <select
              aria-label={t("Bahasa")}
              value={lang}
              onChange={(e) => {
                setLang(e.target.value as Language);
                setPage(1);
              }}
            >
              <option value="id">{t("Indonesia")}</option>
              <option value="en">{t("English")}</option>
            </select>
          </label>
          <label>
            {" "}
            {t("Mode")}{" "}
            <select
              aria-label={t("Mode")}
              value={mode}
              onChange={(e) => {
                setMode(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">{t("Semua mode")}</option>
              <option value="practice">{t("Latihan")}</option>
              <option value="simulation">{t("Simulasi penuh")}</option>
            </select>
          </label>
        </div>
      </section>
      <div className="stat-grid">
        <section className="panel">
          <small>{t("Percobaan dimuat")}</small>
          <strong>{list.length}</strong>
        </section>
        <section className="panel">
          <small>{t("Akurasi rata-rata")}</small>
          <strong>{average}%</strong>
        </section>
        <section className="panel">
          <small>{t("Soal perlu diperkuat")}</small>
          <strong>{wrong.size}</strong>
        </section>
      </div>
      <div className="segmented">
        <button
          aria-pressed={view === "attempts"}
          onClick={() => {
            setView("attempts");
            setPage(1);
          }}
        >
          {" "}
          {t("Riwayat percobaan")}{" "}
        </button>
        <button
          aria-pressed={view === "notebook"}
          onClick={() => {
            setView("notebook");
            setPage(1);
          }}
        >
          {t("Catatan soal salah ({count})", { count: notebook.length })}
        </button>
      </div>
      {view === "notebook" && (
        <section className="panel">
          <h2>{t("Catatan soal yang perlu diperkuat")}</h2>
          <p>
            {" "}
            {t(
              "Jawaban terakhir per soal dari riwayat yang telah dimuat. Soal yang sudah dijawab benar akan keluar dari catatan ini.",
            )}{" "}
          </p>
          <button
            className="primary"
            disabled={!notebook.length}
            onClick={() =>
              onPractice(notebook.slice(0, 20).map((item) => item.question))
            }
          >
            {" "}
            {t("Latih kembali hingga 20 soal")}{" "}
          </button>
          {notebook.slice((page - 1) * 10, page * 10).map((item) => (
            <article className="review-question" key={item.question.id}>
              <span className="eyebrow">{t(item.question.domain)}</span>
              <h3 lang={item.question.lang}>{item.question.prompt}</h3>
              <CompactReview question={item.question} selected={item.answers} />
            </article>
          ))}
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              {" "}
              {t("Sebelumnya")}{" "}
            </button>
            <span>
              {page}/{Math.max(1, Math.ceil(notebook.length / 10))}
            </span>
            <button
              disabled={page * 10 >= notebook.length}
              onClick={() => setPage(page + 1)}
            >
              {" "}
              {t("Berikutnya")}{" "}
            </button>
          </div>
        </section>
      )}
      {view === "attempts" && (
        <>
          <section className="panel">
            <h2>{t("Tren akurasi")}</h2>
            <div className="trend-list">
              {list
                .slice(0, 10)
                .reverse()
                .map((a, index) => (
                  <div key={a.id}>
                    <span>
                      {t("Percobaan")} {index + 1}
                    </span>
                    <meter
                      value={a.scoreRate}
                      min={0}
                      max={100}
                      aria-label={t("Akurasi {accuracy}%", {
                        accuracy: a.scoreRate,
                      })}
                    />
                    <strong>{a.scoreRate}%</strong>
                  </div>
                ))}
            </div>
            <small>
              {" "}
              {t("Target latihan")} {PRACTICE_TARGET}
              {t("% · Tidak ekuivalen dengan skor sertifikasi resmi.")}{" "}
            </small>
          </section>
          <section className="panel">
            <h2>{t("Daftar percobaan")}</h2>
            {!list.length && (
              <p>{t("Belum ada percobaan untuk filter ini.")}</p>
            )}
            {list.slice((page - 1) * 10, page * 10).map((a) => (
              <article key={a.id} className="attempt-row">
                <div>
                  <strong>
                    {new Date(a.submittedAt).toLocaleString(locale)}
                  </strong>
                  <p>
                    {a.mode === "simulation" ? t("Simulasi") : t("Latihan")} ·{" "}
                    {a.score}/{a.totalQuestions} {t("benar ·")}{" "}
                    {formatTime(a.durationSeconds)}
                  </p>
                  <small>
                    {a.synced ? t("Tersinkron") : t("Tersimpan di perangkat")}
                  </small>
                </div>
                <strong>{a.scoreRate}%</strong>
                <button onClick={() => onOpen(a)}>{t("Buka review")}</button>
              </article>
            ))}
            <div className="pagination">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                {" "}
                {t("Sebelumnya")}{" "}
              </button>
              <span>
                {page}/{Math.max(1, Math.ceil(list.length / 10))}
              </span>
              <button
                disabled={page * 10 >= list.length}
                onClick={() => setPage(page + 1)}
              >
                {" "}
                {t("Berikutnya")}{" "}
              </button>
            </div>
            <button
              className="text-button"
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                try {
                  await onLoadMore();
                } finally {
                  setLoading(false);
                }
              }}
            >
              {loading ? t("Memuat…") : t("Muat riwayat cloud berikutnya")}
            </button>
          </section>
        </>
      )}
    </main>
  );
}

import { useState } from "react";
import type { Attempt, ExamType, Language, Question } from "../types";
import { formatTime, matches, PRACTICE_TARGET } from "../lib/exam";
export default function History({
  attempts,
  onOpen,
  onLoadMore,
  onPractice,
}: {
  attempts: Attempt[];
  onOpen: (attempt: Attempt) => void;
  onLoadMore: () => Promise<void>;
  onPractice: (questions: Question[]) => void;
}) {
  const [view, setView] = useState<"attempts" | "notebook">("attempts");
  const [type, setType] = useState<ExamType>("ccp"),
    [lang, setLang] = useState<Language>("id"),
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
          <span className="eyebrow">LEARNING ANALYTICS</span>
          <h1>Riwayat & perkembangan</h1>
          <p>
            Bandingkan percobaan pada sertifikasi, bahasa, dan mode yang sama.
          </p>
        </div>
      </div>
      <section className="panel">
        <div className="filter-row">
          <label>
            Sertifikasi
            <select
              aria-label="Sertifikasi"
              value={type}
              onChange={(e) => {
                setType(e.target.value as ExamType);
                setPage(1);
              }}
            >
              <option value="ccp">CLF-C02</option>
              <option value="saa">SAA-C03</option>
            </select>
          </label>
          <label>
            Bahasa
            <select
              aria-label="Bahasa"
              value={lang}
              onChange={(e) => {
                setLang(e.target.value as Language);
                setPage(1);
              }}
            >
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </label>
          <label>
            Mode
            <select
              aria-label="Mode"
              value={mode}
              onChange={(e) => {
                setMode(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">Semua mode</option>
              <option value="practice">Latihan</option>
              <option value="simulation">Simulasi penuh</option>
            </select>
          </label>
        </div>
      </section>
      <div className="stat-grid">
        <section className="panel">
          <small>Percobaan dimuat</small>
          <strong>{list.length}</strong>
        </section>
        <section className="panel">
          <small>Akurasi rata-rata</small>
          <strong>{average}%</strong>
        </section>
        <section className="panel">
          <small>Soal perlu diperkuat</small>
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
          Riwayat percobaan
        </button>
        <button
          aria-pressed={view === "notebook"}
          onClick={() => {
            setView("notebook");
            setPage(1);
          }}
        >
          Catatan soal salah ({notebook.length})
        </button>
      </div>
      {view === "notebook" && (
        <section className="panel">
          <h2>Catatan soal yang perlu diperkuat</h2>
          <p>
            Jawaban terakhir per soal dari riwayat yang telah dimuat. Soal yang
            sudah dijawab benar akan keluar dari catatan ini.
          </p>
          <button
            className="primary"
            disabled={!notebook.length}
            onClick={() =>
              onPractice(notebook.slice(0, 20).map((item) => item.question))
            }
          >
            Latih kembali hingga 20 soal
          </button>
          {notebook.slice((page - 1) * 10, page * 10).map((item) => (
            <article className="review-question" key={item.question.id}>
              <span className="eyebrow">{item.question.domain}</span>
              <h3>{item.question.prompt}</h3>
              <p>
                Pilihan terakhir: {item.answers.join(", ") || "Belum dijawab"} ?
                Kunci: {item.question.correctAnswers.join(", ")}
              </p>
              <p>{item.question.explanation}</p>
            </article>
          ))}
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Sebelumnya
            </button>
            <span>
              {page}/{Math.max(1, Math.ceil(notebook.length / 10))}
            </span>
            <button
              disabled={page * 10 >= notebook.length}
              onClick={() => setPage(page + 1)}
            >
              Berikutnya
            </button>
          </div>
        </section>
      )}
      {view === "attempts" && (
        <>
          <section className="panel">
            <h2>Tren akurasi</h2>
            <div className="trend-list">
              {list
                .slice(0, 10)
                .reverse()
                .map((a, index) => (
                  <div key={a.id}>
                    <span>Percobaan {index + 1}</span>
                    <meter
                      value={a.scoreRate}
                      min={0}
                      max={100}
                      aria-label={`Akurasi ${a.scoreRate}%`}
                    />
                    <strong>{a.scoreRate}%</strong>
                  </div>
                ))}
            </div>
            <small>
              Target latihan {PRACTICE_TARGET}% · Tidak ekuivalen dengan skor
              resmi AWS.
            </small>
          </section>
          <section className="panel">
            <h2>Daftar percobaan</h2>
            {!list.length && <p>Belum ada percobaan untuk filter ini.</p>}
            {list.slice((page - 1) * 10, page * 10).map((a) => (
              <article key={a.id} className="attempt-row">
                <div>
                  <strong>
                    {new Date(a.submittedAt).toLocaleString("id-ID")}
                  </strong>
                  <p>
                    {a.mode === "simulation" ? "Simulasi" : "Latihan"} ·{" "}
                    {a.score}/{a.totalQuestions} benar ·{" "}
                    {formatTime(a.durationSeconds)}
                  </p>
                  <small>
                    {a.synced ? "Tersinkron" : "Tersimpan di perangkat"}
                  </small>
                </div>
                <strong>{a.scoreRate}%</strong>
                <button onClick={() => onOpen(a)}>Buka review</button>
              </article>
            ))}
            <div className="pagination">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Sebelumnya
              </button>
              <span>
                {page}/{Math.max(1, Math.ceil(list.length / 10))}
              </span>
              <button
                disabled={page * 10 >= list.length}
                onClick={() => setPage(page + 1)}
              >
                Berikutnya
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
              {loading ? "Memuat…" : "Muat riwayat cloud berikutnya"}
            </button>
          </section>
        </>
      )}
    </main>
  );
}

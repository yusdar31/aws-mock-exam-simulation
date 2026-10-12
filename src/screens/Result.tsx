import { useState } from "react";
import type { Attempt } from "../types";
import { formatTime, matches, PRACTICE_TARGET } from "../lib/exam";
import QuestionReview from "../components/QuestionReview";
export default function Result({
  attempt,
  onBack,
}: {
  attempt: Attempt;
  onBack: () => void;
}) {
  const [filter, setFilter] = useState("wrong"),
    [page, setPage] = useState(1),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  const session = attempt.session;
  const items = (session?.questions || []).filter(
    (q) =>
      filter === "all" ||
      (filter === "wrong" &&
        !matches(session?.answers[q.id], q.correctAnswers)) ||
      (filter === "unanswered" && !session?.answers[q.id]?.length) ||
      (filter === "flagged" && session?.flags.includes(q.id)),
  );
  async function pdf() {
    setBusy(true);
    setNotice("");
    try {
      const element = document.getElementById("result-report");
      if (!element) return;
      const { default: html2pdf } = await import("html2pdf.js");
      await html2pdf()
        .set({
          margin: 0.4,
          filename: `${attempt.examType}-review-${attempt.id}.pdf`,
          html2canvas: { scale: 1.5 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    } catch {
      setNotice(
        "Ekspor PDF belum berhasil. Gunakan tombol Cetak untuk menyimpan sebagai PDF.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">
            HASIL {attempt.mode === "simulation" ? "SIMULASI" : "LATIHAN"}
          </span>
          <h1>Evaluasi percobaan Anda</h1>
          <p>
            {attempt.examType.toUpperCase()} ·{" "}
            {new Date(attempt.submittedAt).toLocaleString("id-ID")}
          </p>
        </div>
        <button onClick={onBack}>Kembali</button>
      </div>
      <div id="result-report">
        <section className="panel result-summary">
          <div>
            <span className="eyebrow">AKURASI JAWABAN</span>
            <strong className="score">
              {attempt.scoreRate}
              <small>%</small>
            </strong>
            <p>
              {attempt.score} dari {attempt.totalQuestions} benar
            </p>
          </div>
          <div>
            <h2>
              {attempt.scoreRate >= PRACTICE_TARGET
                ? "Target latihan tercapai"
                : "Masih ada ruang untuk berlatih"}
            </h2>
            <p>
              Target internal {PRACTICE_TARGET}%. Persentase ini bukan scaled
              score atau prediksi kelulusan resmi AWS.
            </p>
            <small>
              Durasi aktif {formatTime(attempt.durationSeconds)} ·{" "}
              {attempt.synced ? "Tersinkron" : "Tersimpan di perangkat"}
            </small>
          </div>
        </section>
        <section className="panel">
          <h2>Performa per domain</h2>
          <div className="performance-list">
            {attempt.domainPerformance.map((domain) => (
              <div key={domain.domain}>
                <div>
                  <span>{domain.domain}</span>
                  <strong>
                    {domain.accuracy}% · {domain.correct}/{domain.total}
                  </strong>
                </div>
                <meter
                  min={0}
                  max={100}
                  value={domain.accuracy}
                  aria-label={`Akurasi ${domain.domain}`}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="section-header">
            <h2>Review jawaban</h2>
            <label className="inline-label">
              Tampilkan
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="wrong">Salah & belum tepat</option>
                <option value="unanswered">Belum dijawab</option>
                <option value="flagged">Ditandai</option>
                <option value="all">Semua soal</option>
              </select>
            </label>
          </div>
          {!session ? (
            <p>
              Riwayat lama hanya berisi ringkasan. Percobaan baru menyimpan
              jawaban dan versi soal.
            </p>
          ) : !items.length ? (
            <p>Tidak ada soal pada filter ini.</p>
          ) : (
            items.slice((page - 1) * 10, page * 10).map((q) => (
              <article className="review-question" key={q.id}>
                <span className="eyebrow">
                  {q.domain} · {formatTime(session.questionTimes[q.id] || 0)}
                </span>
                <h3>{q.prompt}</h3>
                <p>
                  Jawaban Anda:{" "}
                  {(session.answers[q.id] || []).join(", ") || "Belum dijawab"}{" "}
                  · Jawaban benar: {q.correctAnswers.join(", ")}
                </p>
                <QuestionReview
                  question={q}
                  selected={session.answers[q.id] || []}
                />
              </article>
            ))
          )}
          {items.length > 10 && (
            <div className="pagination">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Sebelumnya
              </button>
              <span>
                {page}/{Math.ceil(items.length / 10)}
              </span>
              <button
                disabled={page * 10 >= items.length}
                onClick={() => setPage(page + 1)}
              >
                Berikutnya
              </button>
            </div>
          )}
          <small>
            PDF mengekspor ringkasan dan halaman review yang sedang ditampilkan.
          </small>
        </section>
      </div>
      <div className="actions">
        <button className="primary" disabled={busy} onClick={pdf}>
          {busy ? "Menyiapkan PDF…" : "Unduh PDF"}
        </button>
        <button onClick={() => window.print()}>Cetak</button>
        <button onClick={onBack}>Ruang belajar</button>
      </div>
      {notice && <p role="status">{notice}</p>}
    </main>
  );
}

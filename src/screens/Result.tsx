import { useLanguage } from "../i18n/context";
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
  const { t, locale } = useLanguage();
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
            {" "}
            {t("HASIL")}{" "}
            {attempt.mode === "simulation" ? t("SIMULASI") : t("LATIHAN")}
          </span>
          <h1>{t("Evaluasi percobaan Anda")}</h1>
          <p>
            {attempt.examType.toUpperCase()} ·{" "}
            {new Date(attempt.submittedAt).toLocaleString(locale)}
          </p>
        </div>
        <button onClick={onBack}>{t("Kembali")}</button>
      </div>
      <div id="result-report">
        <section className="panel result-summary">
          <div>
            <span className="eyebrow">{t("AKURASI JAWABAN")}</span>
            <strong className="score">
              {attempt.scoreRate}
              <small>%</small>
            </strong>
            <p>
              {t("{score} dari {total} benar", {
                score: attempt.score,
                total: attempt.totalQuestions,
              })}
            </p>
          </div>
          <div>
            <h2>
              {attempt.scoreRate >= PRACTICE_TARGET
                ? t("Target latihan tercapai")
                : t("Masih ada ruang untuk berlatih")}
            </h2>
            <p>
              {t(
                "Target internal {target}%. Persentase ini bukan scaled score atau prediksi kelulusan resmi AWS.",
                { target: PRACTICE_TARGET },
              )}
            </p>
            <small>
              {" "}
              {t("Durasi aktif")} {formatTime(attempt.durationSeconds)} ·{" "}
              {attempt.synced ? t("Tersinkron") : t("Tersimpan di perangkat")}
            </small>
          </div>
        </section>
        <section className="panel">
          <h2>{t("Performa per domain")}</h2>
          <div className="performance-list">
            {attempt.domainPerformance.map((domain) => (
              <div key={domain.domain}>
                <div>
                  <span>{t(domain.domain)}</span>
                  <strong>
                    {domain.accuracy}% · {domain.correct}/{domain.total}
                  </strong>
                </div>
                <meter
                  min={0}
                  max={100}
                  value={domain.accuracy}
                  aria-label={t("Akurasi {domain}", {
                    domain: t(domain.domain),
                  })}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="panel">
          <div className="section-header">
            <h2>{t("Review jawaban")}</h2>
            <label className="inline-label">
              {" "}
              {t("Tampilkan")}{" "}
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="wrong">{t("Salah & belum tepat")}</option>
                <option value="unanswered">{t("Belum dijawab")}</option>
                <option value="flagged">{t("Ditandai")}</option>
                <option value="all">{t("Semua soal")}</option>
              </select>
            </label>
          </div>
          {!session ? (
            <p>
              {" "}
              {t(
                "Riwayat lama hanya berisi ringkasan. Percobaan baru menyimpan jawaban dan versi soal.",
              )}{" "}
            </p>
          ) : !items.length ? (
            <p>{t("Tidak ada soal pada filter ini.")}</p>
          ) : (
            items.slice((page - 1) * 10, page * 10).map((q) => (
              <article className="review-question" key={q.id}>
                <span className="eyebrow">
                  {t(q.domain)} · {formatTime(session.questionTimes[q.id] || 0)}
                </span>
                <h3 lang={q.lang}>{q.prompt}</h3>
                <p>
                  {" "}
                  {t("Jawaban Anda:")}{" "}
                  {(session.answers[q.id] || []).join(", ") ||
                    t("Belum dijawab")}{" "}
                  {t("· Jawaban benar:")} {q.correctAnswers.join(", ")}
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
                {" "}
                {t("Sebelumnya")}{" "}
              </button>
              <span>
                {page}/{Math.ceil(items.length / 10)}
              </span>
              <button
                disabled={page * 10 >= items.length}
                onClick={() => setPage(page + 1)}
              >
                {" "}
                {t("Berikutnya")}{" "}
              </button>
            </div>
          )}
          <small>
            {" "}
            {t(
              "PDF mengekspor ringkasan dan halaman review yang sedang ditampilkan.",
            )}{" "}
          </small>
        </section>
      </div>
      <div className="actions">
        <button className="primary" disabled={busy} onClick={pdf}>
          {busy ? t("Menyiapkan PDF…") : t("Unduh PDF")}
        </button>
        <button onClick={() => window.print()}>{t("Cetak")}</button>
        <button onClick={onBack}>{t("Ruang belajar")}</button>
      </div>
      {notice && <p role="status">{t(notice)}</p>}
    </main>
  );
}

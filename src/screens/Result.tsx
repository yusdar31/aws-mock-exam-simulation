import { useLanguage } from "../i18n/context";
import { useState } from "react";
import type { Attempt, Question } from "../types";
import { formatTime, matches, PRACTICE_TARGET } from "../lib/exam";
import CompactReview from "../components/CompactReview";
import { CERTIFICATIONS } from "../lib/catalog";
export default function Result({
  attempt,
  onBack,
  onPractice,
  onRepeat,
}: {
  attempt: Attempt;
  onBack: () => void;
  onPractice: (questions: Question[]) => void;
  onRepeat: () => void;
}) {
  const { t, locale, language } = useLanguage();
  const [filter, setFilter] = useState("wrong"),
    [page, setPage] = useState(1),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  const [domain, setDomain] = useState("all"),
    [search, setSearch] = useState(""),
    [exportKind, setExportKind] = useState("all");
  const [wrongCursor, setWrongCursor] = useState(-1);
  const session = attempt.session;
  const all = session?.questions || [];
  const wrong = all.filter(
    (q) => !matches(session?.answers[q.id], q.correctAnswers),
  );
  const weak = [...attempt.domainPerformance].sort(
    (a, b) => a.accuracy - b.accuracy,
  )[0]?.domain;
  const items = all.filter(
    (q) =>
      (filter === "all" ||
        (filter === "wrong" &&
          !matches(session?.answers[q.id], q.correctAnswers)) ||
        (filter === "unanswered" && !session?.answers[q.id]?.length) ||
        (filter === "flagged" && session?.flags.includes(q.id)) ||
        (filter === "unsure" && session?.confidence?.[q.id] === "unsure") ||
        (filter === "slow" && (session?.questionTimes[q.id] || 0) > 90)) &&
      (domain === "all" || q.domain === domain) &&
      `${q.prompt} ${q.options.map((o) => o.text).join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  async function pdf() {
    setBusy(true);
    setNotice("");
    try {
      const { exportPdf } = await import("../lib/pdf");
      await exportPdf(
        attempt,
        exportKind === "summary" ? [] : exportKind === "wrong" ? wrong : all,
        language === "en",
      );
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
            {CERTIFICATIONS[attempt.examType].code} ·{" "}
            {new Date(attempt.submittedAt).toLocaleString(locale)}
          </p>
        </div>
        <button onClick={onBack}>{t("Kembali")}</button>
      </div>
      <section className="panel no-print">
        <h2>{t("Langkah berikutnya")}</h2>
        <p>
          {weak
            ? t("Fokus berikutnya: {domain}.", { domain: t(weak) })
            : t("Mulai latihan berikutnya untuk memperluas cakupan materi.")}
        </p>
        <div className="actions">
          <button
            className="primary"
            disabled={!wrong.length}
            onClick={() => onPractice(wrong.slice(0, 20))}
          >
            {t("Latih soal salah")}
          </button>
          <button
            disabled={!all.length}
            onClick={() =>
              onPractice(all.filter((q) => q.domain === weak).slice(0, 10))
            }
          >
            {t("Latih domain terlemah")}
          </button>
          <button disabled={!session} onClick={onRepeat}>
            {t("Ulangi konfigurasi ini")}
          </button>
        </div>
      </section>
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
                "Target internal {target}%. Persentase ini bukan scaled score atau prediksi kelulusan resmi.",
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
                aria-label={t("Tampilkan")}
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setPage(1);
                }}
              >
                <option value="wrong">{t("Salah & belum tepat")}</option>
                <option value="unanswered">{t("Belum dijawab")}</option>
                <option value="flagged">{t("Ditandai")}</option>
                <option value="unsure">{t("Ragu")}</option>
                <option value="slow">{t("Lebih dari 90 detik")}</option>
                <option value="all">{t("Semua soal")}</option>
              </select>
            </label>
          </div>
          <div className="filter-row no-print">
            <label>
              {t("Domain")}
              <select
                aria-label={t("Domain")}
                value={domain}
                onChange={(e) => {
                  setDomain(e.target.value);
                  setPage(1);
                }}
              >
                <option value="all">{t("Semua domain")}</option>
                {attempt.domainPerformance.map((d) => (
                  <option key={d.domain}>{d.domain}</option>
                ))}
              </select>
            </label>
            <label>
              {t("Cari soal")}
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </label>
          </div>
          {wrong.length > 0 && (
            <button
              onClick={() => {
                const next = (wrongCursor + 1) % wrong.length;
                setWrongCursor(next);
                setFilter("wrong");
                setDomain("all");
                setSearch("");
                setPage(Math.floor(next / 10) + 1);
                setTimeout(() => {
                  const target = document.getElementById(
                    `result-question-${wrong[next].id}`,
                  );
                  target?.scrollIntoView({ block: "start" });
                  target?.focus();
                }, 0);
              }}
            >
              {t("Soal salah berikutnya")}
            </button>
          )}
          {!session ? (
            <p>
              {" "}
              {t(
                "Riwayat lama hanya berisi ringkasan. Percobaan baru menyimpan jawaban dan versi soal.",
              )}{" "}
            </p>
          ) : !items.length ? (
            <p>
              {t(
                filter === "wrong" && !wrong.length
                  ? "Semua jawaban benar. Coba materi baru untuk memperluas pemahaman."
                  : "Tidak ada soal pada filter ini.",
              )}
            </p>
          ) : (
            items.slice((page - 1) * 10, page * 10).map((q) => (
              <article
                className="review-question"
                key={q.id}
                id={`result-question-${q.id}`}
                tabIndex={-1}
              >
                <span className="eyebrow">
                  {t(q.domain)} · {formatTime(session.questionTimes[q.id] || 0)}
                </span>
                <h3 lang={q.lang}>{q.prompt}</h3>
                <CompactReview
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
              "Ekspor PDF mencakup seluruh pilihan ekspor, tanpa batas halaman review.",
            )}{" "}
          </small>
        </section>
      </div>
      <label className="no-print">
        {t("Isi ekspor PDF")}
        <select
          aria-label={t("Isi ekspor PDF")}
          value={exportKind}
          onChange={(e) => setExportKind(e.target.value)}
        >
          <option value="summary">{t("Ringkasan")}</option>
          <option value="wrong">{t("Semua soal salah")}</option>
          <option value="all">{t("Seluruh percobaan")}</option>
        </select>
      </label>
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

import { useLanguage } from "../i18n/context";
import { useEffect, useRef, useState } from "react";
import type { Session } from "../types";
import { answered, matches } from "../lib/exam";
import Timer from "../components/Timer";
import QuestionReview from "../components/QuestionReview";
import LanguageSelector from "../components/LanguageSelector";
export default function Exam({
  session,
  reviewing,
  busy,
  onAnswer,
  onNavigate,
  onFlag,
  onClear,
  onPause,
  onReview,
  onFinish,
  storageStatus,
}: {
  session: Session;
  reviewing: boolean;
  busy: boolean;
  onAnswer: (option: string) => void;
  onNavigate: (index: number) => void;
  onFlag: () => void;
  onClear: () => void;
  onPause: () => void;
  onReview: (value: boolean) => void;
  onFinish: () => void;
  storageStatus: string;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false),
    [feedback, setFeedback] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const q = session.questions[session.index],
    selected = q ? session.answers[q.id] || [] : [];
  useEffect(() => {
    heading.current?.focus();
  }, [session.index, reviewing]);
  const count = session.questions.filter((q) =>
    answered(q, session.answers),
  ).length;
  if (!q)
    return (
      <main className="page">
        <p role="alert">
          {" "}
          {t(
            "Sesi tidak valid. Kembali ke ruang belajar untuk memilih soal.",
          )}{" "}
        </p>
        <button onClick={onPause}>{t("Kembali")}</button>
      </main>
    );
  const navigate = (index: number) => {
    onNavigate(index);
    onReview(false);
    setOpen(false);
  };
  return (
    <main className="exam-shell">
      <header className="exam-header">
        <div>
          <strong>
            {session.config.examType === "ccp" ? "CLF-C02" : "SAA-C03"}
          </strong>
          <small>
            {reviewing
              ? t("Review sebelum submit")
              : t("Soal {index} dari {total}", {
                  index: session.index + 1,
                  total: session.questions.length,
                })}
          </small>
          <small className="save-state" role="status">
            {t(storageStatus)}
          </small>
        </div>
        <div className="exam-tools">
          <Timer deadline={session.deadline} onExpire={onFinish} />
          <LanguageSelector />
        </div>
        <button
          className="navigator-toggle"
          aria-expanded={open}
          aria-controls="question-navigator"
          onClick={() => setOpen(!open)}
        >
          {" "}
          {t("Navigator")} {count}/{session.questions.length}
        </button>
      </header>
      <div className="exam-layout">
        <aside
          id="question-navigator"
          className={`navigator ${open ? "open" : ""}`}
        >
          <h2>{t("Navigator soal")}</h2>
          <p>
            {t("{count} lengkap · {flagged} ditandai", {
              count,
              flagged: session.flags.length,
            })}
          </p>
          <div className="navigator-grid">
            {session.questions.map((question, index) => {
              const done = answered(question, session.answers),
                flag = session.flags.includes(question.id);
              return (
                <button
                  key={question.id}
                  aria-current={index === session.index ? "step" : undefined}
                  aria-label={t("Soal {index}, {status}{flag}", {
                    index: index + 1,
                    status: done ? t("jawaban lengkap") : t("belum lengkap"),
                    flag: flag ? t(", ditandai") : "",
                  })}
                  className={`${done ? "answered" : ""} ${flag ? "flagged" : ""} ${index === session.index ? "current" : ""}`}
                  onClick={() => navigate(index)}
                >
                  {index + 1}
                  {flag && <span aria-hidden="true">•</span>}
                </button>
              );
            })}
          </div>
          <small>{t("● Ditandai · Hijau: jawaban lengkap")}</small>
          <button
            className="secondary full-width"
            onClick={() => onReview(true)}
          >
            {" "}
            {t("Review semua soal")}{" "}
          </button>
        </aside>
        <section className="exam-content">
          {reviewing ? (
            <>
              <h1 ref={heading} tabIndex={-1}>
                {" "}
                {t("Periksa jawaban Anda")}{" "}
              </h1>
              <p>
                {t(
                  "{count} soal belum dijawab lengkap. Anda dapat kembali ke soal sebelum submit.",
                  { count: session.questions.length - count },
                )}
              </p>
              <div className="review-list">
                {session.questions.map((question, index) => (
                  <button key={question.id} onClick={() => navigate(index)}>
                    <strong>
                      {t("Soal")} {index + 1}
                    </strong>
                    <span>
                      {answered(question, session.answers)
                        ? t("Lengkap")
                        : t("Belum lengkap")}
                      {session.flags.includes(question.id)
                        ? t(" · Ditandai")
                        : ""}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="question-meta">
                <span>{t(q.domain)}</span>
                <span>
                  {q.type === "multiple"
                    ? t("Pilih {count} jawaban", {
                        count: q.correctAnswers.length,
                      })
                    : t("Pilih satu jawaban")}
                </span>
                <button
                  className="text-button"
                  aria-pressed={session.flags.includes(q.id)}
                  onClick={onFlag}
                >
                  {session.flags.includes(q.id)
                    ? t("● Ditandai")
                    : t("Tandai untuk review")}
                </button>
              </div>
              <article className="panel question-panel">
                <span className="eyebrow">
                  {t("SOAL")} {session.index + 1}
                </span>
                <h1 ref={heading} tabIndex={-1} lang={q.lang}>
                  {q.prompt}
                </h1>
                <fieldset disabled={busy || feedback}>
                  <legend>
                    {q.correctAnswers.length === 1
                      ? t("Pilih satu jawaban.")
                      : t("Pilih {count} jawaban.", {
                          count: q.correctAnswers.length,
                        })}
                  </legend>
                  <div className="choice-list">
                    {q.options.map((option) => (
                      <label
                        className={`choice ${selected.includes(option.id) ? "selected" : ""}`}
                        key={option.id}
                      >
                        <input
                          type={q.type === "single" ? "radio" : "checkbox"}
                          name={q.id}
                          checked={selected.includes(option.id)}
                          onChange={() => onAnswer(option.id)}
                          disabled={
                            !selected.includes(option.id) &&
                            q.type === "multiple" &&
                            selected.length >= q.correctAnswers.length
                          }
                        />
                        <strong>{option.id}.</strong>
                        <span lang={q.lang}>{option.text}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                {session.config.mode === "practice" && (
                  <div className="practice-feedback">
                    {!feedback ? (
                      <button
                        className="secondary"
                        disabled={!answered(q, session.answers)}
                        onClick={() => setFeedback(true)}
                      >
                        {" "}
                        {t("Periksa jawaban & pembahasan")}{" "}
                      </button>
                    ) : (
                      <>
                        <p
                          role="status"
                          className={
                            matches(selected, q.correctAnswers)
                              ? "success"
                              : "notice"
                          }
                        >
                          {matches(selected, q.correctAnswers)
                            ? t("Jawaban Anda benar.")
                            : t("Jawaban Anda belum tepat.")}
                        </p>
                        <QuestionReview question={q} selected={selected} />
                        <button
                          className="text-button"
                          onClick={() => setFeedback(false)}
                        >
                          {" "}
                          {t("Ubah jawaban")}{" "}
                        </button>
                      </>
                    )}
                  </div>
                )}
              </article>
            </>
          )}
        </section>
      </div>
      <footer className="exam-footer">
        <div className="secondary-actions">
          <button
            onClick={() => {
              setFeedback(false);
              onClear();
            }}
          >
            {" "}
            {t("Hapus jawaban")}{" "}
          </button>
          <button onClick={onPause}>
            {session.config.mode === "simulation"
              ? t("Simpan & keluar")
              : t("Simpan & jeda")}
          </button>
        </div>
        <div className="primary-actions">
          {reviewing ? (
            <>
              <button onClick={() => onReview(false)}>
                {t("Kembali ke soal")}
              </button>
              <button className="primary" disabled={busy} onClick={onFinish}>
                {busy ? t("Menyimpan…") : t("Submit ujian")}
              </button>
            </>
          ) : (
            <>
              <button
                disabled={session.index === 0}
                onClick={() => navigate(session.index - 1)}
              >
                {" "}
                {t("Sebelumnya")}{" "}
              </button>
              {session.index < session.questions.length - 1 ? (
                <button
                  className="primary"
                  onClick={() => navigate(session.index + 1)}
                >
                  {" "}
                  {t("Berikutnya")}{" "}
                </button>
              ) : (
                <button className="primary" onClick={() => onReview(true)}>
                  {" "}
                  {t("Review & submit")}{" "}
                </button>
              )}
            </>
          )}
        </div>
      </footer>
    </main>
  );
}

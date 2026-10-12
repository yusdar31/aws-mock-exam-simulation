import { useEffect, useRef, useState } from "react";
import type { Session } from "../types";
import { answered, matches } from "../lib/exam";
import Timer from "../components/Timer";
import QuestionReview from "../components/QuestionReview";
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
          Sesi tidak valid. Kembali ke ruang belajar untuk memilih soal.
        </p>
        <button onClick={onPause}>Kembali</button>
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
              ? "Review sebelum submit"
              : `Soal ${session.index + 1} dari ${session.questions.length}`}
          </small>
          <small className="save-state" role="status">
            {storageStatus}
          </small>
        </div>
        <Timer deadline={session.deadline} onExpire={onFinish} />
        <button
          className="navigator-toggle"
          aria-expanded={open}
          aria-controls="question-navigator"
          onClick={() => setOpen(!open)}
        >
          Navigator {count}/{session.questions.length}
        </button>
      </header>
      <div className="exam-layout">
        <aside
          id="question-navigator"
          className={`navigator ${open ? "open" : ""}`}
        >
          <h2>Navigator soal</h2>
          <p>
            {count} lengkap · {session.flags.length} ditandai
          </p>
          <div className="navigator-grid">
            {session.questions.map((question, index) => {
              const done = answered(question, session.answers),
                flag = session.flags.includes(question.id);
              return (
                <button
                  key={question.id}
                  aria-current={index === session.index ? "step" : undefined}
                  aria-label={`Soal ${index + 1}, ${done ? "jawaban lengkap" : "belum lengkap"}${flag ? ", ditandai" : ""}`}
                  className={`${done ? "answered" : ""} ${flag ? "flagged" : ""} ${index === session.index ? "current" : ""}`}
                  onClick={() => navigate(index)}
                >
                  {index + 1}
                  {flag && <span aria-hidden="true">•</span>}
                </button>
              );
            })}
          </div>
          <small>● Ditandai · Hijau: jawaban lengkap</small>
          <button
            className="secondary full-width"
            onClick={() => onReview(true)}
          >
            Review semua soal
          </button>
        </aside>
        <section className="exam-content">
          {reviewing ? (
            <>
              <h1 ref={heading} tabIndex={-1}>
                Periksa jawaban Anda
              </h1>
              <p>
                {session.questions.length - count} soal belum dijawab lengkap.
                Anda dapat kembali ke soal sebelum submit.
              </p>
              <div className="review-list">
                {session.questions.map((question, index) => (
                  <button key={question.id} onClick={() => navigate(index)}>
                    <strong>Soal {index + 1}</strong>
                    <span>
                      {answered(question, session.answers)
                        ? "Lengkap"
                        : "Belum lengkap"}
                      {session.flags.includes(question.id) ? " · Ditandai" : ""}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="question-meta">
                <span>{q.domain}</span>
                <span>
                  {q.type === "multiple"
                    ? `Pilih ${q.correctAnswers.length} jawaban`
                    : "Pilih satu jawaban"}
                </span>
                <button
                  className="text-button"
                  aria-pressed={session.flags.includes(q.id)}
                  onClick={onFlag}
                >
                  {session.flags.includes(q.id)
                    ? "● Ditandai"
                    : "Tandai untuk review"}
                </button>
              </div>
              <article className="panel question-panel">
                <span className="eyebrow">SOAL {session.index + 1}</span>
                <h1 ref={heading} tabIndex={-1}>
                  {q.prompt}
                </h1>
                <fieldset disabled={busy || feedback}>
                  <legend>
                    {q.lang === "en"
                      ? `Select ${q.correctAnswers.length === 1 ? "one answer" : `${q.correctAnswers.length} answers`}.`
                      : `Pilih ${q.correctAnswers.length} jawaban.`}
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
                        <span>{option.text}</span>
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
                        Periksa jawaban & pembahasan
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
                            ? "Jawaban Anda benar."
                            : "Jawaban Anda belum tepat."}
                        </p>
                        <QuestionReview question={q} selected={selected} />
                        <button
                          className="text-button"
                          onClick={() => setFeedback(false)}
                        >
                          Ubah jawaban
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
            Hapus jawaban
          </button>
          <button onClick={onPause}>
            {session.config.mode === "simulation"
              ? "Simpan & keluar"
              : "Simpan & jeda"}
          </button>
        </div>
        <div className="primary-actions">
          {reviewing ? (
            <>
              <button onClick={() => onReview(false)}>Kembali ke soal</button>
              <button className="primary" disabled={busy} onClick={onFinish}>
                {busy ? "Menyimpan…" : "Submit ujian"}
              </button>
            </>
          ) : (
            <>
              <button
                disabled={session.index === 0}
                onClick={() => navigate(session.index - 1)}
              >
                Sebelumnya
              </button>
              {session.index < session.questions.length - 1 ? (
                <button
                  className="primary"
                  onClick={() => navigate(session.index + 1)}
                >
                  Berikutnya
                </button>
              ) : (
                <button className="primary" onClick={() => onReview(true)}>
                  Review & submit
                </button>
              )}
            </>
          )}
        </div>
      </footer>
    </main>
  );
}

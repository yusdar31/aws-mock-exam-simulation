import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/context";
import type { ClassroomState } from "../lib/classroom";
import { formatTime, isQuestion, matches } from "../lib/exam";
import type { Question } from "../types";
import ClassroomAnswerReview from "./ClassroomAnswerReview";
import ClassroomShare from "./ClassroomShare";

export default function GuidedQuiz({
  room,
  now,
  busy,
  onAction,
  onPractice,
}: {
  room: ClassroomState;
  now: number;
  busy: boolean;
  onAction: (
    action: string,
    payload?: Record<string, unknown>,
  ) => Promise<ClassroomState | null>;
  onPractice: (questions: Question[]) => Promise<void>;
}) {
  const { t } = useLanguage();
  const [draft, setDraft] = useState<{ id: string; selected: string[] }>({
    id: "",
    selected: [],
  });
  const [reviewIndex, setReviewIndex] = useState(0);
  const [presentation, setPresentation] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const phase = room.quizPhase || "lobby";
  const finished = phase === "finished";
  const question =
    room.questions[
      finished ? Math.min(reviewIndex, room.questions.length - 1) : 0
    ];
  const committed = question ? room.member?.answers[question.id] : undefined;
  const selected =
    committed || (draft.id === question?.id ? draft.selected : []);
  const remaining = room.quizDeadline
    ? Math.max(0, Math.ceil((room.quizDeadline - now) / 1000))
    : null;
  const open = phase === "answering" && (remaining === null || remaining > 0);
  const review = phase === "review" || finished;
  const leaderboard = room.quizLeaderboard || [];
  const wrong: Question[] = finished
    ? room.questions.flatMap((q) =>
        isQuestion(q) && !matches(room.member?.answers[q.id], q.correctAnswers)
          ? [q]
          : [],
      )
    : [];
  const command = (action: string) =>
    void onAction(action, { questionIndex: room.quizIndex });
  useEffect(() => {
    title.current?.focus();
  }, [question?.id, phase]);
  useEffect(() => {
    if (!presentation) return;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    container.current
      ?.querySelector<HTMLButtonElement>(".quiz-toolbar button")
      ?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPresentation(false);
      if (event.key === "Tab") {
        const controls = Array.from(
          container.current?.querySelectorAll<HTMLElement>(
            'button:not(:disabled),a[href],input:not(:disabled),[tabindex="0"]',
          ) || [],
        ).filter((el) => el.getClientRects().length);
        const first = controls[0],
          last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("keydown", escape);
      document.body.style.overflow = overflow;
      if (previous instanceof HTMLElement && previous.isConnected)
        previous.focus();
    };
  }, [presentation]);
  return (
    <div
      ref={container}
      role={presentation ? "dialog" : undefined}
      aria-modal={presentation ? true : undefined}
      aria-label={presentation ? t("Kuis terpandu") : undefined}
      className={`guided-quiz ${presentation ? "quiz-presentation" : ""}`}
    >
      <div className="quiz-toolbar">
        <span className="eyebrow">{t("Kuis terpandu")}</span>
        <strong className="room-code">{room.code}</strong>
        {room.host && (
          <button
            aria-pressed={presentation}
            onClick={() => setPresentation(!presentation)}
          >
            {t(presentation ? "Keluar mode presentasi" : "Mode presentasi")}
          </button>
        )}
      </div>
      {phase === "lobby" ? (
        <section className="panel">
          <h2 ref={title} tabIndex={-1}>
            {t("Ruang tunggu kuis")}
          </h2>
          <p>
            {t(
              "Satu soal yang sama untuk semua peserta. Host membuka pembahasan sebelum melanjutkan.",
            )}
          </p>
          {room.host ? (
            <>
              <ClassroomShare link={`${location.origin}/#live/${room.code}`} />
              <p>
                {t("{count} peserta siap", {
                  count: leaderboard.filter((p) => p.ready).length,
                })}{" "}
                / {room.participantCount}
              </p>
              <ul className="quiz-lobby-list">
                {leaderboard.map((p) => (
                  <li key={p.id}>
                    {p.name} · {t(p.ready ? "Siap" : "Belum siap")}
                  </li>
                ))}
              </ul>
              <button
                className="primary"
                disabled={busy || !room.participantCount}
                onClick={() => command("quiz_start")}
              >
                {t("Mulai kuis")}
              </button>
            </>
          ) : (
            <>
              <p>{t("Tunggu instruktur memulai sesi.")}</p>
              <button
                className="primary"
                disabled={busy}
                onClick={() =>
                  void onAction("ready", { ready: !room.member?.ready })
                }
              >
                {t(room.member?.ready ? "Saya belum siap" : "Saya siap")}
              </button>
            </>
          )}
        </section>
      ) : (
        <>
          <div className="quiz-progress">
            <strong>
              {t(finished ? "Kuis selesai" : "Soal {index} dari {total}", {
                index: (room.quizIndex || 0) + 1,
                total: room.total,
              })}
            </strong>
            {!finished && (
              <span role="timer" className="live-timer">
                {phase !== "answering"
                  ? t("Jawaban ditutup")
                  : remaining === null
                    ? t("Tanpa timer")
                    : formatTime(remaining)}
              </span>
            )}
          </div>
          {!finished && (
            <p role="status" aria-atomic="true">
              {t("{answered} dari {total} peserta sudah menjawab", {
                answered: room.quizAnswered || 0,
                total: room.participantCount,
              })}
            </p>
          )}
          {finished && (
            <p>
              {t(
                "{count} soal telah dibahas. Satu jawaban benar mendapat satu poin.",
                { count: room.quizReviewed || 0 },
              )}
            </p>
          )}
          {finished && (
            <nav
              className="live-numbers"
              aria-label={t("Navigator pembahasan kuis")}
            >
              {room.questions.map((q, i) => (
                <button
                  key={q.id}
                  aria-current={reviewIndex === i ? "step" : undefined}
                  onClick={() => setReviewIndex(i)}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
          {question && (
            <article className="panel quiz-question">
              <h2 ref={title} tabIndex={-1} lang={question.lang}>
                {question.prompt}
              </h2>
              {review && !room.host ? (
                <ClassroomAnswerReview
                  question={question}
                  selected={committed || []}
                />
              ) : (
                <fieldset disabled={busy || !open || !!committed || room.host}>
                  <legend>
                    {t(
                      question.required === 1
                        ? "Pilih satu jawaban."
                        : "Pilih {count} jawaban.",
                      { count: question.required },
                    )}
                  </legend>
                  <div className="quiz-choices">
                    {question.options.map((o) => {
                      const correct =
                        review && question.correctAnswers?.includes(o.id);
                      return (
                        <label
                          key={o.id}
                          className={`quiz-choice ${selected.includes(o.id) ? "quiz-selected" : ""} ${correct ? "quiz-correct" : ""}`}
                        >
                          {!room.host && (
                            <input
                              type={
                                question.type === "single"
                                  ? "radio"
                                  : "checkbox"
                              }
                              name={question.id}
                              checked={selected.includes(o.id)}
                              disabled={
                                !selected.includes(o.id) &&
                                selected.length >= question.required &&
                                question.type === "multiple"
                              }
                              onChange={() =>
                                setDraft({
                                  id: question.id,
                                  selected:
                                    question.type === "single"
                                      ? [o.id]
                                      : selected.includes(o.id)
                                        ? selected.filter((x) => x !== o.id)
                                        : [...selected, o.id],
                                })
                              }
                            />
                          )}
                          <b className="quiz-letter">{o.id}</b>
                          <span lang={question.lang}>{o.text}</span>
                          {correct && (
                            <strong className="quiz-option-status">
                              {t("Jawaban benar")}
                            </strong>
                          )}
                          {review && !finished && (
                            <span className="quiz-option-status">
                              {t("{count} peserta memilih", {
                                count: room.quizDistribution?.[o.id] || 0,
                              })}
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              )}
              {!room.host && phase === "answering" && (
                <div className="quiz-answer-action">
                  {committed ? (
                    <p role="status">
                      {t(
                        "Jawaban terkirim dan terkunci. Tunggu pembahasan dari host.",
                      )}
                    </p>
                  ) : (
                    <button
                      className="primary"
                      disabled={
                        busy || !open || selected.length !== question.required
                      }
                      onClick={() =>
                        void onAction("quiz_answer", {
                          questionIndex: room.quizIndex,
                          selected,
                        })
                      }
                    >
                      {t("Kirim jawaban kuis")}
                    </button>
                  )}
                </div>
              )}
              {!room.host && phase === "locked" && (
                <p role="status">
                  {t("Jawaban ditutup. Tunggu host membuka pembahasan.")}
                </p>
              )}
              {review && (
                <div className="rationale">
                  <strong>{t("Pembahasan")}</strong>
                  <p lang={question.lang}>{question.explanation}</p>
                </div>
              )}
            </article>
          )}
          {room.host && !finished && (
            <div className="actions quiz-host-actions">
              {phase === "answering" && (
                <button
                  className="primary"
                  disabled={busy}
                  onClick={() => command("quiz_close")}
                >
                  {t("Tutup jawaban")}
                </button>
              )}
              {phase === "locked" && (
                <button
                  className="primary"
                  disabled={busy}
                  onClick={() => command("quiz_reveal")}
                >
                  {t("Tampilkan pembahasan")}
                </button>
              )}
              {phase === "review" && (
                <>
                  {(room.quizIndex || 0) < room.total - 1 && (
                    <button
                      className="primary"
                      disabled={busy}
                      onClick={() => command("quiz_next")}
                    >
                      {t("Lanjut ke soal berikutnya")}
                    </button>
                  )}
                  <button
                    disabled={busy}
                    onClick={() => {
                      if (
                        (room.quizIndex || 0) === room.total - 1 ||
                        confirm(
                          t(
                            "Selesaikan kuis sekarang? Soal yang belum dimainkan tidak dihitung.",
                          ),
                        )
                      )
                        command("quiz_finish");
                    }}
                  >
                    {t("Selesaikan kuis")}
                  </button>
                </>
              )}
            </div>
          )}
          {(review || phase === "locked") && (
            <section className="panel quiz-leaderboard">
              <h2>
                {t(finished ? "Peringkat akhir kuis" : "Peringkat sementara")}
              </h2>
              <p>
                {t(
                  "Poin hanya dihitung dari soal yang pembahasannya sudah dibuka.",
                )}
              </p>
              <ol>
                {leaderboard.map((p, i) => (
                  <li
                    key={p.id}
                    className={p.id === room.member?.id ? "quiz-self" : ""}
                  >
                    <span>
                      {i > 0 && p.score === leaderboard[i - 1].score
                        ? leaderboard.findIndex((x) => x.score === p.score) + 1
                        : i + 1}
                      . {p.name}
                    </span>
                    <strong>{t("{count} poin", { count: p.score })}</strong>
                  </li>
                ))}
              </ol>
            </section>
          )}
          {finished && !room.host && (
            <button
              disabled={busy || !wrong.length}
              onClick={() => void onPractice(wrong)}
            >
              {t("Latih soal salah")}
            </button>
          )}
        </>
      )}
    </div>
  );
}

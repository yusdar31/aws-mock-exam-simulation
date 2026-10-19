import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/context";
import type { ClassroomState } from "../lib/classroom";
import { answerOutcome } from "../lib/classroomResults";

export default function ClassroomHostQuestions({
  room,
  index,
  onIndex,
  busy,
}: {
  room: ClassroomState;
  index: number;
  onIndex: (index: number) => void;
  busy: boolean;
}) {
  const { t } = useLanguage();
  const heading = useRef<HTMLHeadingElement>(null);
  const closed = room.status === "closed";
  const question = room.questions[Math.min(index, room.questions.length - 1)];
  useEffect(() => {
    heading.current?.focus();
  }, [index]);
  if (!question) return null;
  const participants = room.participants || [];
  const correct = participants.filter(
    (p) => answerOutcome(question, p.answers?.[question.id]) === "correct",
  ).length;
  const unanswered = participants.filter(
    (p) => answerOutcome(question, p.answers?.[question.id]) === "unanswered",
  ).length;
  return (
    <section
      className="panel live-host-questions"
      aria-labelledby="host-questions-title"
    >
      <h2 id="host-questions-title">
        {t(closed ? "Pembahasan kelas" : "Soal sesi")}
      </h2>
      {!closed && (
        <p>
          {t(
            "Soal dan urutan opsi sama dengan peserta. Pilih nomor untuk melihat soal.",
          )}
        </p>
      )}
      {closed && (
        <p>
          {t("Tinjau kunci, pembahasan, dan jawaban setiap peserta per soal.")}
        </p>
      )}
      <nav className="live-numbers" aria-label={t("Navigator soal host")}>
        {room.questions.map((q, i) => (
          <button
            key={q.id}
            aria-current={index === i ? "step" : undefined}
            aria-label={t("Lihat soal {index}", { index: i + 1 })}
            disabled={busy}
            onClick={() => onIndex(i)}
          >
            {i + 1}
          </button>
        ))}
      </nav>
      <article>
        <span className="eyebrow">
          {t("Soal")} {index + 1}/{room.total}
        </span>
        <h3 ref={heading} tabIndex={-1} lang={question.lang}>
          {question.prompt}
        </h3>
        <p>
          {question.type === "single"
            ? t("Pilih satu jawaban.")
            : t("Pilih {count} jawaban.", { count: question.required })}
        </p>
        <ul className="live-host-options">
          {question.options.map((o) => (
            <li
              key={o.id}
              className={
                closed && question.correctAnswers?.includes(o.id)
                  ? "live-option-correct"
                  : ""
              }
            >
              <div>
                <strong>{o.id}.</strong>{" "}
                <span lang={question.lang}>{o.text}</span>
              </div>
              {closed && (
                <div className="live-option-detail">
                  {question.correctAnswers?.includes(o.id) && (
                    <strong>{t("Jawaban benar")} · </strong>
                  )}
                  {t("{count} peserta memilih", {
                    count: participants.filter((p) =>
                      p.answers?.[question.id]?.includes(o.id),
                    ).length,
                  })}
                </div>
              )}
            </li>
          ))}
        </ul>
        {closed && (
          <>
            <div className="rationale">
              <strong>
                {t("Jawaban benar")}: {question.correctAnswers?.join(", ")}
              </strong>
              <p lang={question.lang}>{question.explanation}</p>
            </div>
            <p className="live-review-summary">
              {t(
                "{correct} benar · {incorrect} salah · {unanswered} belum dijawab",
                {
                  correct,
                  incorrect: participants.length - correct - unanswered,
                  unanswered,
                },
              )}
            </p>
            <div
              className="live-table"
              role="region"
              aria-label={t("Jawaban peserta per soal")}
              tabIndex={0}
            >
              <table>
                <caption className="sr-only">
                  {t("Jawaban peserta per soal")} · {t("Soal")} {index + 1}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">{t("Nama peserta")}</th>
                    <th scope="col">{t("Pilihan peserta")}</th>
                    <th scope="col">{t("Hasil")}</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((p) => {
                    const selected = p.answers?.[question.id] || [];
                    const outcome = answerOutcome(question, selected);
                    return (
                      <tr key={p.id}>
                        <th scope="row">{p.name}</th>
                        <td>{selected.join(", ") || "—"}</td>
                        <td>
                          <span className={`live-answer-result ${outcome}`}>
                            {t(
                              outcome === "correct"
                                ? "Benar"
                                : outcome === "incorrect"
                                  ? "Salah"
                                  : "Belum dijawab",
                            )}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </article>
      <div className="actions live-question-actions">
        <button
          disabled={busy || index === 0}
          onClick={() => onIndex(index - 1)}
        >
          {t("Sebelumnya")}
        </button>
        <button
          disabled={busy || index >= room.questions.length - 1}
          onClick={() => onIndex(index + 1)}
        >
          {t("Berikutnya")}
        </button>
      </div>
    </section>
  );
}

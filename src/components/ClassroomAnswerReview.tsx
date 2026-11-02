import { useLanguage } from "../i18n/context";
import type { ClassroomQuestion } from "../lib/classroom";
import { answerOutcome } from "../lib/classroomResults";

export default function ClassroomAnswerReview({
  question,
  selected,
}: {
  question: ClassroomQuestion;
  selected: string[];
}) {
  const { t } = useLanguage();
  const outcome = answerOutcome(question, selected);
  return (
    <div className="classroom-answer-review">
      <div className={`classroom-verdict review-${outcome}`}>
        <strong>
          {t(
            outcome === "correct"
              ? "Jawaban Anda benar"
              : outcome === "incorrect"
                ? "Jawaban Anda salah"
                : "Soal ini belum dijawab",
          )}
        </strong>
        <p>
          {t("Pilihan Anda")}:{" "}
          <b>{selected.join(", ") || t("Belum dijawab")}</b> ·{" "}
          {t("Jawaban benar")}: <b>{question.correctAnswers?.join(", ")}</b>
        </p>
      </div>
      <ul className="classroom-review-options">
        {question.options.map((option) => {
          const correct = question.correctAnswers?.includes(option.id);
          const chosen = selected.includes(option.id);
          const state = correct ? "correct" : chosen ? "incorrect" : "neutral";
          return (
            <li
              key={option.id}
              className={`classroom-review-option review-${state}`}
            >
              <div className="classroom-option-text" lang={question.lang}>
                <strong>{option.id}.</strong> <span>{option.text}</span>
              </div>
              {(correct || chosen) && (
                <div className="classroom-option-labels">
                  <strong>
                    <span aria-hidden="true">{correct ? "✓" : "×"} </span>
                    {t(correct ? "Jawaban benar" : "Pilihan Anda — salah")}
                  </strong>
                  {correct && (
                    <span>
                      {t(chosen ? "Pilihan Anda" : "Tidak Anda pilih")}
                    </span>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

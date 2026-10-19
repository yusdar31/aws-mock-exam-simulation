import { useLanguage } from "../i18n/context";
import { matches } from "../lib/exam";
import type { Question } from "../types";
import QuestionReview from "./QuestionReview";
import QuestionTools from "./QuestionTools";

export default function CompactReview({
  question,
  selected,
}: {
  question: Question;
  selected: string[];
}) {
  const { t } = useLanguage();
  const options = (ids: string[]) =>
    ids
      .map(
        (id) =>
          `${id}. ${question.options.find((o) => o.id === id)?.text || id}`,
      )
      .join("; ");
  return (
    <div className="compact-review">
      <strong className="answer-outcome">
        {t(
          !selected.length
            ? "Belum dijawab"
            : matches(selected, question.correctAnswers)
              ? "Benar"
              : "Salah",
        )}
      </strong>
      <dl className="answer-summary">
        <div>
          <dt>{t("Jawaban Anda:")}</dt>
          <dd lang={question.lang}>
            {options(selected) || t("Belum dijawab")}
          </dd>
        </div>
        <div>
          <dt>{t("Jawaban benar")}</dt>
          <dd lang={question.lang}>{options(question.correctAnswers)}</dd>
        </div>
      </dl>
      <details className="review-explanation">
        <summary>{t("Lihat pembahasan lengkap")}</summary>
        <QuestionReview question={question} selected={selected} />
        <QuestionTools question={question} />
      </details>
    </div>
  );
}

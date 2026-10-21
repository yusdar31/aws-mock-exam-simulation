import { useLanguage } from "../i18n/context";
import type { Question } from "../types";
import { useState } from "react";
import { loadBank } from "../lib/banks";
import { api } from "../lib/api";
import { CERTIFICATIONS } from "../lib/catalog";
export default function QuestionReview({
  question,
  selected,
}: {
  question: Question;
  selected: string[];
}) {
  const { t } = useLanguage();
  const [translation, setTranslation] = useState(""),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  async function translate() {
    setBusy(true);
    setNotice("");
    try {
      const paired =
        question.id.includes("-en-") && !question.updatedAt
          ? (await loadBank(question.examType, "id")).find(
              (q) =>
                q.id === question.id.replace("-en-", "-id-") &&
                q.version === question.version,
            )
          : undefined;
      if (paired) setTranslation(paired.explanation);
      else {
        const result = await api<{ translated: string }>(
          "/questions/translate",
          {
            method: "POST",
            body: JSON.stringify({ text: question.explanation }),
            signal: AbortSignal.timeout(120000),
          },
        );
        setTranslation(result.translated);
      }
    } catch {
      setNotice(
        "Terjemahan belum tersedia. Anda dapat memilih Bahasa Indonesia untuk latihan berikutnya.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="rationale">
      <strong>{t("Pembahasan")}</strong>
      <p lang={question.lang}>{question.explanation}</p>
      {question.lang === "en" &&
        (translation ? (
          <div className="translated-rationale">
            <strong>{t("Penjelasan Bahasa Indonesia")}</strong>
            <p lang="id">{translation}</p>
          </div>
        ) : (
          <button disabled={busy} onClick={translate}>
            {busy
              ? t("Menyiapkan terjemahan…")
              : t("Tampilkan Bahasa Indonesia")}
          </button>
        ))}
      {notice && <p role="status">{t(notice)}</p>}
      <ul className="review-options" role="list">
        {question.options.map((option) => {
          const correct = question.correctAnswers.includes(option.id);
          const chosen = selected.includes(option.id);
          const reason = question.optionExplanations?.[option.id]?.trim();
          return (
            <li
              key={option.id}
              className={`review-choice${correct ? " is-correct" : ""}`}
            >
              <div className="review-choice-heading">
                <p className="review-option" lang={question.lang}>
                  <b>{option.id}.</b> {option.text}
                </p>
                {(correct || chosen) && (
                  <span className="review-choice-status">
                    {correct && <strong>{t("Jawaban benar")}</strong>}
                    {chosen && <span>{t("Pilihan Anda")}</span>}
                  </span>
                )}
              </div>
              {reason && reason !== question.explanation.trim() && (
                <p className="review-choice-reason" lang={question.lang}>
                  {reason}
                </p>
              )}
            </li>
          );
        })}
      </ul>
      {question.sourceUrl && (
        <a href={question.sourceUrl} target="_blank" rel="noreferrer">
          {" "}
          {t("Dokumentasi {provider} ↗", {
            provider: CERTIFICATIONS[question.examType].provider,
          })}{" "}
        </a>
      )}
      {question.options.some(
        (option) => !question.optionExplanations?.[option.id]?.trim(),
      ) && (
        <small>
          {" "}
          {t(
            "Pembahasan rinci setiap opsi belum tersedia untuk soal ini.",
          )}{" "}
        </small>
      )}
      {question.verifiedAt && (
        <small>
          {" "}
          {t("Referensi ditinjau")} {question.verifiedAt} {t("· Versi")}{" "}
          {question.version}
        </small>
      )}
    </div>
  );
}

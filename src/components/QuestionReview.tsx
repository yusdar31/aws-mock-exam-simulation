import { useLanguage } from "../i18n/context";
import type { Question } from "../types";
import { useState } from "react";
import { loadBank } from "../lib/banks";
import { api } from "../lib/api";
export default function QuestionReview({
  question,
  selected,
}: {
  question: Question;
  selected: string[];
}) {
  const { t, language } = useLanguage();
  const [translation, setTranslation] = useState(""),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  async function translate() {
    setBusy(true);
    setNotice("");
    try {
      const paired =
        question.id.includes("-en-") && question.version === 1
          ? (await loadBank(question.examType, "id")).find(
              (q) => q.id === question.id.replace("-en-", "-id-"),
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
      <ul>
        {question.options.map((option) => (
          <li key={option.id}>
            <strong>
              {option.id}.{" "}
              {question.correctAnswers.includes(option.id)
                ? t("Jawaban benar")
                : t("Distraktor")}
              {selected.includes(option.id) ? t(" · Pilihan Anda") : ""}
            </strong>
            <p
              lang={
                question.optionExplanations?.[option.id] ||
                question.correctAnswers.includes(option.id)
                  ? question.lang
                  : language
              }
            >
              {question.optionExplanations?.[option.id] ||
                (question.correctAnswers.includes(option.id)
                  ? question.explanation
                  : t(
                      "Bandingkan opsi ini dengan persyaratan pada pertanyaan dan pembahasan di atas.",
                    ))}
            </p>
          </li>
        ))}
      </ul>
      {question.sourceUrl && (
        <a href={question.sourceUrl} target="_blank" rel="noreferrer">
          {" "}
          {t("Dokumentasi AWS ↗")}{" "}
        </a>
      )}
      {!question.verifiedAt && (
        <small>
          {" "}
          {t(
            "Soal arsip: sumber dan pembahasan per opsi masih perlu review editorial.",
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

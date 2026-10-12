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
      <strong>Pembahasan</strong>
      <p>{question.explanation}</p>
      {question.lang === "en" &&
        (translation ? (
          <div className="translated-rationale">
            <strong>Penjelasan Bahasa Indonesia</strong>
            <p>{translation}</p>
          </div>
        ) : (
          <button disabled={busy} onClick={translate}>
            {busy ? "Menyiapkan terjemahan…" : "Tampilkan Bahasa Indonesia"}
          </button>
        ))}
      {notice && <p role="status">{notice}</p>}
      <ul>
        {question.options.map((option) => (
          <li key={option.id}>
            <strong>
              {option.id}.{" "}
              {question.correctAnswers.includes(option.id)
                ? "Jawaban benar"
                : "Distraktor"}
              {selected.includes(option.id) ? " · Pilihan Anda" : ""}
            </strong>
            <p>
              {question.optionExplanations?.[option.id] ||
                (question.correctAnswers.includes(option.id)
                  ? question.explanation
                  : "Bandingkan opsi ini dengan persyaratan pada pertanyaan dan pembahasan di atas.")}
            </p>
          </li>
        ))}
      </ul>
      {question.sourceUrl && (
        <a href={question.sourceUrl} target="_blank" rel="noreferrer">
          Dokumentasi AWS ↗
        </a>
      )}
      {!question.verifiedAt && (
        <small>
          Soal arsip: sumber dan pembahasan per opsi masih perlu review
          editorial.
        </small>
      )}
      {question.verifiedAt && (
        <small>
          Referensi ditinjau {question.verifiedAt} · Versi {question.version}
        </small>
      )}
    </div>
  );
}

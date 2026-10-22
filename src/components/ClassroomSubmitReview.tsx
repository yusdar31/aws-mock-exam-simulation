import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/context";
import type { ClassroomQuestion } from "../lib/classroom";
export default function ClassroomSubmitReview({
  questions,
  answers,
  flags,
  busy,
  onClose,
  onQuestion,
  onSubmit,
}: {
  questions: ClassroomQuestion[];
  answers: Record<string, string[]>;
  flags: string[];
  busy: boolean;
  onClose: () => void;
  onQuestion: (index: number) => void;
  onSubmit: () => void;
}) {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  const incomplete = questions.filter(
    (q) => (answers[q.id]?.length || 0) !== q.required,
  ).length;
  return (
    <dialog
      ref={dialog}
      className="classroom-submit-dialog"
      aria-labelledby="classroom-submit-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
    >
      <h2 id="classroom-submit-title">{t("Periksa sebelum mengumpulkan")}</h2>
      <p>
        {t("{incomplete} soal belum lengkap · {flagged} ditandai", {
          incomplete,
          flagged: flags.length,
        })}
      </p>
      <p>
        {t(
          "Jawaban tidak dapat diubah setelah dikumpulkan. Waktu ujian tetap berjalan selama pemeriksaan.",
        )}
      </p>
      <nav
        className="live-numbers"
        aria-label={t("Periksa soal sebelum mengumpulkan")}
      >
        {questions.map((q, i) => (
          <button
            key={q.id}
            disabled={busy}
            onClick={() => onQuestion(i)}
            aria-label={t("Soal {index}: {status}", {
              index: i + 1,
              status: flags.includes(q.id)
                ? t("Ditandai")
                : (answers[q.id]?.length || 0) === q.required
                  ? t("Lengkap")
                  : t("Belum lengkap"),
            })}
          >
            {i + 1}
            {flags.includes(q.id)
              ? " ⚑"
              : (answers[q.id]?.length || 0) === q.required
                ? " ✓"
                : ""}
          </button>
        ))}
      </nav>
      <div className="actions">
        <button disabled={busy} onClick={onClose} autoFocus>
          {t("Kembali mengerjakan")}
        </button>
        <button className="primary" disabled={busy} onClick={onSubmit}>
          {t("Ya, kumpulkan jawaban")}
        </button>
      </div>
    </dialog>
  );
}

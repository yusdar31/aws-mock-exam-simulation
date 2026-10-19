import { useState } from "react";
import { useLanguage } from "../i18n/context";
import { useLearning, type Report } from "../learning/context";
import { api } from "../lib/api";
import type { Question } from "../types";
export default function QuestionTools({ question }: { question: Question }) {
  const { t } = useLanguage(),
    { data, update, error } = useLearning();
  const annotation = data.annotations[question.id];
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [serviceReady, setServiceReady] = useState<boolean | null>(null);
  function annotate(note: string, bookmarked: boolean) {
    update((d) => ({
      ...d,
      annotations: {
        ...d.annotations,
        [question.id]: { question, note, bookmarked },
      },
    }));
  }
  return (
    <div className="question-tools no-print">
      <button
        aria-pressed={annotation?.bookmarked || false}
        onClick={() =>
          annotate(annotation?.note || "", !annotation?.bookmarked)
        }
      >
        {t(annotation?.bookmarked ? "Materi tersimpan" : "Simpan materi")}
      </button>
      <details>
        <summary>{t("Catatan pribadi")}</summary>
        <label>
          {t("Catatan untuk soal ini")}
          <textarea
            maxLength={4000}
            value={annotation?.note || ""}
            onChange={(e) =>
              annotate(e.target.value, annotation?.bookmarked || false)
            }
          />
        </label>
        <small>{t("Catatan disimpan di perangkat ini.")}</small>
      </details>
      <details
        onToggle={(e) => {
          if (e.currentTarget.open)
            void api<{ ready: boolean }>("/questions/reports/health")
              .then((r) => setServiceReady(r.ready))
              .catch(() => setServiceReady(false));
        }}
      >
        <summary>{t("Laporkan masalah soal")}</summary>
        {serviceReady === false && (
          <p role="status">
            {t(
              "Layanan laporan belum tersedia. Laporan akan disimpan lokal dan dapat dikirim ulang.",
            )}
          </p>
        )}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget,
              f = new FormData(form);
            const report: Report = {
              id: crypto.randomUUID(),
              token: crypto.randomUUID(),
              questionId: question.id,
              version: question.version,
              examType: question.examType,
              reason: String(f.get("reason")),
              detail: String(f.get("detail")),
              createdAt: Date.now(),
              status: "pending",
            };
            if (!update((d) => ({ ...d, reports: [...d.reports, report] })))
              return;
            setBusy(true);
            try {
              await api("/questions/reports", {
                method: "POST",
                body: JSON.stringify(report),
              });
              setServiceReady(true);
              update((d) => ({
                ...d,
                reports: d.reports.map((r) =>
                  r.id === report.id ? { ...r, status: "sent" } : r,
                ),
              }));
              setNotice("Laporan diterima untuk ditinjau.");
              form.reset();
            } catch {
              setNotice(
                "Laporan tersimpan lokal. Kirim ulang melalui Rencana & catatan saat layanan tersedia.",
              );
            } finally {
              setBusy(false);
            }
          }}
        >
          <label>
            {t("Jenis masalah")}
            <select name="reason">
              <option value="answer">{t("Kunci jawaban")}</option>
              <option value="language">{t("Bahasa")}</option>
              <option value="explanation">{t("Pembahasan")}</option>
              <option value="outdated">{t("Materi kedaluwarsa")}</option>
            </select>
          </label>
          <label>
            {t("Jelaskan masalah")}
            <textarea name="detail" required minLength={10} maxLength={2000} />
          </label>
          <button disabled={busy}>
            {t(busy ? "Mengirim…" : "Kirim laporan")}
          </button>
        </form>
      </details>
      {(notice || error) && <p role="status">{t(error || notice)}</p>}
    </div>
  );
}

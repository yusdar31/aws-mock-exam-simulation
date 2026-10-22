import { useState } from "react";
import { useLanguage } from "../i18n/context";
import { loadBank } from "../lib/banks";
import { selectQuestions, isQuestion } from "../lib/exam";
import { CERTIFICATIONS } from "../lib/catalog";
import type { Config, Question } from "../types";
type Template = {
  id: string;
  title: string;
  minutes: number;
  questions: Question[];
};
const key = "exam-classroom-templates-v1";
function read(): Template[] {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(v)
      ? v
          .filter(
            (t) =>
              typeof t.id === "string" &&
              typeof t.title === "string" &&
              Number.isInteger(t.minutes) &&
              t.minutes >= 1 &&
              t.minutes <= 180 &&
              Array.isArray(t.questions) &&
              t.questions.length > 0 &&
              t.questions.length <= 100 &&
              t.questions.every(isQuestion),
          )
          .slice(0, 20)
      : [];
  } catch {
    return [];
  }
}
export default function ClassroomPacket({
  type,
  lang,
  packet,
  onPacket,
}: {
  type: Config["examType"];
  lang: Config["lang"];
  packet: Question[] | null;
  onPacket: (qs: Question[] | null) => void;
}) {
  const { t } = useLanguage();
  const [templates, setTemplates] = useState(read),
    [selected, setSelected] = useState(""),
    [index, setIndex] = useState(0),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  const domains = Object.keys(CERTIFICATIONS[type].blueprint);
  const [chosen, setChosen] = useState(domains);
  const options = templates.filter(
    (v) => v.questions[0].examType === type && v.questions[0].lang === lang,
  );
  const question = packet?.[Math.min(index, packet.length - 1)];
  const form = (element: HTMLElement) => element.closest("form")!;
  return (
    <div className="packet-builder">
      <details>
        <summary>{t("Pilih topik & template kelas")}</summary>
        <fieldset>
          <legend>{t("Cakupan domain")}</legend>
          {domains.map((d) => (
            <label className="inline-control" key={d}>
              <input
                type="checkbox"
                name="domains"
                value={d}
                checked={chosen.includes(d)}
                onChange={(e) => {
                  setChosen((v) =>
                    e.target.checked ? [...v, d] : v.filter((x) => x !== d),
                  );
                  onPacket(null);
                }}
              />
              {t(d)}
            </label>
          ))}
        </fieldset>
        <label>
          {t("Template tersimpan")}
          <select
            aria-label={t("Template tersimpan")}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">{t("Pilih template")}</option>
            {options.map((v) => (
              <option key={v.id} value={v.id}>
                {v.title} · {v.questions.length} {t("soal")}
              </option>
            ))}
          </select>
        </label>
        <div className="actions">
          <button
            type="button"
            disabled={!selected || busy}
            onClick={async (e) => {
              const v = options.find((v) => v.id === selected);
              if (!v) return;
              const f = form(e.currentTarget);
              (f.elements.namedItem("title") as HTMLInputElement).value =
                v.title;
              (f.elements.namedItem("count") as HTMLInputElement).value =
                String(v.questions.length);
              (f.elements.namedItem("minutes") as HTMLInputElement).value =
                String(v.minutes);
              setBusy(true);
              try {
                const latest = await loadBank(type, lang);
                const questions = v.questions.map(
                  (q) =>
                    latest.find(
                      (current) =>
                        current.id === q.id && current.version > q.version,
                    ) || q,
                );
                setChosen([...new Set(questions.map((q) => q.domain))]);
                setIndex(0);
                onPacket(questions);
              } catch {
                setNotice("Paket soal belum dapat dibuat.");
              } finally {
                setBusy(false);
              }
            }}
          >
            {t("Gunakan template")}
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={() => {
              try {
                const next = templates.filter((v) => v.id !== selected);
                localStorage.setItem(key, JSON.stringify(next));
                setTemplates(next);
                setSelected("");
              } catch {
                setNotice("Template belum tersimpan.");
              }
            }}
          >
            {t("Hapus template")}
          </button>
        </div>
      </details>
      <button
        type="button"
        disabled={busy || !chosen.length}
        onClick={async (e) => {
          const f = form(e.currentTarget),
            data = new FormData(f),
            count = Number(data.get("count"));
          if (!Number.isInteger(count) || count < 1 || count > 100) {
            setNotice("Jumlah soal harus 1–100.");
            return;
          }
          setBusy(true);
          setNotice("");
          try {
            const bank = await loadBank(type, lang);
            const qs = selectQuestions(bank, {
              examType: type,
              lang,
              mode: "practice",
              duration: 0,
              limit: count,
              domains: chosen,
              content: type === "gcp-ace" ? "all" : "reviewed",
            });
            onPacket(qs);
            setIndex(0);
          } catch (err) {
            setNotice(
              err instanceof Error
                ? err.message
                : "Paket soal belum dapat dibuat.",
            );
          } finally {
            setBusy(false);
          }
        }}
      >
        {t(busy ? "Memuat paket…" : "Preview paket soal")}
      </button>
      {question && (
        <section
          className="packet-preview"
          aria-label={t("Preview paket soal")}
        >
          <p>
            {packet!.length} {t("soal")} ·{" "}
            {t("Paket ini akan dipakai semua peserta.")}
          </p>
          <h3 lang={question.lang}>
            {index + 1}. {question.prompt}
          </h3>
          <ul>
            {question.options.map((o) => (
              <li key={o.id} lang={question.lang}>
                {o.id}. {o.text}
              </li>
            ))}
          </ul>
          <div className="actions">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((v) => v - 1)}
            >
              {t("Sebelumnya")}
            </button>
            <button
              type="button"
              disabled={index >= packet!.length - 1}
              onClick={() => setIndex((v) => v + 1)}
            >
              {t("Berikutnya")}
            </button>
            <button
              type="button"
              onClick={(e) => {
                const element = form(e.currentTarget);
                if (!element.reportValidity()) return;
                const f = new FormData(element);
                try {
                  const v = {
                    id: crypto.randomUUID(),
                    title: String(f.get("title")).trim() || "AWS re/Start",
                    minutes: Number(f.get("minutes")),
                    questions: packet!,
                  };
                  const next = [v, ...templates].slice(0, 20);
                  localStorage.setItem(key, JSON.stringify(next));
                  setTemplates(next);
                  setSelected(v.id);
                  setNotice("Template tersimpan di perangkat ini.");
                } catch {
                  setNotice("Template belum tersimpan.");
                }
              }}
            >
              {t("Simpan sebagai template")}
            </button>
          </div>
        </section>
      )}
      {notice && <p role="status">{t(notice)}</p>}
    </div>
  );
}

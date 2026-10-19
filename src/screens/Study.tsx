import { useState } from "react";
import { useLanguage } from "../i18n/context";
import {
  useLearning,
  readLearning,
  type Annotation,
} from "../learning/context";
import { CERTIFICATIONS } from "../lib/catalog";
import { dueQuestions, isQuestion } from "../lib/exam";
import { getAttempts } from "../lib/storage";
import { api } from "../lib/api";
import { downloadJson, restoreAttempts } from "../lib/backup";
import QuestionTools from "../components/QuestionTools";
import { focusedPractice } from "../lib/focusedPractice";
import type { Attempt, Config, Question, User } from "../types";
export default function Study({
  user,
  attempts,
  config,
  pool,
  onPractice,
  onRefresh,
}: {
  user: User;
  attempts: Attempt[];
  config: Config;
  pool: Question[];
  onPractice: (questions: Question[]) => void;
  onRefresh: () => Promise<void>;
}) {
  const { t } = useLanguage(),
    { data, update, error } = useLearning();
  const [search, setSearch] = useState(""),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false);
  const [backupName, setBackupName] = useState(""),
    [backup, setBackup] = useState<{
      attempts: unknown;
      annotations?: Record<string, Annotation>;
    } | null>(null);
  const [tab, setTab] = useState("plan");
  const current = attempts.filter(
    (a) => a.examType === config.examType && a.lang === config.lang,
  );
  const week = current.filter(
    (a) => a.submittedAt >= Date.now() - 7 * 86400000,
  );
  const unique = new Set(
    current.flatMap((a) => a.session?.questions.map((q) => q.id) || []),
  );
  const due = dueQuestions(attempts, config.examType, config.lang);
  const annotations = Object.values(data.annotations).filter(
    (a) =>
      a.question.examType === config.examType &&
      a.question.lang === config.lang &&
      (a.bookmarked || a.note) &&
      `${a.question.prompt} ${a.note}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const pending = data.reports.filter((r) => r.status === "pending");
  async function run(action: () => Promise<void>) {
    setBusy(true);
    setNotice("");
    try {
      await action();
    } catch (e) {
      setNotice(e instanceof Error ? e.message : "Permintaan gagal.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">
            {CERTIFICATIONS[config.examType].name} · {config.lang.toUpperCase()}
          </span>
          <h1>{t("Rencana & catatan")}</h1>
          <p>
            {t("Tentukan tujuan, ulangi materi, dan simpan pemahaman Anda.")}
          </p>
        </div>
      </div>
      <nav className="segmented study-tabs" aria-label={t("Bagian belajar")}>
        {[
          ["plan", "Rencana belajar"],
          ["notes", "Materi & catatan tersimpan"],
          ["reports", "Laporan soal"],
          ["backup", "Cadangan & pindah perangkat"],
        ].map(([v, label]) => (
          <button key={v} aria-pressed={tab === v} onClick={() => setTab(v)}>
            {t(label)}
          </button>
        ))}
      </nav>
      <section className="panel" hidden={tab !== "plan"}>
        <h2>{t("Rencana belajar")}</h2>
        <div className="two-columns">
          <label>
            {t("Target sesi per minggu")}
            <input
              type="number"
              min={1}
              max={14}
              value={data.plan.weeklyGoal}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (Number.isInteger(value) && value >= 1 && value <= 14)
                  update((d) => ({
                    ...d,
                    plan: { ...d.plan, weeklyGoal: value },
                  }));
              }}
            />
          </label>
          <label>
            {t("Domain fokus")}
            <select
              aria-label={t("Domain fokus")}
              value={data.plan.focusDomain}
              onChange={(e) =>
                update((d) => ({
                  ...d,
                  plan: { ...d.plan, focusDomain: e.target.value },
                }))
              }
            >
              <option value="">{t("Semua domain")}</option>
              {Object.keys(CERTIFICATIONS[config.examType].blueprint).map(
                (d) => (
                  <option key={d}>{d}</option>
                ),
              )}
            </select>
          </label>
        </div>
        <p>
          {t("{count} sesi dalam 7 hari terakhir · target {target} sesi.", {
            count: week.length,
            target: data.plan.weeklyGoal,
          })}
        </p>
        <progress
          max={data.plan.weeklyGoal}
          value={Math.min(week.length, data.plan.weeklyGoal)}
          aria-label={t("Progres target mingguan")}
        />
        <p>
          {t("{count} soal unik sudah dipelajari.", { count: unique.size })}
        </p>
        <p>
          {t("{count} soal perlu diulang sekarang.", { count: due.length })}
        </p>
        <div className="actions">
          <button
            className="primary"
            disabled={!due.length}
            onClick={() => onPractice(due.slice(0, 20))}
          >
            {t("Ulangi materi terjadwal")}
          </button>
          <button
            disabled={
              !pool.some(
                (q) =>
                  !data.plan.focusDomain || q.domain === data.plan.focusDomain,
              )
            }
            onClick={() =>
              onPractice(
                focusedPractice(pool, config, attempts, data.plan.focusDomain),
              )
            }
          >
            {t("Latih domain fokus")}
          </button>
        </div>
        <small>
          {t("Rekomendasi belajar internal, bukan prediksi kelulusan resmi.")}
        </small>
      </section>
      <section className="panel" hidden={tab !== "notes"}>
        <h2>{t("Materi & catatan tersimpan")}</h2>
        <label>
          {t("Cari catatan atau soal")}
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        {!annotations.length && (
          <p>
            {t(
              "Belum ada materi tersimpan pada pilihan ini. Gunakan Simpan materi saat latihan atau review.",
            )}
          </p>
        )}
        {annotations.map((a) => (
          <article className="review-question" key={a.question.id}>
            <h3 lang={a.question.lang}>{a.question.prompt}</h3>
            <button onClick={() => onPractice([a.question])}>
              {t("Latih soal ini")}
            </button>
            <QuestionTools question={a.question} />
          </article>
        ))}
      </section>
      <section className="panel" hidden={tab !== "reports"}>
        <h2>{t("Laporan soal")}</h2>
        <button
          disabled={busy || !data.reports.length}
          onClick={() =>
            void run(async () => {
              const result = await api<{
                items: {
                  id: string;
                  status: "pending" | "in_review" | "resolved";
                  resolution: string;
                }[];
              }>("/questions/reports/status", {
                method: "POST",
                body: JSON.stringify({
                  items: data.reports
                    .slice(-100)
                    .map((r) => ({ id: r.id, token: r.token || r.id })),
                }),
              });
              update((d) => ({
                ...d,
                reports: d.reports.map((r) => {
                  const found = result.items.find((v) => v.id === r.id);
                  return found
                    ? {
                        ...r,
                        reviewStatus: found.status,
                        resolution: found.resolution,
                      }
                    : r;
                }),
              }));
              setNotice("Status laporan diperbarui.");
            })
          }
        >
          {t("Periksa status laporan")}
        </button>
        {data.reports
          .slice(-10)
          .reverse()
          .map((r) => (
            <div key={r.id} className="report-receipt">
              <strong>{r.questionId}</strong>
              <p>
                {t(
                  r.status === "pending"
                    ? "Menunggu pengiriman"
                    : r.reviewStatus === "resolved"
                      ? "Selesai ditinjau"
                      : r.reviewStatus === "in_review"
                        ? "Sedang ditinjau"
                        : "Diterima",
                )}
              </p>
              {r.resolution && <p>{r.resolution}</p>}
            </div>
          ))}
        <p>
          {t("{count} laporan menunggu pengiriman.", { count: pending.length })}
        </p>
        <button
          disabled={busy || !pending.length}
          onClick={() =>
            void run(async () => {
              for (const report of pending) {
                await api("/questions/reports", {
                  method: "POST",
                  body: JSON.stringify(report),
                });
                update((d) => ({
                  ...d,
                  reports: d.reports.map((r) =>
                    r.id === report.id ? { ...r, status: "sent" } : r,
                  ),
                }));
              }
              setNotice("Laporan diterima untuk ditinjau.");
            })
          }
        >
          {t("Kirim ulang laporan")}
        </button>
        <button
          onClick={() =>
            downloadJson(
              { format: "exam-reports-v1", reports: data.reports },
              "exam-reports.json",
            )
          }
        >
          {t("Ekspor laporan")}
        </button>
        <small>
          {t(
            "Status terkirim berarti diterima layanan, belum berarti masalah telah diperbaiki.",
          )}
        </small>
      </section>
      <section className="panel" hidden={tab !== "backup"}>
        <h2>{t("Cadangan & pindah perangkat")}</h2>
        <p>
          {t(
            "Cadangan mencakup hasil dan catatan pribadi. Simpan berkas di tempat yang Anda percaya.",
          )}
        </p>
        <button
          disabled={busy}
          onClick={() =>
            void run(async () =>
              downloadJson(
                {
                  format: "exam-backup-v1",
                  attempts: await getAttempts(user.id, 10000),
                  annotations: data.annotations,
                },
                "exam-backup.json",
              ),
            )
          }
        >
          {t("Unduh cadangan JSON")}
        </button>
        <label>
          {t("Pilih cadangan JSON")}
          <input
            type="file"
            accept="application/json,.json"
            onChange={async (e) => {
              setBackup(null);
              const file = e.target.files?.[0];
              if (!file) return;
              try {
                if (file.size > 5 * 1024 * 1024)
                  throw Error("Cadangan maksimal 5 MB.");
                const value = JSON.parse(await file.text());
                if (
                  value.format !== "exam-backup-v1" ||
                  !Array.isArray(value.attempts)
                )
                  throw Error("Cadangan tidak valid.");
                if (value.annotations) {
                  if (
                    typeof value.annotations !== "object" ||
                    Array.isArray(value.annotations) ||
                    Object.values(value.annotations).some((x) => {
                      const a = x as Annotation;
                      return (
                        !a ||
                        !isQuestion(a.question) ||
                        !Object.hasOwn(CERTIFICATIONS, a.question.examType) ||
                        !Array.isArray(a.question.options) ||
                        typeof a.question.prompt !== "string" ||
                        typeof a.note !== "string" ||
                        a.note.length > 4000 ||
                        typeof a.bookmarked !== "boolean"
                      );
                    })
                  )
                    throw Error("Cadangan tidak valid.");
                }
                setBackup(value);
                setBackupName(file.name);
                setNotice("");
              } catch (err) {
                setNotice(
                  err instanceof Error ? err.message : "Cadangan tidak valid.",
                );
              }
            }}
          />
        </label>
        {backup && (
          <div>
            <p>
              {backupName} ·{" "}
              {t(
                "Impor menggabungkan hasil; hasil yang sudah ada tidak ditimpa.",
              )}
            </p>
            <button
              disabled={busy}
              onClick={() =>
                void run(async () => {
                  const count = await restoreAttempts(backup.attempts, user.id);
                  if (backup.annotations)
                    update((d) => ({
                      ...d,
                      annotations: { ...backup.annotations, ...d.annotations },
                    }));
                  await onRefresh();
                  setBackup(null);
                  setNotice(t("{count} hasil berhasil diimpor.", { count }));
                })
              }
            >
              {t("Gabungkan cadangan")}
            </button>
          </div>
        )}
        {user.role !== "guest" && (
          <details>
            <summary>{t("Salin progres tamu ke akun ini")}</summary>
            <p>
              {t(
                "Hasil disalin ke akun ini dan dapat disinkronkan. Data tamu tetap tersedia di perangkat.",
              )}
            </p>
            <button
              disabled={busy}
              onClick={() =>
                void run(async () => {
                  const count = await restoreAttempts(
                    await getAttempts("guest", 10000),
                    user.id,
                  );
                  const guest = readLearning("guest");
                  update((d) => ({
                    ...d,
                    annotations: { ...guest.annotations, ...d.annotations },
                  }));
                  await onRefresh();
                  setNotice(t("{count} hasil berhasil diimpor.", { count }));
                })
              }
            >
              {t("Salin progres tamu")}
            </button>
          </details>
        )}
      </section>
      {(notice || error) && <p role="status">{t(error || notice)}</p>}
    </main>
  );
}

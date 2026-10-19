import EditorialReports from "../components/EditorialReports";
import { useLanguage } from "../i18n/context";
import { useCallback, useEffect, useState } from "react";
import { api, ApiError } from "../lib/api";
import { BLUEPRINT } from "../lib/exam";
import { getQueuedEdits, queueEdit, removeQueuedEdit } from "../lib/storage";
import type { QueuedEdit } from "../lib/storage";
import type { Question, User } from "../types";
export default function Admin({ user }: { user: User }) {
  const { t, locale } = useLanguage();
  const [items, setItems] = useState<Question[]>([]),
    [total, setTotal] = useState(0),
    [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all"),
    [search, setSearch] = useState(""),
    [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Question | null>(null),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false);
  const [queue, setQueue] = useState<QueuedEdit[]>([]),
    [importText, setImportText] = useState(""),
    [tab, setTab] = useState<"json" | "dump">("json");
  const refreshQueue = useCallback(
    async () =>
      setQueue((await getQueuedEdits()).filter((e) => e.userId === user.id)),
    [user.id],
  );
  const load = useCallback(async () => {
    setBusy(true);
    try {
      const result = await api<{ items: Question[]; total: number }>(
        `/questions?page=${page}&limit=20&status=${filter}&search=${encodeURIComponent(query)}`,
      );
      setItems(result.items);
      setTotal(result.total);
    } catch (error) {
      setNotice(
        error instanceof Error ? error.message : "Bank pusat tidak tersedia.",
      );
    } finally {
      setBusy(false);
    }
  }, [page, filter, query]);
  useEffect(() => {
    void load();
    void refreshQueue();
  }, [load, refreshQueue]);
  function bodyFor(edit: QueuedEdit) {
    const value = edit.payload as {
      id?: string;
      question?: Question;
      items?: Question[];
    };
    return edit.action === "import"
      ? {
          path: "/questions/import-json",
          method: "POST",
          body: { items: value.items },
        }
      : edit.action === "save"
        ? {
            path: `/questions/${value.id}`,
            method: "PUT",
            body: value.question,
          }
        : {
            path: `/questions/${value.id}/${edit.action}`,
            method: "POST",
            body: { version: value.question?.version },
          };
  }
  async function execute(edit: QueuedEdit) {
    const data = bodyFor(edit);
    await api(data.path, {
      method: data.method,
      body: JSON.stringify(data.body),
    });
  }
  async function mutate(edit: QueuedEdit) {
    setBusy(true);
    setNotice("");
    try {
      await execute(edit);
      setNotice("Perubahan tersimpan di bank pusat.");
      setDraft(null);
      await load();
    } catch (error) {
      if (
        error instanceof ApiError &&
        error.status >= 400 &&
        error.status < 500 &&
        ![408, 429].includes(error.status)
      )
        setNotice(error.message);
      else {
        await queueEdit(edit);
        await refreshQueue();
        setNotice(
          "Draft disimpan di perangkat, belum tersinkron atau dipublikasikan. Gunakan Sinkronkan saat layanan kembali tersedia.",
        );
      }
    } finally {
      setBusy(false);
    }
  }
  async function flush() {
    setBusy(true);
    try {
      for (const edit of queue) {
        await execute(edit);
        await removeQueuedEdit(edit.id);
      }
      setNotice("Antrean berhasil disinkronkan.");
      await load();
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Sinkronisasi gagal. Antrean tetap disimpan.",
      );
    } finally {
      await refreshQueue();
      setBusy(false);
    }
  }
  const edit = (action: QueuedEdit["action"]) => {
    if (draft)
      void mutate({
        id: crypto.randomUUID(),
        userId: user.id,
        action,
        payload: {
          id: draft.id,
          question: {
            ...draft,
            status: action === "save" ? "draft" : draft.status,
          },
        },
        savedAt: Date.now(),
      });
  };
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">{t("ADMINISTRATOR")}</span>
          <h1>{t("Bank soal & editorial")}</h1>
          <p>
            {" "}
            {t(
              "Publikasi memerlukan kunci valid, pembahasan tiap opsi, referensi provider, serta tanggal review.",
            )}{" "}
          </p>
        </div>
        <button onClick={load} disabled={busy}>
          {" "}
          {t("Muat ulang")}{" "}
        </button>
      </div>
      <EditorialReports />
      {notice && (
        <p role="status" className="notice">
          {t(notice)}
        </p>
      )}
      {queue.length > 0 && (
        <section className="resume-banner">
          <strong>
            {queue.length} {t("perubahan lokal belum tersinkron")}
          </strong>
          <button disabled={busy} onClick={flush}>
            {" "}
            {t("Sinkronkan antrean")}{" "}
          </button>
        </section>
      )}
      {queue.length > 0 && (
        <section className="panel">
          <h2>{t("Draft lokal belum tersinkron")}</h2>
          {queue.map((edit) => (
            <details key={edit.id}>
              <summary>
                {edit.action} · {new Date(edit.savedAt).toLocaleString(locale)}
              </summary>
              <pre className="queued-payload">
                {JSON.stringify(edit.payload, null, 2)}
              </pre>
              <button
                onClick={async () => {
                  if (confirm(t("Hapus perubahan lokal ini dari antrean?"))) {
                    await removeQueuedEdit(edit.id);
                    await refreshQueue();
                  }
                }}
              >
                {" "}
                {t("Hapus dari antrean")}{" "}
              </button>
            </details>
          ))}
        </section>
      )}
      <div className="admin-grid">
        <section className="panel">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery(search);
              setPage(1);
            }}
          >
            <label>
              {" "}
              {t("Cari soal")}{" "}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>{t("Cari")}</button>
          </form>
          <label>
            {" "}
            {t("Status")}{" "}
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">{t("Semua")}</option>
              <option value="draft">{t("Draft")}</option>
              <option value="approved">{t("Approved")}</option>
              <option value="rejected">{t("Rejected")}</option>
            </select>
          </label>
          <div className="admin-question-list">
            {items.map((q) => (
              <button
                key={q.id}
                aria-pressed={draft?.id === q.id}
                onClick={() => setDraft(structuredClone(q))}
              >
                <small>
                  {q.examType.toUpperCase()} · {q.lang} · {q.status}
                </small>
                <span>{q.prompt}</span>
                <small>
                  {q.issues?.length || 0} {t("temuan · v")}
                  {q.version}
                </small>
              </button>
            ))}
          </div>
          <div className="pagination">
            <button
              disabled={page === 1 || busy}
              onClick={() => setPage(page - 1)}
            >
              {" "}
              {t("Sebelumnya")}{" "}
            </button>
            <span>
              {page}/{Math.max(1, Math.ceil(total / 20))}
            </span>
            <button
              disabled={page * 20 >= total || busy}
              onClick={() => setPage(page + 1)}
            >
              {" "}
              {t("Berikutnya")}{" "}
            </button>
          </div>
        </section>
        <section className="panel">
          {draft ? (
            <>
              <h2>{t("Edit soal")}</h2>
              <div className="two-columns">
                <label>
                  {" "}
                  {t("Sertifikasi")}{" "}
                  <select
                    value={draft.examType}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        examType: e.target.value as Question["examType"],
                        domain: Object.keys(
                          BLUEPRINT[e.target.value as Question["examType"]],
                        )[0],
                      })
                    }
                  >
                    <option value="ccp">CCP</option>
                    <option value="gcp-ace">Google Cloud ACE</option>
                    <option value="saa">SAA</option>
                  </select>
                </label>
                <label>
                  {" "}
                  {t("Bahasa")}{" "}
                  <select
                    value={draft.lang}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        lang: e.target.value as Question["lang"],
                      })
                    }
                  >
                    <option value="id">{t("Indonesia")}</option>
                    <option value="en">{t("English")}</option>
                  </select>
                </label>
              </div>
              <label>
                {" "}
                {t("Domain")}{" "}
                <select
                  value={draft.domain}
                  onChange={(e) =>
                    setDraft({ ...draft, domain: e.target.value })
                  }
                >
                  {!Object.keys(BLUEPRINT[draft.examType]).includes(
                    draft.domain,
                  ) && <option value={draft.domain}>{t(draft.domain)}</option>}
                  {Object.keys(BLUEPRINT[draft.examType]).map((d) => (
                    <option key={d} value={d}>
                      {t(d)}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {" "}
                {t("Pertanyaan")}{" "}
                <textarea
                  rows={4}
                  value={draft.prompt}
                  onChange={(e) =>
                    setDraft({ ...draft, prompt: e.target.value })
                  }
                />
              </label>
              {draft.options.map((option, index) => (
                <div className="option-editor" key={option.id}>
                  <label>
                    {" "}
                    {t("Opsi")} {option.id}
                    <textarea
                      value={option.text}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          options: draft.options.map((o, i) =>
                            i === index ? { ...o, text: e.target.value } : o,
                          ),
                        })
                      }
                    />
                  </label>
                  <label>
                    {" "}
                    {t("Alasan opsi")} {option.id}
                    <textarea
                      value={draft.optionExplanations?.[option.id] || ""}
                      onChange={(e) =>
                        setDraft({
                          ...draft,
                          optionExplanations: {
                            ...draft.optionExplanations,
                            [option.id]: e.target.value,
                          },
                        })
                      }
                    />
                  </label>
                </div>
              ))}
              <div className="two-columns">
                <label>
                  {" "}
                  {t("Tipe")}{" "}
                  <select
                    value={draft.type}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        type: e.target.value as Question["type"],
                      })
                    }
                  >
                    <option value="single">{t("Single")}</option>
                    <option value="multiple">{t("Multiple")}</option>
                  </select>
                </label>
                <label>
                  {" "}
                  {t("Kunci (pisahkan koma)")}{" "}
                  <input
                    value={draft.correctAnswers.join(", ")}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        correctAnswers: e.target.value
                          .split(",")
                          .map((s) => s.trim().toUpperCase())
                          .filter(Boolean),
                      })
                    }
                  />
                </label>
              </div>
              <label>
                {" "}
                {t("Pembahasan")}{" "}
                <textarea
                  rows={4}
                  value={draft.explanation}
                  onChange={(e) =>
                    setDraft({ ...draft, explanation: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                {t("URL dokumentasi AWS")}{" "}
                <input
                  type="url"
                  value={draft.sourceUrl || ""}
                  onChange={(e) =>
                    setDraft({ ...draft, sourceUrl: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                {t("Tanggal verifikasi")}{" "}
                <input
                  type="date"
                  value={draft.verifiedAt || ""}
                  onChange={(e) =>
                    setDraft({ ...draft, verifiedAt: e.target.value })
                  }
                />
              </label>
              {draft.issues?.includes("possible_duplicate") && (
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={!!draft.duplicateReviewed}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        duplicateReviewed: e.target.checked,
                      })
                    }
                  />{" "}
                  {t("Saya sudah meninjau dugaan duplikasi soal ini")}{" "}
                </label>
              )}
              <div className="actions">
                <button disabled={busy} onClick={() => edit("save")}>
                  {" "}
                  {t("Simpan draft")}{" "}
                </button>
                <button
                  className="primary"
                  disabled={busy}
                  onClick={() => edit("approve")}
                >
                  {" "}
                  {t("Approve versi tersimpan")}{" "}
                </button>
                <button disabled={busy} onClick={() => edit("reject")}>
                  {" "}
                  {t("Reject")}{" "}
                </button>
              </div>
              <small>
                {" "}
                {t(
                  "Simpan perubahan sebagai draft terlebih dahulu, lalu muat dan approve versi terbaru.",
                )}{" "}
              </small>
            </>
          ) : (
            <p>{t("Pilih soal di daftar untuk meninjau dan mengedit.")}</p>
          )}
        </section>
      </div>
      <section className="panel">
        <h2>{t("Impor & generator")}</h2>
        <div className="segmented">
          <button aria-pressed={tab === "json"} onClick={() => setTab("json")}>
            JSON
          </button>
          <button aria-pressed={tab === "dump"} onClick={() => setTab("dump")}>
            {" "}
            {t("Teks")}{" "}
          </button>
        </div>
        <label>
          {tab === "json"
            ? t("Array JSON soal")
            : t("Teks soal berformat nomor/opsi/kunci")}
          <textarea
            rows={7}
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
          />
        </label>
        <div className="actions">
          <button
            disabled={busy || !importText.trim()}
            onClick={async () => {
              try {
                if (tab === "json") {
                  const items = JSON.parse(importText);
                  if (!Array.isArray(items))
                    throw new Error("JSON harus berupa array.");
                  await mutate({
                    id: crypto.randomUUID(),
                    userId: user.id,
                    action: "import",
                    payload: { items },
                    savedAt: Date.now(),
                  });
                } else {
                  await api("/questions/import-dump-fast", {
                    method: "POST",
                    body: JSON.stringify({ rawText: importText }),
                  });
                  setNotice("Impor berhasil sebagai draft.");
                  await load();
                }
              } catch (e) {
                setNotice(e instanceof Error ? e.message : "Impor gagal.");
              }
            }}
          >
            {" "}
            {t("Impor sebagai draft")}{" "}
          </button>
          <button
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                await api("/questions/generate-ai", {
                  method: "POST",
                  body: JSON.stringify({ count: 5 }),
                  signal: AbortSignal.timeout(120000),
                });
                setNotice("5 draft SAA English dibuat; review diperlukan.");
                await load();
              } catch (e) {
                setNotice(e instanceof Error ? e.message : "Generator gagal.");
              } finally {
                setBusy(false);
              }
            }}
          >
            {" "}
            {t("Buat 5 draft AI (SAA English)")}{" "}
          </button>
          <button
            disabled={busy}
            onClick={async () => {
              if (
                !confirm(
                  t("Publikasikan semua draft yang lolos validasi editorial?"),
                )
              )
                return;
              try {
                const r = await api<{ approved: number; skipped: number }>(
                  "/questions/bulk/approve-drafts",
                  { method: "POST" },
                );
                setNotice(
                  `${r.approved} dipublikasikan, ${r.skipped} masih perlu review.`,
                );
                await load();
              } catch (e) {
                setNotice(e instanceof Error ? e.message : "Approve gagal.");
              }
            }}
          >
            {" "}
            {t("Approve draft valid")}{" "}
          </button>
        </div>
        <small>
          {" "}
          {t(
            "AI memerlukan konfigurasi server dan dapat menggunakan kuota layanan.",
          )}{" "}
        </small>
      </section>
    </main>
  );
}

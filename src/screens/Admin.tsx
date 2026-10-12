import { useCallback, useEffect, useState } from "react";
import { api, ApiError } from "../lib/api";
import { BLUEPRINT } from "../lib/exam";
import { getQueuedEdits, queueEdit, removeQueuedEdit } from "../lib/storage";
import type { QueuedEdit } from "../lib/storage";
import type { Question, User } from "../types";
export default function Admin({ user }: { user: User }) {
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
          <span className="eyebrow">ADMINISTRATOR</span>
          <h1>Bank soal & editorial</h1>
          <p>
            Publikasi memerlukan kunci valid, pembahasan tiap opsi, sumber AWS,
            serta tanggal review.
          </p>
        </div>
        <button onClick={load} disabled={busy}>
          Muat ulang
        </button>
      </div>
      {notice && (
        <p role="status" className="notice">
          {notice}
        </p>
      )}
      {queue.length > 0 && (
        <section className="resume-banner">
          <strong>{queue.length} perubahan lokal belum tersinkron</strong>
          <button disabled={busy} onClick={flush}>
            Sinkronkan antrean
          </button>
        </section>
      )}
      {queue.length > 0 && (
        <section className="panel">
          <h2>Draft lokal belum tersinkron</h2>
          {queue.map((edit) => (
            <details key={edit.id}>
              <summary>
                {edit.action} · {new Date(edit.savedAt).toLocaleString("id-ID")}
              </summary>
              <pre className="queued-payload">
                {JSON.stringify(edit.payload, null, 2)}
              </pre>
              <button
                onClick={async () => {
                  if (confirm("Hapus perubahan lokal ini dari antrean?")) {
                    await removeQueuedEdit(edit.id);
                    await refreshQueue();
                  }
                }}
              >
                Hapus dari antrean
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
              Cari soal
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>Cari</button>
          </form>
          <label>
            Status
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">Semua</option>
              <option value="draft">Draft</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
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
                  {q.issues?.length || 0} temuan · v{q.version}
                </small>
              </button>
            ))}
          </div>
          <div className="pagination">
            <button
              disabled={page === 1 || busy}
              onClick={() => setPage(page - 1)}
            >
              Sebelumnya
            </button>
            <span>
              {page}/{Math.max(1, Math.ceil(total / 20))}
            </span>
            <button
              disabled={page * 20 >= total || busy}
              onClick={() => setPage(page + 1)}
            >
              Berikutnya
            </button>
          </div>
        </section>
        <section className="panel">
          {draft ? (
            <>
              <h2>Edit soal</h2>
              <div className="two-columns">
                <label>
                  Sertifikasi
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
                    <option value="saa">SAA</option>
                  </select>
                </label>
                <label>
                  Bahasa
                  <select
                    value={draft.lang}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        lang: e.target.value as Question["lang"],
                      })
                    }
                  >
                    <option value="id">Indonesia</option>
                    <option value="en">English</option>
                  </select>
                </label>
              </div>
              <label>
                Domain
                <select
                  value={draft.domain}
                  onChange={(e) =>
                    setDraft({ ...draft, domain: e.target.value })
                  }
                >
                  {!Object.keys(BLUEPRINT[draft.examType]).includes(
                    draft.domain,
                  ) && <option>{draft.domain}</option>}
                  {Object.keys(BLUEPRINT[draft.examType]).map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </label>
              <label>
                Pertanyaan
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
                    Opsi {option.id}
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
                    Alasan opsi {option.id}
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
                  Tipe
                  <select
                    value={draft.type}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        type: e.target.value as Question["type"],
                      })
                    }
                  >
                    <option value="single">Single</option>
                    <option value="multiple">Multiple</option>
                  </select>
                </label>
                <label>
                  Kunci (pisahkan koma)
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
                Pembahasan
                <textarea
                  rows={4}
                  value={draft.explanation}
                  onChange={(e) =>
                    setDraft({ ...draft, explanation: e.target.value })
                  }
                />
              </label>
              <label>
                URL dokumentasi AWS
                <input
                  type="url"
                  value={draft.sourceUrl || ""}
                  onChange={(e) =>
                    setDraft({ ...draft, sourceUrl: e.target.value })
                  }
                />
              </label>
              <label>
                Tanggal verifikasi
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
                  />
                  Saya sudah meninjau dugaan duplikasi soal ini
                </label>
              )}
              <div className="actions">
                <button disabled={busy} onClick={() => edit("save")}>
                  Simpan draft
                </button>
                <button
                  className="primary"
                  disabled={busy}
                  onClick={() => edit("approve")}
                >
                  Approve versi tersimpan
                </button>
                <button disabled={busy} onClick={() => edit("reject")}>
                  Reject
                </button>
              </div>
              <small>
                Simpan perubahan sebagai draft terlebih dahulu, lalu muat dan
                approve versi terbaru.
              </small>
            </>
          ) : (
            <p>Pilih soal di daftar untuk meninjau dan mengedit.</p>
          )}
        </section>
      </div>
      <section className="panel">
        <h2>Impor & generator</h2>
        <div className="segmented">
          <button aria-pressed={tab === "json"} onClick={() => setTab("json")}>
            JSON
          </button>
          <button aria-pressed={tab === "dump"} onClick={() => setTab("dump")}>
            Teks
          </button>
        </div>
        <label>
          {tab === "json"
            ? "Array JSON soal"
            : "Teks soal berformat nomor/opsi/kunci"}
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
            Impor sebagai draft
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
            Buat 5 draft AI (SAA English)
          </button>
          <button
            disabled={busy}
            onClick={async () => {
              if (
                !confirm(
                  "Publikasikan semua draft yang lolos validasi editorial?",
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
            Approve draft valid
          </button>
        </div>
        <small>
          AI memerlukan konfigurasi server dan dapat menggunakan kuota layanan.
        </small>
      </section>
    </main>
  );
}

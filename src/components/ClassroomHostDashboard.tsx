import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/context";
import type { ClassroomState } from "../lib/classroom";
import { answerOutcome, rankParticipants } from "../lib/classroomResults";
import ClassroomHostQuestions from "./ClassroomHostQuestions";

type Action = (
  action: string,
  payload?: Record<string, unknown>,
) => Promise<ClassroomState | null>;
export default function ClassroomHostDashboard({
  room,
  busy,
  onAction,
}: {
  room: ClassroomState;
  busy: boolean;
  onAction: Action;
}) {
  const { t } = useLanguage();
  const closed = room.status === "closed";
  const [tab, setTab] = useState(
    closed ? "ranking" : room.status === "running" ? "questions" : "monitor",
  );
  const [search, setSearch] = useState(""),
    [page, setPage] = useState(1),
    [index, setIndex] = useState(room.reviewIndex || 0);
  const [presentation, setPresentation] = useState(false),
    [secret, setSecret] = useState<{ title: string; value: string } | null>(
      null,
    );
  const people = room.participants || [];
  const filtered = people.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  const ranked = rankParticipants(people);
  const tabs = closed
    ? ["ranking", "review", "analytics", "monitor"]
    : ["questions", "monitor"];
  const labels: Record<string, string> = {
    ranking: "Peringkat peserta",
    review: "Pembahasan kelas",
    analytics: "Analisis kelas",
    monitor: "Monitor peserta",
    questions: "Soal sesi",
  };
  useEffect(() => {
    const exit = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPresentation(false);
    };
    window.addEventListener("keydown", exit);
    return () => window.removeEventListener("keydown", exit);
  }, []);
  async function changeIndex(next: number) {
    setIndex(next);
    if (room.reviewSync)
      await onAction("review", { reviewIndex: next, reviewSync: true });
  }
  async function issue(
    kind: "reset_member" | "transfer",
    memberId?: string,
    name?: string,
  ) {
    const value = crypto.randomUUID();
    const data = await onAction(
      kind,
      kind === "transfer"
        ? { transferToken: value }
        : { memberId, recoveryToken: value },
    );
    if (data)
      setSecret({
        title:
          kind === "transfer"
            ? t("Kode pindah host")
            : t("Pemulihan akses {name}", { name: name || "" }),
        value,
      });
  }
  const domains = [...new Set(room.questions.map((q) => q.domain))]
    .map((domain) => {
      const qs = room.questions.filter((q) => q.domain === domain);
      const correct = qs.reduce(
        (sum, q) =>
          sum +
          people.filter(
            (p) => answerOutcome(q, p.answers?.[q.id]) === "correct",
          ).length,
        0,
      );
      return { domain, total: qs.length * people.length, correct };
    })
    .sort(
      (a, b) =>
        a.correct / Math.max(1, a.total) - b.correct / Math.max(1, b.total),
    );
  const hardest = room.questions
    .map((q, i) => ({
      q,
      i,
      wrong: people.filter(
        (p) => answerOutcome(q, p.answers?.[q.id]) !== "correct",
      ).length,
    }))
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, 3);
  return (
    <div className={`host-dashboard ${presentation ? "presentation" : ""}`}>
      <div className="host-toolbar">
        <nav className="segmented" aria-label={t("Tampilan host")}>
          {tabs.map((v) => (
            <button key={v} aria-pressed={tab === v} onClick={() => setTab(v)}>
              {t(labels[v])}
            </button>
          ))}
        </nav>
        <button onClick={() => setPresentation((v) => !v)}>
          {t(presentation ? "Keluar presentasi" : "Mode presentasi")}
        </button>
      </div>
      {secret && (
        <section className="notice">
          <h3>{secret.title}</h3>
          <p>
            {t(
              "Berlaku lima menit dan hanya sekali pakai. Bagikan hanya ke perangkat yang dituju.",
            )}
          </p>
          <input
            aria-label={secret.title}
            value={secret.value}
            readOnly
            onFocus={(e) => e.currentTarget.select()}
          />
          <button onClick={() => setSecret(null)}>{t("Tutup")}</button>
        </section>
      )}
      {(tab === "questions" || tab === "review") && (
        <>
          {closed && (room.version || 1) >= 2 && (
            <label className="inline-control">
              <input
                type="checkbox"
                checked={!!room.reviewSync}
                disabled={busy || !room.revealed}
                onChange={(e) =>
                  void onAction("review", {
                    reviewSync: e.target.checked,
                    reviewIndex: index,
                  })
                }
              />
              {t("Sinkronkan pembahasan ke peserta")}
            </label>
          )}
          {closed && !room.revealed && (
            <p>
              {t(
                "Buka hasil & pembahasan untuk membagikan review kepada peserta.",
              )}
            </p>
          )}
          <ClassroomHostQuestions
            room={room}
            index={index}
            onIndex={(next) => void changeIndex(next)}
            busy={busy}
          />
        </>
      )}
      {tab === "ranking" && (
        <section className="panel">
          <h2 id="ranking-title">{t("Peringkat peserta")}</h2>
          <p>
            {t(
              "Skor tertinggi berada di atas. Skor sama mendapat peringkat yang sama.",
            )}
          </p>
          <ol className="live-rank-cards">
            {ranked.map((p) => (
              <li key={p.id}>
                <strong className="rank-number">{p.rank}</strong>
                <span>{p.name}</span>
                <strong>
                  {p.score}/{room.total}
                  <small>
                    {Math.round(((p.score || 0) / room.total) * 100)}%
                  </small>
                </strong>
              </li>
            ))}
          </ol>
          <div
            className="live-table ranking-table"
            role="region"
            aria-labelledby="ranking-title"
            tabIndex={0}
          >
            <table>
              <thead>
                <tr>
                  <th>{t("Peringkat")}</th>
                  <th>{t("Nama peserta")}</th>
                  <th>{t("Hasil")}</th>
                  <th>{t("Status")}</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((p) => (
                  <tr key={p.id}>
                    <td>{p.rank}</td>
                    <th scope="row">{p.name}</th>
                    <td>
                      {p.score}/{room.total} ·{" "}
                      {Math.round(((p.score || 0) / room.total) * 100)}%
                    </td>
                    <td>{t(p.submitted ? "Terkumpul" : "Waktu berakhir")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {tab === "monitor" && (
        <section className="panel">
          <h2>{t("Monitor peserta")}</h2>
          <label>
            {t("Cari peserta")}
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </label>
          <ul className="participant-list">
            {filtered.slice((page - 1) * 10, page * 10).map((p) => (
              <li key={p.id}>
                <div>
                  <strong>{p.name}</strong>
                  <span>
                    {p.answered}/{room.total} ·{" "}
                    {t(
                      p.submitted
                        ? "Terkumpul"
                        : room.status === "waiting"
                          ? p.ready
                            ? "Siap"
                            : "Belum siap"
                          : closed
                            ? "Waktu berakhir"
                            : room.serverNow - p.lastSeen > 15000
                              ? "Koneksi terputus"
                              : "Terhubung",
                    )}
                  </span>
                </div>
                {(room.version || 1) >= 2 && (
                  <div className="actions">
                    <button
                      disabled={busy}
                      onClick={() => void issue("reset_member", p.id, p.name)}
                    >
                      {t("Pulihkan akses")}
                    </button>
                    {room.status === "waiting" && (
                      <button
                        disabled={busy}
                        onClick={() => {
                          if (
                            confirm(
                              t("Keluarkan {name} dari ruang tunggu?", {
                                name: p.name,
                              }),
                            )
                          )
                            void onAction("remove", { memberId: p.id });
                        }}
                      >
                        {t("Keluarkan")}
                      </button>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {!filtered.length && (
            <p>{t("Tidak ada peserta pada pencarian ini.")}</p>
          )}
          <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage((v) => v - 1)}>
              {t("Sebelumnya")}
            </button>
            <span>
              {page}/{Math.max(1, Math.ceil(filtered.length / 10))}
            </span>
            <button
              disabled={page * 10 >= filtered.length}
              onClick={() => setPage((v) => v + 1)}
            >
              {t("Berikutnya")}
            </button>
          </div>
          {(room.version || 1) >= 2 && (
            <details>
              <summary>{t("Pindahkan host ke perangkat lain")}</summary>
              <p>
                {t(
                  "Kode ini memindahkan kendali host. Akses host di perangkat lama dicabut setelah kode dipakai.",
                )}
              </p>
              <button disabled={busy} onClick={() => void issue("transfer")}>
                {t("Buat kode pindah host")}
              </button>
            </details>
          )}
        </section>
      )}
      {tab === "analytics" && (
        <section className="panel">
          <h2>{t("Analisis kelas")}</h2>
          <h3>{t("Performa per domain")}</h3>
          {domains.map((d) => (
            <div className="domain-row" key={d.domain}>
              <span>{t(d.domain)}</span>
              <meter
                min={0}
                max={100}
                value={(100 * d.correct) / Math.max(1, d.total)}
                aria-label={t(d.domain)}
              />
              <strong>
                {d.correct}/{d.total} ·{" "}
                {Math.round((100 * d.correct) / Math.max(1, d.total))}%
              </strong>
            </div>
          ))}
          <h3>{t("Prioritas pembahasan")}</h3>
          <ul>
            {hardest.map(({ q, i, wrong }) => (
              <li key={q.id}>
                <button
                  className="text-button"
                  onClick={() => {
                    setTab("review");
                    void changeIndex(i);
                  }}
                >
                  {i + 1}. {q.prompt}
                </button>
                <p>{t("{count} peserta perlu mengulang", { count: wrong })}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

import { useState } from "react";
import { useLanguage } from "../i18n/context";
import type { ClassroomAccess } from "../lib/classroom";
export default function ClassroomHistory({
  items,
  onSelect,
  onForget,
}: {
  items: ClassroomAccess[];
  onSelect: (access: ClassroomAccess) => void;
  onForget: (access: ClassroomAccess) => void;
}) {
  const { t, locale } = useLanguage();
  const [search, setSearch] = useState(""),
    [filter, setFilter] = useState("all");
  const [now]=useState(()=>Date.now());
  const list = items.filter(
    (v) =>
      `${v.title || ""} ${v.code}`
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (filter === "all" ||
        (filter === "closed" ? v.status === "closed" : v.status !== "closed")),
  );
  if (!items.length) return null;
  return (
    <section className="panel">
      <h2>{t("Sesi di perangkat ini")}</h2>
      <label>
        {t("Cari sesi")}
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="segmented">
        {[
          ["all", "Semua sesi"],
          ["active", "Sesi aktif"],
          ["closed", "Sesi selesai"],
        ].map(([v, label]) => (
          <button
            key={v}
            aria-pressed={filter === v}
            onClick={() => setFilter(v)}
          >
            {t(label)}
          </button>
        ))}
      </div>
      <ul className="classroom-history">
        {list.map((a) => {
          const expired = !!a.expiresAt && a.expiresAt < now;
          return (
            <li key={`${a.role}-${a.code}`}>
              <div>
                <strong>{a.title || a.code}</strong>
                <p>
                  {a.code} · {t(a.role === "host" ? "Instruktur" : "Peserta")} ·{" "}
                  {t(
                    expired
                      ? "Kedaluwarsa"
                      : a.status === "closed"
                        ? "Sesi berakhir"
                        : a.status === "running"
                          ? "Sesi berlangsung"
                          : "Ruang tunggu",
                  )}
                </p>
                {a.createdAt && (
                  <small>{new Date(a.createdAt).toLocaleString(locale)}</small>
                )}
              </div>
              <div className="actions">
                <button disabled={expired} onClick={() => onSelect(a)}>
                  {t("Lanjutkan sesi {code}", { code: a.code })}
                </button>
                <button
                  onClick={() => onForget(a)}
                  aria-label={t("Hapus akses lokal sesi {code}", {
                    code: a.code,
                  })}
                >
                  {t("Hapus dari perangkat")}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <small>
        {t(
          "Menghapus dari perangkat hanya menghapus akses lokal, bukan data sesi di server.",
        )}
      </small>
    </section>
  );
}

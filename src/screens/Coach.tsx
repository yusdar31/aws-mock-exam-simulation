import { useLanguage } from "../i18n/context";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Config, User } from "../types";
import { BLUEPRINT } from "../lib/exam";
type Batch = { id: string; name: string; join_code?: string; coach_id: string };
type Assignment = {
  id: string;
  batch_id: string;
  title: string;
  config: Config;
  due_at: string;
};
type Report = {
  user_id: string;
  name: string;
  assignment_id: string;
  score_rate: number;
  domain_performance: { domain: string; accuracy: number }[];
  submitted_at: number;
};
export default function Coach({
  user,
  onAssignment,
}: {
  user: User;
  onAssignment: (assignment: Assignment) => void;
}) {
  const { t, locale } = useLanguage();
  const [batches, setBatches] = useState<Batch[]>([]),
    [batch, setBatch] = useState(""),
    [assignments, setAssignments] = useState<Assignment[]>([]),
    [reports, setReports] = useState<Report[]>([]),
    [notice, setNotice] = useState("");
  const coach = user.role === "admin" || user.role === "coach";
  async function load() {
    const { data, error } = await supabase
      .from("batches")
      .select("id,name,join_code,coach_id");
    if (error)
      setNotice(
        "Ruang kelas belum tersedia. Coba lagi atau hubungi administrator.",
      );
    else {
      setBatches(data || []);
      setBatch((old) => old || data?.[0]?.id || "");
    }
  }
  useEffect(() => {
    void load();
  }, []);
  useEffect(() => {
    if (!batch) return;
    void (async () => {
      const { data, error } = await supabase
        .from("assignments")
        .select("*")
        .eq("batch_id", batch)
        .order("due_at");
      if (error) setNotice(error.message);
      else setAssignments(data || []);
      if (coach) {
        const r = await supabase.rpc("batch_report", { target_batch: batch });
        if (r.error) setNotice(r.error.message);
        else setReports(r.data || []);
      }
    })();
  }, [batch, coach]);
  const save = async (
    event: React.FormEvent<HTMLFormElement>,
    kind: "batch" | "assignment" | "join",
  ) => {
    event.preventDefault();
    const f = new FormData(event.currentTarget);
    try {
      if (kind === "join") {
        const { error } = await supabase.rpc("join_batch", {
          code: String(f.get("code")),
        });
        if (error) throw error;
      } else if (kind === "batch") {
        const { error } = await supabase
          .from("batches")
          .insert({ name: f.get("name"), coach_id: user.id });
        if (error) throw error;
      } else {
        const examType = String(f.get("type")) as Config["examType"];
        const { error } = await supabase.from("assignments").insert({
          batch_id: batch,
          title: f.get("title"),
          due_at: new Date(String(f.get("due"))).toISOString(),
          config: {
            examType,
            lang: f.get("lang"),
            mode: "simulation",
            limit: 65,
            duration: examType === "ccp" ? 90 : 130,
            domains: Object.keys(BLUEPRINT[examType]),
          },
        });
        if (error) throw error;
      }
      setNotice("Berhasil disimpan.");
      await load();
      if (kind === "assignment") {
        const { data } = await supabase
          .from("assignments")
          .select("*")
          .eq("batch_id", batch)
          .order("due_at");
        setAssignments(data || []);
      }
    } catch (e) {
      setNotice(e instanceof Error ? e.message : "Perubahan belum tersimpan.");
    }
  };
  const domains = new Map<string, { total: number; sum: number }>();
  for (const r of reports)
    for (const d of r.domain_performance) {
      const s = domains.get(d.domain) || { total: 0, sum: 0 };
      s.total++;
      s.sum += d.accuracy;
      domains.set(d.domain, s);
    }
  return (
    <main className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">{t("RUANG KELAS")}</span>
          <h1>{coach ? t("Pendampingan batch") : t("Penugasan belajar")}</h1>
          <p>{t("Penugasan simulasi dan rekap hasil kelas.")}</p>
        </div>
      </div>
      {notice && (
        <p role="status" className="notice">
          {t(notice)}
        </p>
      )}
      <section className="panel">
        <form onSubmit={(e) => void save(e, "join")}>
          <label>
            {" "}
            {t("Kode bergabung kelas")}{" "}
            <input name="code" required minLength={8} />
          </label>
          <button>{t("Gabung kelas")}</button>
        </form>
      </section>
      {coach && (
        <section className="panel">
          <h2>{t("Buat batch")}</h2>
          <form onSubmit={(e) => void save(e, "batch")}>
            <label>
              {" "}
              {t("Nama batch")} <input name="name" required maxLength={100} />
            </label>
            <button>{t("Buat batch baru")}</button>
          </form>
        </section>
      )}
      <section className="panel">
        <label>
          {" "}
          {t("Batch")}{" "}
          <select value={batch} onChange={(e) => setBatch(e.target.value)}>
            <option value="">{t("Pilih batch")}</option>
            {batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        {coach && batches.find((b) => b.id === batch)?.join_code && (
          <p>
            {" "}
            {t("Kode undangan:")}{" "}
            <code>{batches.find((b) => b.id === batch)?.join_code}</code>
          </p>
        )}
        {coach && batch && (
          <form onSubmit={(e) => void save(e, "assignment")}>
            <h2>{t("Tambah penugasan")}</h2>
            <label>
              {" "}
              {t("Judul")} <input name="title" required />
            </label>
            <div className="two-columns">
              <label>
                {" "}
                {t("Sertifikasi")}{" "}
                <select name="type">
                  <option value="ccp">CCP</option>
                  <option value="saa">SAA</option>
                </select>
              </label>
              <label>
                {" "}
                {t("Bahasa")}{" "}
                <select name="lang">
                  <option value="id">{t("Indonesia")}</option>
                  <option value="en">{t("English")}</option>
                </select>
              </label>
            </div>
            <label>
              {" "}
              {t("Tenggat")} <input name="due" type="datetime-local" required />
            </label>
            <button>{t("Simpan penugasan")}</button>
          </form>
        )}
      </section>
      <section className="panel">
        <h2>{t("Penugasan")}</h2>
        {assignments.map((a) => (
          <article className="attempt-row" key={a.id}>
            <div>
              <strong>{a.title}</strong>
              <p>
                {a.config.examType.toUpperCase()} · {a.config.lang}{" "}
                {t("· Tenggat")} {new Date(a.due_at).toLocaleString(locale)}
              </p>
            </div>
            <button className="primary" onClick={() => onAssignment(a)}>
              {" "}
              {t("Kerjakan")}{" "}
            </button>
          </article>
        ))}
        {!assignments.length && <p>{t("Belum ada penugasan.")}</p>}
      </section>
      {coach && (
        <>
          <section className="panel">
            <h2>{t("Domain kelas")}</h2>
            {[...domains].map(([name, s]) => (
              <p key={name}>
                {t(name)}: <strong>{Math.round(s.sum / s.total)}%</strong>
              </p>
            ))}
            {!reports.length && (
              <p>{t("Belum ada hasil tersinkron dari peserta.")}</p>
            )}
          </section>
          <section className="panel">
            <h2>{t("Peserta yang perlu pendampingan")}</h2>
            {reports
              .filter((r) => r.score_rate < 80)
              .map((r) => (
                <p key={`${r.user_id}-${r.submitted_at}`}>
                  <strong>{r.name}</strong> · {r.score_rate}% ·{" "}
                  {r.domain_performance
                    .filter((d) => d.accuracy < 80)
                    .map((d) => t(d.domain))
                    .join(", ")}
                </p>
              ))}
          </section>
        </>
      )}
    </main>
  );
}

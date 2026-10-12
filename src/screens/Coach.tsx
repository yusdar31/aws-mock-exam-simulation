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
          <span className="eyebrow">RUANG KELAS</span>
          <h1>{coach ? "Pendampingan batch" : "Penugasan belajar"}</h1>
          <p>Penugasan simulasi dan rekap hasil kelas.</p>
        </div>
      </div>
      {notice && (
        <p role="status" className="notice">
          {notice}
        </p>
      )}
      <section className="panel">
        <form onSubmit={(e) => void save(e, "join")}>
          <label>
            Kode bergabung kelas
            <input name="code" required minLength={8} />
          </label>
          <button>Gabung kelas</button>
        </form>
      </section>
      {coach && (
        <section className="panel">
          <h2>Buat batch</h2>
          <form onSubmit={(e) => void save(e, "batch")}>
            <label>
              Nama batch
              <input name="name" required maxLength={100} />
            </label>
            <button>Buat batch baru</button>
          </form>
        </section>
      )}
      <section className="panel">
        <label>
          Batch
          <select value={batch} onChange={(e) => setBatch(e.target.value)}>
            <option value="">Pilih batch</option>
            {batches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </label>
        {coach && batches.find((b) => b.id === batch)?.join_code && (
          <p>
            Kode undangan:{" "}
            <code>{batches.find((b) => b.id === batch)?.join_code}</code>
          </p>
        )}
        {coach && batch && (
          <form onSubmit={(e) => void save(e, "assignment")}>
            <h2>Tambah penugasan</h2>
            <label>
              Judul
              <input name="title" required />
            </label>
            <div className="two-columns">
              <label>
                Sertifikasi
                <select name="type">
                  <option value="ccp">CCP</option>
                  <option value="saa">SAA</option>
                </select>
              </label>
              <label>
                Bahasa
                <select name="lang">
                  <option value="id">Indonesia</option>
                  <option value="en">English</option>
                </select>
              </label>
            </div>
            <label>
              Tenggat
              <input name="due" type="datetime-local" required />
            </label>
            <button>Simpan penugasan</button>
          </form>
        )}
      </section>
      <section className="panel">
        <h2>Penugasan</h2>
        {assignments.map((a) => (
          <article className="attempt-row" key={a.id}>
            <div>
              <strong>{a.title}</strong>
              <p>
                {a.config.examType.toUpperCase()} · {a.config.lang} · Tenggat{" "}
                {new Date(a.due_at).toLocaleString("id-ID")}
              </p>
            </div>
            <button className="primary" onClick={() => onAssignment(a)}>
              Kerjakan
            </button>
          </article>
        ))}
        {!assignments.length && <p>Belum ada penugasan.</p>}
      </section>
      {coach && (
        <>
          <section className="panel">
            <h2>Domain kelas</h2>
            {[...domains].map(([name, s]) => (
              <p key={name}>
                {name}: <strong>{Math.round(s.sum / s.total)}%</strong>
              </p>
            ))}
            {!reports.length && <p>Belum ada hasil tersinkron dari peserta.</p>}
          </section>
          <section className="panel">
            <h2>Peserta yang perlu pendampingan</h2>
            {reports
              .filter((r) => r.score_rate < 80)
              .map((r) => (
                <p key={`${r.user_id}-${r.submitted_at}`}>
                  <strong>{r.name}</strong> · {r.score_rate}% ·{" "}
                  {r.domain_performance
                    .filter((d) => d.accuracy < 80)
                    .map((d) => d.domain)
                    .join(", ")}
                </p>
              ))}
          </section>
        </>
      )}
    </main>
  );
}

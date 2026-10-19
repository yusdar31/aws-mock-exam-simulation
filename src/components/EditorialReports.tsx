import { useState } from "react";
import { api } from "../lib/api";
import { useLanguage } from "../i18n/context";
type Report = {
  id: string;
  question_id: string;
  version: number;
  reason: string;
  detail: string;
  status: string;
  resolution?: string;
};
export default function EditorialReports() {
  const { t } = useLanguage();
  const [items, setItems] = useState<Report[]>([]),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false);
  return (
    <section className="panel">
      <h2>{t("Laporan peserta")}</h2>
      <button
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          try {
            const r = await api<{ items: Report[] }>("/questions/reports");
            setItems(r.items);
            setNotice(r.items.length ? "" : "Belum ada laporan.");
          } catch {
            setNotice("Laporan pusat belum tersedia.");
          } finally {
            setBusy(false);
          }
        }}
      >
        {t("Muat laporan peserta")}
      </button>
      {items.map((r) => (
        <article key={r.id} className="review-question">
          <strong>
            {r.question_id} · v{r.version} · {r.reason}
          </strong>
          <p>{r.detail}</p>
          <label>{t('Status laporan')}<select value={r.status} disabled={busy} onChange={async e=>{setBusy(true);const status=e.target.value;try{await api(`/questions/reports/${r.id}`,{method:'PATCH',body:JSON.stringify({status,resolution:r.resolution||''})});setItems(old=>old.map(v=>v.id===r.id?{...v,status}:v));}catch{setNotice('Perubahan belum tersimpan.');}finally{setBusy(false);}}}><option value="pending">{t('Diterima')}</option><option value="in_review">{t('Sedang ditinjau')}</option><option value="resolved">{t('Selesai ditinjau')}</option></select></label>
          <label>{t('Catatan tindak lanjut')}<textarea value={r.resolution||''} maxLength={2000} onChange={e=>setItems(old=>old.map(v=>v.id===r.id?{...v,resolution:e.target.value}:v))}/></label>
          <button disabled={busy} onClick={async()=>{setBusy(true);try{await api(`/questions/reports/${r.id}`,{method:'PATCH',body:JSON.stringify({status:r.status,resolution:r.resolution||''})});setNotice('Catatan tindak lanjut tersimpan.');}catch{setNotice('Perubahan belum tersimpan.');}finally{setBusy(false);}}}>{t('Simpan catatan tindak lanjut')}</button>
          <button
            disabled={busy || r.status === "resolved"}
            onClick={async () => {
              setBusy(true);
              try {
                await api(`/questions/reports/${r.id}`, {
                  method: "PATCH",
                  body: JSON.stringify({ status: "resolved",resolution:r.resolution||'' }),
                });
                setItems((old) =>
                  old.map((x) =>
                    x.id === r.id ? { ...x, status: "resolved" } : x,
                  ),
                );
              } catch {
                setNotice("Perubahan belum tersimpan.");
              } finally {
                setBusy(false);
              }
            }}
          >
            {t(r.status === "resolved" ? "Selesai ditinjau" : "Tandai selesai")}
          </button>
        </article>
      ))}
      {notice && <p role="status">{t(notice)}</p>}
    </section>
  );
}

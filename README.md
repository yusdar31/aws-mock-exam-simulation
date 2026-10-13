# AWS Exam Studio

Latihan AWS CLF-C02 dan SAA-C03 berbasis React, TypeScript, Vite, Supabase Auth, serta Express/SQLite untuk bank soal.

Website: https://aws-mock-exam-simulation.vercel.app. Status aktivasi backend/cloud dan bukti smoke test tersedia di [laporan deployment](docs/DEPLOYMENT-2026-10-13.md).

## Fitur

- Latihan dengan pembahasan setelah menjawab, jeda/resume, serta durasi opsional.
- Simulasi 65 soal: CCP 90 menit, SAA 130 menit; sampling mengikuti kuota domain blueprint, tanpa mengulang ID soal.
- Bank Indonesia/English dimuat per pilihan. Materi arsip tersedia untuk latihan; simulasi memilih soal dengan sumber, tanggal review dan alasan opsi.
- Timer absolut, penyimpanan IndexedDB, submit/expiry satu kali, snapshot versi soal dan waktu per soal.
- Riwayat terpisah per sertifikasi/bahasa/mode, catatan jawaban salah, pengulangan terjadwal, dan latihan domain lemah.
- Akurasi latihan dengan target internal 80%. Tidak dikonversi menjadi scaled score atau kelulusan resmi AWS.
- Admin dengan autentikasi server, review editorial, version check, pencarian/pagination, audit log, impor, draft AI opt-in, serta antrean perubahan lokal ketika offline.
- Coach: kode undangan kelas, penugasan simulasi, rekap domain, peserta yang perlu pendampingan. Memerlukan migrasi Supabase.
- Review hasil per filter/halaman, penjelasan Bahasa Indonesia pada soal English, ekspor PDF atau print-to-PDF, keyboard navigation dan layout mobile.
- Instrumentasi LCP/INP/CLS menggunakan web-vitals; endpoint telemetry opsional.

## Menjalankan lokal

Gunakan Node **22.13+**. Modul SQLite Node 22 memberi pesan experimental; tes dilakukan pada Node 22.19.

```bash
npm ci
npm --prefix backend ci
cp .env.example .env
cp backend/.env.example backend/.env
```

Isi kredensial proyek Supabase pada frontend dan backend. SUPABASE_ANON_KEY adalah key publik; jangan masukkan service-role key ke browser. Pada workspace yang sudah memiliki file .env, pertahankan konfigurasi yang ada dan tambahkan variabel yang diperlukan.

Terminal frontend:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

Terminal backend:

```bash
npm run api
```

Vite memproksikan /api ke localhost:4000. Untuk deployment dengan backend terpisah, isi VITE_API_URL dengan URL HTTPS backend dan ALLOWED_ORIGINS dengan origin frontend. Parameter VITE_* ditanam saat build.

Tanpa konfigurasi cloud, latihan tamu dan penyimpanan perangkat tetap tersedia. Fallback offline mempertahankan bank pusat yang telah di-cache beserta daftar soal yang tidak dipublikasikan; reload shell aplikasi masih memerlukan hosting atau cache browser.

## Database dan peran cloud

Migrasi siap ditinjau di supabase/migrations/20261013_exam_studio.sql. Terapkan melalui Supabase SQL Editor atau CLI pada proyek yang tepat setelah mencadangkan konfigurasi database. Migrasi mengganti policy lama pada tabel aplikasi dengan ownership, termasuk akses coach terbatas kelasnya.

Peran khusus dapat diprovisikan melalui app_metadata.role yang dikelola admin Supabase, atau SQL administratif:

```sql
insert into public.app_roles(user_id,role)
values ('UUID_AKUN_YANG_SUDAH_DIVERIFIKASI','coach')
on conflict(user_id) do update set role=excluded.role;
```

Gunakan admin untuk pengelola bank. Pengguna biasa tidak memiliki izin insert/update pada app_roles. ADMIN_EMAILS dan COACH_EMAILS di backend dapat memberi akses server; untuk fitur kelas, provision juga role database.

Cloud history memakai attempt_id unik dan snapshot. Hasil yang sudah dikirim tidak dapat ditimpa resubmission. Sesi aktif menolak timestamp lebih lama. Ketika cloud belum tersedia, hasil tetap lokal dan antrean dicoba saat login/online kembali.

## Bank pusat dan publikasi

SQLite menggunakan WAL, transaksi dan version check. Pada startup pertama, JSON lama di DATA_DIR/questions.json dimigrasikan tanpa menghapus file asal. Soal lama yang belum memenuhi syarat editorial menjadi draft. Corpus baru disediakan sebagai builtin-seed.json; seed hanya insert jika ID belum ada sehingga edit admin tidak ditimpa.

API utama:

- GET /api/questions/approved?examType=ccp&lang=id&page=1&limit=200: soal publik dan excludedIds.
- GET /api/identity: identitas/peran terverifikasi.
- GET /api/questions: admin, pencarian/filter/pagination.
- PUT /api/questions/:id: edit dengan version wajib.
- POST /api/questions/:id/approve atau /reject: perubahan status dengan version wajib.
- POST /api/questions/import-json, /import-dump-fast: selalu draft.
- POST /api/questions/generate-ai: 1–15 draft SAA English, rate limited.
- POST /api/questions/bulk/approve-drafts: melewati draft yang belum valid.
- GET /api/questions/audit: jejak perubahan admin.

Publikasi memerlukan domain/bahasa/sertifikasi, kunci dan tipe valid, penjelasan tiap opsi, sumber AWS serta tanggal review. Konflik version menghasilkan 409; versi tidak dikirim menghasilkan 428. Dugaan duplikasi perlu acknowledgment editorial.

GEMINI_API_KEY dan GEMINI_MODEL harus diisi untuk generator. Scheduler hanya berjalan jika AI_SCHEDULER_ENABLED=true; tidak ada panggilan AI otomatis pada konfigurasi default.

## Deployment dan backup

Frontend Vercel memakai npm run build dan direktori dist. Backend adalah service terpisah; api/health.js tidak menyediakan endpoint administrasi. Docker frontend menerima build args VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_API_URL dan VITE_METRICS_URL; Nginx mengaktifkan gzip dan cache aset hashed.

Backend perlu filesystem persisten pada DATA_DIR. SQLite di disk sementara hosting dapat hilang saat redeploy; render.yaml tetap tidak membuat disk berbayar secara otomatis. Untuk data lama di DATA_DIR baru, salin questions.json ke lokasi tersebut sebelum startup pertama.

Backup konsisten saat backend berjalan:

```bash
node scripts/backup-bank.mjs
```

Hasil berada di backups/ dan dikecualikan dari Git. Simpan salinan ke media backup terpisah. Untuk restore, hentikan backend, gunakan DATA_DIR baru, salin snapshot menjadi exam.sqlite, lalu jalankan backend dengan direktori tersebut. Jangan menimpa database aktif atau mencampur sidecar WAL lama dengan snapshot baru.

## Pengujian

```bash
npm run lint
npm run build
npm test
npx playwright install chromium
npm run test:browser
```

Unit/API tests memakai SQLite temporary dan PostgreSQL WASM PGlite untuk migrasi/RLS. Browser tests memakai mocked cloud responses; tidak menggunakan akun nyata atau mengubah produksi. CI menjalankan pemeriksaan yang sama. Artefak browser di artifacts/browser/ (ignored).

Corpus ditulis di scripts/curated/; bank dihasilkan oleh scripts/build-banks.mjs. Bank arsip asli dipertahankan. Konten adalah skenario latihan independen dengan tautan sumber, bukan soal resmi AWS; pemeriksaan struktural tidak menggantikan review pedagogis manusia.

## Pengukuran performa

Isi VITE_METRICS_URL dengan endpoint backend /api/metrics untuk pengumpulan, atau biarkan kosong untuk diagnostik sessionStorage lokal (exam-vitals). Ringkasan admin: /api/questions/metrics/summary. Target trafik nyata: LCP <=2,5 detik, INP <=200 ms, CLS <=0,1 pada persentil ke-75. Build size dan browser lokal tidak membuktikan target produksi.

Referensi: [blueprint CCP](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html), [blueprint SAA](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html), [Supabase RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Web Vitals](https://web.dev/articles/vitals).

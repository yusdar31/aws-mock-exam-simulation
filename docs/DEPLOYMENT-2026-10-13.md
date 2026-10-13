# Deployment Vercel — 13 Oktober 2026

Frontend produksi aktif di https://aws-mock-exam-simulation.vercel.app.

Pembaruan berikutnya menambahkan pemilihan bahasa Indonesia/English pada source commit `94d5314`, deployment `dpl_GvB6ncDJc1pwMdco4piGASKjrfBt`. Versi tersebut sudah dipromosikan dan lulus enam pemeriksaan bahasa pada domain publik; lihat [laporan bahasa](LANGUAGE-2026-10-13.md). Informasi di bawah mencatat rilis awal.

- Deployment ID: `dpl_7EWQGL1vZZNbQS7bhykgGrvUZ5rd`, status `READY`, target `production`.
- Source commit: `fc4197a`, termasuk implementasi `318f80b` dan `87a43f7`.
- URL deployment: https://aws-mock-exam-simulation-l2yu4cycv.vercel.app (mengikuti proteksi deployment Vercel).
- Dashboard: https://vercel.com/andiyusdaralimran-gmailcoms-projects/aws-mock-exam-simulation/7EWQGL1vZZNbQS7bhykgGrvUZ5rd.

## Konfigurasi dan publikasi

Konfigurasi Supabase produksi yang sudah ada dipertahankan dan cocok dengan konfigurasi lokal. `vercel.json` menjalankan `npm run build` agar bank soal selalu dihasilkan sebelum build. `.vercelignore` mengecualikan environment, backend lokal, database, backup, artefak, dan Terraform. Pemeriksaan manifest unggahan tidak menemukan file environment, database, atau private key.

Deployment dibuat dengan `--prod --skip-domain`, health dan hash aset diverifikasi melalui akses Vercel, kemudian dipromosikan dengan `vercel promote`. Domain publik diverifikasi tanpa autentikasi Vercel. Tidak menjalankan push GitHub.

## Verifikasi

Build lokal dan build Vercel lulus; lint lokal lulus. Smoke test domain publik selesai pada 14:00 WIB dengan tujuh kelompok pemeriksaan:

1. HTML produksi dan masuk sebagai tamu.
2. Health mengembalikan HTTP 200 dengan JSON `status: ok`.
3. Header keamanan serta cache immutable untuk aset dengan hash.
4. Latihan tanpa batas waktu serta jawaban bertahan setelah reload/resume.
5. Tidak ada overflow horizontal pada lebar 360, 390, dan 768 px.
6. Submit, hasil, dan riwayat tersimpan pada perangkat.
7. Simulasi SAA Indonesia memuat 65 soal dengan timer aktif.

Tidak ada error JavaScript. Bukti JSON dan screenshot berada di `artifacts/deployment/`, dikecualikan dari Git dan deployment. Pemeriksaan memakai browser baru sebagai tamu; tidak membuat akun atau menulis data pengguna ke Supabase.

## Bagian yang masih perlu diaktifkan

Deployment ini mempublikasikan frontend dan `api/health.js`. `VITE_API_URL` belum dikonfigurasi; `/api/questions/approved` belum tersedia pada Vercel dan frontend menggunakan bank bawaan. Backend admin/bank pusat memerlukan host terpisah dengan `DATA_DIR` persisten, autentikasi, serta CORS untuk domain frontend.

Migrasi Supabase `supabase/migrations/20261013_exam_studio.sql` dan provisioning role belum dijalankan pada produksi. Sinkronisasi cloud dan fitur kelas memerlukan langkah tersebut. Login menggunakan konfigurasi Supabase yang sudah ada; alur login akun nyata belum diuji dalam smoke test ini. Pengukuran p75 Core Web Vitals memerlukan trafik produksi.

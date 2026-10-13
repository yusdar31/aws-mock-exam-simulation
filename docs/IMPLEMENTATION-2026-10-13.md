# Implementasi audit — 13 Oktober 2026

Perubahan lokal menyelesaikan perbaikan fitur, desain, dan performa dari audit. Frontend kini telah dipublikasikan ke Vercel; backend dan migrasi Supabase produksi masih perlu diaktifkan. Lihat [laporan deployment](DEPLOYMENT-2026-10-13.md).

## Hasil

| Area         | Implementasi                                                                                                                                                                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Sesi ujian   | Untimed tidak auto-submit; deadline absolut; submit/expiry idempotent; validasi sesi/bank kosong; IndexedDB, jeda/resume dan penyimpanan inkremental berdasarkan aksi serta checkpoint 15 detik                                                                                                        |
| Skor         | Akurasi latihan, target internal 80%, tanpa konversi scaled score atau klaim kelulusan resmi                                                                                                                                                                                                           |
| Simulasi     | 65 soal dengan kuota blueprint CCP/SAA, Indonesia/English, Fisher–Yates, validasi ketersediaan per domain dan dukungan single/multiple                                                                                                                                                                 |
| Materi       | Manifest 707 entri: CCP ID 227, CCP EN 328, SAA ID 70, SAA EN 82. Corpus baru tersedia sebagai 70 varian per kombinasi sertifikasi/bahasa. Sebagian konsep dipakai lintas sertifikasi; angka bukan jumlah skenario unik global. Arsip lama tetap untuk latihan dan diberi penanda belum direview penuh |
| Pembelajaran | Snapshot versi/jawaban/waktu soal, riwayat berfilter/pagination, catatan soal salah, pengulangan terjadwal, latihan domain lemah sesuai sertifikasi/bahasa                                                                                                                                             |
| Admin        | Token/peran terverifikasi di backend, rate limit, editorial checks, optimistic versions, audit log, pagination, antrean offline yang jelas dan retry                                                                                                                                                   |
| Sumber bank  | Seed tidak menimpa edit; versi pusat menggantikan bawaan; soal tidak dipublikasikan dikecualikan; cache mempertahankan edit/exclusion ketika API offline                                                                                                                                               |
| Coach        | Undangan kelas, penugasan simulasi, rekap domain dan peserta perlu pendampingan; RLS membatasi akses pada kelas pemilik                                                                                                                                                                                |
| UI           | Layar fokus pada soal, navigator mobile collapsible, footer dua baris, target sentuh dan teks lebih besar, label/focus/status aksesibel, routing hash, bahasa antarmuka Indonesia                                                                                                                      |
| Performa     | Screen/bank/PDF lazy, timer terisolasi, dua keluarga font, IndexedDB berindeks, query cloud berhalaman, SQLite WAL/transaksi, gzip/cache Nginx dan telemetry Web Vitals                                                                                                                                |

## Bukti verifikasi

- Production build lulus. Lint tanpa error/warning.
- 25 unit/API/PostgreSQL-RLS tests lulus (termasuk tes telemetry tambahan).
- 13 skenario browser lulus: untimed, reload/resume, mobile 360/390/768 tanpa overflow, manual submit, download PDF, SAA ID 65 soal, expiry sekali, review riwayat, notebook, penjelasan ID pada review English, antrean admin, coach, cache versi pusat/exclusions.
- Backend aktual dapat startup tanpa kunci AI. Endpoint publik CCP ID mengembalikan 70 approved dengan metadata bahasa/sertifikasi.
- Backup SQLite memakai VACUUM INTO saat server berjalan: jumlah soal live dan snapshot sama-sama 337; integrity_check=ok. JSON asal 57 soal tetap utuh; corpus baru 280 entri di bank pusat.
- Artefak screenshot/PDF berada di artifacts/browser/ (tidak dilacak Git). Backup berada di backups/ (tidak dilacak Git).
- Tes cloud menggunakan mock/PG lokal, tidak menulis data Supabase produksi. Nginx/Docker dan CI disiapkan; belum dijalankan pada Docker/GitHub dalam sesi ini.

## Ukuran bundle

JavaScript inti (entry + modulepreload): sekitar 430 KB mentah / 124 KB gzip, dibanding sebelumnya 760 KB / 197 KB gzip. Penurunan sekitar 44% mentah dan 37% gzip. Halaman auth dan telemetry menambah chunk kecil terpisah; font eksternal tidak termasuk.

CSS turun dari 43,84 KB menjadi 15,27 KB (gzip 7,85 menjadi 4,03 KB). Bank dipisah per kombinasi bahasa/sertifikasi. PDF tetap chunk sekitar 936 KB yang hanya dimuat saat ekspor; unduh PDF telah diuji. Ini ukuran build, bukan bukti p75 Core Web Vitals produksi. Target produksi memerlukan pengumpulan trafik nyata.

## Pekerjaan eksternal yang perlu diterapkan

1. Review schema/backup Supabase yang sebenarnya, lalu terapkan supabase/migrations/20261013_exam_studio.sql. Migrasi sudah lulus uji PG lokal untuk ownership, role, undangan dan report kelas serta proteksi resubmission/stale session.
2. Provision app_roles untuk akun admin/coach; konfigurasi backend SUPABASE_URL/ANON_KEY dan ALLOWED_ORIGINS.
3. Konfigurasi DATA_DIR persisten pada host backend. File Render lama tetap plan free; tidak ada disk/layanan berbayar dibuat. SQLite pada filesystem ephemeral bukan penyimpanan tahan redeploy.
4. Deploy backend/frontend dengan VITE_API_URL serta env auth; telemetry opsional memakai VITE_METRICS_URL.
5. Jalankan smoke test pada deployment dan ukur p75 LCP/INP/CLS. Review pedagogis corpus tetap perlu dilakukan sebagai proses editorial berkelanjutan.

Detail setup dan perintah ada di README.md. Frontend dipublikasikan pada sesi deployment berikutnya, sebagaimana dicatat dalam laporan deployment; tidak menjalankan push GitHub.

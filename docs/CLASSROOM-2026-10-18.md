# Ujian bersama untuk AWS re/Start

Kebutuhan yang dipilih pengguna: nama + kode sesi tanpa akun, paket/urutan soal yang sama, urutan A/B/C/D sama, mulai dan berakhir bersama, jawaban serta nilai tiap peserta terpisah.

Fitur penugasan batch yang lama tetap tersedia. Ujian bersama memiliki halaman sendiri di `/#live`, dapat dibuka dari halaman masuk, menu Kelas untuk tamu, atau tautan pada halaman Kelas akun.

## Aktivasi server (satu kali)

Jalankan seluruh isi `supabase/migrations/20261018_live_classroom.sql` melalui SQL Editor pada proyek Supabase yang dipakai `VITE_SUPABASE_URL`. Migrasi ini mandiri: membuat dua tabel kelas, fungsi RPC dan fungsi grading, serta menutup akses tabel langsung untuk anon/authenticated. Tidak mengubah tabel riwayat, bank soal, kelas batch atau akun lama.

Pada implementasi awal, terminal hanya memiliki kunci publik dan pemeriksaan RPC `health` mengembalikan 404 / `PGRST202`. Administrator kemudian menjalankan migrasi melalui SQL Editor. Pada 19 Oktober 2026, RPC produksi terverifikasi HTTP 200 dengan `ready: true`. Sebelum migrasi, UI menjelaskan bahwa layanan belum aktif dan menonaktifkan pembuatan/gabung sesi.

Setelah SQL sukses, buka `/#live` dan klik **Coba sinkronkan**, atau muat ulang. Tidak perlu menaruh service-role key di frontend. Petunjuk resmi menjalankan fungsi tersedia di [dokumentasi Supabase](https://supabase.com/docs/guides/database/functions).

## Demonstrasi kelas

1. Instruktur membuka **Buat sesi sebagai instruktur**, memilih sertifikasi, bahasa soal, jumlah (1–100) dan durasi (1–180 menit).
2. Bagikan kode delapan karakter atau tautan peserta. Peserta mengisi nama; nama yang sama perlu diberi pembeda. Peserta lain tidak menerima roster atau jawaban teman.
3. Tunggu peserta masuk, lalu klik **Mulai untuk semua peserta**. Ada hitung mundur lima detik. Peserta baru tidak dapat masuk setelah sesi dimulai; peserta yang sudah bergabung dapat melanjutkan sesi yang sama di browsernya.
4. Semua peserta mendapat snapshot soal yang sama, termasuk urutan opsi. Peserta bebas berpindah nomor dan menjawab secara mandiri. Timer bersama memakai deadline dari database; jam lokal yang berbeda tidak memberi waktu tambahan.
5. Jawaban disimpan otomatis. Jika koneksi terputus, tetap buka halaman sampai status tersimpan kembali. Waktu tetap berjalan; hasil hanya memakai jawaban yang diterima server sebelum deadline. Reload memulihkan jawaban yang sudah diterima server.
6. Peserta dapat mengumpulkan lebih awal dan jawabannya terkunci. Instruktur melihat progres/status serta soal dan opsi yang sama melalui navigator host. Navigasi host tidak memindahkan posisi peserta. Kunci dan jawaban teman tidak dikirim ke peserta selama ujian.
7. Saat semua peserta sudah mengumpulkan, layar host yang tersambung otomatis memanggil penutupan sesi dan menampilkan peringkat. Jika host sempat terputus, finalisasi dilakukan saat host kembali tersambung; deadline database tetap berlaku. Host juga dapat mengakhiri sesi lebih awal atau membiarkan deadline menutupnya otomatis.
8. Setelah ditutup, peringkat diurutkan menurut jumlah jawaban benar tertinggi. Skor seri mendapat peringkat sama (contoh 1, 1, 3), urutan nama hanya merapikan posisi seri. CSV mengikuti urutan dan menyertakan kolom peringkat.
9. Pembahasan kelas pada layar host menampilkan soal, seluruh opsi, kunci, penjelasan, jumlah pemilih per opsi, serta pilihan dan status benar/salah/belum dijawab setiap peserta. Soal pilihan ganda hanya benar jika seluruh pilihan tepat. Host dapat melakukan review terlebih dahulu, kemudian menekan **Buka hasil & pembahasan** untuk membagikan hasil pribadi kepada peserta.

**Sesi di perangkat ini** menyimpan akses untuk melanjutkan, termasuk akses instruktur setelah meninggalkan halaman. Gunakan browser yang sama; tautan peserta tidak berisi kunci instruktur. Sesi baru memakai kunci baru. Akses sesi kedaluwarsa setelah tujuh hari; migrasi ini tidak memasang penghapusan data otomatis.

Ini alur demonstrasi berbasis kode dan kunci acak per perangkat, bukan verifikasi identitas peserta melalui akun. Pengujian beban 200 peserta belum dilakukan; 200 adalah batas yang ditegakkan fungsi, bukan kapasitas kelas yang sudah dibuktikan.

## Teknis dan validasi

- Database menyimpan satu paket soal yang dibekukan. Payload peserta tidak menyertakan kunci/pembahasan sebelum instruktur membuka hasil.
- Setiap peserta memakai kredensial acak sendiri, jawaban dan revision sendiri. Revisi basi ditolak; submit idempotent dan jawaban yang sudah dikumpulkan tidak dapat diubah.
- Deadline, validasi opsi dan grading ditegakkan fungsi database. Peserta tidak mengirim nilai dari browser. Client tidak membuat deadline baru ketika refresh.
- Polling 1,5 detik memperbarui daftar dan progres; timer diturunkan dari waktu server dengan jam monotonic browser.
- SQL diuji menggunakan PGlite/PostgreSQL, termasuk migrasi berulang, hak akses, dua peserta, start bersama, pilihan identik, revisi basi, opsi palsu, submit berulang, lewat deadline dan pelepasan kunci.
- Tes browser lokal memakai tiga konteks browser dan menjalankan fungsi SQL sebenarnya melalui adapter HTTP tes. Pengujian produksi terpisah pada 19 Oktober memakai satu sesi uji dan dua peserta tamu, tanpa membuat akun atau riwayat ujian cloud.
- Paket tes unit dibuat berurutan karena dua instance PostgreSQL WASM paralel sempat kehabisan alokasi memori pada Windows. Setelah penyesuaian, 39 tes lulus.
- Build dan lint lulus. Seluruh browser regresi lama lulus. Hasil skenario kelas dan tiga scan axe ada di `artifacts/classroom/` bersama screenshot dan CSV. Tiga scan kelas tidak menemukan violations/incomplete pada kondisi yang diuji.

## Status rilis

Frontend sudah dipublikasikan pada https://aws-mock-exam-simulation.vercel.app/#live, deployment `dpl_5cUEDPtLzyDbLcpDTyTD98mT4N5c` (READY), URL versi https://aws-mock-exam-simulation-ro3g1ik2u.vercel.app. Versi sebelumnya untuk rollback: `dpl_EApsUWSZuUoksDYcMmKnwCEeRkgp`.

Manifest 118 berkas diperiksa; environment, kredensial, data backend, backup, Terraform dan artifacts tidak diunggah. Health serta entry `index-DfFvhRy0.js` dan CSS `index-Cc96EwUV.css` diperiksa sebelum domain dipromosikan. Alias domain utama diverifikasi kembali setelah promosi.

Validasi akhir: 39 tes unit/database; 41 skenario browser regresi yang sudah ada dan 8 kelompok tes kelas baru lulus. Tiga scan axe kelas tidak menemukan violations atau incomplete. Pada produksi, 3 pemeriksaan entry kelas, 6 bahasa, dan 7 penggunaan lama lulus tanpa error JavaScript; pemeriksaan penggunaan lama tidak menemukan respons gagal dari origin aplikasi.

**Server ujian bersama aktif dan alur produksi terverifikasi pada 19 Oktober 2026.** Setelah administrator menjalankan SQL, pemeriksaan RPC `health` menghasilkan HTTP 200 / `ready: true`. Frontend yang sudah terpasang langsung dapat digunakan tanpa deployment ulang.

Smoke test menggunakan website dan Supabase produksi, tanpa adapter/mocking jaringan: satu instruktur dan dua peserta tamu pada tiga konteks browser terpisah. Empat kelompok pemeriksaan lulus:

1. Pembuatan sesi, bergabung dengan nama/kode tanpa akun, roster dua peserta, dan soal tersembunyi selama menunggu.
2. Paket soal/urutan opsi/deadline identik; timer tetap selaras dengan jam perangkat yang dimajukan 10 menit dan dimundurkan 8 menit; kunci tidak dikirim sebelum pembahasan dibuka.
3. Pilihan peserta berbeda tersimpan secara mandiri, pulih setelah refresh, dan tetap ada setelah mengganti bahasa tampilan.
4. Submit awal hanya mengunci peserta tersebut; instruktur mengakhiri sesi bersama, mengekspor CSV berisi kedua peserta, dan membuka pembahasan. Layout peserta tidak meluber pada lebar 320/375/768/1440 px. Tidak ada error JavaScript.

Sesi bernama `Uji aktivasi AWS re/Start 2026-10-19` sudah ditutup. Data sesi uji tetap tersimpan sesuai kebijakan penyimpanan saat ini; tidak membuat akun atau riwayat ujian cloud. Script, hasil JSON, CSV, dan screenshot produksi tersimpan secara lokal di `artifacts/classroom-production-2026-10-19/`. Pengujian ini memverifikasi tiga konteks browser, belum menguji beban kelas 200 peserta. Metadata rilis dan hasil pemeriksaan lokal sebelumnya ada di `artifacts/classroom/`.

## Pembaruan host, peringkat dan review — 19 Oktober 2026

Implementasi memakai RPC yang sudah aktif, tanpa perubahan skema atau migrasi SQL tambahan. Host menutup sesi secara idempotent saat polling mendeteksi semua peserta sudah submit; kunci dan data review tetap berasal dari respons server setelah sesi ditutup. Peringkat serta rincian jawaban peserta hanya tampil untuk host. Hasil pribadi peserta tetap memerlukan pelepasan review oleh host.

Validasi lokal: build dan lint lulus; 41 tes unit/database lulus, termasuk pengurutan seri dan penilaian pilihan ganda. Sepuluh kelompok tes browser kelas lulus dengan fungsi SQL sebenarnya: tampilan soal host, perpindahan nomor mandiri, finalisasi setelah host tersambung kembali, peringkat 1/1/3 untuk skor 3/3/0, jawaban benar/salah/kosong, privasi sebelum review dibuka, refresh, bahasa Indonesia/English, dan layout host 320/375/768/1440 px. Empat scan axe pada kondisi yang diuji tidak menemukan pelanggaran atau pemeriksaan yang belum tuntas. Artefak lokal ada di `artifacts/classroom/` dan `artifacts/classroom-host-2026-10-19/`.

Pembaruan sudah dipublikasikan ke domain utama, deployment `dpl_9czuwJAS5en1vAJMGNnsDrW6ZYBX` (READY), URL versi https://aws-mock-exam-simulation-bh6ybjp5g.vercel.app. Versi rollback sebelumnya adalah `dpl_5cUEDPtLzyDbLcpDTyTD98mT4N5c`. Health dan entry JS/CSS diperiksa pada URL versi sebelum promosi, lalu alias produksi diverifikasi. Manifest 121 entri diperiksa tanpa isi environment, kredensial, artifacts, backend, backup database, atau Terraform.

Enam tes regresi bahasa lokal lulus. Pada produksi, tiga kelompok pemeriksaan memakai host dan dua peserta tamu dengan jaringan Supabase sebenarnya: opsi host identik dengan peserta dan navigasi mandiri; host kembali setelah semua submit lalu otomatis menampilkan peringkat 100%/0%; review benar/salah/kosong, CSV berurutan, refresh, dua bahasa, empat lebar layar, dan pelepasan review peserta semuanya lulus tanpa error JavaScript. Sesi pengujian fitur host sudah ditutup. Hasil, screenshot, CSV, metadata deployment dan script tersimpan di `artifacts/classroom-host-2026-10-19/`.

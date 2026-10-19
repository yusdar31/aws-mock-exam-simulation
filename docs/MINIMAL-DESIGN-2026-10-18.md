# Desain minimal dan navigator soal

Revisi berdasarkan masukan pengguna setelah rilis UI UX Pro Max: tampilan harus lebih minimal, tidak terasa seperti template hasil generate, dan navigator soal perlu lebih besar serta tidak menempel di pojok layar.

## Perubahan

- Palet utama putih hangat/abu arang, radius kecil, tanpa bayangan kartu atau aksen biru dekoratif. Warna semantik benar/salah/flag dan fokus tetap tersedia.
- Header dan halaman masuk menjadi permukaan netral. Navigasi memakai teks; panel hero gelap, bentuk dekoratif, ikon ringkasan yang berulang, serta nomor langkah dihapus.
- Ringkasan belajar memakai satu baris statistik dan garis pemisah. Pengaturan jalur/mode menjadi bagian halaman, mengurangi kartu bertumpuk.
- Area ujian terpusat dengan lebar maksimum 1280px, padding dan gap 32px. Navigator desktop selebar 320px, bukan sidebar 248px yang menempel pada tepi layar.
- Tombol nomor mempunyai aspect-ratio 1:1, ukuran sekitar 48px pada desktop, dan minimum 44px dalam grid responsif. Navigator 65 soal memiliki area scroll dan tombol review yang tetap dapat dijangkau.
- Navigator ponsel/tablet dibuka lewat header sampai lebar 900px. Setelah memilih nomor, panel menutup dan fokus menuju pertanyaan. Ini juga memperbaiki hilangnya fokus ketika memilih soal yang sedang aktif.
- Progres jawaban tersedia sebagai progress native dengan label Indonesia/English.

## Validasi

Build TypeScript/Vite dan lint lulus. 34 tes unit/API/RLS serta 40 skenario browser lokal lulus, termasuk dua skenario tambahan untuk ukuran/perilaku navigator. Navigasi sampai nomor 65, target persegi minimal 44px, pemulihan fokus setelah memilih nomor yang sama, dan reflow mobile/tablet diverifikasi. Screenshot sesi pendek dan simulasi penuh diperiksa.

Sembilan pemindaian axe lokal dan produksi tidak menemukan violations. Pada kedua lingkungan, kontras teks ringkasan mobile ditandai incomplete karena elemen fixed berada di depan konten lain; delapan kondisi lainnya selesai tanpa incomplete. Pemeriksaan warna computed produksi mengonfirmasi teks `rgb(32,33,36)` di atas putih opak, rasio 16,10:1. Hasil otomatis ini tidak diklaim sebagai sertifikasi WCAG.

## Publikasi

- Website: https://aws-mock-exam-simulation.vercel.app.
- Deployment: `dpl_4dAKy424kvC8V24kG1gfoRTsbW8Y`, status READY, sudah dipromosikan dan alias diverifikasi ulang.
- URL versi: https://aws-mock-exam-simulation-ab3125ccb.vercel.app.
- Versi sebelumnya untuk rollback: `dpl_GvvJjQSFTA8EAHZkyPFkadyZxkXt`, https://aws-mock-exam-simulation-hp6bl11j1.vercel.app.
- Manifest 112 berkas diperiksa; tidak menyertakan environment, private key, database, backend, artifacts, backup atau Terraform.
- Sebelum promosi: health, bank CCP English, entry `index-5QPerQ38.js` dan CSS `index-DiM-lGrh.css` pada URL versi lulus pemeriksaan.
- Setelah promosi: 21 kelompok pemeriksaan produksi lulus (8 desain/navigator, 6 bahasa, 7 penggunaan/API) tanpa error JavaScript. Pemeriksaan penggunaan juga tidak menemukan respons gagal dari origin aplikasi.

Tes produksi menggunakan tamu baru; tidak membuat akun atau riwayat cloud. Batas layanan editorial/cloud tetap mengikuti laporan deployment sebelumnya. Tidak membuat commit, push, migrasi atau perubahan kredensial. Pembaruan laporan setelah deployment hanya mengubah dokumentasi lokal.

Bukti disimpan di `artifacts/minimal-design/`; panduan halaman ujian ada di `design-system/aws-exam-studio/pages/exam.md`.

## Koreksi ruang kosong pada monitor lebar

Masukan berikutnya menunjukkan gutter besar pada sisi kiri/kanan dan scrollbar di dalam halaman, pada screenshot 1890px. Penyebabnya adalah pembatas 1280px pada scroll container seluruh ujian, ditambah cap 1000px pada kolom soal. Keduanya dihapus; workspace memakai lebar viewport dengan padding/gap 24px. Navigator tetap 320px dengan tombol persegi, dan offset sticky diperbaiki agar tidak menambah jarak vertikal lagi.

Build, lint dan sembilan kelompok tes desain lokal lulus. Regresi baru memeriksa gutter, jarak antar kolom serta tombol navigator pada 1024/1440/1890/2560px. Skenario GCP 20 soal dengan antarmuka English pada 1890×774px ditambahkan agar mencerminkan screenshot pengguna. Bukti koreksi disimpan terpisah di `artifacts/exam-layout-fix/`.

Koreksi sudah aktif melalui deployment `dpl_4oRCTPMqsgaJhKtkvfGjk9VgpH4D` (READY), URL versi https://aws-mock-exam-simulation-n3bwyuqv1.vercel.app. Health serta hash CSS `index-DDRzC8L3.css` dan entry `index-D9rJbtaJ.js` diverifikasi sebelum promosi. Domain utama diverifikasi ulang setelah promosi; 9 kelompok tes desain dan 6 skenario bahasa produksi lulus tanpa error JavaScript. Screenshot `production/gcp-1890.png` memperlihatkan hasil pada ukuran layar yang dilaporkan. Versi sebelumnya untuk rollback: `dpl_4dAKy424kvC8V24kG1gfoRTsbW8Y`. Tidak mengubah data sesi, konfigurasi cloud atau kredensial.

## Jarak kontrol latihan

Tombol keyakinan dibungkus flex dengan gap 8px, dan fieldset tidak lagi mewarisi margin atas 24px. Bagian feedback memakai gap vertikal 16px, sehingga tombol pemeriksaan jawaban tidak menempel pada pilihan keyakinan. Area simpan/catatan/laporan memakai gap 12px tanpa margin bertumpuk pada details; area pemisah tetap memakai margin 24px dan padding 20px.

Build dan lint lulus. Pemeriksaan browser lokal dan produksi pada 375/1440px mengonfirmasi jarak 16px dan 12px tersebut, tanpa overflow atau error JavaScript. Pilihan keyakinan, pembahasan, bookmark, dan pembukaan catatan tetap berfungsi. Bukti dan screenshot dipotong sesuai area yang dilaporkan ada di `artifacts/control-spacing/`.

Sudah aktif melalui `dpl_EApsUWSZuUoksDYcMmKnwCEeRkgp`, READY, https://aws-mock-exam-simulation-kyq08zezn.vercel.app. Health dan hash aset diperiksa sebelum promosi; domain utama diverifikasi ulang setelahnya. Versi rollback sebelumnya: `dpl_4oRCTPMqsgaJhKtkvfGjk9VgpH4D`.

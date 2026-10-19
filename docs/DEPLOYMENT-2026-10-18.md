**Deployment produksi — 18 Oktober 2026**

Perbaikan pada [laporan implementasi](IMPROVEMENTS-2026-10-18.md) sudah aktif di https://aws-mock-exam-simulation.vercel.app setelah pengguna menyetujui publikasi.

- Deployment: `dpl_fZ1pNo4VKmLtJUP9MbtyKmH1g93Q`, target production, status READY.
- URL versi: https://aws-mock-exam-simulation-dafmos48j.vercel.app.
- Build dibuat pada 18 Oktober 2026 pukul 18:19 WIB menggunakan working tree yang telah diuji, termasuk perubahan GCP yang sudah ada. Tidak membuat commit atau push GitHub.
- Versi sebelumnya untuk rollback: `dpl_CLjQxvEgUwQtepNbi3U45wgzPVLL`, https://aws-mock-exam-simulation-hyyqlbmc8.vercel.app.

**Pemeriksaan sebelum publikasi**

Manifest unggahan berisi 103 berkas, sekitar 2,11 MB. Pemeriksaan tidak menemukan environment, private key, database, direktori backend, backup, Terraform, atau artefak tes. Empat bank AWS dan katalog sertifikasi yang diperlukan gateway ada dalam unggahan.

Gateway diperbaiki agar mengimpor bank JSON yang ikut dideploy, sehingga tidak bergantung pada direktori backend yang dikecualikan oleh `.vercelignore`. Lima tes gateway/kuota/provider yang terkait lulus setelah penyesuaian ini. Environment produksi yang sudah ada dipertahankan; tidak menambah atau mengganti kredensial.

Deployment dibuat dengan `--prod --skip-domain`. Build Vercel lulus dan menyediakan fungsi `api/health` serta `api/questions/[...path]`. Health, HTML dengan entry `index-D4aT2CzK.js`, dan bank CCP English diperiksa pada URL versi melalui akses Vercel sebelum domain utama dipindahkan. Setelah pemeriksaan lulus, deployment dipromosikan dan resolusi domain utama diverifikasi ulang.

**Hasil produksi**

Tujuh kelompok pemeriksaan penggunaan dan enam skenario bahasa lulus pada domain publik:

1. Health mengembalikan 200. Gateway bank CCP/SAA Indonesia/English mengembalikan 200, `source: release`, versi soal 2, dan total 138 CCP / 140 SAA per bahasa. GCP English yang belum tersedia ditolak dengan 400.
2. Tampilan desktop baru dan pemuatan bank rilis berhasil; endpoint approved yang sebelumnya 404 kini tersedia.
3. Nama GCP, tautan Google Cloud, bahasa yang tersedia, ukuran simulasi dan status kesiapan konsisten.
4. Tombol mulai mobile terlihat tanpa scroll; jumlah soal pecahan ditolak sebelum mulai; Back dan lanjutkan menjaga ID percobaan serta jawaban.
5. Submit tamu, hasil, riwayat lokal dan unduhan PDF berhasil.
6. Materi tersimpan, halaman rencana belajar dan preferensi mode gelap bertahan setelah reload.
7. Lobby tidak mengalami overflow horizontal pada 320, 360, 390, 768 dan 1366 piksel.

Enam tes bahasa memeriksa preferensi setelah reload, sinkronisasi preferensi antartab, pergantian bahasa tanpa perubahan soal/jawaban/flag/deadline, tampilan ujian mobile, hasil/riwayat, serta bahasa soal yang terpisah dari bahasa UI.

Tidak ditemukan error JavaScript pada kedua kelompok tes. Tes penggunaan baru juga tidak menemukan respons gagal untuk aset/API yang diminta browser dari origin aplikasi. Pemeriksaan memakai konteks browser baru sebagai tamu; tidak membuat akun, mengirim laporan soal nyata, atau menulis riwayat cloud pengguna.

Bukti lokal disimpan di `artifacts/deployment-2026-10-18/`: manifest unggahan, metadata deployment dan versi sebelumnya, hasil gateway sebelum promosi, `production-results.json`, `language-results.json`, screenshot desktop/mobile, serta PDF hasil. Artefak dikecualikan dari Git dan deployment.

**Ketersediaan layanan**

Bank rilis publik sudah aktif. Backend editorial persisten belum dihubungkan melalui `QUESTION_API_ORIGIN`/`VITE_API_URL`; perubahan admin dan pengiriman laporan nyata tetap memerlukan layanan tersebut. UI mempertahankan laporan yang gagal dikirim sebagai pending lokal. Migrasi/provisioning Supabase dan pengujian akun nyata bukan bagian dari publikasi ini.

GCP menyediakan latihan Indonesia; English dan simulasi GCP masih menunggu review materi. Catatan, bookmark, rencana belajar, pengaturan baca, dan hasil tamu tersimpan pada browser; tidak diklaim tersinkron ke cloud.

Jika rollback diperlukan, versi sebelumnya masih tercatat dan dapat dipromosikan kembali melalui Vercel. Tidak ada rollback yang dijalankan pada publikasi ini karena pemeriksaan produksi lulus.

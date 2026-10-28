# Penambahan soal ACE — 28 Oktober 2026

Ditambahkan 24 soal latihan orisinal berbahasa Indonesia setelah menelaah 20 contoh yang diberikan pengguna. Contoh dipakai sebagai acuan struktur skenario dan pilihan solusi, bukan disalin sebagai soal resmi. Metadata formulir dan identitas pribadi tidak dimasukkan ke bank.

## Bentuk soal

- Skenario 29–43 kata: kebutuhan operasional, batasan, lalu keputusan yang diminta.
- 22 soal satu jawaban dengan empat opsi; dua soal pilih dua jawaban dengan lima opsi.
- Pilihan, pembahasan jawaban benar, dan alasan setiap opsi seluruhnya berbahasa Indonesia; nama produk, role, dan parameter teknis dipertahankan.
- ID baru `ace-scenario-id-20261028-001` sampai `024`, versi 1. Posisi jawaban bervariasi.
- Setiap soal memiliki referensi dokumentasi Google Cloud yang diperiksa pada tanggal penambahan.

## Cakupan tambahan

| Domain                       | Tambahan | Total soal reviewed |
| ---------------------------- | -------: | ------------------: |
| Pengaturan lingkungan        |        4 |                  37 |
| Perencanaan dan implementasi |        8 |                  64 |
| Operasi                      |        7 |                  65 |
| Akses dan keamanan           |        5 |                  29 |
| **Total**                    |   **24** |             **195** |

Jumlah katalog menjadi 295: 195 soal reviewed dan 100 arsip. Distribusi pool tidak harus sama dengan bobot ujian; simulasi 50 soal tetap memakai kuota domain 10/15/15/10.

Topik baru mencakup cakupan biaya job BigQuery, kuota kapasitas, IAM folder, pengaktifan API, export subscription BigQuery, minimum instance Cloud Run, CronJob, NFS terkelola, partition pruning, CIDR peering, transfer URL, DNS privat, lifecycle dengan prefix, canary MIG, korelasi log, diagnosis kuota, dead-letter topic, notification channel, soft delete, authorized view, impersonation, OAuth scope VM, signed URL, serta penonaktifan key.

## Pemeriksaan editorial

Pencarian kemiripan kata dan pemeriksaan skenario lama digunakan untuk menemukan duplikasi konsep yang terlalu dekat. Lima draf diganti dengan keputusan operasional berbeda. Tidak ada klaim bahwa soal ini merupakan soal ujian resmi atau memiliki tingkat kesulitan yang sudah divalidasi pada ujian nyata.

Beberapa detail penting ditulis eksplisit agar jawaban tidak ambigu:

- Budget bukan pembatas vCPU atau penghentian otomatis resource.
- Proyek job menentukan biaya kueri BigQuery on-demand; dataset sumber menentukan biaya penyimpanannya.
- Analis authorized view sudah memiliki izin menjalankan job; akses langsung tabel sumber tidak diberikan.
- Lifecycle berjalan asinkron; batas percobaan dead-letter bersifat best effort.
- Public access prevention tidak menghalangi signed URL yang menggunakan otorisasi identitas penandatangan.
- Penonaktifan key dapat dibatalkan, tetapi tidak mencabut token berumur pendek yang sudah diterbitkan.

Seluruh 271 soal sebelumnya dipertahankan identik, diperiksa dengan fingerprint SHA-256 dalam pengujian. Bank AWS juga dipertahankan. Pengerjaan menggunakan worktree terpisah karena ada pekerjaan CCP yang berlangsung bersamaan.

## Validasi

`npm run build` berhasil dan seluruh 60 pengujian Node lulus setelah digabungkan dengan pembaruan CCP terbaru. Uji browser ACE lokal juga lulus: katalog cohort baru, review dua jawaban benar, lebar mobile, dua paket simulasi tanpa tumpang tindih, serta preservasi jawaban dan waktu ketika bahasa tampilan diganti. Tes Node mencakup schema, pembahasan per opsi, preservasi bank lama, serta API release dengan pagination tujuh halaman. Seluruh 24 URL sumber memberikan HTTP 200.

Referensi per soal tersedia pada field `sourceUrl` dalam `scripts/curated/gcp-ace-gear-20261028.json`.

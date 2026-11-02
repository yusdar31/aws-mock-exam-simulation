# Kuis terpandu untuk pembahasan kelas

Mode tambahan pada halaman **Ujian bersama**. Host mengendalikan satu soal yang sama pada setiap ronde; peserta menjawab dari perangkat masing-masing menggunakan nama dan kode sesi. Akun tetap opsional untuk menghubungkan riwayat lintas browser.

## Mengaktifkan

Jalankan seluruh `supabase/migrations/20261102_guided_quiz.sql` di SQL Editor proyek Supabase yang sama, setelah migrasi kelas tanggal 22 Oktober 2026 yang sudah digunakan aplikasi. Skrip aman dijalankan ulang dan mempertahankan ujian, paket, jawaban, serta tautan akun yang ada. Halaman hanya mengaktifkan pilihan kuis ketika server mendukung versi ini; ujian bersama biasa tetap tersedia.

Skrip membungkus implementasi ujian sebelumnya sebagai fungsi privat. Klien tidak dapat memakai endpoint ujian biasa untuk mengirim jawaban soal mendatang atau membuka kunci kuis lebih awal. Batas waktu dan poin diperiksa server, bukan jam perangkat peserta.

## Menjalankan kuis

1. Buka **Ujian bersama → Buat sesi sebagai instruktur**.
2. Pilih **Kuis terpandu — satu soal bersama**, sertifikasi, bahasa, dan jumlah soal.
3. Atur waktu per soal antara 0–600 detik. Nilai 0 berarti tanpa timer; host menutup jawaban secara manual.
4. Gunakan **Preview paket soal** untuk memeriksa paket. **Simpan sebagai template** menyimpan soal, urutan, mode, dan timer pada browser host agar dapat digunakan lagi di sesi berikutnya. Template tersimpan di perangkat tersebut.
5. Buat sesi dan bagikan kode, tautan, atau QR kepada peserta. Setelah peserta masuk, tekan **Mulai kuis**.
6. Peserta memilih jawaban, lalu menekan **Kirim jawaban kuis**. Jawaban pertama yang diterima terkunci; pengiriman ulang akibat masalah koneksi tidak menggandakan poin.
7. Host melihat jumlah peserta yang sudah menjawab. Tekan **Tutup jawaban**, lalu **Tampilkan pembahasan** untuk membuka kunci, penjelasan, distribusi pilihan, dan peringkat.
8. Tekan **Lanjut ke soal berikutnya** setelah selesai berdiskusi. Tidak ada navigasi bebas ke soal berikutnya bagi peserta.
9. Tekan **Selesaikan kuis** untuk peringkat akhir dan review soal yang telah dimainkan. Jika kuis diakhiri lebih awal, soal yang belum dimainkan tidak dihitung atau dibuka.

Setiap jawaban tepat mendapat satu poin; soal multi-jawaban memerlukan seluruh pilihan benar. Tidak ada bonus kecepatan. Peserta dengan poin sama mendapat peringkat sama. Poin baru dipublikasikan setelah pembahasan ronde itu dibuka.

Host dapat menggunakan **Mode presentasi**. Tombol Escape mengembalikan tampilan; fokus keyboard tetap berada di tampilan presentasi selama mode itu aktif.

Pilihan jawaban menggunakan daftar vertikal pada fase menjawab, waktu habis, dan pembahasan, termasuk di layar host. **Suara: nonaktif** dapat ditekan untuk mengaktifkan nada singkat saat timer habis. Preferensi disimpan di browser masing-masing; suara tidak diaktifkan otomatis bagi seluruh kelas. Nada berbunyi sekali per ronde, tanpa alarm berulang. Menutup jawaban secara manual atau memakai waktu 0 tidak memutar nada. Setelah reload, interaksi klik atau keyboard mengaktifkan kembali audio sesuai kebijakan browser. Indikator teks **Waktu habis** tetap tersedia saat suara dimatikan atau browser tidak mendukung audio.

## Pemulihan dan kompatibilitas

- Muat ulang browser mempertahankan jawaban yang sudah diterima server dan mengikuti ronde aktif.
- Peserta yang diizinkan terlambat mengikuti ronde berjalan; mereka tidak dapat mengisi ronde sebelumnya.
- Peserta yang bergabung memakai akun dapat membuka kembali sesi melalui riwayat akun. Pembahasan hanya mencakup soal yang sudah dibuka host.
- Mode ujian bersama tetap menggunakan alur dan aturan sebelumnya. Paket bank soal tidak diubah.

## Validasi

`tests/guided-quiz.test.mjs` menjalankan SQL pada PostgreSQL tersemat: migrasi berulang, kompatibilitas ujian, pembatasan hak akses, privasi soal/kunci, pengiriman idempoten, batas waktu, soal multi-jawaban, poin, sesi akun, dan penyelesaian awal.

`tests/guided-quiz-browser.mjs` menguji host dan dua browser peserta, template lintas sesi, jawaban benar/salah, sinkronisasi ronde, reload, peringkat, mode presentasi, bahasa UI, mobile, mode gelap, serta aksesibilitas. `EXAM_TEST_URL` dapat menunjuk ke deployment produksi; RPC kelas pengujian tetap diarahkan ke database uji terisolasi, sehingga tes ini tidak membuat sesi kelas nyata.

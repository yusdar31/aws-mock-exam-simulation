import type { Language } from "../types";
import { studyMessages } from "./study";

export const LANGUAGE_STORAGE_KEY = "aws-exam-ui-language";
export const messages: Record<string, string> = {
  ...studyMessages,
  "Perencanaan dan Implementasi Solusi Cloud":
    "Planning and implementing a cloud solution",
  "Bank soal": "Question banks",
  "Jelajahi bank soal": "Browse question banks",
  "Bahasa Inggris": "English",
  "Bank tidak ditemukan": "Bank not found",
  "Cakupan soal siap simulasi belum mencukupi.":
    "There are not enough simulation-ready questions across all domains.",
  "Cari bank soal": "Search question banks",
  "Coba kata kunci lain atau hapus filter.":
    "Try another search or clear the filters.",
  "Dilengkapi referensi & pembahasan opsi":
    "With references and option explanations",
  "Domain materi": "Content domains",
  "Filter bank soal": "Question bank filters",
  "Filter daftar soal": "Question list filters",
  "Hapus filter": "Clear filters",
  "Kata kunci atau ID soal": "Keyword or question ID",
  "Kembali ke daftar bank": "Back to question banks",
  "Lihat daftar soal": "View questions",
  "Lihat jawaban & pembahasan": "View answers and explanations",
  "Muat ulang bank": "Reload banks",
  "Nama sertifikasi, kode, atau domain": "Certification name, code, or domain",
  "Penyedia sertifikasi": "Certification provider",
  "Pilih bank dari daftar yang tersedia.":
    "Choose a bank from the available list.",
  "Satu jawaban": "Single answer",
  "Beberapa jawaban": "Multiple answers",
  "Konfigurasi, implementasi, operasi, dan keamanan Google Cloud.":
    "Google Cloud environment setup, deployment, operations, and security.",
  "Semua bahasa": "All languages",
  "Semua domain": "All domains",
  "Semua penyedia": "All providers",
  "Siapkan latihan": "Set up practice",
  "Siapkan simulasi": "Set up simulation",
  "Soal tersedia": "Available questions",
  "Tampilkan soal berikutnya": "Show more questions",
  "Telusuri soal dan cakupan materi sebelum menyiapkan sesi.":
    "Explore the questions and topic coverage before setting up a session.",
  "Temukan bank soal, lihat cakupan materi, lalu pilih latihan Anda.":
    "Find a question bank, explore its coverage, and choose your practice.",
  "Tidak ada bank yang cocok": "No matching banks",
  "Tidak ada soal yang cocok. Coba kata kunci atau domain lain.":
    "No matching questions. Try another keyword or domain.",
  "{count} bank ditampilkan": "{count} banks shown",
  "{count} soal": "{count} questions",
  "{shown} dari {total} soal ditampilkan":
    "Showing {shown} of {total} questions",
  "Bank soal tersedia.": "The question bank is available.",
  "Bahasa tampilan": "Display language",
  "Bahasa tampilan hanya mengubah menu dan petunjuk. Bahasa soal dipilih secara terpisah.":
    "Display language changes menus and instructions. Question language is selected separately.",
  "Progres disimpan di perangkat": "Progress is saved on this device",
  Peserta: "Participant",
  "Progres belum dapat dimuat.": "Progress could not be loaded.",
  "Bank pusat belum tersedia. Menggunakan bank terakhir yang tersimpan di perangkat.":
    "The question service is unavailable. Using the latest bank saved on this device.",
  "Menggunakan bank bawaan. Bank pusat belum tersedia.":
    "Using the built-in bank. The question service is unavailable.",
  "Bank soal belum dapat dimuat. Coba muat ulang.":
    "The question bank could not be loaded. Try reloading.",
  "Menyimpan progres…": "Saving progress…",
  "Progres tersimpan di perangkat": "Progress saved on this device",
  "Progres tersinkron": "Progress synced",
  "Progres lokal · cloud belum tersedia":
    "Progress saved locally · cloud unavailable",
  "Progres belum tersimpan.": "Progress could not be saved.",
  "Memulai percobaan baru akan menggantikan sesi yang belum selesai. Lanjutkan?":
    "Starting a new attempt will replace your unfinished session. Continue?",
  "Tidak ada soal yang tersedia.": "No questions are available.",
  "Ujian belum dapat dimulai.": "The exam could not be started.",
  "Hasil tersimpan; sesi lokal belum dibersihkan.":
    "Results are saved; the local session could not be cleared.",
  "Hasil belum tersimpan. Coba submit kembali.":
    "Results could not be saved. Try submitting again.",
  Tamu: "Guest",
  "Penyimpanan browser tidak tersedia.": "Browser storage is unavailable.",
  "Penugasan belum dapat dimulai.": "The assignment could not be started.",
  "Memuat sesi…": "Loading your session…",
  "Lewati ke konten": "Skip to content",
  "Navigasi utama": "Main navigation",
  "Ruang belajar": "Study room",
  Riwayat: "History",
  Kelas: "Classes",
  Keluar: "Sign out",
  "Tutup pemberitahuan": "Dismiss notification",
  "Atur password baru": "Set a new password",
  "Password berhasil diperbarui.": "Your password has been updated.",
  "Password baru": "New password",
  "Simpan password": "Save password",
  "Menyiapkan halaman…": "Loading page…",
  "Hapus sesi yang belum selesai?": "Delete the unfinished session?",
  "Latihan independen · Skor bukan hasil resmi AWS":
    "Independent practice · Scores are not official AWS results",
  "Login belum dikonfigurasi. Anda tetap dapat mencoba latihan sebagai tamu.":
    "Sign-in is not configured. You can still try practice as a guest.",
  "Jika akun tersedia, tautan pemulihan akan dikirim ke email Anda.":
    "If an account exists, a recovery link will be sent to your email.",
  "Konfirmasi password tidak sama.": "The passwords do not match.",
  "Pendaftaran berhasil. Periksa email untuk verifikasi akun.":
    "Registration successful. Check your email to verify your account.",
  "Email atau password salah.": "Incorrect email or password.",
  "Permintaan gagal.": "The request failed.",
  "AWS CERTIFICATION PRACTICE": "AWS CERTIFICATION PRACTICE",
  "Latihan terarah.": "Practice with purpose.",
  "Ujian lebih siap.": "Take your exam prepared.",
  "Latih konsep, evaluasi keputusan, dan ulangi materi yang perlu Anda kuasai.":
    "Practice concepts, evaluate decisions, and revisit the topics you need to master.",
  "Bahasa Indonesia & English": "Indonesian & English",
  "Progres tersimpan otomatis": "Progress saved automatically",
  "Buat akun": "Create an account",
  "Pulihkan akun": "Recover your account",
  "Selamat datang kembali": "Welcome back",
  "Gunakan akun untuk menyinkronkan progres antarperangkat.":
    "Use an account to sync your progress across devices.",
  "Nama lengkap": "Full name",
  Email: "Email",
  Password: "Password",
  "Konfirmasi password": "Confirm password",
  "Memproses…": "Processing…",
  Daftar: "Sign up",
  "Kirim tautan": "Send recovery link",
  Masuk: "Sign in",
  "Buat akun baru": "Create a new account",
  "Kembali ke login": "Back to sign in",
  "Lupa password?": "Forgot your password?",
  "Coba latihan sebagai tamu": "Try practice as a guest",
  "Progres tamu tersimpan di browser ini.":
    "Guest progress is saved in this browser.",
  "Platform latihan independen. Hasil latihan bukan skor sertifikasi resmi AWS.":
    "Independent practice platform. Practice results are not official AWS certification scores.",
  "Selesaikan satu latihan agar rekomendasi domain tersedia.":
    "Complete a practice attempt to get domain recommendations.",
  "Domain ini belum tersedia dalam bahasa yang dipilih.":
    "This domain is unavailable in the selected question language.",
  "RUANG BELAJAR": "STUDY ROOM",
  "Persiapkan percobaan Anda": "Prepare your next attempt",
  "Pilih jalur, tentukan fokus, dan mulai saat Anda siap.":
    "Choose a track, set your focus, and start when you are ready.",
  "Ada sesi yang belum selesai": "You have an unfinished session",
  "soal memiliki jawaban": "questions have answers",
  "Lanjutkan sesi": "Resume session",
  "Hapus sesi": "Delete session",
  "Jalur sertifikasi": "Certification track",
  "CLF-C02 · FOUNDATIONAL": "CLF-C02 · FOUNDATIONAL",
  "SAA-C03 · ASSOCIATE": "SAA-C03 · ASSOCIATE",
  "Konsep cloud, keamanan, layanan, dan biaya.":
    "Cloud concepts, security, services, and costs.",
  "Desain arsitektur aman, tangguh, cepat, dan efisien.":
    "Design secure, resilient, fast, and efficient architectures.",
  "Mode belajar": "Study mode",
  Latihan: "Practice",
  "Simulasi penuh": "Full simulation",
  "Pembahasan dapat dibuka setelah menjawab. Anda dapat menjeda sesi.":
    "View explanations after answering. You can pause the session.",
  "65 soal · {minutes} menit · waktu terus berjalan setelah keluar. Tanpa petunjuk jawaban.":
    "65 questions · {minutes} minutes · the timer keeps running after you leave. No answer hints.",
  "Bahasa soal": "Question language",
  "Bahasa Indonesia": "Bahasa Indonesia",
  English: "English",
  "Jumlah soal": "Number of questions",
  Durasi: "Duration",
  "Tanpa batas waktu": "No time limit",
  menit: "minutes",
  "Memuat bank soal…": "Loading question bank…",
  "{count} soal sesuai cakupan · {total} soal dalam bahasa ini":
    "{count} questions in scope · {total} questions in this language",
  "Cakupan domain": "Domain coverage",
  "soal tersedia": "questions available",
  "Persentase mengikuti bobot blueprint untuk pemilihan soal simulasi.":
    "Simulation sampling follows the exam blueprint's domain weights.",
  "SIMULASI PENUH": "FULL SIMULATION",
  "LATIHAN PERSONAL": "PERSONAL PRACTICE",
  Soal: "Question",
  Waktu: "Time",
  "{minutes} menit": "{minutes} minutes",
  "Tanpa batas": "Untimed",
  "Target latihan": "Practice target",
  "% akurasi": "% accuracy",
  "Target ini bukan skor kelulusan resmi AWS.":
    "This target is not an official AWS passing score.",
  "Bank belum cukup:": "Insufficient questions:",
  Mulai: "Start",
  "Mulai latihan": "Start practice",
  "Mulai simulasi": "Start simulation",
  "Lihat panduan ujian AWS ↗": "View the AWS exam guide ↗",
  "Belajar dari hasil": "Learn from your results",
  "{count} soal perlu diulang. Rekomendasi berdasarkan riwayat {exam} dalam bahasa ini.":
    "{count} questions are due for review. Recommendations use your {exam} history in this question language.",
  "Ulangi materi terjadwal": "Review scheduled topics",
  "Latihan domain terlemah": "Practice your weakest domain",
  "Akurasi terakhir:": "Latest accuracy:",
  "Sesi tidak valid. Kembali ke ruang belajar untuk memilih soal.":
    "Invalid session. Return to the study room to choose questions.",
  Kembali: "Back",
  "Review sebelum submit": "Review before submitting",
  "Soal {index} dari {total}": "Question {index} of {total}",
  Navigator: "Navigator",
  "Navigator soal": "Question navigator",
  "{count} lengkap · {flagged} ditandai":
    "{count} complete · {flagged} flagged",
  "Soal {index}, {status}{flag}": "Question {index}, {status}{flag}",
  "jawaban lengkap": "answer complete",
  "belum lengkap": "incomplete",
  ", ditandai": ", flagged",
  "● Ditandai · Hijau: jawaban lengkap": "● Flagged · Green: answer complete",
  "Review semua soal": "Review all questions",
  "Periksa jawaban Anda": "Check your answers",
  "{count} soal belum dijawab lengkap. Anda dapat kembali ke soal sebelum submit.":
    "{count} questions are incomplete. You can return to them before submitting.",
  Lengkap: "Complete",
  "Belum lengkap": "Incomplete",
  " · Ditandai": " · Flagged",
  "Pilih {count} jawaban": "Select {count} answers",
  "Pilih satu jawaban": "Select one answer",
  "● Ditandai": "● Flagged",
  "Tandai untuk review": "Flag for review",
  SOAL: "QUESTION",
  "Pilih satu jawaban.": "Select one answer.",
  "Pilih {count} jawaban.": "Select {count} answers.",
  "Periksa jawaban & pembahasan": "Check answer & explanation",
  "Jawaban Anda benar.": "Your answer is correct.",
  "Jawaban Anda belum tepat.": "Your answer is not correct yet.",
  "Ubah jawaban": "Change answer",
  "Hapus jawaban": "Clear answer",
  "Simpan & keluar": "Save & leave",
  "Simpan & jeda": "Save & pause",
  "Kembali ke soal": "Back to questions",
  "Menyimpan…": "Saving…",
  "Submit ujian": "Submit exam",
  Sebelumnya: "Previous",
  Berikutnya: "Next",
  "Review & submit": "Review & submit",
  "Waktu tersisa {time}": "Time remaining {time}",
  "Ekspor PDF belum berhasil. Gunakan tombol Cetak untuk menyimpan sebagai PDF.":
    "PDF export failed. Use Print to save as a PDF.",
  HASIL: "RESULT",
  SIMULASI: "SIMULATION",
  LATIHAN: "PRACTICE",
  "Evaluasi percobaan Anda": "Review your attempt",
  "AKURASI JAWABAN": "ANSWER ACCURACY",
  "{score} dari {total} benar": "{score} of {total} correct",
  "Target latihan tercapai": "Practice target reached",
  "Masih ada ruang untuk berlatih": "Keep practicing",
  "Target internal {target}%. Persentase ini bukan scaled score atau prediksi kelulusan resmi AWS.":
    "Internal target: {target}%. This percentage is not a scaled score or an official AWS pass prediction.",
  "Durasi aktif": "Active duration",
  Tersinkron: "Synced",
  "Tersimpan di perangkat": "Saved on this device",
  "Performa per domain": "Performance by domain",
  "Akurasi {domain}": "{domain} accuracy",
  "Review jawaban": "Answer review",
  Tampilkan: "Show",
  "Salah & belum tepat": "Incorrect & incomplete",
  "Belum dijawab": "Unanswered",
  Ditandai: "Flagged",
  "Semua soal": "All questions",
  "Riwayat lama hanya berisi ringkasan. Percobaan baru menyimpan jawaban dan versi soal.":
    "Older history contains summaries only. New attempts save answers and question versions.",
  "Tidak ada soal pada filter ini.": "No questions match this filter.",
  "Jawaban Anda:": "Your answer:",
  "· Jawaban benar:": "· Correct answer:",
  "PDF mengekspor ringkasan dan halaman review yang sedang ditampilkan.":
    "PDF exports the summary and the currently displayed review page.",
  "Menyiapkan PDF…": "Preparing PDF…",
  "Unduh PDF": "Download PDF",
  Cetak: "Print",
  "LEARNING ANALYTICS": "LEARNING ANALYTICS",
  "Riwayat & perkembangan": "History & progress",
  "Bandingkan percobaan pada sertifikasi, bahasa, dan mode yang sama.":
    "Compare attempts for the same certification, question language, and mode.",
  Sertifikasi: "Certification",
  Bahasa: "Language",
  Indonesia: "Indonesian",
  Mode: "Mode",
  "Semua mode": "All modes",
  "Percobaan dimuat": "Loaded attempts",
  "Akurasi rata-rata": "Average accuracy",
  "Soal perlu diperkuat": "Questions to revisit",
  "Riwayat percobaan": "Attempt history",
  "Catatan soal salah ({count})": "Mistake notebook ({count})",
  "Catatan soal yang perlu diperkuat": "Questions to revisit",
  "Jawaban terakhir per soal dari riwayat yang telah dimuat. Soal yang sudah dijawab benar akan keluar dari catatan ini.":
    "Latest answer per question from loaded history. Correctly answered questions are removed from this notebook.",
  "Latih kembali hingga 20 soal": "Practice up to 20 questions again",
  "Pilihan terakhir:": "Latest answer:",
  "? Kunci:": "? Correct answer:",
  "Tren akurasi": "Accuracy trend",
  Percobaan: "Attempt",
  "Akurasi {accuracy}%": "Accuracy {accuracy}%",
  "% · Tidak ekuivalen dengan skor resmi AWS.":
    "% · Not equivalent to an official AWS score.",
  "Daftar percobaan": "Attempt list",
  "Belum ada percobaan untuk filter ini.": "No attempts match this filter yet.",
  Simulasi: "Simulation",
  "benar ·": "correct ·",
  "Buka review": "Open review",
  "Memuat…": "Loading…",
  "Muat riwayat cloud berikutnya": "Load more cloud history",
  Pembahasan: "Explanation",
  "Penjelasan Bahasa Indonesia": "Indonesian explanation",
  "Menyiapkan terjemahan…": "Preparing translation…",
  "Tampilkan Bahasa Indonesia": "Show Indonesian explanation",
  "Jawaban benar": "Correct answer",
  Distraktor: "Distractor",
  " · Pilihan Anda": " · Your choice",
  "Bandingkan opsi ini dengan persyaratan pada pertanyaan dan pembahasan di atas.":
    "Compare this option against the question requirements and the explanation above.",
  "Dokumentasi AWS ↗": "AWS documentation ↗",
  "Soal arsip: sumber dan pembahasan per opsi masih perlu review editorial.":
    "Archived question: sources and option explanations still need editorial review.",
  "Referensi ditinjau": "Reference reviewed",
  "· Versi": "· Version",
  "Terjemahan belum tersedia. Anda dapat memilih Bahasa Indonesia untuk latihan berikutnya.":
    "Translation is unavailable. You can select Indonesian questions for your next practice.",
  "Ruang kelas belum tersedia. Coba lagi atau hubungi administrator.":
    "Classes are unavailable. Try again or contact an administrator.",
  "Berhasil disimpan.": "Saved successfully.",
  "Perubahan belum tersimpan.": "Changes could not be saved.",
  "RUANG KELAS": "CLASSROOM",
  "Pendampingan batch": "Batch coaching",
  "Penugasan belajar": "Study assignments",
  "Penugasan simulasi dan rekap hasil kelas.":
    "Simulation assignments and class results.",
  "Kode bergabung kelas": "Class invitation code",
  "Gabung kelas": "Join class",
  "Buat batch": "Create batch",
  "Nama batch": "Batch name",
  "Buat batch baru": "Create a new batch",
  Batch: "Batch",
  "Pilih batch": "Select a batch",
  "Kode undangan:": "Invitation code:",
  "Tambah penugasan": "Add assignment",
  Judul: "Title",
  Tenggat: "Due date",
  "Simpan penugasan": "Save assignment",
  Penugasan: "Assignments",
  "· Tenggat": "· Due",
  Kerjakan: "Start assignment",
  "Belum ada penugasan.": "No assignments yet.",
  "Domain kelas": "Class domains",
  "Belum ada hasil tersinkron dari peserta.": "No synced student results yet.",
  "Peserta yang perlu pendampingan": "Students who need support",
  "Bank pusat tidak tersedia.": "The question service is unavailable.",
  "Perubahan tersimpan di bank pusat.":
    "Changes saved to the question service.",
  "Draft disimpan di perangkat, belum tersinkron atau dipublikasikan. Gunakan Sinkronkan saat layanan kembali tersedia.":
    "Draft saved on this device; it is not synced or published. Sync when the service is available again.",
  "Antrean berhasil disinkronkan.": "Queue synced successfully.",
  "Sinkronisasi gagal. Antrean tetap disimpan.":
    "Sync failed. The queue is still saved.",
  ADMINISTRATOR: "ADMINISTRATOR",
  "Bank soal & editorial": "Question bank & editorial",
  "Publikasi memerlukan kunci valid, pembahasan tiap opsi, sumber AWS, serta tanggal review.":
    "Publishing requires valid answers, explanations for every option, AWS sources, and a review date.",
  "Muat ulang": "Reload",
  "perubahan lokal belum tersinkron": "local changes not synced",
  "Sinkronkan antrean": "Sync queue",
  "Draft lokal belum tersinkron": "Local drafts not synced",
  "Hapus perubahan lokal ini dari antrean?":
    "Remove this local change from the queue?",
  "Hapus dari antrean": "Remove from queue",
  "Cari soal": "Search questions",
  Cari: "Search",
  Status: "Status",
  Semua: "All",
  Draft: "Draft",
  Approved: "Approved",
  Rejected: "Rejected",
  "temuan · v": "findings · v",
  "Edit soal": "Edit question",
  Domain: "Domain",
  Pertanyaan: "Question",
  Opsi: "Option",
  "Alasan opsi": "Option rationale",
  Tipe: "Type",
  Single: "Single answer",
  Multiple: "Multiple answers",
  "Kunci (pisahkan koma)": "Correct answers (comma-separated)",
  "URL dokumentasi AWS": "AWS documentation URL",
  "Tanggal verifikasi": "Review date",
  "Saya sudah meninjau dugaan duplikasi soal ini":
    "I have reviewed this potential duplicate",
  "Simpan draft": "Save draft",
  "Approve versi tersimpan": "Approve saved version",
  Reject: "Reject",
  "Simpan perubahan sebagai draft terlebih dahulu, lalu muat dan approve versi terbaru.":
    "Save changes as a draft first, then reload and approve the latest version.",
  "Pilih soal di daftar untuk meninjau dan mengedit.":
    "Select a question from the list to review and edit.",
  "Impor & generator": "Import & generator",
  Teks: "Text",
  "Array JSON soal": "JSON question array",
  "Teks soal berformat nomor/opsi/kunci":
    "Question text with numbers, options, and answer keys",
  "JSON harus berupa array.": "JSON must be an array.",
  "Impor berhasil sebagai draft.": "Imported successfully as drafts.",
  "Impor gagal.": "Import failed.",
  "Impor sebagai draft": "Import as drafts",
  "5 draft SAA English dibuat; review diperlukan.":
    "Created 5 English SAA drafts; review is required.",
  "Generator gagal.": "Generation failed.",
  "Buat 5 draft AI (SAA English)": "Generate 5 AI drafts (SAA English)",
  "Publikasikan semua draft yang lolos validasi editorial?":
    "Publish all drafts that pass editorial validation?",
  "{approved} dipublikasikan, {skipped} masih perlu review.":
    "{approved} published, {skipped} still need review.",
  "Approve gagal.": "Approval failed.",
  "Approve draft valid": "Approve valid drafts",
  "AI memerlukan konfigurasi server dan dapat menggunakan kuota layanan.":
    "AI requires server configuration and may use your service quota.",
  "Tidak ada soal untuk pilihan ini. Pilih minimal satu domain yang tersedia.":
    "No questions match this selection. Choose at least one available domain.",
  "Jumlah soal harus 1–200.": "Choose between 1 and 200 questions.",
  "Tersedia {count} soal; kurangi jumlah soal.":
    "{count} questions are available; reduce the question count.",
  "Layanan bank soal belum tersedia.": "The question service is unavailable.",
  "Respons layanan tidak valid. Periksa konfigurasi API.":
    "Invalid service response. Check the API configuration.",
};

const indonesianOverrides: Record<string, string> = {
  "AWS CERTIFICATION PRACTICE": "LATIHAN SERTIFIKASI AWS",
  "LEARNING ANALYTICS": "ANALISIS BELAJAR",
  Single: "Jawaban tunggal",
  Multiple: "Beberapa jawaban",
  "Cloud Concepts": "Konsep Cloud",
  "Security & Compliance": "Keamanan & Kepatuhan",
  "Technology & Services": "Teknologi & Layanan",
  "Billing & Pricing": "Tagihan & Harga",
  "Secure Architectures": "Arsitektur Aman",
  "Resilient Architectures": "Arsitektur Tangguh",
  "High-Performing Architectures": "Arsitektur Berkinerja Tinggi",
  "Cost-Optimized Architectures": "Arsitektur Hemat Biaya",
};

export function readLanguage(storage?: Pick<Storage, "getItem">): Language {
  try {
    return storage?.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

type Values = Record<string, string | number>;
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const patterns = Object.keys(messages)
  .filter((key) => key.includes("{"))
  .map((key) => ({
    key,
    names: [...key.matchAll(/\{(\w+)\}/g)].map((m) => m[1]),
    pattern: new RegExp(
      "^" +
        key
          .split(/\{\w+\}/)
          .map(escape)
          .join("(.+?)") +
        "$",
    ),
  }));

export function translate(
  text: string,
  language: Language,
  values: Values = {},
): string {
  let key = text;
  let params = values;
  if (language === "en" && !Object.hasOwn(messages, key)) {
    for (const entry of patterns) {
      const match = entry.pattern.exec(text);
      if (!match) continue;
      key = entry.key;
      params = Object.fromEntries(
        entry.names.map((name, index) => [name, match[index + 1]]),
      );
      break;
    }
  }
  const template =
    language === "en"
      ? Object.hasOwn(messages, key)
        ? messages[key]
        : key
      : Object.hasOwn(indonesianOverrides, key)
        ? indonesianOverrides[key]
        : key;
  return template.replace(/\{(\w+)\}/g, (token, name: string) =>
    String(params[name] ?? token),
  );
}

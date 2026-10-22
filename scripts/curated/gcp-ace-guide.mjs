import catalog from "../../src/data/certifications.json" with { type: "json" };
import { calibrateAceGear } from "./gcp-ace-gear-calibration.mjs";
// Original scenarios for gaps in the guide supplied by the user on 2026-10-22.
// Answers are rotated; explanations describe each option rather than repeat a fallback.
const domains = Object.keys(catalog["gcp-ace"].blueprint);
const rows = [];
const doc = (path) => `https://docs.cloud.google.com/${path}`;
function q(topic, objective, prompt, options, notes, path, answers = [0]) {
  rows.push({ topic, objective, prompt, options, notes, path, answers });
}
q(
  "identity-group-project-access",
  "1.1",
  "Lima belas analis memerlukan akses baca yang sama pada satu proyek. Anggota tim sering berubah. Anda ingin mengelola keanggotaan tanpa mengubah kebijakan IAM setiap kali seseorang pindah tim. Apa yang sebaiknya dilakukan?",
  [
    "Berikan role baca yang sesuai kepada grup Cloud Identity dan kelola anggota grup",
    "Buat satu service account key lalu bagikan kepada seluruh analis",
    "Berikan Owner secara langsung kepada setiap analis",
    "Gunakan label proyek sebagai pengganti kebijakan IAM",
  ],
  [
    "Binding ke grup memisahkan pengelolaan anggota dari pemberian role pada proyek.",
    "Key bersama tidak memberi identitas individu dan menambah risiko kredensial.",
    "Owner memberikan kemampuan jauh melebihi kebutuhan baca dan tetap memerlukan pengelolaan binding individu.",
    "Label mengelompokkan resource; label bukan principal IAM.",
  ],
  "iam/docs/groups-in-cloud-console",
);
q(
  "identity-groups-api-automation",
  "1.1",
  "Sistem onboarding harus menambahkan pegawai ke grup Cloud Identity melalui alur otomatis yang diaudit. Grup tersebut sudah memiliki akses IAM yang diperlukan. API mana yang sebaiknya digunakan untuk perubahan keanggotaan?",
  [
    "Cloud Identity Groups API",
    "Resource Manager API untuk kebijakan IAM proyek",
    "IAM Service Account Credentials API",
    "Cloud Asset Inventory API",
  ],
  [
    "Groups API menyediakan pengelolaan grup dan keanggotaan secara terprogram.",
    "Kebijakan IAM proyek mengatur grant kepada principal, bukan perubahan anggota grup direktori.",
    "Credentials API membuat kredensial service account, bukan mengelola anggota grup manusia.",
    "Asset Inventory menginventarisasi resource; bukan API pengelola anggota grup.",
  ],
  "identity/docs/groups",
);
q(
  "standalone-organization-onboarding",
  "1.1",
  "Seorang pemilik akun baru yang memenuhi persyaratan standalone organization belum memiliki domain perusahaan atau Cloud Identity. Ia ingin memahami apakah harus membeli domain sebelum mendapat organisasi. Pernyataan mana yang sesuai?",
  [
    "Standalone organization tidak mensyaratkan Cloud Identity atau verifikasi domain perusahaan",
    "Semua organisasi selalu mensyaratkan domain Cloud Identity",
    "Standalone organization adalah billing account tanpa resource hierarchy",
    "Standalone organization menjadikan semua proyek dapat diakses publik",
  ],
  [
    "Jenis standalone memiliki alur onboarding tanpa Cloud Identity; ketersediaan dan kelayakan akun tetap perlu diperiksa.",
    "Persyaratan organisasi berbasis domain tidak berlaku untuk setiap jenis organisasi.",
    "Organization adalah root hierarchy, sedangkan billing account merupakan entitas penagihan.",
    "Jenis organisasi tidak otomatis memberikan akses publik pada proyek.",
  ],
  "resource-manager/docs/standalone-organization-overview",
);
q(
  "regional-product-availability-preflight",
  "1.1",
  "Tim hendak menempatkan layanan terkelola dan VM berakselerator pada lokasi baru. Kuota proyek masih tersedia. Pemeriksaan apa yang tetap diperlukan sebelum memilih lokasi deployment?",
  [
    "Periksa ketersediaan produk, tipe mesin, dan akselerator pada region atau zona tujuan",
    "Anggap semua produk tersedia pada setiap zona selama kuota mencukupi",
    "Pilih zona berdasarkan nama proyek karena kuota menentukan lokasi produk",
    "Cukup aktifkan API; aktivasi menjamin kapasitas fisik pada semua zona",
  ],
  [
    "Ketersediaan geografis, dukungan konfigurasi, kuota, dan kapasitas adalah pertimbangan berbeda.",
    "Kuota tersedia tidak menjamin dukungan produk atau kapasitas di setiap zona.",
    "Nama proyek tidak menentukan cakupan lokasi produk.",
    "API yang aktif tidak menjamin dukungan lokasi ataupun kapasitas fisik.",
  ],
  "about/locations",
);
q(
  "assist-asset-context-authorization",
  "1.1",
  "Operator memakai Cloud Asset Inventory dan Gemini Cloud Assist untuk memahami resource produksi. Ia hanya memiliki akses ke proyek pengujian. Bagaimana tim sebaiknya menyediakan konteks produksi?",
  [
    "Berikan izin baca yang diperlukan pada cakupan produksi yang disetujui, lalu jalankan analisis pada cakupan itu",
    "Minta asisten mengabaikan IAM ketika menjawab pertanyaan produksi",
    "Berikan key akun Owner kepada semua operator agar asisten mendapat konteks",
    "Ganti nama proyek pengujian menjadi produksi untuk memperoleh inventaris produksi",
  ],
  [
    "Analisis harus menggunakan cakupan resource dan izin yang sah; bantuan AI tidak menggantikan otorisasi.",
    "Asisten bukan mekanisme untuk melewati pembatasan IAM.",
    "Key bersama dan akses Owner tidak diperlukan untuk kebutuhan analisis baca.",
    "Nama tampilan proyek tidak mengubah identitas maupun izin atas resource.",
  ],
  "cloud-assist/overview",
);
q(
  "observability-api-agent-bootstrap",
  "1.1",
  "Tim baru menyiapkan pengumpulan log dan metrik dari VM ke Google Cloud Observability. Mereka ingin memastikan konfigurasi awal lengkap. Kombinasi langkah mana yang sesuai?",
  [
    "Periksa API, izin identitas VM, dan konfigurasi Ops Agent untuk data yang ingin dikirim",
    "Pasang agen saja; API dan IAM tidak memengaruhi pengiriman",
    "Berikan Billing Viewer kepada VM sebagai pengganti izin pengiriman telemetri",
    "Buat billing budget; metrik guest OS akan dikumpulkan otomatis oleh budget",
  ],
  [
    "Pengiriman memerlukan layanan aktif, izin yang tepat, serta pipeline agen yang sesuai.",
    "Agen tidak meniadakan kebutuhan API dan otorisasi.",
    "Billing Viewer bukan role untuk menulis log atau metrik.",
    "Budget adalah alat penagihan dan tidak mengonfigurasi agen observabilitas.",
  ],
  "stackdriver/docs/solutions/agents/ops-agent/installation",
);
q(
  "initial-vpc-hybrid-address-plan",
  "1.1",
  "Sebuah proyek akan dihubungkan ke pusat data kantor. Jaringan kantor memakai 10.20.0.0/16. Tim belum membuat subnet Google Cloud. Keputusan awal mana yang paling tepat?",
  [
    "Gunakan custom mode VPC dan pilih rentang subnet yang tidak tumpang tindih dengan jaringan kantor",
    "Gunakan rentang 10.20.0.0/16 yang sama agar Cloud VPN menyatukannya otomatis",
    "Gunakan nama subnet yang berbeda meskipun rentang IP sama",
    "Ubah role IAM operator untuk menyelesaikan tumpang tindih alamat",
  ],
  [
    "Perencanaan alamat yang tidak tumpang tindih memudahkan routing antar jaringan.",
    "Tunnel tidak otomatis menyelesaikan ambiguitas routing akibat rentang yang sama.",
    "Nama resource yang berbeda tidak mengubah konflik alamat IP.",
    "IAM mengatur otorisasi, bukan pemetaan rentang jaringan.",
  ],
  "vpc/docs/vpc",
);
q(
  "billing-view-without-project-access",
  "1.2",
  "Staf keuangan perlu membaca informasi biaya pada billing account, tetapi tidak perlu mengubah resource aplikasi. Akses mana yang paling sesuai?",
  [
    "Billing Account Viewer pada billing account terkait",
    "Project Owner pada semua proyek",
    "Service Account Token Creator pada service account aplikasi",
    "Compute Instance Admin pada seluruh organisasi",
  ],
  [
    "Role penagihan baca memenuhi kebutuhan pemeriksaan biaya tanpa memberi kendali aplikasi.",
    "Owner jauh lebih luas dan memberi izin mengubah resource proyek.",
    "Token Creator digunakan untuk kredensial impersonasi, bukan laporan biaya.",
    "Administrasi instance tidak diperlukan untuk membaca biaya penagihan.",
  ],
  "billing/docs/how-to/billing-access",
);
q(
  "billing-account-versus-resource-hierarchy",
  "1.2",
  "Perusahaan memindahkan proyek dari satu folder ke folder lain. Mereka ingin memastikan tagihan proyek beralih ke billing account baru. Apa yang harus diperiksa?",
  [
    "Periksa dan ubah tautan billing account proyek secara terpisah sesuai izin yang diperlukan",
    "Anggap perpindahan folder otomatis menyalin billing account folder tujuan",
    "Buat subnet baru agar tagihan mengikuti folder",
    "Ubah project ID untuk mengganti billing account",
  ],
  [
    "Hierarki resource dan hubungan billing merupakan konfigurasi terpisah.",
    "Folder bukan billing account dan perpindahan tidak otomatis mengubah tautan penagihan.",
    "Subnet tidak menentukan billing account suatu proyek.",
    "Project ID bukan kontrol untuk menautkan akun penagihan.",
  ],
  "billing/docs/how-to/modify-project",
);
q(
  "group-offboarding-direct-binding",
  "1.1",
  "Akses seorang pegawai diberikan melalui grup Cloud Identity. Setelah pindah tim, ia dikeluarkan dari grup tetapi masih dapat membaca proyek. Apa langkah pemeriksaan berikutnya?",
  [
    "Periksa grant langsung, grup lain, dan role yang diwariskan pada identitas tersebut",
    "Hapus proyek karena perubahan grup tidak pernah berlaku pada IAM",
    "Nonaktifkan billing agar semua izin IAM terhapus",
    "Ubah alamat IP workstation untuk mencabut role",
  ],
  [
    "Jalur pemberian izin lain dapat mempertahankan akses meskipun satu keanggotaan grup telah dicabut.",
    "Penghapusan proyek bukan prosedur pengelolaan akses pengguna.",
    "Pengaturan billing tidak mencabut semua binding IAM.",
    "Alamat IP workstation tidak menghapus binding role pengguna.",
  ],
  "iam/docs/resource-hierarchy-access-control",
);
q(
  "metrics-scope-viewer-permission",
  "1.1",
  "Proyek A telah dijadikan scoping project untuk melihat metrik beberapa proyek. Seorang operator belum dapat membuka metrik dari tampilan tersebut. Apa yang perlu diperiksa selain konfigurasi metrics scope?",
  [
    "Izin Monitoring yang sesuai pada scoping project untuk operator",
    "Role Billing Account Creator pada operator",
    "Kuota GPU pada proyek yang dipantau",
    "Keanggotaan operator pada semua service account VM",
  ],
  [
    "Metrics scope menentukan data yang dicakup; pengguna tetap memerlukan izin akses Monitoring.",
    "Pembuatan billing account tidak memberikan akses Monitoring.",
    "Kuota akselerator tidak mengatur akses pengguna ke metrik.",
    "Service account VM bukan grup yang harus diikuti operator untuk membaca Monitoring.",
  ],
  "monitoring/settings/multiple-projects",
);
q(
  "identity-directory-sync-onprem",
  "1.1",
  "Organisasi ingin menyinkronkan pengguna dan grup dari Active Directory kantor ke Cloud Identity, sementara direktori kantor tetap menjadi sumber utama. Pendekatan mana yang sesuai?",
  [
    "Gunakan Google Cloud Directory Sync dengan pemetaan dan uji sinkronisasi sebelum menerapkan perubahan",
    "Gunakan Workforce Identity Federation lalu anggap akun direktori Google otomatis dibuat",
    "Buat binding IAM individu tanpa menyinkronkan perubahan direktori",
    "Buat akun sekali melalui impor manual tanpa alur sinkronisasi berikutnya",
  ],
  [
    "Directory Sync dirancang untuk menyinkronkan data direktori ke direktori Google; pemetaan dan simulasi perlu diperiksa.",
    "Federasi mengizinkan identitas eksternal mengakses resource; bukan proses yang otomatis membuat dan menyinkronkan akun Cloud Identity.",
    "Binding IAM tidak mengelola siklus hidup akun dan anggota grup di direktori Google.",
    "Impor satu kali tidak menangani perubahan direktori kantor secara berkelanjutan.",
  ],
  "identity/docs/how-to/create-cloud-identity-user-accounts",
);
q(
  "billing-currency-separation",
  "1.2",
  "Dua entitas perusahaan memerlukan penagihan dalam mata uang berbeda. Apakah membuat dua budget pada satu billing account akan memisahkan mata uang penagihannya?",
  [
    "Tidak; evaluasi billing account terpisah dengan mata uang yang sesuai untuk setiap entitas",
    "Ya; mata uang setiap budget selalu mengubah mata uang tagihan proyek",
    "Ya; label proyek menentukan mata uang pembayaran",
    "Tidak perlu konfigurasi karena zona VM menentukan mata uang billing account",
  ],
  [
    "Budget membatasi cakupan pemantauan biaya, bukan mengubah mata uang billing account.",
    "Budget tidak membuat beberapa mata uang penagihan dalam satu akun.",
    "Label merupakan metadata dan bukan pengaturan mata uang pembayaran.",
    "Lokasi VM tidak menentukan mata uang yang ditetapkan pada billing account.",
  ],
  "billing/docs/resources/currency",
);

q(
  "hyperdisk-independent-provisioning",
  "2.1",
  "Aplikasi pada VM membutuhkan penyimpanan blok dengan IOPS dan throughput yang dapat diprovisikan sesuai kebutuhan. Tim mempertimbangkan Hyperdisk. Apa langkah pemilihan yang tepat?",
  [
    "Pilih tipe Hyperdisk yang mendukung kebutuhan IOPS/throughput dan kompatibel dengan tipe mesin",
    "Pilih disk hanya berdasarkan nama zona; semua tipe disk memiliki karakteristik identik",
    "Gunakan Local SSD dengan asumsi datanya selalu bertahan setelah VM dihapus",
    "Gunakan bucket Cloud Storage sebagai pengganti langsung disk boot",
  ],
  [
    "Jenis Hyperdisk dan dukungan mesin memiliki kemampuan serta batas yang perlu dicocokkan dengan workload.",
    "Karakteristik performa dan batas tipe disk tidak identik.",
    "Local SSD bersifat penyimpanan sementara dan tidak memberikan jaminan persistensi tersebut.",
    "Object storage bukan pengganti langsung perangkat blok untuk disk boot VM.",
  ],
  "compute/docs/disks/hyperdisks",
);
q(
  "regional-disk-not-complete-failover",
  "2.1",
  "Tim memilih regional Persistent Disk untuk mereplikasi data VM antar dua zona. Mereka juga membutuhkan pemulihan aplikasi saat zona aktif gagal. Pernyataan mana yang tepat?",
  [
    "Replikasi disk perlu disertai prosedur failover VM dan aplikasi yang diuji",
    "Regional Persistent Disk otomatis memindahkan semua proses aplikasi ke zona lain",
    "Snapshot harian saja selalu memenuhi kebutuhan pemulihan tanpa kehilangan transaksi",
    "Mengubah nama disk membuat aplikasi otomatis aktif di dua zona",
  ],
  [
    "Perlindungan data lintas zona tidak dengan sendirinya mengatur seluruh siklus pemulihan aplikasi.",
    "Disk bukan orkestrator semua proses VM dan aplikasi.",
    "Snapshot periodik memiliki titik pemulihan tertentu dan tidak selalu memenuhi target kehilangan data.",
    "Nama disk tidak mengatur deployment aplikasi atau failover.",
  ],
  "compute/docs/disks/high-availability-regional-persistent-disk",
);
q(
  "vm-manager-patch-fleet",
  "2.1",
  "Operator harus menerapkan patch OS secara terjadwal pada banyak VM dan meninjau hasil tiap VM. Solusi Google Cloud mana yang sesuai untuk pengelolaan armada ini?",
  [
    "VM Manager dengan patch management dan prasyarat agen yang sesuai",
    "Startup script yang dijalankan hanya ketika VM dinyalakan",
    "Snapshot schedule tanpa operasi pembaruan paket",
    "Menyalin image baru ke Cloud Storage tanpa memperbarui VM yang sedang berjalan",
  ],
  [
    "VM Manager menyediakan pengelolaan OS armada, termasuk patch deployment dan pelaporannya.",
    "Startup script saja tidak memberikan patch job berkala dan laporan armada yang diminta untuk VM yang tetap berjalan.",
    "Snapshot melindungi salinan disk; snapshot tidak menerapkan pembaruan OS.",
    "Menyimpan image tidak mengubah OS pada VM aktif.",
  ],
  "compute/vm-manager/docs/patch",
);
q(
  "kubectl-cluster-credentials-context",
  "2.1",
  "kubectl sudah terpasang, tetapi operator belum memiliki context untuk cluster GKE yang akan dikelola. Ia sudah memiliki izin yang diperlukan. Langkah mana yang tepat?",
  [
    "Ambil kredensial cluster dengan gcloud container clusters get-credentials menggunakan lokasi dan proyek yang benar",
    "Jalankan kubectl apply tanpa memilih cluster karena nama proyek sudah cukup",
    "Salin key service account aplikasi sebagai pengganti endpoint cluster",
    "Ubah billing account agar kubectl mendeteksi cluster otomatis",
  ],
  [
    "Perintah get-credentials memperbarui konfigurasi kubectl untuk cluster yang dipilih; komponen autentikasi GKE juga harus tersedia.",
    "kubectl memerlukan konfigurasi target cluster, bukan sekadar asumsi proyek.",
    "Key aplikasi tidak menggantikan informasi cluster dan konfigurasi koneksi.",
    "Tautan billing tidak membentuk context kubectl.",
  ],
  "kubernetes-engine/docs/how-to/cluster-access-for-kubectl",
);
q(
  "agent-runtime-managed-deployment-choice",
  "2.1",
  "Tim telah membuat agent dengan framework yang didukung Agent Platform dan ingin deployment langsung ke runtime agent terkelola platform tersebut. Pilihan mana yang paling sesuai?",
  [
    "Agent Runtime pada Gemini Enterprise Agent Platform",
    "VM Compute Engine dengan lifecycle agent yang dikelola tim sendiri",
    "Job BigQuery untuk mengeksekusi seluruh percakapan agent",
    "Cloud Storage sebagai host proses eksekusi agent",
  ],
  [
    "Agent Runtime menyediakan lingkungan runtime terkelola untuk agent; kebutuhan, dependensi, dan dukungan framework tetap perlu diperiksa.",
    "VM dapat menjalankan software, tetapi tim harus mengelola deployment dan runtime sendiri.",
    "Job analitik BigQuery bukan pengganti runtime aplikasi agent.",
    "Penyimpanan objek tidak menjalankan proses eksekusi agent.",
  ],
  "gemini-enterprise-agent-platform/build/runtime",
);
q(
  "tpu-framework-compatibility-choice",
  "2.1",
  "Tim mempertimbangkan TPU untuk komputasi pembelajaran mesin. Mereka belum memeriksa apakah kode dan framework yang digunakan mendukung TPU. Apa yang sebaiknya dilakukan sebelum provisioning?",
  [
    "Verifikasi dukungan framework, operasi model, lokasi, dan kuota TPU untuk workload tersebut",
    "Anggap semua program CUDA dapat berjalan di TPU tanpa perubahan",
    "Pilih TPU hanya karena aplikasi memerlukan disk besar",
    "Gunakan TPU sebagai pengganti langsung CPU untuk setiap server web",
  ],
  [
    "Pemilihan akselerator harus sesuai stack perangkat lunak dan karakteristik komputasi, bukan nama produk semata.",
    "CUDA terkait ekosistem GPU dan bukan jaminan kompatibilitas TPU.",
    "Kapasitas disk bukan alasan memilih akselerator tensor.",
    "TPU bukan pengganti umum CPU untuk semua proses server web.",
  ],
  "tpu/docs/intro-to-tpu",
);
q(
  "spanner-global-relational-choice",
  "2.2",
  "Aplikasi membutuhkan basis data relasional terkelola, transaksi konsisten, dan deployment multi-region untuk kebutuhan bisnis global. Layanan mana yang paling tepat dievaluasi?",
  [
    "Spanner",
    "Cloud SQL dengan read replica lintas region sebagai pengganti transaksi global konsisten",
    "Bigtable untuk aplikasi yang harus mempertahankan model relasional SQL",
    "Memorystore sebagai sumber utama transaksi persisten global",
  ],
  [
    "Spanner mendukung basis data relasional terdistribusi dengan konfigurasi regional dan multi-region.",
    "Replikasi baca lintas region tidak identik dengan database relasional terdistribusi yang menyediakan transaksi global konsisten.",
    "Bigtable adalah basis data wide-column, bukan pengganti identik engine relasional.",
    "Cache dalam memori tidak menggantikan kebutuhan sumber transaksi relasional tersebut.",
  ],
  "spanner/docs/overview",
);
q(
  "bigtable-wide-column-choice",
  "2.2",
  "Sistem menyimpan data deret waktu dalam volume sangat besar dengan akses berbasis row key. Tim membutuhkan basis data wide-column berlatensi rendah, bukan join SQL relasional. Layanan mana yang sesuai?",
  [
    "Bigtable",
    "Cloud SQL dengan model tabel relasional",
    "BigQuery untuk kueri analitik yang memindai kumpulan data",
    "Cloud Storage untuk penyimpanan objek",
  ],
  [
    "Bigtable cocok untuk data wide-column berskala besar dengan pola akses berdasarkan key.",
    "Cloud SQL merupakan layanan relasional dan bukan layanan wide-column yang diminta.",
    "BigQuery berfokus pada analitik dan bukan layanan wide-column operasional dengan pola akses row key yang diminta.",
    "Bucket objek bukan database wide-column dengan akses baris interaktif.",
  ],
  "bigtable/docs/overview",
);
q(
  "alloydb-postgresql-compatibility",
  "2.2",
  "Perusahaan ingin mempertahankan kompatibilitas PostgreSQL dan mengevaluasi layanan database terkelola Google untuk workload transaksional berperforma tinggi. Produk mana yang sesuai untuk penilaian awal?",
  [
    "AlloyDB for PostgreSQL",
    "Firestore dengan asumsi semua SQL PostgreSQL dapat dipakai tanpa perubahan",
    "Bigtable dengan asumsi protokol PostgreSQL tersedia secara identik",
    "Cloud Storage dengan asumsi menyediakan engine PostgreSQL",
  ],
  [
    "AlloyDB adalah layanan database kompatibel PostgreSQL; kompatibilitas fitur dan kebutuhan migrasi tetap perlu diuji.",
    "Firestore bukan engine PostgreSQL dan model datanya berbeda.",
    "Bigtable bukan layanan dengan protokol PostgreSQL yang identik.",
    "Cloud Storage adalah penyimpanan objek, bukan server PostgreSQL.",
  ],
  "alloydb/docs/overview",
);
q(
  "managed-kafka-protocol-choice",
  "2.2",
  "Aplikasi perusahaan sudah menggunakan producer dan consumer Apache Kafka. Tim ingin layanan Kafka terkelola di Google Cloud tanpa mengganti protokol klien menjadi Pub/Sub. Produk mana yang sesuai?",
  [
    "Google Cloud Managed Service for Apache Kafka",
    "Pub/Sub tanpa meninjau perbedaan protokol klien",
    "Cloud Tasks sebagai broker Kafka yang identik",
    "Dataflow sebagai pengganti langsung broker Kafka",
  ],
  [
    "Layanan Kafka terkelola ditujukan untuk workload ekosistem Kafka; konfigurasi jaringan dan autentikasi tetap diperlukan.",
    "Pub/Sub bukan pengganti protokol Kafka yang identik tanpa penyesuaian atau integrasi.",
    "Cloud Tasks mengelola eksekusi tugas, bukan menyediakan broker Kafka identik.",
    "Dataflow memproses pipeline data dan dapat berintegrasi dengan Kafka; bukan pengganti langsung broker Kafka.",
  ],
  "managed-service-for-apache-kafka/docs/overview",
);
q(
  "memorystore-cache-data-durability",
  "2.2",
  "Aplikasi berulang kali membaca hasil perhitungan yang boleh dibuat ulang. Tim ingin cache Redis terkelola, sementara data utama tetap di database persisten. Solusi mana yang sesuai?",
  [
    "Memorystore dengan strategi cache miss dan pengisian ulang",
    "Memorystore sebagai satu-satunya sumber data penting tanpa rencana pemulihan",
    "Cloud DNS sebagai cache hasil perhitungan aplikasi",
    "Cloud Storage lifecycle sebagai server Redis",
  ],
  [
    "Cache terkelola dapat mempercepat pembacaan; aplikasi tetap harus menangani data yang tidak ada atau sudah kedaluwarsa.",
    "Menganggap cache satu-satunya sumber data penting bertentangan dengan kebutuhan sumber persisten.",
    "DNS menyelesaikan nama, bukan menyimpan hasil perhitungan aplikasi melalui Redis.",
    "Lifecycle mengatur objek, bukan menjalankan layanan Redis.",
  ],
  "memorystore/docs/redis/memorystore-for-redis-overview",
);
q(
  "netapp-smb-file-service",
  "2.2",
  "Aplikasi perusahaan memerlukan berbagi berkas SMB terkelola dan integrasi Active Directory. Tim harus mempertahankan akses berbasis file, bukan menulis ulang aplikasi ke API objek. Layanan mana yang sesuai?",
  [
    "Google Cloud NetApp Volumes dengan konfigurasi SMB dan Active Directory yang didukung",
    "Filestore dengan protokol NFS sebagai pengganti SMB tanpa perubahan klien",
    "Persistent Disk yang dipasang pada satu VM tanpa server SMB",
    "Cloud Storage tanpa gateway/protokol tambahan sebagai file share SMB",
  ],
  [
    "NetApp Volumes mendukung layanan file, termasuk SMB dan integrasi direktori sesuai konfigurasi.",
    "Filestore menggunakan NFS dan bukan pengganti protokol SMB yang identik bagi aplikasi tersebut.",
    "Disk blok saja tidak menyediakan layanan SMB terkelola dan integrasi direktori.",
    "Bucket objek tidak menjadi endpoint SMB tanpa komponen dan integrasi yang sesuai.",
  ],
  "netapp/volumes/docs/discover/overview",
);
q(
  "managed-lustre-parallel-filesystem",
  "2.2",
  "Workload HPC membutuhkan sistem berkas paralel berbasis Lustre dengan akses file POSIX dan throughput tinggi. Tim ingin layanan terkelola di Google Cloud. Layanan mana yang sesuai?",
  [
    "Google Cloud Managed Lustre",
    "Cloud Storage tanpa lapisan tambahan sebagai implementasi Lustre yang identik",
    "Filestore sebagai implementasi filesystem Lustre yang identik",
    "NetApp Volumes sebagai layanan Lustre yang identik",
  ],
  [
    "Managed Lustre menyediakan sistem berkas paralel terkelola untuk workload yang memerlukan karakteristik tersebut.",
    "Penyimpanan objek tidak identik dengan protokol dan perilaku filesystem Lustre.",
    "Filestore menyediakan file storage berbasis NFS; bukan implementasi Lustre yang diminta.",
    "NetApp Volumes menyediakan layanan file dengan protokol yang didukungnya, bukan filesystem Lustre yang identik.",
  ],
  "managed-lustre/docs/overview",
);
q(
  "dual-region-storage-data-residency",
  "2.2",
  "Dokumen harus disimpan pada dua region tertentu yang didukung agar tetap tersedia ketika salah satu region mengalami gangguan. Kedua region harus memenuhi kebijakan lokasi data. Konfigurasi Cloud Storage mana yang perlu dievaluasi?",
  [
    "Bucket dual-region pada pasangan lokasi yang didukung dan disetujui",
    "Bucket regional dengan dua folder bernama region berbeda",
    "Dua label lokasi pada bucket regional yang sama",
    "Satu bucket regional dengan versioning sebagai pengganti replikasi lintas region",
  ],
  [
    "Dual-region menyimpan data redundan di dua region sesuai konfigurasi; lokasi yang didukung dan persyaratan layanan perlu diperiksa.",
    "Folder tidak memindahkan lokasi penyimpanan fisik bucket.",
    "Label bukan konfigurasi lokasi atau replikasi data.",
    "Versioning mempertahankan versi objek dan tidak menggantikan pemilihan lokasi redundan lintas region.",
  ],
  "storage/docs/locations",
);
q(
  "ngfw-iam-governed-tags",
  "2.3",
  "Tim ingin menentukan sumber dan target aturan Cloud NGFW berdasarkan identitas workload yang pengelolaan tagnya dikendalikan IAM. Jenis tag mana yang sesuai?",
  [
    "Secure tags yang dikelola Resource Manager dengan izin binding yang sesuai",
    "Network tags biasa dengan asumsi memiliki kontrol IAM per nilai tag yang sama",
    "Label billing yang otomatis menjadi target setiap aturan firewall",
    "Nama VM tanpa binding tag sebagai pengganti secure tag",
  ],
  [
    "Secure tags adalah tag yang dikendalikan IAM dan dapat digunakan dalam kebijakan firewall yang mendukungnya.",
    "Network tags biasa berbeda dari secure tags dan tidak memiliki kontrol yang identik.",
    "Label biaya tidak otomatis menjadi identitas sumber atau target firewall.",
    "Nama VM tidak sama dengan binding secure tag untuk evaluasi kebijakan.",
  ],
  "firewall/docs/tags-firewalls-overview",
);
q(
  "hybrid-vpn-versus-interconnect",
  "2.3",
  "Kantor membutuhkan konektivitas IPsec ke VPC untuk tahap awal dan dapat memakai internet yang sudah tersedia. Belum ada kebutuhan sambungan fisik dedicated. Pilihan mana yang sesuai?",
  [
    "Cloud VPN dengan konfigurasi tunnel, routing, dan redundansi yang diperlukan",
    "Cloud Interconnect tanpa menyediakan koneksi yang menjadi prasyaratnya",
    "VPC Network Peering langsung ke router fisik kantor tanpa jaringan Google Cloud kedua",
    "Cloud NAT sebagai pengganti tunnel ke kantor",
  ],
  [
    "Cloud VPN menyediakan konektivitas IPsec melalui internet; desain redundansi tetap perlu disesuaikan dengan target ketersediaan.",
    "Interconnect memerlukan koneksi yang sesuai dan bukan tunnel internet tanpa prasyarat fisik.",
    "Peering menghubungkan jaringan VPC, bukan langsung menggantikan VPN ke router on-premises.",
    "NAT menyediakan translasi alamat dan bukan tunnel konektivitas kantor.",
  ],
  "network-connectivity/docs/vpn/concepts/overview",
);
q(
  "network-service-tier-lb-compatibility",
  "2.3",
  "Tim memilih Network Service Tiers untuk aplikasi yang memakai load balancer global tertentu. Sebelum mengganti Premium ke Standard demi biaya, apa yang harus diperiksa?",
  [
    "Dukungan tier oleh jenis load balancer, cakupan IP, dan kebutuhan routing aplikasi",
    "Anggap Standard dan Premium dapat dipertukarkan pada setiap load balancer",
    "Anggap tier mengubah izin IAM administrator",
    "Ubah kelas penyimpanan bucket agar Network Service Tier ikut berubah",
  ],
  [
    "Tier memiliki karakteristik routing dan dukungan produk yang berbeda; kompatibilitas deployment harus diperiksa.",
    "Tidak setiap konfigurasi global mendukung semua tier secara identik.",
    "Network Service Tier bukan kontrol pemberian role IAM.",
    "Kelas penyimpanan objek tidak menentukan tier jaringan load balancer.",
  ],
  "network-tiers/docs/overview",
);
q(
  "config-connector-kubernetes-resources",
  "2.4",
  "Tim memakai Kubernetes sebagai titik pengelolaan dan ingin mendeklarasikan resource Google Cloud melalui custom resources, dengan controller yang merekonsiliasi perubahan. Tool mana yang sesuai?",
  [
    "Config Connector",
    "Helm sebagai satu-satunya controller resource Google Cloud tanpa komponen lain",
    "Cloud Asset Inventory sebagai controller deklaratif",
    "Cloud Billing export sebagai pengganti custom resource definitions",
  ],
  [
    "Config Connector menggunakan resource Kubernetes untuk mengelola resource Google Cloud melalui rekonsiliasi.",
    "Helm mengelola paket/manifes Kubernetes dan tidak sendirinya menyediakan controller Google Cloud tersebut.",
    "Inventory mencatat resource dan bukan controller deklaratif untuk provisioning.",
    "Ekspor billing tidak mendefinisikan ataupun merekonsiliasi resource Kubernetes.",
  ],
  "config-connector/docs/overview",
);
q(
  "helm-reviewed-upgrade",
  "2.4",
  "Aplikasi GKE dipaketkan sebagai Helm chart. Operator akan merilis perubahan konfigurasi. Langkah mana yang paling tepat sebelum upgrade ke produksi?",
  [
    "Tinjau chart, values, hasil render, serta rencana rollback pada cluster target",
    "Jalankan upgrade dari chart tidak dikenal tanpa memeriksa values",
    "Ubah nama release agar seluruh dependensi pasti kompatibel",
    "Hapus namespace produksi terlebih dahulu agar upgrade selalu aman",
  ],
  [
    "Helm menghasilkan resource Kubernetes; konfigurasi hasil render dan prosedur pemulihan perlu diperiksa.",
    "Chart dan values dapat mengubah resource atau keamanan sehingga harus ditinjau.",
    "Perubahan nama release tidak membuktikan kompatibilitas aplikasi maupun dependensi.",
    "Penghapusan namespace dapat menghilangkan resource produksi dan bukan prasyarat upgrade aman.",
  ],
  "kubernetes-engine/config-sync/docs/tutorials/config-sync-helm",
);
q(
  "ai-assisted-infrastructure-plan-review",
  "2.4",
  "Asisten AI melalui Gemini CLI atau Google Antigravity mengusulkan perintah dan konfigurasi infrastruktur. Tim hendak menerapkannya pada proyek produksi. Prosedur mana yang tepat?",
  [
    "Validasi target proyek, izin, perubahan resource, dan hasil rencana sebelum eksekusi yang disetujui",
    "Berikan akses organisasi tanpa batas agar seluruh keluaran AI pasti benar",
    "Abaikan versi provider karena konfigurasi yang dibuat AI selalu kompatibel",
    "Jalankan seluruh perintah tanpa meninjau dampak karena asisten menggantikan IAM",
  ],
  [
    "Bantuan AI mendukung pekerjaan operator; validasi serta kontrol perubahan tetap diperlukan.",
    "Izin luas tidak menjamin ketepatan keluaran dan meningkatkan dampak kesalahan.",
    "Versi tool dan provider dapat memengaruhi validitas konfigurasi.",
    "Asisten tidak menghapus kebutuhan IAM maupun peninjauan perubahan.",
  ],
  "gemini/docs/codeassist/gemini-cli",
);
q(
  "application-design-center-terraform",
  "2.4",
  "Tim ingin merancang aplikasi berbasis katalog dan template infrastruktur, menggunakan bantuan Gemini, lalu meninjau konfigurasi Terraform yang akan diprovisikan. Produk mana yang sesuai?",
  [
    "Application Design Center",
    "Cloud Logging sebagai pengganti katalog deployment aplikasi",
    "Cloud DNS sebagai editor seluruh konfigurasi Terraform",
    "Database Center sebagai tool desain jaringan dan komputasi aplikasi",
  ],
  [
    "Application Design Center mendukung desain dan pengelolaan infrastruktur aplikasi berbasis template dan Terraform.",
    "Logging menyimpan dan menganalisis log, bukan katalog desain deployment tersebut.",
    "DNS mengelola resolusi nama dan bukan editor desain seluruh aplikasi.",
    "Database Center berfokus pada inventaris dan kesehatan armada database, bukan desain umum aplikasi.",
  ],
  "application-design-center/docs/overview",
);
q(
  "storage-class-minimum-duration-cost",
  "2.2",
  "Tim membandingkan Nearline, Coldline, dan Archive untuk data yang jarang dibaca. Data mungkin dihapus sebelum minimum storage duration kelas yang dipilih. Apa yang perlu dimasukkan dalam estimasi biaya?",
  [
    "Harga penyimpanan, pengambilan/operasi, serta biaya terkait minimum storage duration",
    "Hanya harga kapasitas per GB karena kelas arsip tidak memiliki biaya lain",
    "Hanya jumlah folder karena folder menentukan minimum storage duration",
    "Anggap perpindahan ke Archive selalu bebas biaya jika segera dihapus",
  ],
  [
    "Penghematan harus dinilai dari pola akses dan seluruh komponen biaya, termasuk durasi minimum yang berlaku.",
    "Kelas penyimpanan dapat memiliki biaya akses dan durasi minimum selain biaya kapasitas.",
    "Struktur folder tidak menentukan aturan durasi minimum kelas penyimpanan.",
    "Penghapusan dini dapat tetap menimbulkan biaya durasi minimum.",
  ],
  "storage/docs/storage-classes",
);

q(
  "iap-os-login-private-ssh",
  "3.1",
  "Operator perlu SSH ke VM tanpa IP publik melalui Identity-Aware Proxy. OS Login diaktifkan. Prasyarat mana yang perlu diperiksa?",
  [
    "Izin IAP dan OS Login yang sesuai serta jalur jaringan/firewall untuk akses IAP",
    "Hanya role Billing Viewer karena IAP melewati seluruh kontrol akses",
    "Mengaktifkan OS Login saja tanpa memeriksa jaringan",
    "Menaruh private key bersama pada bucket publik agar IAP dapat masuk",
  ],
  [
    "Identitas, akses OS, dan konektivitas tunnel merupakan prasyarat berbeda yang harus terpenuhi.",
    "Role penagihan tidak memberikan akses tunnel dan akses OS.",
    "OS Login tidak otomatis memastikan firewall dan jalur jaringan benar.",
    "Key publik bersama membocorkan kredensial dan bukan prasyarat IAP.",
  ],
  "iap/docs/using-tcp-forwarding",
);
q(
  "snapshot-schedule-policy",
  "3.1",
  "Tim ingin snapshot disk dilakukan berkala dengan kebijakan retensi yang konsisten. Mereka tidak ingin operator membuat snapshot manual setiap malam. Konfigurasi mana yang sesuai?",
  [
    "Buat snapshot schedule dan pasangkan resource policy pada disk yang didukung",
    "Buat satu image hari ini dan anggap image terus mengikuti perubahan disk",
    "Aktifkan billing export agar snapshot otomatis terbentuk",
    "Simpan nama disk dalam label tanpa memasang kebijakan snapshot",
  ],
  [
    "Snapshot schedule mengotomatiskan pembuatan snapshot sesuai jadwal dan retensi yang dikonfigurasi.",
    "Image yang sudah dibuat tidak otomatis memutakhirkan seluruh data disk berikutnya.",
    "Ekspor biaya tidak menjalankan pencadangan disk.",
    "Label tidak menjalankan mekanisme snapshot terjadwal.",
  ],
  "compute/docs/disks/scheduled-snapshots",
);
q(
  "statefulset-stable-pod-storage",
  "3.1",
  "Aplikasi GKE membutuhkan identitas Pod yang stabil dan volume persisten terpisah bagi setiap replika. Resource Kubernetes mana yang sebaiknya dievaluasi?",
  [
    "StatefulSet dengan konfigurasi penyimpanan yang sesuai",
    "Deployment dengan anggapan setiap Pod otomatis memiliki identitas ordinal stabil yang sama",
    "ConfigMap sebagai pengganti volume data persisten",
    "Service saja tanpa workload pengelola Pod",
  ],
  [
    "StatefulSet menyediakan identitas dan pola penyimpanan persisten yang sesuai untuk aplikasi stateful.",
    "Deployment ditujukan untuk Pod yang dapat dipertukarkan dan tidak memberi semua semantik StatefulSet.",
    "ConfigMap menyimpan konfigurasi, bukan pengganti volume data aplikasi.",
    "Service mengatur akses jaringan, bukan siklus hidup dan penyimpanan Pod.",
  ],
  "kubernetes-engine/docs/concepts/statefulset",
);
q(
  "vpa-versus-hpa-resource-requests",
  "3.1",
  "Setiap Pod aplikasi sering kekurangan memori. Tim ingin rekomendasi atau penyesuaian CPU/memory request per Pod, bukan sekadar menambah jumlah replika. Fitur mana yang sesuai?",
  [
    "Vertical Pod Autoscaler dengan mode pembaruan yang ditinjau",
    "Horizontal Pod Autoscaler sebagai satu-satunya pengubah request setiap container",
    "Cloud NAT autoscaling untuk menambah memori Pod",
    "Cloud DNS untuk menaikkan batas memori container",
  ],
  [
    "VPA menangani ukuran request resource Pod; mode penerapan perlu disesuaikan dengan risiko gangguan.",
    "HPA terutama mengubah jumlah replika, bukan ukuran request setiap container.",
    "NAT mengelola konektivitas jaringan, bukan resource memori Pod.",
    "DNS tidak mengubah request ataupun limit container.",
  ],
  "kubernetes-engine/docs/concepts/verticalpodautoscaler",
);
q(
  "autopilot-pod-resource-requests",
  "3.1",
  "Operator menjalankan workload di GKE Autopilot. Mereka ingin mengendalikan kebutuhan resource dan biaya tanpa mengelola node pool secara langsung. Apa yang harus ditinjau?",
  [
    "Request resource Pod, kebutuhan workload, dan aturan/default Autopilot yang berlaku",
    "Hanya jumlah node fisik yang dibeli manual oleh operator",
    "Ukuran disk laptop tempat kubectl dijalankan",
    "Nama namespace sebagai satu-satunya penentu biaya compute",
  ],
  [
    "Autopilot mengelola infrastrukturnya, sedangkan konfigurasi workload seperti resource request tetap penting.",
    "Pengelolaan node fisik manual bukan model operasional utama Autopilot.",
    "Disk laptop operator tidak menentukan alokasi resource Pod.",
    "Namespace bukan satu-satunya faktor kebutuhan resource atau penagihan.",
  ],
  "kubernetes-engine/docs/concepts/autopilot-resource-requests",
);
q(
  "node-pool-workload-safe-migration",
  "3.1",
  "Tim mengganti node pool GKE Standard. Beberapa Pod masih berjalan pada pool lama. Sebelum menghapus pool itu, apa yang sebaiknya dilakukan?",
  [
    "Pastikan kapasitas pool baru, penjadwalan ulang, dan kebutuhan disruption workload sudah terpenuhi",
    "Hapus pool lama terlebih dahulu tanpa memeriksa penempatan Pod",
    "Ubah label billing saja agar Pod berpindah otomatis",
    "Hapus Service agar data persistent volume otomatis pindah region",
  ],
  [
    "Migrasi pool perlu mempertimbangkan kapasitas, constraint penjadwalan, dan dampak gangguan aplikasi.",
    "Penghapusan langsung dapat menghentikan workload sebelum kapasitas pengganti siap.",
    "Label biaya tidak mengeksekusi migrasi Pod.",
    "Penghapusan Service tidak memindahkan data volume antar region.",
  ],
  "kubernetes-engine/docs/how-to/node-pools",
);
q(
  "gpu-vm-driver-compatibility",
  "3.1",
  "VM baru dengan GPU sudah dibuat, tetapi aplikasi belum mengenali akselerator. Operator hendak memeriksa deployment. Langkah mana yang relevan?",
  [
    "Periksa attachment GPU, tipe mesin, driver, dan kompatibilitas stack aplikasi",
    "Hanya ganti nama instance agar GPU terdeteksi",
    "Buat budget baru agar driver terpasang otomatis",
    "Ubah record DNS untuk menambah akselerator ke VM",
  ],
  [
    "Akselerator memerlukan konfigurasi VM dan perangkat lunak yang kompatibel untuk digunakan aplikasi.",
    "Nama instance tidak memasang driver atau mengubah kompatibilitas akselerator.",
    "Budget tidak memasang perangkat lunak GPU.",
    "DNS tidak menambahkan perangkat akselerator ke VM.",
  ],
  "compute/docs/gpus/install-drivers-gpu",
);
q(
  "agent-runtime-runtime-identity",
  "3.1",
  "Agent berhasil berjalan di laptop pengembang tetapi gagal mengakses resource setelah dideploy ke Agent Runtime. Pengembang lokal memiliki akses yang lebih luas. Apa pemeriksaan yang tepat?",
  [
    "Periksa identitas runtime, izin minimum, konfigurasi, dan dependensi deployment agent",
    "Unggah kredensial pribadi pengembang ke semua instance runtime",
    "Anggap login lokal otomatis diwariskan menjadi identitas produksi",
    "Berikan akses publik ke seluruh resource agar agent tidak perlu IAM",
  ],
  [
    "Deployment harus memakai identitas dan konfigurasi runtime yang benar; akses lokal tidak membuktikan akses produksi.",
    "Kredensial pribadi bukan identitas runtime produksi yang tepat.",
    "Kredensial lingkungan lokal tidak otomatis menjadi izin runtime terkelola.",
    "Akses publik luas menghilangkan pembatasan yang dibutuhkan dan tidak menyelesaikan desain identitas.",
  ],
  "gemini-enterprise-agent-platform/build/runtime",
);
q(
  "workbench-notebook-managed-environment",
  "3.1",
  "Tim analitik membutuhkan notebook JupyterLab terkelola yang dapat mengakses BigQuery dan Cloud Storage memakai izin yang sesuai. Produk pada panduan mana yang dapat digunakan?",
  [
    "Gemini Enterprise Agent Platform Workbench",
    "Cloud DNS sebagai lingkungan eksekusi notebook",
    "Cloud Billing sebagai kernel Jupyter",
    "Cloud NAT sebagai penyimpanan notebook kolaboratif",
  ],
  [
    "Workbench menyediakan lingkungan notebook untuk alur data science dan integrasi layanan Google Cloud.",
    "DNS menyediakan resolusi nama, bukan kernel dan lingkungan notebook.",
    "Billing bukan lingkungan eksekusi notebook.",
    "NAT menangani translasi koneksi jaringan, bukan mengelola notebook.",
  ],
  "gemini-enterprise-agent-platform/notebooks/workbench/introduction",
);
q(
  "cloud-workstations-standard-dev-environment",
  "3.1",
  "Perusahaan ingin menyediakan lingkungan pengembangan konsisten di cloud untuk setiap developer, dengan konfigurasi dan kontrol akses terpusat. Produk mana yang sesuai?",
  [
    "Cloud Workstations dengan workstation configurations yang sesuai",
    "Satu service account key bersama sebagai pengganti lingkungan pengembangan",
    "Cloud Storage lifecycle sebagai IDE perusahaan",
    "Cloud Asset Inventory sebagai sistem operasi developer",
  ],
  [
    "Cloud Workstations menyediakan lingkungan pengembangan cloud yang dikelola melalui konfigurasi bersama.",
    "Kredensial bersama tidak menyediakan lingkungan pengembangan dan mengurangi akuntabilitas.",
    "Lifecycle objek tidak menyediakan IDE atau lingkungan komputasi developer.",
    "Inventory bukan sistem operasi maupun lingkungan development.",
  ],
  "workstations/docs/overview",
);
q(
  "query-insights-before-index-change",
  "3.4",
  "Latensi aplikasi meningkat dan tim mencurigai kueri database tertentu. Mereka ingin mengidentifikasi kueri yang paling berkontribusi sebelum mengubah indeks atau ukuran instance. Pendekatan mana yang sesuai?",
  [
    "Gunakan Query Insights atau diagnostik database yang didukung untuk memeriksa workload kueri",
    "Naikkan CPU seluruh instance tanpa mengumpulkan bukti kueri",
    "Hapus semua indeks agar proses tulis pasti menyelesaikan latensi baca",
    "Anggap grafik total biaya menunjukkan kueri SQL yang paling lambat",
  ],
  [
    "Diagnostik kueri membantu menghubungkan performa dengan pola workload sebelum melakukan perubahan.",
    "Penambahan kapasitas tanpa analisis dapat tidak mengatasi penyebab utama.",
    "Penghapusan indeks tanpa bukti dapat memperburuk pembacaan dan bukan prosedur diagnosis.",
    "Data penagihan tidak menggantikan informasi eksekusi kueri.",
  ],
  "sql/docs/mysql/using-query-insights",
);
q(
  "database-center-fleet-health",
  "3.2",
  "Tim mengelola beberapa jenis database Google Cloud di banyak proyek dan ingin meninjau inventaris serta masalah kesehatan armada dari satu tempat. Tool mana yang sesuai?",
  [
    "Database Center",
    "Cloud DNS sebagai dashboard kesehatan seluruh database",
    "Cloud Storage lifecycle sebagai inventaris engine database",
    "IAM role editor sebagai dashboard performa database",
  ],
  [
    "Database Center menggabungkan inventaris dan sinyal kesehatan database yang didukung; pembaruannya bukan jaminan real-time.",
    "DNS tidak menyajikan inventaris dan masalah kesehatan armada database tersebut.",
    "Lifecycle objek tidak menginventarisasi engine database lintas proyek.",
    "Editor role mengatur izin, bukan menyediakan dashboard armada.",
  ],
  "database-center/docs/overview",
);
q(
  "bigquery-job-status-error-inspection",
  "3.2",
  "Sebuah job BigQuery tidak menghasilkan tabel yang diharapkan. Operator memiliki job ID. Apa langkah awal untuk mengetahui apakah job masih berjalan atau gagal?",
  [
    "Periksa status, detail error, lokasi, dan statistik job terkait",
    "Jalankan ulang job berulang kali tanpa melihat statusnya",
    "Periksa hanya ukuran bucket tujuan lalu anggap job berhasil",
    "Hapus dataset agar job lama dianggap selesai",
  ],
  [
    "Informasi job membedakan proses yang masih berjalan dari kegagalan dan menunjukkan error yang perlu ditindaklanjuti.",
    "Pengulangan tanpa diagnosis dapat menambah biaya atau menghasilkan keluaran ganda.",
    "Ukuran bucket bukan bukti status job BigQuery.",
    "Penghapusan dataset bukan cara memeriksa ataupun menyelesaikan job yang gagal.",
  ],
  "bigquery/docs/managing-jobs",
);
q(
  "dataflow-job-monitoring-evidence",
  "3.2",
  "Pipeline Dataflow memproses pesan semakin lambat. Operator ingin menentukan tahap yang menjadi hambatan sebelum mengubah konfigurasi. Data mana yang paling relevan?",
  [
    "Status job, metrik pipeline, backlog, dan rincian tahap pemrosesan",
    "Hanya warna label proyek",
    "Hanya jumlah akun billing perusahaan",
    "Nama workstation operator yang membuka console",
  ],
  [
    "Monitoring job dan tahap pipeline menyediakan bukti untuk membedakan hambatan sumber, pemrosesan, dan keluaran.",
    "Label proyek tidak menunjukkan hambatan eksekusi pipeline.",
    "Jumlah billing account tidak menjelaskan tahap Dataflow yang lambat.",
    "Nama perangkat operator tidak mengidentifikasi bottleneck pipeline.",
  ],
  "dataflow/docs/guides/using-monitoring-intf",
);
q(
  "firestore-backup-restoration-target",
  "3.2",
  "Tim menyiapkan latihan pemulihan dari backup Firestore. Mereka perlu membuktikan data hasil pemulihan sebelum memindahkan aplikasi. Rencana mana yang sesuai?",
  [
    "Pulihkan backup ke database baru yang sesuai, validasi data, lalu rencanakan perpindahan aplikasi",
    "Anggap backup otomatis menimpa database aktif tanpa prosedur pemulihan",
    "Ubah nama koleksi pada aplikasi agar backup dipulihkan otomatis",
    "Hapus database sumber sebelum memeriksa validitas backup",
  ],
  [
    "Restorasi Firestore dari backup menggunakan target database baru; validasi dilakukan sebelum cutover.",
    "Backup tidak otomatis menimpa database produksi sebagai pengganti alur restore.",
    "Perubahan nama koleksi tidak menjalankan restore database.",
    "Penghapusan sumber sebelum validasi dapat memperbesar dampak kegagalan pemulihan.",
  ],
  "firestore/native/docs/backups",
);
q(
  "reserve-static-ip-before-dns",
  "3.3",
  "Aplikasi memerlukan alamat IP eksternal tetap yang akan dipublikasikan melalui DNS. Tim belum melakukan deployment final. Langkah mana yang sesuai?",
  [
    "Reservasikan alamat statis dengan scope yang sesuai, gunakan pada resource, lalu konfigurasikan DNS",
    "Gunakan IP ephemeral dan anggap selalu sama setelah resource dibuat ulang",
    "Buat record DNS agar IP ephemeral otomatis berubah menjadi statis",
    "Ubah label VM menjadi static-ip tanpa reservasi alamat",
  ],
  [
    "Alamat statis harus direservasi dan digunakan dengan resource yang kompatibel pada scope terkait.",
    "Alamat ephemeral tidak memberikan jaminan persistensi yang sama.",
    "Record DNS memetakan nama ke tujuan dan tidak mengubah jenis reservasi IP.",
    "Label tidak membuat reservasi alamat jaringan.",
  ],
  "vpc/docs/reserve-static-external-ip-address",
);
q(
  "custom-static-route-next-hop",
  "3.3",
  "Operator menambahkan rute statis VPC untuk prefix tujuan tertentu melalui next hop yang didukung. Resource masih tidak dapat terhubung. Pemeriksaan mana yang relevan?",
  [
    "Periksa cakupan rute, prefix/prioritas, next hop, firewall, dan jalur balik",
    "Anggap adanya rute otomatis mengizinkan seluruh trafik firewall",
    "Ubah role Billing Viewer untuk memprioritaskan paket jaringan",
    "Gunakan label proyek sebagai pengganti prefix tujuan",
  ],
  [
    "Routing, pemilihan next hop, firewall, dan jalur balik harus konsisten agar komunikasi berhasil.",
    "Rute tidak menggantikan evaluasi kebijakan firewall.",
    "Role penagihan tidak menentukan prioritas paket atau rute VPC.",
    "Label tidak menggantikan prefix destination dalam tabel routing.",
  ],
  "vpc/docs/routes",
);
q(
  "managed-prometheus-existing-metrics",
  "3.4",
  "Aplikasi Kubernetes sudah mengekspos metrik Prometheus. Tim ingin koleksi metrik terkelola dan integrasi observabilitas Google Cloud tanpa membangun seluruh backend Prometheus sendiri. Layanan mana yang sesuai?",
  [
    "Google Cloud Managed Service for Prometheus dengan konfigurasi koleksi dan izin yang sesuai",
    "Cloud DNS untuk melakukan scrape endpoint metrik",
    "Billing export sebagai backend metrik resolusi tinggi",
    "Cloud Storage lifecycle sebagai scheduler scrape Prometheus",
  ],
  [
    "Managed Service for Prometheus mendukung alur metrik Prometheus; target, koleksi, dan izin tetap harus dikonfigurasi.",
    "DNS membantu resolusi nama, bukan menjalankan pipeline scrape metrik.",
    "Ekspor billing menyimpan informasi biaya, bukan metrik aplikasi Prometheus.",
    "Lifecycle mengelola objek dan bukan mekanisme pengumpulan metrik.",
  ],
  "stackdriver/docs/managed-prometheus",
);
q(
  "firewall-logging-versus-flow-logs",
  "3.4",
  "Operator perlu bukti bahwa suatu koneksi cocok dengan aturan firewall tertentu yang menolaknya. Logging pada aturan itu belum diaktifkan. Apa tindakan yang sesuai?",
  [
    "Aktifkan logging pada aturan firewall yang mendukungnya dan periksa log koneksi berikutnya",
    "Anggap VPC Flow Logs selalu memuat setiap paket yang ditolak oleh semua aturan",
    "Ubah billing budget agar keputusan firewall dicatat",
    "Hapus aturan sebelum mengumpulkan bukti keputusan akses",
  ],
  [
    "Firewall Rules Logging membantu memeriksa koneksi yang cocok dengan aturan; pengaktifan baru tidak menghasilkan bukti historis yang sebelumnya tidak dicatat.",
    "VPC Flow Logs bukan jaminan pencatatan setiap paket maupun semua penolakan firewall.",
    "Budget tidak mengaktifkan log firewall.",
    "Penghapusan aturan mengubah perilaku keamanan sebelum bukti yang diperlukan dikumpulkan.",
  ],
  "firewall/docs/firewall-rules-logging",
);
q(
  "trace-distributed-latency-path",
  "3.4",
  "Permintaan pengguna melewati beberapa layanan dan memiliki latensi tinggi. Tim ingin melihat waktu yang dihabiskan pada tiap bagian jalur permintaan. Tool mana yang sesuai?",
  [
    "Cloud Trace dengan instrumentasi tracing yang sesuai",
    "Cloud Billing untuk melihat setiap span permintaan",
    "Cloud DNS sebagai perekam waktu seluruh fungsi aplikasi",
    "IAM policy editor sebagai diagram latensi permintaan",
  ],
  [
    "Distributed tracing menghubungkan span pada jalur permintaan sehingga latensi antar komponen dapat diperiksa.",
    "Data biaya tidak menyediakan span eksekusi tiap permintaan.",
    "DNS tidak merekam seluruh alur internal permintaan aplikasi.",
    "Editor IAM mengelola izin, bukan trace runtime aplikasi.",
  ],
  "trace/docs/overview",
);
q(
  "active-assist-rightsizing-validation",
  "3.4",
  "Active Assist merekomendasikan ukuran VM yang lebih kecil berdasarkan penggunaan. Workload memiliki lonjakan bulanan yang penting. Bagaimana operator sebaiknya menindaklanjutinya?",
  [
    "Tinjau periode pengamatan, pola puncak, dan kebutuhan aplikasi lalu uji perubahan sebelum menerapkan",
    "Terapkan semua rekomendasi tanpa meninjau pola bisnis karena rekomendasi menjamin SLA",
    "Hapus monitoring agar rekomendasi tidak berubah",
    "Anggap rekomendasi langsung mengubah seluruh VM tanpa kontrol operator",
  ],
  [
    "Rekomendasi merupakan masukan optimasi yang harus dievaluasi bersama karakteristik workload dan risiko perubahan.",
    "Rekomendasi berbasis data pengamatan tidak otomatis menjamin seluruh kebutuhan bisnis dan SLA.",
    "Menghilangkan monitoring mengurangi bukti untuk keputusan optimasi.",
    "Adanya rekomendasi tidak berarti setiap perubahan sudah dieksekusi otomatis.",
  ],
  "recommender/docs/overview",
);
q(
  "cloud-hub-app-health-context",
  "3.4",
  "Operator ingin meninjau peristiwa aktif dan kesehatan aplikasi dalam konteks aplikasi Google Cloud yang telah didefinisikan. Tool mana yang sesuai untuk tampilan terpusat tersebut?",
  [
    "Cloud Hub dengan konteks aplikasi dan resource yang sesuai",
    "Cloud Identity Groups sebagai dashboard peristiwa operasional",
    "Cloud Storage lifecycle sebagai agregator kesehatan aplikasi",
    "Billing Account Creator sebagai tampilan insiden runtime",
  ],
  [
    "Cloud Hub menggabungkan konteks operasional dan kesehatan aplikasi; resource serta akses yang sesuai tetap diperlukan.",
    "Grup identitas mengelola keanggotaan pengguna, bukan tampilan peristiwa runtime.",
    "Lifecycle mengatur objek penyimpanan, bukan kesehatan aplikasi.",
    "Role pembuatan billing account bukan dashboard operasional.",
  ],
  "hub/docs/overview",
);
q(
  "profiler-cpu-versus-trace",
  "3.4",
  "CPU aplikasi terus tinggi meskipun jumlah permintaan stabil. Tim ingin mengetahui fungsi kode yang paling banyak memakai CPU, bukan hanya durasi antar layanan. Tool mana yang sesuai?",
  [
    "Cloud Profiler dengan dukungan runtime dan agen yang sesuai",
    "Cloud Trace saja sebagai pengganti seluruh informasi profiling CPU",
    "Cloud DNS untuk mengetahui fungsi yang memakai CPU",
    "Cloud Billing export untuk mengetahui stack kode setiap sampel CPU",
  ],
  [
    "Profiling menghubungkan pemakaian resource dengan fungsi atau stack kode pada runtime yang didukung.",
    "Trace berguna untuk jalur dan latensi permintaan, tetapi tidak identik dengan profiling CPU berbasis sampel.",
    "DNS tidak mengukur pemakaian CPU per fungsi aplikasi.",
    "Ekspor biaya tidak memberikan sampel stack pemakaian CPU.",
  ],
  "profiler/docs/about-profiler",
);
q(
  "log-based-error-counter-metric",
  "3.4",
  "Aplikasi sudah menulis log terstruktur dengan status pembayaran. Operator ingin membuat metrik jumlah pembayaran gagal dari entri baru yang cocok dengan filter dan menggunakannya pada alert. Fitur mana yang sesuai?",
  [
    "Log-based counter metric dengan filter yang tepat, lalu kebijakan alert Monitoring",
    "Billing budget yang membaca field status dari setiap log aplikasi",
    "Cloud DNS record TXT untuk menghitung jumlah error",
    "Menghapus log sukses agar otomatis terbentuk metrik error tanpa konfigurasi",
  ],
  [
    "Log-based metric dapat mengubah entri yang cocok menjadi data metrik yang dipakai kebijakan alert.",
    "Budget mengamati data biaya, bukan menghitung status bisnis dari log aplikasi.",
    "Record TXT bukan pipeline pembentukan metrik dari log.",
    "Penghapusan entri tidak otomatis mendefinisikan metrik dan dapat menghilangkan bukti operasional.",
  ],
  "logging/docs/logs-based-metrics/counter-metrics",
);

q(
  "service-account-create-attach-minimum",
  "4.2",
  "Aplikasi baru pada VM perlu membaca satu bucket. Operator akan membuat service account khusus dan memasangnya pada VM. Rencana mana yang sesuai?",
  [
    "Buat service account khusus, beri akses baca bucket yang diperlukan, lalu pastikan operator memiliki izin attach yang sesuai",
    "Berikan Owner organisasi kepada service account agar semua kebutuhan masa depan tercakup",
    "Bagikan key service account antar semua aplikasi tanpa pemisahan identitas",
    "Berikan role baca kepada nama VM tanpa menentukan identitas runtime",
  ],
  [
    "Identitas khusus, izin minimum pada resource target, dan izin attachment memisahkan kebutuhan runtime dari kewenangan operator.",
    "Owner organisasi jauh melampaui kebutuhan membaca satu bucket.",
    "Identitas bersama dan key statis memperbesar cakupan dampak kebocoran serta mengurangi isolasi.",
    "Nama VM bukan pengganti principal service account yang digunakan aplikasi.",
  ],
  "iam/docs/service-accounts-create",
);
q(
  "google-managed-service-agent-grant",
  "4.2",
  "Layanan Google terkelola menggunakan service agent khusus untuk mengakses resource proyek. Operator melihat akun itu berbeda dari service account aplikasi. Bagaimana sebaiknya aksesnya dikelola?",
  [
    "Identifikasi service agent yang benar dan berikan hanya role yang disyaratkan layanan pada scope yang tepat",
    "Hapus semua service agent karena seluruh service account harus dibuat pengguna",
    "Berikan role service agent kepada semua pengguna manusia",
    "Anggap service agent sama dengan akun pribadi pembuat proyek",
  ],
  [
    "Service agent merupakan identitas yang digunakan layanan Google untuk menjalankan fungsi tertentu dan memiliki kebutuhan izin khusus.",
    "Penghapusan identitas layanan tanpa analisis dapat mengganggu operasi produk.",
    "Role khusus service agent tidak seharusnya dibagikan sebagai role umum bagi manusia.",
    "Identitas layanan berbeda dari akun manusia yang membuat proyek.",
  ],
  "iam/docs/service-agents",
);
q(
  "predefined-custom-role-minimum",
  "4.1",
  "Sebuah tim hanya memerlukan beberapa permission yang stabil. Role dasar Editor terlalu luas. Apa pendekatan yang paling tepat?",
  [
    "Cari predefined role yang sesuai; jika tidak ada, evaluasi custom role dengan permission minimum yang didukung",
    "Tetap gunakan Editor karena custom dan predefined role selalu lebih luas",
    "Tambahkan semua basic role agar jumlah permission berkurang",
    "Gunakan nama grup sebagai pengganti seluruh permission dalam kebijakan",
  ],
  [
    "Predefined role dapat memenuhi kebutuhan umum; custom role digunakan bila perlu penyusunan permission yang lebih tepat.",
    "Basic role tidak otomatis menjadi pilihan dengan cakupan terkecil.",
    "Penambahan role umumnya menambah izin efektif, bukan menguranginya.",
    "Grup adalah principal penerima role, bukan definisi permission yang menggantikan role.",
  ],
  "iam/docs/roles-overview",
);
q(
  "short-lived-impersonated-credential",
  "4.2",
  "Job administrasi memerlukan kredensial service account untuk durasi terbatas tanpa membuat file key jangka panjang. Operator sudah memiliki izin impersonasi yang diperlukan. Pendekatan mana yang sesuai?",
  [
    "Gunakan impersonasi untuk memperoleh access token berumur terbatas dan batasi akses ke service account target",
    "Buat key JSON permanen lalu ubah nama filenya menjadi short-lived",
    "Simpan password akun pribadi pada instance sebagai identitas service account",
    "Publikasikan key pada repositori agar job dari lokasi lain mudah mengaksesnya",
  ],
  [
    "Impersonasi menyediakan kredensial sementara tanpa distribusi private key service account.",
    "Nama file tidak mengubah masa berlaku atau sifat key jangka panjang.",
    "Password akun manusia bukan kredensial service account dan tidak memenuhi kebutuhan identitas job.",
    "Repositori publik membocorkan kredensial dan bertentangan dengan pembatasan akses.",
  ],
  "iam/docs/service-account-impersonation",
);

q(
  "fabric-fast-foundation-review",
  "2.4",
  "Tim memilih Fabric FAST untuk membangun fondasi Google Cloud dengan Terraform. Sebelum menjalankan tahap bootstrap pada organisasi perusahaan, langkah mana yang paling tepat?",
  [
    "Tinjau variabel organisasi/billing, identitas eksekusi, state, serta urutan tahap dan rencana perubahan",
    "Jalankan semua contoh dengan identitas Owner tanpa memeriksa target organisasi",
    "Anggap template fondasi otomatis cocok dengan seluruh kebijakan setiap perusahaan",
    "Hapus state setelah setiap tahap agar perubahan sebelumnya tidak memengaruhi rencana",
  ],
  [
    "Fondasi IaC harus disesuaikan dengan organisasi dan kontrol perubahan; toolkit tidak menggantikan validasi input serta kewenangan.",
    "Eksekusi berizin luas pada target yang belum diverifikasi memperbesar dampak kesalahan.",
    "Template tetap perlu disesuaikan dengan kebijakan dan kebutuhan perusahaan.",
    "Menghapus state menghilangkan pelacakan resource dan bukan prosedur normal antar tahap provisioning.",
  ],
  "architecture/migration-to-gcp-assessing-and-discovering-your-workloads",
);
q(
  "sql-retrieval-read-only-query",
  "3.2",
  "Operator Cloud SQL for PostgreSQL perlu memeriksa paling banyak 100 pesanan berstatus FAILED. Ia hanya memiliki izin baca. Kueri mana yang mengambil data sesuai kebutuhan tanpa mengubahnya?",
  [
    "SELECT * FROM orders WHERE status = 'FAILED' LIMIT 100;",
    "DELETE FROM orders WHERE status = 'FAILED';",
    "SELECT * FROM orders LIMIT 100;",
    "UPDATE orders SET status = 'FAILED';",
  ],
  [
    "SELECT dengan filter status dan LIMIT mengambil subset yang diminta tanpa melakukan perubahan.",
    "DELETE menghapus data dan tidak sesuai tugas pemeriksaan baca.",
    "Tanpa filter status, hasil dapat mencakup pesanan selain FAILED.",
    "UPDATE mengubah data dan tidak sesuai izin ataupun tujuan tugas.",
  ],
  "sql/docs/postgres/connect-instance-cloud-shell",
);
q(
  "log-bucket-analytics-configuration",
  "3.4",
  "Tim menyimpan log pada log bucket dan ingin menjalankan analitik SQL atas log tersebut. Apa yang perlu diperiksa sebelum menggunakan kemampuan analitik bucket?",
  [
    "Dukungan lokasi/konfigurasi bucket, pengaktifan kemampuan analitik, dan izin pengguna",
    "Hanya ekstensi nama bucket karena akhiran .sql otomatis mengaktifkan analitik",
    "Keanggotaan pengguna pada Billing Account Creator sebagai pengganti akses log",
    "Kelas Archive Cloud Storage sebagai satu-satunya pengatur analitik log bucket",
  ],
  [
    "Analitik memerlukan konfigurasi bucket yang mendukungnya dan izin akses; log bucket berbeda dari bucket objek Cloud Storage.",
    "Nama bucket tidak mengaktifkan fitur analitik.",
    "Izin pembuatan billing account bukan izin untuk membaca dan menganalisis log.",
    "Kelas penyimpanan Cloud Storage tidak mengatur fitur analitik Cloud Logging.",
  ],
  "logging/docs/analyze/query-linked-dataset",
);
q(
  "gke-inventory-command-context",
  "3.1",
  "Operator perlu memeriksa node, Pod, dan Service pada cluster GKE produksi sebelum deployment. Context kubectl saat ini masih mengarah ke cluster pengujian. Langkah mana yang tepat?",
  [
    "Pilih kredensial/context cluster produksi yang benar lalu periksa kubectl get nodes, pods, dan services pada namespace yang relevan",
    "Jalankan kubectl get pods pada context pengujian lalu anggap inventarisnya sama",
    "Ganti nama namespace lokal tanpa mengganti context cluster",
    "Hapus kubeconfig agar kubectl otomatis memilih cluster produksi",
  ],
  [
    "Target cluster dan namespace harus diverifikasi sebelum inventaris digunakan untuk keputusan operasional.",
    "Inventaris dari cluster berbeda tidak menggambarkan produksi.",
    "Namespace berada dalam konteks cluster; menggantinya tidak otomatis mengganti cluster.",
    "Penghapusan konfigurasi bukan mekanisme pemilihan cluster yang aman.",
  ],
  "kubernetes-engine/docs/how-to/cluster-access-for-kubectl",
);
q(
  "private-gke-control-plane-connectivity",
  "2.1",
  "Tim membuat cluster GKE dengan akses control plane yang dibatasi. Workstation operator tidak dapat terhubung meskipun izin IAM-nya benar. Apa pemeriksaan yang tepat?",
  [
    "Periksa konfigurasi endpoint control plane, sumber akses yang diizinkan, dan konektivitas jaringan workstation",
    "Berikan Owner sebagai pengganti seluruh kebutuhan konektivitas endpoint",
    "Aktifkan akses publik ke semua layanan aplikasi meskipun yang gagal adalah endpoint cluster",
    "Ubah billing account agar koneksi kubectl melewati jaringan",
  ],
  [
    "Otorisasi dan konektivitas endpoint cluster adalah persyaratan berbeda yang harus terpenuhi.",
    "Izin luas tidak otomatis menyediakan jalur jaringan yang dibatasi.",
    "Endpoint aplikasi berbeda dari endpoint pengelolaan cluster.",
    "Billing account tidak membuat konektivitas ke control plane.",
  ],
  "kubernetes-engine/docs/how-to/latest/network-isolation",
);
q(
  "custom-machine-workload-fit",
  "2.1",
  "Workload membutuhkan rasio memori terhadap CPU yang tidak cocok dengan tipe mesin predefined yang sedang dievaluasi. Tim ingin menghindari pembelian CPU berlebihan. Apa langkah yang sesuai?",
  [
    "Evaluasi custom machine type yang didukung beserta batas rasio, biaya, dan kebutuhan performanya",
    "Tambah CPU tanpa meninjau rasio memori karena semua keluarga mesin identik",
    "Pilih Spot VM sebagai satu-satunya cara mengubah rasio CPU/memori",
    "Ubah disk menjadi Archive agar kebutuhan RAM instance berkurang otomatis",
  ],
  [
    "Custom machine type memungkinkan konfigurasi resource dalam batas keluarga mesin yang mendukungnya.",
    "Keluarga mesin memiliki karakteristik berbeda dan penambahan CPU dapat menambah biaya yang tidak diperlukan.",
    "Spot adalah model kapasitas/harga dengan risiko interupsi, bukan pengganti konfigurasi rasio mesin.",
    "Kelas penyimpanan objek tidak mengubah alokasi RAM VM.",
  ],
  "compute/docs/instances/creating-instance-with-custom-machine-type",
);

q(
  "cloud-run-canary-traffic-split",
  "3.1",
  "Revisi Cloud Run baru sudah dideploy tanpa menerima seluruh trafik produksi. Operator ingin mengirim 10% trafik ke revisi baru dan mempertahankan 90% pada revisi stabil. Apa tindakan yang tepat?",
  [
    "Atur pembagian trafik pada service untuk kedua revisi dan pantau hasilnya sebelum meningkatkan porsi revisi baru",
    "Ubah jumlah minimum instance menjadi 10 lalu anggap tepat 10% trafik otomatis berpindah",
    "Hapus revisi stabil sebelum memeriksa error revisi baru",
    "Ubah IAM invoker agar persentase trafik menjadi 90/10",
  ],
  [
    "Pembagian trafik antar revisi mendukung rollout bertahap dan harus dipantau untuk keputusan selanjutnya.",
    "Minimum instances mengatur kapasitas minimum, bukan persentase routing antar revisi.",
    "Menghapus jalur stabil sebelum validasi menghilangkan pilihan pemulihan bertahap.",
    "IAM invoker mengatur siapa yang dapat memanggil layanan, bukan bobot routing revisi.",
  ],
  "run/docs/rollouts-rollbacks-traffic-migration",
);

q(
  "mig-template-autoscaling-bootstrap",
  "2.1",
  "Tim akan menjalankan aplikasi stateless pada armada VM yang bertambah atau berkurang mengikuti beban. Mereka ingin VM pengganti dibuat dengan konfigurasi yang konsisten. Rencana mana yang sesuai?",
  [
    "Buat instance template, gunakan pada managed instance group, lalu atur autoscaling dan pemeriksaan kesehatan yang sesuai",
    "Buat unmanaged instance group dan anggap semua VM baru otomatis mengikuti template serta autoscaling yang sama",
    "Buat snapshot satu disk lalu anggap snapshot sendiri menambah VM saat CPU naik",
    "Ubah kuota CPU proyek sebagai satu-satunya konfigurasi penskalaan armada",
  ],
  [
    "Template menyediakan konfigurasi VM yang konsisten; MIG dan kebijakan autoscaling mengelola armada sesuai kebutuhan.",
    "Unmanaged group tidak menyediakan seluruh pengelolaan lifecycle dan autoscaling MIG tersebut.",
    "Snapshot adalah salinan data disk, bukan pengendali penskalaan jumlah instance.",
    "Kuota menentukan batas penggunaan dan tidak menggantikan kebijakan autoscaling.",
  ],
  "compute/docs/instance-groups/creating-groups-of-managed-instances",
);

export function buildAceGuide() {
  return rows.map(calibrateAceGear).map((row, index) => {
    const offset = index % row.options.length;
    const order = row.options.map((_, i) => (i + offset) % row.options.length);
    const labels = ["A", "B", "C", "D", "E", "F"];
    return {
      id: `ace-scenario-id-20261022-${String(index + 1).padStart(3, "0")}`,
      examType: "gcp-ace",
      lang: "id",
      domain: domains[Number(row.objective[0]) - 1],
      type: row.answers.length > 1 ? "multiple" : "single",
      prompt:
        row.prompt +
        (row.answers.length > 1
          ? ` (Pilih ${row.answers.length} jawaban.)`
          : ""),
      options: order.map((original, i) => ({
        id: labels[i],
        text: row.options[original],
      })),
      correctAnswers: order.flatMap((original, i) =>
        row.answers.includes(original) ? [labels[i]] : [],
      ),
      explanation: row.answers.map((answer) => row.notes[answer]).join(" "),
      optionExplanations: Object.fromEntries(
        order.map((original, i) => [labels[i], row.notes[original]]),
      ),
      sourceUrl: doc(row.path),
      verifiedAt: "2026-10-22",
      version: row.gearCalibrated ? 2 : 1,
      status: "approved",
      difficulty: "intermediate",
      sourceRef: "original-practice-scenarios",
      objective: row.objective,
      topic: row.topic,
      blueprintVersion: "2026-10-22",
      duplicateReviewed: true,
    };
  });
}

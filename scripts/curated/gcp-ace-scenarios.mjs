// Original Indonesian practice scenarios, not recalled/live examination items.
// Objectives follow the standard guide linked by Google, reviewed 2026-10-21.
import { buildAceGuide } from "./gcp-ace-guide.mjs";
import gear20261028 from "./gcp-ace-gear-20261028.json" with { type: "json" };
const refs = {
  hierarchy:
    "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
  projects:
    "https://cloud.google.com/resource-manager/docs/creating-managing-projects",
  billing:
    "https://cloud.google.com/billing/docs/how-to/manage-billing-account",
  billingLink:
    "https://cloud.google.com/billing/docs/how-to/manage-billing-account",
  budgets:
    "https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications",
  export: "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
  quota: "https://cloud.google.com/docs/quotas/view-manage",
  config: "https://cloud.google.com/sdk/docs/configurations",
  adc: "https://cloud.google.com/docs/authentication/application-default-credentials",
  workforce: "https://cloud.google.com/iam/docs/workforce-identity-federation",
  assets:
    "https://cloud.google.com/asset-inventory/docs/asset-inventory-overview",
  policy: "https://cloud.google.com/organization-policy/overview",
  services: "https://cloud.google.com/service-usage/docs/enable-disable",
  scope: "https://cloud.google.com/monitoring/settings/multiple-projects",
  labels:
    "https://cloud.google.com/resource-manager/docs/creating-managing-labels",
  mig: "https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups",
  autoscale: "https://cloud.google.com/compute/docs/autoscaler",
  oslogin: "https://cloud.google.com/compute/docs/oslogin/set-up-oslogin",
  spot: "https://cloud.google.com/compute/docs/instances/spot",
  runContainer:
    "https://cloud.google.com/run/docs/configuring/services/containers",
  runIdentity: "https://cloud.google.com/run/docs/securing/service-identity",
  runTraffic:
    "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration",
  runScale: "https://cloud.google.com/run/docs/configuring/max-instances",
  runJobs: "https://cloud.google.com/run/docs/create-jobs",
  autopilot:
    "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
  imagePull:
    "https://cloud.google.com/kubernetes-engine/docs/troubleshooting/image-pulls",
  hpa: "https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler",
  storage: "https://cloud.google.com/storage/docs/storage-classes",
  lifecycle: "https://cloud.google.com/storage/docs/lifecycle",
  sqlHa: "https://cloud.google.com/sql/docs/mysql/high-availability",
  sqlReplica: "https://cloud.google.com/sql/docs/mysql/replication",
  bigquery: "https://cloud.google.com/bigquery/docs/best-practices-costs",
  shared: "https://cloud.google.com/vpc/docs/shared-vpc",
  peering: "https://cloud.google.com/vpc/docs/vpc-peering",
  nat: "https://cloud.google.com/nat/docs/overview",
  privateAccess: "https://cloud.google.com/vpc/docs/private-google-access",
  dns: "https://cloud.google.com/dns/docs/zones/zones-overview",
  vm: "https://cloud.google.com/compute/docs/instances/create-start-instance",
  files: "https://cloud.google.com/filestore/docs/csi-driver",
  servicesK8s:
    "https://cloud.google.com/kubernetes-engine/docs/concepts/service",
  terraform: "https://cloud.google.com/docs/terraform/basic-commands",
  tfState:
    "https://cloud.google.com/docs/terraform/resource-management/store-state",
  sqlConnect: "https://cloud.google.com/sql/docs/mysql/connect-auth-proxy",
  transfer: "https://cloud.google.com/storage-transfer/docs/overview",
  lb: "https://cloud.google.com/load-balancing/docs/https",
  vpc: "https://cloud.google.com/vpc/docs/vpc",
  eventarc: "https://cloud.google.com/eventarc/docs/run/quickstart-storage",
  functions: "https://cloud.google.com/run/docs/write-cloudevents-functions",
  bqLoad:
    "https://cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv",
  firestore:
    "https://cloud.google.com/firestore/native/docs/standard-index-overview",
  pubsub: "https://cloud.google.com/pubsub/docs/subscription-overview",
  gpu: "https://cloud.google.com/compute/docs/gpus/about-gpus",
  firewall: "https://cloud.google.com/firewall/docs/firewalls",
  crash:
    "https://cloud.google.com/kubernetes-engine/docs/troubleshooting/crashloopbackoff-events",
  pending:
    "https://cloud.google.com/kubernetes-engine/docs/troubleshooting/deployed-workloads",
  clusterScale:
    "https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler",
  runRevisions: "https://cloud.google.com/run/docs/managing/revisions",
  agent: "https://cloud.google.com/monitoring/agent/ops-agent",
  logQuery: "https://cloud.google.com/logging/docs/view/logging-query-language",
  sink: "https://cloud.google.com/logging/docs/export/configure_export_v2",
  logRouter: "https://cloud.google.com/logging/docs/routing/overview",
  alert: "https://cloud.google.com/monitoring/alerts/using-alerting-ui",
  uptime: "https://cloud.google.com/monitoring/uptime-checks/introduction",
  resize: "https://cloud.google.com/compute/docs/disks/resize-persistent-disk",
  snapshots: "https://cloud.google.com/compute/docs/disks/restore-snapshot",
  pitr: "https://cloud.google.com/sql/docs/mysql/backup-recovery/pitr",
  cmek: "https://cloud.google.com/storage/docs/encryption/customer-managed-keys",
  retention: "https://cloud.google.com/storage/docs/bucket-lock",
  pubsubDelivery: "https://cloud.google.com/pubsub/docs/handling-failures",
  natTrouble: "https://cloud.google.com/nat/docs/troubleshooting",
  subnet: "https://cloud.google.com/vpc/docs/create-modify-vpc-networks",
  dnsInbound: "https://cloud.google.com/dns/docs/server-policies-overview",
  health: "https://cloud.google.com/service-health/docs/overview",
  federation: "https://cloud.google.com/iam/docs/workload-identity-federation",
  impersonate:
    "https://cloud.google.com/iam/docs/service-account-impersonation",
  actAs: "https://cloud.google.com/iam/docs/service-accounts-actas",
  conditions: "https://cloud.google.com/iam/docs/conditions-overview",
  iam: "https://cloud.google.com/iam/docs/resource-hierarchy-access-control",
  keys: "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",
  gkeIdentity:
    "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
  runAuth:
    "https://cloud.google.com/run/docs/authenticating/service-to-service",
  secret: "https://cloud.google.com/secret-manager/docs/access-secret-version",
  rotation:
    "https://cloud.google.com/secret-manager/docs/rotation-recommendations",
  kms: "https://cloud.google.com/kms/docs/key-rotation",
  audit: "https://cloud.google.com/logging/docs/audit/configure-data-access",
  storageIam: "https://cloud.google.com/storage/docs/access-control/iam-roles",
  publicAccess:
    "https://cloud.google.com/storage/docs/public-access-prevention",
  signed: "https://cloud.google.com/storage/docs/access-control/signed-urls",
  deny: "https://cloud.google.com/iam/docs/deny-overview",
  troubleshootIam:
    "https://cloud.google.com/policy-intelligence/docs/troubleshoot-access",
  customRoles: "https://cloud.google.com/iam/docs/creating-custom-roles",
  assistMonitoring: "https://docs.cloud.google.com/cloud-assist/chat-panel",
};
const domains = {
  1: "Pengaturan Lingkungan Solusi Cloud",
  2: "Perencanaan dan Implementasi Solusi Cloud",
  3: "Memastikan Operasi Solusi Cloud yang Berhasil",
  4: "Konfigurasi Akses dan Keamanan",
};
const rows = [];
function q(
  topic,
  objective,
  prompt,
  choices,
  ref,
  answers = [0],
  difficulty = "intermediate",
) {
  if (!refs[ref]) throw new Error(`Unknown reference: ${ref}`);
  rows.push({ topic, objective, prompt, choices, ref, answers, difficulty });
}

// Section 1: environment setup — 20 scenarios.
q(
  "folder-policy-boundary",
  "1.1",
  "Divisi riset dan produksi memakai organisasi Google Cloud yang sama. Kebijakan lokasi resource harus berlaku hanya pada seluruh proyek produksi, termasuk proyek yang dibuat bulan depan. Anda ingin menghindari konfigurasi ulang di setiap proyek. Bagaimana sebaiknya resource disusun?",
  [
    [
      "Tempatkan proyek produksi dalam satu folder, lalu terapkan kebijakan pada folder tersebut.",
      "Kebijakan folder diwariskan ke proyek turunannya, termasuk proyek baru di dalam folder.",
    ],
    [
      "Tambahkan label environment=production pada proyek, lalu pasang kebijakan di organisasi.",
      "Label tidak membatasi pewarisan kebijakan organisasi hanya ke proyek berlabel itu.",
    ],
    [
      "Gabungkan seluruh workload riset dan produksi dalam satu proyek bersama.",
      "Satu proyek menghilangkan batas kebijakan yang diminta antarlingkungan.",
    ],
    [
      "Buat akun billing produksi, lalu pasang Organization Policy pada akun billing.",
      "Akun billing bukan parent dalam hierarki pewarisan Organization Policy proyek.",
    ],
  ],
  "hierarchy",
);
q(
  "billing-link-dual-scope",
  "1.2",
  "Operator sudah boleh mengubah kaitan billing sebuah proyek, tetapi tidak dapat menautkannya ke akun billing tujuan. Akun tersebut aktif dan kebijakan organisasi mengizinkan penautan. Anda hanya ingin melengkapi izin yang kurang. Apa tindakan yang tepat?",
  [
    [
      "Berikan Billing Account User pada akun billing tujuan kepada operator.",
      "Penautan memerlukan izin pada proyek dan izin menggunakan akun billing tujuan.",
    ],
    [
      "Berikan Compute Instance Admin pada proyek kepada operator.",
      "Izin mengelola VM tidak memberikan hak menggunakan akun billing.",
    ],
    [
      "Berikan Billing Account Viewer pada akun billing tujuan kepada operator.",
      "Viewer dapat melihat informasi billing tetapi tidak menyediakan izin penautan yang dibutuhkan.",
    ],
    [
      "Berikan Service Account User pada service account default proyek.",
      "Kemampuan memakai service account tidak memperbaiki otorisasi penautan billing.",
    ],
  ],
  "billingLink",
);
q(
  "forecast-budget-alert",
  "1.2",
  "Biaya bulan ini baru mencapai 40% anggaran, tetapi tren pemakaian diperkirakan melewati anggaran pada akhir bulan. Tim keuangan ingin diberi tahu sebelum biaya aktual menyentuh 90%, tanpa menghentikan layanan. Konfigurasi mana yang paling sesuai?",
  [
    [
      "Tambahkan threshold budget berdasarkan forecasted spend.",
      "Threshold perkiraan biaya dapat memberi sinyal berdasarkan estimasi akhir periode.",
    ],
    [
      "Gunakan hanya threshold actual spend sebesar 100%.",
      "Ambang biaya aktual penuh tidak memenuhi kebutuhan peringatan berdasarkan proyeksi.",
    ],
    [
      "Nonaktifkan billing ketika pemakaian CPU menyentuh 40%.",
      "Utilisasi CPU bukan proyeksi total biaya, dan tindakan menghentikan layanan tidak diminta.",
    ],
    [
      "Tetapkan label budget=forecast pada setiap VM.",
      "Label sendiri tidak membuat aturan notifikasi budget berbasis perkiraan.",
    ],
  ],
  "budgets",
);
q(
  "quota-versus-capacity",
  "1.1",
  "Pembuatan VM ditolak dengan pesan bahwa kuota vCPU regional telah terlampaui. Kuota project di region lain masih tersedia. Workload harus tetap di region semula karena persyaratan lokasi. Apa langkah selanjutnya yang paling tepat?",
  [
    [
      "Tinjau penggunaan dan ajukan kenaikan kuota vCPU pada region yang dibutuhkan.",
      "Kuota yang menjadi kendala perlu dinilai pada scope regional yang benar.",
    ],
    [
      "Menaikkan kuota vCPU di region lain, lalu mengulang perintah tanpa perubahan.",
      "Kuota region lain tidak menambah alokasi region tujuan.",
    ],
    [
      "Memberikan Owner kepada service account VM agar kuota tidak berlaku.",
      "Hak IAM tidak menghilangkan batas kuota layanan.",
    ],
    [
      "Mengganti network tag pada template instance.",
      "Network tag tidak memengaruhi kuota CPU regional.",
    ],
  ],
  "quota",
);
q(
  "workforce-external-people",
  "1.1",
  "Konsultan perusahaan masuk melalui penyedia identitas OIDC eksternal. Mereka perlu mengakses konsol Google Cloud memakai identitas tersebut tanpa dibuatkan akun Google individual. Anda ingin memetakan atribut grup IdP ke akses cloud. Solusi mana yang sesuai?",
  [
    [
      "Konfigurasikan Workforce Identity Federation dengan provider IdP perusahaan.",
      "Workforce federation ditujukan untuk akses pengguna manusia dari penyedia identitas eksternal.",
    ],
    [
      "Berikan satu service account key yang digunakan bersama oleh seluruh konsultan.",
      "Kunci bersama menghilangkan identitas individual dan bukan federasi pengguna manusia.",
    ],
    [
      "Aktifkan Private Google Access pada subnet konsultan.",
      "Private Google Access mengatur akses jaringan ke API, bukan identitas pengguna.",
    ],
    [
      "Buat Workload Identity Federation untuk Pod GKE tanpa mengatur provider pengguna.",
      "Identitas workload GKE bukan pengganti konfigurasi federation untuk akses konsol pengguna.",
    ],
  ],
  "workforce",
);
q(
  "asset-inventory-org-search",
  "1.1",
  "Tim audit meminta daftar bucket dan VM dari 80 proyek dalam satu organisasi. Anda ingin mencari resource secara terpusat dengan filter tipe resource, tanpa membuka konsol setiap proyek. Layanan mana yang sebaiknya digunakan?",
  [
    [
      "Cloud Asset Inventory pada scope organisasi.",
      "Inventaris aset mendukung pencarian lintas resource pada scope yang diizinkan.",
    ],
    [
      "Cloud Billing Reports dengan filter jenis transaksi pembayaran.",
      "Laporan billing bukan inventaris konfigurasi seluruh resource.",
    ],
    [
      "Cloud DNS dengan sebuah private zone untuk seluruh proyek.",
      "DNS memetakan nama, bukan menginventarisasi bucket dan VM organisasi.",
    ],
    [
      "Cloud Trace dengan sampling setiap permintaan HTTP.",
      "Trace menelusuri request aplikasi, bukan daftar aset cloud.",
    ],
  ],
  "assets",
);
q(
  "gcloud-script-project-override",
  "1.1",
  "Satu terminal dipakai menjalankan skrip inventaris untuk project-a dan project-b secara bergantian. Anda tidak ingin setiap skrip mengubah project aktif konfigurasi pengguna. Bagaimana tiap perintah gcloud sebaiknya menentukan proyek target?",
  [
    [
      "Sertakan flag --project dengan project ID target pada tiap perintah.",
      "Flag eksplisit menentukan proyek per perintah tanpa mengubah properti konfigurasi aktif.",
    ],
    [
      "Jalankan gcloud config set project sebelum setiap baris inventaris.",
      "Cara ini mengubah konfigurasi pengguna yang ingin dipertahankan.",
    ],
    [
      "Ganti nama tampilan proyek agar sama dengan nama skrip.",
      "Nama tampilan bukan mekanisme pemilihan proyek oleh CLI.",
    ],
    [
      "Tentukan zona berbeda dan biarkan gcloud menebak proyek dari zona.",
      "Zona tidak menentukan project ID target.",
    ],
  ],
  "config",
);
q(
  "adc-local-client-library",
  "1.1",
  "Developer bisa menjalankan gcloud storage ls, tetapi aplikasi Python lokal yang memakai Application Default Credentials gagal karena kredensial tidak ditemukan. Aplikasi belum akan dijalankan pada VM dan tidak boleh memakai key service account. Apa yang perlu disiapkan?",
  [
    [
      "Jalankan gcloud auth application-default login.",
      "Kredensial ADC untuk library terpisah dari login yang dipakai perintah gcloud.",
    ],
    [
      "Jalankan gcloud config set compute/zone untuk membuat ADC.",
      "Properti zona tidak membuat kredensial Application Default Credentials.",
    ],
    [
      "Salin public SSH key ke GOOGLE_APPLICATION_CREDENTIALS.",
      "SSH public key bukan dokumen kredensial ADC.",
    ],
    [
      "Berikan Storage Admin pada akun billing.",
      "Izin resource tidak membuat file atau alur ADC lokal yang belum tersedia.",
    ],
  ],
  "adc",
);
q(
  "api-enable-permission",
  "1.1",
  "Pipeline membuat proyek baru dan kemudian perlu mengaktifkan API yang disetujui tim keamanan. Identitas pipeline belum boleh enable service, tetapi dapat melihat status API. Peran predefined mana yang sesuai untuk tugas pengaktifan API tanpa memberikan Owner?",
  [
    [
      "Service Usage Admin pada proyek target.",
      "Peran ini menyediakan kemampuan mengelola pengaktifan dan penonaktifan layanan.",
    ],
    [
      "Service Usage Viewer pada proyek target.",
      "Viewer dapat membaca informasi layanan tetapi tidak mengaktifkannya.",
    ],
    [
      "Compute Viewer pada proyek target.",
      "Melihat Compute Engine tidak memberi izin enable API melalui Service Usage.",
    ],
    [
      "Billing Account Viewer pada akun penagihan.",
      "Akses melihat billing tidak mencakup pengaktifan API proyek.",
    ],
  ],
  "services",
);
q(
  "inherited-location-policy-denial",
  "1.1",
  "Administrator proyek memiliki izin membuat resource, tetapi deployment di region baru ditolak oleh constraint lokasi yang diwariskan dari folder. Ia tidak memiliki hak mengubah kebijakan folder. Apa respons operasional yang paling tepat?",
  [
    [
      "Gunakan lokasi yang diizinkan atau minta administrator kebijakan meninjau pengecualian yang sah.",
      "Izin resource tidak melewati batas Organization Policy yang berlaku.",
    ],
    [
      "Tambahkan satu binding Owner lagi agar constraint tidak dievaluasi.",
      "Menambah role tidak menonaktifkan constraint organisasi.",
    ],
    [
      "Gunakan flag --quiet supaya validasi lokasi dilewati.",
      "Flag ini mengatur interaksi CLI, bukan pengecualian kebijakan.",
    ],
    [
      "Buat label region-approved pada resource yang ditolak.",
      "Label biasa tidak membatalkan constraint lokasi yang diwariskan.",
    ],
  ],
  "policy",
);
q(
  "metrics-scope-multi-project",
  "1.1",
  "Tim SRE ingin satu dashboard menampilkan metric VM dari proyek aplikasi dan proyek database. Kedua proyek harus tetap terpisah dan tidak boleh memindahkan workload. Konfigurasi mana yang memungkinkan visibilitas tersebut?",
  [
    [
      "Tambahkan proyek-proyek tersebut sebagai monitored projects pada metrics scope proyek pemantauan.",
      "Metrics scope memungkinkan pengamatan lintas proyek tanpa memindahkan workload.",
    ],
    [
      "Gabungkan akun billing kedua proyek dan biarkan Monitoring mencari metric otomatis.",
      "Akun billing yang sama tidak otomatis menggabungkan scope pemantauan.",
    ],
    [
      "Pindahkan semua VM ke satu folder lalu hapus proyek lama.",
      "Pemindahan workload tidak diperlukan dan melanggar persyaratan.",
    ],
    [
      "Ubah nama VM agar memakai prefiks proyek pemantauan.",
      "Nama VM bukan konfigurasi akses metric lintas proyek.",
    ],
  ],
  "scope",
);
q(
  "billing-budget-not-hard-cap",
  "1.2",
  "Tim eksperimen menganggap budget bulanan akan menolak setiap permintaan API begitu biaya menyentuh nominal budget. Mereka meminta Anda memastikan asumsi tersebut sebelum peluncuran. Pernyataan mana yang benar?",
  [
    [
      "Budget memantau dan memberi notifikasi; budget sendiri bukan hard cap pemakaian atau biaya.",
      "Notifikasi budget tidak dengan sendirinya membatasi eksekusi resource dan dapat mengalami jeda pelaporan.",
    ],
    [
      "Budget otomatis mengubah semua quota layanan menjadi nol pada saat yang persis sama.",
      "Tidak ada pengubahan quota otomatis universal oleh sebuah budget.",
    ],
    [
      "Budget mengganti Organization Policy untuk semua layanan dalam proyek.",
      "Budget tidak menjadi kebijakan organisasi pembatas pembuatan resource.",
    ],
    [
      "Budget menjamin biaya tidak pernah melampaui threshold meski tanpa otomasi tambahan.",
      "Budget dan notifikasinya tidak memberi jaminan hard cap tersebut.",
    ],
  ],
  "budgets",
);
q(
  "billing-export-dataset-before-enable",
  "1.2",
  "Anda menyiapkan analisis biaya dengan SQL untuk proyek-proyek di bawah satu akun billing. Tim sudah membuat dataset BigQuery yang sesuai. Dua komponen konfigurasi apa yang dibutuhkan agar data biaya dapat diekspor ke dataset tersebut?",
  [
    [
      "Konfigurasikan Cloud Billing export untuk akun billing dan dataset tujuan yang benar.",
      "Ekspor biaya dikonfigurasikan dari akun billing ke tujuan BigQuery.",
    ],
    [
      "Pastikan hak konfigurasi billing export serta akses dataset yang diperlukan tersedia.",
      "Konfigurasi melibatkan otorisasi pada sisi billing dan tujuan data.",
    ],
    [
      "Buat Cloud DNS A record yang menunjuk dataset BigQuery.",
      "DNS A record tidak mengaktifkan ekspor billing.",
    ],
    [
      "Pasang Ops Agent pada setiap bucket Cloud Storage.",
      "Bucket tidak menjalankan Ops Agent dan agent bukan prasyarat ekspor billing.",
    ],
    [
      "Aktifkan public access untuk dataset agar billing dapat menulis.",
      "Ekspor tidak memerlukan dataset dipublikasikan ke semua pengguna.",
    ],
  ],
  "export",
  [0, 1],
);
q(
  "hierarchy-project-id-stability",
  "1.1",
  "Nama tampilan proyek masih memakai nama produk lama. Sistem integrasi menggunakan project ID tersebut di banyak konfigurasi. Tim hanya ingin memperbarui nama yang terlihat di konsol tanpa memutus integrasi. Apa yang sebaiknya diubah?",
  [
    [
      "Ubah project display name dan pertahankan project ID.",
      "Nama tampilan dapat diubah; project ID merupakan identitas stabil yang berbeda.",
    ],
    [
      "Ganti project ID melalui pengaturan billing proyek yang sama.",
      "Project ID tidak dapat diganti dengan mengedit billing.",
    ],
    [
      "Hapus proyek lalu buat ulang memakai project ID yang sama.",
      "Menghapus proyek berisiko dan bukan cara mengganti nama tampilan.",
    ],
    [
      "Ganti nomor proyek agar semua endpoint ikut memperbarui nama.",
      "Nomor proyek ditetapkan sistem dan bukan pengaturan nama tampilan.",
    ],
  ],
  "projects",
);
q(
  "quota-adjustability-check",
  "1.1",
  "Permintaan tambahan resource gagal karena suatu batas layanan. Sebelum menjanjikan kapasitas baru kepada tim aplikasi, Anda perlu menentukan apakah batas itu dapat dinaikkan. Apa yang harus diperiksa terlebih dahulu?",
  [
    [
      "Identifikasi quota atau system limit, scope-nya, serta apakah penyesuaian didukung.",
      "Tidak semua batas layanan merupakan quota yang dapat dinaikkan.",
    ],
    [
      "Asumsikan semua limit dapat dihapus dengan menambahkan Owner.",
      "Role IAM tidak menghapus seluruh batas sistem layanan.",
    ],
    [
      "Naikkan budget dan anggap semua quota mengikuti nilai budget.",
      "Budget bukan mekanisme pengubahan quota layanan.",
    ],
    [
      "Pindahkan resource ke label baru agar mendapat quota terpisah.",
      "Label tidak menyediakan alokasi quota independen.",
    ],
  ],
  "quota",
);
q(
  "label-cost-allocation-timing",
  "1.2",
  "Satu proyek menjalankan workload untuk tiga cost center. Tim ingin mengelompokkan biaya resource baru pada ekspor billing ke depan tanpa memecah proyek. Pendekatan operasional mana yang tepat?",
  [
    [
      "Terapkan label cost_center yang konsisten pada resource yang mendukung label, lalu gunakan data ekspor billing.",
      "Label resource yang didukung membantu pengelompokan biaya; dukungan dan waktu penerapan perlu diperhatikan.",
    ],
    [
      "Ubah label setelah akhir tahun agar semua catatan biaya lama otomatis ditulis ulang.",
      "Perubahan label tidak menjamin penulisan ulang historis seluruh catatan biaya.",
    ],
    [
      "Gunakan network tag sebagai satu-satunya atribut billing pada seluruh produk.",
      "Network tag bukan pengganti universal label resource untuk alokasi biaya.",
    ],
    [
      "Buat tiga pengguna konsol tanpa menandai atau memisahkan resource.",
      "Identitas orang yang login tidak otomatis menentukan cost center seluruh pemakaian resource.",
    ],
  ],
  "labels",
);
q(
  "cli-active-account-audit",
  "1.1",
  "Seorang operator mengelola lingkungan uji dan produksi dari satu laptop. Sebelum menjalankan perubahan terencana, ia ingin memastikan identitas aktif dan proyek default, tanpa mengubah resource. Dua pemeriksaan mana yang sesuai?",
  [
    [
      "Periksa akun dengan gcloud auth list.",
      "Daftar akun menampilkan identitas yang terautentikasi dan penanda akun aktif.",
    ],
    [
      "Periksa properti aktif dengan gcloud config list.",
      "Konfigurasi aktif menunjukkan project dan properti CLI yang akan digunakan.",
    ],
    [
      "Jalankan gcloud projects delete untuk melihat proyek yang terpilih.",
      "Perintah penghapusan bukan pemeriksaan konfigurasi yang aman.",
    ],
    [
      "Ubah default zone dan anggap akun aktif selalu berubah bersamanya.",
      "Perubahan zona tidak menentukan identitas akun aktif.",
    ],
    [
      "Periksa hanya nama direktori tempat skrip disimpan.",
      "Direktori kerja tidak membuktikan akun dan project aktif CLI.",
    ],
  ],
  "config",
  [0, 1],
);
q(
  "api-project-specific-status",
  "1.1",
  "Image pipeline yang sama berhasil pada project-dev tetapi ditolak pada project-stage karena API tujuan belum aktif. Library client sudah terpasang di kedua lingkungan. Perbaikan mana yang menyasar penyebabnya?",
  [
    [
      "Aktifkan API yang dibutuhkan pada project-stage melalui identitas yang berwenang.",
      "Pengaktifan API dievaluasi per proyek; pemasangan library tidak menggantikannya.",
    ],
    [
      "Instal ulang library Python sampai API otomatis aktif untuk seluruh organisasi.",
      "Instalasi library lokal tidak mengaktifkan API pada semua proyek.",
    ],
    [
      "Ganti region pada project-dev yang sudah berfungsi.",
      "Perubahan proyek yang sehat tidak memperbaiki API project-stage yang belum aktif.",
    ],
    [
      "Pindahkan log aplikasi ke akun billing baru.",
      "Lokasi log dan akun billing bukan pengaturan status API yang disebutkan.",
    ],
  ],
  "services",
);
q(
  "organization-inherited-iam",
  "1.1",
  "Grup auditor diberi role baca di folder Finance. Sebuah proyek baru dibuat di bawah folder tersebut, tetapi belum memiliki binding auditor pada policy proyeknya. Dengan asumsi tidak ada deny atau pembatas tambahan, bagaimana akses auditor ke proyek baru?",
  [
    [
      "Role yang diberikan pada folder dapat diwariskan ke proyek baru.",
      "Akses efektif dapat berasal dari parent meskipun tidak tercantum sebagai binding lokal proyek.",
    ],
    [
      "Tidak ada akses sampai binding yang sama disalin manual ke proyek.",
      "Pernyataan ini mengabaikan pewarisan IAM dalam hierarki.",
    ],
    [
      "Auditor otomatis menjadi pemilik akun billing proyek.",
      "Pewarisan role baca tidak menciptakan hak kepemilikan billing.",
    ],
    [
      "Role baca berubah menjadi Editor ketika proyek baru dibuat.",
      "Pewarisan tidak otomatis menaikkan tingkat privilege role.",
    ],
  ],
  "hierarchy",
);
q(
  "policy-resource-scope-selection",
  "1.1",
  "Perusahaan menetapkan kebijakan umum pada organisasi, sementara tim sandbox membutuhkan pengaturan khusus yang didukung constraint tertentu. Anda diminta menilai perubahan sebelum menerapkannya. Apa yang harus diperiksa?",
  [
    [
      "Perilaku pewarisan, dukungan override, serta policy efektif pada resource target.",
      "Efek kebijakan bergantung pada constraint dan aturan pewarisan; jangan menebak dari satu policy lokal.",
    ],
    [
      "Hanya nama akun billing karena semua constraint mengikuti billing.",
      "Scope billing bukan dasar pewarisan Organization Policy resource.",
    ],
    [
      "Hanya kapasitas disk VM pertama pada folder tersebut.",
      "Kapasitas disk tidak membuktikan policy efektif pada hierarki.",
    ],
    [
      "Apakah anggota tim memakai alamat Gmail pribadi.",
      "Jenis alamat email saja tidak menjelaskan semantik constraint dan pewarisan kebijakan.",
    ],
  ],
  "policy",
  [0],
  "advanced",
);

// Section 2: planning and implementation — 30 scenarios.
q(
  "guest-os-kernel-control",
  "2.1",
  "Vendor menyerahkan aplikasi Linux yang memerlukan modul kernel khusus dan akses administrator pada guest OS. Tim boleh mengelola patching VM sendiri. Anda ingin memakai layanan yang memberikan kontrol tersebut tanpa membeli server fisik. Pilihan mana yang tepat?",
  [
    [
      "Compute Engine VM dengan konfigurasi guest OS yang sesuai.",
      "VM menyediakan kontrol guest OS yang diperlukan oleh modul kernel aplikasi.",
    ],
    [
      "Cloud Run service menggunakan container biasa.",
      "Container Cloud Run tidak memberikan kendali administrator atas kernel host.",
    ],
    [
      "Cloud Run functions dengan HTTP trigger.",
      "Runtime function terkelola bukan guest OS yang dikelola penuh oleh pengguna.",
    ],
    [
      "BigQuery dengan scheduled query.",
      "Mesin analitik SQL tidak menjalankan aplikasi Linux beserta modul kernelnya.",
    ],
  ],
  "vm",
);
q(
  "mig-update-no-unavailable",
  "2.1",
  "MIG produksi memakai instance template v1. Anda telah menguji v2 dan ingin memperbarui VM secara bertahap. Seluruh kapasitas saat ini harus tetap tersedia, dan kuota mengizinkan satu VM tambahan. Konfigurasi rollout mana yang sesuai?",
  [
    [
      "Gunakan template v2 dengan maxUnavailable=0 dan maxSurge=1 pada rolling update.",
      "Surge memberi ruang membuat pengganti sebelum mengurangi kapasitas instance lama.",
    ],
    [
      "Edit boot disk salah satu VM, lalu berharap template v1 berubah otomatis.",
      "Perubahan satu VM tidak memperbarui template grup yang dipakai untuk penggantian.",
    ],
    [
      "Hapus seluruh instance v1 bersamaan dan tunggu grup membuat v2.",
      "Penghapusan sekaligus tidak mempertahankan kapasitas layanan selama rollout.",
    ],
    [
      "Gunakan maxUnavailable sebesar ukuran grup dan maxSurge=0.",
      "Pengaturan ini mengizinkan seluruh grup tidak tersedia dan tidak memenuhi kebutuhan.",
    ],
  ],
  "mig",
);
q(
  "run-container-listen-address",
  "2.1",
  "Container HTTP berhasil diuji di laptop, tetapi revision Cloud Run gagal siap melayani. Log menunjukkan proses hanya mendengarkan localhost:5000, sementara konfigurasi layanan memberikan PORT=8080. Apa perubahan yang diperlukan?",
  [
    [
      "Bind 0.0.0.0 pada port dari variabel PORT.",
      "Ingress container harus menerima koneksi pada interface dan port yang disepakati Cloud Run.",
    ],
    [
      "Tambahkan inbound VPC firewall TCP 5000 untuk semua alamat internet.",
      "Firewall VPC tidak mengubah proses yang mendengarkan pada interface dan port salah.",
    ],
    [
      "Berikan Cloud Run Admin kepada seluruh pemanggil layanan.",
      "Hak pengelolaan layanan tidak memperbaiki startup container.",
    ],
    [
      "Gunakan localhost:8080 dan pertahankan binding loopback saja.",
      "Mengganti nomor port tanpa memperbaiki interface masih membatasi akses ke loopback.",
    ],
  ],
  "runContainer",
);
q(
  "run-runtime-identity-bucket",
  "2.1",
  "Cloud Run menerima unggahan, lalu menulis file ke bucket privat. Deployer dapat membuat revision, tetapi runtime mendapat AccessDenied saat menulis objek. Anda ingin memakai identitas terkelola tanpa key JSON. Apa yang perlu dikonfigurasikan?",
  [
    [
      "Pasang service account runtime khusus dan berikan izin penulisan objek yang diperlukan pada bucket.",
      "Aksi aplikasi memakai service identity runtime, bukan otomatis seluruh hak deployer.",
    ],
    [
      "Berikan Storage Admin kepada deployer dan biarkan runtime tanpa akses bucket.",
      "Menambah hak deployer tidak otomatis memberi hak pada identitas runtime.",
    ],
    [
      "Buat bucket publik agar semua pengguna menjadi pemilik objek.",
      "Mempublikasikan bucket bukan cara memberikan akses minimum kepada runtime.",
    ],
    [
      "Simpan file hanya di filesystem container agar menjadi arsip permanen.",
      "Filesystem instance container bukan penyimpanan permanen lintas instance atau lifecycle.",
    ],
  ],
  "runIdentity",
);
q(
  "run-private-service-id-token",
  "2.1",
  "Service frontend Cloud Run perlu memanggil backend Cloud Run yang mewajibkan autentikasi IAM. Keduanya memakai service account terpisah. Dua tindakan mana yang diperlukan untuk pemanggilan service-to-service yang benar?",
  [
    [
      "Berikan roles/run.invoker pada backend kepada service account frontend.",
      "Identitas pemanggil memerlukan izin invoke pada layanan tujuan.",
    ],
    [
      "Kirim ID token yang audience-nya sesuai dengan backend pada request.",
      "Backend memverifikasi identitas token serta audience tujuan yang sesuai.",
    ],
    [
      "Berikan roles/run.admin kepada semua pengguna internet.",
      "Akses administratif publik tidak dibutuhkan untuk pemanggilan runtime.",
    ],
    [
      "Kirim project ID sebagai password pada header Authorization.",
      "Project ID bukan kredensial autentikasi IAM.",
    ],
    [
      "Gunakan nama service account sebagai satu-satunya bukti identitas tanpa token.",
      "Nama identitas tanpa bukti terautentikasi tidak cukup untuk mengotorisasi request.",
    ],
  ],
  "runAuth",
  [0, 1],
);
q(
  "run-limit-downstream-connections",
  "2.1",
  "Satu service Cloud Run melakukan banyak koneksi ke database berkapasitas terbatas. Tim ingin membatasi pertumbuhan instance selama lonjakan traffic, sambil mengatur pooling dan concurrency aplikasi. Pengaturan layanan mana yang relevan?",
  [
    [
      "Tetapkan maximum instances yang sesuai dengan kapasitas downstream.",
      "Batas instance membantu mengendalikan pertumbuhan kapasitas; tetap perlu merancang koneksi dan menangani lonjakan.",
    ],
    [
      "Naikkan minimum instances setinggi mungkin tanpa batas maksimum.",
      "Minimum instances bukan pembatas ekspansi saat traffic meningkat.",
    ],
    [
      "Tambahkan label max-instances pada container tanpa mengubah konfigurasi layanan.",
      "Label biasa tidak mengonfigurasi autoscaling Cloud Run.",
    ],
    [
      "Perbesar timeout agar database otomatis menerima koneksi tanpa batas.",
      "Timeout tidak meningkatkan kapasitas koneksi database.",
    ],
  ],
  "runScale",
);

q(
  "gke-node-control-standard",
  "2.1",
  "Sebuah workload Kubernetes memerlukan akses administrator node dan pemasangan modul kernel host yang dikelola sendiri oleh tim. Tim telah mengonfirmasi kebutuhan tersebut tidak didukung konfigurasi workload Autopilot yang dipilih. Mode GKE mana yang sebaiknya digunakan?",
  [
    [
      "GKE Standard dengan node pool yang memenuhi kebutuhan workload.",
      "Standard memberi kendali node yang diperlukan, beserta tanggung jawab operasionalnya.",
    ],
    [
      "GKE Autopilot dengan hanya menaikkan jumlah replika Deployment.",
      "Menambah replika tidak menyediakan hak administrasi host yang tidak didukung.",
    ],
    [
      "Cloud Run service dengan request concurrency satu.",
      "Membatasi concurrency tidak memberikan akses kernel host untuk aplikasi Kubernetes.",
    ],
    [
      "GKE Autopilot dengan menambahkan role Viewer pada namespace.",
      "Role baca tidak mengubah pembatasan pengelolaan node platform.",
    ],
  ],
  "autopilot",
);
q(
  "gke-regional-control-plane",
  "2.1",
  "Aplikasi GKE harus tetap mempunyai control plane yang tersedia saat satu zona gagal. Workload juga akan disebarkan ke beberapa zona. Konfigurasi cluster mana yang memenuhi kebutuhan control plane tersebut?",
  [
    [
      "Regional cluster, lalu rencanakan distribusi dan kapasitas node lintas zona.",
      "Regional cluster mereplikasi control plane lintas zona; ketahanan workload tetap perlu dirancang.",
    ],
    [
      "Zonal cluster dengan tiga Deployment pada zona control plane yang sama.",
      "Replika workload tidak mereplikasi control plane zonal.",
    ],
    [
      "Zonal cluster dengan tiga Service tipe ClusterIP.",
      "Jumlah Service tidak mengubah ketersediaan control plane.",
    ],
    [
      "Satu node pool besar dan satu replika aplikasi pada zonal cluster.",
      "Memperbesar satu node pool tidak menghilangkan risiko zona control plane.",
    ],
  ],
  "autopilot",
);
q(
  "gke-shared-rwx-filesystem",
  "2.2",
  "Pod pemrosesan dokumen berjalan pada beberapa node GKE dan harus membaca serta menulis direktori POSIX bersama. Mereka tidak dapat diubah untuk memakai API object storage. Anda ingin shared filesystem terkelola dengan akses ReadWriteMany. Solusi mana yang paling sesuai?",
  [
    [
      "Filestore melalui CSI driver dan PersistentVolumeClaim yang sesuai.",
      "Filestore menyediakan filesystem NFS bersama yang dapat digunakan banyak Pod.",
    ],
    [
      "Satu zonal Persistent Disk read-write yang dipasang tanpa batas pada semua node.",
      "Disk blok biasa bukan shared filesystem RWX lintas node dengan semantik yang diminta.",
    ],
    [
      "ConfigMap berisi direktori kerja yang diperbarui setiap transaksi.",
      "ConfigMap bukan penyimpanan file kerja bersama berukuran dan berfrekuensi tersebut.",
    ],
    [
      "emptyDir pada setiap Pod tanpa sistem sinkronisasi.",
      "emptyDir bersifat lokal pada lifecycle Pod, bukan direktori bersama lintas node.",
    ],
  ],
  "files",
);
q(
  "hpa-cpu-requests-required",
  "2.1",
  "Deployment GKE memakai HPA dengan target persentase CPU. HPA menampilkan target unknown, dan container tidak menetapkan CPU requests. Resource metrics tersedia. Apa perubahan pertama yang paling tepat?",
  [
    [
      "Tetapkan CPU requests yang sesuai pada container agar utilisasi relatif dapat dihitung.",
      "Target utilisasi CPU berbentuk persentase memerlukan requests sebagai pembanding.",
    ],
    [
      "Tambahkan node tanpa memperbarui requests container.",
      "Kapasitas node tambahan tidak menyediakan pembanding utilisasi yang hilang.",
    ],
    [
      "Hapus readiness probe karena probe menentukan CPU request.",
      "Readiness probe tidak menetapkan CPU requests untuk HPA.",
    ],
    [
      "Ubah Service ke LoadBalancer agar HPA memperoleh CPU requests.",
      "Tipe Service tidak mengisi konfigurasi resource container.",
    ],
  ],
  "hpa",
);
q(
  "service-selector-no-endpoints",
  "2.1",
  "Deployment web mempunyai Pod Ready dengan label app=frontend. Service internal tidak memiliki endpoint meskipun port aplikasi sudah benar. Selector Service adalah app=front-end. Apa tindakan yang tepat?",
  [
    [
      "Ubah selector Service menjadi app=frontend.",
      "Service memilih backend berdasarkan kecocokan label, bukan kemiripan nama.",
    ],
    [
      "Naikkan replika Deployment tanpa mengubah selector.",
      "Replika dengan label sama tetap tidak cocok dengan selector yang salah.",
    ],
    [
      "Ubah Service menjadi external load balancer tanpa memperbaiki selector.",
      "Mengganti tipe Service tidak memperbaiki seleksi backend.",
    ],
    [
      "Perbesar limit memory Pod yang sudah Ready.",
      "Memory limit tidak menentukan kecocokan selector Service.",
    ],
  ],
  "servicesK8s",
);
q(
  "terraform-reviewed-plan",
  "2.4",
  "Anda mengubah Terraform untuk menambah subnet produksi. Sebelum menyetujui deployment, reviewer perlu melihat apakah perubahan itu juga akan mengganti resource yang sudah ada. Perintah mana yang sebaiknya dijalankan setelah init dan validasi konfigurasi?",
  [
    [
      "terraform plan, lalu tinjau rencana perubahan.",
      "Plan memperlihatkan perubahan yang diusulkan sebelum apply.",
    ],
    [
      "terraform apply -auto-approve agar reviewer menilai resource sesudah berubah.",
      "Apply langsung menerapkan perubahan sebelum peninjauan yang diminta.",
    ],
    [
      "terraform destroy untuk membuktikan resource dapat dibuat ulang.",
      "Destroy menghapus resource, bukan memeriksa perubahan secara nondestruktif.",
    ],
    [
      "terraform output saja karena output selalu memuat seluruh penggantian resource.",
      "Output state tidak menggantikan rencana perubahan konfigurasi.",
    ],
  ],
  "terraform",
);
q(
  "terraform-shared-state-locking",
  "2.4",
  "Dua engineer menjalankan Terraform terhadap lingkungan yang sama dari laptop berbeda. State lokal mereka mulai tidak sinkron. Tim ingin menyimpan state bersama dan menghindari perubahan state bersamaan tanpa membuatnya publik. Pendekatan mana yang tepat?",
  [
    [
      "Backend GCS dengan locking dan IAM terbatas.",
      "Remote backend bersama mendukung koordinasi state; hak aksesnya perlu dibatasi.",
    ],
    [
      "Commit state berisi data resource ke repository publik agar mudah diunduh.",
      "State dapat memuat informasi sensitif dan publikasi tidak menyediakan locking apply.",
    ],
    [
      "Simpan state lokal terpisah dan selalu pakai -lock=false.",
      "Mematikan locking memperbesar risiko konflik dan tidak menyatukan state.",
    ],
    [
      "Beri tiap engineer nama resource berbeda tetapi tetap anggap mengelola resource yang sama.",
      "Pendekatan itu tidak menyelesaikan koordinasi satu environment yang sama.",
    ],
  ],
  "tfState",
);
q(
  "spot-retry-durable-checkpoint",
  "2.1",
  "Pemrosesan batch dapat mengulang pekerjaan yang terputus dan tidak memiliki deadline ketat. Tim memilih Spot VM untuk menekan biaya. Dua karakteristik aplikasi mana yang paling membantu menghadapi interupsi?",
  [
    [
      "Simpan checkpoint pada penyimpanan persisten yang sesuai.",
      "Checkpoint persisten mengurangi pekerjaan yang harus diulang setelah VM berhenti.",
    ],
    [
      "Buat pemrosesan dapat diulang dan jadwalkan ulang unit pekerjaan yang belum selesai.",
      "Spot dapat diinterupsi sehingga retry harus menjadi bagian desain.",
    ],
    [
      "Simpan satu-satunya salinan hasil dalam RAM VM.",
      "Memori VM tidak bertahan ketika instance dihentikan.",
    ],
    [
      "Anggap Spot VM selalu mendapat jaminan runtime minimum sepanjang job.",
      "Spot tidak memberi jaminan tanpa interupsi untuk durasi job tersebut.",
    ],
    [
      "Nonaktifkan seluruh retry agar tidak ada pekerjaan duplikat.",
      "Tanpa retry, unit kerja yang terinterupsi tidak terselesaikan.",
    ],
  ],
  "spot",
  [0, 1],
);
q(
  "sql-ha-vs-read-replica",
  "2.2",
  "Aplikasi memakai Cloud SQL for MySQL zonal. Targetnya pemulihan otomatis dari kegagalan satu zona dalam region yang sama, bukan sekadar menambah kapasitas baca. Konfigurasi mana yang memenuhi tujuan itu?",
  [
    [
      "Konfigurasikan Cloud SQL regional HA.",
      "Konfigurasi HA menyediakan standby dan mekanisme failover untuk ketahanan zonal.",
    ],
    [
      "Tambahkan read replica biasa lalu anggap failover primary otomatis tersedia.",
      "Read replica untuk skala baca tidak identik dengan konfigurasi HA primary-standby.",
    ],
    [
      "Naikkan ukuran machine type pada primary di zona yang sama.",
      "Ukuran instance lebih besar tidak menghilangkan ketergantungan pada satu zona.",
    ],
    [
      "Aktifkan slow query log tanpa mengubah konfigurasi ketersediaan.",
      "Log kueri tidak menciptakan standby lintas zona.",
    ],
  ],
  "sqlHa",
);
q(
  "sql-proxy-private-network",
  "2.2",
  "Aplikasi pada VM memakai Cloud SQL Auth Proxy untuk instance Cloud SQL ber-IP privat. Kredensial dan izin Cloud SQL Client sudah benar, tetapi tidak ada jalur dari VPC VM menuju alamat privat instance. Apa yang harus dilakukan?",
  [
    [
      "Sediakan konektivitas privat dan konfigurasi jaringan yang diperlukan ke instance.",
      "Proxy menyediakan autentikasi/koneksi terproteksi tetapi tidak menciptakan rute ke private IP.",
    ],
    [
      "Tambahkan role Owner agar proxy dapat melewati semua route jaringan.",
      "IAM tidak menggantikan konektivitas jaringan privat.",
    ],
    [
      "Ganti password database saja sambil membiarkan jalur jaringan tidak tersedia.",
      "Password yang benar tidak memperbaiki ketiadaan jalur ke endpoint.",
    ],
    [
      "Tambahkan label private=true pada VM lalu ulangi koneksi.",
      "Label tidak membangun koneksi VPC ke Cloud SQL.",
    ],
  ],
  "sqlConnect",
);
q(
  "storage-frequent-access-standard",
  "2.2",
  "Aplikasi menyajikan objek yang dibaca berulang kali setiap hari. Tim ingin menghindari retrieval fee kelas cold storage dan tidak memerlukan kebijakan transisi otomatis. Kelas Cloud Storage mana yang paling sesuai untuk objek tersebut?",
  [
    [
      "Standard.",
      "Standard ditujukan untuk data yang sering diakses dan tidak memakai retrieval fee cold storage.",
    ],
    [
      "Nearline.",
      "Nearline ditujukan untuk akses lebih jarang dan mempunyai ketentuan biaya pengambilan serta durasi minimum.",
    ],
    [
      "Coldline.",
      "Coldline kurang sesuai untuk pembacaan rutin setiap hari karena pola biaya cold storage.",
    ],
    [
      "Archive.",
      "Archive ditujukan untuk akses sangat jarang, bukan penyajian objek harian aktif.",
    ],
  ],
  "storage",
);
q(
  "onprem-file-agent-transfer",
  "2.2",
  "Perusahaan mempunyai direktori file besar di server on-premises dan koneksi WAN yang memadai. Mereka ingin transfer terjadwal ke Cloud Storage dengan pengelolaan job dan agent pada sumber file, tanpa mengirim perangkat fisik. Layanan mana yang cocok?",
  [
    [
      "Storage Transfer Service dengan agent untuk sumber file on-premises.",
      "Transfer berbasis agent mendukung pemindahan dari filesystem ke Cloud Storage secara terkelola.",
    ],
    [
      "Transfer Appliance sebagai satu-satunya pilihan meski tidak ingin perangkat dikirim.",
      "Appliance melibatkan perangkat fisik dan tidak sesuai batasan yang diberikan.",
    ],
    [
      "Cloud VPN saja tanpa job yang membaca dan menyalin file.",
      "Konektivitas VPN tidak dengan sendirinya melakukan transfer file terjadwal.",
    ],
    [
      "Cloud SQL import untuk direktori file aplikasi apa pun.",
      "Import database bukan transfer filesystem umum ke object storage.",
    ],
  ],
  "transfer",
);
q(
  "global-http-termination-lb",
  "2.3",
  "Backend HTTP stateless ditempatkan di dua region. Pengguna membutuhkan satu endpoint HTTPS global dengan TLS termination pada layanan load balancing dan routing berbasis path. Jenis load balancer mana yang paling sesuai?",
  [
    [
      "Global external Application Load Balancer.",
      "Application Load Balancer mendukung endpoint HTTP(S) global dan routing lapisan aplikasi.",
    ],
    [
      "Internal passthrough Network Load Balancer.",
      "Load balancer internal passthrough tidak menyediakan endpoint HTTPS internet global beserta path routing.",
    ],
    [
      "External passthrough Network Load Balancer untuk TCP tanpa proxy HTTP.",
      "Passthrough tidak melakukan TLS termination dan routing path HTTP yang diminta.",
    ],
    [
      "Cloud DNS round-robin tanpa frontend load balancer.",
      "DNS tidak melakukan TLS termination maupun pemeriksaan path HTTP.",
    ],
  ],
  "lb",
);
q(
  "regional-subnet-multi-zone",
  "2.3",
  "Dua VM akan dibuat di zona berbeda tetapi dalam region yang sama. Keduanya harus memakai subnet IPv4 yang sama pada custom mode VPC. Bagaimana Anda mengonfigurasikan subnet?",
  [
    [
      "Buat satu subnet regional, lalu gunakan pada VM di kedua zona dalam region itu.",
      "Subnet VPC bersifat regional sehingga dapat dipakai resource pada beberapa zona dalam region.",
    ],
    [
      "Buat subnet zonal terpisah dengan CIDR identik dan gabungkan sesudah VM dibuat.",
      "Subnet Google Cloud bukan resource zonal yang perlu digabungkan seperti itu.",
    ],
    [
      "Buat satu subnet global yang dapat digunakan di semua region tanpa batas.",
      "VPC bersifat global, tetapi subnet memiliki scope region.",
    ],
    [
      "Hubungkan kedua zona menggunakan VPC Peering agar subnet berubah menjadi regional.",
      "Peering menghubungkan jaringan VPC, bukan mengubah scope subnet antarzona.",
    ],
  ],
  "vpc",
);
q(
  "peering-nontransitive-three-vpcs",
  "2.3",
  "VPC A sudah di-peer dengan B, dan B sudah di-peer dengan C. CIDR tidak tumpang tindih, tetapi VM A tidak dapat berkomunikasi langsung dengan VM C. Tidak ada desain hub transit lain. Apa penjelasan dan perbaikan yang sesuai?",
  [
    [
      "Peering tidak transitif; buat konektivitas A–C yang didukung, lalu verifikasi route dan firewall.",
      "Hubungan A–B dan B–C tidak otomatis menyediakan jalur transit A–C.",
    ],
    [
      "Hapus firewall C karena B selalu meneruskan seluruh traffic peering secara otomatis.",
      "Asumsi transit otomatis tidak benar; menghapus firewall juga terlalu luas.",
    ],
    [
      "Ubah nama subnet A menjadi nama subnet C untuk mengaktifkan transit.",
      "Nama subnet tidak mengubah sifat nontransitif peering.",
    ],
    [
      "Tambahkan public DNS record B agar route privat A–C dibuat otomatis.",
      "Resolusi nama tidak menciptakan route transit antara peering tersebut.",
    ],
  ],
  "peering",
  [0],
  "advanced",
);
q(
  "shared-vpc-subnet-delegation",
  "2.3",
  "Tim jaringan mengelola Shared VPC host project. Tim aplikasi hanya boleh membuat VM memakai satu subnet yang ditentukan dan tidak boleh mengubah firewall atau subnet lain. Akses jaringan mana yang sebaiknya diberikan?",
  [
    [
      "Compute Network User pada subnet yang diizinkan kepada principal yang sesuai.",
      "Delegasi penggunaan subnet dapat dipersempit tanpa memberikan administrasi jaringan host.",
    ],
    [
      "Compute Network Admin pada seluruh host project.",
      "Network Admin memberi pengelolaan jaringan lebih luas daripada kebutuhan memakai satu subnet.",
    ],
    [
      "Compute Security Admin pada seluruh organisasi.",
      "Pengelolaan firewall organisasi tidak diperlukan untuk penggunaan subnet yang dibatasi.",
    ],
    [
      "Billing Account User pada akun host project.",
      "Izin billing tidak menyediakan hak memakai subnet Shared VPC.",
    ],
  ],
  "shared",
);
q(
  "eventarc-filter-delivery",
  "2.1",
  "Service Cloud Run memproses objek baru Cloud Storage. Image sudah terdeploy, tetapi belum ada integrasi event. Anda ingin hanya kejadian object finalized dari bucket tertentu dikirim ke service tersebut. Apa yang perlu dibuat?",
  [
    [
      "Eventarc trigger dengan event type dan filter bucket yang sesuai serta identitas pengiriman berizin.",
      "Trigger memetakan kejadian yang dipilih ke tujuan Cloud Run dengan otorisasi yang diperlukan.",
    ],
    [
      "Cloud DNS TXT record pada nama bucket yang memuat URL Cloud Run.",
      "DNS TXT bukan konfigurasi pengiriman event objek.",
    ],
    [
      "IAM Viewer pada bucket tanpa mengonfigurasi trigger apa pun.",
      "Izin baca tidak membuat alur pengiriman event.",
    ],
    [
      "Readiness probe pada Cloud Run yang terus memindai isi bucket.",
      "Probe readiness memeriksa kesiapan layanan, bukan membuat integrasi event storage.",
    ],
  ],
  "eventarc",
);
q(
  "cloudevent-function-shape",
  "2.1",
  "Anda menulis Cloud Run function yang menerima event terstruktur dari Eventarc, bukan request HTTP aplikasi biasa. Handler perlu membaca tipe event dan data objek. Kontrak input mana yang harus diikuti?",
  [
    [
      "Handler CloudEvent sesuai Functions Framework dan tipe event pemicunya.",
      "Eventarc menggunakan CloudEvents; bentuk handler dan data harus sesuai jenis event.",
    ],
    [
      "Parameter event persis sama dengan setiap event AWS Lambda S3.",
      "Format event layanan lain tidak otomatis sama dengan CloudEvents Eventarc.",
    ],
    [
      "String URL bucket saja tanpa metadata kejadian.",
      "Kontrak CloudEvent menyertakan struktur dan atribut event, bukan hanya sebuah URL.",
    ],
    [
      "Objek request HTTP yang selalu berisi file gambar mentah di query string.",
      "Asumsi tersebut bukan kontrak event storage melalui Eventarc.",
    ],
  ],
  "functions",
);
q(
  "bq-load-region-location",
  "2.2",
  "Load job CSV dari Cloud Storage ke BigQuery gagal dengan ketidakcocokan lokasi. Struktur CSV sudah benar. Apa yang seharusnya Anda verifikasi sebelum menjalankan ulang job?",
  [
    [
      "Lokasi bucket sumber, dataset, dan job.",
      "Lokasi load job dan storage harus memenuhi aturan penempatan data BigQuery.",
    ],
    [
      "Hanya delimiter CSV karena semua error lokasi disebabkan delimiter.",
      "Delimiter tidak mengubah lokasi bucket atau dataset.",
    ],
    [
      "Hanya jumlah slot agar bucket otomatis dipindahkan ke region dataset.",
      "Kapasitas eksekusi tidak memindahkan lokasi penyimpanan sumber.",
    ],
    [
      "Role BigQuery Admin agar pembatasan lokasi sumber tidak berlaku.",
      "Izin administratif tidak menghilangkan aturan kompatibilitas lokasi load.",
    ],
  ],
  "bqLoad",
);
q(
  "firestore-composite-index",
  "2.2",
  "Kueri Firestore yang menggabungkan filter dan pengurutan ditolak dengan FAILED_PRECONDITION dan tautan untuk membuat indeks. Dokumen dapat dibaca dengan kueri sederhana. Apa tindakan paling tepat?",
  [
    [
      "Buat indeks yang diminta dan tunggu statusnya siap.",
      "Firestore memerlukan indeks yang mendukung pola kueri; indeks baru perlu selesai dibangun.",
    ],
    [
      "Nonaktifkan seluruh indeks agar filter dijalankan tanpa indeks.",
      "Menghilangkan indeks tidak membuat pola kueri yang membutuhkan indeks menjadi didukung.",
    ],
    [
      "Tambahkan replika aplikasi Cloud Run tanpa memperbarui indeks.",
      "Jumlah pemanggil tidak memperbaiki indeks yang belum tersedia.",
    ],
    [
      "Ubah role pengguna menjadi Owner tanpa menyentuh indeks.",
      "Pesan indeks tidak terselesaikan hanya dengan menambah privilege pengguna.",
    ],
  ],
  "firestore",
);
q(
  "pubsub-independent-consumers",
  "2.2",
  "Satu event pesanan harus diterima secara independen oleh tim penagihan dan tim analitik. Setiap tim mempunyai retry dan backlog sendiri. Bagaimana konfigurasi Pub/Sub yang tepat?",
  [
    [
      "Buat dua subscription terpisah pada topic yang sama.",
      "Subscription terpisah memberikan aliran pengiriman dan progres acknowledgment independen.",
    ],
    [
      "Jalankan kedua tim sebagai subscriber pada satu subscription yang sama.",
      "Subscriber satu subscription membagi pengiriman, bukan menjamin setiap tim menerima seluruh event.",
    ],
    [
      "Gunakan satu subscription dan beri nama topic berbeda pada log subscriber.",
      "Penamaan log tidak menciptakan aliran pengiriman independen.",
    ],
    [
      "Acknowledge semua pesan sebelum dipublikasikan ke topic.",
      "Acknowledgment dilakukan terhadap pesan yang diterima melalui subscription, bukan sebelum publish.",
    ],
  ],
  "pubsub",
);
q(
  "cuda-gpu-requirement",
  "2.1",
  "Tim membawa aplikasi komputasi dengan dependency CUDA dan kernel NVIDIA yang sudah diuji. Mereka tidak berencana menulis ulang aplikasi untuk framework accelerator lain. Resource mana yang perlu dievaluasi untuk menjalankannya?",
  [
    [
      "Compute Engine dengan GPU NVIDIA yang didukung beserta driver dan kuota yang sesuai.",
      "CUDA memerlukan perangkat dan stack NVIDIA yang kompatibel dengan aplikasi.",
    ],
    [
      "Cloud TPU tanpa memeriksa kompatibilitas software karena semua kode CUDA langsung didukung.",
      "TPU tidak menjadi pengganti langsung stack CUDA tanpa evaluasi atau perubahan software.",
    ],
    [
      "VM CPU-only dengan hanya mengaktifkan label cuda=true.",
      "Label tidak menyediakan perangkat GPU atau runtime CUDA.",
    ],
    [
      "BigQuery on-demand sebagai pengganti biner komputasi CUDA apa pun.",
      "Mesin analitik SQL tidak menjalankan sembarang executable CUDA tersebut.",
    ],
  ],
  "gpu",
);
q(
  "targeted-firewall-service-account",
  "2.3",
  "Backend menerima TCP 8443 hanya dari VM aplikasi yang memakai service account app-client. IP VM dapat berubah. Anda ingin aturan VPC yang menargetkan identitas VM, dengan cakupan sempit. Apa yang paling sesuai?",
  [
    [
      "Buat ingress allow dengan source service account app-client dan target backend yang sesuai.",
      "Aturan yang mendukung service account dapat membatasi traffic dari VM dengan identitas yang ditentukan.",
    ],
    [
      "Allow TCP 8443 dari 0.0.0.0/0 agar perubahan IP tidak mengganggu.",
      "Cakupan seluruh internet jauh lebih luas daripada sumber VM yang diminta.",
    ],
    [
      "Gunakan label billing sebagai source range pada firewall VPC.",
      "Label alokasi biaya bukan source range atau sumber service account firewall.",
    ],
    [
      "Berikan Cloud SQL Client kepada semua VM agar port 8443 otomatis terbuka.",
      "Role API Cloud SQL tidak membuat aturan jaringan untuk backend tersebut.",
    ],
  ],
  "firewall",
);

q(
  "run-job-completion-contract",
  "2.1",
  "Tim menyerahkan container yang membaca satu batch file lalu berhenti dengan exit code. Container tidak membuka port HTTP dan dijalankan sesuai kebutuhan. Anda ingin eksekusi terkelola tanpa memodifikasi aplikasi menjadi web server. Model deployment mana yang cocok?",
  [
    [
      "Cloud Run Job dengan task dan retry yang sesuai.",
      "Job dirancang menjalankan task sampai selesai tanpa kontrak server HTTP layanan.",
    ],
    [
      "Cloud Run service tanpa mengubah container yang tidak mendengarkan port.",
      "Service memerlukan container yang memenuhi kontrak layanan HTTP, berbeda dari batch hingga selesai.",
    ],
    [
      "GKE Service ClusterIP tanpa membuat Pod atau Job.",
      "Service Kubernetes hanya mengekspos backend dan tidak menjalankan batch sendiri.",
    ],
    [
      "Cloud Run HTTP function yang mengharuskan proses batch menjadi daemon permanen.",
      "Membuat daemon tidak diperlukan dan tidak sesuai kontrak pekerjaan yang selesai lalu keluar.",
    ],
  ],
  "runJobs",
);

// Section 3: successful operations — 30 scenarios.
q(
  "gke-image-pull-node-identity",
  "3.1",
  "Pod pada GKE Standard berstatus ImagePullBackOff setelah image dipindah ke Artifact Registry di proyek lain. Event menunjukkan permission denied; node dapat menjangkau registry. Workload service account mempunyai akses aplikasi, tetapi node identity belum diberi akses repo. Apa yang perlu diperbaiki?",
  [
    [
      "Berikan Artifact Registry Reader pada repository tujuan kepada service account node yang melakukan image pull.",
      "Penarikan image oleh node memerlukan otorisasi identitas node pada registry terkait.",
    ],
    [
      "Berikan Storage Object Viewer hanya pada Kubernetes service account workload.",
      "Izin data aplikasi pada workload bukan otomatis izin node untuk menarik image dari registry.",
    ],
    [
      "Naikkan CPU request Pod agar registry memberi izin pull.",
      "Kapasitas CPU tidak memperbaiki penolakan otorisasi registry.",
    ],
    [
      "Ubah Service aplikasi dari ClusterIP menjadi NodePort.",
      "Jalur pemanggilan Service tidak menentukan izin penarikan image.",
    ],
  ],
  "imagePull",
  [0],
  "advanced",
);
q(
  "crashloop-previous-logs",
  "3.1",
  "Container aplikasi dalam Pod berulang kali restart. Log instance container saat ini masih kosong karena baru mulai berjalan. Anda ingin melihat pesan terakhir dari container sebelumnya sebelum mengubah konfigurasi. Perintah mana yang paling relevan?",
  [
    [
      "kubectl logs POD -c CONTAINER --previous.",
      "Flag previous mengambil log instance container sebelumnya yang telah berhenti.",
    ],
    [
      "kubectl get nodes tanpa memeriksa log atau event Pod.",
      "Daftar node tidak menampilkan pesan aplikasi dari container sebelumnya.",
    ],
    [
      "kubectl scale deployment DEPLOYMENT --replicas=0 sebagai langkah diagnosis pertama.",
      "Menghentikan replika tidak membaca bukti penyebab restart.",
    ],
    [
      "kubectl logs POD --follow saja dan anggap log container sebelumnya selalu digabung.",
      "Follow mengikuti stream saat ini, bukan secara khusus mengambil log instance sebelumnya.",
    ],
  ],
  "crash",
);
q(
  "pending-unbound-pvc",
  "3.1",
  "Pod berstatus Pending. Event scheduler menyebut unbound immediate PersistentVolumeClaims, sedangkan CPU dan memory node cukup. Tindakan investigasi mana yang paling tepat?",
  [
    [
      "Periksa PVC, StorageClass, dan event provisioning volume.",
      "Bukti menunjukkan dependensi storage belum terpenuhi, bukan kekurangan compute.",
    ],
    [
      "Naikkan maksimum node autoscaler tanpa memeriksa PVC.",
      "Node tambahan tidak otomatis memperbaiki konfigurasi atau provisioning volume yang gagal.",
    ],
    [
      "Naikkan HPA maksimum replika supaya satu replika dapat melewati PVC.",
      "Replika tambahan tetap dapat menunggu klaim storage yang bermasalah.",
    ],
    [
      "Tambahkan ingress firewall HTTP untuk menjadikan PVC Bound.",
      "Akses ingress aplikasi tidak menentukan status binding volume.",
    ],
  ],
  "pending",
);
q(
  "hpa-pods-node-ceiling",
  "3.1",
  "HPA sudah menambah replika, tetapi Pod baru Pending karena Insufficient cpu. Cluster autoscaler aktif dan node pool telah mencapai maksimum node yang dikonfigurasikan. Kuota proyek masih cukup. Apa perbaikan yang paling langsung?",
  [
    [
      "Tinjau dan naikkan batas maksimum node pool sesuai kapasitas serta anggaran yang disetujui.",
      "Batas node pool menghentikan penambahan node walaupun Pod membutuhkan kapasitas.",
    ],
    [
      "Naikkan maksimum replika HPA saja tanpa mengubah kapasitas node.",
      "Lebih banyak Pod yang diminta tidak menambah kapasitas ketika batas node telah tercapai.",
    ],
    [
      "Hapus CPU requests seluruh Pod agar penjadwalan selalu berhasil.",
      "Menghapus deklarasi kebutuhan dapat merusak pengelolaan resource dan tidak menyelesaikan kapasitas nyata.",
    ],
    [
      "Ganti seluruh Service aplikasi menjadi headless.",
      "Pemilihan tipe Service tidak mengubah batas node pool.",
    ],
  ],
  "clusterScale",
);
q(
  "run-rollback-to-known-revision",
  "3.1",
  "Revision baru Cloud Run menimbulkan error setelah menerima traffic. Revision sebelumnya masih tersedia dan diketahui sehat. Anda ingin memulihkan layanan secepatnya sebelum menyelidiki kode baru. Apa tindakan yang tepat?",
  [
    [
      "Alihkan traffic ke revision sehat sebelumnya.",
      "Traffic migration memungkinkan rollback tanpa menunggu build ulang image lama.",
    ],
    [
      "Hapus revision sehat agar deployment berikutnya memakai image yang sama.",
      "Menghapus opsi pemulihan tidak mengarahkan traffic kembali ke versi sehat.",
    ],
    [
      "Bangun ulang semua image terlebih dahulu walaupun revision lama siap menerima traffic.",
      "Build ulang menunda pemulihan yang sudah tersedia melalui pengalihan traffic.",
    ],
    [
      "Ubah nama service tanpa mengatur traffic revision.",
      "Nama service tidak memperbaiki distribusi traffic ke revision yang gagal.",
    ],
  ],
  "runTraffic",
);
q(
  "run-revision-immutable-config",
  "3.1",
  "Anda perlu mengganti image dan environment variable sebuah service Cloud Run. Tim meminta perubahan dapat dilacak dan revision lama tetap dapat dipakai untuk rollback. Bagaimana perubahan tersebut dikelola?",
  [
    [
      "Deploy revision baru, kemudian atur traffic.",
      "Revision merepresentasikan snapshot konfigurasi yang immutable dan mendukung pengelolaan traffic.",
    ],
    [
      "SSH ke instance Cloud Run dan ubah executable secara permanen di tempat.",
      "Cloud Run tidak dikelola dengan perubahan persisten melalui SSH instance layanan.",
    ],
    [
      "Ganti isi revision lama tanpa membuat revision baru agar history tetap sama.",
      "Revision immutable tidak diperbarui seperti server mutable tersebut.",
    ],
    [
      "Ubah label billing dan anggap image aktif ikut berubah.",
      "Label tidak menggantikan deployment image dan konfigurasi runtime.",
    ],
  ],
  "runRevisions",
);
q(
  "ops-agent-memory-pipeline",
  "3.4",
  "CPU metric VM terlihat di Monitoring, tetapi metric penggunaan RAM guest OS tidak muncul. Belum ada guest monitoring agent. VM menjalankan OS yang didukung. Apa yang diperlukan untuk memperoleh metric RAM tersebut?",
  [
    [
      "Konfigurasikan Ops Agent untuk metric guest OS.",
      "Metric dalam guest OS seperti RAM memerlukan pengumpulan di dalam guest, berbeda dari sebagian metric platform.",
    ],
    [
      "Buat uptime check HTTP karena ia mengukur seluruh memory proses VM.",
      "Uptime check memeriksa ketersediaan endpoint, bukan RAM guest OS.",
    ],
    [
      "Aktifkan Cloud Audit Logs saja untuk membaca penggunaan RAM tiap detik.",
      "Audit log mencatat operasi akses/perubahan, bukan menggantikan pengumpul metric memory guest.",
    ],
    [
      "Naikkan kuota vCPU regional agar metric RAM otomatis dibuat.",
      "Kuota CPU tidak memasang pengumpul metric guest OS.",
    ],
  ],
  "agent",
);
q(
  "logging-filter-resource-severity",
  "3.4",
  "Logs Explorer menampilkan banyak pesan dari berbagai layanan. Anda hanya ingin log VM Compute Engine dengan severity ERROR atau lebih tinggi. Filter mana yang benar untuk memulai penyelidikan?",
  [
    [
      'resource.type="gce_instance" AND severity>=ERROR',
      "Filter membatasi tipe monitored resource dan rentang severity yang diminta.",
    ],
    [
      'resource.type="gce_instance" AND severity=INFO',
      "Filter ini memilih INFO, bukan error dan severity lebih tinggi.",
    ],
    [
      'resource.type="cloud_run_revision" AND severity>=ERROR',
      "Tipe resource tersebut memilih Cloud Run, bukan VM Compute Engine.",
    ],
    [
      'resource.type="gce_instance" AND severity<ERROR',
      "Operator kurang dari justru mengecualikan ERROR dan tingkat lebih tinggi.",
    ],
  ],
  "logQuery",
);
q(
  "sink-writer-dataset-access",
  "3.4",
  "Sink Cloud Logging ke BigQuery memiliki filter yang benar, tetapi pengiriman gagal karena writer identity sink tidak dapat menulis ke dataset tujuan. Anda ingin mengubah akses seminimal mungkin. Apa yang harus dilakukan?",
  [
    [
      "Berikan izin penulisan dataset yang diperlukan kepada writer identity sink pada tujuan tersebut.",
      "Sink menggunakan writer identity sendiri; identitas itu harus berwenang pada destination.",
    ],
    [
      "Berikan BigQuery Viewer hanya kepada operator yang membuat sink.",
      "Akses baca operator tidak memberi hak menulis kepada writer identity sink.",
    ],
    [
      "Berikan Logging Viewer pada VM yang menghasilkan pesan saja.",
      "Hak baca log VM tidak mengotorisasi sink menulis ke BigQuery.",
    ],
    [
      "Ubah dataset menjadi publik agar setiap identitas dapat menulis.",
      "Publikasi dataset bukan pengaturan least privilege untuk writer sink.",
    ],
  ],
  "sink",
);
q(
  "new-sink-no-historical-replay",
  "3.4",
  "Sink ekspor log dibuat hari ini. Log yang cocok dari kemarin masih ada di log bucket, tetapi tidak muncul otomatis pada destination sink baru. Apa penjelasan yang benar?",
  [
    [
      "Sink merutekan log yang masuk sesuai konfigurasi; sink baru tidak otomatis memutar ulang seluruh log lama.",
      "Routing berlaku pada aliran log yang diproses; ekspor historis memerlukan mekanisme yang sesuai.",
    ],
    [
      "Semua sink baru pasti menyalin seluruh histori setelah tepat satu menit.",
      "Tidak ada jaminan replay historis universal saat sink dibuat.",
    ],
    [
      "Filter severity sink tidak berlaku untuk log yang tersimpan.",
      "Masalah yang diberikan adalah ekspektasi replay, bukan ketidakberlakuan filter severity.",
    ],
    [
      "Pembuatan sink langsung menghapus log lama dari bucket sumber.",
      "Sink baru tidak otomatis menghapus histori sumber tersebut.",
    ],
  ],
  "logRouter",
);
q(
  "alert-missing-data-not-zero",
  "3.4",
  "Aplikasi berhenti mengirim custom metric. Tim berasumsi tidak adanya data sama dengan nilai nol yang sehat. Anda perlu mendeteksi keadaan ini dengan jelas. Apa yang sebaiknya dikonfigurasikan?",
  [
    [
      "Gunakan kondisi metric absence atau penanganan missing data yang sesuai pada alerting policy.",
      "Ketiadaan sampel harus dibedakan dari nilai metric nol yang benar-benar dilaporkan.",
    ],
    [
      "Hapus policy setiap kali data hilang supaya dashboard selalu hijau.",
      "Menghapus pemantauan tidak mendeteksi kegagalan pelaporan.",
    ],
    [
      "Anggap semua interval tanpa data merupakan bukti aplikasi sehat.",
      "Tidak ada sampel bukan bukti kondisi layanan baik.",
    ],
    [
      "Naikkan retensi log tanpa menambahkan kondisi metric absence.",
      "Retensi log tidak mendefinisikan perilaku alert untuk metric yang hilang.",
    ],
  ],
  "alert",
);
q(
  "uptime-auth-401-diagnosis",
  "3.4",
  "Uptime check ke endpoint menghasilkan HTTP 401, sementara pengguna yang terautentikasi dapat mengaksesnya. Anda tidak ingin membuka seluruh API menjadi publik. Apa langkah berikutnya yang paling tepat?",
  [
    [
      "Tinjau autentikasi check dan endpoint health yang sesuai, lalu verifikasi expected response.",
      "Kegagalan autentikasi check perlu dibedakan dari aplikasi yang tidak tersedia.",
    ],
    [
      "Hapus autentikasi pada seluruh API produksi agar check selalu berhasil.",
      "Perubahan ini terlalu luas dan melanggar kebutuhan keamanan.",
    ],
    [
      "Naikkan vCPU karena kode 401 selalu berarti kehabisan CPU.",
      "401 menunjukkan persoalan autentikasi request, bukan bukti kehabisan CPU.",
    ],
    [
      "Abaikan seluruh kegagalan HTTP sebagai sukses tanpa menilai endpoint.",
      "Mengabaikan kegagalan menghilangkan makna pemeriksaan ketersediaan.",
    ],
  ],
  "uptime",
);
q(
  "disk-resize-filesystem-followup",
  "3.1",
  "Ukuran Persistent Disk data sudah dinaikkan melalui Compute Engine. Linux masih menunjukkan filesystem lama pada df, dan filesystem/partisinya belum diperluas otomatis. Apa langkah yang diperlukan setelah memastikan backup tersedia?",
  [
    [
      "Perluas partisi/filesystem sesuai layout guest OS.",
      "Penambahan kapasitas disk tidak selalu otomatis memperluas lapisan partisi dan filesystem guest.",
    ],
    [
      "Buat snapshot baru lalu anggap filesystem aktif ikut membesar otomatis.",
      "Snapshot tidak menggantikan proses resize filesystem aktif.",
    ],
    [
      "Tambahkan network interface untuk menyediakan blok storage tambahan.",
      "Interface jaringan tidak memperluas filesystem pada disk.",
    ],
    [
      "Format ulang disk produksi tanpa memulihkan data.",
      "Format ulang bersifat destruktif dan bukan langkah resize yang diperlukan.",
    ],
  ],
  "resize",
);
q(
  "snapshot-restore-separate-disk",
  "3.1",
  "File penting pada data disk terhapus. Snapshot sebelum kejadian tersedia. Anda ingin memeriksa dan mengambil file lama tanpa menimpa seluruh disk aktif. Apa prosedur yang paling sesuai?",
  [
    [
      "Pulihkan snapshot ke disk baru untuk mengambil file.",
      "Pemulihan ke disk terpisah memungkinkan verifikasi tanpa langsung menimpa workload aktif.",
    ],
    [
      "Hapus disk aktif terlebih dahulu agar snapshot dapat dibuka.",
      "Snapshot dapat dipakai membuat disk baru tanpa menghapus disk aktif.",
    ],
    [
      "Pasang objek snapshot secara langsung sebagai direktori tanpa membuat disk.",
      "Snapshot Compute Engine bukan volume file yang langsung dipasang dengan cara tersebut.",
    ],
    [
      "Ganti nama snapshot agar berubah menjadi folder pada VM.",
      "Penamaan snapshot tidak memulihkan file ke filesystem guest.",
    ],
  ],
  "snapshots",
);
q(
  "sql-pitr-target-before-error",
  "3.2",
  "Migrasi database Cloud SQL for MySQL menghapus baris secara keliru pada 14.10. PITR sudah aktif dan timestamp 14.09 berada dalam jendela pemulihan. Anda ingin memverifikasi keadaan sebelum kesalahan tanpa langsung menimpa instance sumber. Apa langkah tepat?",
  [
    [
      "Pulihkan ke instance baru pada timestamp sebelum kesalahan, lalu validasi data dan rencanakan cutover.",
      "PITR memulihkan keadaan pada titik waktu yang didukung dengan target pemulihan terpisah untuk divalidasi.",
    ],
    [
      "Buat read replica sekarang dan anggap perubahan yang salah tidak direplikasi.",
      "Replica dari keadaan saat ini bukan pemulihan otomatis ke sebelum penghapusan.",
    ],
    [
      "Restart primary agar transaksi yang sudah committed dibatalkan.",
      "Restart tidak membatalkan transaksi committed yang sudah menghapus data.",
    ],
    [
      "Aktifkan query log setelah kejadian agar data yang terhapus otomatis kembali.",
      "Logging tambahan tidak membangun kembali keadaan historis database.",
    ],
  ],
  "pitr",
  [0],
  "advanced",
);
q(
  "read-after-write-replica-lag",
  "3.2",
  "Setelah menulis transaksi ke Cloud SQL primary, aplikasi langsung membaca dari read replica dan kadang mendapat data lama. Replication lag terukur lebih besar dari nol. Untuk operasi yang membutuhkan read-after-write konsisten, apa pilihan yang tepat?",
  [
    [
      "Arahkan pembacaan sensitif tersebut ke primary atau terapkan mekanisme konsistensi yang sesuai.",
      "Read replica dapat tertinggal; pembacaan segera setelah write tidak selalu melihat transaksi terbaru.",
    ],
    [
      "Tambahkan read replica lain dan anggap lag seluruh replica pasti nol.",
      "Jumlah replica tidak menjamin sinkronisasi tanpa lag.",
    ],
    [
      "Ubah password database untuk menyinkronkan seluruh replica.",
      "Password tidak mengendalikan kemajuan replikasi data.",
    ],
    [
      "Naikkan TTL DNS sebagai jaminan konsistensi transaksi.",
      "TTL DNS tidak memastikan transaksi telah diterapkan pada replica.",
    ],
  ],
  "sqlReplica",
);
q(
  "storage-cmek-service-agent-access",
  "3.2",
  "Objek Cloud Storage memakai CMEK. Setelah perubahan IAM pada key, aplikasi yang masih memiliki akses objek tidak bisa membaca data. Key version aktif. Izin siapa yang perlu diperiksa untuk operasi enkripsi/dekripsi layanan storage?",
  [
    [
      "Cloud Storage service agent pada key yang dipakai.",
      "CMEK memerlukan akses KMS bagi identitas layanan yang melakukan operasi kriptografi storage.",
    ],
    [
      "Hanya pengguna pembuat bucket, karena service agent tidak terlibat.",
      "Akses pengguna pada bucket saja tidak menggantikan otorisasi KMS service agent.",
    ],
    [
      "Semua pengguna internet agar key dapat digunakan publik.",
      "Mempublikasikan akses key bukan perbaikan otorisasi minimum.",
    ],
    [
      "Hanya billing account administrator tanpa memeriksa policy key.",
      "Hak mengelola billing tidak mengembalikan akses kriptografi pada key.",
    ],
  ],
  "cmek",
);
q(
  "lifecycle-age-not-class-age",
  "3.2",
  "Objek berusia 100 hari berubah kelas kemarin melalui aksi lifecycle SetStorageClass, tanpa rewrite manual atau penggantian objek. Rule lifecycle lain menggunakan age=90. Tim berasumsi age kembali nol. Interpretasi mana yang benar?",
  [
    [
      "Age dihitung dari waktu pembuatan objek, bukan otomatis direset oleh perubahan storage class.",
      "Perubahan kelas tidak mengubah acuan usia objek untuk kondisi age.",
    ],
    [
      "Age selalu dihitung sejak billing account terakhir ditautkan.",
      "Hubungan billing bukan acuan umur objek untuk lifecycle.",
    ],
    [
      "Age selalu direset pada setiap pembacaan objek.",
      "Akses baca bukan pengaturan ulang umur objek pada kondisi tersebut.",
    ],
    [
      "Age dihitung dari tanggal pembuatan bucket tanpa melihat objek.",
      "Kondisi age berlaku pada umur objek, bukan umur bucket.",
    ],
  ],
  "lifecycle",
);
q(
  "locked-retention-blocks-delete",
  "3.2",
  "Penghapusan objek ditolak karena retention policy bucket yang telah dikunci belum terpenuhi. Operator mempunyai izin delete objek. Apa penjelasan yang benar?",
  [
    [
      "Hak delete tidak melewati kewajiban retensi terkunci; tunggu periode yang berlaku terpenuhi.",
      "Kebijakan retensi yang dikunci tetap membatasi penghapusan meskipun IAM mengizinkannya.",
    ],
    [
      "Berikan Owner dan abaikan retention policy dengan flag --quiet.",
      "Role dan flag konfirmasi tidak menghapus kewajiban retensi terkunci.",
    ],
    [
      "Ganti storage class agar tanggal retensi otomatis hilang.",
      "Perubahan storage class bukan cara menghapus batas retensi terkunci.",
    ],
    [
      "Ubah nama akun pengguna agar objek dianggap milik pengguna baru.",
      "Nama pengguna tidak mengubah syarat retensi objek.",
    ],
  ],
  "retention",
);
q(
  "pubsub-ack-processing-idempotency",
  "3.2",
  "Subscriber kadang crash sesudah perubahan bisnis ditulis tetapi sebelum pesan di-ack. Pesan kemudian diterima lagi. Dua langkah mana yang membantu pemrosesan andal tanpa menerapkan efek bisnis dua kali?",
  [
    [
      "Gunakan identitas pesan/transaksi dan mekanisme idempotensi pada penyimpanan hasil.",
      "Idempotensi mengendalikan efek bisnis ketika pesan diproses ulang.",
    ],
    [
      "Acknowledge setelah pemrosesan berhasil dan kelola acknowledgment deadline sesuai kebutuhan.",
      "Ack dan deadline yang tepat mendukung retry ketika proses belum selesai.",
    ],
    [
      "Acknowledge sebelum membaca pesan dan abaikan semua kegagalan pemrosesan.",
      "Ack terlalu awal dapat menghilangkan kesempatan memproses ulang pekerjaan yang gagal.",
    ],
    [
      "Anggap setiap subscription biasa memberi exactly-once end-to-end ke database tanpa desain aplikasi.",
      "Jaminan pengiriman tidak boleh digeneralisasi menjadi transaksi bisnis exactly-once otomatis.",
    ],
    [
      "Hapus topic setiap kali subscriber restart.",
      "Menghapus topic merusak alur pesan dan bukan penanganan crash.",
    ],
  ],
  "pubsubDelivery",
  [0, 1],
);
q(
  "nat-port-exhaustion-diagnosis",
  "3.3",
  "VM privat dapat keluar melalui Public NAT, tetapi koneksi baru gagal saat trafik koneksi paralel naik tajam. Metric menunjukkan kehabisan alokasi port NAT. Apa yang sebaiknya ditinjau terlebih dahulu?",
  [
    [
      "Tinjau kapasitas port/IP NAT dan penggunaan koneksi.",
      "Bukti port exhaustion mengarah ke kapasitas translasi dan pengelolaan koneksi.",
    ],
    [
      "Tambahkan ingress allow TCP 22 dari internet ke seluruh VM.",
      "Akses SSH masuk tidak menambah alokasi port translasi koneksi keluar.",
    ],
    [
      "Naikkan budget saja agar setiap koneksi mendapat port NAT baru otomatis.",
      "Budget tidak mengonfigurasi alokasi port NAT.",
    ],
    [
      "Ganti record DNS aplikasi tanpa memeriksa kapasitas NAT.",
      "DNS tidak langsung menyelesaikan kekurangan port translasi yang terukur.",
    ],
  ],
  "natTrouble",
);
q(
  "subnet-expand-primary-range",
  "3.3",
  "Subnet IPv4 hampir habis. Anda ingin memperbesar primary range tanpa menghapus VM yang aktif. Rentang yang diperluas tidak boleh tumpang tindih dengan subnet lain. Tindakan mana yang sesuai?",
  [
    [
      "Perluas primary CIDR ke rentang yang valid dan mencakup rentang lama, lalu periksa dependensi jaringan.",
      "Ekspansi harus mempertahankan alamat lama dan memenuhi aturan overlap; mengecilkan bukan prosedur yang sama.",
    ],
    [
      "Ganti primary CIDR dengan rentang kecil yang sama sekali terpisah tanpa migrasi.",
      "Ini bukan ekspansi yang mempertahankan alamat resource aktif.",
    ],
    [
      "Buat subnet kedua dengan CIDR identik dalam VPC yang sama.",
      "CIDR yang tumpang tindih tidak memenuhi aturan subnet tersebut.",
    ],
    [
      "Naikkan HPA aplikasi agar kapasitas alamat subnet ikut bertambah.",
      "HPA tidak mengubah primary IP range subnet.",
    ],
  ],
  "subnet",
);
q(
  "hybrid-private-dns-inbound",
  "3.3",
  "DNS kantor perlu menyelesaikan nama dari Cloud DNS private zone yang terhubung ke VPC. VPN sudah tersedia. Anda ingin meneruskan query untuk domain tersebut secara privat dari DNS on-premises. Konfigurasi Google Cloud mana yang relevan?",
  [
    [
      "Cloud DNS inbound server policy dan forwarding DNS kantor ke inbound forwarding entry points yang dapat dijangkau.",
      "Inbound forwarding menyediakan jalur query on-premises menuju resolusi privat VPC.",
    ],
    [
      "Arahkan query domain privat ke resolver publik 8.8.8.8 saja.",
      "Resolver publik tidak memperoleh konteks private zone VPC hanya karena VPN ada.",
    ],
    [
      "Pasang Public NAT agar seluruh DNS privat otomatis menjadi publik.",
      "NAT tidak mempublikasikan private zone atau mengonfigurasi forwarding DNS tersebut.",
    ],
    [
      "Tambahkan record private zone ke akun billing tanpa mengubah DNS.",
      "Billing bukan lokasi konfigurasi resolusi nama privat.",
    ],
  ],
  "dnsInbound",
  [0],
  "advanced",
);
q(
  "firewall-priority-specific-allow",
  "3.3",
  "Dalam satu set aturan firewall VPC yang berlaku untuk traffic tersebut, ada deny ingress priority 100 dan allow ingress priority 1000 yang sama-sama cocok. Tidak ada policy lain yang mengubah hasil. Apa penyebab koneksi tetap diblokir?",
  [
    [
      "Angka priority lebih kecil dievaluasi sebagai prioritas lebih tinggi, sehingga deny 100 menang.",
      "Pada aturan yang diberikan, urutan prioritas membuat deny yang cocok berlaku lebih dulu.",
    ],
    [
      "Allow selalu mengalahkan deny tanpa melihat priority.",
      "Aksi allow tidak mengabaikan urutan priority antaraturan yang cocok.",
    ],
    [
      "Priority 1000 lebih tinggi hanya karena nilainya lebih besar.",
      "Interpretasi ini membalik semantik angka priority firewall.",
    ],
    [
      "Priority hanya berlaku pada paket UDP, bukan TCP.",
      "Prioritas bukan dibatasi pada protokol UDP seperti pernyataan tersebut.",
    ],
  ],
  "firewall",
);
q(
  "public-nat-no-inbound-session",
  "3.3",
  "VM tanpa external IP menggunakan Public NAT untuk mengunduh paket. Mitra mencoba membuka koneksi baru dari internet menuju alamat NAT dan berharap koneksi diteruskan ke VM. Mengapa koneksi masuk itu tidak bekerja seperti yang diharapkan?",
  [
    [
      "Public NAT bukan port forwarding untuk koneksi masuk yang tidak dimulai dari VM.",
      "Public NAT mendukung alur koneksi keluar dan balasannya, bukan publikasi inbound arbitrer.",
    ],
    [
      "Cloud NAT selalu memerlukan VM memiliki external IP juga.",
      "Public NAT justru dapat melayani resource tanpa external IP.",
    ],
    [
      "Setiap alamat NAT otomatis memetakan seluruh port masuk ke VM pertama.",
      "Tidak ada pemetaan inbound default seperti asumsi tersebut.",
    ],
    [
      "Mitra hanya perlu menambah port sumber sampai firewall NAT membuat rule baru.",
      "Mengubah port sumber tidak mengonfigurasi jalur inbound yang tidak disediakan.",
    ],
  ],
  "nat",
);
q(
  "bq-maximum-bytes-billed",
  "3.2",
  "Analis menjalankan kueri BigQuery dengan on-demand pricing. Tim ingin query ditolak sebelum eksekusi jika perkiraan bytes billed melampaui batas per-query yang ditetapkan. Kontrol mana yang sesuai?",
  [
    [
      "Atur maximum bytes billed pada query job.",
      "Batas ini dapat menolak kueri yang perkiraan pemrosesannya melampaui batas biaya berbasis bytes.",
    ],
    [
      "Tambahkan LIMIT 10 pada SELECT * sebagai jaminan seluruh scan menjadi sepuluh baris.",
      "LIMIT tidak selalu membatasi bytes yang harus dibaca dari tabel.",
    ],
    [
      "Turunkan timeout browser agar BigQuery pasti tidak menagih query.",
      "Putusnya browser bukan kontrol batas bytes query job.",
    ],
    [
      "Gunakan label cost=low tanpa batas pada job.",
      "Label membantu pelacakan tetapi tidak menegakkan maximum bytes billed.",
    ],
  ],
  "bigquery",
);
q(
  "vm-inventory-filter-running",
  "3.1",
  "Tim operasi perlu daftar VM yang berstatus RUNNING pada proyek tertentu untuk laporan harian, tanpa menjalankan perintah di setiap guest OS. Pendekatan mana yang paling tepat?",
  [
    [
      "Gunakan gcloud compute instances list --project=PROJECT_ID --filter='status=RUNNING'.",
      "Inventaris control plane dapat difilter berdasarkan status dengan proyek eksplisit.",
    ],
    [
      "Gunakan gcloud compute instances stop pada seluruh proyek lalu baca hasilnya.",
      "Menghentikan VM bukan operasi inventaris read-only.",
    ],
    [
      "Gunakan daftar billing account sebagai satu-satunya sumber status VM.",
      "Daftar akun billing tidak memberikan status eksekusi setiap VM.",
    ],
    [
      "Buat snapshot seluruh disk hanya untuk mengetahui status instance.",
      "Snapshot tidak diperlukan untuk membaca status VM melalui API.",
    ],
  ],
  "vm",
);
q(
  "restore-backup-validate-cutover",
  "3.2",
  "Sebelum mengarahkan aplikasi ke database hasil restore, tim ingin memastikan pemulihan benar dan tidak memutus jalur rollback. Dua tindakan operasional mana yang paling sesuai?",
  [
    [
      "Validasi data dan konektivitas pada target restore sebelum mengubah endpoint aplikasi.",
      "Keberhasilan restore perlu dibuktikan pada data dan jalur aplikasi yang sebenarnya.",
    ],
    [
      "Rencanakan cutover dan simpan opsi pemulihan sesuai kebijakan sebelum menonaktifkan sumber.",
      "Cutover terencana mengurangi risiko mengganti sumber sebelum target siap.",
    ],
    [
      "Hapus database sumber segera setelah job restore dimulai.",
      "Langkah tersebut menghilangkan jalur pemulihan sebelum target selesai divalidasi.",
    ],
    [
      "Publikasikan database ke internet agar pengujian tidak perlu autentikasi.",
      "Melepas proteksi bukan prasyarat validasi target restore.",
    ],
    [
      "Anggap status job sukses membuktikan seluruh transaksi aplikasi pasti benar.",
      "Status restore tidak menggantikan validasi fungsi aplikasi dan data.",
    ],
  ],
  "pitr",
  [0, 1],
);
q(
  "ai-assisted-terraform-review",
  "3.4",
  "Asisten AI mengusulkan perubahan Terraform untuk mengatasi deployment yang gagal. Rencana tersebut juga menambah role luas dan mengganti database produksi. Anda bertanggung jawab atas perubahan. Apa langkah berikutnya yang tepat?",
  [
    [
      "Tinjau plan dan dampak izin/resource, verifikasi dokumentasi, lalu ikuti pengujian serta persetujuan perubahan.",
      "Rekomendasi AI perlu divalidasi dengan konteks dan kontrol perubahan; outputnya bukan otorisasi.",
    ],
    [
      "Apply otomatis karena teks berasal dari alat AI yang terintegrasi cloud.",
      "Integrasi alat tidak menjamin rencana aman atau benar untuk kebutuhan produksi.",
    ],
    [
      "Hilangkan state Terraform agar penggantian database tidak terdeteksi.",
      "Menghapus state mengurangi kendali dan tidak menghilangkan dampak resource sebenarnya.",
    ],
    [
      "Berikan Owner tambahan kepada semua principal agar seluruh error hilang.",
      "Pelebaran akses menyeluruh bukan perbaikan terarah berdasarkan bukti.",
    ],
  ],
  "terraform",
);
q(
  "personalized-service-health",
  "3.4",
  "Beberapa layanan dalam sebuah proyek mengalami gangguan bersamaan. Anda ingin memeriksa insiden Google Cloud yang relevan terhadap proyek tersebut, bukan hanya kondisi satu endpoint aplikasi. Sumber mana yang paling sesuai?",
  [
    [
      "Personalized Service Health untuk event layanan yang memengaruhi proyek.",
      "Layanan ini memberikan informasi kesehatan layanan yang relevan pada konteks proyek.",
    ],
    [
      "Hanya daftar snapshot disk pada VM pertama yang bermasalah.",
      "Inventaris snapshot tidak menunjukkan insiden platform lintas layanan.",
    ],
    [
      "Hanya riwayat perubahan label resource untuk hari itu.",
      "Label resource bukan sumber status insiden layanan Google Cloud.",
    ],
    [
      "Hanya hasil satu uptime check lalu simpulkan semua layanan Google Cloud gagal.",
      "Satu check endpoint tidak membuktikan insiden platform luas atau dampaknya pada proyek.",
    ],
  ],
  "health",
);

// Section 4: access and security — 20 scenarios.
q(
  "external-ci-keyless-workload",
  "4.2",
  "Pipeline CI berjalan di luar Google Cloud dan dapat menerbitkan token OIDC dari platform CI. Pipeline perlu memakai akses Google Cloud berumur pendek tanpa menyimpan service account key. Pendekatan mana yang sesuai?",
  [
    [
      "Workload Identity Federation dengan akses minimum untuk CI.",
      "Federation menukar bukti identitas eksternal menjadi akses cloud tanpa distribusi private key jangka panjang.",
    ],
    [
      "Workforce Identity Federation khusus login konsol manusia tanpa mengatur identitas workload.",
      "Federasi pengguna manusia bukan konfigurasi identitas pipeline workload yang diminta.",
    ],
    [
      "Service account key dengan masa penggunaan tak terbatas pada variabel repository.",
      "Kunci jangka panjang bertentangan dengan persyaratan keyless dan akses berumur pendek.",
    ],
    [
      "Kredensial akun pengguna administrator yang disalin ke seluruh runner.",
      "Kredensial pengguna bersama tidak memberi isolasi dan otorisasi minimum untuk pipeline.",
    ],
  ],
  "federation",
);
q(
  "attach-service-account-actas",
  "4.2",
  "Deployer sudah dapat membuat VM tetapi ditolak ketika memasang service account runtime tertentu karena iam.serviceAccounts.actAs tidak dimiliki. Ia tidak perlu membuat key atau menandatangani token. Role mana yang tepat pada service account tersebut?",
  [
    [
      "roles/iam.serviceAccountUser.",
      "Service Account User menyediakan kemampuan actAs untuk memasang identitas pada resource yang didukung.",
    ],
    [
      "roles/iam.serviceAccountViewer.",
      "Melihat service account tidak memberikan kemampuan bertindak sebagai identitas tersebut.",
    ],
    [
      "roles/iam.serviceAccountKeyAdmin.",
      "Pengelolaan key tidak diperlukan dan bukan izin actAs yang diminta.",
    ],
    [
      "roles/browser.",
      "Melihat hierarki proyek tidak memberikan izin memasang service account runtime.",
    ],
  ],
  "actAs",
);
q(
  "impersonate-token-creator-scope",
  "4.2",
  "Operator memiliki Service Account User pada identitas deployment. Perintah dengan --impersonate-service-account masih gagal karena tidak memiliki iam.serviceAccounts.getAccessToken. Apa akses tambahan yang paling tepat, dengan scope sempit?",
  [
    [
      "Service Account Token Creator pada service account yang akan diimpersonasi.",
      "Pembuatan token impersonasi memerlukan izin yang berbeda dari kemampuan actAs untuk pemasangan resource.",
    ],
    [
      "Service Account Key Admin pada seluruh proyek.",
      "Mengelola key tidak diperlukan untuk memperoleh token impersonasi berumur pendek.",
    ],
    [
      "Compute Instance Admin pada VM target saja.",
      "Pengelolaan VM tidak memberikan izin getAccessToken service account.",
    ],
    [
      "Service Account Viewer pada service account tersebut.",
      "Role baca tidak mencakup pembuatan access token impersonasi.",
    ],
  ],
  "impersonate",
);
q(
  "federation-repository-attribute",
  "4.2",
  "Workload Identity Federation mempercayai issuer OIDC milik platform CI bersama. Hanya satu repository milik perusahaan yang boleh memakai akses deployment. Apa pengamanan tambahan yang paling sesuai untuk membatasi identitas eksternal yang diterima?",
  [
    [
      "Gunakan attribute mapping/condition dan binding principal yang membatasi repository yang dipercaya.",
      "Issuer bersama saja terlalu luas; atribut identitas dan binding harus membatasi sumber yang disetujui.",
    ],
    [
      "Izinkan semua repository dari issuer itu dan hanya rahasiakan project ID.",
      "Project ID bukan secret otorisasi yang membatasi token dari repository lain.",
    ],
    [
      "Beri seluruh identitas issuer role Owner agar token selalu berhasil.",
      "Pemberian akses luas menghilangkan pembatasan repository dan least privilege.",
    ],
    [
      "Batasi hanya nama VM tujuan tanpa membatasi principal federation.",
      "Nama resource tujuan tidak menggantikan pembatasan identitas eksternal yang boleh mengaksesnya.",
    ],
  ],
  "federation",
  [0],
  "advanced",
);
q(
  "bucket-reader-least-scope",
  "4.1",
  "Service account pelaporan perlu membaca isi objek pada satu bucket. Ia tidak boleh menulis atau menghapus objek dan tidak memerlukan akses bucket lain. Binding mana yang paling sesuai?",
  [
    [
      "Storage Object Viewer pada bucket yang diperlukan.",
      "Scope bucket dan role baca objek membatasi akses pada data yang dibutuhkan.",
    ],
    [
      "Storage Object Admin pada seluruh proyek.",
      "Role ini mengizinkan pengelolaan objek dan scope proyek lebih luas daripada kebutuhan.",
    ],
    [
      "Storage Admin pada organisasi.",
      "Akses administratif organisasi jauh melampaui membaca satu bucket.",
    ],
    [
      "Service Account Viewer pada identitas pelaporan saja.",
      "Akses melihat resource service account tidak memberi izin membaca objek bucket.",
    ],
  ],
  "storageIam",
);
q(
  "local-viewer-does-not-reduce-parent",
  "4.1",
  "Pengguna memperoleh Editor dari grup pada folder. Administrator menambahkan Viewer secara langsung di proyek karena ingin mengurangi akses pengguna hanya menjadi baca. Tidak ada deny policy. Apa hasil yang diharapkan?",
  [
    [
      "Hak Editor yang diwariskan tetap ada; binding Viewer tidak mencabut allow dari parent.",
      "Allow IAM bersifat akumulatif sehingga penambahan role sempit tidak mengurangi grant yang lebih luas.",
    ],
    [
      "Binding paling dekat dengan resource selalu mengganti semua role parent.",
      "Policy lokal tidak otomatis menggantikan seluruh allow yang diwariskan.",
    ],
    [
      "Viewer langsung menghapus pengguna dari grup folder.",
      "Pemberian role tidak mengubah membership grup.",
    ],
    [
      "IAM menolak seluruh akses karena pengguna mempunyai dua role berbeda.",
      "Kepemilikan beberapa allow role bukan konflik yang otomatis menolak seluruh akses.",
    ],
  ],
  "iam",
);
q(
  "temporary-access-condition",
  "4.1",
  "Vendor memerlukan akses baca resource yang mendukung IAM Conditions sampai akhir masa dukungan pada tanggal tertentu. Akses lain di luar masa itu tidak diperlukan. Anda ingin menghindari ketergantungan pada pencabutan manual tepat waktu. Apa yang sesuai?",
  [
    [
      "Gunakan binding role minimum dengan kondisi waktu berakhir yang sesuai.",
      "IAM Conditions dapat membatasi validitas binding berdasarkan waktu pada resource yang didukung.",
    ],
    [
      "Berikan Owner permanen dan tulis tanggal berakhir pada nama role.",
      "Nama atau deskripsi tidak menegakkan masa berlaku akses.",
    ],
    [
      "Simpan key service account tanpa jadwal penghapusan dalam email vendor.",
      "Distribusi key jangka panjang tidak menegakkan batas waktu akses yang diminta.",
    ],
    [
      "Tambahkan label support-expired setelah tanggal berakhir tanpa mengubah otorisasi.",
      "Label biasa tidak otomatis mencabut binding IAM.",
    ],
  ],
  "conditions",
);
q(
  "key-creation-policy-existing-keys",
  "4.2",
  "Organisasi mulai melarang pembuatan service account key baru. Beberapa key lama masih aktif. Tim mengira penerapan constraint pembuatan key langsung mencabut seluruh key lama. Apa tindakan yang benar?",
  [
    [
      "Inventarisasi dan tangani key lama secara terpisah melalui migrasi, disable, atau penghapusan yang terencana.",
      "Mencegah pembuatan key baru tidak otomatis mencabut seluruh kredensial yang sudah ada.",
    ],
    [
      "Anggap semua key lama tidak valid tanpa memeriksa pemakaian dan statusnya.",
      "Asumsi pencabutan otomatis dapat meninggalkan kredensial aktif yang tidak dikelola.",
    ],
    [
      "Buat salinan key lama agar constraint memberikan masa berlaku baru.",
      "Menyalin file tidak merotasi atau memperbaiki pengelolaan key di IAM.",
    ],
    [
      "Ubah nama service account agar key lama otomatis menjadi milik akun lain.",
      "Penamaan tidak menggantikan pengelolaan status key dan identitasnya.",
    ],
  ],
  "keys",
);
q(
  "gke-namespace-principal-binding",
  "4.2",
  "Akses bucket telah diberikan melalui Workload Identity Federation for GKE untuk service account Kubernetes bernama reader pada namespace reports. Pod ternyata memakai reader pada namespace default. Mengapa akses dapat tetap ditolak?",
  [
    [
      "Namespace merupakan bagian identitas principal; gunakan KSA/namespace dan binding yang sesuai.",
      "Service account bernama sama pada namespace berbeda bukan principal workload yang sama.",
    ],
    [
      "Semua Kubernetes service account bernama reader otomatis berbagi hak lintas namespace.",
      "Nama tanpa konteks namespace tidak cukup untuk menyamakan identitas tersebut.",
    ],
    [
      "KSA selalu menggunakan seluruh izin pengguna yang men-deploy Pod.",
      "Hak deployer tidak otomatis menjadi hak runtime workload.",
    ],
    [
      "Akses bucket mengikuti jumlah replika Pod, bukan identitas workload.",
      "Jumlah replika tidak menentukan principal IAM yang diberi hak.",
    ],
  ],
  "gkeIdentity",
  [0],
  "advanced",
);
q(
  "iam-policy-troubleshooter-evidence",
  "4.1",
  "Sebuah request API ditolak. Identitas pengguna, nama permission, dan resource tujuan sudah diketahui. Anda ingin menelusuri policy yang berkontribusi pada keputusan akses sebelum menambah grant. Alat mana yang paling sesuai?",
  [
    [
      "Policy Troubleshooter dengan principal, permission, dan resource yang relevan.",
      "Alat troubleshooting akses membantu menjelaskan keputusan IAM berdasarkan konteks request.",
    ],
    [
      "Cloud Trace saja untuk menambahkan permission yang hilang secara otomatis.",
      "Trace mengamati perjalanan request dan tidak otomatis menentukan serta memasang grant IAM.",
    ],
    [
      "Billing Reports untuk memilih role dari tagihan tertinggi.",
      "Data biaya bukan analisis keputusan otorisasi principal terhadap resource.",
    ],
    [
      "Uptime check publik yang tidak memakai identitas request tersebut.",
      "Pemeriksaan endpoint tanpa konteks principal tidak menjelaskan keputusan IAM yang ditolak.",
    ],
  ],
  "troubleshootIam",
);
q(
  "secret-accessor-runtime-scope",
  "4.1",
  "Service account runtime hanya perlu membaca nilai satu secret bernama payment-token. Tim tidak ingin memberi kemampuan membuat versi, menghapus secret, atau mengubah IAM. Apa binding yang paling sesuai?",
  [
    [
      "Secret Manager Secret Accessor pada secret payment-token.",
      "Role akses payload dapat dibatasi ke secret yang diperlukan tanpa administrasi secret.",
    ],
    [
      "Secret Manager Admin pada seluruh proyek.",
      "Admin mengizinkan pengelolaan secret yang jauh lebih luas daripada membaca satu payload.",
    ],
    [
      "Secret Manager Viewer saja pada proyek.",
      "Melihat metadata secret tidak otomatis mengizinkan membaca nilai secret version.",
    ],
    [
      "Service Account User pada runtime identity tanpa akses secret.",
      "Kemampuan actAs berbeda dari izin membaca payload secret.",
    ],
  ],
  "secret",
);
q(
  "secret-rotation-notification-not-action",
  "4.2",
  "Secret Manager sudah mempunyai rotation schedule. Namun password pada sistem pihak ketiga tidak berubah ketika jadwal tiba. Apa penjelasan yang paling tepat?",
  [
    [
      "Jadwal memicu notifikasi rotasi; proses/otomasi yang menangani perubahan kredensial tetap perlu diimplementasikan.",
      "Rotation schedule tidak sendiri mengganti password sistem eksternal dan memperbarui semua konsumennya.",
    ],
    [
      "Jadwal otomatis memanggil API setiap vendor tanpa perlu kode atau integrasi.",
      "Secret Manager tidak mengetahui mekanisme perubahan kredensial seluruh penyedia eksternal.",
    ],
    [
      "Membaca secret version terbaru selalu memaksa vendor mengubah password.",
      "Akses payload secret tidak mengubah kredensial pada sistem pihak ketiga.",
    ],
    [
      "Memberi Viewer pada pengguna membuat seluruh rotasi eksternal otomatis.",
      "Role metadata tidak mengimplementasikan mekanisme rotasi sistem eksternal.",
    ],
  ],
  "rotation",
);
q(
  "kms-rotation-old-ciphertext",
  "4.1",
  "Cloud KMS membuat primary key version baru melalui rotasi. Data lama masih dienkripsi memakai versi sebelumnya. Apa praktik yang tepat agar data lama tetap dapat didekripsi?",
  [
    [
      "Pertahankan versi key yang masih diperlukan dan rencanakan re-encryption jika dibutuhkan sebelum menonaktifkannya.",
      "Rotasi tidak otomatis mengenkripsi ulang seluruh data lama; ciphertext lama masih bergantung pada key version terkait.",
    ],
    [
      "Hancurkan seluruh versi lama segera karena rotasi selalu mengenkripsi ulang semua data.",
      "Menghancurkan versi yang masih diperlukan dapat membuat data lama tidak dapat didekripsi.",
    ],
    [
      "Ganti nama key supaya ciphertext lama otomatis berpindah versi.",
      "Penamaan tidak melakukan re-encryption ciphertext.",
    ],
    [
      "Berikan akses publik pada key agar ketergantungan versi diabaikan.",
      "Otorisasi publik tidak menggantikan key version yang diperlukan untuk dekripsi.",
    ],
  ],
  "kms",
);
q(
  "data-access-storage-read-audit",
  "4.1",
  "Auditor perlu mengetahui pembacaan objek Cloud Storage ke depan. Admin Activity logs sudah tersedia, tetapi Data Access logging yang relevan belum dikonfigurasikan. Dua pernyataan mana yang benar?",
  [
    [
      "Aktifkan Data Access audit logging yang diperlukan untuk operasi baca yang ingin dicatat.",
      "Operasi data perlu konfigurasi audit yang relevan; Admin Activity bukan pengganti seluruh log pembacaan data.",
    ],
    [
      "Pengaktifan sekarang tidak otomatis menghasilkan bukti untuk pembacaan lampau yang tidak pernah dicatat.",
      "Audit yang belum dikumpulkan tidak tercipta retroaktif hanya dengan mengaktifkan pengumpulan baru.",
    ],
    [
      "Semua pembacaan objek selalu tercatat lengkap pada Admin Activity tanpa pengaturan tambahan.",
      "Admin Activity berfokus pada aktivitas administratif dan tidak menjamin cakupan seluruh pembacaan objek.",
    ],
    [
      "Label pada bucket mencatat identitas setiap pembaca secara otomatis.",
      "Label bukan catatan audit operasi data.",
    ],
    [
      "Data Access logging mengharuskan bucket dapat diakses publik.",
      "Audit data tidak memerlukan bucket dipublikasikan.",
    ],
  ],
  "audit",
  [0, 1],
);
q(
  "service-account-resource-vs-grants",
  "4.2",
  "Pengguna diberi Viewer pada resource sebuah service account. Ia mengira service account itu otomatis memperoleh akses baca ke bucket aplikasi. Apa yang harus dijelaskan?",
  [
    [
      "Policy pada service account mengatur siapa boleh melakukan tindakan terhadap identitas itu; akses bucket memerlukan binding pada resource yang relevan.",
      "Hak mengelola/melihat identitas dan hak identitas mengakses data adalah dua hubungan IAM berbeda.",
    ],
    [
      "Setiap role pada resource service account disalin otomatis ke semua bucket proyek.",
      "IAM tidak menyalin grant dengan semantik tersebut.",
    ],
    [
      "Viewer pada service account selalu menyediakan Storage Object Admin untuk runtime.",
      "Role melihat identitas tidak berubah menjadi administrasi objek storage.",
    ],
    [
      "Service account dapat membaca semua bucket proyek hanya karena alamat emailnya berada pada proyek yang sama.",
      "Lokasi pembuatan identitas bukan grant otomatis ke seluruh resource proyek.",
    ],
  ],
  "iam",
  [0],
  "advanced",
);
q(
  "group-removal-direct-binding",
  "4.1",
  "Engineer dikeluarkan dari grup aplikasi, tetapi masih dapat membaca dataset. Tidak ada sesi atau token luar biasa yang menjelaskan aksesnya. Investigasi menunjukkan binding langsung dan grup lain juga dapat berlaku. Apa langkah yang paling tepat?",
  [
    [
      "Audit seluruh jalur grant efektif, termasuk binding langsung, grup lain, dan pewarisan, lalu cabut akses yang tidak diperlukan.",
      "Penghapusan satu membership tidak menghilangkan grant independen yang masih berlaku.",
    ],
    [
      "Tambahkan Viewer lokal agar semua grant lain otomatis diganti.",
      "Menambah allow yang lebih sempit tidak mencabut grant independen.",
    ],
    [
      "Hapus label tim pada dataset dan anggap seluruh akses pengguna hilang.",
      "Label dataset biasa bukan pengganti pengelolaan binding IAM.",
    ],
    [
      "Ganti display name pengguna tanpa meninjau policy dataset.",
      "Nama tampilan tidak menghapus jalur otorisasi yang masih aktif.",
    ],
  ],
  "iam",
);
q(
  "organization-custom-role-reuse",
  "4.1",
  "Tim keamanan ingin satu definisi custom role dengan permission yang didukung, lalu memakai definisi itu pada beberapa proyek dalam organisasi yang sama. Mereka tidak ingin menyalin definisi proyek demi proyek. Pada scope mana role sebaiknya dibuat?",
  [
    [
      "Buat custom role pada organisasi, lalu berikan pada resource proyek yang sesuai.",
      "Custom role tingkat organisasi dapat digunakan pada proyek turunannya sesuai cakupan yang didukung.",
    ],
    [
      "Buat custom role pada satu proyek lalu gunakan ID project role tersebut secara bebas di semua proyek lain.",
      "Custom role tingkat proyek tidak otomatis menjadi definisi yang dapat dipakai pada proyek lain.",
    ],
    [
      "Buat custom role di akun billing sebagai parent dari semua policy IAM proyek.",
      "Akun billing bukan lokasi definisi custom role resource hierarchy seperti itu.",
    ],
    [
      "Gunakan label dengan daftar permission sebagai pengganti definisi custom role.",
      "Label tidak mendefinisikan atau memberikan sekumpulan permission IAM.",
    ],
  ],
  "customRoles",
);
q(
  "set-policy-replaces-existing",
  "4.1",
  "Skrip mengambil IAM allow policy, menambahkan anggota baru, lalu menulis policy kembali. Beberapa administrator bisa mengubah policy yang sama. Apa dua praktik yang paling relevan agar grant lain tidak hilang atau tertimpa?",
  [
    [
      "Pertahankan binding yang sudah ada ketika menambahkan grant baru.",
      "Menulis policy parsial sebagai pengganti keseluruhan dapat menghilangkan binding yang tidak disertakan.",
    ],
    [
      "Gunakan mekanisme concurrency seperti etag dan tangani konflik dengan membaca ulang policy.",
      "Kontrol versi policy membantu menghindari penimpaan perubahan yang terjadi bersamaan.",
    ],
    [
      "Kirim hanya satu binding baru tanpa membaca policy lalu anggap binding lama selalu dipertahankan.",
      "Operasi penggantian policy tidak sama dengan menambahkan satu binding secara aman.",
    ],
    [
      "Hapus etag agar perubahan bersamaan tidak perlu dideteksi.",
      "Menghilangkan kontrol concurrency justru menyulitkan deteksi perubahan yang berkonflik.",
    ],
    [
      "Ubah nama proyek saat konflik agar IAM menggunakan salinan policy lain.",
      "Penamaan proyek tidak menyelesaikan konflik update policy.",
    ],
  ],
  "iam",
  [0, 1],
  "advanced",
);
q(
  "public-access-prevention-vs-ubla",
  "4.1",
  "Bucket sudah memakai uniform bucket-level access. Tim keamanan juga ingin mencegah akses publik melalui principal allUsers atau allAuthenticatedUsers. Pengaturan tambahan mana yang paling langsung memenuhi tujuan tersebut?",
  [
    [
      "Enforce public access prevention pada scope yang sesuai.",
      "Public access prevention menargetkan grant akses publik; UBLA sendiri menyatukan kontrol IAM tetapi bukan larangan semua grant publik.",
    ],
    [
      "Tambahkan allUsers ke Storage Object Viewer karena ACL sudah dimatikan.",
      "Grant itu justru memberikan akses publik yang ingin dicegah.",
    ],
    [
      "Ganti storage class ke Archive agar IAM publik diabaikan.",
      "Storage class tidak menegakkan pembatasan principal publik.",
    ],
    [
      "Buat label private=true tanpa kebijakan akses tambahan.",
      "Label tidak membatasi grant allUsers atau allAuthenticatedUsers.",
    ],
  ],
  "publicAccess",
);
q(
  "deny-overrides-allow",
  "4.1",
  "Pengguna memiliki role yang mengizinkan sebuah permission pada proyek, tetapi request tetap ditolak oleh deny policy yang berlaku dari parent. Permission tersebut didukung deny dan pengguna tidak termasuk pengecualian. Apa penjelasan yang benar?",
  [
    [
      "Deny yang berlaku dapat mengalahkan grant allow, sehingga menambah allow yang sama tidak menyelesaikan penolakan.",
      "Keputusan akses mempertimbangkan deny yang berlaku, bukan hanya allow role pada proyek.",
    ],
    [
      "Grant Owner lokal selalu menghapus deny dari parent secara otomatis.",
      "Penambahan role allow tidak otomatis menghapus deny policy yang diwariskan.",
    ],
    [
      "Deny hanya berlaku bila pengguna tidak memiliki role apa pun.",
      "Deny tidak terbatas pada principal tanpa allow role.",
    ],
    [
      "Deny policy hanya mengatur budget dan tidak dapat memengaruhi request API.",
      "Deny policy merupakan kontrol otorisasi terhadap permission yang didukung.",
    ],
  ],
  "deny",
  [0],
  "advanced",
);

// The remaining scenarios are appended below without renumbering previous items.

export function buildAceScenarios() {
  return [
    ...rows.map((row, index) => {
      if (row.topic === "ai-assisted-terraform-review")
        row = {
          ...row,
          topic: "gemini-monitoring-evidence-review",
          ref: "assistMonitoring",
          prompt:
            "Operator meminta Gemini Cloud Assist menjelaskan anomali pada Cloud Monitoring. Sebelum memakai sarannya untuk mengubah produksi, langkah mana yang tepat?",
          choices: [
            [
              "Periksa izin dan konteks metrik, cocokkan saran dengan bukti Monitoring/Logging, lalu tinjau dampak perubahan.",
              "Asisten mendukung investigasi; akses data dan validasi operator tetap diperlukan sebelum perubahan produksi.",
            ],
            [
              "Terapkan saran tanpa verifikasi karena asisten pasti melihat semua metrik organisasi.",
              "Cakupan konteks dan izin tetap berlaku; keluaran asisten bukan jaminan seluruh data sudah terlihat.",
            ],
            [
              "Hapus kebijakan alert agar anomali dianggap selesai.",
              "Menghapus deteksi tidak menyelesaikan penyebab anomali dan dapat menyembunyikan gangguan berikutnya.",
            ],
            [
              "Berikan Owner kepada semua operator sebagai satu-satunya syarat analisis metrik.",
              "Akses observabilitas yang sesuai lebih tepat daripada pemberian akses Owner menyeluruh.",
            ],
          ],
        };
      const labels = ["A", "B", "C", "D", "E", "F"];
      const offset = index % row.choices.length;
      const ordered = row.choices.map(
        (_, position) => (position + offset) % row.choices.length,
      );
      return {
        id: `ace-scenario-id-20261021-${String(index + 1).padStart(3, "0")}`,
        examType: "gcp-ace",
        lang: "id",
        domain: domains[row.objective[0]],
        type: row.answers.length > 1 ? "multiple" : "single",
        prompt:
          row.prompt +
          (row.answers.length > 1
            ? ` (Pilih ${row.answers.length} jawaban.)`
            : ""),
        options: ordered.map((original, position) => ({
          id: labels[position],
          text: row.choices[original][0],
        })),
        correctAnswers: ordered.flatMap((original, position) =>
          row.answers.includes(original) ? [labels[position]] : [],
        ),
        explanation: row.answers
          .map((answer) => row.choices[answer][1])
          .join(" "),
        optionExplanations: Object.fromEntries(
          ordered.map((original, position) => [
            labels[position],
            row.choices[original][1],
          ]),
        ),
        sourceUrl: refs[row.ref],
        verifiedAt: index === 78 ? "2026-10-22" : "2026-10-21",
        version: index === 78 ? 2 : 1,
        difficulty: row.difficulty,
        status: "approved",
        sourceRef: "original-practice-scenarios",
        objective: row.objective,
        topic: row.topic,
        blueprintVersion: "2026-10-21",
        duplicateReviewed: true,
      };
    }),
    ...buildAceGuide(),
    ...structuredClone(gear20261028),
  ];
}

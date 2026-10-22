// Original revisions calibrated against the user-supplied GEAR practice examples.
// Numeric keys are stable suffixes of ace-scenario-id-20261022-NNN.
// Each alternative is a real mechanism with a specific tradeoff, not an unrelated product.
const edits = {
  1: [
    [
      "Berikan role baca yang sesuai kepada grup analis",
      "Berikan role baca langsung kepada setiap analis",
      "Berikan basic role Viewer kepada grup pada seluruh organisasi",
      "Buat custom role baca terpisah untuk setiap analis",
    ],
    [
      "Binding ke grup memisahkan pengelolaan anggota dari pemberian role pada proyek.",
      "Grant individu dapat memberi akses baca, tetapi menambah pemeliharaan ketika anggota sering berubah.",
      "Cakupan seluruh organisasi dan basic role lebih luas daripada kebutuhan satu proyek.",
      "Role terpisah per orang menambah pemeliharaan tanpa kebutuhan permission khusus.",
    ],
  ],
  4: [
    [
      "Periksa dukungan lokasi, konfigurasi, kuota, dan kapasitas produk",
      "Pilih region yang mendukung VM biasa dan periksa kuota CPU saja",
      "Pilih region terdekat lalu minta penambahan kuota GPU",
      "Gunakan konfigurasi region pengujian tanpa memeriksa lokasi produksi",
    ],
    [
      "Dukungan produk/tipe akselerator, kuota, dan kapasitas fisik merupakan pemeriksaan berbeda.",
      "Dukungan VM biasa dan kuota CPU tidak membuktikan dukungan akselerator atau layanan terkelola.",
      "Penambahan kuota tidak membuat produk tersedia pada lokasi yang tidak mendukungnya.",
      "Konfigurasi pengujian tidak memastikan dukungan produk pada lokasi produksi yang berbeda.",
    ],
  ],
  5: [
    [
      "Berikan izin analisis yang diperlukan pada cakupan produksi yang disetujui",
      "Berikan Gemini Cloud Assist role saja tanpa izin membaca resource produksi",
      "Berikan Project Viewer pada proyek pengujian yang sudah dapat diakses operator",
      "Ekspor inventaris pengujian dan gunakan sebagai konteks analisis produksi",
    ],
    [
      "Bantuan AI membutuhkan izin dan konteks resource yang sesuai dengan cakupan analisis.",
      "Izin menggunakan asisten tidak otomatis mencakup seluruh izin data dan resource produksi.",
      "Izin pada proyek pengujian tidak memberikan akses ke inventaris produksi.",
      "Inventaris dari lingkungan lain tidak merepresentasikan resource produksi yang ditanyakan.",
    ],
  ],
  6: [
    [
      "Periksa API, izin penulisan telemetri, serta pipeline Ops Agent",
      "Pasang Ops Agent dan berikan hanya Monitoring Viewer pada identitas VM",
      "Aktifkan API dan baca metrik bawaan VM tanpa mengonfigurasi pengumpulan log",
      "Ekspor log yang sudah ada ke BigQuery tanpa mengatur pengumpulan dari VM",
    ],
    [
      "Agen, API aktif, dan izin pengiriman yang sesuai dibutuhkan untuk pipeline log dan metrik VM.",
      "Role baca tidak menggantikan izin menulis metrik atau log dari identitas agen.",
      "Metrik bawaan saja tidak memenuhi kebutuhan pengumpulan log dan metrik guest OS yang dikonfigurasi.",
      "Ekspor memproses log yang sudah diterima; bukan pengganti pengumpulan log dari VM.",
    ],
  ],
  7: [
    [
      "Gunakan custom mode VPC dengan rentang subnet yang tidak bertumpang tindih",
      "Gunakan rentang kantor yang sama dan hubungkan melalui Cloud VPN",
      "Pilih rentang yang sama lalu bedakan jaringan menggunakan nama subnet",
      "Buat VPC dengan rentang kantor yang sama dan gunakan VPC Network Peering",
    ],
    [
      "Alamat yang tidak bertumpang tindih memudahkan routing antar jaringan tanpa translasi tambahan.",
      "Tunnel VPN tidak sendiri menyelesaikan ambiguitas routing akibat rentang yang sama.",
      "Nama subnet tidak membedakan dua tujuan dengan prefix IP yang sama.",
      "Peering bukan solusi otomatis untuk rentang tumpang tindih maupun penghubung langsung ke kantor.",
    ],
  ],
  8: [
    [
      "Billing Account Viewer pada billing account terkait",
      "Billing Account Administrator pada billing account terkait",
      "Project Viewer pada proyek aplikasi saja",
      "Billing Account User pada billing account terkait",
    ],
    [
      "Role penagihan baca memenuhi kebutuhan pemeriksaan biaya tanpa memberi administrasi billing atau aplikasi.",
      "Administrator dapat mengubah pengaturan billing dan lebih luas daripada kebutuhan baca.",
      "Akses baca resource proyek tidak menggantikan kebutuhan melihat informasi billing account.",
      "Billing Account User ditujukan untuk menggunakan/menautkan akun penagihan, bukan sebagai role pembaca laporan biaya.",
    ],
  ],
  9: [
    [
      "Periksa dan ubah tautan billing account proyek secara terpisah",
      "Pindahkan proyek ke folder tujuan lalu biarkan tautan billing yang ada",
      "Ubah IAM policy pada folder tujuan tanpa mengubah tautan billing",
      "Buat budget baru di billing account tujuan untuk proyek tersebut",
    ],
    [
      "Hierarki resource dan hubungan penagihan proyek merupakan konfigurasi terpisah.",
      "Perpindahan folder tidak dengan sendirinya mengubah akun yang membayar proyek.",
      "Perubahan izin folder tidak mengganti tautan billing account proyek.",
      "Budget memantau biaya; budget bukan mekanisme mengubah akun penagihan proyek.",
    ],
  ],
  10: [
    [
      "Telusuri grant langsung, grup lain, dan role yang diwariskan",
      "Hapus role grup semula dari proyek untuk semua anggota",
      "Pindahkan pengguna ke grup baru tanpa memeriksa binding lain",
      "Cabut satu sesi login lalu anggap semua grant IAM telah dihapus",
    ],
    [
      "Akses dapat berasal dari beberapa jalur pemberian role yang harus diperiksa.",
      "Mencabut role seluruh grup memengaruhi anggota lain dan belum tentu mencabut grant pengguna dari jalur berbeda.",
      "Perubahan keanggotaan baru tidak menghapus grant langsung atau role dari grup lain.",
      "Sesi login dan kebijakan pemberian izin merupakan kontrol yang berbeda.",
    ],
  ],
  11: [
    [
      "Periksa izin Monitoring operator pada scoping project",
      "Berikan Logs Viewer saja pada scoping project",
      "Buat metrics scope lain tanpa mengubah izin pengguna",
      "Berikan Metric Writer kepada operator pada VM yang dipantau",
    ],
    [
      "Metrics scope menentukan cakupan data; operator tetap membutuhkan izin baca Monitoring yang sesuai.",
      "Logs Viewer tidak menggantikan izin membaca metrik Monitoring.",
      "Metrics scope baru tidak sendiri memberikan izin kepada operator.",
      "Izin mengirim metrik berbeda dari izin pengguna untuk melihat data melalui scoping project.",
    ],
  ],
  14: [
    [
      "Evaluasi tipe Hyperdisk dan konfigurasi performa yang didukung mesin",
      "Gunakan boot disk default tanpa meninjau batas IOPS dan throughput",
      "Gunakan Local SSD untuk seluruh data yang harus persisten setelah VM diganti",
      "Gunakan satu bucket Cloud Storage sebagai perangkat blok pengganti disk VM",
    ],
    [
      "Dukungan mesin dan karakteristik tipe Hyperdisk harus sesuai kebutuhan performa workload.",
      "Konfigurasi default tidak membuktikan bahwa target performa dapat dipenuhi.",
      "Local SSD adalah penyimpanan sementara dan memerlukan strategi persistensi terpisah.",
      "Penyimpanan objek tidak identik dengan perangkat blok yang digunakan aplikasi pada VM.",
    ],
  ],
  15: [
    [
      "Siapkan serta uji failover VM/aplikasi bersama replikasi disk",
      "Gunakan regional disk dan jangan siapkan VM pengganti atau prosedur aplikasi",
      "Gunakan snapshot harian sebagai satu-satunya rencana tanpa menilai target pemulihan",
      "Simpan disk zonal dan VM pengganti dalam zona aktif yang sama",
    ],
    [
      "Replikasi disk melindungi data lintas zona; pemulihan VM dan aplikasi tetap harus direncanakan.",
      "Replikasi penyimpanan tidak otomatis menjalankan seluruh proses aplikasi pada zona lain.",
      "Snapshot periodik belum tentu memenuhi target waktu atau kehilangan data yang diperlukan.",
      "Penempatan pengganti pada zona yang sama tidak melindungi dari kegagalan zona tersebut.",
    ],
  ],
  17: [
    [
      "Jalankan gcloud container clusters get-credentials dengan proyek dan lokasi cluster yang benar",
      "Jalankan kubectl config use-context untuk context produksi yang belum pernah dibuat",
      "Ubah default project gcloud lalu langsung gunakan context kubectl lama",
      "Tulis kubeconfig hanya dengan nama cluster tanpa endpoint dan konfigurasi autentikasi",
    ],
    [
      "get-credentials memperbarui konfigurasi koneksi cluster; komponen autentikasi GKE juga harus tersedia.",
      "Pemilihan context hanya bekerja jika context yang diperlukan sudah ada di kubeconfig.",
      "Proyek aktif gcloud dan context kubectl tidak selalu menunjuk target yang sama.",
      "Nama cluster saja tidak menyediakan seluruh informasi koneksi dan autentikasi.",
    ],
  ],
  18: [
    [
      "Deploy ke Agent Runtime pada Gemini Enterprise Agent Platform",
      "Jalankan agent pada VM Compute Engine dan kelola lifecycle-nya sendiri",
      "Bangun ulang sebagai container Cloud Run dengan integrasi runtime yang dikelola tim",
      "Pertahankan agent pada notebook pengembang untuk melayani seluruh permintaan produksi",
    ],
    [
      "Ini sesuai kebutuhan deployment langsung ke runtime agent terkelola Agent Platform.",
      "VM dapat menjalankan agent, tetapi tim mengambil alih pengelolaan runtime yang ingin dihindari.",
      "Cloud Run dapat menjadi pilihan untuk aplikasi agent lain, tetapi bukan deployment langsung ke runtime Agent Platform yang diminta.",
      "Notebook pengembangan bukan pengganti deployment runtime produksi yang direncanakan.",
    ],
  ],
  19: [
    [
      "Periksa kompatibilitas framework/operasi model, lokasi, serta kuota TPU",
      "Pilih TPU hanya dengan membandingkan jumlah memori akselerator",
      "Pindahkan biner CUDA ke TPU tanpa memeriksa stack perangkat lunak",
      "Minta tambahan kuota TPU sebelum memeriksa dukungan model dan lokasi",
    ],
    [
      "Pemilihan akselerator perlu sesuai perangkat lunak, workload, serta dukungan deployment.",
      "Kapasitas memori saja tidak membuktikan kompatibilitas kode atau operasi model.",
      "CUDA merupakan ekosistem GPU dan tidak menjamin biner dapat dijalankan pada TPU.",
      "Kuota yang lebih besar tidak memperbaiki ketidakcocokan stack atau ketiadaan dukungan lokasi.",
    ],
  ],
  22: [
    [
      "AlloyDB for PostgreSQL",
      "Spanner dengan penyesuaian aplikasi ke model dan dialek yang didukung",
      "Bigtable dengan perubahan model data menjadi wide-column",
      "Firestore dengan perubahan model data menjadi dokumen",
    ],
    [
      "AlloyDB adalah layanan kompatibel PostgreSQL; fitur aplikasi dan proses migrasi tetap perlu diuji.",
      "Spanner memiliki model dan kemampuan berbeda; bukan pilihan yang mempertahankan kompatibilitas PostgreSQL seperti yang diminta.",
      "Perpindahan ke Bigtable memerlukan perubahan model dan pola akses data.",
      "Firestore menggunakan model dokumen dan bukan pengganti PostgreSQL yang kompatibel.",
    ],
  ],
  24: [
    [
      "Gunakan Memorystore dan tangani cache miss dari database utama",
      "Kelola Redis sendiri pada Compute Engine",
      "Baca ulang database utama untuk setiap permintaan tanpa cache",
      "Ekspor hasil perhitungan ke Cloud Storage dan unduh ulang setiap permintaan",
    ],
    [
      "Memorystore menyediakan cache terkelola; database tetap menjadi sumber data persisten ketika cache miss.",
      "Redis pada VM dapat menjadi cache, tetapi menambah administrasi server dan Redis yang ingin dihindari.",
      "Pendekatan ini mempertahankan beban pembacaan berulang yang ingin dikurangi.",
      "Penyimpanan objek bukan layanan Redis dan tidak memberikan karakteristik akses cache yang diminta.",
    ],
  ],
  27: [
    [
      "Gunakan dual-region pada pasangan lokasi yang didukung dan disetujui",
      "Gunakan bucket regional dengan versioning",
      "Gunakan bucket multi-region tanpa memverifikasi pemilihan dua region tertentu",
      "Salin objek secara manual ke region kedua setelah gangguan terjadi",
    ],
    [
      "Dual-region menyediakan penempatan redundan pada pasangan region yang dipilih sesuai dukungan produk.",
      "Versioning mempertahankan versi objek dan tidak mengubah bucket regional menjadi lintas region.",
      "Multi-region tidak memberikan kontrol lokasi yang identik dengan pemilihan pasangan region tertentu.",
      "Penyalinan setelah gangguan bukan penempatan redundan yang sudah tersedia ketika region gagal.",
    ],
  ],
  28: [
    [
      "Gunakan secure tags dan atur izin pengikatan tag melalui IAM",
      "Gunakan network tags biasa pada VM tanpa kontrol pengikatan per nilai tag",
      "Pertahankan daftar alamat IP VM secara manual sebagai identitas workload",
      "Gunakan label biaya resource sebagai nilai target pada kebijakan firewall",
    ],
    [
      "Secure tags adalah identitas tag yang dikendalikan IAM dan didukung oleh kebijakan Cloud NGFW terkait.",
      "Network tags berbeda dari secure tags dan tidak memberikan kontrol IAM per nilai yang sama.",
      "Daftar IP tidak memenuhi kebutuhan identitas workload berbasis tag yang dikelola IAM.",
      "Label resource bukan pengganti secure tag pada aturan kebijakan firewall.",
    ],
  ],
  30: [
    [
      "Periksa kompatibilitas tier dengan jenis load balancer, cakupan IP, dan kebutuhan routing",
      "Ubah tier alamat IP ke Standard tanpa meninjau dukungan load balancer global",
      "Pertahankan load balancer global dan ubah kelas penyimpanan bucket saja",
      "Pindahkan aplikasi ke load balancer regional tanpa menilai perubahan cakupan layanan",
    ],
    [
      "Tier dan konfigurasi produk memiliki dukungan serta karakteristik routing yang perlu dicocokkan.",
      "Tidak semua konfigurasi load balancer global mendukung kedua tier secara identik.",
      "Kelas penyimpanan tidak mengubah kompatibilitas tier jaringan.",
      "Perubahan cakupan regional dapat mengubah perilaku layanan dan perlu dievaluasi terhadap kebutuhan aplikasi.",
    ],
  ],
  31: [
    [
      "Config Connector",
      "Terraform yang dijalankan terpisah dari cluster",
      "Helm tanpa controller untuk resource Google Cloud",
      "Skrip gcloud yang dijalankan dari cron",
    ],
    [
      "Config Connector menyediakan custom resources dan rekonsiliasi resource Google Cloud melalui Kubernetes.",
      "Terraform adalah IaC yang valid, tetapi bukan controller Kubernetes berbasis custom resources yang diminta.",
      "Helm mengemas/manjalankan manifes; tanpa controller tambahan ia tidak menyediakan rekonsiliasi resource Google Cloud tersebut.",
      "Skrip terjadwal tidak memberikan antarmuka custom resource dan lifecycle rekonsiliasi Kubernetes yang diminta.",
    ],
  ],
  33: [
    [
      "Tinjau target, permission, dan rencana perubahan sebelum eksekusi",
      "Jalankan perubahan pada produksi lalu tinjau resource yang terbentuk",
      "Tinjau hanya validitas sintaks tanpa memeriksa target proyek dan dampak resource",
      "Terapkan konfigurasi yang sama dengan pengujian tanpa memeriksa perbedaan state produksi",
    ],
    [
      "Keluaran AI tetap memerlukan validasi konteks, kewenangan, dan dampak perubahan.",
      "Pemeriksaan setelah eksekusi tidak mencegah perubahan produksi yang keliru atau merusak.",
      "Konfigurasi yang sintaktis valid masih dapat mengarah ke proyek atau resource yang salah.",
      "State dan kebutuhan produksi dapat berbeda dari lingkungan pengujian.",
    ],
  ],
  34: [
    [
      "Application Design Center",
      "Terraform CLI dengan katalog dan antarmuka kolaborasi yang dibangun sendiri",
      "Helm sebagai katalog provisioning seluruh resource Google Cloud",
      "Database Center untuk merancang seluruh jaringan dan komputasi aplikasi",
    ],
    [
      "Application Design Center mendukung desain aplikasi berbasis template/katalog dan konfigurasi Terraform.",
      "Terraform CLI dapat menjalankan IaC, tetapi antarmuka katalog dan desain terkelola yang diminta harus disediakan sendiri.",
      "Helm berfokus pada paket aplikasi Kubernetes, bukan katalog desain seluruh infrastruktur cloud tersebut.",
      "Database Center mengamati inventaris dan kesehatan database, bukan mendesain seluruh infrastruktur aplikasi.",
    ],
  ],
  38: [
    [
      "StatefulSet dengan penyimpanan persisten per replika",
      "Deployment dengan satu volume data yang digunakan semua replika",
      "DaemonSet dengan penyimpanan sementara pada node",
      "Job yang membuat Pod baru untuk setiap eksekusi",
    ],
    [
      "StatefulSet mendukung identitas Pod dan pola penyimpanan persisten per replika.",
      "Deployment tidak menyediakan semantik identitas ordinal dan volume per replika seperti StatefulSet.",
      "DaemonSet berfokus pada penempatan Pod per node; penyimpanan sementara tidak memenuhi kebutuhan persistensi.",
      "Job mengelola pekerjaan yang selesai, bukan replika layanan beridentitas stabil.",
    ],
  ],
  39: [
    [
      "Vertical Pod Autoscaler dengan mode pembaruan yang sesuai",
      "Horizontal Pod Autoscaler untuk menaikkan jumlah replika",
      "Cluster autoscaler untuk menambah node",
      "PodDisruptionBudget untuk membatasi gangguan",
    ],
    [
      "VPA berfokus pada ukuran resource request Pod, sesuai kebutuhan pemeriksaan per Pod.",
      "HPA menambah replika dan tidak sendiri memperbesar request memori container yang kekurangan memori.",
      "Penambahan node tidak sendiri mengubah request atau limit memori container yang ada.",
      "PodDisruptionBudget membatasi gangguan sukarela, bukan mengukur dan menyesuaikan ukuran request.",
    ],
  ],
  40: [
    [
      "Tinjau request Pod, kebutuhan workload, serta aturan Autopilot",
      "Tingkatkan jumlah replika tanpa meninjau ukuran resource setiap Pod",
      "Kelola node pool Autopilot seperti node pool GKE Standard",
      "Perbesar limit container saja tanpa meninjau request dan aturan Autopilot",
    ],
    [
      "Konfigurasi resource workload tetap penting ketika infrastruktur cluster dikelola Autopilot.",
      "Jumlah replika saja tidak menilai kebutuhan resource per Pod atau biaya keseluruhan.",
      "Model pengelolaan node Autopilot berbeda dari pengelolaan node pool Standard secara langsung.",
      "Limit saja tidak cukup untuk menilai alokasi resource dan perilaku penyesuaian request Autopilot.",
    ],
  ],
  41: [
    [
      "Validasi kapasitas baru dan pemindahan Pod sesuai constraint serta disruption budget",
      "Hapus pool lama sebelum Pod dijadwalkan pada pool baru",
      "Buat pool baru tetapi biarkan node selector menunjuk pool lama",
      "Pindahkan hanya Service tanpa memindahkan workload yang berjalan pada node lama",
    ],
    [
      "Migrasi perlu memastikan workload dapat berjalan pada kapasitas pengganti dengan gangguan yang dapat diterima.",
      "Penghapusan awal dapat menghentikan Pod sebelum penggantinya siap.",
      "Selector yang masih menunjuk pool lama dapat mencegah Pod berjalan pada pool baru.",
      "Service mengarahkan lalu lintas ke Pod; mengubahnya tidak memindahkan eksekusi Pod antar node.",
    ],
  ],
  42: [
    [
      "Periksa attachment GPU, driver, tipe mesin, dan stack aplikasi",
      "Tambah kuota GPU tanpa memeriksa driver pada VM yang sudah dibuat",
      "Perbesar memori VM tanpa memeriksa apakah GPU terpasang dan dikenali",
      "Bangun ulang aplikasi dengan dependensi yang sama tanpa memeriksa lingkungan runtime",
    ],
    [
      "Perangkat GPU dan software pendukungnya harus terpasang serta kompatibel dengan aplikasi.",
      "Kuota memengaruhi provisioning; penambahannya tidak memasang driver yang belum tersedia pada VM aktif.",
      "Kapasitas RAM tambahan tidak memastikan GPU tersedia bagi aplikasi.",
      "Kegagalan lingkungan driver atau perangkat dapat tetap ada meskipun kode dibangun ulang.",
    ],
  ],
  44: [
    [
      "Gemini Enterprise Agent Platform Workbench",
      "Compute Engine dengan instalasi serta pemeliharaan JupyterLab oleh tim",
      "Cloud Workstations untuk lingkungan IDE umum yang dikonfigurasi sendiri",
      "BigQuery SQL workspace untuk menjalankan kueri tanpa lingkungan JupyterLab",
    ],
    [
      "Workbench menyediakan lingkungan notebook JupyterLab untuk workflow data science dan akses layanan Google Cloud.",
      "VM dapat menjalankan JupyterLab, tetapi tim mengambil alih pemeliharaan lingkungan yang ingin dikelola layanan.",
      "Workstations menyediakan lingkungan pengembangan; bukan produk notebook data science terkelola yang paling langsung sesuai kebutuhan.",
      "Workspace SQL tidak menggantikan lingkungan notebook JupyterLab yang diminta.",
    ],
  ],
  45: [
    [
      "Cloud Workstations dengan konfigurasi lingkungan yang dikelola terpusat",
      "VM per developer dengan penyiapan IDE manual",
      "Laptop developer dengan konfigurasi yang didokumentasikan tanpa penegakan terpusat",
      "Satu notebook data science bersama untuk seluruh developer dan seluruh proyek",
    ],
    [
      "Cloud Workstations mendukung penyediaan lingkungan pengembangan cloud melalui konfigurasi bersama dan kontrol akses.",
      "VM manual meningkatkan pekerjaan penyiapan dan risiko perbedaan konfigurasi antar developer.",
      "Dokumentasi saja tidak menyediakan lingkungan cloud atau pengelolaan konfigurasi terpusat.",
      "Notebook bersama tidak memberikan isolasi dan konfigurasi lingkungan per developer yang dibutuhkan.",
    ],
  ],
  46: [
    [
      "Periksa Query Insights atau diagnostik kueri database yang didukung",
      "Perbesar instance sebelum memeriksa kueri yang paling banyak memakai resource",
      "Periksa hanya grafik CPU agregat tanpa melihat statistik kueri",
      "Buat indeks pada semua kolom sebelum mengetahui pola kueri",
    ],
    [
      "Diagnostik kueri membantu mengidentifikasi kontribusi workload dan penyebab sebelum perubahan dilakukan.",
      "Penambahan kapasitas dapat menambah biaya tanpa mengatasi kueri yang tidak efisien.",
      "Metrik agregat saja tidak mengidentifikasi kueri tertentu yang menyebabkan latensi.",
      "Indeks yang tidak terarah dapat menambah biaya penyimpanan dan pekerjaan tulis tanpa memperbaiki kueri yang bermasalah.",
    ],
  ],
  47: [
    [
      "Database Center",
      "Dashboard Cloud Monitoring yang hanya memuat metrik CPU instance",
      "Console satu instance Cloud SQL untuk inventaris seluruh produk database",
      "Cloud Asset Inventory tanpa sinyal dan rekomendasi kesehatan database",
    ],
    [
      "Database Center menggabungkan inventaris dan sinyal kesehatan armada database yang didukung.",
      "CPU saja tidak menggambarkan inventaris, konfigurasi perlindungan data, dan masalah kesehatan seluruh armada.",
      "Tampilan satu instance bukan inventaris lintas produk dan proyek.",
      "Inventaris resource saja tidak menyediakan seluruh konteks kesehatan database yang diminta.",
    ],
  ],
  48: [
    [
      "Periksa status, lokasi, detail error, dan statistik job ID terkait",
      "Jalankan ulang query tanpa memeriksa apakah job sebelumnya masih berjalan",
      "Periksa tabel tujuan saja tanpa meninjau error job",
      "Periksa hanya izin dataset dan anggap job yang diterima selalu berhasil",
    ],
    [
      "Informasi job membedakan pekerjaan yang masih berjalan dari kegagalan dan menyediakan detail diagnosis.",
      "Pengulangan dapat menambah biaya atau menghasilkan pekerjaan ganda sebelum penyebab dipahami.",
      "Ketiadaan keluaran tidak sendiri menjelaskan apakah job masih berjalan atau sudah gagal.",
      "Job dapat gagal karena sebab lain; izin yang benar tidak membuktikan keberhasilan eksekusi.",
    ],
  ],
  49: [
    [
      "Periksa status job, metrik per tahap, backlog, dan laju pemrosesan",
      "Tambah jumlah worker tanpa memeriksa tahap yang menjadi hambatan",
      "Periksa hanya penggunaan CPU rata-rata seluruh worker",
      "Naikkan batas autoscaling tanpa memeriksa hot key dan kapasitas sistem tujuan",
    ],
    [
      "Metrik pipeline dan tahapnya membantu membedakan hambatan sumber, pemrosesan, serta keluaran.",
      "Penambahan worker tidak selalu menyelesaikan hot key atau bottleneck sistem eksternal.",
      "CPU rata-rata dapat menyembunyikan ketidakseimbangan atau hambatan pada tahap tertentu.",
      "Batas worker yang lebih besar tidak menghilangkan semua jenis hambatan pipeline.",
    ],
  ],
  50: [
    [
      "Restore ke database baru, validasi, lalu rencanakan cutover",
      "Ubah aplikasi agar memakai database tujuan sebelum hasil restore divalidasi",
      "Buat database kosong dengan nama baru lalu arahkan aplikasi ke sana",
      "Hapus database sumber sebelum memastikan backup dapat dipulihkan",
    ],
    [
      "Alur ini menguji pemulihan Firestore dan memastikan hasilnya sebelum aplikasi dipindahkan.",
      "Cutover sebelum validasi dapat membawa aplikasi ke data yang belum siap atau tidak sesuai.",
      "Database baru tanpa proses restore tidak berisi data dari backup.",
      "Menghilangkan sumber sebelum validasi memperbesar risiko kegagalan pemulihan.",
    ],
  ],
  51: [
    [
      "Reservasikan IP eksternal statis yang sesuai dan pasang pada resource aplikasi",
      "Reservasikan IP internal statis lalu gunakan pada DNS internet publik",
      "Perpendek TTL DNS dan perbarui record setiap kali IP ephemeral berubah",
      "Buat proses otomatis untuk mencari IP baru dan mengganti record DNS setelah VM diganti",
    ],
    [
      "Reservasi statis mempertahankan alamat eksternal pada deployment yang kompatibel; pemulihan layanan tetap perlu direncanakan.",
      "Alamat internal bukan alamat layanan internet publik yang dapat diakses langsung oleh pengguna luar.",
      "TTL lebih pendek tidak mempertahankan alamat IP dan masih memerlukan pembaruan DNS.",
      "Skrip menambah pekerjaan pemeliharaan dan perubahan DNS yang ingin dihindari.",
    ],
  ],
  52: [
    [
      "Periksa rute efektif, prefix/prioritas, next hop, firewall, dan jalur balik",
      "Tambahkan allow firewall lalu biarkan next hop yang tidak dapat dijangkau",
      "Turunkan nilai prioritas rute tanpa memeriksa prefix dan rute lain yang berlaku",
      "Tambah rute satu arah tanpa memeriksa rute kembali di jaringan tujuan",
    ],
    [
      "Komunikasi memerlukan keputusan routing dan kebijakan jaringan yang konsisten pada kedua arah.",
      "Izin firewall tidak menyediakan next hop yang tidak terjangkau.",
      "Prioritas saja tidak cukup untuk memahami pemilihan rute dengan prefix dan kategori yang berbeda.",
      "Tujuan yang tidak memiliki jalur balik dapat membuat komunikasi tetap gagal.",
    ],
  ],
  53: [
    [
      "Managed Service for Prometheus dengan konfigurasi koleksi yang sesuai",
      "Kelola sendiri seluruh server Prometheus serta penyimpanan jangka panjang",
      "Ubah seluruh instrumentasi aplikasi agar mengirim custom metrics melalui API lain",
      "Bentuk metrik hanya dari log tanpa memakai endpoint Prometheus yang ada",
    ],
    [
      "Layanan ini mendukung metrik Prometheus dengan backend terkelola dan integrasi Google Cloud.",
      "Pendekatan mandiri menambah pekerjaan operasi backend yang ingin dihindari.",
      "Penulisan ulang instrumentasi tidak diperlukan ketika endpoint Prometheus yang ada dapat digunakan.",
      "Metrik berbasis log tidak mempertahankan seluruh instrumentasi Prometheus yang sudah tersedia.",
    ],
  ],
  54: [
    [
      "Aktifkan logging pada aturan firewall terkait dan periksa koneksi berikutnya",
      "Periksa VPC Flow Logs saja untuk membuktikan seluruh penolakan aturan tertentu",
      "Periksa Admin Activity audit log saja untuk melihat setiap koneksi yang ditolak",
      "Periksa log aplikasi saja meskipun koneksi ditolak sebelum mencapai aplikasi",
    ],
    [
      "Firewall Rules Logging menyediakan informasi koneksi yang cocok dengan aturan yang mendukung logging.",
      "VPC Flow Logs bukan jaminan rekaman setiap paket atau semua keputusan penolakan firewall.",
      "Audit log perubahan konfigurasi tidak sama dengan log keputusan koneksi pada aturan firewall.",
      "Aplikasi dapat tidak menerima permintaan yang ditolak di jaringan, sehingga lognya tidak cukup.",
    ],
  ],
  55: [
    [
      "Cloud Trace dengan instrumentasi lintas layanan",
      "Cloud Profiler untuk sampel pemakaian CPU per fungsi",
      "Grafik latensi agregat Cloud Monitoring saja",
      "Logs Explorer tanpa korelasi atau instrumentasi trace",
    ],
    [
      "Trace menghubungkan span dan durasinya sepanjang jalur permintaan lintas komponen.",
      "Profiling CPU membantu diagnosis lain, tetapi tidak menggantikan rangkaian span permintaan lintas layanan.",
      "Metrik agregat menunjukkan pola umum dan bukan rincian satu jalur permintaan.",
      "Log yang tidak dikorelasikan tidak dengan sendirinya menghasilkan hubungan span dan waktunya.",
    ],
  ],
  56: [
    [
      "Tinjau periode pengamatan dan puncak workload, lalu uji rekomendasi ukuran",
      "Terapkan rekomendasi segera setelah melihat rata-rata CPU yang rendah",
      "Pertahankan ukuran maksimum sepanjang tahun tanpa mengevaluasi kebutuhan",
      "Terapkan ukuran yang sama pada seluruh VM meskipun pola workload berbeda",
    ],
    [
      "Rekomendasi perlu dievaluasi bersama pola bisnis dan risiko perubahan kapasitas.",
      "Rata-rata rendah dapat mengabaikan lonjakan penting di luar periode pengamatan.",
      "Pendekatan ini mengabaikan peluang optimasi yang dapat dinilai dengan aman.",
      "Workload yang berbeda dapat memiliki kebutuhan resource dan pola puncak yang berbeda.",
    ],
  ],
  57: [
    [
      "Cloud Hub dengan konteks aplikasi yang sesuai",
      "Personalized Service Health saja untuk seluruh keadaan internal aplikasi",
      "Dashboard satu VM sebagai satu-satunya gambaran aplikasi multi-resource",
      "Cloud Asset Inventory saja tanpa sinyal kesehatan atau peristiwa operasional",
    ],
    [
      "Cloud Hub menyajikan konteks operasional aplikasi, resource, kesehatan, dan peristiwa yang relevan.",
      "Service Health berfokus pada insiden layanan Google yang relevan dan bukan seluruh kesehatan internal aplikasi.",
      "Satu VM tidak mewakili semua komponen dan peristiwa aplikasi yang tersebar.",
      "Inventaris menyajikan resource; inventaris saja tidak menggantikan konteks operasional yang diminta.",
    ],
  ],
  58: [
    [
      "Cloud Profiler dengan dukungan runtime yang sesuai",
      "Cloud Trace saja untuk melihat latensi permintaan lintas layanan",
      "Grafik CPU total VM saja pada Cloud Monitoring",
      "Query Insights untuk kueri database tanpa profiling kode aplikasi",
    ],
    [
      "Profiler menghubungkan sampel penggunaan resource dengan fungsi atau stack kode aplikasi.",
      "Durasi permintaan atau span tidak sama dengan sampel konsumsi CPU per fungsi.",
      "CPU total tidak mengidentifikasi fungsi yang berkontribusi terhadap penggunaan tersebut.",
      "Diagnostik kueri bukan pengganti profiling CPU seluruh kode aplikasi.",
    ],
  ],
  59: [
    [
      "Buat log-based counter metric dan alert untuk filter pembayaran gagal",
      "Buat uptime check HTTP untuk menggantikan penghitungan status dalam log",
      "Buat dashboard yang hanya menampilkan log tanpa membentuk metrik atau alert",
      "Ekspor log lalu jalankan hitungan manual setiap akhir bulan",
    ],
    [
      "Counter metric mengubah log baru yang cocok menjadi metrik yang dapat dipakai alert Monitoring.",
      "Ketersediaan endpoint tidak langsung menghitung peristiwa kegagalan pembayaran dalam log.",
      "Tampilan log saja tidak memenuhi kebutuhan pembentukan metrik dan alert otomatis.",
      "Penghitungan manual berkala tidak memenuhi kebutuhan alert dari entri baru.",
    ],
  ],
  60: [
    [
      "Buat identitas khusus, beri akses baca bucket, dan izinkan attachment oleh operator yang berwenang",
      "Gunakan identitas default dengan Editor proyek tanpa membatasi akses bucket",
      "Beri role baca pada akun manusia operator tetapi tidak pada identitas VM",
      "Beri Service Account User kepada identitas VM tanpa memberinya akses data bucket",
    ],
    [
      "Identitas runtime, izin data pada resource target, dan izin pemasangan service account merupakan kebutuhan berbeda.",
      "Akses Editor pada proyek lebih luas daripada kebutuhan membaca satu bucket.",
      "Izin manusia tidak otomatis dipakai oleh aplikasi yang berjalan dengan service account VM.",
      "Kemampuan menggunakan service account tidak sama dengan izin membaca objek pada bucket tujuan.",
    ],
  ],
  61: [
    [
      "Identifikasi service agent dan penuhi kebutuhan izin layanan pada scope yang tepat",
      "Berikan izin hanya kepada service account manusia yang melakukan deployment",
      "Berikan role service agent kepada akun manusia yang menangani insiden",
      "Ganti identitas Google-managed dengan service account arbitrer tanpa memeriksa dukungan layanan",
    ],
    [
      "Layanan Google dapat menggunakan identitas service agent tersendiri yang harus memiliki izin yang diperlukan.",
      "Identitas pelaksana deployment dapat berbeda dari identitas layanan saat beroperasi.",
      "Role khusus service agent tidak dimaksudkan sebagai role umum operator manusia.",
      "Layanan tidak selalu mendukung penggantian identitas internal dengan akun pilihan pengguna.",
    ],
  ],
  62: [
    [
      "Pilih predefined role yang sesuai atau custom role minimum bila diperlukan",
      "Gunakan Editor pada proyek untuk seluruh anggota tim",
      "Buat custom role terpisah per pengguna dengan permission identik",
      "Berikan predefined role yang paling luas agar kebutuhan baru tidak memerlukan perubahan",
    ],
    [
      "Gunakan role dengan permission yang sesuai, dan custom role bila tidak ada predefined role yang memenuhi kebutuhan.",
      "Editor mencakup kemampuan lebih luas daripada kebutuhan minimum yang stabil.",
      "Duplikasi role per pengguna menambah pemeliharaan tanpa manfaat pada kebutuhan permission yang sama.",
      "Kemudahan mengantisipasi kebutuhan bukan alasan memberikan izin yang belum diperlukan.",
    ],
  ],
  63: [
    [
      "Gunakan impersonasi untuk memperoleh access token berumur terbatas",
      "Buat key JSON dan jadwalkan penghapusannya setelah job selesai",
      "Gunakan kredensial akun manusia pemilik proyek untuk setiap job",
      "Simpan key permanen dalam Secret Manager lalu bagikan akses kepada semua operator",
    ],
    [
      "Impersonasi menyediakan kredensial sementara tanpa mendistribusikan private key service account.",
      "Key statis menambah pengelolaan dan paparan yang tidak diperlukan ketika impersonasi sudah tersedia.",
      "Akun manusia tidak mempertahankan identitas service account yang diminta untuk job.",
      "Penyimpanan aman tidak mengubah key permanen menjadi kredensial sementara atau membenarkan distribusi luas.",
    ],
  ],
  64: [
    [
      "Tinjau target organisasi/billing, identitas, state, urutan tahap, dan rencana perubahan",
      "Jalankan konfigurasi contoh pada organisasi produksi tanpa menyesuaikan input",
      "Tinjau hanya keberhasilan tahap pertama sebelum menjalankan semua tahap berikutnya",
      "Gunakan state yang sama untuk fondasi pengujian dan produksi tanpa pemisahan target",
    ],
    [
      "Fondasi IaC membutuhkan konfigurasi target, kewenangan, dan kontrol perubahan yang sesuai konteks perusahaan.",
      "Contoh tidak menjamin target, kebijakan, dan input sudah sesuai lingkungan produksi.",
      "Setiap tahap dapat memiliki dependensi dan dampak berbeda yang perlu ditinjau.",
      "Pencampuran target lingkungan dalam state dapat menambah risiko perubahan resource yang salah.",
    ],
  ],
  65: [
    [
      "SELECT * FROM orders WHERE status = 'FAILED' LIMIT 100;",
      "SELECT * FROM orders LIMIT 100;",
      "SELECT * FROM orders WHERE status <> 'FAILED' LIMIT 100;",
      "SELECT * FROM orders WHERE status = 'FAILED';",
    ],
    [
      "Filter memilih pesanan FAILED dan LIMIT membatasi hasil paling banyak 100 baris.",
      "Tanpa filter status, hasil dapat berisi pesanan dengan status lain.",
      "Operator tidak sama dengan memilih FAILED; kueri ini justru mengecualikannya.",
      "Kueri memilih status yang benar tetapi tidak membatasi jumlah hasil seperti yang diminta.",
    ],
  ],
  66: [
    [
      "Periksa dukungan dan aktivasi analitik pada log bucket serta izin pengguna",
      "Beri Logs Viewer tetapi jangan periksa konfigurasi analitik bucket",
      "Buat linked BigQuery dataset tanpa memenuhi prasyarat analitik log bucket",
      "Buat log sink ke bucket tujuan tetapi jangan aktifkan kemampuan analitiknya",
    ],
    [
      "Analitik SQL membutuhkan konfigurasi bucket yang mendukung serta akses pengguna yang sesuai.",
      "Izin membaca log saja tidak mengaktifkan semua kemampuan analitik pada bucket.",
      "Linked dataset memiliki prasyarat konfigurasi; pembuatan link bukan pengganti seluruh prasyarat itu.",
      "Routing menentukan tujuan log dan tidak dengan sendirinya mengaktifkan analitik pada tujuan tersebut.",
    ],
  ],
  67: [
    [
      "Pilih context produksi lalu periksa node, Pod, dan Service pada namespace yang sesuai",
      "Periksa Pod pada namespace produksi tetapi tetap memakai context pengujian",
      "Periksa kubectl get pods saja lalu anggap seluruh inventaris node dan Service sudah tercakup",
      "Periksa hanya daftar VM Compute Engine tanpa resource Kubernetes",
    ],
    [
      "Context menentukan cluster target; resource dan namespace yang tepat harus diperiksa sebelum keputusan deployment.",
      "Namespace dengan nama sama pada cluster berbeda tetap mengacu ke lingkungan berbeda.",
      "Daftar Pod saja tidak memuat seluruh detail inventaris node dan Service.",
      "VM dasar tidak menggambarkan seluruh resource Kubernetes seperti Pod dan Service aplikasi.",
    ],
  ],
  68: [
    [
      "Periksa konfigurasi endpoint control plane, sumber yang diizinkan, serta jalur jaringan",
      "Tambah role IAM operator tanpa mengubah konektivitas workstation",
      "Buka akses publik pada Service aplikasi untuk memperbaiki koneksi ke API cluster",
      "Periksa konektivitas Pod ke internet saja tanpa menguji endpoint control plane",
    ],
    [
      "Koneksi pengelolaan cluster memerlukan endpoint dan jalur jaringan yang diizinkan selain otorisasi IAM.",
      "Izin IAM tidak sendiri menyediakan akses jaringan ke endpoint yang dibatasi.",
      "Service aplikasi dan endpoint API pengelolaan cluster merupakan jalur berbeda.",
      "Konektivitas keluar Pod tidak membuktikan workstation dapat mencapai control plane.",
    ],
  ],
  69: [
    [
      "Evaluasi custom machine type yang didukung beserta batas dan performanya",
      "Pilih predefined machine lebih besar tanpa memeriksa pemanfaatan CPU",
      "Ubah model provisioning menjadi Spot tanpa mengubah tipe mesin",
      "Tambah kapasitas disk tanpa menyesuaikan alokasi CPU dan memori",
    ],
    [
      "Custom machine type dapat menyesuaikan alokasi CPU/memori dalam batas keluarga mesin yang didukung.",
      "Ukuran lebih besar dapat menambah CPU yang tidak dibutuhkan dan tidak menyelesaikan optimasi rasio.",
      "Spot mengubah model kapasitas/harga dan risiko interupsi, bukan rasio CPU/memori mesin yang sama.",
      "Kapasitas disk tidak mengubah alokasi RAM atau jumlah vCPU.",
    ],
  ],
  70: [
    [
      "Atur pembagian trafik service 90/10 antara revisi stabil dan baru",
      "Atur minimum instance revisi baru menjadi satu dari sepuluh instance",
      "Alihkan 100% trafik ke revisi baru lalu pantau setelahnya",
      "Deploy revisi baru tanpa mengubah pengaturan trafik yang tetap menunjuk revisi stabil",
    ],
    [
      "Pembagian trafik antar revisi mengatur rollout persentase yang diminta.",
      "Jumlah minimum instance tidak menentukan bobot routing permintaan antar revisi.",
      "Perpindahan langsung seluruh trafik tidak memenuhi rollout bertahap 10%.",
      "Deployment tanpa penyesuaian trafik belum menjalankan pengujian 10% trafik produksi pada revisi baru.",
    ],
  ],
  71: [
    [
      "Gunakan instance template, managed instance group, dan kebijakan autoscaling",
      "Gunakan unmanaged instance group dengan penambahan VM secara manual",
      "Gunakan template dan MIG berukuran tetap tanpa kebijakan penskalaan",
      "Jalankan satu VM besar dan naikkan kapasitasnya secara manual ketika beban meningkat",
    ],
    [
      "Template menjaga konsistensi konfigurasi, sedangkan MIG dan autoscaler mengelola perubahan kapasitas armada.",
      "Pengelolaan manual tidak memenuhi kebutuhan penskalaan otomatis dengan lifecycle VM terkelola.",
      "MIG berukuran tetap belum menyediakan penyesuaian kapasitas mengikuti beban.",
      "Penskalaan vertikal manual tidak menyediakan armada stateless yang otomatis bertambah atau berkurang.",
    ],
  ],
};

export const gearRevisedSuffixes = Object.keys(edits).map(Number);
export function calibrateAceGear(row, index) {
  const edit = edits[index + 1];
  return edit
    ? { ...row, options: edit[0], notes: edit[1], gearCalibrated: true }
    : row;
}

// Original bilingual foundational scenarios. The paired rows share option order
// and answer keys; product names remain untranslated. Append rows to preserve IDs.
const concepts = {};
const rows = [];
const guide =
  "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/";
function c(key, en, id, enReason, idReason, source) {
  concepts[key] = { en, id, enReason, idReason, source };
}
function q(domain, topic, en, id, choices, answers = [0]) {
  rows.push({ domain, topic, en, id, choices, answers });
}
const overview = "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/";
const wa = "https://docs.aws.amazon.com/wellarchitected/latest/framework/";

c(
  "agility",
  "Agility",
  "Agilitas",
  "Agility shortens the time needed to provision resources and test business ideas.",
  "Agilitas mempercepat penyediaan resource dan pengujian ide bisnis.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "elasticity",
  "Elasticity",
  "Elastisitas",
  "Elasticity adjusts capacity up and down as demand changes; capacity does not have to remain at peak levels.",
  "Elastisitas menyesuaikan kapasitas naik dan turun mengikuti permintaan; kapasitas tidak harus tetap pada tingkat puncak.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "scale",
  "Scalability",
  "Skalabilitas",
  "Scalability is the ability to accommodate growth by increasing capacity; it does not necessarily imply automatic scale-in.",
  "Skalabilitas adalah kemampuan mengakomodasi pertumbuhan dengan menambah kapasitas; konsep ini tidak selalu berarti pengurangan kapasitas otomatis.",
  wa + "reliability.html",
);
c(
  "ha",
  "High availability",
  "Ketersediaan tinggi",
  "High availability reduces downtime through redundancy and removal of single points of failure.",
  "Ketersediaan tinggi mengurangi waktu henti melalui redundansi dan penghilangan titik kegagalan tunggal.",
  wa + "reliability.html",
);
c(
  "durability",
  "Data durability",
  "Durabilitas data",
  "Durability concerns preservation of stored data over time; it is different from keeping an application continuously reachable.",
  "Durabilitas berkaitan dengan terjaganya data tersimpan dari waktu ke waktu; konsep ini berbeda dari menjaga aplikasi selalu dapat diakses.",
  wa + "reliability.html",
);
c(
  "fault",
  "Fault tolerance",
  "Toleransi kesalahan",
  "Fault-tolerant systems continue operating when a component fails by using redundant components.",
  "Sistem yang toleran terhadap kesalahan tetap beroperasi ketika suatu komponen gagal dengan menggunakan komponen redundan.",
  wa + "reliability.html",
);
c(
  "variable",
  "Trade fixed expense for variable expense",
  "Mengganti pengeluaran tetap dengan pengeluaran variabel",
  "Usage-based cloud spending can replace upfront infrastructure purchases with expenses that follow consumption.",
  "Pengeluaran cloud berbasis penggunaan dapat mengganti pembelian infrastruktur di awal dengan biaya yang mengikuti konsumsi.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "economies",
  "Benefit from economies of scale",
  "Memanfaatkan skala ekonomi",
  "AWS aggregates demand across customers, enabling economies of scale beyond those of many individual organizations.",
  "AWS menggabungkan permintaan banyak pelanggan sehingga memperoleh skala ekonomi yang melampaui banyak organisasi secara individu.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "undiff",
  "Reduce undifferentiated heavy lifting",
  "Mengurangi pekerjaan infrastruktur yang tidak membedakan bisnis",
  "Managed infrastructure reduces routine operational work so teams can focus on features that differentiate their business.",
  "Infrastruktur terkelola mengurangi pekerjaan operasional rutin agar tim dapat berfokus pada fitur yang membedakan bisnisnya.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "global",
  "Go global in minutes",
  "Memperluas jangkauan global dengan cepat",
  "AWS global infrastructure allows deployment near users without first building a physical data center in each market.",
  "Infrastruktur global AWS memungkinkan deployment dekat pengguna tanpa membangun pusat data fisik di setiap pasar terlebih dahulu.",
  overview + "six-advantages-of-cloud-computing.html",
);
c(
  "operational",
  "Operational excellence",
  "Keunggulan operasional",
  "Operational excellence emphasizes effective operations, procedures, observability, and continuous improvement.",
  "Keunggulan operasional menekankan operasi yang efektif, prosedur, observabilitas, dan perbaikan berkelanjutan.",
  wa + "operational-excellence.html",
);
c(
  "security",
  "Security",
  "Keamanan",
  "The security pillar protects information and systems through identity controls, detection, and data protection.",
  "Pilar keamanan melindungi informasi dan sistem melalui kontrol identitas, deteksi, dan perlindungan data.",
  wa + "security.html",
);
c(
  "reliability",
  "Reliability",
  "Keandalan",
  "Reliability emphasizes correct operation, recovery from failure, and resilient workload design.",
  "Keandalan menekankan operasi yang benar, pemulihan dari kegagalan, dan desain workload yang tangguh.",
  wa + "reliability.html",
);
c(
  "performance",
  "Performance efficiency",
  "Efisiensi performa",
  "Performance efficiency matches computing resources to workload requirements and evaluates suitable technologies.",
  "Efisiensi performa menyesuaikan resource komputasi dengan kebutuhan workload dan mengevaluasi teknologi yang tepat.",
  wa + "performance-efficiency.html",
);
c(
  "cost",
  "Cost optimization",
  "Optimasi biaya",
  "Cost optimization focuses on delivering business value while avoiding unnecessary spending.",
  "Optimasi biaya berfokus pada penyampaian nilai bisnis sambil menghindari pengeluaran yang tidak diperlukan.",
  wa + "cost-optimization.html",
);
c(
  "sustainability",
  "Sustainability",
  "Keberlanjutan",
  "Sustainability minimizes a workload's environmental impact by improving utilization and reducing resource consumption.",
  "Keberlanjutan meminimalkan dampak lingkungan workload dengan meningkatkan utilisasi dan mengurangi konsumsi resource.",
  wa + "sustainability.html",
);
c(
  "rehost",
  "Rehost",
  "Rehost",
  "Rehosting moves a workload largely unchanged to cloud infrastructure and is commonly called lift and shift.",
  "Rehosting memindahkan workload ke infrastruktur cloud dengan sedikit perubahan dan sering disebut lift and shift.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "replatform",
  "Replatform",
  "Replatform",
  "Replatforming changes selected platform components, such as moving to a managed database, without redesigning the entire application.",
  "Replatforming mengubah komponen platform tertentu, seperti beralih ke database terkelola, tanpa mendesain ulang seluruh aplikasi.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "refactor",
  "Refactor or re-architect",
  "Refactor atau re-architect",
  "Refactoring changes application architecture to use cloud capabilities more fully; it typically requires application changes.",
  "Refactoring mengubah arsitektur aplikasi untuk memanfaatkan kemampuan cloud lebih jauh dan umumnya memerlukan perubahan aplikasi.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "repurchase",
  "Repurchase",
  "Repurchase",
  "Repurchasing replaces an existing product with another offering, such as moving from a self-managed application to SaaS.",
  "Repurchasing mengganti produk yang digunakan dengan penawaran lain, misalnya beralih dari aplikasi yang dikelola sendiri ke SaaS.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "retire",
  "Retire",
  "Retire",
  "Retiring removes an application that is no longer needed rather than moving or maintaining it.",
  "Retiring menghentikan aplikasi yang tidak lagi diperlukan, bukan memindahkan atau terus memeliharanya.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "retain",
  "Retain",
  "Retain",
  "Retaining keeps a workload in its current environment, for example when a migration is postponed.",
  "Retaining mempertahankan workload di lingkungan saat ini, misalnya ketika migrasi ditunda.",
  "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html",
);
c(
  "caf",
  "AWS Cloud Adoption Framework (AWS CAF)",
  "AWS Cloud Adoption Framework (AWS CAF)",
  "AWS CAF helps organizations assess and develop business, people, governance, platform, security, and operations capabilities for cloud adoption.",
  "AWS CAF membantu organisasi menilai dan mengembangkan kapabilitas bisnis, manusia, tata kelola, platform, keamanan, dan operasi untuk adopsi cloud.",
  "https://docs.aws.amazon.com/whitepapers/latest/overview-aws-cloud-adoption-framework/welcome.html",
);
c(
  "waf",
  "AWS Well-Architected Framework",
  "AWS Well-Architected Framework",
  "Well-Architected provides workload design and review guidance organized into six pillars, rather than an organization-wide adoption program.",
  "Well-Architected menyediakan panduan desain dan peninjauan workload dalam enam pilar, bukan program adopsi cloud untuk seluruh organisasi.",
  wa + "welcome.html",
);
c(
  "tco",
  "Total cost of ownership (TCO)",
  "Total biaya kepemilikan (TCO)",
  "TCO includes direct and indirect costs such as facilities, hardware, licensing, and staff time; a server purchase price alone is incomplete.",
  "TCO mencakup biaya langsung dan tidak langsung seperti fasilitas, perangkat keras, lisensi, dan waktu staf; harga pembelian server saja tidak lengkap.",
  guide + "cloud-practitioner-02-domain1.html",
);
c(
  "rightsizing",
  "Rightsizing",
  "Rightsizing",
  "Rightsizing aligns resource size with observed requirements instead of keeping oversized capacity.",
  "Rightsizing menyesuaikan ukuran resource dengan kebutuhan yang teramati, bukan mempertahankan kapasitas berlebih.",
  wa + "cost-optimization.html",
);
c(
  "horizontal",
  "Horizontal scaling",
  "Penskalaan horizontal",
  "Horizontal scaling adds or removes resource instances, such as increasing the number of application servers.",
  "Penskalaan horizontal menambah atau mengurangi jumlah instance resource, misalnya menambah jumlah server aplikasi.",
  wa + "reliability.html",
);
c(
  "vertical",
  "Vertical scaling",
  "Penskalaan vertikal",
  "Vertical scaling changes the capacity of an individual resource, such as selecting a larger EC2 instance.",
  "Penskalaan vertikal mengubah kapasitas satu resource, misalnya memilih instance EC2 yang lebih besar.",
  wa + "reliability.html",
);
c(
  "decouple",
  "Loosely coupled components",
  "Komponen yang terhubung secara longgar",
  "Loose coupling reduces direct dependencies so one component's failure or processing speed has less impact on others.",
  "Keterhubungan longgar mengurangi ketergantungan langsung sehingga kegagalan atau kecepatan pemrosesan satu komponen tidak terlalu memengaruhi komponen lain.",
  wa + "reliability.html",
);
c(
  "monolith",
  "Tightly coupled components",
  "Komponen yang bergantung erat",
  "Tight coupling creates strong dependencies between components, making independent changes and failure isolation harder.",
  "Ketergantungan erat membuat komponen saling bergantung kuat sehingga perubahan independen dan isolasi kegagalan menjadi lebih sulit.",
  wa + "reliability.html",
);

q(
  1,
  "rapid-proof-of-concept",
  "A training company needs a temporary environment to test a new registration idea this afternoon. Which cloud benefit most directly shortens the wait for infrastructure?",
  "Perusahaan pelatihan membutuhkan lingkungan sementara untuk menguji ide pendaftaran baru sore ini. Manfaat cloud apa yang paling langsung mempersingkat waktu menunggu infrastruktur?",
  ["agility", "durability", "economies", "ha"],
);
q(
  1,
  "seasonal-capacity-return",
  "A ticketing website needs extra capacity during a concert sale and less capacity afterward. Which concept describes matching both increases and decreases in demand?",
  "Situs penjualan tiket membutuhkan kapasitas tambahan saat penjualan konser dan kapasitas lebih kecil setelahnya. Konsep apa yang menggambarkan penyesuaian terhadap kenaikan maupun penurunan permintaan?",
  ["elasticity", "durability", "global", "economies"],
);
q(
  1,
  "long-term-user-growth",
  "A startup expects its customer base to grow for several years and wants the platform to accommodate more users. Which cloud characteristic describes this ability to grow capacity?",
  "Startup memperkirakan jumlah pelanggannya terus bertambah selama beberapa tahun dan ingin platformnya mampu melayani lebih banyak pengguna. Karakteristik cloud apa yang menggambarkan kemampuan menambah kapasitas ini?",
  ["scale", "durability", "security", "operational"],
);
q(
  1,
  "avoid-hardware-upfront-purchase",
  "A new business rents compute capacity as needed instead of purchasing servers before it has customers. Which economic advantage is illustrated?",
  "Bisnis baru menyewa kapasitas komputasi sesuai kebutuhan alih-alih membeli server sebelum memiliki pelanggan. Keuntungan ekonomi apa yang ditunjukkan?",
  ["variable", "economies", "durability", "global"],
);
q(
  1,
  "aggregated-provider-purchasing",
  "A cloud provider combines infrastructure demand from many customers to operate at a scale that a small business cannot achieve alone. Which advantage does this illustrate?",
  "Penyedia cloud menggabungkan kebutuhan infrastruktur banyak pelanggan agar dapat beroperasi pada skala yang tidak dapat dicapai bisnis kecil sendirian. Keuntungan apa yang ditunjukkan?",
  ["economies", "agility", "ha", "decouple"],
);
q(
  1,
  "foreign-market-without-facility",
  "A retailer wants to launch near customers on another continent without first building a local data center. Which cloud advantage best fits this goal?",
  "Peritel ingin meluncurkan layanan dekat pelanggan di benua lain tanpa membangun pusat data setempat terlebih dahulu. Keuntungan cloud apa yang paling sesuai?",
  ["global", "durability", "vertical", "rightsizing"],
);
q(
  1,
  "less-routine-infrastructure-work",
  "A small engineering team chooses managed services so it can spend less time maintaining infrastructure and more time improving its product. Which cloud benefit is demonstrated?",
  "Tim engineering kecil memilih layanan terkelola agar lebih sedikit waktu dihabiskan untuk memelihara infrastruktur dan lebih banyak untuk meningkatkan produknya. Manfaat cloud apa yang ditunjukkan?",
  ["undiff", "economies", "horizontal", "durability"],
);
q(
  1,
  "regional-service-redundancy",
  "An application must remain accessible during a failure in one facility. The team introduces redundant application instances across Availability Zones. Which quality is the primary goal?",
  "Aplikasi harus tetap dapat diakses ketika satu fasilitas gagal. Tim menambahkan instance aplikasi redundan di beberapa Availability Zone. Kualitas apa yang menjadi tujuan utamanya?",
  ["ha", "durability", "variable", "agility"],
);
q(
  1,
  "archive-data-preservation",
  "A museum asks how well a storage solution protects files against permanent data loss over many years. Which characteristic is it evaluating?",
  "Museum ingin mengetahui seberapa baik solusi penyimpanan melindungi file dari kehilangan permanen selama bertahun-tahun. Karakteristik apa yang sedang dievaluasi?",
  ["durability", "ha", "agility", "horizontal"],
);
q(
  1,
  "failure-independent-components",
  "An order-taking service should continue accepting work while a downstream processor is temporarily unavailable. Which design principle supports this separation?",
  "Layanan penerima pesanan harus tetap menerima pekerjaan ketika pemroses di belakangnya sementara tidak tersedia. Prinsip desain apa yang mendukung pemisahan ini?",
  ["decouple", "monolith", "vertical", "repurchase"],
);
q(
  1,
  "larger-individual-server",
  "An administrator replaces an application server with a larger instance that has more memory, while keeping the server count unchanged. What type of scaling is this?",
  "Administrator mengganti server aplikasi dengan instance lebih besar yang memiliki lebih banyak memori, sementara jumlah server tetap. Jenis penskalaan apa ini?",
  ["vertical", "horizontal", "decouple", "retire"],
);
q(
  1,
  "more-identical-application-workers",
  "A processing platform increases throughput by adding more identical worker instances instead of enlarging each worker. What type of scaling is this?",
  "Platform pemrosesan meningkatkan throughput dengan menambahkan worker instance identik alih-alih memperbesar setiap worker. Jenis penskalaan apa ini?",
  ["horizontal", "vertical", "retain", "repurchase"],
);
q(
  1,
  "runbooks-after-incident",
  "After each incident, a team updates runbooks and improves its operational procedures. Which Well-Architected pillar most directly emphasizes this practice?",
  "Setelah setiap insiden, tim memperbarui runbook dan memperbaiki prosedur operasionalnya. Pilar Well-Architected mana yang paling langsung menekankan praktik ini?",
  ["operational", "performance", "sustainability", "cost"],
);
q(
  1,
  "environmental-resource-efficiency",
  "A company evaluates how to reduce the environmental impact of its cloud workload through more efficient resource use. Which Well-Architected pillar addresses this goal?",
  "Perusahaan mengevaluasi cara mengurangi dampak lingkungan workload cloud melalui penggunaan resource yang lebih efisien. Pilar Well-Architected mana yang membahas tujuan ini?",
  ["sustainability", "security", "operational", "reliability"],
);
q(
  1,
  "measured-compute-technology-choice",
  "A team benchmarks different compute options to find one that meets its workload's processing requirements efficiently. Which Well-Architected pillar is most directly involved?",
  "Tim membandingkan hasil benchmark beberapa pilihan komputasi untuk menemukan yang memenuhi kebutuhan pemrosesan workload secara efisien. Pilar Well-Architected mana yang paling langsung terkait?",
  ["performance", "security", "sustainability", "reliability"],
);
q(
  1,
  "restore-service-recovery-drill",
  "A company regularly tests whether its workload can recover after a component failure. Which Well-Architected pillar is the main focus of these exercises?",
  "Perusahaan rutin menguji apakah workload dapat pulih setelah kegagalan komponen. Pilar Well-Architected mana yang menjadi fokus utama latihan ini?",
  ["reliability", "cost", "performance", "security"],
);
q(
  1,
  "unchanged-accounting-vm-migration",
  "A business moves an accounting application from its own virtual machines to EC2 with minimal application changes. Which migration strategy best describes the move?",
  "Bisnis memindahkan aplikasi akuntansi dari virtual machine miliknya ke EC2 dengan perubahan aplikasi seminimal mungkin. Strategi migrasi apa yang paling sesuai?",
  ["rehost", "refactor", "repurchase", "retire"],
);
q(
  1,
  "managed-database-platform-adjustment",
  "During migration, a company keeps its application's architecture but replaces its self-managed database with Amazon RDS. Which migration strategy best describes this platform adjustment?",
  "Saat migrasi, perusahaan mempertahankan arsitektur aplikasinya tetapi mengganti database yang dikelola sendiri dengan Amazon RDS. Strategi migrasi apa yang menggambarkan penyesuaian platform ini?",
  ["replatform", "rehost", "repurchase", "retire"],
);
q(
  1,
  "subscription-crm-replacement",
  "A company replaces its internally hosted customer-management application with a SaaS subscription instead of migrating the application code. Which migration strategy is this?",
  "Perusahaan mengganti aplikasi pengelolaan pelanggan yang dihosting sendiri dengan langganan SaaS alih-alih memigrasikan kode aplikasinya. Strategi migrasi apa ini?",
  ["repurchase", "rehost", "refactor", "retain"],
);
q(
  1,
  "obsolete-application-removal",
  "An application inventory reveals a reporting application that nobody uses and no longer needs to run. Which migration strategy should be considered for this application?",
  "Inventaris aplikasi menemukan aplikasi pelaporan yang tidak digunakan siapa pun dan tidak perlu dijalankan lagi. Strategi migrasi apa yang sebaiknya dipertimbangkan?",
  ["retire", "retain", "replatform", "refactor"],
);
q(
  1,
  "organization-cloud-readiness",
  "Executives want guidance on preparing business processes, staff skills, governance, and technical capabilities for cloud adoption. Which AWS framework is designed for this organization-wide preparation?",
  "Pimpinan membutuhkan panduan untuk menyiapkan proses bisnis, keterampilan staf, tata kelola, dan kapabilitas teknis bagi adopsi cloud. Kerangka AWS apa yang dirancang untuk persiapan seluruh organisasi ini?",
  ["caf", "waf", "rightsizing", "tco"],
);
q(
  1,
  "facility-and-labor-comparison",
  "A finance team compares running an application on premises with running it in AWS. It includes power, building space, hardware, and administrator time. What is this broad comparison evaluating?",
  "Tim keuangan membandingkan menjalankan aplikasi on-premises dengan di AWS. Perhitungan mencakup listrik, ruang gedung, perangkat keras, dan waktu administrator. Apa yang sedang dievaluasi?",
  ["tco", "economies", "agility", "durability"],
);
q(
  1,
  "cost-actions-idle-and-oversized",
  "A team finds that its cloud environment contains oversized servers and temporary test systems that are no longer needed. Which TWO actions directly reduce unnecessary resource consumption?",
  "Tim menemukan server berukuran berlebihan dan sistem pengujian sementara yang tidak lagi dibutuhkan. DUA tindakan apa yang langsung mengurangi konsumsi resource yang tidak diperlukan?",
  ["rightsizing", "retire", "global", "vertical", "retain"],
  [0, 1],
);
q(
  1,
  "architecture-redesign-or-defer",
  "A migration review describes two workloads: one will be redesigned to use cloud-native services, and another will remain on premises for now. Which TWO strategies match these decisions?",
  "Peninjauan migrasi membahas dua workload: satu akan didesain ulang memakai layanan cloud-native, sedangkan satu lagi tetap on-premises untuk saat ini. DUA strategi apa yang sesuai?",
  ["refactor", "retain", "retire", "rehost", "repurchase"],
  [0, 1],
);

const docs = "https://docs.aws.amazon.com/";
const shared = "https://aws.amazon.com/compliance/shared-responsibility-model/";
c(
  "awsPhysical",
  "AWS protects physical data center access",
  "AWS melindungi akses fisik pusat data",
  "AWS is responsible for security of the underlying cloud infrastructure, including physical facilities.",
  "AWS bertanggung jawab atas keamanan infrastruktur cloud yang mendasarinya, termasuk fasilitas fisik.",
  shared,
);
c(
  "guestPatch",
  "The customer patches the EC2 guest operating system",
  "Pelanggan melakukan patch sistem operasi guest EC2",
  "Customers manage guest operating systems on EC2; AWS manages the underlying infrastructure.",
  "Pelanggan mengelola sistem operasi guest pada EC2; AWS mengelola infrastruktur yang mendasarinya.",
  shared,
);
c(
  "dataAccess",
  "The customer controls access to its data",
  "Pelanggan mengendalikan akses ke datanya",
  "Customers remain responsible for deciding who may access their data, even when using managed services.",
  "Pelanggan tetap bertanggung jawab menentukan siapa yang boleh mengakses datanya, termasuk ketika memakai layanan terkelola.",
  shared,
);
c(
  "lambdaHost",
  "AWS patches the underlying Lambda infrastructure",
  "AWS melakukan patch infrastruktur yang mendasari Lambda",
  "Lambda removes customer management of the underlying servers; customers still manage their function code and relevant dependencies.",
  "Lambda menghilangkan kebutuhan pelanggan mengelola server yang mendasarinya; pelanggan tetap mengelola kode fungsi dan dependensi terkait.",
  shared,
);
c(
  "customerCode",
  "The customer maintains application code and dependencies",
  "Pelanggan memelihara kode aplikasi dan dependensinya",
  "Application logic and customer-provided dependencies remain customer responsibilities rather than becoming AWS responsibilities automatically.",
  "Logika aplikasi dan dependensi yang disediakan pelanggan tetap menjadi tanggung jawab pelanggan, bukan otomatis menjadi tanggung jawab AWS.",
  shared,
);
c(
  "iam",
  "AWS Identity and Access Management (IAM)",
  "AWS Identity and Access Management (IAM)",
  "IAM manages identities and permissions that control access to AWS resources.",
  "IAM mengelola identitas dan izin yang mengendalikan akses ke resource AWS.",
  docs + "IAM/latest/UserGuide/introduction.html",
);
c(
  "role",
  "IAM role",
  "IAM role",
  "An IAM role can provide temporary credentials for an authorized identity or workload, avoiding embedded long-term access keys.",
  "IAM role dapat menyediakan kredensial sementara bagi identitas atau workload yang diizinkan sehingga access key jangka panjang tidak perlu ditanamkan.",
  docs + "IAM/latest/UserGuide/id_roles.html",
);
c(
  "user",
  "IAM user with a long-term access key",
  "IAM user dengan access key jangka panjang",
  "An IAM user can have long-term credentials; these require protection and rotation and are not the preferred substitute for an available workload role.",
  "IAM user dapat memiliki kredensial jangka panjang yang perlu dilindungi dan dirotasi; kredensial ini bukan pengganti utama ketika workload dapat memakai role.",
  docs + "IAM/latest/UserGuide/id_users.html",
);
c(
  "group",
  "IAM user group",
  "Grup pengguna IAM",
  "An IAM user group associates permissions with a collection of IAM users; it is not a workload identity and cannot be assumed like a role.",
  "Grup pengguna IAM mengaitkan izin dengan sekumpulan IAM user; grup bukan identitas workload dan tidak dapat diasumsikan seperti role.",
  docs + "IAM/latest/UserGuide/id_groups.html",
);
c(
  "policy",
  "IAM policy",
  "IAM policy",
  "An IAM policy describes allowed or denied actions and relevant resources; it is a permissions document, not a password or encryption key.",
  "IAM policy menjelaskan tindakan yang diizinkan atau ditolak beserta resource terkait; policy merupakan dokumen izin, bukan kata sandi atau kunci enkripsi.",
  docs + "IAM/latest/UserGuide/access_policies.html",
);
c(
  "least",
  "Least privilege",
  "Hak akses minimum",
  "Least privilege grants the permissions needed for a task and avoids unnecessary administrative access.",
  "Hak akses minimum memberikan izin yang dibutuhkan untuk tugas tertentu dan menghindari akses administratif yang tidak diperlukan.",
  docs + "IAM/latest/UserGuide/best-practices.html",
);
c(
  "mfa",
  "Multi-factor authentication (MFA)",
  "Autentikasi multifaktor (MFA)",
  "MFA requires an additional authentication factor, helping protect an account when its password alone is compromised.",
  "MFA memerlukan faktor autentikasi tambahan sehingga membantu melindungi akun ketika kata sandinya saja diketahui pihak lain.",
  docs + "IAM/latest/UserGuide/id_credentials_mfa.html",
);
c(
  "sso",
  "AWS IAM Identity Center",
  "AWS IAM Identity Center",
  "IAM Identity Center centrally manages workforce access to multiple AWS accounts and supported applications.",
  "IAM Identity Center mengelola akses tenaga kerja ke beberapa akun AWS dan aplikasi yang didukung secara terpusat.",
  docs + "singlesignon/latest/userguide/what-is.html",
);
c(
  "cognito",
  "Amazon Cognito",
  "Amazon Cognito",
  "Cognito supports user sign-up, sign-in, and access management for customer-facing applications; it is distinct from workforce account administration.",
  "Cognito mendukung pendaftaran, login, dan pengelolaan akses pengguna aplikasi pelanggan; fungsinya berbeda dari administrasi akun tenaga kerja.",
  docs + "cognito/latest/developerguide/what-is-amazon-cognito.html",
);
c(
  "organizations",
  "AWS Organizations",
  "AWS Organizations",
  "Organizations centrally groups and governs AWS accounts and supports consolidated billing; it does not itself replace user authentication.",
  "Organizations mengelompokkan dan mengatur akun AWS secara terpusat serta mendukung tagihan gabungan; layanan ini tidak menggantikan autentikasi pengguna.",
  docs + "organizations/latest/userguide/orgs_introduction.html",
);
c(
  "scp",
  "Service control policies (SCPs)",
  "Service control policy (SCP)",
  "SCPs set maximum available permissions for affected member accounts; they do not grant permissions by themselves.",
  "SCP menetapkan batas maksimum izin yang tersedia bagi akun anggota yang terpengaruh; SCP tidak memberikan izin dengan sendirinya.",
  docs + "organizations/latest/userguide/orgs_manage_policies_scps.html",
);
c(
  "trail",
  "AWS CloudTrail",
  "AWS CloudTrail",
  "CloudTrail records account activity and API actions, including information about the caller, for auditing.",
  "CloudTrail mencatat aktivitas akun dan tindakan API, termasuk informasi pemanggil, untuk keperluan audit.",
  docs + "awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
);
c(
  "config",
  "AWS Config",
  "AWS Config",
  "Config records resource configuration history and can evaluate resource compliance against rules.",
  "Config mencatat riwayat konfigurasi resource dan dapat mengevaluasi kepatuhan resource terhadap aturan.",
  docs + "config/latest/developerguide/WhatIsConfig.html",
);
c(
  "guard",
  "Amazon GuardDuty",
  "Amazon GuardDuty",
  "GuardDuty analyzes supported telemetry for malicious or suspicious activity; it is threat detection rather than a software patching service.",
  "GuardDuty menganalisis telemetri yang didukung untuk aktivitas berbahaya atau mencurigakan; fungsinya deteksi ancaman, bukan pemasangan patch perangkat lunak.",
  docs + "guardduty/latest/ug/what-is-guardduty.html",
);
c(
  "inspector",
  "Amazon Inspector",
  "Amazon Inspector",
  "Inspector discovers software vulnerabilities and unintended network exposure in supported workloads.",
  "Inspector menemukan kerentanan perangkat lunak dan paparan jaringan yang tidak diinginkan pada workload yang didukung.",
  docs + "inspector/latest/user/what-is-inspector.html",
);
c(
  "macie",
  "Amazon Macie",
  "Amazon Macie",
  "Macie helps discover and protect sensitive data in Amazon S3, such as personally identifiable information.",
  "Macie membantu menemukan dan melindungi data sensitif di Amazon S3, seperti informasi identitas pribadi.",
  docs + "macie/latest/user/what-is-macie.html",
);
c(
  "securityhub",
  "AWS Security Hub",
  "AWS Security Hub",
  "Security Hub helps centralize and prioritize security information from integrated AWS security capabilities.",
  "Security Hub membantu memusatkan dan memprioritaskan informasi keamanan dari kapabilitas keamanan AWS yang terintegrasi.",
  docs + "securityhub/latest/userguide/what-is-securityhub.html",
);
c(
  "artifact",
  "AWS Artifact",
  "AWS Artifact",
  "Artifact provides access to AWS security and compliance reports and certain agreements; it does not certify a customer's entire workload automatically.",
  "Artifact menyediakan akses ke laporan keamanan dan kepatuhan AWS serta perjanjian tertentu; layanan ini tidak otomatis menyertifikasi seluruh workload pelanggan.",
  docs + "artifact/latest/ug/what-is-aws-artifact.html",
);
c(
  "wafService",
  "AWS WAF",
  "AWS WAF",
  "AWS WAF filters web requests using rules, including rules that help block common application-layer exploits.",
  "AWS WAF memfilter permintaan web memakai aturan, termasuk aturan untuk membantu memblokir eksploitasi umum pada lapisan aplikasi.",
  docs + "waf/latest/developerguide/what-is-aws-waf.html",
);
c(
  "shield",
  "AWS Shield",
  "AWS Shield",
  "AWS Shield provides managed protection against distributed denial-of-service attacks; it is distinct from web request content filtering.",
  "AWS Shield menyediakan perlindungan terkelola terhadap serangan distributed denial-of-service; fungsinya berbeda dari pemfilteran isi permintaan web.",
  docs + "waf/latest/developerguide/shield-chapter.html",
);
c(
  "kms",
  "AWS Key Management Service (AWS KMS)",
  "AWS Key Management Service (AWS KMS)",
  "KMS manages cryptographic keys and supports encryption integrations; storing application passwords is a separate secret-management task.",
  "KMS mengelola kunci kriptografi dan mendukung integrasi enkripsi; penyimpanan kata sandi aplikasi merupakan tugas pengelolaan secret yang berbeda.",
  docs + "kms/latest/developerguide/overview.html",
);
c(
  "secrets",
  "AWS Secrets Manager",
  "AWS Secrets Manager",
  "Secrets Manager stores and retrieves secrets such as database credentials and supports managed rotation workflows.",
  "Secrets Manager menyimpan dan mengambil secret seperti kredensial database serta mendukung alur rotasi terkelola.",
  docs + "secretsmanager/latest/userguide/intro.html",
);
c(
  "acm",
  "AWS Certificate Manager (ACM)",
  "AWS Certificate Manager (ACM)",
  "ACM provisions and manages TLS certificates for use with supported integrated AWS services.",
  "ACM menyediakan dan mengelola sertifikat TLS untuk digunakan bersama layanan AWS terintegrasi yang didukung.",
  docs + "acm/latest/userguide/acm-overview.html",
);
c(
  "sg",
  "Security group",
  "Security group",
  "A security group is a stateful virtual firewall associated with supported resources such as EC2 network interfaces.",
  "Security group merupakan firewall virtual stateful yang dikaitkan dengan resource yang didukung, seperti network interface EC2.",
  docs + "vpc/latest/userguide/vpc-security-groups.html",
);
c(
  "nacl",
  "Network ACL",
  "Network ACL",
  "A network ACL is a stateless traffic filter at the subnet level and can contain allow and deny rules.",
  "Network ACL merupakan filter trafik stateless pada tingkat subnet yang dapat memiliki aturan allow dan deny.",
  docs + "vpc/latest/userguide/vpc-network-acls.html",
);
c(
  "publicblock",
  "S3 Block Public Access",
  "S3 Block Public Access",
  "S3 Block Public Access helps prevent public access through bucket policies and access control lists; it does not delete stored objects.",
  "S3 Block Public Access membantu mencegah akses publik melalui bucket policy dan access control list; fitur ini tidak menghapus objek yang disimpan.",
  docs + "AmazonS3/latest/userguide/access-control-block-public-access.html",
);
c(
  "transit",
  "Encryption in transit",
  "Enkripsi data dalam perjalanan",
  "Encryption in transit protects data while it moves between systems, commonly using TLS.",
  "Enkripsi dalam perjalanan melindungi data saat berpindah antarsistem, umumnya memakai TLS.",
  guide + "cloud-practitioner-02-domain2.html",
);
c(
  "rest",
  "Encryption at rest",
  "Enkripsi data saat tersimpan",
  "Encryption at rest protects stored data, such as objects or database files, rather than traffic moving between systems.",
  "Enkripsi saat tersimpan melindungi data yang disimpan, seperti objek atau file database, bukan trafik yang berpindah antarsistem.",
  guide + "cloud-practitioner-02-domain2.html",
);
c(
  "authenticate",
  "Authentication",
  "Autentikasi",
  "Authentication verifies the identity of a user or system; deciding which actions that identity may perform is authorization.",
  "Autentikasi memverifikasi identitas pengguna atau sistem; penentuan tindakan yang boleh dilakukannya merupakan otorisasi.",
  docs + "IAM/latest/UserGuide/intro-structure.html",
);
c(
  "authorize",
  "Authorization",
  "Otorisasi",
  "Authorization determines whether an identified principal may perform an action on a resource.",
  "Otorisasi menentukan apakah principal yang sudah diidentifikasi boleh melakukan suatu tindakan terhadap resource.",
  docs + "IAM/latest/UserGuide/intro-structure.html",
);

q(
  2,
  "physical-badge-controls",
  "A company asks who manages badge access and security guards at an AWS data center. Which statement follows the shared responsibility model?",
  "Perusahaan bertanya siapa yang mengelola akses kartu identitas dan petugas keamanan di pusat data AWS. Pernyataan mana yang sesuai dengan model tanggung jawab bersama?",
  ["awsPhysical", "guestPatch", "dataAccess", "customerCode"],
);
q(
  2,
  "customer-third-party-licensing",
  "A business installs third-party software on its EC2 instances. Who must ensure that its chosen software use complies with the applicable licensing terms?",
  "Bisnis memasang perangkat lunak pihak ketiga pada instance EC2. Siapa yang harus memastikan penggunaan perangkat lunak pilihannya memenuhi ketentuan lisensi yang berlaku?",
  ["licenses", "awsPhysical", "lambdaHost", "guestPatch"],
);
q(
  2,
  "managed-serverless-host-patching",
  "A developer moves a scheduled function from a self-managed server to AWS Lambda. Which responsibility for the underlying service infrastructure is handled by AWS?",
  "Developer memindahkan fungsi terjadwal dari server yang dikelola sendiri ke AWS Lambda. Tanggung jawab infrastruktur layanan apa yang ditangani AWS?",
  ["lambdaHost", "dataAccess", "customerCode", "guestPatch"],
);
q(
  2,
  "customer-records-access-ownership",
  "A company stores customer records in a managed AWS database. Which responsibility still belongs to the company?",
  "Perusahaan menyimpan catatan pelanggan di database AWS terkelola. Tanggung jawab apa yang tetap dimiliki perusahaan?",
  ["dataAccess", "awsPhysical", "lambdaHost", "economies"],
);
q(
  2,
  "task-only-data-reader",
  "An intern only needs to read reports from a particular storage location. The administrator avoids granting account-wide administrator permissions. Which security principle is being applied?",
  "Peserta magang hanya perlu membaca laporan dari lokasi penyimpanan tertentu. Administrator menghindari pemberian izin administrator seluruh akun. Prinsip keamanan apa yang diterapkan?",
  ["least", "mfa", "authenticate", "rest"],
);
q(
  2,
  "lost-password-additional-factor",
  "A company wants sign-in protection that remains useful if an employee's password is stolen. Which control adds another authentication factor?",
  "Perusahaan ingin melindungi proses login meskipun kata sandi karyawan dicuri. Kontrol apa yang menambahkan faktor autentikasi lain?",
  ["mfa", "policy", "rest", "sg"],
);
q(
  2,
  "temporary-consultant-workload-credentials",
  "A temporary automation task needs AWS permissions without embedding a permanent access key in its program. Which identity mechanism is most suitable?",
  "Tugas otomatisasi sementara membutuhkan izin AWS tanpa menanamkan access key permanen dalam program. Mekanisme identitas apa yang paling sesuai?",
  ["role", "user", "group", "policy"],
);
q(
  2,
  "team-of-iam-users-permissions",
  "An existing account contains several IAM users who all require the same job permissions. Which IAM feature can organize these users so permissions do not need to be attached separately to each user?",
  "Satu akun memiliki beberapa IAM user yang membutuhkan izin pekerjaan yang sama. Fitur IAM apa yang dapat mengelompokkan mereka agar izin tidak perlu dipasang satu per satu?",
  ["group", "role", "kms", "cognito"],
);
q(
  2,
  "permissions-document-recognition",
  "An administrator reviews a document that lists allowed actions and the AWS resources those actions apply to. What IAM component is the administrator reviewing?",
  "Administrator meninjau dokumen yang mencantumkan tindakan yang diizinkan dan resource AWS tempat tindakan itu berlaku. Komponen IAM apa yang sedang ditinjau?",
  ["policy", "group", "mfa", "kms"],
);
q(
  2,
  "employee-access-multiple-accounts",
  "Employees need centrally managed access to development, test, and production AWS accounts using their workforce identities. Which service is designed for this access-management use case?",
  "Karyawan membutuhkan pengelolaan akses terpusat ke akun AWS pengembangan, pengujian, dan produksi menggunakan identitas tenaga kerja. Layanan apa yang dirancang untuk kebutuhan ini?",
  ["sso", "cognito", "macie", "artifact"],
);
q(
  2,
  "consumer-app-registration",
  "A mobile shopping application needs customer sign-up and sign-in capabilities. Which AWS service is most appropriate for these application users?",
  "Aplikasi belanja seluler membutuhkan kemampuan pendaftaran dan login pelanggan. Layanan AWS apa yang paling tepat untuk pengguna aplikasi tersebut?",
  ["cognito", "sso", "organizations", "config"],
);
q(
  2,
  "identify-console-action-caller",
  "A database setting was changed yesterday. The security team wants to identify the AWS API action and the identity that performed it. Which service provides the relevant audit history?",
  "Pengaturan database diubah kemarin. Tim keamanan ingin mengidentifikasi tindakan API AWS serta identitas pelakunya. Layanan apa yang menyediakan riwayat audit yang relevan?",
  ["trail", "config", "inspector", "macie"],
);
q(
  2,
  "historical-security-group-settings",
  "An auditor needs a history of a security group's configuration and whether it complies with a defined rule. Which AWS service best fits this requirement?",
  "Auditor membutuhkan riwayat konfigurasi security group beserta kesesuaiannya dengan aturan yang ditetapkan. Layanan AWS apa yang paling sesuai?",
  ["config", "trail", "shield", "acm"],
);
q(
  2,
  "suspicious-account-behavior",
  "A security team wants a managed service that analyzes supported AWS telemetry to detect suspicious account and workload activity. Which service should it consider?",
  "Tim keamanan membutuhkan layanan terkelola yang menganalisis telemetri AWS yang didukung untuk mendeteksi aktivitas akun dan workload yang mencurigakan. Layanan apa yang sebaiknya dipertimbangkan?",
  ["guard", "inspector", "macie", "artifact"],
);
q(
  2,
  "lambda-dependency-vulnerability-scanning",
  "A developer wants to find known vulnerabilities in supported third-party packages used by Lambda functions. Which AWS security service provides this vulnerability-scanning capability?",
  "Developer ingin menemukan kerentanan yang diketahui pada paket pihak ketiga yang didukung dalam fungsi Lambda. Layanan keamanan AWS apa yang menyediakan kemampuan pemindaian kerentanan ini?",
  ["inspector", "guard", "macie", "artifact"],
);
q(
  2,
  "discover-sensitive-s3-records",
  "A compliance team needs to find sensitive personal information in files stored in S3. Which service specializes in discovering this type of data?",
  "Tim kepatuhan perlu menemukan informasi pribadi sensitif dalam file yang disimpan di S3. Layanan apa yang khusus membantu penemuan jenis data ini?",
  ["macie", "inspector", "acm", "trail"],
);
q(
  2,
  "central-security-findings-view",
  "A company uses several AWS security capabilities and wants to centralize and prioritize their security information. Which service is intended to provide this broader security view?",
  "Perusahaan memakai beberapa kapabilitas keamanan AWS dan ingin memusatkan serta memprioritaskan informasi keamanannya. Layanan apa yang ditujukan untuk tampilan keamanan yang lebih menyeluruh ini?",
  ["securityhub", "artifact", "kms", "cognito"],
);
q(
  2,
  "download-provider-compliance-reports",
  "An auditor requests AWS compliance reports such as applicable SOC reports. Which service should the company use to obtain these provider reports?",
  "Auditor meminta laporan kepatuhan AWS seperti laporan SOC yang relevan. Layanan apa yang sebaiknya digunakan perusahaan untuk memperoleh laporan penyedia tersebut?",
  ["artifact", "config", "guard", "macie"],
);
q(
  2,
  "block-web-injection-requests",
  "A public web application needs rules that inspect HTTP requests and help block common SQL injection attempts. Which AWS service provides this application-layer filtering?",
  "Aplikasi web publik membutuhkan aturan yang memeriksa permintaan HTTP dan membantu memblokir upaya SQL injection yang umum. Layanan AWS apa yang menyediakan pemfilteran lapisan aplikasi ini?",
  ["wafService", "shield", "sg", "nacl"],
);
q(
  2,
  "ddos-managed-protection",
  "A company asks which AWS service is specifically focused on managed protection against distributed denial-of-service attacks. Which service meets that description?",
  "Perusahaan bertanya layanan AWS apa yang secara khusus berfokus pada perlindungan terkelola terhadap serangan distributed denial-of-service. Layanan apa yang sesuai?",
  ["shield", "wafService", "inspector", "acm"],
);
q(
  2,
  "manage-encryption-key-permissions",
  "A team needs centralized control over cryptographic keys used by AWS services to encrypt its data. Which service should it use?",
  "Tim membutuhkan kontrol terpusat atas kunci kriptografi yang digunakan layanan AWS untuk mengenkripsi datanya. Layanan apa yang sebaiknya digunakan?",
  ["kms", "secrets", "acm", "artifact"],
);
q(
  2,
  "database-password-rotation-service",
  "An application currently stores a database password in a configuration file. The team wants a dedicated service to store the secret and support rotation. Which service fits?",
  "Aplikasi saat ini menyimpan kata sandi database dalam file konfigurasi. Tim membutuhkan layanan khusus untuk menyimpan secret dan mendukung rotasi. Layanan apa yang sesuai?",
  ["secrets", "kms", "acm", "trail"],
);
q(
  2,
  "tls-certificate-management",
  "A website uses a supported AWS load balancer and needs a managed way to provision its TLS certificate. Which service is designed for this purpose?",
  "Situs web memakai load balancer AWS yang didukung dan membutuhkan cara terkelola untuk menyediakan sertifikat TLS. Layanan apa yang dirancang untuk tujuan ini?",
  ["acm", "kms", "secrets", "shield"],
);
q(
  2,
  "instance-stateful-firewall",
  "A cloud learner needs to identify the stateful virtual firewall used to control traffic for an EC2 instance's network interface. Which component is it?",
  "Peserta pelatihan perlu mengidentifikasi firewall virtual stateful yang mengendalikan trafik pada network interface instance EC2. Komponen apa yang dimaksud?",
  ["sg", "nacl", "wafService", "shield"],
);
q(
  2,
  "subnet-stateless-filter",
  "A network team asks for the AWS subnet-level traffic filter that supports both allow and deny rules and is stateless. Which component fits?",
  "Tim jaringan bertanya tentang filter trafik AWS tingkat subnet yang mendukung aturan allow dan deny serta bersifat stateless. Komponen apa yang sesuai?",
  ["nacl", "sg", "wafService", "policy"],
);
q(
  2,
  "restrict-org-account-permission-ceiling",
  "An organization wants a permission guardrail that limits what affected member accounts can allow, even if local administrators attach broader IAM policies. Which mechanism provides this limit?",
  "Organisasi membutuhkan pembatas izin bagi akun anggota yang terpengaruh, meskipun administrator lokal memasang IAM policy lebih luas. Mekanisme apa yang menyediakan batas tersebut?",
  ["scp", "group", "role", "mfa"],
);
q(
  2,
  "prevent-accidental-public-object-access",
  "A company wants a protective S3 control against accidental public access caused by bucket policies or ACLs. Which feature should it evaluate?",
  "Perusahaan membutuhkan kontrol perlindungan S3 terhadap akses publik yang tidak disengaja akibat bucket policy atau ACL. Fitur apa yang sebaiknya dievaluasi?",
  ["publicblock", "rest", "kms", "config"],
);
q(
  2,
  "verify-identity-versus-permissions",
  "A sign-in process verifies a user's identity before the system checks what the user may do. What is the identity-verification step called?",
  "Proses login memverifikasi identitas pengguna sebelum sistem memeriksa tindakan yang boleh dilakukan. Apa nama tahap verifikasi identitas tersebut?",
  ["authenticate", "authorize", "rest", "least"],
);
q(
  2,
  "data-protection-at-rest-in-transit",
  "A company wants to protect both files stored on disk and data sent between its application and clients. Which TWO protection categories address these different states?",
  "Perusahaan ingin melindungi file yang disimpan pada disk dan data yang dikirim antara aplikasi dan klien. DUA kategori perlindungan apa yang membahas kedua keadaan tersebut?",
  ["rest", "transit", "mfa", "group", "rightsizing"],
  [0, 1],
);
q(
  2,
  "serverless-customer-duties",
  "A team uses Lambda and assumes it no longer has any security responsibilities. Which TWO responsibilities still belong to the customer?",
  "Tim memakai Lambda dan mengira tidak lagi memiliki tanggung jawab keamanan. DUA tanggung jawab apa yang tetap dimiliki pelanggan?",
  ["customerCode", "dataAccess", "awsPhysical", "lambdaHost", "economies"],
  [0, 1],
);

c(
  "console",
  "AWS Management Console",
  "AWS Management Console",
  "The console is the browser-based graphical interface for accessing and managing AWS services.",
  "Console merupakan antarmuka grafis berbasis browser untuk mengakses dan mengelola layanan AWS.",
  docs + "awsconsolehelpdocs/latest/gsg/getting-started.html",
);
c(
  "cli",
  "AWS Command Line Interface (AWS CLI)",
  "AWS Command Line Interface (AWS CLI)",
  "The AWS CLI manages services through commands and can be used in shell scripts; it differs from a graphical console or an application SDK.",
  "AWS CLI mengelola layanan melalui perintah dan dapat digunakan dalam skrip shell; fungsinya berbeda dari console grafis atau SDK aplikasi.",
  docs + "cli/latest/userguide/cli-chap-welcome.html",
);
c(
  "sdk",
  "AWS SDK",
  "AWS SDK",
  "An AWS SDK provides language-specific libraries that applications use to call AWS services programmatically.",
  "AWS SDK menyediakan pustaka khusus bahasa pemrograman agar aplikasi dapat memanggil layanan AWS secara terprogram.",
  guide + "cloud-practitioner-02-domain3.html",
);
c(
  "cfn",
  "AWS CloudFormation",
  "AWS CloudFormation",
  "CloudFormation provisions and manages related AWS resources from infrastructure-as-code templates, supporting repeatable deployments.",
  "CloudFormation menyediakan dan mengelola resource AWS yang terkait dari template infrastructure as code sehingga mendukung deployment berulang.",
  docs + "AWSCloudFormation/latest/UserGuide/Welcome.html",
);
c(
  "region",
  "AWS Region",
  "AWS Region",
  "A Region is a separate geographic area containing multiple Availability Zones; choosing Regions can help address geographic and data-residency requirements.",
  "Region merupakan area geografis terpisah yang berisi beberapa Availability Zone; pemilihan Region dapat membantu memenuhi kebutuhan geografis dan lokasi data.",
  docs + "global-infrastructure/latest/regions/aws-regions.html",
);
c(
  "az",
  "Availability Zone",
  "Availability Zone",
  "An Availability Zone consists of one or more discrete data centers with redundant facilities within a Region.",
  "Availability Zone terdiri atas satu atau beberapa pusat data terpisah dengan fasilitas redundan di dalam sebuah Region.",
  docs +
    "global-infrastructure/latest/regions/aws-regions-availability-zones.html",
);
c(
  "edge",
  "Edge location",
  "Edge location",
  "An edge location serves workloads such as content delivery near end users; it is different from a full AWS Region or Availability Zone.",
  "Edge location melayani kebutuhan seperti pengiriman konten dekat pengguna akhir; edge location berbeda dari Region atau Availability Zone AWS.",
  docs + "AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
);
c(
  "multiaz",
  "Deploy across multiple Availability Zones",
  "Deployment di beberapa Availability Zone",
  "Multiple Availability Zones provide isolation from a single-zone failure while keeping resources within the selected Region.",
  "Beberapa Availability Zone menyediakan isolasi dari kegagalan satu zona sambil mempertahankan resource di Region yang dipilih.",
  guide + "cloud-practitioner-02-domain3.html",
);
c(
  "hybrid",
  "Hybrid cloud",
  "Hybrid cloud",
  "A hybrid deployment combines cloud resources with an existing on-premises environment.",
  "Deployment hybrid menggabungkan resource cloud dengan lingkungan on-premises yang sudah ada.",
  overview + "types-of-cloud-computing.html",
);
c(
  "cloudonly",
  "Cloud deployment",
  "Deployment cloud",
  "A cloud deployment runs the relevant workload in the cloud rather than splitting it between cloud and on-premises environments.",
  "Deployment cloud menjalankan workload terkait di cloud, bukan membaginya antara cloud dan lingkungan on-premises.",
  overview + "types-of-cloud-computing.html",
);
c(
  "onprem",
  "On-premises deployment",
  "Deployment on-premises",
  "An on-premises deployment uses the organization's local infrastructure rather than deploying the workload on public cloud resources.",
  "Deployment on-premises memakai infrastruktur lokal organisasi, bukan menempatkan workload pada resource public cloud.",
  overview + "types-of-cloud-computing.html",
);
c(
  "ec2",
  "Amazon EC2",
  "Amazon EC2",
  "EC2 provides virtual servers with control over the guest operating system; customers manage that operating system and their applications.",
  "EC2 menyediakan server virtual dengan kendali atas sistem operasi guest; pelanggan mengelola sistem operasi dan aplikasinya.",
  docs + "AWSEC2/latest/UserGuide/concepts.html",
);
c(
  "lambda",
  "AWS Lambda",
  "AWS Lambda",
  "Lambda runs function code in response to events without customers provisioning or managing the underlying servers.",
  "Lambda menjalankan kode fungsi sebagai respons terhadap event tanpa pelanggan menyediakan atau mengelola server yang mendasarinya.",
  docs + "lambda/latest/dg/welcome.html",
);
c(
  "fargate",
  "AWS Fargate",
  "AWS Fargate",
  "Fargate provides serverless compute for supported container workloads so customers do not manage the worker servers.",
  "Fargate menyediakan komputasi serverless untuk workload container yang didukung sehingga pelanggan tidak mengelola server worker.",
  docs + "AmazonECS/latest/developerguide/AWS_Fargate.html",
);
c(
  "ecs",
  "Amazon ECS",
  "Amazon ECS",
  "ECS is a managed container orchestration service; containers can run using options such as EC2 capacity or Fargate.",
  "ECS merupakan layanan orkestrasi container terkelola; container dapat dijalankan menggunakan pilihan seperti kapasitas EC2 atau Fargate.",
  docs + "AmazonECS/latest/developerguide/Welcome.html",
);
c(
  "eks",
  "Amazon EKS",
  "Amazon EKS",
  "EKS provides managed Kubernetes capabilities; choosing Kubernetes is distinct from choosing a function runtime or a virtual machine.",
  "EKS menyediakan kapabilitas Kubernetes terkelola; pemilihan Kubernetes berbeda dari memilih runtime fungsi atau virtual machine.",
  docs + "eks/latest/userguide/what-is-eks.html",
);
c(
  "rds",
  "Amazon RDS",
  "Amazon RDS",
  "RDS manages common relational database administration tasks for supported engines, such as backups and database software maintenance.",
  "RDS mengelola tugas administrasi database relasional umum pada engine yang didukung, seperti backup dan pemeliharaan perangkat lunak database.",
  docs + "AmazonRDS/latest/UserGuide/Welcome.html",
);
c(
  "aurora",
  "Amazon Aurora",
  "Amazon Aurora",
  "Aurora is an AWS relational database engine compatible with MySQL or PostgreSQL; it is not a key-value database or a data warehouse.",
  "Aurora merupakan engine database relasional AWS yang kompatibel dengan MySQL atau PostgreSQL; Aurora bukan database key-value atau data warehouse.",
  docs + "AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html",
);
c(
  "dynamo",
  "Amazon DynamoDB",
  "Amazon DynamoDB",
  "DynamoDB is a managed NoSQL database for key-value and document data with low-latency access patterns.",
  "DynamoDB merupakan database NoSQL terkelola untuk data key-value dan dokumen dengan pola akses berlatensi rendah.",
  docs + "amazondynamodb/latest/developerguide/Introduction.html",
);
c(
  "redshift",
  "Amazon Redshift",
  "Amazon Redshift",
  "Redshift is a managed data warehouse designed for analytical queries over large datasets rather than a general-purpose transactional database.",
  "Redshift merupakan data warehouse terkelola untuk kueri analitik atas dataset besar, bukan database transaksional serbaguna.",
  docs + "redshift/latest/mgmt/welcome.html",
);
c(
  "elasticache",
  "Amazon ElastiCache",
  "Amazon ElastiCache",
  "ElastiCache provides managed in-memory caching that can reduce repeated reads against an application's primary database.",
  "ElastiCache menyediakan cache dalam memori terkelola yang dapat mengurangi pembacaan berulang terhadap database utama aplikasi.",
  docs + "AmazonElastiCache/latest/dg/WhatIs.html",
);
c(
  "s3",
  "Amazon S3",
  "Amazon S3",
  "S3 stores data as objects in buckets; it is not a VM-attached block device or an NFS file system.",
  "S3 menyimpan data sebagai objek dalam bucket; S3 bukan perangkat blok yang dipasang ke VM atau file system NFS.",
  docs + "AmazonS3/latest/userguide/Welcome.html",
);
c(
  "ebs",
  "Amazon EBS",
  "Amazon EBS",
  "EBS provides persistent block storage volumes for use with EC2 instances, including operating-system and application disks.",
  "EBS menyediakan volume penyimpanan blok persisten untuk instance EC2, termasuk disk sistem operasi dan aplikasi.",
  docs + "ebs/latest/userguide/what-is-ebs.html",
);
c(
  "efs",
  "Amazon EFS",
  "Amazon EFS",
  "EFS provides a managed elastic NFS file system that multiple supported clients can access concurrently.",
  "EFS menyediakan file system NFS elastis terkelola yang dapat diakses bersamaan oleh beberapa klien yang didukung.",
  docs + "efs/latest/ug/whatisefs.html",
);
c(
  "glacierdeep",
  "S3 Glacier Deep Archive",
  "S3 Glacier Deep Archive",
  "S3 Glacier Deep Archive targets long-lived, rarely accessed archives where retrieval taking hours is acceptable; it is not intended for immediate interactive reads.",
  "S3 Glacier Deep Archive ditujukan bagi arsip jangka panjang yang jarang diakses dan dapat menunggu pengambilan selama beberapa jam; kelas ini tidak ditujukan untuk pembacaan interaktif langsung.",
  docs + "AmazonS3/latest/userguide/storage-class-intro.html",
);
c(
  "s3standard",
  "S3 Standard",
  "S3 Standard",
  "S3 Standard is intended for frequently accessed data requiring low-latency retrieval rather than delayed archive restoration.",
  "S3 Standard ditujukan bagi data yang sering diakses dan memerlukan pengambilan berlatensi rendah, bukan pemulihan arsip tertunda.",
  docs + "AmazonS3/latest/userguide/storage-class-intro.html",
);
c(
  "cloudfront",
  "Amazon CloudFront",
  "Amazon CloudFront",
  "CloudFront is a content delivery network that delivers content through edge locations near viewers.",
  "CloudFront merupakan content delivery network yang mengirimkan konten melalui edge location dekat pengguna.",
  docs + "AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
);
c(
  "route53",
  "Amazon Route 53",
  "Amazon Route 53",
  "Route 53 provides DNS capabilities that route domain-name queries to configured endpoints; it does not serve as a content cache.",
  "Route 53 menyediakan kapabilitas DNS yang mengarahkan kueri nama domain ke endpoint yang dikonfigurasi; Route 53 bukan cache konten.",
  docs + "Route53/latest/DeveloperGuide/Welcome.html",
);
c(
  "vpc",
  "Amazon VPC",
  "Amazon VPC",
  "VPC provides a logically isolated virtual network in which customers define networking resources such as subnets and routes.",
  "VPC menyediakan jaringan virtual yang terisolasi secara logis, tempat pelanggan menentukan resource jaringan seperti subnet dan rute.",
  docs + "vpc/latest/userguide/what-is-amazon-vpc.html",
);
c(
  "direct",
  "AWS Direct Connect",
  "AWS Direct Connect",
  "Direct Connect provides a dedicated network connection to AWS rather than an encrypted tunnel over the public internet.",
  "Direct Connect menyediakan koneksi jaringan khusus ke AWS, berbeda dari terowongan terenkripsi melalui internet publik.",
  docs + "directconnect/latest/UserGuide/Welcome.html",
);
c(
  "vpn",
  "AWS Site-to-Site VPN",
  "AWS Site-to-Site VPN",
  "Site-to-Site VPN connects networks using encrypted IPsec tunnels, including connectivity over the internet.",
  "Site-to-Site VPN menghubungkan jaringan memakai terowongan IPsec terenkripsi, termasuk konektivitas melalui internet.",
  docs + "vpn/latest/s2svpn/VPC_VPN.html",
);
c(
  "watch",
  "Amazon CloudWatch",
  "Amazon CloudWatch",
  "CloudWatch collects and visualizes operational metrics and logs and can trigger alarms from monitored conditions.",
  "CloudWatch mengumpulkan dan memvisualisasikan metrik serta log operasional dan dapat memicu alarm berdasarkan kondisi yang dipantau.",
  docs + "AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
);
c(
  "systems",
  "AWS Systems Manager",
  "AWS Systems Manager",
  "Systems Manager provides centralized operational capabilities for supported nodes, including inventory, patching, and administrative tasks.",
  "Systems Manager menyediakan kapabilitas operasional terpusat bagi node yang didukung, termasuk inventaris, patching, dan tugas administrasi.",
  docs + "systems-manager/latest/userguide/what-is-systems-manager.html",
);
c(
  "athena",
  "Amazon Athena",
  "Amazon Athena",
  "Athena is a serverless query service that can run SQL analysis directly against data in S3 without customers managing query servers.",
  "Athena merupakan layanan kueri serverless yang dapat menjalankan analisis SQL langsung terhadap data di S3 tanpa pelanggan mengelola server kueri.",
  docs + "athena/latest/ug/what-is.html",
);
c(
  "glue",
  "AWS Glue",
  "AWS Glue",
  "Glue provides managed data integration, including data discovery, cataloging, and extract-transform-load capabilities.",
  "Glue menyediakan integrasi data terkelola, termasuk penemuan data, katalogisasi, serta kapabilitas extract-transform-load.",
  docs + "glue/latest/dg/what-is-glue.html",
);
c(
  "transcribe",
  "Amazon Transcribe",
  "Amazon Transcribe",
  "Transcribe converts speech audio into text; it does not synthesize speech from written text.",
  "Transcribe mengubah audio ucapan menjadi teks; layanan ini tidak menyintesis ucapan dari teks tertulis.",
  docs + "transcribe/latest/dg/what-is.html",
);
c(
  "polly",
  "Amazon Polly",
  "Amazon Polly",
  "Polly synthesizes spoken audio from text, which is the reverse direction of speech transcription.",
  "Polly menyintesis audio ucapan dari teks, yang arahnya berlawanan dengan transkripsi ucapan.",
  docs + "polly/latest/dg/what-is.html",
);
c(
  "rekognition",
  "Amazon Rekognition",
  "Amazon Rekognition",
  "Rekognition analyzes images and video for supported visual features such as objects and labels.",
  "Rekognition menganalisis gambar dan video untuk fitur visual yang didukung, seperti objek dan label.",
  docs + "rekognition/latest/dg/what-is.html",
);
c(
  "textract",
  "Amazon Textract",
  "Amazon Textract",
  "Textract extracts text and structured information such as form fields and tables from documents.",
  "Textract mengekstrak teks serta informasi terstruktur seperti field formulir dan tabel dari dokumen.",
  docs + "textract/latest/dg/what-is.html",
);
c(
  "translate",
  "Amazon Translate",
  "Amazon Translate",
  "Translate provides machine translation between supported human languages; it is distinct from identifying objects in images or transcribing speech.",
  "Translate menyediakan terjemahan mesin antarbahasa manusia yang didukung; fungsinya berbeda dari identifikasi objek pada gambar atau transkripsi ucapan.",
  docs + "translate/latest/dg/what-is.html",
);
c(
  "comprehend",
  "Amazon Comprehend",
  "Amazon Comprehend",
  "Comprehend analyzes natural-language text for information such as sentiment and entities rather than generating audio or reading document layout.",
  "Comprehend menganalisis teks bahasa alami untuk informasi seperti sentimen dan entitas, bukan menghasilkan audio atau membaca tata letak dokumen.",
  docs + "comprehend/latest/dg/what-is.html",
);
c(
  "sqs",
  "Amazon SQS",
  "Amazon SQS",
  "SQS provides managed message queues that buffer work between components so consumers can process messages asynchronously.",
  "SQS menyediakan antrean pesan terkelola yang menampung pekerjaan antarkomponen agar konsumen dapat memproses pesan secara asinkron.",
  docs + "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
);
c(
  "sns",
  "Amazon SNS",
  "Amazon SNS",
  "SNS provides publish-subscribe messaging that distributes notifications to multiple subscribers.",
  "SNS menyediakan pengiriman pesan publish-subscribe yang mendistribusikan notifikasi kepada beberapa pelanggan pesan.",
  docs + "sns/latest/dg/welcome.html",
);
c(
  "backup",
  "AWS Backup",
  "AWS Backup",
  "AWS Backup centrally manages backup policies and recovery points for supported AWS resources.",
  "AWS Backup mengelola kebijakan backup dan titik pemulihan resource AWS yang didukung secara terpusat.",
  docs + "aws-backup/latest/devguide/whatisbackup.html",
);
c(
  "versioning",
  "S3 Versioning",
  "S3 Versioning",
  "S3 Versioning preserves multiple object versions, which can help recover from an accidental overwrite; it is different from preventing public access.",
  "S3 Versioning mempertahankan beberapa versi objek sehingga dapat membantu pemulihan setelah objek tertimpa secara tidak sengaja; fungsinya berbeda dari pencegahan akses publik.",
  docs + "AmazonS3/latest/userguide/Versioning.html",
);

q(
  3,
  "browser-graphical-management",
  "A non-developer wants to inspect AWS resources through a graphical interface in a web browser. Which access method best matches this preference?",
  "Pengguna non-developer ingin memeriksa resource AWS melalui antarmuka grafis di browser web. Metode akses apa yang paling sesuai?",
  ["console", "cli", "sdk", "cfn"],
);
q(
  3,
  "shell-script-service-commands",
  "An operations employee wants to list AWS resources from a shell script using commands. Which tool is the most direct choice?",
  "Staf operasional ingin menampilkan daftar resource AWS dari skrip shell menggunakan perintah. Alat apa yang paling langsung sesuai?",
  ["cli", "console", "sdk", "cfn"],
);
q(
  3,
  "python-application-service-library",
  "A Python application needs to call AWS services from its own code. Which development resource provides language-specific libraries for this task?",
  "Aplikasi Python perlu memanggil layanan AWS dari kodenya sendiri. Resource pengembangan apa yang menyediakan pustaka khusus bahasa pemrograman untuk tugas ini?",
  ["sdk", "console", "cli", "config"],
);
q(
  3,
  "repeatable-resource-stack-template",
  "A team wants to recreate the same set of AWS resources for training workshops from a version-controlled template. Which service directly supports this infrastructure-as-code approach?",
  "Tim ingin membuat ulang kumpulan resource AWS yang sama untuk lokakarya pelatihan dari template dalam version control. Layanan apa yang langsung mendukung pendekatan infrastructure as code ini?",
  ["cfn", "console", "watch", "trail"],
);
q(
  3,
  "geographic-data-location-boundary",
  "A company must choose the geographic area in which its regional application resources will run. Which AWS infrastructure unit is it selecting?",
  "Perusahaan harus memilih area geografis tempat resource aplikasi regionalnya akan dijalankan. Unit infrastruktur AWS apa yang sedang dipilih?",
  ["region", "az", "edge", "vpc"],
);
q(
  3,
  "isolated-sites-inside-region",
  "A learner asks what AWS calls the isolated locations containing one or more data centers inside a Region. Which term is correct?",
  "Peserta pelatihan bertanya apa sebutan AWS untuk lokasi terisolasi yang berisi satu atau beberapa pusat data di dalam sebuah Region. Istilah apa yang benar?",
  ["az", "region", "edge", "vpc"],
);
q(
  3,
  "cache-near-viewer-infrastructure",
  "A media company uses CloudFront to deliver cached content close to viewers. Which infrastructure locations are most directly involved in this delivery?",
  "Perusahaan media memakai CloudFront untuk mengirim konten cache dekat penonton. Lokasi infrastruktur apa yang paling langsung berperan dalam pengiriman tersebut?",
  ["edge", "region", "az", "onprem"],
);
q(
  3,
  "single-region-zone-outage-design",
  "A business must keep its application in one AWS Region while reducing the effect of a single Availability Zone failure. Which deployment approach fits?",
  "Bisnis harus mempertahankan aplikasi di satu Region AWS sambil mengurangi dampak kegagalan satu Availability Zone. Pendekatan deployment apa yang sesuai?",
  ["multiaz", "vertical", "onprem", "retain"],
);
q(
  3,
  "onprem-database-cloud-frontend",
  "A company keeps a legacy database in its own data center while running its new application frontend in AWS. Which deployment model does this describe?",
  "Perusahaan mempertahankan database lama di pusat datanya sendiri sambil menjalankan frontend aplikasi baru di AWS. Model deployment apa yang digambarkan?",
  ["hybrid", "cloudonly", "onprem", "repurchase"],
);
q(
  3,
  "custom-operating-system-server",
  "A vendor's application requires the customer to install operating-system packages and control the guest OS. Which AWS compute service provides a suitable virtual server?",
  "Aplikasi vendor mengharuskan pelanggan memasang paket sistem operasi dan mengendalikan OS guest. Layanan komputasi AWS apa yang menyediakan server virtual yang sesuai?",
  ["ec2", "lambda", "fargate", "athena"],
);
q(
  3,
  "application-event-bus-routing",
  "Applications publish business events and need a serverless event bus to route matching events to selected targets. Which AWS integration service is designed for this role?",
  "Aplikasi menerbitkan event bisnis dan membutuhkan event bus serverless untuk mengarahkan event yang cocok ke target tertentu. Layanan integrasi AWS apa yang dirancang untuk peran ini?",
  ["eventbridge", "sqs", "route53", "trail"],
);
q(
  3,
  "ecs-containers-no-worker-hosts",
  "A team already uses ECS and wants AWS to provide container compute without the team managing EC2 worker instances. Which compute option fits?",
  "Tim sudah memakai ECS dan ingin AWS menyediakan komputasi container tanpa tim mengelola instance worker EC2. Pilihan komputasi apa yang sesuai?",
  ["fargate", "ec2", "eks", "lambda"],
);
q(
  3,
  "scanned-form-tables-extraction",
  "An insurance company needs to extract text, form fields, and tables from scanned claim documents. Which AWS AI service best matches this document-processing task?",
  "Perusahaan asuransi perlu mengekstrak teks, field formulir, dan tabel dari dokumen klaim yang dipindai. Layanan AI AWS apa yang paling sesuai?",
  ["textract", "rekognition", "transcribe", "comprehend"],
);
q(
  3,
  "managed-common-relational-engines",
  "A team wants to run a supported relational database engine while AWS handles routine database administration tasks such as automated backups. Which service family should it evaluate?",
  "Tim ingin menjalankan engine database relasional yang didukung sementara AWS menangani tugas administrasi rutin seperti backup otomatis. Keluarga layanan apa yang sebaiknya dievaluasi?",
  ["rds", "dynamo", "redshift", "elasticache"],
);
q(
  3,
  "mysql-compatible-aws-relational-engine",
  "A learner needs to identify the AWS-built relational database engine compatible with MySQL or PostgreSQL. Which service meets this description?",
  "Peserta pelatihan perlu mengidentifikasi engine database relasional buatan AWS yang kompatibel dengan MySQL atau PostgreSQL. Layanan apa yang sesuai?",
  ["aurora", "dynamo", "redshift", "elasticache"],
);
q(
  3,
  "key-value-shopping-cart-store",
  "A shopping application stores cart items using key-value access patterns and does not require relational joins. Which managed NoSQL database is a suitable choice?",
  "Aplikasi belanja menyimpan isi keranjang menggunakan pola akses key-value dan tidak membutuhkan join relasional. Database NoSQL terkelola apa yang sesuai?",
  ["dynamo", "aurora", "redshift", "rds"],
);
q(
  3,
  "managed-spark-hadoop-platform",
  "A data team already uses Apache Spark and Hadoop and wants an AWS-managed platform for running these big-data frameworks. Which service should it evaluate?",
  "Tim data sudah memakai Apache Spark dan Hadoop dan membutuhkan platform yang dikelola AWS untuk menjalankan framework big data tersebut. Layanan apa yang sebaiknya dievaluasi?",
  ["emr", "redshift", "athena", "rds"],
);
q(
  3,
  "reduce-repeated-database-lookups",
  "An application repeatedly reads the same reference data from its primary database. The team wants a managed in-memory cache to reduce these repeated reads. Which service fits?",
  "Aplikasi berulang kali membaca data referensi yang sama dari database utama. Tim membutuhkan cache dalam memori terkelola untuk mengurangi pembacaan tersebut. Layanan apa yang sesuai?",
  ["elasticache", "redshift", "rds", "athena"],
);
q(
  3,
  "product-photo-object-store",
  "A company needs to store product photographs as objects in buckets rather than as a shared file-system mount. Which service is appropriate?",
  "Perusahaan perlu menyimpan foto produk sebagai objek dalam bucket, bukan sebagai file system bersama yang di-mount. Layanan apa yang sesuai?",
  ["s3", "ebs", "efs", "rds"],
);
q(
  3,
  "point-in-time-volume-backup",
  "An administrator wants a point-in-time backup of an EBS data volume that can later be used to create another EBS volume. Which capability is intended for this?",
  "Administrator membutuhkan backup volume data EBS pada suatu titik waktu yang nantinya dapat dipakai untuk membuat volume EBS lain. Kapabilitas apa yang ditujukan untuk kebutuhan ini?",
  ["snapshot", "versioning", "efs", "publicblock"],
);
q(
  3,
  "managed-windows-smb-files",
  "An existing Windows application needs a managed shared file system accessed through SMB. Which AWS service specifically provides Windows file-server capabilities?",
  "Aplikasi Windows yang sudah ada membutuhkan file system bersama terkelola yang diakses melalui SMB. Layanan AWS apa yang secara khusus menyediakan kapabilitas file server Windows?",
  ["fsx", "efs", "ebs", "s3"],
);
q(
  3,
  "multi-year-rarely-retrieved-archive",
  "A company keeps records for years, retrieves them very rarely, and can wait hours for restoration. Which listed S3 storage class is designed for this long-term archive pattern?",
  "Perusahaan menyimpan catatan selama bertahun-tahun, sangat jarang mengambilnya, dan dapat menunggu pemulihan selama beberapa jam. Kelas penyimpanan S3 mana yang dirancang untuk pola arsip ini?",
  ["glacierdeep", "s3standard", "ebs", "efs"],
);
q(
  3,
  "global-static-content-distribution",
  "An online publisher wants to cache and deliver images near readers worldwide. Which AWS service is a content delivery network for this task?",
  "Penerbit daring ingin menyimpan cache dan mengirim gambar dekat pembaca di seluruh dunia. Layanan AWS apa yang merupakan content delivery network untuk tugas ini?",
  ["cloudfront", "route53", "direct", "vpc"],
);
q(
  3,
  "domain-name-dns-resolution",
  "A company wants to manage DNS records that direct its domain name to an application endpoint. Which service provides this capability?",
  "Perusahaan ingin mengelola record DNS yang mengarahkan nama domainnya ke endpoint aplikasi. Layanan apa yang menyediakan kapabilitas ini?",
  ["route53", "cloudfront", "vpn", "wafService"],
);
q(
  3,
  "dedicated-private-office-connection",
  "A company wants a dedicated network connection from its office environment to AWS instead of relying on a VPN tunnel over the public internet. Which service fits?",
  "Perusahaan membutuhkan koneksi jaringan khusus dari lingkungan kantor ke AWS alih-alih mengandalkan terowongan VPN melalui internet publik. Layanan apa yang sesuai?",
  ["direct", "vpn", "cloudfront", "route53"],
);
q(
  3,
  "individual-remote-user-vpn",
  "Employees working from different locations need individual VPN client connections to AWS resources. Which managed AWS VPN service is designed for remote user access?",
  "Karyawan yang bekerja dari lokasi berbeda membutuhkan koneksi klien VPN individual ke resource AWS. Layanan VPN AWS terkelola apa yang dirancang untuk akses pengguna jarak jauh?",
  ["clientvpn", "vpn", "direct", "cloudfront"],
);
q(
  3,
  "cpu-threshold-operational-alarm",
  "An operations team wants a dashboard of EC2 CPU metrics and an alarm when a monitored threshold is exceeded. Which service should it use?",
  "Tim operasional membutuhkan dashboard metrik CPU EC2 dan alarm ketika ambang yang dipantau terlampaui. Layanan apa yang sebaiknya digunakan?",
  ["watch", "trail", "config", "artifact"],
);
q(
  3,
  "fleet-inventory-managed-nodes",
  "An administrator wants a central way to inventory and perform operational tasks on supported managed server nodes. Which AWS service provides these capabilities?",
  "Administrator membutuhkan cara terpusat untuk melakukan inventarisasi dan tugas operasional pada node server terkelola yang didukung. Layanan AWS apa yang menyediakan kapabilitas ini?",
  ["systems", "watch", "trail", "cfn"],
);
q(
  3,
  "database-data-migration-replication",
  "A company wants to move a supported database to AWS while replicating ongoing changes from the source during the move. Which migration service should it evaluate?",
  "Perusahaan ingin memindahkan database yang didukung ke AWS sambil mereplikasi perubahan yang terus berlangsung dari sumber selama perpindahan. Layanan migrasi apa yang sebaiknya dievaluasi?",
  ["dms", "glue", "cfn", "backup"],
);
q(
  3,
  "catalog-and-transform-data-integration",
  "A data team needs managed tools to discover datasets, build a data catalog, and transform data for analytics. Which AWS service best fits?",
  "Tim data membutuhkan alat terkelola untuk menemukan dataset, membuat katalog data, dan mentransformasi data bagi analitik. Layanan AWS apa yang paling sesuai?",
  ["glue", "athena", "redshift", "dynamo"],
);
q(
  3,
  "call-recording-speech-transcription",
  "A contact center wants to convert recorded spoken conversations into written text for later analysis. Which AWS AI service performs this conversion?",
  "Contact center ingin mengubah rekaman percakapan lisan menjadi teks tertulis untuk analisis berikutnya. Layanan AI AWS apa yang melakukan konversi ini?",
  ["transcribe", "polly", "translate", "textract"],
);
q(
  3,
  "identify-objects-in-product-images",
  "A retailer wants a managed AI service to identify objects in uploaded images. Which service is designed for visual analysis?",
  "Peritel membutuhkan layanan AI terkelola untuk mengidentifikasi objek dalam gambar yang diunggah. Layanan apa yang dirancang untuk analisis visual?",
  ["rekognition", "textract", "comprehend", "translate"],
);
q(
  3,
  "queue-and-notification-messaging",
  "A system needs to buffer tasks for background workers and separately publish notifications to several subscribers. Which TWO services match these messaging requirements?",
  "Sistem perlu menampung tugas bagi worker latar belakang dan secara terpisah menerbitkan notifikasi kepada beberapa pelanggan pesan. DUA layanan apa yang sesuai?",
  ["sqs", "sns", "route53", "watch", "cfn"],
  [0, 1],
);
q(
  3,
  "central-backups-and-object-history",
  "A company wants centralized backups for supported AWS resources and version history for objects overwritten in S3. Which TWO capabilities meet these separate recovery needs?",
  "Perusahaan membutuhkan backup terpusat untuk resource AWS yang didukung dan riwayat versi objek S3 yang tertimpa. DUA kapabilitas apa yang memenuhi kebutuhan pemulihan terpisah ini?",
  ["backup", "versioning", "publicblock", "cloudfront", "sg"],
  [0, 1],
);

c(
  "ondemand",
  "EC2 On-Demand Instances",
  "EC2 On-Demand Instances",
  "On-Demand provides compute without a long-term usage commitment and avoids Spot's spare-capacity interruption model.",
  "On-Demand menyediakan komputasi tanpa komitmen penggunaan jangka panjang dan tidak memakai model interupsi kapasitas cadangan seperti Spot.",
  docs + "AWSEC2/latest/UserGuide/ec2-on-demand-instances.html",
);
c(
  "spot",
  "EC2 Spot Instances",
  "EC2 Spot Instances",
  "Spot uses spare EC2 capacity at discounted prices, but AWS can interrupt the instances; workloads must tolerate interruptions.",
  "Spot memakai kapasitas cadangan EC2 dengan harga diskon, tetapi AWS dapat menginterupsi instance; workload harus mampu menghadapi interupsi.",
  docs + "AWSEC2/latest/UserGuide/using-spot-instances.html",
);
c(
  "savings",
  "Savings Plans",
  "Savings Plans",
  "Savings Plans offer discounted eligible compute usage in exchange for a commitment to a consistent amount of usage measured in currency per hour.",
  "Savings Plans menawarkan diskon penggunaan komputasi yang memenuhi syarat sebagai imbalan komitmen jumlah penggunaan konsisten dalam satuan mata uang per jam.",
  docs + "savingsplans/latest/userguide/what-is-savings-plans.html",
);
c(
  "ri",
  "EC2 Reserved Instances",
  "EC2 Reserved Instances",
  "Reserved Instances are a billing discount for matching EC2 usage under a term commitment; the discount does not mean unused running instances are free.",
  "Reserved Instances merupakan diskon penagihan untuk penggunaan EC2 yang sesuai dengan komitmen jangka waktu; diskon tidak berarti instance aktif yang tidak digunakan menjadi gratis.",
  docs + "AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
);
c(
  "dedicatedhost",
  "EC2 Dedicated Hosts",
  "EC2 Dedicated Hosts",
  "Dedicated Hosts provide dedicated physical servers and can help satisfy certain host-bound licensing or compliance requirements; this is distinct from a usage discount alone.",
  "Dedicated Hosts menyediakan server fisik khusus dan dapat membantu memenuhi kebutuhan lisensi terkait host atau kepatuhan tertentu; fungsinya berbeda dari sekadar diskon penggunaan.",
  docs + "AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
);
c(
  "calculator",
  "AWS Pricing Calculator",
  "AWS Pricing Calculator",
  "Pricing Calculator estimates the cost of a proposed configuration before deployment; it does not report an account's actual historical bill.",
  "Pricing Calculator memperkirakan biaya konfigurasi yang direncanakan sebelum deployment; alat ini tidak melaporkan tagihan historis aktual suatu akun.",
  docs + "pricing-calculator/latest/userguide/what-is-pricing-calculator.html",
);
c(
  "explorer",
  "AWS Cost Explorer",
  "AWS Cost Explorer",
  "Cost Explorer visualizes and analyzes AWS cost and usage data, with filtering and grouping to investigate spending trends.",
  "Cost Explorer memvisualisasikan dan menganalisis data biaya serta penggunaan AWS, dengan filter dan pengelompokan untuk menyelidiki tren pengeluaran.",
  docs + "cost-management/latest/userguide/ce-what-is.html",
);
c(
  "budgets",
  "AWS Budgets",
  "AWS Budgets",
  "Budgets tracks cost or usage against thresholds and supports notifications. A budget notification alone is not a universal hard spending cap.",
  "Budgets melacak biaya atau penggunaan terhadap ambang dan mendukung notifikasi. Notifikasi budget saja bukan batas keras universal untuk pengeluaran.",
  docs + "cost-management/latest/userguide/budgets-managing-costs.html",
);
c(
  "allocation",
  "Activated cost allocation tags",
  "Tag alokasi biaya yang telah diaktifkan",
  "Activated cost allocation tags categorize eligible resource costs in billing reports; ordinary resource tags must be activated for this billing purpose.",
  "Tag alokasi biaya yang diaktifkan mengategorikan biaya resource yang memenuhi syarat dalam laporan penagihan; tag resource biasa perlu diaktifkan untuk tujuan penagihan ini.",
  docs + "awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
);
c(
  "optimizer",
  "AWS Compute Optimizer",
  "AWS Compute Optimizer",
  "Compute Optimizer analyzes utilization data and provides resource optimization recommendations, including recommendations for supported compute resources.",
  "Compute Optimizer menganalisis data utilisasi dan memberikan rekomendasi optimasi resource, termasuk rekomendasi bagi resource komputasi yang didukung.",
  docs + "compute-optimizer/latest/ug/what-is-compute-optimizer.html",
);
c(
  "repost",
  "AWS re:Post",
  "AWS re:Post",
  "AWS re:Post is a community knowledge and question-and-answer resource; it is not a private account-specific support case by itself.",
  "AWS re:Post merupakan resource pengetahuan dan tanya jawab komunitas; layanan ini sendiri bukan kasus dukungan privat khusus akun.",
  "https://aws.amazon.com/about-aws/whats-new/2021/12/aws-repost-community-question-answer-service/",
);
c(
  "trusted",
  "AWS Trusted Advisor",
  "AWS Trusted Advisor",
  "Trusted Advisor provides recommendations across categories such as cost optimization, security, performance, and fault tolerance; access to checks depends on eligibility.",
  "Trusted Advisor memberikan rekomendasi dalam kategori seperti optimasi biaya, keamanan, performa, dan toleransi kesalahan; akses ke pemeriksaan bergantung pada kelayakan.",
  docs + "awssupport/latest/user/trusted-advisor.html",
);
c(
  "health",
  "AWS Health Dashboard",
  "AWS Health Dashboard",
  "AWS Health provides service-health information, including account-specific events for affected resources; it is distinct from an application's custom metrics.",
  "AWS Health menyediakan informasi kesehatan layanan, termasuk event khusus akun bagi resource yang terpengaruh; fungsinya berbeda dari metrik kustom aplikasi.",
  docs + "health/latest/ug/what-is-aws-health.html",
);

q(
  4,
  "reserve-capacity-without-term-commitment",
  "A company wants to reserve EC2 capacity in a particular Availability Zone without making a one-year or three-year Reserved Instance commitment. Which option directly addresses this capacity need?",
  "Perusahaan ingin mencadangkan kapasitas EC2 dalam Availability Zone tertentu tanpa berkomitmen pada Reserved Instance satu atau tiga tahun. Pilihan apa yang langsung memenuhi kebutuhan kapasitas ini?",
  ["capacityreservation", "spot", "savings", "calculator"],
);
q(
  4,
  "retryable-batch-spare-capacity",
  "A batch-processing job can save progress and resume after interruption. The team wants to use discounted spare EC2 capacity. Which purchasing option is designed for this pattern?",
  "Job pemrosesan batch dapat menyimpan progres dan melanjutkan setelah interupsi. Tim ingin memakai kapasitas cadangan EC2 dengan harga diskon. Pilihan pembelian apa yang dirancang untuk pola ini?",
  ["spot", "ondemand", "dedicatedhost", "ri"],
);
q(
  4,
  "hourly-spend-compute-commitment",
  "A business expects consistent eligible compute usage and can commit to a specific hourly spending amount for a term. Which pricing model is based on this type of commitment?",
  "Bisnis memperkirakan penggunaan komputasi yang memenuhi syarat akan konsisten dan dapat berkomitmen pada jumlah pengeluaran per jam selama jangka waktu tertentu. Model harga apa yang didasarkan pada komitmen ini?",
  ["savings", "spot", "ondemand", "dedicatedhost"],
);
q(
  4,
  "physical-host-license-requirement",
  "A software license must be associated with a dedicated physical server. Which EC2 purchasing option is most directly related to meeting this host-level requirement?",
  "Lisensi perangkat lunak harus dikaitkan dengan server fisik khusus. Pilihan pembelian EC2 apa yang paling langsung berkaitan dengan kebutuhan tingkat host ini?",
  ["dedicatedhost", "spot", "savings", "ri"],
);
q(
  4,
  "predeployment-monthly-estimate",
  "Before deploying a proposed web application, a manager wants an estimated monthly AWS bill based on its planned configuration. Which tool should the team use?",
  "Sebelum men-deploy aplikasi web yang direncanakan, manajer membutuhkan perkiraan tagihan AWS bulanan berdasarkan konfigurasinya. Alat apa yang sebaiknya digunakan?",
  ["calculator", "explorer", "budgets", "health"],
);
q(
  4,
  "historical-spending-by-service",
  "A finance analyst wants to investigate which services caused spending to increase during the last three months. Which AWS tool is designed to explore historical cost and usage?",
  "Analis keuangan ingin menyelidiki layanan mana yang menyebabkan pengeluaran meningkat selama tiga bulan terakhir. Alat AWS apa yang dirancang untuk menjelajahi biaya dan penggunaan historis?",
  ["explorer", "calculator", "health", "optimizer"],
);
q(
  4,
  "email-forecasted-budget-threshold",
  "A project owner wants an email when actual or forecasted AWS spending exceeds a configured threshold. Which service directly supports this cost notification?",
  "Pemilik proyek menginginkan email ketika pengeluaran AWS aktual atau perkiraan melampaui ambang yang dikonfigurasi. Layanan apa yang langsung mendukung notifikasi biaya ini?",
  ["budgets", "calculator", "allocation", "health"],
);
q(
  4,
  "multiple-accounts-combined-billing",
  "A company owns several AWS accounts and wants centralized account management with consolidated billing. Which service provides this organizational capability?",
  "Perusahaan memiliki beberapa akun AWS dan membutuhkan pengelolaan akun terpusat dengan tagihan gabungan. Layanan apa yang menyediakan kapabilitas organisasi ini?",
  ["organizations", "sso", "explorer", "calculator"],
);
q(
  4,
  "procure-third-party-software-catalog",
  "A company wants to discover and purchase third-party software through an AWS digital catalog rather than contact each vendor separately. Which AWS resource fits?",
  "Perusahaan ingin menemukan dan membeli perangkat lunak pihak ketiga melalui katalog digital AWS alih-alih menghubungi setiap vendor secara terpisah. Resource AWS apa yang sesuai?",
  ["marketplace", "calculator", "explorer", "artifact"],
);
q(
  4,
  "utilization-based-instance-recommendations",
  "An operations team wants AWS recommendations about whether supported EC2 resources are oversized, based on utilization data. Which service is designed for this analysis?",
  "Tim operasional membutuhkan rekomendasi AWS tentang apakah resource EC2 yang didukung berukuran berlebihan berdasarkan data utilisasi. Layanan apa yang dirancang untuk analisis ini?",
  ["optimizer", "calculator", "budgets", "artifact"],
);
q(
  4,
  "public-technical-community-answers",
  "A learner wants to search community answers to AWS technical questions without opening a private support case. Which AWS resource best matches this goal?",
  "Peserta pelatihan ingin mencari jawaban komunitas atas pertanyaan teknis AWS tanpa membuka kasus dukungan privat. Resource AWS apa yang paling sesuai?",
  ["repost", "health", "explorer", "calculator"],
);
q(
  4,
  "recommendations-and-account-events",
  "A team wants AWS best-practice recommendations and information about AWS service events affecting its account. Which TWO resources address these separate needs?",
  "Tim membutuhkan rekomendasi praktik terbaik AWS dan informasi tentang event layanan AWS yang memengaruhi akunnya. DUA resource apa yang memenuhi kebutuhan terpisah ini?",
  ["trusted", "health", "calculator", "allocation", "artifact"],
  [0, 1],
);

c(
  "licenses",
  "The customer manages its application licensing obligations",
  "Pelanggan mengelola kewajiban lisensi aplikasinya",
  "Customers must address licensing requirements for the software they choose to install; EC2 infrastructure management does not automatically transfer third-party licensing obligations to AWS.",
  "Pelanggan harus memenuhi ketentuan lisensi perangkat lunak yang dipasangnya; pengelolaan infrastruktur EC2 tidak otomatis memindahkan kewajiban lisensi pihak ketiga kepada AWS.",
  shared,
);
c(
  "eventbridge",
  "Amazon EventBridge",
  "Amazon EventBridge",
  "EventBridge is a serverless event bus that can route events from supported sources to targets using rules.",
  "EventBridge merupakan event bus serverless yang dapat mengarahkan event dari sumber yang didukung ke target menggunakan aturan.",
  docs + "eventbridge/latest/userguide/eb-what-is.html",
);
c(
  "emr",
  "Amazon EMR",
  "Amazon EMR",
  "EMR is a managed platform for running big-data frameworks such as Apache Spark and Hadoop; it is distinct from a relational warehouse or an S3 SQL query service.",
  "EMR merupakan platform terkelola untuk menjalankan framework big data seperti Apache Spark dan Hadoop; fungsinya berbeda dari warehouse relasional atau layanan kueri SQL S3.",
  docs + "emr/latest/ManagementGuide/emr-what-is-emr.html",
);
c(
  "snapshot",
  "Amazon EBS snapshots",
  "Snapshot Amazon EBS",
  "EBS snapshots capture point-in-time backups of EBS volume data that can be used to create new volumes.",
  "Snapshot EBS membuat backup data volume EBS pada suatu titik waktu yang dapat digunakan untuk membuat volume baru.",
  docs + "ebs/latest/userguide/ebs-snapshots.html",
);
c(
  "fsx",
  "Amazon FSx for Windows File Server",
  "Amazon FSx for Windows File Server",
  "FSx for Windows File Server provides managed Windows file storage accessible through SMB, unlike the NFS interface of EFS.",
  "FSx for Windows File Server menyediakan penyimpanan file Windows terkelola melalui SMB, berbeda dari antarmuka NFS pada EFS.",
  docs + "fsx/latest/WindowsGuide/what-is.html",
);
c(
  "dms",
  "AWS Database Migration Service (AWS DMS)",
  "AWS Database Migration Service (AWS DMS)",
  "DMS migrates supported database data and can replicate ongoing source changes during migration; it is not a general infrastructure template service.",
  "DMS memigrasikan data database yang didukung dan dapat mereplikasi perubahan sumber yang terus berlangsung selama migrasi; DMS bukan layanan template infrastruktur serbaguna.",
  docs + "dms/latest/userguide/Welcome.html",
);
c(
  "clientvpn",
  "AWS Client VPN",
  "AWS Client VPN",
  "Client VPN provides managed remote-access VPN connectivity for individual clients; Site-to-Site VPN connects whole networks.",
  "Client VPN menyediakan konektivitas VPN akses jarak jauh terkelola bagi klien individual; Site-to-Site VPN menghubungkan keseluruhan jaringan.",
  docs + "vpn/latest/clientvpn-admin/what-is.html",
);
c(
  "capacityreservation",
  "EC2 On-Demand Capacity Reservations",
  "EC2 On-Demand Capacity Reservations",
  "On-Demand Capacity Reservations reserve EC2 capacity in a specific Availability Zone without requiring a Reserved Instance term commitment; reservation and usage charges still apply.",
  "On-Demand Capacity Reservations mencadangkan kapasitas EC2 dalam Availability Zone tertentu tanpa mewajibkan komitmen jangka waktu Reserved Instance; biaya reservasi dan penggunaan tetap berlaku.",
  docs + "AWSEC2/latest/UserGuide/ec2-capacity-reservations.html",
);
c(
  "marketplace",
  "AWS Marketplace",
  "AWS Marketplace",
  "Marketplace is a digital catalog for discovering and procuring third-party software, data, and services; it is not a historical account-cost report.",
  "Marketplace merupakan katalog digital untuk menemukan dan memperoleh perangkat lunak, data, serta layanan pihak ketiga; Marketplace bukan laporan biaya akun historis.",
  docs + "marketplace/latest/buyerguide/what-is-marketplace.html",
);

const domains = [
  "Cloud Concepts",
  "Security & Compliance",
  "Technology & Services",
  "Billing & Pricing",
];
export function buildCcp20261102(lang) {
  if (!["en", "id"].includes(lang)) throw new Error("Unsupported CCP language");
  const labels = ["A", "B", "C", "D", "E"];
  return rows.map((row, index) => {
    const order = row.choices.map(
      (_, i) => (i + (index % row.choices.length)) % row.choices.length,
    );
    const reason = (key) =>
      concepts[key][lang === "en" ? "enReason" : "idReason"];
    return {
      id: `ccp-scenario-${lang}-20261102-${String(index + 1).padStart(3, "0")}`,
      examType: "ccp",
      lang,
      domain: domains[row.domain - 1],
      type: row.answers.length > 1 ? "multiple" : "single",
      prompt:
        row[lang] +
        (row.answers.length > 1
          ? lang === "en"
            ? ` (Choose ${row.answers.length} answers.)`
            : ` (Pilih ${row.answers.length} jawaban.)`
          : ""),
      options: order.map((original, i) => ({
        id: labels[i],
        text: concepts[row.choices[original]][lang],
      })),
      correctAnswers: order.flatMap((original, i) =>
        row.answers.includes(original) ? [labels[i]] : [],
      ),
      explanation: row.answers.map((i) => reason(row.choices[i])).join(" "),
      optionExplanations: Object.fromEntries(
        order.map((original, i) => [labels[i], reason(row.choices[original])]),
      ),
      sourceUrl:
        row.answers.length > 1
          ? guide + `cloud-practitioner-02-domain${row.domain}.html`
          : concepts[row.choices[row.answers[0]]].source,
      status: "approved",
      difficulty: "foundational",
      sourceRef: "original-practice-scenarios",
      version: 1,
      verifiedAt: "2026-11-02",
      topic: row.topic,
      blueprintVersion: "CLF-C02",
      duplicateReviewed: true,
    };
  });
}

export const ccp20261102References = [
  ...new Set(Object.values(concepts).map((entry) => entry.source)),
];

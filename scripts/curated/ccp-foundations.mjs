// Editorial replacements: test service/concept recognition, not configuration or troubleshooting.
const cases = [
  [
    20,
    "Perusahaan ingin mencegah bucket S3 dibuka untuk umum karena kesalahan pengaturan. Kontrol S3 apa yang sesuai?",
    [
      "S3 Block Public Access",
      "S3 Transfer Acceleration",
      "S3 Versioning",
      "S3 website hosting",
    ],
    "S3 Block Public Access membantu mencegah pemberian akses publik melalui kebijakan bucket dan ACL.",
    "AmazonS3/latest/userguide/access-control-block-public-access.html",
  ],
  [
    22,
    "Perusahaan memerlukan sambungan terenkripsi antara kantor dan VPC melalui internet. Layanan AWS apa yang sesuai?",
    [
      "AWS Site-to-Site VPN",
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Budgets",
    ],
    "AWS Site-to-Site VPN menyediakan koneksi terenkripsi antara jaringan perusahaan dan VPC melalui internet.",
    "vpn/latest/s2svpn/VPC_VPN.html",
  ],
  [
    24,
    "Aplikasi pada EC2 memerlukan izin untuk mengakses layanan AWS tanpa menyimpan access key permanen. Mekanisme apa yang sesuai?",
    [
      "IAM role",
      "Kata sandi pengguna root",
      "Alamat IP publik",
      "Tag alokasi biaya",
    ],
    "IAM role memberikan izin melalui kredensial sementara sehingga aplikasi tidak perlu menyimpan access key permanen.",
    "IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
  ],
  [
    26,
    "Apa fungsi utama security group pada Amazon EC2?",
    [
      "Mengendalikan lalu lintas jaringan ke dan dari resource",
      "Menyimpan cadangan basis data",
      "Mengelola tagihan bulanan",
      "Mempercepat pengiriman video global",
    ],
    "Security group bertindak sebagai firewall virtual yang mengendalikan lalu lintas jaringan resource.",
    "vpc/latest/userguide/vpc-security-groups.html",
  ],
  [
    27,
    "Siapa yang bertanggung jawab mengonfigurasi akses jaringan aplikasi pelanggan pada EC2?",
    [
      "Pelanggan",
      "AWS untuk semua konfigurasi aplikasi",
      "Penyedia listrik pusat data",
      "Pengunjung situs web",
    ],
    "Pelanggan mengonfigurasi keamanan di dalam cloud, termasuk aturan akses jaringan aplikasi pada EC2.",
    "whitepapers/latest/aws-overview/security-and-compliance.html",
  ],
  [
    28,
    "Apa tujuan penggunaan HTTPS saat aplikasi mengirim data?",
    [
      "Melindungi data selama perjalanan",
      "Menghapus kebutuhan autentikasi",
      "Membuat data otomatis terbuka untuk umum",
      "Menggantikan pencadangan data",
    ],
    "HTTPS menggunakan TLS untuk mengenkripsi data dalam perjalanan. Perlindungan ini tidak menggantikan autentikasi atau pencadangan.",
    "whitepapers/latest/aws-overview/security-and-compliance.html",
  ],
  [
    34,
    "Seorang karyawan hanya perlu membaca berkas pada satu bucket S3. Prinsip pemberian izin apa yang sebaiknya diterapkan?",
    [
      "Memberikan hanya izin yang diperlukan",
      "Memberikan AdministratorAccess kepada semua karyawan",
      "Berbagi akun root",
      "Menghapus seluruh pembatasan akses",
    ],
    "Prinsip hak akses minimum memberikan hanya izin yang diperlukan untuk menjalankan tugas.",
    "IAM/latest/UserGuide/best-practices.html",
  ],
  [
    38,
    "Aplikasi dijalankan pada beberapa Availability Zone. Manfaat utama pendekatan ini adalah apa?",
    [
      "Meningkatkan ketersediaan saat satu AZ mengalami gangguan",
      "Menghilangkan seluruh biaya aplikasi",
      "Menghapus kebutuhan keamanan data",
      "Menjamin tidak ada kesalahan program",
    ],
    "Penggunaan beberapa AZ mengurangi ketergantungan pada satu lokasi sehingga mendukung ketersediaan aplikasi.",
    "whitepapers/latest/aws-overview/global-infrastructure.html",
  ],
  [
    40,
    "Tim ingin memisahkan pengirim dan penerima pesan agar keduanya tidak harus berjalan bersamaan. Layanan antrean AWS apa yang sesuai?",
    ["Amazon SQS", "Amazon Route 53", "Amazon EBS", "AWS Cost Explorer"],
    "Amazon SQS menyimpan pesan dalam antrean sehingga komponen pengirim dan penerima dapat bekerja secara terpisah.",
    "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  ],
  [
    41,
    "Apa manfaat utama kopling longgar antar komponen aplikasi?",
    [
      "Komponen dapat berkembang dan diskalakan secara lebih mandiri",
      "Semua komponen wajib berada dalam satu proses",
      "Setiap kegagalan harus menghentikan seluruh aplikasi",
      "Pemantauan tidak lagi diperlukan",
    ],
    "Kopling longgar mengurangi ketergantungan langsung antar komponen dan mendukung perubahan serta penskalaan secara mandiri.",
    "whitepapers/latest/aws-overview/amazon-simple-queue-service.html",
  ],
  [
    42,
    "Perusahaan ingin mengirim satu notifikasi kepada banyak pelanggan layanan. Layanan publish/subscribe AWS apa yang sesuai?",
    ["Amazon SNS", "Amazon EBS", "Amazon RDS", "AWS KMS"],
    "Amazon SNS menggunakan topik dan langganan untuk mendistribusikan pesan kepada banyak penerima.",
    "sns/latest/dg/welcome.html",
  ],
  [
    43,
    "Apa kegunaan utama Amazon SQS?",
    [
      "Menyimpan pesan untuk diproses komponen aplikasi",
      "Mendaftarkan nama domain internet",
      "Membuat sertifikat TLS",
      "Menganalisis tagihan AWS",
    ],
    "Amazon SQS adalah layanan antrean pesan terkelola untuk komunikasi antar komponen aplikasi.",
    "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  ],
  [
    44,
    "Perusahaan membutuhkan basis data relasional terkelola agar tugas pemeliharaan rutin berkurang. Layanan apa yang sesuai?",
    ["Amazon RDS", "Amazon S3", "Amazon CloudFront", "Amazon SQS"],
    "Amazon RDS mengelola tugas basis data relasional seperti pencadangan dan pemeliharaan sesuai pengaturan layanan.",
    "AmazonRDS/latest/UserGuide/Welcome.html",
  ],
  [
    46,
    "Layanan AWS apa yang menyediakan DNS untuk menerjemahkan nama domain menjadi alamat tujuan?",
    ["Amazon Route 53", "Amazon Inspector", "AWS Backup", "Amazon EFS"],
    "Amazon Route 53 menyediakan layanan DNS yang membantu mengarahkan pengguna berdasarkan nama domain.",
    "Route53/latest/DeveloperGuide/Welcome.html",
  ],
  [
    47,
    "Apa tujuan menyeimbangkan permintaan pengguna ke beberapa server?",
    [
      "Membagikan beban kerja antar target yang tersedia",
      "Menjadikan semua data publik",
      "Menggantikan enkripsi data",
      "Menghapus seluruh kebutuhan server",
    ],
    "Elastic Load Balancing mendistribusikan lalu lintas ke beberapa target untuk membantu ketersediaan dan pemanfaatan kapasitas.",
    "elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  ],
  [
    49,
    "Perusahaan membutuhkan basis data NoSQL key-value yang dikelola AWS. Layanan apa yang sesuai?",
    ["Amazon DynamoDB", "Amazon RDS", "Amazon EFS", "Amazon Route 53"],
    "Amazon DynamoDB adalah layanan basis data NoSQL terkelola yang mendukung model key-value dan dokumen.",
    "amazondynamodb/latest/developerguide/Introduction.html",
  ],
  [
    51,
    "Manfaat apa yang ditawarkan layanan basis data terkelola seperti Amazon RDS?",
    [
      "Mengurangi pekerjaan administrasi basis data rutin",
      "Menghapus tanggung jawab pelanggan atas data",
      "Menjamin seluruh kueri selalu benar",
      "Menjadikan seluruh akses tidak terbatas",
    ],
    "Layanan terkelola mengurangi pekerjaan rutin, tetapi pelanggan tetap mengelola data, pengguna, dan izin yang sesuai.",
    "AmazonRDS/latest/UserGuide/Welcome.html",
  ],
  [
    52,
    "Perusahaan ingin mengumpulkan dan memproses aliran data secara berkelanjutan. Layanan streaming AWS apa yang sesuai?",
    [
      "Amazon Kinesis Data Streams",
      "Amazon EBS",
      "AWS Certificate Manager",
      "AWS Budgets",
    ],
    "Amazon Kinesis Data Streams menyediakan layanan untuk mengumpulkan dan memproses data streaming.",
    "streams/latest/dev/introduction.html",
  ],
  [
    53,
    "Apa fungsi utama Elastic Load Balancing?",
    [
      "Mendistribusikan lalu lintas aplikasi ke beberapa target",
      "Menyimpan arsip dokumen jangka panjang",
      "Mengelola kunci enkripsi",
      "Menghitung biaya pajak perusahaan",
    ],
    "Elastic Load Balancing mendistribusikan lalu lintas masuk ke beberapa target, seperti instance EC2.",
    "elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  ],
  [
    54,
    "Tim ingin menambah atau mengurangi jumlah instance EC2 mengikuti kebutuhan aplikasi. Layanan apa yang sesuai?",
    ["Amazon EC2 Auto Scaling", "Amazon Route 53", "AWS Artifact", "AWS KMS"],
    "Amazon EC2 Auto Scaling menyesuaikan jumlah instance menurut kebijakan dan kebutuhan kapasitas.",
    "autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  ],
  [
    55,
    "Perusahaan membutuhkan server virtual dengan kendali atas sistem operasi. Layanan komputasi apa yang sesuai?",
    ["Amazon EC2", "Amazon S3", "Amazon SNS", "AWS Cost Explorer"],
    "Amazon EC2 menyediakan kapasitas komputasi virtual dan memungkinkan pelanggan mengelola sistem operasi instance.",
    "AWSEC2/latest/UserGuide/concepts.html",
  ],
  [
    57,
    "Tim ingin menjalankan kode berdasarkan peristiwa tanpa mengelola server. Layanan AWS apa yang sesuai?",
    [
      "AWS Lambda",
      "Amazon EC2 Dedicated Hosts",
      "Amazon EBS",
      "AWS Direct Connect",
    ],
    "AWS Lambda menjalankan kode sebagai respons atas peristiwa tanpa pelanggan menyediakan atau mengelola server.",
    "lambda/latest/dg/welcome.html",
  ],
  [
    58,
    "Instance EC2 membutuhkan penyimpanan blok persisten. Layanan AWS apa yang sesuai?",
    ["Amazon EBS", "Amazon Route 53", "Amazon SNS", "AWS CloudTrail"],
    "Amazon EBS menyediakan penyimpanan blok persisten untuk digunakan dengan instance EC2.",
    "ebs/latest/userguide/what-is-ebs.html",
  ],
  [
    65,
    "Perusahaan mencari basis data yang dapat menyesuaikan kapasitas dengan kebutuhan tanpa pengelolaan server basis data. Layanan NoSQL apa yang sesuai?",
    [
      "Amazon DynamoDB",
      "Amazon EC2 dengan basis data yang dipasang sendiri",
      "Amazon EFS",
      "Amazon CloudFront",
    ],
    "Amazon DynamoDB adalah basis data NoSQL terkelola dan serverless yang mendukung penskalaan sesuai kebutuhan.",
    "amazondynamodb/latest/developerguide/Introduction.html",
  ],
  [
    66,
    "Tim ingin mengelola pencadangan beberapa layanan AWS secara terpusat. Layanan apa yang sesuai?",
    ["AWS Backup", "Amazon Route 53", "AWS Shield", "Amazon SNS"],
    "AWS Backup membantu memusatkan dan mengotomatiskan perlindungan data melalui kebijakan pencadangan.",
    "aws-backup/latest/devguide/whatisbackup.html",
  ],
  [
    104,
    "Apa kegunaan utama Amazon VPC?",
    [
      "Menyediakan jaringan virtual yang terisolasi secara logis",
      "Mengelola pembayaran kartu kredit pelanggan",
      "Menyediakan direktori identitas pelanggan situs web",
      "Membuat laporan audit keuangan perusahaan",
    ],
    "Amazon VPC memungkinkan pelanggan menjalankan resource AWS dalam jaringan virtual yang terisolasi secara logis.",
    "vpc/latest/userguide/what-is-amazon-vpc.html",
  ],
  [
    107,
    "Mengapa perusahaan memakai beberapa Availability Zone untuk beban kerja penting?",
    [
      "Mengurangi dampak kegagalan satu lokasi",
      "Menjamin tagihan selalu nol",
      "Menghapus seluruh kebutuhan pencadangan",
      "Membuat semua resource dapat diakses publik",
    ],
    "Penyebaran di beberapa AZ membantu aplikasi tetap tersedia ketika salah satu AZ mengalami gangguan.",
    "whitepapers/latest/aws-overview/global-infrastructure.html",
  ],
  [
    108,
    "Basis data perusahaan menggunakan tabel relasional dan SQL. Layanan basis data terkelola AWS apa yang sesuai?",
    ["Amazon RDS", "Amazon SQS", "Amazon Route 53", "Amazon CloudFront"],
    "Amazon RDS mendukung engine basis data relasional dan mengurangi pekerjaan pengelolaan infrastruktur basis data.",
    "AmazonRDS/latest/UserGuide/Welcome.html",
  ],
  [
    110,
    "Layanan apa yang menyediakan antrean pesan terkelola untuk aplikasi?",
    ["Amazon SQS", "Amazon SNS", "Amazon EFS", "Amazon RDS"],
    "Amazon SQS menyimpan pesan agar dapat diambil dan diproses oleh komponen penerima. SNS menggunakan pola publish/subscribe.",
    "AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  ],
  [
    116,
    "Apa karakteristik utama Amazon DynamoDB?",
    [
      "Basis data NoSQL terkelola",
      "Layanan DNS global",
      "Penyimpanan berkas berbasis NFS",
      "Layanan sertifikat digital",
    ],
    "Amazon DynamoDB menyediakan basis data NoSQL terkelola untuk data key-value dan dokumen.",
    "amazondynamodb/latest/developerguide/Introduction.html",
  ],
  [
    118,
    "Perusahaan ingin menyebarkan permintaan web ke beberapa server aplikasi. Layanan AWS apa yang sesuai?",
    ["Elastic Load Balancing", "AWS KMS", "AWS Budgets", "Amazon EBS"],
    "Elastic Load Balancing membagikan lalu lintas aplikasi ke beberapa target yang tersedia.",
    "elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  ],
  [
    121,
    "Perusahaan ingin menyimpan data sementara yang sering dibaca dalam memori untuk mempercepat aplikasi. Layanan cache terkelola apa yang sesuai?",
    ["Amazon ElastiCache", "Amazon Route 53", "AWS Artifact", "Amazon SNS"],
    "Amazon ElastiCache menyediakan penyimpanan dalam memori untuk caching dan kasus penggunaan terkait.",
    "AmazonElastiCache/latest/dg/WhatIs.html",
  ],
  [
    124,
    "Tim ingin menganalisis data dalam jumlah besar untuk laporan bisnis. Layanan data warehouse AWS apa yang sesuai?",
    ["Amazon Redshift", "Amazon Route 53", "AWS Secrets Manager", "Amazon SNS"],
    "Amazon Redshift adalah layanan data warehouse untuk analitik dan pelaporan bisnis.",
    "redshift/latest/mgmt/welcome.html",
  ],
  [
    127,
    "Apa yang dimaksud layanan terkelola AWS?",
    [
      "AWS menangani sebagian tugas infrastruktur dan pemeliharaan layanan",
      "Pelanggan tidak lagi memiliki tanggung jawab keamanan",
      "Semua layanan selalu gratis",
      "Pelanggan wajib mengelola perangkat keras fisik AWS",
    ],
    "Layanan terkelola mengurangi pekerjaan operasional pelanggan. Tanggung jawab keamanan tetap dibagi sesuai layanan yang digunakan.",
    "whitepapers/latest/aws-overview/security-and-compliance.html",
  ],
  [
    129,
    "Perusahaan ingin menyajikan konten statis lebih dekat dengan pengguna global. Layanan AWS apa yang sesuai?",
    ["Amazon CloudFront", "Amazon EBS", "AWS Backup", "AWS Secrets Manager"],
    "Amazon CloudFront adalah CDN yang menggunakan jaringan edge location untuk mendekatkan konten kepada pengguna.",
    "AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  ],
];
const alternatives = {
  "S3 Transfer Acceleration":
    "Mempercepat transfer data menuju atau dari S3; tidak mengendalikan akses publik bucket.",
  "S3 Versioning":
    "Menyimpan beberapa versi objek; bukan kontrol pencegah akses publik.",
  "S3 website hosting":
    "Menyajikan situs web statis; tidak mencegah bucket dibuka untuk umum.",
  "Amazon CloudFront":
    "Merupakan CDN untuk pengiriman konten, bukan VPN, basis data, atau layanan antrean.",
  "Amazon Route 53":
    "Menyediakan DNS dan pengelolaan domain, bukan penyimpanan, komputasi, atau sambungan VPN.",
  "AWS Budgets":
    "Memantau anggaran dan mengirim peringatan biaya; bukan layanan jaringan atau komputasi.",
  "Kata sandi pengguna root":
    "Kata sandi root bukan mekanisme izin aplikasi. Berbagi kredensial root juga meningkatkan risiko keamanan.",
  "Alamat IP publik":
    "Alamat jaringan tidak memberikan izin IAM untuk mengakses layanan AWS.",
  "Tag alokasi biaya":
    "Tag membantu mengelompokkan biaya, bukan memberikan kredensial kepada aplikasi.",
  "Menyimpan cadangan basis data":
    "Pencadangan melindungi salinan data; security group mengendalikan lalu lintas jaringan.",
  "Mengelola tagihan bulanan":
    "Penagihan termasuk pengelolaan biaya, bukan fungsi security group.",
  "Mempercepat pengiriman video global":
    "Pengiriman konten global merupakan fungsi CDN seperti CloudFront, bukan security group.",
  "AWS untuk semua konfigurasi aplikasi":
    "AWS melindungi infrastrukturnya; konfigurasi aplikasi dan akses pelanggan tetap menjadi tanggung jawab pelanggan.",
  "Penyedia listrik pusat data":
    "Kelistrikan mendukung fasilitas fisik dan tidak menentukan izin jaringan aplikasi pelanggan.",
  "Pengunjung situs web":
    "Pengunjung memakai aplikasi, bukan mengelola konfigurasi keamanan resource milik perusahaan.",
  "Menghapus kebutuhan autentikasi":
    "Enkripsi koneksi tidak membuktikan bahwa pengguna memiliki izin mengakses aplikasi.",
  "Membuat data otomatis terbuka untuk umum":
    "HTTPS melindungi koneksi; tidak mengubah izin data menjadi publik.",
  "Menggantikan pencadangan data":
    "Enkripsi tidak menyediakan salinan pemulihan jika data hilang atau rusak.",
  "Memberikan AdministratorAccess kepada semua karyawan":
    "Izin administrator memberi akses jauh lebih luas daripada kebutuhan membaca satu bucket.",
  "Berbagi akun root":
    "Akun root berhak sangat luas dan tidak sesuai untuk akses baca terbatas atau penggunaan bersama.",
  "Menghapus seluruh pembatasan akses":
    "Menghapus pembatasan justru melanggar prinsip hak akses minimum.",
  "Menghilangkan seluruh biaya aplikasi":
    "Penggunaan beberapa AZ tidak menghapus biaya resource dan dapat menambah komponen berbayar.",
  "Menghapus kebutuhan keamanan data":
    "Ketersediaan lintas AZ tidak menggantikan pengamanan akses dan perlindungan data.",
  "Menjamin tidak ada kesalahan program":
    "Pemisahan lokasi tidak mencegah bug pada kode aplikasi.",
  "Amazon EBS":
    "Menyediakan penyimpanan blok untuk EC2, bukan basis data terkelola, DNS, atau antrean pesan.",
  "AWS Cost Explorer":
    "Menganalisis penggunaan dan biaya AWS; tidak menyediakan komputasi atau antrean pesan.",
  "Semua komponen wajib berada dalam satu proses":
    "Satu proses menambah ketergantungan langsung, berlawanan dengan kopling longgar.",
  "Setiap kegagalan harus menghentikan seluruh aplikasi":
    "Kopling longgar justru bertujuan membatasi dampak kegagalan antar komponen.",
  "Pemantauan tidak lagi diperlukan":
    "Komponen tetap perlu dipantau meskipun komunikasinya dipisahkan.",
  "Amazon RDS":
    "Merupakan basis data relasional terkelola, bukan layanan publish/subscribe atau antrean pesan.",
  "AWS KMS":
    "Mengelola kunci kriptografi; bukan layanan notifikasi atau distribusi lalu lintas.",
  "Mendaftarkan nama domain internet":
    "Pendaftaran domain disediakan melalui layanan seperti Route 53, bukan SQS.",
  "Membuat sertifikat TLS":
    "Pengelolaan sertifikat merupakan fungsi AWS Certificate Manager, bukan antrean SQS.",
  "Menganalisis tagihan AWS":
    "Analisis biaya tersedia melalui alat seperti Cost Explorer, bukan SQS.",
  "Amazon S3":
    "Merupakan penyimpanan objek; bukan engine basis data relasional terkelola.",
  "Amazon SQS":
    "Merupakan antrean pesan untuk memisahkan komponen aplikasi, bukan basis data relasional atau DNS.",
  "Amazon Inspector":
    "Menilai kerentanan pada workload yang didukung, bukan menyediakan DNS.",
  "AWS Backup":
    "Mengelola pencadangan data, bukan DNS, CDN, atau penskalaan aplikasi.",
  "Amazon EFS":
    "Menyediakan sistem berkas bersama, bukan basis data NoSQL, DNS, atau komputasi.",
  "Menjadikan semua data publik":
    "Penyeimbangan beban tidak mengubah izin akses data menjadi publik.",
  "Menggantikan enkripsi data":
    "Penyeimbangan beban tidak menggantikan kebutuhan melindungi data melalui enkripsi.",
  "Menghapus seluruh kebutuhan server":
    "Load balancer memerlukan target pemroses permintaan; tidak menghilangkan seluruh resource aplikasi.",
  "Menghapus tanggung jawab pelanggan atas data":
    "Pelanggan tetap mengatur data dan aksesnya dalam model tanggung jawab bersama.",
  "Menjamin seluruh kueri selalu benar":
    "Layanan terkelola tidak dapat menjamin logika kueri yang ditulis pelanggan.",
  "Menjadikan seluruh akses tidak terbatas":
    "Akses tetap dibatasi melalui autentikasi dan izin yang sesuai.",
  "AWS Certificate Manager":
    "Mengelola sertifikat TLS, bukan mengumpulkan data streaming.",
  "Menyimpan arsip dokumen jangka panjang":
    "Pengarsipan memerlukan layanan penyimpanan seperti S3, bukan load balancer.",
  "Mengelola kunci enkripsi":
    "Ini merupakan fungsi KMS, bukan Elastic Load Balancing.",
  "Menghitung biaya pajak perusahaan":
    "Load balancer mengarahkan lalu lintas aplikasi; tidak menghitung kewajiban pajak perusahaan.",
  "AWS Artifact":
    "Menyediakan akses ke dokumen kepatuhan AWS, bukan cache atau penskalaan komputasi.",
  "Amazon SNS":
    "Mengirim pesan melalui pola publish/subscribe; tidak menggantikan penyimpanan antrean SQS atau basis data.",
  "Amazon EC2 Dedicated Hosts":
    "Menyediakan server fisik khusus untuk instance EC2; pelanggan tetap mengelola instance dan sistem operasinya.",
  "AWS Direct Connect":
    "Menyediakan koneksi jaringan khusus antara lokasi pelanggan dan AWS, bukan eksekusi kode.",
  "AWS CloudTrail":
    "Mencatat aktivitas API untuk audit; tidak menyediakan disk bagi instance EC2.",
  "Amazon EC2 dengan basis data yang dipasang sendiri":
    "Pelanggan masih harus mengelola server dan basis datanya sendiri, sehingga tidak memenuhi kebutuhan layanan NoSQL tanpa pengelolaan server.",
  "AWS Shield":
    "Membantu melindungi dari serangan DDoS; tidak mengelola pencadangan data.",
  "Mengelola pembayaran kartu kredit pelanggan":
    "VPC menyediakan jaringan virtual; pemrosesan pembayaran bukan fungsi utamanya.",
  "Menyediakan direktori identitas pelanggan situs web":
    "Identitas pengguna aplikasi disediakan layanan seperti Cognito, bukan VPC.",
  "Membuat laporan audit keuangan perusahaan":
    "VPC menyediakan isolasi jaringan, bukan laporan audit keuangan.",
  "Menjamin tagihan selalu nol":
    "Penggunaan beberapa AZ tidak membuat resource AWS menjadi gratis.",
  "Menghapus seluruh kebutuhan pencadangan":
    "Ketersediaan lintas AZ tidak menggantikan cadangan untuk pemulihan setelah penghapusan atau kerusakan data.",
  "Membuat semua resource dapat diakses publik":
    "Pemisahan AZ tidak mengharuskan resource diberi akses publik.",
  "Layanan DNS global":
    "DNS disediakan oleh layanan seperti Route 53, bukan DynamoDB.",
  "Penyimpanan berkas berbasis NFS":
    "Penyimpanan berkas bersama berbasis NFS disediakan layanan seperti EFS, bukan DynamoDB.",
  "Layanan sertifikat digital":
    "Sertifikat digital dikelola melalui layanan seperti Certificate Manager, bukan DynamoDB.",
  "AWS Secrets Manager":
    "Mengelola rahasia seperti kata sandi dan kredensial; bukan data warehouse atau CDN.",
  "Pelanggan tidak lagi memiliki tanggung jawab keamanan":
    "Tanggung jawab pelanggan tetap ada; cakupannya bergantung pada layanan yang digunakan.",
  "Semua layanan selalu gratis":
    "Layanan terkelola tetap memiliki model harga dan dapat menimbulkan biaya.",
  "Pelanggan wajib mengelola perangkat keras fisik AWS":
    "Perangkat keras fasilitas AWS dikelola AWS dalam model tanggung jawab bersama.",
};
export function reviewCcpFoundation(q) {
  const row = cases.find(([number]) => q.id === `curated-ccp-id-${number}`);
  if (!row) return q;
  const [, prompt, choices, explanation, reference] = row;
  const offset = row[0] % 4;
  const options = ["A", "B", "C", "D"].map((id, i) => ({
    id,
    text: choices[(i + offset) % 4],
  }));
  return {
    ...q,
    prompt,
    options,
    type: "single",
    correctAnswers: [options[(4 - offset) % 4].id],
    explanation,
    optionExplanations: Object.fromEntries(
      options.map((o, i) => {
        const reason =
          (i + offset) % 4 === 0 ? explanation : alternatives[o.text];
        if (!reason) throw new Error(`Missing editorial rationale: ${o.text}`);
        return [o.id, reason];
      }),
    ),
    sourceUrl: `https://docs.aws.amazon.com/${reference}`,
    verifiedAt: "2026-10-22",
    version: 5,
    difficulty: "foundational",
  };
}

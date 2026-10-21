import type { ExamQuestion } from './questionBank'

export const ccpQuestionBank: ExamQuestion[] = [
  {
    "id": "ccp_kahoot_0001",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Cloud Administrator sedang menulis skrip otomatisasi di terminal Linux menggunakan AWS CLI untuk mengelola file di Amazon S3. Administrator tersebut membutuhkan perintah granular tingkat rendah yang memetakan operasi REST API Amazon S3 secara satu-ke-satu (1-to-1 API mapping). Manakah pernyataan yang paling tepat membedakan antara perintah 'aws s3' dan 'aws s3api'?",
    "options": [
      {
        "id": "A",
        "text": "Perintah aws s3 mengenakan biaya per pemanggilan API, sedangkan aws s3api disediakan gratis"
      },
      {
        "id": "B",
        "text": "Kedua kelompok perintah memiliki fungsi dan cakupan parameter yang sepenuhnya identik"
      },
      {
        "id": "C",
        "text": "Perintah aws s3 dikhususkan untuk lingkungan Windows, sedangkan aws s3api hanya untuk Linux"
      },
      {
        "id": "D",
        "text": "Perintah aws s3 menyediakan utilitas tingkat tinggi (high-level), sedangkan aws s3api menyediakan pemetaan langsung granular 1-to-1 ke S3 REST API (low-level)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Kelompok perintah 'aws s3' menyediakan abstraksi tingkat tinggi (seperti sync, cp, mb) yang mudah digunakan manusia. Sebaliknya, 'aws s3api' mengekspos pemetaan langsung tingkat rendah (low-level) 1-to-1 terhadap seluruh operasi S3 REST API untuk kontrol yang presisi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0002",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang sedang merancang arsitektur penyimpanan objek baru menggunakan Amazon S3 untuk mendukung aplikasi global. Sebelum membuat bucket, tim harus memastikan penamaan bucket mematuhi konvensi DNS dan standar penamaan AWS. Manakah aturan penamaan bucket Amazon S3 yang benar dan wajib dipatuhi di seluruh dunia?",
    "options": [
      {
        "id": "A",
        "text": "Nama bucket wajib diawali dengan kata awalan 'aws-' di depan setiap nama"
      },
      {
        "id": "B",
        "text": "Nama bucket boleh menggunakan huruf kapital asalkan unik di dalam satu AWS Region"
      },
      {
        "id": "C",
        "text": "Nama bucket harus unik secara global di seluruh dunia serta hanya terdiri dari huruf kecil, angka, dan tanda minus (-)"
      },
      {
        "id": "D",
        "text": "Nama bucket boleh sama antar akun AWS asalkan dibuat pada Availability Zone yang berbeda"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nama bucket Amazon S3 berbagi satu namespace global tunggal di seluruh dunia. Nama bucket harus unik secara global dan mematuhi konvensi penamaan DNS: panjang 3-63 karakter, hanya huruf kecil, angka, dan tanda minus (-), serta tanpa huruf kapital atau garis bawah.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0003",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan teknologi finansial membutuhkan solusi pemantauan keamanan cerdas yang mampu mendeteksi ancaman secara berkelanjutan pada akun AWS mereka. Solusi ini harus dapat menganalisis AWS CloudTrail management events, VPC Flow Logs, dan DNS logs menggunakan machine learning untuk mengidentifikasi aktivitas mencurigakan seperti komunikasi ke IP berbahaya. Layanan AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "AWS Shield"
      },
      {
        "id": "C",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection terkelola yang secara kontinu memantau aktivitas mencurigakan dan perilaku tidak sah pada akun AWS dengan menganalisis log dasar seperti CloudTrail events, VPC Flow Logs, dan DNS logs.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0004",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi menjalankan basis data transaksional pada instance Amazon EC2. Beban kerja tersebut memerlukan penyimpanan tingkat blok (block-level storage) yang persisten dan berlatensi rendah untuk diformat sebagai sistem file sistem operasi dan file basis data, serta datanya tetap utuh saat instance EC2 dihentikan (stopped). Layanan penyimpanan AWS manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "D",
        "text": "Amazon Elastic File System (Amazon EFS)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EBS menyediakan volume penyimpanan blok persisten yang dapat dipasang ke instance Amazon EC2 sebagai disk virtual untuk sistem operasi dan database, dengan siklus hidup data independen dari instance.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0005",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah portal berita online memiliki armada server web berbasis Linux yang berjalan di beberapa Availability Zone pada Amazon EC2. Aplikasi web tersebut memerlukan sistem file bersama (shared file system) yang dapat dipasang (mounted) secara simultan oleh puluhan instance menggunakan protokol Network File System (NFSv4). Layanan penyimpanan AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "B",
        "text": "Amazon FSx for Windows File Server"
      },
      {
        "id": "C",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "D",
        "text": "Amazon Elastic File System (Amazon EFS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EFS menyediakan sistem file elastis tanpa server yang mendukung protokol NFSv4 dan dapat dipasang secara bersamaan (multi-attach) oleh ratusan hingga ribuan instance EC2 berbasis Linux di lintas Availability Zone.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0006",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah platform e-commerce ingin memisahkan (decouple) arsitektur monolitiknya menjadi microservices independen. Mereka membutuhkan antrean pesan terdistribusi (message queue) yang dapat menampung pesanan pelanggan secara asinkron sebelum diproses oleh armada worker backend, sehingga lonjakan transaksi tidak membebani database utama. Layanan AWS manakah yang paling sesuai?",
    "options": [
      {
        "id": "A",
        "text": "AWS Step Functions"
      },
      {
        "id": "B",
        "text": "Amazon MQ"
      },
      {
        "id": "C",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "D",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon SQS adalah layanan antrean pesan terdistribusi terkelola penuh yang memungkinkan pemisahan (decoupling) komponen aplikasi terdistribusi dan microservices melalui komunikasi asinkron yang andal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0007",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah institusi perbankan menyimpan jutaan dokumen nasabah di dalam bucket Amazon S3. Untuk mematuhi regulasi perlindungan data pribadi, tim kepatuhan memerlukan layanan terkelola yang secara otomatis memindai dan mengklasifikasikan data sensitif seperti Personally Identifiable Information (PII) dan nomor kartu kredit menggunakan machine learning. Layanan AWS manakah yang menyediakan kapabilitas ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Detective"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "Amazon Macie"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Macie adalah layanan keamanan data terkelola penuh yang menggunakan machine learning dan pencocokan pola untuk secara otomatis menemukan, mengklasifikasikan, dan melindungi data sensitif seperti informasi identitas pribadi (PII) di Amazon S3.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0008",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi retail mengalami lonjakan traffic pengguna yang masif selama periode promosi hari belanja nasional. Sistem arsitektur dirancang agar mampu menambah kapasitas komputasi secara dinamis untuk menangani beban puncak tanpa mengalami penurunan performa. Karakteristik dasar komputasi cloud manakah yang paling tepat menggambarkan kemampuan ini?",
    "options": [
      {
        "id": "A",
        "text": "Skalabilitas (Scalability)"
      },
      {
        "id": "B",
        "text": "Ketersediaan Tinggi (High Availability)"
      },
      {
        "id": "C",
        "text": "Toleransi Kesalahan (Fault Tolerance)"
      },
      {
        "id": "D",
        "text": "Agilitas (Agility)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Skalabilitas (Scalability) adalah kemampuan sistem cloud untuk menangani pertumbuhan beban kerja yang semakin besar dengan menambah sumber daya (scale-up atau scale-out) tanpa mengorbankan performa.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0009",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang arsitek solusi sedang merancang arsitektur aplikasi web yang tangguh dan memiliki toleransi kesalahan (fault-tolerant). Arsitek tersebut memutuskan untuk menyebarkan armada instance Amazon EC2 ke beberapa Availability Zone (AZ) di dalam satu AWS Region. Manakah dari pernyataan berikut yang paling tepat mendefinisikan sebuah AWS Availability Zone?",
    "options": [
      {
        "id": "A",
        "text": "Sebuah kabel serat optik bawah laut global yang menghubungkan dua benua"
      },
      {
        "id": "B",
        "text": "Satu atau lebih pusat data fisik diskret dengan daya, pendingin, dan jaringan terisolasi di dalam satu AWS Region"
      },
      {
        "id": "C",
        "text": "Sebuah negara atau batas yurisdiksi geografis tempat server cloud ditempatkan"
      },
      {
        "id": "D",
        "text": "Sebuah server tunggal terisolasi di dalam kantor cabang fisik pelanggan"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sebuah AWS Availability Zone (AZ) terdiri dari satu atau lebih pusat data fisik diskret yang dilengkapi daya, pendinginan, dan keamanan fisik independen, serta terhubung dengan latensi ultra-rendah ke AZ lain dalam Region yang sama.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0010",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebelum mengajukan anggaran proyek migrasi ke dewan direksi, seorang Manajer TI ingin memperkirakan total biaya bulanan dari rancangan arsitektur AWS yang direncanakan (termasuk komputasi, penyimpanan, dan jaringan) tanpa harus membuat resource apa pun di cloud terlebih dahulu. Alat AWS manakah yang dirancang khusus untuk kebutuhan estimasi pra-peluncuran ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost and Usage Report (CUR)"
      },
      {
        "id": "B",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Pricing Calculator adalah alat web gratis berbasis browser yang memungkinkan pengguna memodelkan solusi arsitektur dan memperkirakan biaya bulanan penggunaan layanan AWS sebelum membangunnya di cloud.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0011",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah game online seluler multipemain membutuhkan basis data NoSQL terkelola penuh tanpa server (serverless) yang mampu menangani jutaan permintaan baca dan tulis profil pemain secara bersamaan dengan latensi konsisten di bawah 10 milidetik (single-digit millisecond latency). Layanan basis data AWS manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS"
      },
      {
        "id": "B",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon Keyspaces"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon DynamoDB adalah layanan basis data NoSQL key-value dan dokumen yang terkelola penuh, serverless, dan mampu menghasilkan performa konsisten satu digit milidetik pada skala apa pun.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0012",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan logistik ingin agar setiap kali ada file manifest pengiriman baru yang diunggah ke bucket Amazon S3, sistem secara otomatis mengirimkan notifikasi pesan instan ke email administrator dan endpoint webhook pemroses internal menggunakan pola publish/subscribe (pub/sub). Layanan AWS manakah yang harus menerima event notification dari S3 tersebut?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "C",
        "text": "Amazon Kinesis Data Streams"
      },
      {
        "id": "D",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon S3 Event Notifications dapat menerbitkan event langsung ke Amazon SNS Topic. SNS kemudian menyiarkan (fan-out) pesan notifikasi tersebut ke berbagai pelanggan (subscribers) seperti email, SMS, HTTP/S endpoints, atau Lambda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0013",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah institusi perbankan sedang menjalani audit kepatuhan eksternal dan auditor meminta laporan sertifikasi keamanan ISO 27001, laporan SOC 1/2/3, serta perjanjian kepatuhan Payment Card Industry (PCI-DSS) dari infrastruktur AWS. Portal swalayan resmi AWS manakah yang menyediakan akses unduh dokumen kepatuhan tersebut secara gratis?",
    "options": [
      {
        "id": "A",
        "text": "AWS Security Hub"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Artifact adalah portal kepatuhan mandiri (self-service) resmi tanpa biaya di konsol AWS untuk mengunduh laporan audit kepatuhan pihak ketiga (SOC, PCI, ISO) dan menyetujui perjanjian kepatuhan (seperti BAA atau GDPR).",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0014",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang Chief Financial Officer (CFO) sedang mengevaluasi keuntungan finansial dari memindahkan pusat data on-premise perusahaan ke AWS Cloud. Keuntungan manakah yang paling tepat menggambarkan dampak finansial dari model pembayaran pay-as-you-go di cloud?",
    "options": [
      {
        "id": "A",
        "text": "Menghilangkan kebutuhan koneksi jaringan internet untuk mengelola infrastruktur"
      },
      {
        "id": "B",
        "text": "Menghilangkan seluruh biaya lisensi perangkat lunak selamanya"
      },
      {
        "id": "C",
        "text": "Kepemilikan fisik perangkat keras server dialihkan menjadi aset permanen perusahaan"
      },
      {
        "id": "D",
        "text": "Mengubah belanja modal di awal yang besar (Capital Expenditures / CapEx) menjadi biaya operasional berkala yang fleksibel (Operating Expenses / OpEx)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Salah satu keuntungan finansial utama komputasi cloud adalah menukar belanja modal awal yang besar untuk pengadaan server fisik (CapEx) menjadi biaya variabel operasional sesuai pemakaian aktual (OpEx / Pay-as-you-go).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0015",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan mengonfigurasi notifikasi event pada Amazon S3 agar mengirim pesan ke Amazon Simple Notification Service (Amazon SNS) Topic setiap kali ada objek baru. Namun, pesan notifikasi gagal terkirim. Konfigurasi perizinan manakah yang wajib diatur agar layanan Amazon S3 memiliki izin memublikasikan pesan ke SNS Topic tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Menambahkan IAM Role pada host CLI Amazon EC2"
      },
      {
        "id": "B",
        "text": "Mengizinkan port inbound HTTP 80 pada Security Group"
      },
      {
        "id": "C",
        "text": "Mengonfigurasi Access Policy (Resource-based Policy) pada SNS Topic yang mengizinkan service principal 's3.amazonaws.com' untuk melakukan aksi 'sns:Publish'"
      },
      {
        "id": "D",
        "text": "Menetapkan Elastic IP publik pada SNS Topic"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SNS menggunakan Resource-based Policy (Access Policy). Agar Amazon S3 dapat memublikasikan pesan notifikasi ke SNS Topic, policy pada topik tersebut harus secara eksplisit memberikan izin 'sns:Publish' kepada service principal 's3.amazonaws.com'.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0016",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah lab riset universitas menjalankan komputasi analisis data genom berskala besar menggunakan kontainer Docker. Beban kerja ini bersifat fleksibel terhadap waktu, dapat diinterupsi sewaktu-waktu, dan dapat dimulai kembali tanpa kehilangan progres penting. Opsi pembelian Amazon EC2 manakah yang menawarkan penghematan biaya terbesar (diskon hingga 90%)?",
    "options": [
      {
        "id": "A",
        "text": "Spot Instances"
      },
      {
        "id": "B",
        "text": "On-Demand Instances"
      },
      {
        "id": "C",
        "text": "Dedicated Hosts"
      },
      {
        "id": "D",
        "text": "Reserved Instances"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EC2 Spot Instances memanfaatkan kapasitas komputasi cadangan (spare capacity) AWS yang tidak terpakai dengan diskon hingga 90% dibandingkan tarif On-Demand, sangat ideal untuk beban kerja yang tahan interupsi (fault-tolerant/batch).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0017",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi yang berjalan pada instance Amazon EC2 perlu membaca dan menulis data ke bucket Amazon S3 secara berkala. Menurut rekomendasi keamanan terbaik AWS (Security Best Practices), entitas IAM manakah yang harus dilampirkan ke instance EC2 untuk memberikan kredensial keamanan sementara secara otomatis tanpa perlu menyimpan Access Key statis di server?",
    "options": [
      {
        "id": "A",
        "text": "IAM User"
      },
      {
        "id": "B",
        "text": "IAM Policy Standalone tanpa asosiasi"
      },
      {
        "id": "C",
        "text": "IAM Role"
      },
      {
        "id": "D",
        "text": "IAM Group"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "IAM Role dilampirkan ke instance EC2 (via Instance Profile) untuk menyediakan kredensial keamanan sementara yang dirotasi secara otomatis oleh AWS, menghilangkan risiko penyimpanan hardcoded access keys pada server.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0018",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah lembaga keuangan diwajibkan oleh regulator untuk menyimpan salinan arsip data audit transaksi selama 7 hingga 10 tahun. Data arsip ini sangat jarang sekali diakses (mungkin sekali dalam beberapa tahun), dan waktu pemulihan data (retrieval time) dalam rentang 12 hingga 48 jam dapat diterima demi efisiensi biaya maksimum. Storage class Amazon S3 manakah yang menawarkan biaya penyimpanan per gigabyte terendah?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Express One Zone"
      },
      {
        "id": "B",
        "text": "Amazon S3 Glacier Deep Archive"
      },
      {
        "id": "C",
        "text": "Amazon S3 One Zone-IA"
      },
      {
        "id": "D",
        "text": "Amazon S3 Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon S3 Glacier Deep Archive adalah kelas penyimpanan terendah biayanya di AWS untuk arsip jangka panjang yang sangat jarang diakses dengan waktu pemulihan standar dalam 12 jam.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0019",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan rintisan baru saja membuka akun AWS baru untuk pertama kalinya. Menurut rekomendasi keamanan terbaik (AWS Security Best Practices), tindakan keamanan PALING krusial apakah yang harus segera diterapkan pada akun AWS Root User?",
    "options": [
      {
        "id": "A",
        "text": "Menghapus password akun root dan menonaktifkan akun tersebut"
      },
      {
        "id": "B",
        "text": "Membuat Access Key ID dan Secret Access Key permanen untuk mengotomatisasi pekerjaan root"
      },
      {
        "id": "C",
        "text": "Membagikan kredensial root ke seluruh anggota tim pengembang untuk memudahkan administrasi"
      },
      {
        "id": "D",
        "text": "Mengaktifkan Multi-Factor Authentication (MFA) pada akun root dan mengunci kredensialnya dari penggunaan operasional harian"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Akun AWS Root User memiliki akses tanpa batas ke seluruh resource dan penagihan akun. Praktik terbaik keamanan AWS mewajibkan pengaktifan Multi-Factor Authentication (MFA) pada root user dan tidak menggunakannya untuk tugas harian.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0020",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah portal e-commerce publik yang dihosting di AWS mengalami peningkatan serangan eksploitasi pada Application Layer (Layer 7), seperti SQL Injection (SQLi) dan Cross-Site Scripting (XSS). Layanan keamanan AWS manakah yang harus dipasang di depan Application Load Balancer atau Amazon CloudFront untuk memfilter dan memblokir permintaan berbahaya tersebut?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF (Web Application Firewall)"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS Shield Standard"
      },
      {
        "id": "D",
        "text": "AWS Network Firewall"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS WAF adalah Web Application Firewall yang beroperasi pada OSI Layer 7 (Application Layer) untuk melindungi aplikasi web dari eksploitasi web umum seperti SQL Injection dan XSS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0021",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah korporasi skala besar berencana memigrasikan sistem ERP mission-critical mereka ke AWS. Perusahaan memerlukan akses 24/7 ke teknisi senior via telepon, review arsitektur secara berkala, serta seorang Technical Account Manager (TAM) khusus yang didedikasikan untuk mendampingi operasional cloud mereka. Tingkat AWS Support Plan manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "Basic Support Plan"
      },
      {
        "id": "B",
        "text": "Developer Support Plan"
      },
      {
        "id": "C",
        "text": "Business Support Plan"
      },
      {
        "id": "D",
        "text": "Enterprise Support Plan"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Paket AWS Enterprise Support adalah satu-satunya paket support yang menyediakan Technical Account Manager (TAM) yang didedikasikan secara eksklusif serta dukungan Concierge dan konsultasi arsitektur proaktif.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0022",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan membutuhkan layanan Domain Name System (DNS) web cloud yang sangat andal, hemat biaya, dan memiliki ketersediaan 100% SLA untuk menerjemahkan nama domain publik (seperti www.perusahaan.com) menjadi alamat IP pada port 53. Layanan jaringan AWS manakah yang menyediakan fungsi DNS ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "Amazon Route 53"
      },
      {
        "id": "C",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Virtual Private Cloud (Amazon VPC)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Route 53 adalah layanan web Domain Name System (DNS) cloud yang sangat andal dan scalable yang dirancang untuk merutekan traffic pengguna ke endpoint aplikasi pada standar port 53.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0023",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Di bawah model tanggung jawab bersama AWS (AWS Shared Responsibility Model), AWS bertanggung jawab atas 'keamanan dari cloud' (security OF the cloud). Manakah dari aspek berikut yang secara eksklusif menjadi tanggung jawab langsung AWS?",
    "options": [
      {
        "id": "A",
        "text": "Mengonfigurasi aturan firewall Security Group pada instance Amazon EC2"
      },
      {
        "id": "B",
        "text": "Melakukan instalasi patch pembaruan keamanan pada sistem operasi tamu (guest OS)"
      },
      {
        "id": "C",
        "text": "Mengatur enkripsi data at-rest pada tabel database pelanggan"
      },
      {
        "id": "D",
        "text": "Keamanan fisik fasilitas pusat data, rak server, perangkat keras komputasi, dan lapisan hypervisor"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS bertanggung jawab atas keamanan 'dari' cloud (security OF the cloud), yang mencakup infrastruktur fisik pusat data, perangkat keras server, fasilitas kelistrikan/pendingin, dan lapisan virtualisasi (hypervisor).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0024",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang aplikasi ingin menjalankan kode logika bisnis dalam bahasa Python saat ada pesan transaksi masuk, tanpa perlu memprovisikan, mengonfigurasi, atau mengelola server maupun sistem operasi yang mendasarinya. Layanan komputasi serverless AWS manakah yang paling tepat digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Container Service (Amazon ECS)"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "AWS Lambda"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Lambda adalah layanan komputasi tanpa server (serverless) yang mengeksekusi kode berdasarkan event (event-driven) dan mengelola seluruh infrastruktur komputasi secara otomatis.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0025",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi enterprise menggunakan AWS Organizations untuk mengelola puluhan akun AWS milik berbagai divisi bisnis. Tim tata kelola keamanan ingin menetapkan batasan izin maksimum terpusat (guardrails) yang secara tegas melarang seluruh akun anggota menonaktifkan CloudTrail atau meluncurkan resource di luar Region tertentu. Fitur AWS Organizations manakah yang harus diterapkan?",
    "options": [
      {
        "id": "A",
        "text": "IAM Managed Policies"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "AWS Resource Access Manager (AWS RAM)"
      },
      {
        "id": "D",
        "text": "Network Access Control Lists (NACLs)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Service Control Policies (SCPs) di AWS Organizations berfungsi sebagai guardrails perizinan maksimum untuk membatasi aksi yang dapat dilakukan oleh akun-akun anggota di dalam organisasi.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0026",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan e-commerce membutuhkan basis data relasional berkinerja tinggi yang sepenuhnya kompatibel dengan MySQL dan PostgreSQL, mampu menghasilkan throughput hingga 5 kali lipat dibanding MySQL standar, serta secara otomatis mereplikasi 6 salinan data di 3 Availability Zone. Layanan basis data terkelola AWS manakah yang dirancang khusus untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon Aurora"
      },
      {
        "id": "D",
        "text": "Amazon DocumentDB"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Aurora adalah basis data relasional proprietary terkelola penuh dari AWS yang kompatibel dengan MySQL dan PostgreSQL, menawarkan kecepatan hingga 5x MySQL dengan penyimpanan terdistribusi berdaya tahan tinggi (6 salinan di 3 AZ).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0027",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang Network Security Engineer sedang merancang lapisan pertahanan perimeter untuk Amazon VPC. Engineer tersebut membutuhkan firewall virtual di tingkat subnet yang bersifat tanpa status (stateless), di mana aturan inbound dan outbound harus dievaluasi secara eksplisit berdasarkan nomor urutan aturan (rule number). Komponen keamanan VPC manakah yang memiliki karakteristik tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Security Group"
      },
      {
        "id": "B",
        "text": "Network Access Control List (NACL)"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "NAT Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network Access Control List (NACL) adalah firewall virtual opsional di tingkat subnet yang bersifat stateless, memproses aturan bernomor secara berurutan, dan mengharuskan izin lalu lintas masuk maupun balasan keluar didefinisikan secara eksplisit.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0028",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang administrator keamanan AWS sedang menyusun kebijakan hak akses IAM bagi karyawan baru di departemen akuntansi. Administrator tersebut memastikan bahwa setiap staf hanya diberikan izin akses minimum yang benar-benar esensial untuk menyelesaikan tugas operasional harian mereka, dan tidak lebih. Prinsip keamanan informasi manakah yang diterapkan?",
    "options": [
      {
        "id": "A",
        "text": "Separation of Duties"
      },
      {
        "id": "B",
        "text": "Defense in Depth"
      },
      {
        "id": "C",
        "text": "Principle of Least Privilege (Prinsip Hak Akses Terkecil)"
      },
      {
        "id": "D",
        "text": "Implicit Allow"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Principle of Least Privilege (Prinsip Hak Akses Terkecil) menyatakan bahwa identitas pengguna atau sistem hanya boleh diberikan hak akses minimum yang mutlak diperlukan untuk melakukan tugas kerja mereka.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0029",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs media berita global memiliki pembaca yang tersebar di seluruh benua. Untuk mempercepat pemuatan halaman web dan meminimalkan latensi jaringan, perusahaan ingin menyimpan salinan konten statis (gambar, CSS, video) pada titik kehadiran jaringan (Edge Locations) yang berada paling dekat dengan lokasi fisik pengguna. Layanan Content Delivery Network (CDN) AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "B",
        "text": "Amazon Route 53"
      },
      {
        "id": "C",
        "text": "Amazon CloudFront"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon CloudFront adalah layanan Content Delivery Network (CDN) global yang mengantarkan data, video, dan aplikasi web secara aman dengan latensi rendah dan kecepatan transfer tinggi memanfaatkan jaringan Edge Locations AWS di seluruh dunia.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0030",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah tim arsitek ingin memastikan bahwa pengguna dari departemen media hanya dapat mengunggah file ke prefix folder tertentu ('images/*') di dalam bucket Amazon S3 perusahaan, dan tidak diizinkan memodifikasi folder lainnya. Kebijakan perizinan manakah yang paling tepat diterapkan untuk membatasi akses secara granular tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Mengaktifkan S3 Object Lock pada seluruh konfigurasi bucket"
      },
      {
        "id": "B",
        "text": "Mengaktifkan fitur S3 Block Public Access di tingkat akun"
      },
      {
        "id": "C",
        "text": "Mengatur Security Group inbound rules pada port HTTPS 443"
      },
      {
        "id": "D",
        "text": "Membuat IAM Policy dengan elemen Condition yang membatasi hak akses 's3:PutObject' berdasarkan resource prefix (misal: arn:aws:s3:::bucket-name/images/*)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Dengan menggunakan IAM Policy yang dilengkapi elemen Resource ARN spesifik dan Condition prefix (seperti images/*), administrator dapat secara granular membatasi aksi unggah (s3:PutObject) hanya pada folder tertentu dalam bucket S3.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0031",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi pengolahan citra memerlukan ruang penyimpanan file bersama yang dapat di-mount secara elastis melalui protokol NFSv4 oleh puluhan instance Amazon EC2 berbasis Linux di beberapa Availability Zone secara bersamaan. Layanan penyimpanan AWS manakah yang dirancang untuk skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "C",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EFS menyediakan penyimpanan sistem file bersama berbasis NFS yang elastis, terkelola, dan dapat di-mount secara bersamaan oleh banyak instance Linux di berbagai Availability Zone.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0032",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah tim keamanan siber ingin mendeteksi potensi kompromi pada akun AWS, seperti adanya instance EC2 yang berkomunikasi dengan botnet atau pemanggilan API IAM dari IP yang masuk daftar hitam (blacklisted). Mereka memerlukan layanan deteksi ancaman cerdas bertenaga machine learning yang menganalisis VPC Flow Logs dan DNS logs secara otomatis. Layanan AWS manakah yang dimaksud?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty menggunakan algoritma machine learning dan threat intelligence terintegrasi untuk menganalisis miliaran event dari VPC Flow Logs, DNS logs, dan CloudTrail guna mendeteksi ancaman keamanan secara cerdas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0033",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Dalam model tanggung jawab bersama AWS (Shared Responsibility Model), pelanggan bertanggung jawab atas 'keamanan di dalam cloud' (security IN the cloud). Manakah dari aktivitas operasional berikut yang menjadi tanggung jawab pelanggan saat menjalankan server aplikasi pada Amazon EC2?",
    "options": [
      {
        "id": "A",
        "text": "Perawatan dan penggantian modul RAM fisik pada server pusat data"
      },
      {
        "id": "B",
        "text": "Pembaruan firmware pada router jaringan fisik pusat data"
      },
      {
        "id": "C",
        "text": "Pembaruan patch keamanan pada sistem operasi tamu (guest OS) dan konfigurasi aturan Security Group"
      },
      {
        "id": "D",
        "text": "Pemusnahan fisik media penyimpanan hard disk yang telah usang di fasilitas AWS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pada layanan IaaS seperti Amazon EC2, pelanggan bertanggung jawab penuh atas konfigurasi firewall (Security Group), pengelolaan patch sistem operasi tamu (guest OS), perangkat lunak aplikasi, dan enkripsi data pelanggan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0034",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang Cloud Financial Manager ingin menetapkan batas pengeluaran bulanan sebesar $1.000 untuk lingkungan pengembangan (development) dan menerima notifikasi email otomatis jika perkiraan biaya (forecasted cost) diproyeksikan akan melampaui 80% dari batas anggaran sebelum akhir bulan. Layanan AWS Cost Management manakah yang paling tepat digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost and Usage Report (CUR)"
      },
      {
        "id": "B",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "C",
        "text": "AWS Cost Anomaly Detection"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Budgets memungkinkan pengguna menetapkan anggaran biaya dan penggunaan kustom, serta memicu notifikasi peringatan (via SNS/email) saat biaya aktual atau perkiraan (forecasted) melampaui batas ambang batas tertentu.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0035",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi perbankan perlu mengirimkan konfirmasi transaksi belanja kepada nasabah secara serentak ke berbagai saluran komunikasi, seperti pesan teks SMS, email, dan webhook backend menggunakan arsitektur publish/subscribe satu-ke-banyak (fan-out). Layanan pesan terkelola AWS manakah yang harus diintegrasikan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon MQ"
      },
      {
        "id": "D",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon SNS adalah layanan pesan terkelola berbasis pub/sub yang menyediakan pengiriman pesan satu-ke-banyak (fan-out) berkecepatan tinggi ke berbagai penerima seperti SMS, email, SQS queue, dan fungsi Lambda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0036",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang eksekutif bisnis menanyakan keuntungan finansial utama dari adopsi cloud dibandingkan mempertahankan pusat data tradisional. Penjelasan manakah yang paling akurat mengenai keunggulan model finansial komputasi cloud?",
    "options": [
      {
        "id": "A",
        "text": "Menjamin biaya infrastruktur menjadi nol rupiah setelah 3 tahun berjalan"
      },
      {
        "id": "B",
        "text": "Mewajibkan perusahaan membayar seluruh biaya estimasi 5 tahun di awal kontrak"
      },
      {
        "id": "C",
        "text": "Menggantikan belanja modal awal yang besar (CapEx) dengan biaya operasional variabel yang dapat disesuaikan kebutuhan bisnis (OpEx)"
      },
      {
        "id": "D",
        "text": "Mengalihkan kepemilikan aset fisik pusat data menjadi hak milik pelanggan"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Komputasi cloud memungkinkan bisnis berhenti membelanjakan modal besar di awal (CapEx) untuk pembelian perangkat keras, dan beralih ke biaya operasional variabel (OpEx) yang hanya dibayar sesuai sumber daya yang digunakan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0037",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah startup fintech merancang arsitektur sistem pembayarannya agar mampu secara mulus memperbesar kapasitas pemrosesan server saat volume transaksi meningkat drastis, sehingga tidak terjadi kelebihan beban pada sistem. Karakteristik arsitektur cloud manakah yang paling tepat menggambarkan hal ini?",
    "options": [
      {
        "id": "A",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "B",
        "text": "Ketersediaan Tinggi (High Availability)"
      },
      {
        "id": "C",
        "text": "Portabilitas (Portability)"
      },
      {
        "id": "D",
        "text": "Skalabilitas (Scalability)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Skalabilitas (Scalability) adalah kapasitas sistem untuk menangani pertumbuhan beban kerja secara bertahap atau mendadak dengan meningkatkan kemampuan sumber daya komputasi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0038",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi analitik data di Amazon EC2 membutuhkan izin untuk membaca objek dari bucket Amazon S3. Untuk mematuhi prinsip keamanan terbaik AWS tanpa perlu menyimpan Access Key ID dan Secret Access Key di dalam file konfigurasi server, entitas IAM manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role"
      },
      {
        "id": "B",
        "text": "IAM User"
      },
      {
        "id": "C",
        "text": "IAM Group"
      },
      {
        "id": "D",
        "text": "Root Account Credential"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "IAM Role adalah mekanisme terbaik dan paling aman untuk memberikan izin akses AWS ke sumber daya seperti instance Amazon EC2 karena menggunakan kredensial temporer yang dirotasi otomatis oleh sistem.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0039",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah instansi pemerintah menyimpan arsip data kependudukan dalam format dokumen teks dan PDF di Amazon S3. Mereka membutuhkan alat audit keamanan berbasis kecerdasan buatan (AI/ML) yang dapat memindai isi bucket secara otomatis untuk menemukan Nomor Induk Kependudukan (NIK) dan data sensitif lainnya yang belum terenkripsi. Layanan AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "Amazon Macie"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Macie memanfaatkan machine learning untuk secara otomatis menemukan, memindai, mengklasifikasikan, dan melindungi data pribadi (Personally Identifiable Information / PII) yang tersimpan di Amazon S3.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0040",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan e-commerce merancang sistem infrastrukturnya di AWS agar tetap dapat melayani transaksi pengguna tanpa downtime, meskipun salah satu komponen server atau bahkan satu data center Availability Zone mengalami kegagalan total. Konsep arsitektur cloud manakah yang diterapkan oleh perusahaan ini?",
    "options": [
      {
        "id": "A",
        "text": "Skalabilitas Vertikal (Vertical Scalability)"
      },
      {
        "id": "B",
        "text": "Agilitas Bisnis (Business Agility)"
      },
      {
        "id": "C",
        "text": "Toleransi Kesalahan dan Ketersediaan Tinggi (Fault Tolerance & High Availability)"
      },
      {
        "id": "D",
        "text": "Elastisitas Biaya (Cost Elasticity)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Fault Tolerance (Toleransi Kesalahan) dan High Availability (Ketersediaan Tinggi) memastikan sistem tetap beroperasi normal dan melayani pengguna tanpa henti meskipun ada komponen infrastruktur yang mengalami kegagalan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0041",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang konsultan cloud sedang menyusun proposal arsitektur bagi calon klien yang ingin memindahkan infrastruktur on-premise ke AWS. Konsultan perlu menyajikan simulasi perkiraan biaya bulanan dari kombinasi instance EC2, volume EBS, dan database RDS SEBELUM akun AWS dibuat. Alat resmi AWS manakah yang harus dimanfaatkan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Cost and Usage Report"
      },
      {
        "id": "D",
        "text": "AWS Pricing Calculator"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Pricing Calculator adalah alat kalkulator estimasi web resmi gratis dari AWS yang membantu merancang arsitektur solusi dan memproyeksikan total biaya pemakaian sebelum sistem benar-benar diluncurkan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0042",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah holding company mengelola beberapa anak perusahaan dengan masing-masing akun AWS terpisah. Mereka ingin menyatukan pembayaran seluruh tagihan akun di bawah satu faktur pembayaran bulanan sekaligus mendapatkan keuntungan diskon volume (tiered pricing discounts) pada layanan seperti Amazon S3 dan transfer data. Fitur AWS Organizations manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Consolidated Billing"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "D",
        "text": "AWS Resource Access Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Fitur Consolidated Billing di AWS Organizations menggabungkan tagihan dari seluruh akun anggota ke dalam satu akun pembayaran (Management Account), memungkinkan akumulasi penggunaan untuk mendapatkan diskon volume.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0043",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi pemesanan tiket bioskop mengalami perlambatan saat ribuan pengguna memesan tiket bersamaan. Arsitek solusi ingin memisahkan modul penerima pesanan dari modul pemrosesan pembayaran menggunakan antrean pesan yang andal agar pesanan tidak hilang jika modul pembayaran sedang sibuk. Layanan AWS manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "B",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "C",
        "text": "AWS Step Functions"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis Data Streams"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon SQS menyediakan antrean pesan (message queuing) terdistribusi yang sangat andal untuk memisahkan komponen sistem (decoupling) dan menampung pesan transaksi hingga komponen konsumen siap memprosesnya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0044",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan layanan kesehatan yang diatur ketat oleh regulasi sedang mempersiapkan audit eksternal. Tim audit meminta salinan sertifikat kepatuhan HIPAA dan laporan audit SOC 2 dari infrastruktur cloud AWS. Di manakah tim keamanan perusahaan dapat mengunduh dokumen-dokumen resmi tersebut secara mandiri?",
    "options": [
      {
        "id": "A",
        "text": "AWS Artifact"
      },
      {
        "id": "B",
        "text": "AWS Security Hub"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Artifact adalah portal kepatuhan sentral di konsol AWS tempat pelanggan dapat mengunduh dokumen kepatuhan pihak ketiga, laporan audit keamanan SOC/PCI/ISO, serta menyetujui perjanjian kepatuhan secara on-demand.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0045",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan rintisan AI ingin melatih model machine learning menggunakan armada server komputasi berkekuatan tinggi. Pelatihan model ini dapat dijeda dan dilanjutkan kapan saja tanpa merusak data jika kapasitas komputasi ditarik kembali oleh AWS. Model penetapan harga Amazon EC2 manakah yang paling ekonomis?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Reserved Instances"
      },
      {
        "id": "C",
        "text": "Dedicated Hosts"
      },
      {
        "id": "D",
        "text": "Spot Instances"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Spot Instances menawarkan penghematan biaya terbesar (diskon hingga 90%) untuk beban kerja yang tahan interupsi (seperti pelatihan model ML, rendering video, atau batch computing) dengan memanfaatkan kapasitas EC2 yang menganggur.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0046",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang System Administrator perlu menginstal agen pemantauan Amazon CloudWatch secara serentak ke 200 instance Amazon EC2 berbasis Linux tanpa perlu membuka port 22 SSH dan tanpa perlu masuk ke setiap instance secara manual satu per satu. Layanan AWS manakah yang menyediakan kemampuan eksekusi perintah jarak jauh berskala besar ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2 Instance Connect"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager (SSM) Run Command"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Systems Manager Run Command memungkinkan administrator mengelola konfigurasi dan menjalankan skrip atau perintah shell pada armada instance EC2 berskala besar secara aman tanpa perlu koneksi SSH langsung.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0047",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur keamanan cloud ingin menambahkan aturan firewall tambahan pada batas subnet di dalam Amazon VPC untuk secara eksplisit menolak (deny) lalu lintas masuk dari rentang alamat IP penyerang tertentu. Komponen keamanan VPC manakah yang harus dikonfigurasi?",
    "options": [
      {
        "id": "A",
        "text": "Security Group"
      },
      {
        "id": "B",
        "text": "Network Access Control List (NACL)"
      },
      {
        "id": "C",
        "text": "NAT Gateway"
      },
      {
        "id": "D",
        "text": "Route Table"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network Access Control List (NACL) bekerja di tingkat subnet, bersifat stateless, dan memiliki kemampuan unik untuk mendefinisikan aturan ALLOW maupun DENY eksplisit berdasarkan alamat IP.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0048",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi web mencatat jutaan baris log akses ke Amazon CloudWatch Logs. Tim operasional ingin menghitung jumlah kemunculan pesan kesalahan HTTP 404 pada log tersebut dan mengubahnya menjadi metrik numerik yang dapat ditampilkan di dashboard CloudWatch serta dipasangi alarm. Fitur CloudWatch Logs manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Subscription Filters"
      },
      {
        "id": "B",
        "text": "Log Insights query export"
      },
      {
        "id": "C",
        "text": "CloudWatch Contributor Insights"
      },
      {
        "id": "D",
        "text": "Metric Filter"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Metric Filter pada CloudWatch Logs memungkinkan ekstraksi pola teks atau istilah tertentu dari data log (seperti status HTTP 404) dan mengubah frekuensi kemunculannya menjadi metrik numerik kuantitatif di CloudWatch.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0049",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Kebijakan keamanan di sebuah korporasi mewajibkan seluruh pengembang hanya diberikan hak akses ke bucket S3 lingkungan pengujian (development) dan dilarang keras mengakses lingkungan produksi. Praktik pemberian hak akses seminimal mungkin sesuai batasan tanggung jawab pekerjaan ini dikenal dengan istilah apa?",
    "options": [
      {
        "id": "A",
        "text": "Separation of Duties"
      },
      {
        "id": "B",
        "text": "Defense in Depth"
      },
      {
        "id": "C",
        "text": "Principle of Least Privilege"
      },
      {
        "id": "D",
        "text": "Role-Based Access Control Eksklusif"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Principle of Least Privilege (Prinsip Hak Akses Terkecil) adalah praktik keamanan dasar di mana pengguna, proses, atau sistem hanya diberikan hak akses minimum yang mutlak diperlukan untuk menyelesaikan fungsi pekerjaannya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0050",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan ingin mengoptimalkan infrastruktur cloud mereka dan membutuhkan alat otomatis yang secara rutin memeriksa akun AWS terhadap praktik terbaik industri seputar optimalisasi biaya, performa, keamanan, toleransi kesalahan, dan batas kuota layanan. Layanan inspeksi AWS manakah yang menyediakan rekomendasi ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Trusted Advisor adalah alat terkelola yang memberikan rekomendasi waktu-nyata untuk membantu pelanggan mematuhi praktik terbaik AWS dalam 5 kategori: Cost Optimization, Security, Fault Tolerance, Performance, dan Service Quotas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0051",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah tim tata kelola kepatuhan cloud ingin memantau konfigurasi seluruh resource AWS secara berkelanjutan. Mereka perlu mendeteksi secara otomatis apakah ada volume Amazon EBS yang tidak terpasang (unattached) atau instance EC2 yang tidak memiliki tag wajib sesuai standar perusahaan. Layanan audit kepatuhan konfigurasi AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Config menyediakan inventaris resource, pencatatan riwayat konfigurasi, dan evaluasi kepatuhan konfigurasi secara otomatis terhadap aturan (rules) yang telah ditentukan, seperti mendeteksi volume EBS unattached atau tag yang hilang.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0052",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Setelah terjadinya insiden perubahan konfigurasi Security Group yang tidak sah, tim audit keamanan perlu menyelidiki siapa pelaku yang melakukan perubahan tersebut, kapan tindakan dilakukan, dan alamat IP asal pemanggil API. Layanan pencatatan dan audit tata kelola AWS manakah yang menyimpan riwayat seluruh aktivitas API ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch Logs"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "AWS Shield"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CloudTrail mencatat seluruh aktivitas pemanggilan API dan login di akun AWS, menyediakan catatan audit komprehensif mengenai 'siapa melakukan apa, dari mana, dan kapan'.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0053",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang arsitek cloud sedang menjelaskan rancangan ketahanan infrastruktur kepada manajemen. Arsitek tersebut menekankan bahwa sistem akan ditempatkan di beberapa Availability Zone di Region Jakarta (ap-southeast-3). Manakah penjelasan yang paling tepat mengenai karakteristik sebuah AWS Availability Zone (AZ)?",
    "options": [
      {
        "id": "A",
        "text": "Satu atau lebih pusat data fisik diskret dengan sumber daya listrik, pendingin, dan koneksi jaringan redundan di dalam satu Region"
      },
      {
        "id": "B",
        "text": "Pusat data bersama pihak ketiga yang disewa oleh banyak penyedia cloud publik"
      },
      {
        "id": "C",
        "text": "Sebuah zona geografis yang mencakup seluruh negara di Asia Tenggara"
      },
      {
        "id": "D",
        "text": "Titik kehadiran edge (Edge Location) yang hanya berfungsi melayani caching DNS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Availability Zone (AZ) adalah satu atau sekumpulan data center fisik yang terisolasi secara infrastruktur (daya, pendingin, fisik) namun terhubung dengan latensi sangat rendah di dalam satu Region AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0054",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan sedang meninjau rancangan arsitektur sistem mereka berdasarkan panduan AWS Well-Architected Framework. Tim ingin memastikan bahwa arsitektur yang dibuat menghindari alokasi kapasitas berlebih (overprovisioning) dan selalu memilih opsi model penetapan harga yang paling ekonomis. Pilar Well-Architected Framework manakah yang berfokus pada tujuan ini?",
    "options": [
      {
        "id": "A",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "B",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "C",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "D",
        "text": "Keunggulan Operasional (Operational Excellence)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Cost Optimization (Optimalisasi Biaya) pada AWS Well-Architected Framework berfokus pada kemampuan menjalankan sistem untuk memberikan nilai bisnis pada titik harga serendah mungkin tanpa mengorbankan kualitas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0055",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi perbankan digital membutuhkan basis data NoSQL terkelola penuh yang dapat menyimpan data sesi pengguna dengan latensi baca dan tulis di bawah 10 milidetik secara konsisten, bahkan saat menangani puluhan juta permintaan per detik. Layanan basis data AWS manakah yang paling sesuai?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for PostgreSQL"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon Aurora Serverless"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon DynamoDB adalah basis data NoSQL key-value dan dokumen yang serverless, terkelola penuh, dan menawarkan latensi konsisten di bawah satu digit milidetik pada skala apa pun.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0056",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang insinyur operasional mengamati metrik bawaan Amazon CloudWatch untuk sebuah instance Amazon EC2. Insinyur tersebut dapat melihat grafik utilisasi CPU dan Network In/Out, namun metrik utilisasi memori (RAM) tidak muncul secara default. Mengapa metrik utilisasi RAM tidak tersedia secara default di Amazon CloudWatch?",
    "options": [
      {
        "id": "A",
        "text": "AWS membatasi visibilitas metrik RAM hanya untuk tipe instance berukuran besar (metal)"
      },
      {
        "id": "B",
        "text": "Utilisasi RAM hanya dapat dipantau jika instance EC2 berjalan di dalam Subnet Publik"
      },
      {
        "id": "C",
        "text": "RAM berada di dalam sistem operasi tamu (guest OS) yang terisolasi dari lapisan hypervisor AWS, sehingga membutuhkan agen internal CloudWatch"
      },
      {
        "id": "D",
        "text": "CloudWatch hanya mendukung pemantauan metrik pada basis data, bukan pada server komputasi"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Di bawah model Shared Responsibility, AWS Hypervisor tidak dapat mengintip ke dalam memori sistem operasi tamu (guest OS) demi privasi dan keamanan. Untuk memantau utilisasi RAM, pelanggan wajib menginstal CloudWatch Agent di dalam instance.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0057",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim DevOps ingin mengotomatiskan respons insiden secara instan. Begitu sebuah instance Amazon EC2 produksi berubah statusnya menjadi 'Stopped', sistem harus segera memicu fungsi AWS Lambda untuk mengirimkan peringatan darurat ke kanal chat tim. Layanan perutean event tanpa server AWS manakah yang paling tepat menangani skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail Event History"
      },
      {
        "id": "C",
        "text": "Amazon Kinesis Data Firehose"
      },
      {
        "id": "D",
        "text": "Amazon EventBridge (sebelumnya Amazon CloudWatch Events)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EventBridge (sebelumnya CloudWatch Events) adalah layanan event bus serverless yang mengalirkan event perubahan status resource AWS (seperti perubahan status instance EC2) secara real-time ke target seperti fungsi AWS Lambda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0058",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah rumah sakit diwajibkan menyimpan rekaman hasil rontgen dan pemindaian medis pasien selama 15 tahun untuk kepatuhan hukum. Data ini hampir tidak pernah diakses kembali setelah disimpan, dan waktu pengambilan data (retrieval time) dalam rentang 12 jam dapat diterima sepenuhnya demi biaya penyimpanan seminimal mungkin. Storage class Amazon S3 manakah yang paling ekonomis?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Standard-Infrequent Access"
      },
      {
        "id": "B",
        "text": "Amazon S3 Glacier Deep Archive"
      },
      {
        "id": "C",
        "text": "Amazon S3 One Zone-Infrequent Access"
      },
      {
        "id": "D",
        "text": "Amazon S3 Glacier Instant Retrieval"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon S3 Glacier Deep Archive adalah storage class paling murah di AWS untuk arsip jangka panjang yang sangat jarang diakses, dengan waktu pengambilan data standar sekitar 12 jam.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0059",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan rintisan ingin memeriksa apakah akun AWS mereka memiliki port keamanan yang terbuka bebas ke internet (0.0.0.0/0), apakah ada volume EBS yang menganggur, atau apakah ada instance EC2 yang kurang dimanfaatkan. Layanan AWS manakah yang secara proaktif menyajikan rekomendasi best practice seputar biaya, performa, keamanan, dan toleransi kesalahan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "AWS Config Rules"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Trusted Advisor bertindak sebagai konsultan cloud otomatis yang memberikan rekomendasi nyata berdasarkan pilar best practice AWS: cost optimization, security, fault tolerance, performance, dan service quotas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0060",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Selama sesi investigasi keamanan forensik, tim insinyur perlu meneliti file-file log AWS CloudTrail yang tersimpan dalam format terkompresi JSON di bucket Amazon S3. Mereka ingin menjalankan query SQL standar langsung ke file log di S3 tersebut tanpa perlu memuat data ke basis data relasional atau mengelola server. Layanan analitik serverless AWS manakah yang digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
      },
      {
        "id": "B",
        "text": "Amazon Athena"
      },
      {
        "id": "C",
        "text": "Amazon EMR"
      },
      {
        "id": "D",
        "text": "Amazon OpenSearch Service"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Athena adalah layanan query interaktif serverless yang memungkinkan analisis data langsung di Amazon S3 menggunakan SQL standar tanpa perlu memindahkan data atau mengelola server infrastruktur.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0061",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Dalam tinjauan arsitektur AWS Well-Architected Framework, tim pengembang memilih untuk mengganti server fisik yang jarang terpakai dengan arsitektur komputasi serverless dan memanfaatkan database terkelola untuk memaksimalkan efisiensi sumber daya komputasi. Pilar Well-Architected Framework manakah yang paling didukung oleh keputusan ini?",
    "options": [
      {
        "id": "A",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "B",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "C",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "D",
        "text": "Keberlanjutan (Sustainability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Performance Efficiency (Efisiensi Kinerja) berfokus pada kemampuan menggunakan sumber daya komputasi secara efisien untuk memenuhi persyaratan sistem dan mempertahankan efisiensi tersebut seiring perubahan teknologi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0062",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi multinasional menggunakan AWS Organizations untuk mengelola 50 akun anggota. Tim tata kelola keamanan ingin menetapkan batasan izin maksimum terpusat pada unit organisasi (OU) tertentu untuk mencegah pengguna di akun-akun tersebut membuat resource di luar Region yang disetujui. Fitur AWS Organizations manakah yang harus diterapkan?",
    "options": [
      {
        "id": "A",
        "text": "IAM Roles"
      },
      {
        "id": "B",
        "text": "IAM Permission Boundaries"
      },
      {
        "id": "C",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "D",
        "text": "Resource-based Policies"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Service Control Policies (SCPs) adalah fitur sentral di AWS Organizations yang bertindak sebagai pagar pengaman (guardrails) untuk membatasi izin maksimum yang dapat dimiliki oleh identitas IAM pada akun anggota.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0063",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang administrator keamanan membuka konsol AWS CloudTrail dan meninjau menu Event History untuk memeriksa aktivitas pemanggilan API yang terjadi di akun AWS tanpa mengaktifkan Trail khusus ke bucket S3. Secara default, berapa lamakah AWS CloudTrail menyimpan riwayat log pada menu Event History di konsol?",
    "options": [
      {
        "id": "A",
        "text": "30 hari"
      },
      {
        "id": "B",
        "text": "60 hari"
      },
      {
        "id": "C",
        "text": "90 hari"
      },
      {
        "id": "D",
        "text": "365 hari"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Secara default, menu Event History di konsol AWS CloudTrail menyimpan catatan aktivitas API manajemen selama 90 hari tanpa biaya tambahan. Untuk retensi lebih lama, pengguna wajib membuat Trail yang mengirim log ke Amazon S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0064",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki pusat data on-premise dengan keterbatasan kapasitas penyimpanan fisik. Mereka ingin memperluas penyimpanan lokal ke cloud secara mulus menggunakan protokol penyimpanan standar industri (seperti NFS, SMB, atau iSCSI) sehingga aplikasi lokal dapat menyimpan file cadangan langsung ke Amazon S3. Layanan penyimpanan hibrida AWS manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS DataSync"
      },
      {
        "id": "C",
        "text": "Amazon S3 Transfer Acceleration"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Storage Gateway adalah layanan penyimpanan cloud hibrida yang menghubungkan lingkungan lokal on-premise ke penyimpanan AWS (seperti S3 dan EBS) menggunakan protokol standar (NFS, SMB, iSCSI).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0065",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan retail enterprise memerlukan pendampingan proaktif dari seorang Technical Account Manager (TAM) yang didedikasikan secara eksklusif untuk membantu tinjauan arsitektur dan kesiapan operasional cloud mereka. Tingkat AWS Support Plan terendah manakah yang menyertakan dukungan seorang TAM?",
    "options": [
      {
        "id": "A",
        "text": "Developer Support Plan"
      },
      {
        "id": "B",
        "text": "Business Support Plan"
      },
      {
        "id": "C",
        "text": "Enterprise Support Plan"
      },
      {
        "id": "D",
        "text": "Enterprise On-Ramp Support Plan"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Akses ke dedicated Technical Account Manager (TAM) yang ditugaskan khusus secara eksklusif hanya tersedia pada paket AWS Enterprise Support Plan (pada Enterprise On-Ramp disediakan tim TAM bersama/pool).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0066",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs e-commerce global ingin mempercepat waktu pemuatan halaman katalog produk bagi pelanggan di seluruh dunia dengan menyimpan cache file gambar, video produk, dan file CSS statis pada titik kehadiran jaringan (Edge Locations) yang berada paling dekat dengan pengguna. Layanan AWS manakah yang harus diintegrasikan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "C",
        "text": "Amazon S3 Transfer Acceleration"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon CloudFront adalah layanan Content Delivery Network (CDN) global yang meng-cache konten web statis dan dinamis pada jaringan Edge Locations di seluruh dunia guna menyajikan data dengan latensi ultra-rendah.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0067",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Saat mengaudit log peristiwa JSON di AWS CloudTrail untuk mengidentifikasi siapa yang menghapus tabel database Amazon RDS produksi, auditor keamanan memeriksa rekaman event. Field kunci manakah di dalam log event CloudTrail yang berisi informasi identitas akun IAM, ARN, dan tipe pengguna yang memanggil operasi API tersebut?",
    "options": [
      {
        "id": "A",
        "text": "eventSource"
      },
      {
        "id": "B",
        "text": "requestParameters"
      },
      {
        "id": "C",
        "text": "userIdentity"
      },
      {
        "id": "D",
        "text": "responseElements"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Di dalam rekaman event AWS CloudTrail, elemen 'userIdentity' memuat rincian lengkap mengenai identitas yang melakukan pemanggilan API, termasuk tipe identitas (Root, IAMUser, AssumedRole), ARN, principalId, dan akun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0068",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur cloud junior sering tertukar antara fungsi layanan AWS CloudTrail dan Amazon CloudWatch. Manakah dari pernyataan berikut yang paling tepat merangkum perbedaan mendasar antara kedua layanan pemantauan AWS tersebut?",
    "options": [
      {
        "id": "A",
        "text": "CloudTrail digunakan untuk memantau performa CPU server, sedangkan CloudWatch digunakan untuk mengaudit login pengguna"
      },
      {
        "id": "B",
        "text": "CloudTrail mencatat riwayat pemanggilan API untuk audit kepatuhan ('siapa melakukan apa'), sedangkan CloudWatch memantau metrik performa sistem, log aplikasi, dan alarm"
      },
      {
        "id": "C",
        "text": "CloudTrail adalah firewall aplikasi web, sedangkan CloudWatch adalah layanan enkripsi data"
      },
      {
        "id": "D",
        "text": "CloudTrail hanya bekerja untuk Amazon EC2, sedangkan CloudWatch bekerja eksklusif untuk Amazon S3"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CloudTrail bertindak sebagai rekaman CCTV audit (merekam panggilan API, pengguna, dan waktu), sedangkan Amazon CloudWatch bertindak sebagai dashboard pemantau kesehatan (metrik performa seperti CPU/RAM, log, dan pemicu alarm).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0069",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah startup fintech sedang mempersiapkan izin operasional dari Bank Sentral dan wajib membuktikan bahwa infrastruktur cloud AWS yang mereka gunakan telah memenuhi sertifikasi PCI-DSS Level 1 dan SOC 2 Tipe II. Layanan AWS manakah yang menyediakan akses swalayan (self-service) on-demand ke laporan kepatuhan resmi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "AWS Artifact"
      },
      {
        "id": "B",
        "text": "AWS Audit Manager"
      },
      {
        "id": "C",
        "text": "AWS Security Hub"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Artifact adalah portal resmi tanpa biaya di konsol AWS untuk mengunduh laporan kepatuhan, sertifikasi keamanan (ISO, PCI, SOC), dan menyetujui perjanjian kepatuhan.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0070",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang arsitek jaringan sedang merancang segmentasi keamanan di dalam Amazon VPC. Arsitek tersebut memerlukan lapisan pertahanan perimeter virtual di tingkat subnet yang memeriksa paket data secara stateless, di mana lalu lintas balasan keluar tidak otomatis diizinkan dan harus dikonfigurasi secara terpisah. Komponen jaringan VPC manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Security Group"
      },
      {
        "id": "B",
        "text": "Internet Gateway"
      },
      {
        "id": "C",
        "text": "Route Table"
      },
      {
        "id": "D",
        "text": "Network Access Control List (NACL)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Network Access Control List (NACL) adalah firewall virtual opsional di tingkat subnet pada Amazon VPC yang bersifat stateless (lalu lintas masuk dan keluar dievaluasi secara independen dan terpisah).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0071",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Saat melakukan penelusuran insiden keamanan pada log CloudTrail, seorang analis forensik mencari rekaman event di mana seseorang membuka port SSH 22 ke publik (0.0.0.0/0) pada Security Group instance EC2. Nama event API resmi (eventName) manakah yang tercatat di CloudTrail saat aturan izin inbound baru ditambahkan ke Security Group?",
    "options": [
      {
        "id": "A",
        "text": "CreateSecurityGroupRule"
      },
      {
        "id": "B",
        "text": "AuthorizeSecurityGroupIngress"
      },
      {
        "id": "C",
        "text": "ModifySecurityGroupInbound"
      },
      {
        "id": "D",
        "text": "UpdateSecurityGroupPort"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "API resmi Amazon EC2 untuk menambahkan aturan lalu lintas masuk (inbound) ke Security Group adalah 'AuthorizeSecurityGroupIngress'. EventName ini akan tercatat di log AWS CloudTrail setiap kali ada aturan masuk baru yang ditambahkan.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0072",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah organisasi ingin mendeteksi ancaman keamanan secara cerdas pada akun AWS mereka, seperti adanya komunikasi instance EC2 ke IP server Command and Control (C2) botnet atau eksfiltrasi data via DNS. Mereka memerlukan layanan keamanan berbasis machine learning terintegrasi yang terus memantau CloudTrail dan VPC Flow Logs. Layanan AWS manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Macie"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "AWS Secrets Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang terus memantau akun dan beban kerja AWS menggunakan machine learning untuk mengidentifikasi perilaku tidak sah dan ancaman siber.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0073",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah tim riset big data memiliki alur pemrosesan data batch yang dapat dihentikan dan dilanjutkan kapan saja jika kapasitas server ditarik kembali oleh penyedia cloud. Tim ingin meminimalkan biaya komputasi hingga serendah mungkin. Opsi pembelian Amazon EC2 manakah yang menawarkan diskon tertinggi (hingga 90%)?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Reserved Instances"
      },
      {
        "id": "C",
        "text": "Dedicated Instances"
      },
      {
        "id": "D",
        "text": "Spot Instances"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "EC2 Spot Instances menyediakan diskon hingga 90% dibandingkan On-Demand dengan memanfaatkan kapasitas komputasi AWS yang menganggur, sangat cocok untuk beban kerja fleksibel dan toleran interupsi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0074",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim platform engineering ingin mengotomatiskan pembuatan seluruh infrastruktur AWS mereka (meliputi VPC, Subnet, EC2, dan RDS) menggunakan pendekatan Infrastructure as Code (IaC) melalui file template deklaratif berformat JSON atau YAML. Layanan AWS manakah yang dirancang untuk tujuan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "C",
        "text": "AWS OpsWorks"
      },
      {
        "id": "D",
        "text": "AWS CloudFormation"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS CloudFormation adalah layanan Infrastructure as Code (IaC) yang memungkinkan pemodelan, provisi, dan pengelolaan seluruh kumpulan sumber daya AWS secara otomatis menggunakan template deklaratif (JSON/YAML).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0075",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Untuk meningkatkan postur keamanan (systems hardening) pada server Linux Amazon EC2 di lingkungan lab, seorang insinyur sistem ingin menonaktifkan autentikasi berbasis kata sandi dan hanya mengizinkan login melalui kunci privat SSH (SSH key pair). Konfigurasi manakah yang harus diubah pada file '/etc/ssh/sshd_config'?",
    "options": [
      {
        "id": "A",
        "text": "Mengubah PermitRootLogin menjadi yes"
      },
      {
        "id": "B",
        "text": "Mengubah Port 22 menjadi Port 80"
      },
      {
        "id": "C",
        "text": "Mengubah PasswordAuthentication yes menjadi no"
      },
      {
        "id": "D",
        "text": "Mengubah PubkeyAuthentication yes menjadi no"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mengubah direktif 'PasswordAuthentication yes' menjadi 'no' pada file konfigurasi SSH daemon (/etc/ssh/sshd_config) adalah langkah hardening standar untuk menonaktifkan login berbasis kata sandi dan memaksa penggunaan pasangan kunci SSH yang jauh lebih aman.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0076",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah platform media sosial memerlukan basis data NoSQL terkelola penuh yang menggunakan model key-value dan dokumen, mampu menangani volume data berskala besar, serta menghasilkan waktu respons latensi satu digit milidetik secara konsisten tanpa perlu memelihara klaster server. Layanan basis data AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB adalah layanan basis data NoSQL key-value dan dokumen terkelola penuh dari AWS yang menawarkan latensi konsisten di bawah 10 milidetik pada skala transaksi berapa pun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0077",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah konglomerat memiliki belasan akun AWS untuk masing-masing anak perusahaannya. Mereka ingin menggabungkan seluruh tagihan bulanan akun-akun tersebut di bawah satu faktur pembayaran terpusat agar total penggunaan penyimpanan Amazon S3 mereka memenuhi batas tier diskon volume (Volume Discounts). Fitur AWS Organizations manakah yang memfasilitasi hal ini?",
    "options": [
      {
        "id": "A",
        "text": "Consolidated Billing di AWS Organizations"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "AWS Resource Access Manager"
      },
      {
        "id": "D",
        "text": "AWS Cost Explorer Allocation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Fitur Consolidated Billing di AWS Organizations menggabungkan tagihan dari seluruh akun anggota, memungkinkan penggabungan volume penggunaan antar-akun untuk memenuhi ambang batas diskon volume harga AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0078",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah bank swasta berencana memindahkan basis data Oracle on-premise mereka ke Amazon Aurora di AWS. Selama proses migrasi data berlangsung, basis data sumber harus tetap dapat melayani transaksi nasabah tanpa henti (near-zero downtime). Layanan migrasi AWS manakah yang paling sesuai untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "B",
        "text": "AWS DataSync"
      },
      {
        "id": "C",
        "text": "AWS Application Migration Service (MGN)"
      },
      {
        "id": "D",
        "text": "AWS Database Migration Service (AWS DMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Database Migration Service (AWS DMS) mempermudah migrasi basis data ke AWS dengan mempertahankan replikasi data berkelanjutan (Change Data Capture / CDC), sehingga aplikasi sumber tetap beroperasi selama migrasi dengan downtime minimal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0079",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Berdasarkan AWS Shared Responsibility Model, siapakah yang bertanggung jawab untuk memastikan bahwa opsi enkripsi data saat istirahat (encryption at-rest) telah diaktifkan dan dikonfigurasi dengan benar pada bucket Amazon S3 milik perusahaan?",
    "options": [
      {
        "id": "A",
        "text": "AWS secara otomatis dan sepenuhnya bertanggung jawab mengonfigurasinya"
      },
      {
        "id": "B",
        "text": "Pelanggan (Customer) yang mengelola konfigurasi bucket dan kunci enkripsi"
      },
      {
        "id": "C",
        "text": "Penyedia layanan jaringan internet (ISP) yang menghubungkan ke AWS"
      },
      {
        "id": "D",
        "text": "Auditor kepatuhan pihak ketiga"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Di bawah Shared Responsibility Model, data pelanggan adalah tanggung jawab penuh pelanggan ('Security IN the cloud'). Pelanggan bertanggung jawab mengaktifkan, mengelola, dan mengonfigurasi enkripsi data at-rest pada resource penyimpanan seperti Amazon S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0080",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah institusi pemerintah perlu mengarsipkan rekaman video berukuran puluhan terabyte untuk kepatuhan regulasi jangka panjang. Video tersebut sangat jarang sekali diakses kembali di masa depan, dan biaya penyimpanan per gigabyte harus menjadi prioritas paling hemat. Storage class Amazon S3 manakah yang paling tepat dipilih?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Standard"
      },
      {
        "id": "B",
        "text": "Amazon S3 One Zone-IA"
      },
      {
        "id": "C",
        "text": "Amazon S3 Express One Zone"
      },
      {
        "id": "D",
        "text": "Amazon S3 Glacier Flexible Retrieval atau Glacier Deep Archive"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Storage class Amazon S3 Glacier (Flexible Retrieval dan Deep Archive) dirancang khusus untuk pengarsipan data jangka panjang dengan biaya penyimpanan bulanan terendah di AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0081",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebelum mengajukan permohonan investasi proyek komputasi awan kepada dewan direksi, seorang Solutions Architect ingin membuat kalkulasi estimasi biaya bulanan untuk rencana infrastruktur AWS baru (kombinasi EC2, S3, dan VPC) tanpa harus membuka akun AWS berbayar terlebih dahulu. Alat web resmi gratis AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Budgets"
      },
      {
        "id": "D",
        "text": "AWS Cost and Usage Report"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Pricing Calculator adalah alat web interaktif gratis berbasis browser yang memungkinkan siapa saja memodelkan solusi arsitektur dan memperkirakan biaya penggunaan AWS sebelum meluncurkan sumber daya.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0082",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi ingin mengeksekusi kode logika validasi gambar secara otomatis setiap kali ada file baru diunggah ke Amazon S3. Pengembang menginginkan solusi serverless di mana mereka tidak perlu mengelola server, sistem operasi, atau penskalaan, dan hanya membayar durasi eksekusi dalam milidetik. Layanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "AWS Lambda"
      },
      {
        "id": "D",
        "text": "Amazon ECS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Lambda adalah layanan komputasi tanpa server (serverless) yang menjalankan kode berdasarkan trigger event dan secara otomatis mengelola seluruh alokasi infrastruktur dan penskalaan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0083",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki instance Amazon EC2 di dalam Private Subnet tanpa akses Internet Gateway atau NAT Gateway. Instance tersebut perlu mengakses bucket Amazon S3 secara pribadi melalui jaringan backbone AWS dengan kecepatan tinggi tanpa melalui internet publik. Fitur jaringan Amazon VPC manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "VPC Endpoint (Gateway Endpoint / Interface Endpoint)"
      },
      {
        "id": "B",
        "text": "Egress-Only Internet Gateway"
      },
      {
        "id": "C",
        "text": "Virtual Private Gateway"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "VPC Endpoint (seperti Gateway Endpoint untuk S3 dan DynamoDB) memungkinkan koneksi privat berkecepatan tinggi antara VPC dan layanan AWS tanpa memerlukan Internet Gateway, NAT Gateway, atau koneksi VPN.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0084",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah situs web e-commerce sering menjadi sasaran upaya peretasan injeksi SQL dan skrip lintas situs (Cross-Site Scripting / XSS). Tim keamanan ingin memasang firewall aplikasi web di lapisan 7 (Application Layer) yang dapat memeriksa payload HTTP/S dan memblokir pola serangan berbahaya sebelum mencapai web server. Layanan AWS manakah yang dirancang untuk hal ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield Standard"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS WAF (Web Application Firewall)"
      },
      {
        "id": "D",
        "text": "Network Access Control List (NACL)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS WAF adalah Web Application Firewall yang beroperasi pada Layer 7 untuk melindungi aplikasi web dan API dari eksploitasi web umum seperti SQL Injection dan XSS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0085",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Seorang Cloud Architect merancang arsitektur aplikasi e-commerce di mana subsistem pemrosesan pesanan dan subsistem pemrosesan faktur dihubungkan menggunakan antrean pesan perantara (Amazon SQS), sehingga kegagalan atau lonjakan beban pada satu subsistem tidak langsung merusak subsistem lainnya. Prinsip arsitektur cloud Well-Architected manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Loose Coupling (Kopling Longgar / Decoupling)"
      },
      {
        "id": "B",
        "text": "Tight Coupling (Kopling Ketat)"
      },
      {
        "id": "C",
        "text": "Monolithic Architecture"
      },
      {
        "id": "D",
        "text": "Single Point of Failure"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Prinsip Loose Coupling (Kopling Longgar / Decoupling) menganjurkan pemisahan komponen sistem sehingga setiap komponen dapat beroperasi, diskalakan, dan diperbaiki secara independen tanpa melumpuhkan komponen lain saat terjadi kegagalan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0086",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah organisasi ingin mengenkripsi seluruh data sensitif mereka di berbagai layanan AWS (seperti Amazon S3, Amazon EBS, dan Amazon RDS). Mereka membutuhkan layanan terkelola terpusat untuk membuat, merotasi, mengontrol hak akses, dan mengaudit siklus hidup kunci kriptografi (cryptographic keys). Layanan AWS manakah yang dimaksud?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "AWS Certificate Manager (ACM)"
      },
      {
        "id": "C",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "id": "D",
        "text": "AWS CloudHSM"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) mempermudah pembuatan dan pengelolaan kunci kriptografi (KMS keys) serta mengontrol penggunaannya di berbagai layanan AWS dan aplikasi.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0087",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi streaming video secara otomatis menambah 10 instance Amazon EC2 baru saat konser musik langsung dimulai pada pukul 19.00 WIB, dan kemudian secara otomatis mematikan 10 instance tersebut pada pukul 22.00 WIB begitu konser selesai untuk menghentikan pemborosan biaya. Karakteristik komputasi cloud manakah yang paling tepat menggambarkan penambahan dan pengurangan kapasitas dua arah ini?",
    "options": [
      {
        "id": "A",
        "text": "Elastisitas (Elasticity)"
      },
      {
        "id": "B",
        "text": "Ketersediaan Tinggi (High Availability)"
      },
      {
        "id": "C",
        "text": "Toleransi Kesalahan (Fault Tolerance)"
      },
      {
        "id": "D",
        "text": "Agilitas (Agility)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Elastisitas (Elasticity) adalah kemampuan sistem cloud untuk secara dinamis menambah kapasitas saat beban naik dan melepaskan kapasitas saat beban turun, menyesuaikan alokasi sumber daya dengan permintaan nyata.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0088",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan migas memiliki data seismik berukuran 100 Terabyte di lokasi pengeboran terpencil dengan koneksi internet yang sangat lambat. Mereka perlu memindahkan data tersebut ke bucket Amazon S3 dalam waktu kurang dari satu minggu. Layanan transfer data fisik menggunakan perangkat keras khusus terlindungi dari AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Snowball (Snow Family)"
      },
      {
        "id": "C",
        "text": "AWS DataSync"
      },
      {
        "id": "D",
        "text": "Amazon S3 Transfer Acceleration"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Snowball adalah bagian dari AWS Snow Family yang menyediakan perangkat penyimpanan fisik aman dan tahan benturan untuk memindahkan data berskala petabyte ke AWS tanpa bergantung pada bandwidth jaringan internet.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0089",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi pengolah log yang berjalan pada armada Amazon EC2 perlu menulis file hasil agregasi ke bucket Amazon S3. Menurut rekomendasi keamanan terbaik AWS (Security Best Practices), bagaimana cara paling aman memberikan izin akses S3 kepada instance EC2 tersebut tanpa perlu menyimpan kredensial permanen di disk server?",
    "options": [
      {
        "id": "A",
        "text": "Menyimpan Access Key ID dan Secret Access Key di dalam file konfigurasi aplikasi"
      },
      {
        "id": "B",
        "text": "Membuat IAM User khusus untuk setiap instance EC2"
      },
      {
        "id": "C",
        "text": "Melampirkan IAM Role yang memiliki policy S3 ke instance EC2 melalui Instance Profile"
      },
      {
        "id": "D",
        "text": "Membagikan kredensial AWS Root User kepada aplikasi"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Melampirkan IAM Role ke instance EC2 adalah praktik terbaik AWS karena menyediakan kredensial keamanan sementara yang dirotasi secara otomatis oleh instance metadata service (IMDS).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0090",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang insinyur cloud menggunakan AWS CLI untuk mencari instance EC2 yang sedang berjalan. Insinyur tersebut dapat menggunakan opsi '--filter' atau opsi '--query' pada perintah CLI. Manakah penjelasan yang paling akurat mengenai perbedaan cara kerja kedua opsi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Opsi --filter memproses penyaringan di sisi server AWS sebelum data dikirimkan, sedangkan opsi --query memproses penyaringan di sisi klien menggunakan ekspresi JMESPath"
      },
      {
        "id": "B",
        "text": "Opsi --filter khusus untuk format output teks, sedangkan --query khusus untuk output JSON"
      },
      {
        "id": "C",
        "text": "Opsi --filter hanya dapat digunakan pada layanan S3, sedangkan --query hanya untuk EC2"
      },
      {
        "id": "D",
        "text": "Keduanya memiliki mekanisme eksekusi yang sama di server AWS tanpa perbedaan performa"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Parameter '--filter' melakukan pemfilteran di sisi server (server-side) oleh API AWS sebelum respons dikirim, sedangkan parameter '--query' melakukan pemfilteran dan pemformatan di sisi klien (client-side) menggunakan sintaks JMESPath setelah data diterima dari AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0001",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan retail ingin beralih dari pusat data on-premise ke AWS. Manajemen ingin mengurangi risiko finansial akibat menebak kapasitas server yang dibutuhkan menjelang musim liburan, di mana perkiraan yang salah sering kali menyebabkan kelebihan server menganggur atau kekurangan kapasitas yang memicu crash aplikasi. Manfaat komputasi cloud manakah yang secara langsung mengatasi tantangan ini?",
    "options": [
      {
        "id": "A",
        "text": "Berhenti menebak kapasitas kebutuhan (Stop guessing capacity)"
      },
      {
        "id": "B",
        "text": "Meningkatkan belanja modal di awal (Increase capital expenditure)"
      },
      {
        "id": "C",
        "text": "Mengunci arsitektur pada satu penyedia perangkat keras"
      },
      {
        "id": "D",
        "text": "Menghilangkan kebutuhan konfigurasi jaringan virtual"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Manfaat 'Stop guessing capacity' pada AWS Cloud memungkinkan bisnis menyesuaikan kapasitas komputasi secara elastis mengikuti fluktuasi permintaan nyata, sehingga tidak perlu lagi berspekulasi mengenai kapasitas maksimum di muka.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0002",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah institusi pemerintah sedang mengevaluasi arsitektur cloud untuk mematuhi regulasi kedaulatan data nasional yang mewajibkan seluruh data warga disimpan secara eksklusif pada infrastruktur komputasi privat di dalam batas negara tanpa koneksi publik langsung. Model penerapan cloud (cloud deployment model) manakah yang paling sesuai untuk kebutuhan tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Public Cloud"
      },
      {
        "id": "B",
        "text": "Private Cloud (On-premises / Dedicated Private Infrastructure)"
      },
      {
        "id": "C",
        "text": "Multi-Tenant Public Cloud"
      },
      {
        "id": "D",
        "text": "Community Cloud Terbuka"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Private Cloud mengalokasikan sumber daya komputasi dan penyimpanan secara eksklusif untuk satu organisasi tunggal, menawarkan kendali privasi dan pematuhan kedaulatan data yang paling ketat.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0003",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan logistik ingin memigrasikan aplikasi ERP mereka ke AWS dengan pendekatan 'Rehost' (Lift-and-Shift). Mereka ingin mempertahankan sistem operasi, konfigurasi dependensi, dan arsitektur perangkat lunak yang ada tanpa mengubah kode program sama sekali. Model layanan cloud manakah yang digunakan saat menyewa mesin virtual Amazon EC2 pada skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "D",
        "text": "Function as a Service (FaaS)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EC2 adalah layanan Infrastructure as a Service (IaaS) di mana AWS menyediakan perangkat keras virtualisasi, dan pelanggan memiliki kendali penuh atas sistem operasi, runtime, dan aplikasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0004",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah tim pengembang menggunakan Amazon RDS for PostgreSQL untuk mengelola database relasional mereka. Tim tidak perlu mengelola perangkat keras server, instalasi sistem operasi, atau patching mesin database, namun tetap memiliki kendali penuh atas konfigurasi skema tabel dan query data aplikasi. Model layanan cloud manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "D",
        "text": "Bare Metal as a Service"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Layanan terkelola seperti Amazon RDS dikategorikan sebagai Platform as a Service (PaaS), di mana penyedia cloud mengelola lapisan OS dan platform database, sementara pengguna mengelola data dan skema aplikasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0005",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah organisasi ingin menyelaraskan transformasi cloud mereka dengan kerangka kerja AWS Cloud Adoption Framework (AWS CAF). Manajemen ingin memastikan bahwa peran kepemimpinan, strategi pengembangan keterampilan karyawan, dan kesiapan perubahan budaya organisasi dikelola dengan baik. Perspektif (Perspective) AWS CAF manakah yang berfokus pada area ini?",
    "options": [
      {
        "id": "A",
        "text": "Perspektif Platform (Platform Perspective)"
      },
      {
        "id": "B",
        "text": "Perspektif Sumber Daya Manusia (People Perspective)"
      },
      {
        "id": "C",
        "text": "Perspektif Operasi (Operations Perspective)"
      },
      {
        "id": "D",
        "text": "Perspektif Keamanan (Security Perspective)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Perspektif People (Sumber Daya Manusia) dalam AWS CAF berfokus pada kesiapan talenta, manajemen perubahan organisasi, kepemimpinan budaya, dan peningkatan keterampilan cloud tim.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0006",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Dalam tinjauan AWS Well-Architected Framework, sebuah perusahaan manufaktur merancang arsitektur mereka agar dapat mengotomatiskan operasi, memperbarui prosedur melalui kode, dan mengantisipasi potensi kegagalan operasional secara teratur melalui simulasi 'Game Day'. Pilar Well-Architected Framework manakah yang paling didukung oleh inisiatif ini?",
    "options": [
      {
        "id": "A",
        "text": "Keunggulan Operasional (Operational Excellence)"
      },
      {
        "id": "B",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "C",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "D",
        "text": "Keberlanjutan (Sustainability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Operational Excellence berfokus pada pelaksanaan dan pemantauan sistem untuk memberikan nilai bisnis serta terus meningkatkan proses dan prosedur pendukung (termasuk otomasi operasi dan Game Day).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0007",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah platform e-commerce ingin mengurangi jejak karbon dan dampak lingkungan dari beban kerja komputasi mereka di cloud. Mereka mengoptimalkan utilisasi kapasitas instance, memilih prosesor AWS Graviton berbasis ARM yang hemat energi, dan menghapus data usang yang tidak terpakai. Pilar AWS Well-Architected Framework manakah yang tercermin?",
    "options": [
      {
        "id": "A",
        "text": "Keberlanjutan (Sustainability)"
      },
      {
        "id": "B",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "C",
        "text": "Keamanan (Security)"
      },
      {
        "id": "D",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Sustainability (Keberlanjutan) berfokus pada meminimalkan dampak lingkungan dari menjalankan beban kerja cloud, mengurangi konsumsi energi, dan memaksimalkan efisiensi sumber daya fisik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0008",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah aplikasi analitik data di Amazon EC2 membutuhkan waktu pemulihan maksimal 15 menit jika terjadi bencana (Recovery Time Objective / RTO = 15 menit) dan toleransi kehilangan data maksimal 5 menit (Recovery Point Objective / RPO = 5 menit). Strategi arsitektur pemulihan bencana (Disaster Recovery) manakah yang menyediakan RTO dan RPO paling ketat mendekati nol?",
    "options": [
      {
        "id": "A",
        "text": "Backup and Restore"
      },
      {
        "id": "B",
        "text": "Pilot Light"
      },
      {
        "id": "C",
        "text": "Warm Standby"
      },
      {
        "id": "D",
        "text": "Multi-Region Active-Active"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Strategi Multi-Region Active-Active menjalankan beban kerja secara penuh di beberapa Region secara simultan, memberikan nilai RTO dan RPO mendekati nol (real-time failover) meskipun membutuhkan biaya paling tinggi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0009",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki aplikasi monolitik lama yang sudah usang dan bernilai bisnis rendah. Manajemen memutuskan untuk menonaktifkan aplikasi tersebut sepenuhnya dari pusat data tanpa memindahkannya ke cloud. Strategi migrasi 6 R's (Migration Strategies) manakah yang diterapkan?",
    "options": [
      {
        "id": "A",
        "text": "Rehost"
      },
      {
        "id": "B",
        "text": "Replatform"
      },
      {
        "id": "C",
        "text": "Retire (Memensiunkan)"
      },
      {
        "id": "D",
        "text": "Retain"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Strategi 'Retire' dalam 6 R's migrasi cloud adalah mengidentifikasi dan mematikan atau memensiunkan aplikasi atau aset yang sudah tidak lagi diperlukan oleh organisasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0010",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah startup fintech ingin merancang ulang sistem transaksinya agar menjadi arsitektur cloud-native modern berbasis kontainer mikro dan serverless, guna memaksimalkan skalabilitas dan efisiensi biaya jangka panjang. Strategi migrasi 6 R's manakah yang paling tepat menggambarkan transformasi ini?",
    "options": [
      {
        "id": "A",
        "text": "Refactor / Rearchitect"
      },
      {
        "id": "B",
        "text": "Rehost"
      },
      {
        "id": "C",
        "text": "Repurchase"
      },
      {
        "id": "D",
        "text": "Retain"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Strategi 'Refactor' atau 'Rearchitect' melibatkan penulisan ulang dan perancangan ulang arsitektur aplikasi secara fundamental untuk memanfaatkan fitur-fitur cloud-native seperti serverless dan microservices.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0011",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan media berita online ingin menyebarkan aplikasi mereka agar pembaca di Tokyo, London, dan New York dapat mengakses konten dalam hitungan milidetik. Dengan AWS, mereka dapat meluncurkan infrastruktur di seluruh dunia dalam hitungan menit. Manfaat utama komputasi cloud manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Mendunia dalam hitungan menit (Go global in minutes)"
      },
      {
        "id": "B",
        "text": "Penyimpanan berkapasitas tanpa batas otomatis"
      },
      {
        "id": "C",
        "text": "Menghilangkan seluruh kebutuhan sertifikasi keamanan"
      },
      {
        "id": "D",
        "text": "Menjamin 100% biaya komputasi gratis"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "'Go global in minutes' adalah salah satu dari 6 keuntungan cloud computing, memungkinkan penyebaran aplikasi ke berbagai lokasi geografis di seluruh dunia secara cepat melalui jaringan global AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0012",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah rumah sakit mengoperasikan sistem pemindaian radiologi lokal yang membutuhkan latensi perangkat keras satu digit milidetik ke mesin MRI fisik di lokasi, tetapi ingin menyimpan salinan arsip jangka panjang di cloud. Model penerapan (deployment model) cloud manakah yang mengkombinasikan lingkungan lokal dan cloud ini?",
    "options": [
      {
        "id": "A",
        "text": "Hybrid Cloud Deployment"
      },
      {
        "id": "B",
        "text": "All-in Cloud Deployment"
      },
      {
        "id": "C",
        "text": "Isolated Multi-Tenant Cloud"
      },
      {
        "id": "D",
        "text": "Public Cloud Murni"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Hybrid deployment menggabungkan infrastruktur lokal on-premise dengan sumber daya cloud publik, memungkinkan beban kerja sensitif latensi tetap lokal sementara pencadangan jangka panjang menggunakan cloud.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0013",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan menggunakan fungsi AWS Lambda (Serverless) untuk memproses pesanan pelanggan. Berdasarkan AWS Shared Responsibility Model, manakah dari aspek keamanan berikut yang sepenuhnya dikelola oleh AWS pada arsitektur serverless ini?",
    "options": [
      {
        "id": "A",
        "text": "Keamanan dan manajemen patch pada sistem operasi, runtime bahasa, dan server fisik eksekusi"
      },
      {
        "id": "B",
        "text": "Logika kode program aplikasi dan dependensi pustaka yang diunggah pengembang"
      },
      {
        "id": "C",
        "text": "Konfigurasi kebijakan izin IAM Execution Role untuk fungsi Lambda"
      },
      {
        "id": "D",
        "text": "Pengaturan enkripsi data pelanggan di dalam tabel basis data"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pada model komputasi serverless (AWS Lambda), AWS mengelola seluruh lapisan infrastruktur yang mendasari, termasuk server fisik, sistem operasi host, lapisan virtualisasi, dan runtime lingkungan eksekusi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0014",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur keamanan ingin memastikan bahwa seluruh panggilan API dan aktivitas login akun AWS dianalisis secara cerdas untuk mendeteksi potensi kompromi kredensial atau penambangan cryptocurrency yang tidak sah menggunakan machine learning. Layanan keamanan AWS manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "AWS Certificate Manager"
      },
      {
        "id": "D",
        "text": "AWS Shield Standard"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang terus memantau aktivitas berbahaya dan perilaku anomali di akun AWS dengan menganalisis CloudTrail, VPC Flow Logs, dan DNS logs.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0015",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi web publik sering menerima serangan penolakan layanan (DDoS) berskala besar pada lapisan aplikasi (Layer 7). Perusahaan ingin mendapatkan perlindungan DDoS tingkat lanjut, integrasi langsung dengan AWS WAF, dan akses 24/7 ke tim ahli AWS Shield Response Team (SRT). Layanan keamanan manakah yang menyediakan proteksi khusus ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield Advanced"
      },
      {
        "id": "B",
        "text": "AWS Shield Standard"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS KMS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Shield Advanced menyediakan perlindungan DDoS tingkat lanjut (Layer 3, 4, dan 7), perlindungan finansial terhadap lonjakan biaya, dan akses langsung 24/7 ke Shield Response Team (SRT).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0016",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan retail ingin memindai image kontainer Docker di Amazon ECR dan armada instance Amazon EC2 secara otomatis untuk menemukan kerentanan perangkat lunak (CVE) yang belum di-patch serta paparan jaringan yang tidak diinginkan. Layanan manajemen kerentanan AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "Amazon Macie"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Inspector adalah layanan manajemen kerentanan otomatis yang memindai beban kerja EC2, container image di ECR, dan fungsi Lambda untuk menemukan kerentanan perangkat lunak dan paparan jaringan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0017",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur keamanan perlu mengumpulkan dan menyatukan seluruh rekaman lalu lintas jaringan IP (IP network traffic) yang masuk dan keluar dari antarmuka jaringan (ENI) di dalam Amazon VPC untuk keperluan investigasi keamanan dan forensik jaringan. Fitur Amazon VPC manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "VPC Flow Logs"
      },
      {
        "id": "B",
        "text": "Route Tables"
      },
      {
        "id": "C",
        "text": "Internet Gateway"
      },
      {
        "id": "D",
        "text": "NAT Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "VPC Flow Logs memungkinkan penangkapan informasi mengenai lalu lintas IP yang masuk dan keluar dari antarmuka jaringan (ENI) di dalam VPC untuk observabilitas dan audit keamanan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0018",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah organisasi enterprise ingin menyederhanakan akses login karyawan ke puluhan akun AWS dan aplikasi bisnis cloud menggunakan satu set kredensial tunggal yang terintegrasi dengan penyedia identitas korporat (Single Sign-On / SSO). Layanan manajemen identitas AWS manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM Identity Center (sebelumnya AWS Single Sign-On)"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "id": "D",
        "text": "Amazon Cognito Identity Pools"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS IAM Identity Center (sebelumnya AWS SSO) mempermudah pengelolaan akses portal terpusat (Single Sign-On) ke beberapa akun AWS dan aplikasi bisnis cloud secara aman.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0019",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur cloud sedang mengevaluasi kepatuhan postur keamanan akun AWS terhadap standar tolok ukur Center for Internet Security (CIS AWS Foundations Benchmark). Layanan manajemen postur keamanan terpusat AWS manakah yang secara otomatis memeriksa akun terhadap standar tolok ukur ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Security Hub"
      },
      {
        "id": "B",
        "text": "AWS Artifact"
      },
      {
        "id": "C",
        "text": "AWS Shield"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Security Hub menyediakan pemindaian postur keamanan otomatis terhadap standar kepatuhan industri, termasuk CIS AWS Foundations Benchmark dan PCI-DSS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0020",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi web memerlukan penyimpanan string konfigurasi (seperti URL endpoint database) dan parameter sensitif yang terenkripsi (seperti token lisensi) dengan biaya hemat dan integrasi hierarki path (seperti /prod/db/url). Fitur terkelola AWS Systems Manager manakah yang paling sesuai?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager Parameter Store"
      },
      {
        "id": "B",
        "text": "AWS KMS Key Policies"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "D",
        "text": "AWS CloudFormation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Systems Manager Parameter Store menyediakan penyimpanan terpusat yang aman untuk data konfigurasi dan rahasia (secrets) menggunakan hierarki path dan integrasi KMS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0021",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah tim keamanan ingin menerapkan pembatasan hak akses maksimum pada pengguna IAM, di mana pengguna tidak boleh diberikan hak akses yang melebihi batas kebijakan tertentu meskipun admin lokal melampirkan policy AdministratorAccess. Fitur IAM tingkat lanjut manakah yang bertindak sebagai pembatas batas izin ini?",
    "options": [
      {
        "id": "A",
        "text": "IAM Permissions Boundary"
      },
      {
        "id": "B",
        "text": "Security Group Rules"
      },
      {
        "id": "C",
        "text": "Network ACL Rules"
      },
      {
        "id": "D",
        "text": "Route Table Entries"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "IAM Permissions Boundary adalah fitur tingkat lanjut yang menggunakan managed policy untuk menetapkan batas maksimum izin yang dapat dimiliki oleh sebuah identitas IAM (user atau role).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0022",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi perbankan membutuhkan modul perangkat keras kriptografi khusus yang berdedikasi (single-tenant hardware security module) yang memenuhi sertifikasi FIPS 140-2 Level 3 di mana pelanggan memegang kendali kepemilikan eksklusif atas kunci kriptografi tanpa campur tangan AWS. Layanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudHSM"
      },
      {
        "id": "B",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudHSM menyediakan modul perangkat keras keamanan (Hardware Security Module / HSM) khusus berdedikasi (single-tenant) bersertifikasi FIPS 140-2 Level 3 yang dikendalikan penuh oleh pelanggan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0023",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah organisasi ingin menyederhanakan persiapan audit kepatuhan dengan mengumpulkan bukti penilaian konfigurasi operasional secara otomatis untuk memetakan kepatuhan terhadap kontrol kerangka kerja regulasi (seperti GDPR atau HIPAA). Layanan tata kelola kepatuhan AWS manakah yang dirancang untuk hal ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Audit Manager"
      },
      {
        "id": "B",
        "text": "AWS Artifact"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Audit Manager membantu mengotomatiskan pengumpulan bukti secara berkelanjutan guna menyederhanakan penilaian kepatuhan terhadap standar regulasi industri.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0024",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan mendeteksi adanya lonjakan aktivitas pemanggilan API yang tidak biasa pada akun AWS mereka. Fitur analisis anomali otomatis pada AWS CloudTrail manakah yang secara khusus mendeteksi lonjakan volume panggilan API atau kesalahan kode error yang tidak wajar dan memicu peringatan?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail Insights"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail Event History Dasar"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch Metrics"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudTrail Insights secara otomatis menganalisis event manajemen CloudTrail untuk mengidentifikasi dan memperingatkan adanya aktivitas API yang tidak biasa (seperti lonjakan panggilan atau lonjakan kode kesalahan).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0025",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur keamanan ingin memastikan bahwa seluruh volume Amazon EBS baru yang dibuat di akun AWS mereka selalu dienkripsi secara otomatis menggunakan AWS KMS tanpa bergantung pada apakah pengguna mencentang kotak enkripsi saat peluncuran. Fitur konfigurasi Amazon EC2 manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Mengaktifkan enkripsi default EBS (EBS encryption by default) di tingkat Region"
      },
      {
        "id": "B",
        "text": "Membuat aturan Network ACL baru di subnet publik"
      },
      {
        "id": "C",
        "text": "Melampirkan IAM Role pada setiap volume"
      },
      {
        "id": "D",
        "text": "Mengonfigurasi Security Group pada port 443"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mengaktifkan fitur 'EBS encryption by default' pada tingkat Region di konsol Amazon EC2 memastikan bahwa setiap volume EBS baru yang dibuat di Region tersebut akan otomatis dienkripsi secara default.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0026",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah organisasi keuangan diwajibkan oleh regulator untuk mengelola sendiri siklus hidup, kebijakan akses (key policies), dan rotasi tahunan kunci enkripsi yang digunakan untuk mengenkripsi data di Amazon S3 dan Amazon EBS. Tipe kunci AWS KMS manakah yang memberikan kontrol penuh ini kepada pelanggan?",
    "options": [
      {
        "id": "A",
        "text": "Customer Managed Keys (CMK)"
      },
      {
        "id": "B",
        "text": "AWS Owned Keys"
      },
      {
        "id": "C",
        "text": "AWS Managed Keys"
      },
      {
        "id": "D",
        "text": "Ephemeral Public Keys"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Customer Managed Keys (CMK) di AWS KMS dibuat, dimiliki, dan dikelola sepenuhnya oleh pelanggan, memungkinkan kontrol granular atas key policy, rotasi otomatis/manual, dan audit penggunaan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0027",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Setelah membuat akun AWS baru, seorang administrator keamanan meninjau daftar kredensial akun Root User. Menurut rekomendasi keamanan terbaik AWS (Security Best Practices), tindakan manakah yang harus diambil terkait Access Key ID dan Secret Access Key pada akun root?",
    "options": [
      {
        "id": "A",
        "text": "Menghapus access key root sepenuhnya dan tidak pernah membuatnya untuk tugas harian"
      },
      {
        "id": "B",
        "text": "Memperbarui access key root setiap 30 hari sekali"
      },
      {
        "id": "C",
        "text": "Membagikan access key root ke tim pengembang senior"
      },
      {
        "id": "D",
        "text": "Menyimpan access key root di dalam file publik S3"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Praktik terbaik AWS mewajibkan untuk menghapus access keys pada akun Root User dan menghindari pembuatannya, karena akun root memiliki hak akses tak terbatas yang sangat berbahaya jika bocor.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0028",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki 50 orang analis data yang membutuhkan izin akses baca yang identik ke beberapa tabel di Amazon Redshift dan bucket Amazon S3. Menurut praktik terbaik pengelolaan IAM, bagaimana administrator seharusnya mengatur hak akses untuk para analis ini secara efisien?",
    "options": [
      {
        "id": "A",
        "text": "Membuat IAM User Group, melampirkan kebijakan izin ke grup tersebut, dan memasukkan seluruh analis ke dalam grup"
      },
      {
        "id": "B",
        "text": "Melampirkan kebijakan izin satu per satu secara manual ke masing-masing 50 akun IAM User"
      },
      {
        "id": "C",
        "text": "Memberikan hak AdministratorAccess ke seluruh analis data"
      },
      {
        "id": "D",
        "text": "Membuat satu akun IAM User bersama dan membagikan password-nya ke 50 analis"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Praktik terbaik AWS menganjurkan pengelompokan pengguna yang memiliki fungsi kerja sama ke dalam IAM Group dan melampirkan policy ke grup tersebut guna mempermudah tata kelola perizinan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0029",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang administrator keamanan ingin mewajibkan seluruh pengguna IAM di akun AWS perusahaan memiliki kata sandi dengan panjang minimal 12 karakter, mengandung simbol khusus, dan kedaluwarsa secara otomatis setiap 90 hari. Fitur konfigurasi IAM manakah yang harus diatur?",
    "options": [
      {
        "id": "A",
        "text": "IAM Account Password Policy"
      },
      {
        "id": "B",
        "text": "Service Control Policy (SCP)"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager Policy"
      },
      {
        "id": "D",
        "text": "VPC Endpoint Policy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "IAM Account Password Policy memungkinkan administrator menetapkan aturan kompleksitas kata sandi, batas kedaluwarsa, dan pencegahan penggunaan ulang kata sandi bagi seluruh pengguna IAM di akun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0030",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan enterprise membutuhkan firewall jaringan terkelola yang dapat memeriksa paket secara mendalam (deep packet inspection), memfilter nama domain (FQDN) lalu lintas keluar, dan mencegah intrusi jaringan (IPS) di seluruh Amazon VPC mereka. Layanan keamanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Network Firewall"
      },
      {
        "id": "B",
        "text": "AWS Shield Standard"
      },
      {
        "id": "C",
        "text": "Security Group"
      },
      {
        "id": "D",
        "text": "Network Access Control List"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Network Firewall adalah layanan firewall jaringan terkelola yang menyediakan inspeksi paket stateful mendalam, pencegahan intrusi (IPS/IDS), dan penyaringan URL/domain di tingkat perimeter VPC.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0031",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah tim keamanan siber ingin melakukan uji penetrasi (penetration testing) pada aplikasi web mereka yang berjalan di AWS. Manakah dari layanan komputasi berikut yang diizinkan oleh AWS untuk dilakukan uji penetrasi langsung oleh pelanggan tanpa perlu persetujuan awal (prior approval)?",
    "options": [
      {
        "id": "A",
        "text": "Instance Amazon EC2, database Amazon RDS, dan fungsi AWS Lambda milik pelanggan sendiri"
      },
      {
        "id": "B",
        "text": "Infrastruktur server fisik pusat data milik AWS"
      },
      {
        "id": "C",
        "text": "Sistem operasi hypervisor dan DNS resolver bawaan Route 53"
      },
      {
        "id": "D",
        "text": "Seluruh akun AWS pelanggan lain di Availability Zone yang sama"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS mengizinkan pengujian penetrasi keamanan tanpa izin awal khusus untuk resource milik pelanggan sendiri pada layanan tertentu seperti Amazon EC2, Amazon RDS, Amazon Aurora, CloudFront, dan Lambda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0032",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Dua Amazon VPC dalam satu Region dihubungkan menggunakan koneksi VPC Peering. Bagaimana sifat perutean lalu lintas jaringan antar VPC tersebut terkait konsep perutean transitif (transitive routing)?",
    "options": [
      {
        "id": "A",
        "text": "VPC Peering tidak mendukung perutean transitif (non-transitive); VPC A tidak bisa menjangkau VPC C melalui VPC B tanpa peering langsung"
      },
      {
        "id": "B",
        "text": "VPC Peering otomatis merutekan seluruh traffic transitif ke seluruh VPC di akun"
      },
      {
        "id": "C",
        "text": "VPC Peering mewajibkan alamat IP publik pada seluruh instance"
      },
      {
        "id": "D",
        "text": "VPC Peering hanya mengizinkan protokol ICMP (Ping)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "VPC Peering bersifat non-transitif. Jika VPC A terhubung ke VPC B, dan VPC B terhubung ke VPC C, maka VPC A tidak dapat berkomunikasi dengan VPC C melalui VPC B kecuali dibuat koneksi peering langsung antara A dan C (atau memakai AWS Transit Gateway).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0033",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi ingin memberikan hak unduh sementara kepada pengguna tertentu untuk mengunduh file laporan privat dari Amazon S3 selama 15 menit tanpa perlu mengubah bucket menjadi publik atau membuatkan akun IAM untuk pengguna tersebut. Mekanisme keamanan S3 manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "S3 Pre-signed URLs"
      },
      {
        "id": "B",
        "text": "S3 Block Public Access"
      },
      {
        "id": "C",
        "text": "IAM User Access Keys"
      },
      {
        "id": "D",
        "text": "Bucket ACL Public Read"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "S3 Pre-signed URLs memungkinkan pemilik bucket memberikan akses sementara yang terbatas waktu (time-limited) kepada pengguna untuk mengunduh atau mengunggah objek spesifik tanpa memerlukan kredensial AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0034",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Dalam strategi enkripsi data AWS KMS, konsep di mana sebuah data dienkripsi menggunakan data key (plaintext data key), dan kemudian data key tersebut dienkripsi menggunakan root key (KMS Key) dikenal dengan istilah apa?",
    "options": [
      {
        "id": "A",
        "text": "Envelope Encryption (Enkripsi Amplop)"
      },
      {
        "id": "B",
        "text": "Symmetric Hashing"
      },
      {
        "id": "C",
        "text": "Public Key Infrastructure"
      },
      {
        "id": "D",
        "text": "Stateless Obfuscation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Envelope Encryption adalah praktik mengenkripsi data plaintext dengan data key khusus, lalu mengenkripsi data key tersebut dengan kunci utama (KMS key) untuk memaksimalkan performa dan keamanan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0035",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi terhubung ke database Amazon RDS for MySQL. Manajemen ingin agar kata sandi database dirotasi secara otomatis setiap 30 hari sekali menggunakan fungsi AWS Lambda bawaan tanpa menimbulkan downtime aplikasi. Layanan keamanan AWS manakah yang menyediakan integrasi rotasi otomatis ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager Run Command"
      },
      {
        "id": "C",
        "text": "AWS KMS Key Policies"
      },
      {
        "id": "D",
        "text": "Amazon Cognito"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Secrets Manager memiliki fitur bawaan untuk secara otomatis merotasi rahasia kredensial basis data (seperti RDS MySQL, PostgreSQL) sesuai jadwal menggunakan fungsi Lambda pendamping.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0036",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah korporasi ingin membangun lingkungan multi-akun AWS yang terstandarisasi, aman, dan siap pakai (Landing Zone) dengan menerapkan guardrails otomatis dan konfigurasi tata kelola bawaan berbasis best practice AWS. Layanan otomatisasi tata kelola AWS manakah yang dirancang untuk membangun Landing Zone ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Control Tower"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "AWS CloudFormation StackSets Murni"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Control Tower menyediakan cara termudah untuk menyiapkan dan mengatur lingkungan multi-akun AWS yang aman dan patuh aturan dengan membangun Landing Zone otomatis berdasarkan praktik terbaik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0037",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang auditor keamanan ingin mengunduh laporan berformat CSV yang merinci status seluruh pengguna IAM di akun AWS, termasuk apakah mereka mengaktifkan MFA, umur kata sandi terakhir, dan kapan access key terakhir digunakan. Fitur audit IAM manakah yang menghasilkan laporan ini?",
    "options": [
      {
        "id": "A",
        "text": "IAM Credential Report"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail Event History"
      },
      {
        "id": "C",
        "text": "Amazon Inspector Report"
      },
      {
        "id": "D",
        "text": "AWS Artifact Document"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "IAM Credential Report menghasilkan laporan status kredensial seluruh pengguna di akun AWS, merinci status kata sandi, MFA, access keys, dan sertifikat penandatanganan untuk audit kepatuhan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0038",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Seorang insinyur cloud sedang mengonfigurasi layanan AWS Identity and Access Management (IAM) untuk pertama kalinya. Mengapa pengguna dan peran IAM yang dibuat dapat digunakan di seluruh Region AWS tanpa perlu berpindah konsol Region?",
    "options": [
      {
        "id": "A",
        "text": "Karena AWS IAM adalah layanan berskala global (Global Service) yang tidak terikat pada satu Region spesifik"
      },
      {
        "id": "B",
        "text": "Karena IAM secara otomatis mereplikasi data ke satu Availability Zone saja"
      },
      {
        "id": "C",
        "text": "Karena IAM memerlukan koneksi Direct Connect"
      },
      {
        "id": "D",
        "text": "Karena IAM hanya berlaku untuk akun root"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS IAM adalah layanan global (Global Service). Pengguna, grup, peran, dan kebijakan IAM berlaku dan dikenali secara seragam di seluruh Region AWS di seluruh dunia.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0039",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah aplikasi internal enterprise memerlukan Certificate Authority (CA) privat untuk menerbitkan sertifikat TLS bagi microservices internal di dalam VPC perusahaan tanpa mempercayakan sertifikat ke otoritas publik. Layanan sertifikat AWS manakah yang menyediakan fungsi CA privat ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Private Certificate Authority (AWS Private CA)"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "Amazon Route 53 Resolver"
      },
      {
        "id": "D",
        "text": "AWS Key Management Service"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Private Certificate Authority (AWS Private CA) memungkinkan organisasi membuat otoritas sertifikat privat sendiri untuk mengelola siklus hidup sertifikat internal aplikasi dengan keamanan tinggi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0040",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Sebuah perusahaan ingin menyalin seluruh data file dari bucket Amazon S3 di Region Jakarta (ap-southeast-3) ke bucket Amazon S3 di Region Singapura (ap-southeast-1) secara otomatis untuk pemulihan bencana (DR) lintas kawasan geografis. Fitur Amazon S3 manakah yang harus dikonfigurasi?",
    "options": [
      {
        "id": "A",
        "text": "Cross-Region Replication (CRR)"
      },
      {
        "id": "B",
        "text": "Same-Region Replication (SRR)"
      },
      {
        "id": "C",
        "text": "S3 Intelligent-Tiering"
      },
      {
        "id": "D",
        "text": "S3 Transfer Acceleration"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "S3 Cross-Region Replication (CRR) secara otomatis mereplikasi objek secara asinkron dari bucket sumber di satu Region ke bucket tujuan di Region AWS yang berbeda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0041",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Untuk mencegah penghapusan permanen objek penting di Amazon S3 oleh karyawan yang berniat jahat atau akun yang terkompromi, perusahaan ingin mewajibkan autentikasi dua faktor fisik (MFA) setiap kali ada permintaan penghapusan versi objek. Fitur keamanan S3 manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "S3 MFA Delete"
      },
      {
        "id": "B",
        "text": "S3 Object Lock Legal Hold"
      },
      {
        "id": "C",
        "text": "S3 Lifecycle Expiration"
      },
      {
        "id": "D",
        "text": "S3 Event Notifications"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "S3 MFA Delete mewajibkan kode token MFA tambahan sebelum versi objek permanen dapat dihapus atau sebelum status Versioning bucket dapat diubah.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0042",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Berdasarkan AWS Shared Responsibility Model pada layanan Amazon Simple Storage Service (Amazon S3), manakah dari tanggung jawab berikut yang berada di pihak AWS?",
    "options": [
      {
        "id": "A",
        "text": "Pengelolaan redundansi perangkat keras penyimpanan fisik, replikasi data multi-fasilitas, dan keamanan fisik data center"
      },
      {
        "id": "B",
        "text": "Konfigurasi aturan Bucket Policy dan Access Control List (ACL)"
      },
      {
        "id": "C",
        "text": "Pengaturan fitur S3 Block Public Access di tingkat akun"
      },
      {
        "id": "D",
        "text": "Pemilihan kunci enkripsi client-side sebelum data diunggah"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS bertanggung jawab atas infrastruktur penyimpanan fisik, ketahanan hardware, redundansi lintas fasilitas data center, dan fasilitas fisik ('Security OF the Cloud'). Pelanggan mengelola policy akses, enkripsi, dan data.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0043",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah aplikasi web dirancang dengan arsitektur yang mampu memulihkan diri secara otomatis dari gangguan (self-healing), menguji prosedur kegagalan secara berkala, dan mendistribusikan beban kerja ke beberapa Availability Zone. Pilar AWS Well-Architected Framework manakah yang paling didukung oleh arsitektur ini?",
    "options": [
      {
        "id": "A",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "B",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "C",
        "text": "Keberlanjutan (Sustainability)"
      },
      {
        "id": "D",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Reliability (Keandalan) mencakup kemampuan sistem untuk memulihkan diri dari gangguan infrastruktur, mengalokasikan sumber daya komputasi secara dinamis untuk memenuhi permintaan, dan memitigasi gangguan seperti salah konfigurasi jaringan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0044",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Seorang eksekutif TI bertanya mengapa tarif per gigabyte penyimpanan Amazon S3 dan harga komputasi AWS terus mengalami penurunan harga secara berkala dari tahun ke tahun. Keuntungan komputasi cloud manakah yang menjelaskan fenomena penurunan harga ini?",
    "options": [
      {
        "id": "A",
        "text": "Memperoleh keuntungan dari skala ekonomis masif (Benefit from massive economies of scale)"
      },
      {
        "id": "B",
        "text": "Meningkatkan belanja modal di awal (Capital expense)"
      },
      {
        "id": "C",
        "text": "Menghilangkan kebutuhan sistem operasi"
      },
      {
        "id": "D",
        "text": "Memaksa pelanggan menandatangani kontrak jangka panjang 10 tahun"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dengan mengagregasikan ratusan ribu pelanggan di cloud, AWS mencapai skala ekonomis masif yang menurunkan biaya operasional, dan efisiensi biaya tersebut diteruskan ke pelanggan dalam bentuk pemotongan harga berkala.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0045",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah startup baru tidak memiliki modal besar untuk membeli perangkat keras server fisik atau menyewa ruang data center selama 3 tahun ke depan. Mereka memilih AWS karena hanya perlu membayar sesuai kapasitas server yang digunakan setiap jamnya (pay-as-you-go). Keuntungan komputasi cloud manakah yang paling langsung dirasakan startup ini?",
    "options": [
      {
        "id": "A",
        "text": "Mengubah belanja modal menjadi biaya variabel (Trade capital expense for variable expense)"
      },
      {
        "id": "B",
        "text": "Menghilangkan kebutuhan tim pengembangan software"
      },
      {
        "id": "C",
        "text": "Penyimpanan data lokal eksklusif tanpa internet"
      },
      {
        "id": "D",
        "text": "Menjamin waktu henti aplikasi nol persen secara otomatis"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "'Trade capital expense for variable expense' memungkinkan bisnis membayar hanya saat mereka mengonsumsi sumber daya komputasi, tanpa perlu mengalokasikan modal investasi besar di awal untuk server fisik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0046",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah tim pengembang aplikasi mobile dapat meluncurkan lingkungan pengujian baru yang terdiri dari 5 server dan database hanya dalam waktu 5 menit melalui AWS CLI, mengevaluasi fitur baru, dan kemudian langsung mematikannya. Keuntungan komputasi cloud manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Meningkatkan kecepatan dan kelincahan (Increase speed and agility)"
      },
      {
        "id": "B",
        "text": "Mempertahankan kapasitas server statis"
      },
      {
        "id": "C",
        "text": "Mewajibkan arsitektur monolitik tradisional"
      },
      {
        "id": "D",
        "text": "Meningkatkan siklus pengadaan perangkat keras hingga bulanan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Keuntungan 'Increase speed and agility' mengurangi waktu yang dibutuhkan untuk menyediakan sumber daya bagi pengembang dari berminggu-minggu menjadi hanya hitungan menit.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0047",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah sistem pembayaran online menggunakan Auto Scaling Group untuk secara otomatis menambah instance EC2 saat volume transaksi memuncak pada pukul 12.00 WIB dan menguranginya kembali pada pukul 14.00 WIB. Karakteristik adaptasi beban kerja dinamis ini mengacu pada konsep apa?",
    "options": [
      {
        "id": "A",
        "text": "Elastisitas (Elasticity)"
      },
      {
        "id": "B",
        "text": "Portabilitas (Portability)"
      },
      {
        "id": "C",
        "text": "Kapasitas Tetap (Fixed Provisioning)"
      },
      {
        "id": "D",
        "text": "Ketahanan Statis (Static Durability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Elastisitas (Elasticity) adalah kemampuan sistem cloud untuk menambah atau mengurangi kapasitas secara otomatis mengikuti lonjakan dan penurunan beban kerja nyata.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0048",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Dalam kerangka kerja AWS Cloud Adoption Framework (AWS CAF), sebuah organisasi menyusun strategi pengelolaan portofolio proyek cloud, pengoptimalan biaya investasi teknologi (FinOps), dan kepatuhan terhadap regulasi eksternal. Perspektif AWS CAF manakah yang memayungi inisiatif-inisiatif ini?",
    "options": [
      {
        "id": "A",
        "text": "Perspektif Tata Kelola (Governance Perspective)"
      },
      {
        "id": "B",
        "text": "Perspektif Platform (Platform Perspective)"
      },
      {
        "id": "C",
        "text": "Perspektif Sumber Daya Manusia (People Perspective)"
      },
      {
        "id": "D",
        "text": "Perspektif Operasi (Operations Perspective)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Perspektif Governance (Tata Kelola) dalam AWS CAF berfokus pada penyelarasan strategi cloud dengan tujuan bisnis, manajemen portofolio teknologi, tata kelola keuangan (FinOps), dan manajemen risiko kepatuhan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0049",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah korporasi ingin merancang rencana penanganan insiden keamanan siber, mengelola kontrol akses identitas, dan memastikan data terenkripsi secara menyeluruh di AWS. Perspektif dalam AWS Cloud Adoption Framework (AWS CAF) manakah yang secara khusus memandu perancangan kapabilitas ini?",
    "options": [
      {
        "id": "A",
        "text": "Perspektif Keamanan (Security Perspective)"
      },
      {
        "id": "B",
        "text": "Perspektif Bisnis (Business Perspective)"
      },
      {
        "id": "C",
        "text": "Perspektif Operasi (Operations Perspective)"
      },
      {
        "id": "D",
        "text": "Perspektif Platform (Platform Perspective)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Perspektif Security dalam AWS CAF membantu merancang postur pertahanan organisasi di cloud melalui kontrol identitas, deteksi dini ancaman, respons insiden, dan perlindungan data.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0050",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah tim rekayasa perangkat lunak mengadopsi prinsip desain Well-Architected di mana mereka selalu menerapkan perubahan kode dalam ukuran kecil dan sering yang mudah dibalikkan (small, reversible changes) serta melakukan analisis pasca-insiden tanpa saling menyalahkan (blameless post-mortem). Pilar manakah yang menaungi prinsip ini?",
    "options": [
      {
        "id": "A",
        "text": "Keunggulan Operasional (Operational Excellence)"
      },
      {
        "id": "B",
        "text": "Keamanan (Security)"
      },
      {
        "id": "C",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "D",
        "text": "Keberlanjutan (Sustainability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Menerapkan perubahan kecil yang dapat dibalikkan dan belajar dari semua kegagalan operasional (blameless post-mortem) adalah prinsip desain utama dari pilar Operational Excellence.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0051",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah perusahaan memutuskan untuk menghentikan pemeliharaan server email internal dan beralih menggunakan solusi perangkat lunak berbasis cloud (seperti layanan SaaS pihak ketiga). Dalam kerangka strategi migrasi 6 R's (Migration Strategies), pendekatan penggantian aplikasi ini dikenal dengan istilah apa?",
    "options": [
      {
        "id": "A",
        "text": "Repurchase (Drop-and-Shop / Beralih ke SaaS)"
      },
      {
        "id": "B",
        "text": "Rehost (Lift-and-Shift)"
      },
      {
        "id": "C",
        "text": "Replatform (Lift-Tinker-and-Shift)"
      },
      {
        "id": "D",
        "text": "Retain (Mempertahankan)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Strategi 'Repurchase' (sering disebut drop-and-shop) adalah keputusan untuk mengganti aplikasi lama yang dikelola sendiri dengan produk perangkat lunak sebagai layanan (SaaS) yang sudah siap pakai.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0052",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Dalam kerangka kerja AWS Cloud Adoption Framework (AWS CAF), para eksekutif perusahaan sedang menyusun rencana kasus bisnis (business case), analisis laba atas investasi (Return on Investment / ROI), dan penyelarasan strategi digital dengan tujuan komersial perusahaan. Perspektif AWS CAF manakah yang memandu inisiatif ini?",
    "options": [
      {
        "id": "A",
        "text": "Perspektif Bisnis (Business Perspective)"
      },
      {
        "id": "B",
        "text": "Perspektif Platform (Platform Perspective)"
      },
      {
        "id": "C",
        "text": "Perspektif Keamanan (Security Perspective)"
      },
      {
        "id": "D",
        "text": "Perspektif Operasi (Operations Perspective)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Perspektif Business (Bisnis) dalam AWS CAF memastikan bahwa investasi teknologi cloud selaras dengan hasil bisnis strategis, model bisnis baru, dan pemulihan nilai investasi komersial (ROI).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0053",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah tim arsitek cloud secara rutin meninjau metrik latensi aplikasi dan bereksperimen dengan berbagai tipe instance komputasi terbaru (seperti instance berbasis prosesor AWS Graviton) untuk memastikan sistem memberikan performa tertinggi pada sumber daya yang dialokasikan. Pilar AWS Well-Architected Framework manakah yang tercermin?",
    "options": [
      {
        "id": "A",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "B",
        "text": "Keberlanjutan (Sustainability)"
      },
      {
        "id": "C",
        "text": "Keamanan (Security)"
      },
      {
        "id": "D",
        "text": "Keandalan (Reliability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Performance Efficiency (Efisiensi Kinerja) berfokus pada kemampuan menggunakan sumber daya komputasi secara efisien untuk memenuhi persyaratan sistem dan mempertahankan efisiensi tersebut seiring kemajuan teknologi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0054",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Sebuah sistem perdagangan saham dirancang agar tidak mengalami gangguan layanan sama sekali jika terjadi kerusakan perangkat keras pada salah satu server (Zero Downtime). Desain ini mencakup komponen cadangan aktif ganda di setiap lapisan arsitektur. Karakteristik arsitektur cloud manakah yang paling tepat menggambarkan kemampuan toleransi kerusakan total ini?",
    "options": [
      {
        "id": "A",
        "text": "Toleransi Kesalahan (Fault Tolerance)"
      },
      {
        "id": "B",
        "text": "Elastisitas Biaya (Cost Elasticity)"
      },
      {
        "id": "C",
        "text": "Portabilitas Vendor (Vendor Portability)"
      },
      {
        "id": "D",
        "text": "Skalabilitas Vertikal (Vertical Scalability)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Fault Tolerance (Toleransi Kesalahan) adalah kemampuan sistem untuk tetap beroperasi normal tanpa adanya penurunan performa atau downtime sama sekali ketika salah satu komponen mengalami kegagalan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0055",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs web global menggunakan Amazon CloudFront untuk mempercepat akses pengguna di seluruh dunia. Ketika konten yang diminta tidak ditemukan pada titik Edge Location lokal pengguna, CloudFront secara otomatis mencari konten tersebut pada cache tingkat regional yang lebih besar sebelum menghubungi server asal (origin). Komponen infrastruktur global AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Regional Edge Cache"
      },
      {
        "id": "B",
        "text": "AWS Local Zone"
      },
      {
        "id": "C",
        "text": "AWS Outpost"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect Location"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Regional Edge Caches adalah komponen infrastruktur CloudFront yang terletak di antara Edge Locations dan server asal Anda, memiliki cache lebih besar untuk mempertahankan konten lebih lama dan mengurangi beban server asal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0056",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah pabrik manufaktur otomotif memerlukan pemrosesan data sensor dengan latensi sangat rendah di lantai pabrik fisik lokal mereka, namun ingin mengoperasikannya menggunakan API, konsol, dan layanan AWS yang persis sama dengan di cloud. Layanan infrastruktur hybrid AWS manakah yang menyediakan rak server fisik perangkat keras AWS di fasilitas lokal pelanggan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Outposts"
      },
      {
        "id": "B",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Outposts membawa infrastruktur, layanan, API, dan perkakas AWS asli langsung ke fasilitas pusat data fisik on-premise atau ruang kantor pelanggan untuk pengalaman hybrid yang benar-benar konsisten.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0057",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah pengembang aplikasi game seluler augmented reality (AR) ingin menghadirkan latensi ultra-rendah (di bawah 10 milidetik) langsung ke perangkat seluler pengguna smartphone dengan menempatkan beban kerja komputasi di dalam jaringan nirkabel 5G operator telekomunikasi. Layanan infrastruktur AWS manakah yang dirancang untuk skenario 5G edge ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Wavelength"
      },
      {
        "id": "B",
        "text": "AWS Outposts"
      },
      {
        "id": "C",
        "text": "AWS Direct Connect"
      },
      {
        "id": "D",
        "text": "Amazon Route 53"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Wavelength menanamkan layanan komputasi dan penyimpanan AWS di dalam jaringan 5G penyedia telekomunikasi untuk menghadirkan latensi ultra-rendah bagi perangkat seluler cerdas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0058",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah studio produksi film di Los Angeles perlu menjalankan rendering video real-time yang membutuhkan latensi satu digit milidetik ke workstation pengguna lokal, namun AWS Region terdekat berjarak ratusan kilometer. Komponen infrastruktur AWS manakah yang menempatkan komputasi dan penyimpanan AWS dekat dengan pusat populasi kota besar tertentu?",
    "options": [
      {
        "id": "A",
        "text": "AWS Local Zones"
      },
      {
        "id": "B",
        "text": "AWS Snowcone"
      },
      {
        "id": "C",
        "text": "Edge Locations Dasar"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Local Zones memperluas infrastruktur AWS dengan menempatkan layanan komputasi, penyimpanan, dan basis data di dekat kota-kota besar metropolitan dan pusat industri untuk aplikasi sensitif latensi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0059",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi pemrosesan video batch membutuhkan instance Amazon EC2 yang memiliki rasio prosesor komputasi tinggi (CPU) terhadap memori, guna mempercepat encoding video. Keluarga instance Amazon EC2 manakah yang paling sesuai untuk beban kerja compute-intensive ini?",
    "options": [
      {
        "id": "A",
        "text": "Compute Optimized (Keluarga C, seperti c6g atau c7i)"
      },
      {
        "id": "B",
        "text": "Memory Optimized (Keluarga R)"
      },
      {
        "id": "C",
        "text": "Storage Optimized (Keluarga I)"
      },
      {
        "id": "D",
        "text": "Accelerated Computing (Keluarga G)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Instance keluarga Compute Optimized (seri C) dioptimalkan khusus untuk beban kerja yang membutuhkan daya komputasi CPU tinggi dengan rasio prosesor terhadap memori yang hemat, seperti batch processing dan video encoding.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0060",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang insinyur cloud ingin mengotomatiskan instalasi server web Apache dan mendownload paket aplikasi secara otomatis saat pertama kali instance Amazon EC2 baru diluncurkan (bootstrapping). Di manakah skrip bash shell instalasi tersebut harus dimasukkan saat meluncurkan instance?",
    "options": [
      {
        "id": "A",
        "text": "EC2 User Data"
      },
      {
        "id": "B",
        "text": "EC2 Instance Metadata (IMDS)"
      },
      {
        "id": "C",
        "text": "Security Group Rules"
      },
      {
        "id": "D",
        "text": "Route Table Attributes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Bidang EC2 User Data memungkinkan pengguna memasukkan skrip konfigurasi (bootstrapping) yang akan dieksekusi secara otomatis dengan hak akses root saat instance EC2 pertama kali dinyalakan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0061",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan telah mengonfigurasi instance Amazon EC2 dengan sistem operasi yang telah diperkeras (hardened OS), dependensi perangkat lunak khusus, dan file konfigurasi standar perusahaan. Mereka ingin menyimpan template konfigurasi instance tersebut agar dapat meluncurkan puluhan instance identik di masa depan. Komponen AWS manakah yang harus dibuat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Machine Image (AMI)"
      },
      {
        "id": "B",
        "text": "Volume Amazon EBS Kosong"
      },
      {
        "id": "C",
        "text": "IAM Instance Profile"
      },
      {
        "id": "D",
        "text": "Security Group Template"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Machine Image (AMI) menyediakan informasi yang diperlukan untuk meluncurkan instance, mencakup template sistem operasi, server aplikasi, dependensi, dan izin peluncuran.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0062",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang ingin menyebarkan aplikasi kontainer mikro menggunakan Amazon Elastic Container Service (Amazon ECS). Tim menginginkan model tanpa server (serverless) di mana mereka tidak perlu mengelola, memprovisikan, mengonfigurasi, atau memelihara instance server host EC2 sama sekali. Mesin komputasi kontainer manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "AWS Fargate"
      },
      {
        "id": "B",
        "text": "Amazon EC2 Launch Type Murni"
      },
      {
        "id": "C",
        "text": "Amazon Lightsail"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Fargate adalah mesin komputasi tanpa server (serverless compute engine) untuk kontainer yang bekerja bersama Amazon ECS dan EKS, menghilangkan kebutuhan mengelola server virtual host EC2.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0063",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki aplikasi enterprise yang sudah terbiasa berjalan di atas klaster Kubernetes open-source. Mereka ingin memindahkan beban kerja tersebut ke AWS tanpa mengubah manifest file deployment Kubernetes mereka, dan ingin agar control plane Kubernetes dikelola secara otomatis oleh AWS. Layanan terkelola AWS manakah yang dirancang untuk hal ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Kubernetes Service (Amazon EKS)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Container Registry (Amazon ECR)"
      },
      {
        "id": "C",
        "text": "Amazon ECS"
      },
      {
        "id": "D",
        "text": "AWS App Runner"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EKS adalah layanan Kubernetes terkelola yang mempermudah pengoperasian Kubernetes di AWS tanpa perlu menginstal dan mengoperasikan control plane atau worker node sendiri.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0064",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang pengembang aplikasi web PHP pemula ingin segera meluncurkan aplikasinya ke internet hanya dengan mengunggah paket kode sumber (source code zip). Layanan platform terkelola (PaaS) AWS secara otomatis menangani penyediaan instance EC2, penyeimbang beban (load balancer), penskalaan otomatis, dan konfigurasi database. Layanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS Lambda"
      },
      {
        "id": "D",
        "text": "Amazon EC2 Manual"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Elastic Beanstalk adalah layanan Platform as a Service (PaaS) yang mempermudah penyebaran dan penskalaan aplikasi web dengan menangani otomatisasi provisioning, load balancing, auto-scaling, dan health monitoring.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0065",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah sistem analitik keuangan frekuensi tinggi (High-Frequency Trading) membutuhkan penyimpanan objek Amazon S3 berkinerja paling tinggi dengan latensi konsisten satu digit milidetik untuk memproses ratusan ribu transaksi per detik di dalam satu Availability Zone tertentu. Kelas penyimpanan Amazon S3 berkinerja tinggi manakah yang dirancang untuk skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Express One Zone"
      },
      {
        "id": "B",
        "text": "Amazon S3 Standard"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier Instant Retrieval"
      },
      {
        "id": "D",
        "text": "Amazon S3 Intelligent-Tiering"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon S3 Express One Zone adalah kelas penyimpanan S3 berkinerja tertinggi yang dirancang untuk memberikan latensi data satu digit milidetik yang konsisten hingga 10x lebih cepat dari S3 Standard untuk beban kerja yang sangat intensif.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0066",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki jutaan file log transaksi di Amazon S3 yang harus dipertahankan selama 5 tahun. Log tersebut hampir tidak pernah diakses kembali setelah 60 hari pertama, namun jika diperlukan untuk audit hukum, waktu pengambilan data dalam rentang 3 hingga 5 jam dapat diterima demi menghemat biaya penyimpanan. Aturan transisi Lifecycle S3 manakah yang paling sesuai?",
    "options": [
      {
        "id": "A",
        "text": "Mentransisikan objek ke Amazon S3 Glacier Flexible Retrieval setelah 60 hari"
      },
      {
        "id": "B",
        "text": "Menghapus objek secara permanen setelah 60 hari"
      },
      {
        "id": "C",
        "text": "Mentransisikan objek ke S3 Standard-IA setelah 1 tahun"
      },
      {
        "id": "D",
        "text": "Memindahkan objek ke volume Amazon EBS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mentransisikan objek ke S3 Glacier Flexible Retrieval setelah 60 hari secara dramatis menghemat biaya penyimpanan untuk data arsip yang jarang diakses dengan waktu pemulihan standar antara 3-5 jam.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0067",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah kantor pusat di Jakarta perlu mengunggah file media berukuran puluhan gigabyte secara rutin ke bucket Amazon S3 yang berada di Region Virginia Utara (us-east-1). Untuk mempercepat kecepatan unggah file melintasi benua dengan memanfaatkan jaringan Edge Locations AWS dan rute backbone yang dioptimalkan, fitur Amazon S3 manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Transfer Acceleration"
      },
      {
        "id": "B",
        "text": "S3 Cross-Region Replication"
      },
      {
        "id": "C",
        "text": "S3 Multipart Upload Murni"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon S3 Transfer Acceleration memanfaatkan jaringan Edge Locations global milik Amazon CloudFront untuk merutekan lalu lintas data ke bucket Amazon S3 melalui jaringan backbone privat AWS yang dioptimasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0068",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi basis data mission-critical yang berjalan pada Amazon EC2 membutuhkan penyimpanan volume Amazon EBS yang mampu menghasilkan performa ekstrem hingga 256.000 IOPS dan throughput 4.000 MB/s dengan latensi sub-milidetik. Tipe volume penyimpanan Amazon EBS manakah yang dirancang untuk kebutuhan ekstrem ini?",
    "options": [
      {
        "id": "A",
        "text": "io2 Block Express (Provisioned IOPS SSD)"
      },
      {
        "id": "B",
        "text": "General Purpose SSD (gp3)"
      },
      {
        "id": "C",
        "text": "Throughput Optimized HDD (st1)"
      },
      {
        "id": "D",
        "text": "Cold HDD (sc1)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Volume Amazon EBS io2 Block Express adalah arsitektur penyimpanan blok generasi tertinggi yang menawarkan performa IOPS tertinggi (hingga 256.000 IOPS) dan keandalan 99,999% untuk database mission-critical.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0069",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang System Administrator ingin membuat salinan cadangan point-in-time dari volume Amazon EBS. Salinan cadangan ini disimpan secara inkremental di Amazon S3 dan dapat digunakan untuk membuat volume baru kapan saja. Fitur Amazon EBS manakah yang menyediakan kemampuan pencadangan ini?",
    "options": [
      {
        "id": "A",
        "text": "EBS Snapshots"
      },
      {
        "id": "B",
        "text": "EBS Volume Cloning"
      },
      {
        "id": "C",
        "text": "EBS Multi-Attach"
      },
      {
        "id": "D",
        "text": "EBS Elastic Volumes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "EBS Snapshots adalah cadangan point-in-time inkremental dari volume EBS Anda yang disimpan secara redundan di Amazon S3 untuk perlindungan data dan pemulihan bencana.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0070",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi memiliki aplikasi berbasis Microsoft Windows Server yang membutuhkan sistem file bersama (shared file system) yang mendukung protokol Server Message Block (SMB), integrasi penuh dengan Microsoft Active Directory, dan fitur Windows NTFS. Layanan penyimpanan terkelola AWS manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "Amazon FSx for Windows File Server"
      },
      {
        "id": "B",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "Amazon S3 File Gateway"
      },
      {
        "id": "D",
        "text": "Amazon EBS Multi-Attach"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon FSx for Windows File Server menyediakan sistem file berbasis Microsoft Windows Server yang terkelola penuh dengan dukungan protokol SMB dan integrasi Active Directory.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0071",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah lab riset kecerdasan buatan (AI) menjalankan pelatihan model machine learning berskala besar yang membutuhkan sistem file terdistribusi paralel dengan throughput ratusan gigabyte per detik dan latensi sub-milidetik yang terhubung langsung dengan bucket Amazon S3. Layanan penyimpanan terkelola AWS manakah yang dirancang untuk HPC dan ML ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon FSx for Lustre"
      },
      {
        "id": "B",
        "text": "Amazon EFS Standard"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon S3 Glacier"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon FSx for Lustre dioptimalkan khusus untuk beban kerja komputasi cepat seperti High Performance Computing (HPC), machine learning, dan pemrosesan media video yang membutuhkan throughput masif.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0072",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi perbankan digital global membutuhkan basis data relasional yang dapat melayani pembacaan data lokal yang sangat cepat bagi pengguna di beberapa Region AWS di seluruh dunia, dengan latensi replikasi antar-Region kurang dari 1 detik dan kemampuan pemulihan bencana lintas Region secara cepat. Fitur basis data Amazon Aurora manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Aurora Global Database"
      },
      {
        "id": "B",
        "text": "Amazon RDS Multi-AZ Deployment Dasar"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB Single Region"
      },
      {
        "id": "D",
        "text": "AWS Database Migration Service"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Aurora Global Database memungkinkan satu database Aurora mencakup beberapa Region AWS di seluruh dunia, menyediakan pembacaan lokal cepat dengan latensi replikasi sub-detik dan pemulihan bencana (DR) yang mulus.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0073",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi e-commerce sering mengalami fluktuasi beban transaksi database yang tidak dapat diprediksi (dari beberapa ratus query per detik melonjak menjadi puluhan ribu). Pengembang ingin menggunakan basis data relasional Amazon Aurora yang kapasitas komputasinya dapat otomatis naik dan turun dalam pecahan detik mengikuti permintaan tanpa gangguan koneksi. Konfigurasi Amazon Aurora manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Aurora Serverless v2"
      },
      {
        "id": "B",
        "text": "Amazon Aurora Provisioned Static"
      },
      {
        "id": "C",
        "text": "Amazon RDS Multi-AZ Standby"
      },
      {
        "id": "D",
        "text": "Amazon DocumentDB"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Aurora Serverless v2 secara instan dan otomatis menskalakan kapasitas database dalam peningkatan yang sangat halus (Aurora Capacity Units / ACU) dalam hitungan detik untuk menangani lonjakan beban kerja yang dinamis.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0074",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi web menyimpan data token sesi sementara pada tabel Amazon DynamoDB. Token sesi tersebut tidak lagi berguna dan harus dihapus setelah melewati masa kedaluwarsa 24 jam. Fitur bawaan Amazon DynamoDB manakah yang secara otomatis menghapus item yang kedaluwarsa berdasarkan stempel waktu tanpa menimbulkan biaya penulisan tambahan?",
    "options": [
      {
        "id": "A",
        "text": "DynamoDB Time to Live (TTL)"
      },
      {
        "id": "B",
        "text": "DynamoDB Streams"
      },
      {
        "id": "C",
        "text": "DynamoDB Global Tables"
      },
      {
        "id": "D",
        "text": "DynamoDB Accelerator (DAX)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Fitur Time to Live (TTL) pada Amazon DynamoDB mendefinisikan stempel waktu kedaluwarsa per item, dan secara otomatis menghapus item yang kedaluwarsa dari tabel di latar belakang tanpa mengonsumsi throughput kapasitas tulis.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0075",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim analitik data ingin menjalankan kueri data warehouse analitis berskala besar (OLAP) menggunakan Amazon Redshift tanpa perlu memprovisikan, mengonfigurasi, atau mengelola kapasitas klaster data warehouse secara manual, dan hanya ingin membayar saat kueri analitik sedang aktif berjalan. Opsi deployment Amazon Redshift manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift Serverless"
      },
      {
        "id": "B",
        "text": "Amazon Redshift Provisioned Cluster (dc2.large)"
      },
      {
        "id": "C",
        "text": "Amazon RDS for MySQL"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch Logs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Redshift Serverless mempermudah pelaksanaan analitik SQL kinerja tinggi tanpa perlu mengelola klaster data warehouse fisik, secara otomatis menyesuaikan kapasitas dan berhenti saat tidak ada beban kerja aktif.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0076",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki aplikasi web yang disebarkan pada dua AWS Region: Region Singapura dan Region Frankfurt. Perusahaan ingin agar pengguna internet secara otomatis dirutekan ke Region AWS yang memberikan latensi jaringan terendah (waktu round-trip tercepat) dari lokasi jaringan pengguna. Kebijakan perutean Amazon Route 53 manakah yang harus dikonfigurasi?",
    "options": [
      {
        "id": "A",
        "text": "Latency-based Routing Policy"
      },
      {
        "id": "B",
        "text": "Weighted Routing Policy"
      },
      {
        "id": "C",
        "text": "Failover Routing Policy"
      },
      {
        "id": "D",
        "text": "Simple Routing Policy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Latency-based Routing Policy pada Amazon Route 53 merutekan permintaan pengguna ke AWS Region yang menyediakan latensi jaringan terendah bagi pengguna tersebut berdasarkan pengukuran latensi global AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0077",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs e-commerce multinasional ingin merutekan pembeli yang berasal dari Prancis ke server web berbahasa Prancis, dan pembeli dari Jepang ke server web berbahasa Jepang berdasarkan lokasi geografis asal alamat IP pengunjung. Kebijakan perutean Amazon Route 53 manakah yang dirancang khusus untuk pemetaan berbasis wilayah/negara ini?",
    "options": [
      {
        "id": "A",
        "text": "Geolocation Routing Policy"
      },
      {
        "id": "B",
        "text": "Latency-based Routing Policy"
      },
      {
        "id": "C",
        "text": "Weighted Routing Policy"
      },
      {
        "id": "D",
        "text": "Multivalue Answer Routing Policy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Geolocation Routing Policy memungkinkan perutean lalu lintas pengguna berdasarkan lokasi geografis asal pemohon (benua, negara, atau negara bagian) untuk penyesuaian konten lokal dan kepatuhan hukum.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0078",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan enterprise memiliki 50 Amazon VPC dan beberapa jaringan kantor lokal on-premise. Menghubungkan setiap VPC satu per satu menggunakan VPC Peering (full mesh) menjadi sangat rumit untuk dikelola. Layanan gateway jaringan AWS manakah yang bertindak sebagai hub terpusat (hub-and-spoke) untuk menyederhanakan interkoneksi ratusan VPC dan jaringan on-premise ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "B",
        "text": "Internet Gateway"
      },
      {
        "id": "C",
        "text": "NAT Gateway"
      },
      {
        "id": "D",
        "text": "Egress-Only Internet Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Transit Gateway bertindak sebagai cloud router terpusat dalam topologi hub-and-spoke, menghubungkan ribuan VPC, akun AWS, dan jaringan lokal on-premise melalui satu gateway tunggal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0079",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah institusi perbankan membutuhkan koneksi jaringan pribadi khusus (dedicated private network connection) berkapasitas 10 Gbps antara pusat data on-premise mereka dan AWS yang sepenuhnya melewati jalur internet publik untuk menjamin bandwidth stabil, keamanan fisik, dan latensi konsisten. Layanan jaringan AWS manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Site-to-Site VPN"
      },
      {
        "id": "C",
        "text": "Internet Gateway"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Direct Connect menyediakan jalur koneksi serat optik fisik privat khusus dari fasilitas lokal Anda langsung ke AWS, memotong jaringan internet publik untuk keandalan throughput dan konsistensi latensi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0080",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah kantor cabang perusahaan membutuhkan koneksi terenkripsi IPsec yang aman dan cepat disiapkan ke Amazon VPC mereka melalui jaringan internet publik standar dengan biaya terjangkau. Layanan konektivitas jaringan AWS manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "AWS Site-to-Site VPN"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "VPC Peering"
      },
      {
        "id": "D",
        "text": "AWS Global Accelerator"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Site-to-Site VPN membuat terowongan jaringan terenkripsi IPsec yang aman antara jaringan kantor lokal on-premise dan Amazon VPC Anda melalui internet publik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0081",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Instance Amazon EC2 di dalam Private Subnet perlu mengunduh patch pembaruan perangkat lunak dari internet publik, namun kebijakan keamanan melarang server tersebut menerima koneksi lalu lintas masuk (inbound) yang diinisiasi dari internet luar. Komponen terkelola VPC manakah yang harus ditempatkan di Public Subnet untuk memfasilitasi kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "NAT Gateway"
      },
      {
        "id": "B",
        "text": "Internet Gateway Murni"
      },
      {
        "id": "C",
        "text": "Virtual Private Gateway"
      },
      {
        "id": "D",
        "text": "Customer Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "NAT Gateway (Network Address Translation) memungkinkan instance di private subnet mengirim lalu lintas keluar ke internet (misal untuk software updates) sembari secara ketat memblokir koneksi masuk yang diinisiasi dari internet.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0082",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim DevOps ingin memantau ketersediaan aplikasi web mereka secara proaktif 24/7 dengan menjalankan skrip pengujian otomatis (canaries) yang secara berkala mensimulasikan klik navigasi pengguna nyata di browser dan memicu alarm jika halaman gagal dimuat. Fitur pemantauan Amazon CloudWatch manakah yang menyediakan fungsi ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch Synthetics (Canaries)"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch Logs Insights"
      },
      {
        "id": "C",
        "text": "CloudWatch Container Insights"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail Insights"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "CloudWatch Synthetics memungkinkan pembuatan 'canaries' (skrip otomatis yang berjalan sesuai jadwal) untuk memantau endpoint dan alur kerja aplikasi web Anda dengan mensimulasikan tindakan pengguna nyata.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0083",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah alur kerja pemrosesan aplikasi pesanan terdiri dari beberapa fungsi AWS Lambda, tugas kontainer Amazon ECS, dan persetujuan manual yang harus dijalankan secara berurutan dengan logika percabangan kondisi dan penanganan kesalahan (error handling). Layanan orkestrasi visual tanpa server AWS manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Step Functions"
      },
      {
        "id": "B",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "C",
        "text": "AWS CodePipeline"
      },
      {
        "id": "D",
        "text": "Amazon EventBridge"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Step Functions adalah layanan orkestrasi alur kerja visual tanpa server yang mempermudah koordinasi microservices, fungsi Lambda, dan komponen terdistribusi menjadi alur kerja yang terstruktur.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0084",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang ingin menghubungkan aliran event dari antrean Amazon SQS langsung ke fungsi AWS Lambda dengan menyertakan filter data otomatis tanpa perlu menulis kode integrasi atau polling manual. Fitur perutean point-to-point Amazon EventBridge manakah yang menyediakan integrasi langsung ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EventBridge Pipes"
      },
      {
        "id": "B",
        "text": "Amazon EventBridge Schema Registry"
      },
      {
        "id": "C",
        "text": "Amazon SNS Fanout"
      },
      {
        "id": "D",
        "text": "AWS Step Functions Express"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EventBridge Pipes menyediakan integrasi point-to-point yang sederhana, konsisten, dan hemat biaya antara produsen event (seperti SQS atau Kinesis) dan konsumen target dengan kemampuan filtering dan enrichment bawaan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0085",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki ratusan server fisik dan mesin virtual VMware di pusat data on-premise yang ingin dimigrasikan ke Amazon EC2 dengan replikasi tingkat blok berkelanjutan (continuous block-level replication) untuk meminimalkan waktu henti (cutover downtime). Layanan migrasi otomatis AWS manakah yang dirancang untuk tujuan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Application Migration Service (AWS MGN)"
      },
      {
        "id": "B",
        "text": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "id": "C",
        "text": "AWS Snowball Edge Storage Optimized"
      },
      {
        "id": "D",
        "text": "AWS DataSync"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Application Migration Service (AWS MGN) adalah layanan migrasi utama yang direkomendasikan AWS untuk memindahkan aplikasi berbasis server fisik, virtual, atau cloud ke AWS dengan replikasi blok non-disruptif.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0086",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim penyimpanan data perlu memindahkan puluhan terabyte file data dari sistem Network Attached Storage (NAS) lokal ke Amazon S3 dan Amazon EFS secara otomatis dan terjadwal, dengan akselerasi transfer data hingga 10 kali lipat dibanding perkakas open-source. Layanan transfer data online terkelola AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS DataSync"
      },
      {
        "id": "B",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis Data Firehose"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS DataSync adalah layanan transfer data online terkelola yang mengotomatiskan dan mempercepat pemindahan data dalam volume besar antara penyimpanan on-premise dan AWS (S3, EFS, FSx) melalui protokol yang dioptimalkan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0087",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah institusi bisnis memiliki mitra eksternal yang secara rutin mengirimkan laporan transaksi melalui protokol SFTP (Secure File Transfer Protocol). Perusahaan ingin menerima file-file SFTP tersebut secara langsung dan mulus ke dalam bucket Amazon S3 tanpa perlu mengelola server SFTP Linux sendiri. Layanan AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Transfer Family"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "AWS DataSync"
      },
      {
        "id": "D",
        "text": "Amazon S3 Transfer Acceleration"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Transfer Family menyediakan transfer file terkelola penuh secara langsung ke Amazon S3 atau Amazon EFS menggunakan protokol standar industri seperti SFTP, FTPS, dan FTP.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0088",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim peneliti lapangan membutuhkan perangkat komputasi tepi (edge computing) portabel yang sangat ringan (sekitar 2 kg), tangguh, bertenaga baterai, dan tahan benturan untuk mengumpulkan data sensor di hutan belantara dan mengirimkannya kembali ke AWS. Perangkat keluarga AWS Snow Family manakah yang dirancang untuk skenario portabel ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowcone"
      },
      {
        "id": "B",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "C",
        "text": "AWS Snowmobile"
      },
      {
        "id": "D",
        "text": "AWS Outposts Rack"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Snowcone adalah perangkat paling kecil dan portabel dari AWS Snow Family (berbobot hanya 2,1 kg), dirancang untuk edge computing dan transfer data di lingkungan terpencil yang keras dan terbatas ruang.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0089",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang pengguna baru membuka akun AWS dan ingin mengetahui layanan apa saja yang termasuk dalam penawaran AWS Free Tier. Manakah dari pernyataan berikut yang paling tepat menjelaskan tiga kategori penawaran pada AWS Free Tier?",
    "options": [
      {
        "id": "A",
        "text": "Selalu Gratis (Always Free), 12 Bulan Gratis (12 Months Free), dan Uji Coba Jangka Pendek (Short-term Trials)"
      },
      {
        "id": "B",
        "text": "Diskon Korporat, Diskon Akademik, dan Lisensi Terbuka"
      },
      {
        "id": "C",
        "text": "Gratis untuk komputasi, berbayar untuk penyimpanan"
      },
      {
        "id": "D",
        "text": "Gratis pada hari libur dan akhir pekan saja"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Free Tier terbagi menjadi tiga jenis penawaran: Always Free (bebas biaya selamanya dalam kuota tertentu), 12 Months Free (gratis selama 12 bulan pertama pendaftaran), dan Trials (uji coba jangka pendek sejak aktivasi layanan).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0090",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang Cloud Financial Analyst ingin mendeteksi lonjakan pengeluaran biaya yang tidak wajar atau anomali biaya yang terjadi secara tiba-tiba pada akun AWS (misalnya akibat skrip pengembang yang tidak sengaja meluncurkan resource mahal) menggunakan teknologi machine learning. Fitur AWS Cost Management manakah yang menyediakan fungsi ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Anomaly Detection"
      },
      {
        "id": "B",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor Dasar"
      },
      {
        "id": "D",
        "text": "AWS Billing Conductor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Cost Anomaly Detection memanfaatkan machine learning canggih untuk terus memantau pola pengeluaran biaya AWS dan mendeteksi anomali lonjakan biaya tak terduga serta mengidentifikasi akar penyebabnya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0091",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan enterprise membutuhkan laporan rincian data mentah komprehensif mengenai seluruh penggunaan sumber daya AWS mereka hingga ke tingkat detik dan dimensi metadata tag per jam, untuk kemudian dimuat ke dalam data lake analitik internal. Laporan biaya AWS manakah yang menyediakan kumpulan data paling granular ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost and Usage Report (CUR)"
      },
      {
        "id": "B",
        "text": "Ringkasan Tagihan Sederhana di Billing Dashboard"
      },
      {
        "id": "C",
        "text": "Laporan AWS Budgets bulanan"
      },
      {
        "id": "D",
        "text": "Grafik AWS Cost Explorer ringkas"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Cost and Usage Report (CUR) adalah kumpulan data biaya dan penggunaan paling komprehensif di AWS, menyediakan rincian baris data granular per jam/detik untuk analisis mendalam.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0092",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah organisasi ingin membeli lisensi perangkat lunak firewall pihak ketiga (seperti Palo Alto Networks atau Fortinet) yang siap diluncurkan sebagai Amazon Machine Image (AMI) pada Amazon EC2, serta ingin pembayarannya disatukan ke dalam faktur tagihan bulanan AWS resmi perusahaan. Katalog digital AWS manakah yang menyediakan layanan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Marketplace"
      },
      {
        "id": "B",
        "text": "AWS Artifact"
      },
      {
        "id": "C",
        "text": "Amazon AppFlow"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Marketplace adalah katalog digital terkurasi yang memungkinkan pelanggan menemukan, membeli, menyebarkan, dan mengelola perangkat lunak dan layanan pihak ketiga dengan tagihan terintegrasi pada faktur AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0093",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan menengah membutuhkan dukungan teknis responsif 24/7 dengan waktu respons di bawah 30 menit untuk kasus sistem bisnis kritis (business-critical), panduan arsitektur proaktif, dan akses ke tim Technical Account Manager (TAM) bersama, namun dengan biaya yang lebih terjangkau dibandingkan Enterprise Support Plan penuh. Paket dukungan AWS manakah yang dirancang untuk level ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Enterprise On-Ramp Support Plan"
      },
      {
        "id": "B",
        "text": "AWS Business Support Plan"
      },
      {
        "id": "C",
        "text": "AWS Developer Support Plan"
      },
      {
        "id": "D",
        "text": "AWS Basic Support Plan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Enterprise On-Ramp Support Plan berada di antara paket Business dan Enterprise, menawarkan waktu respons 30 menit untuk kasus bisnis kritis dan akses ke tim kumpulan Technical Account Manager (pool of TAMs).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0094",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang pengembang independen sedang membangun aplikasi prototipe di AWS dan membutuhkan paket dukungan berbayar tingkat paling dasar yang memberikan panduan arsitektur umum dan akses email ke Cloud Support Associates selama jam kerja bisnis lokal dengan waktu respons kasus di bawah 24 jam. Paket AWS Support manakah yang sesuai?",
    "options": [
      {
        "id": "A",
        "text": "AWS Developer Support Plan"
      },
      {
        "id": "B",
        "text": "AWS Business Support Plan"
      },
      {
        "id": "C",
        "text": "AWS Basic Support Plan"
      },
      {
        "id": "D",
        "text": "AWS Enterprise Support Plan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Paket AWS Developer Support adalah paket dukungan berbayar paling terjangkau yang dirancang untuk pengembang yang sedang bereksperimen, menyediakan akses email ke teknisi AWS selama jam kerja bisnis.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0095",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Seorang Cloud Engineer ingin membuka seluruh pemeriksaan rekomendasi (full set of checks) pada konsol AWS Trusted Advisor, termasuk pemeriksaan keamanan mendalam, kuota layanan, toleransi kesalahan, dan optimasi biaya penuh (bukan hanya 7 pemeriksaan dasar). Tingkat paket AWS Support terendah manakah yang membuka seluruh pemeriksaan Trusted Advisor ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Business Support Plan"
      },
      {
        "id": "B",
        "text": "AWS Developer Support Plan"
      },
      {
        "id": "C",
        "text": "AWS Basic Support Plan"
      },
      {
        "id": "D",
        "text": "AWS Free Support Plan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Paket AWS Business Support (dan tingkat di atasnya: Enterprise On-Ramp serta Enterprise) menyediakan akses penuh ke seluruh pemeriksaan dan rekomendasi pada AWS Trusted Advisor.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0096",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki lisensi perangkat lunak server Microsoft Windows dan Oracle bawaan (Bring Your Own License / BYOL) yang terikat secara hukum pada nomor soket atau inti fisik server (per-socket / per-core). Opsi tenancy Amazon EC2 manakah yang memberikan server fisik terisolasi dengan visibilitas penuh atas soket dan inti fisik server untuk mematuhi lisensi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2 Dedicated Hosts"
      },
      {
        "id": "B",
        "text": "Amazon EC2 Dedicated Instances"
      },
      {
        "id": "C",
        "text": "Amazon EC2 Shared Default Tenancy"
      },
      {
        "id": "D",
        "text": "Amazon EC2 Spot Instances"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EC2 Dedicated Hosts menyediakan server fisik yang didedikasikan penuh untuk penggunaan Anda, memberi visibilitas dan kendali atas penempatan soket dan inti fisik server untuk memenuhi persyaratan lisensi perangkat lunak per-socket/per-core (BYOL).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0097",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah organisasi ingin berkomitmen menggunakan Amazon EC2 selama 3 tahun untuk mendapatkan diskon biaya yang besar, namun tim arsitek memperkirakan bahwa mereka mungkin perlu mengubah keluarga instance (misalnya dari m5 ke c6g), sistem operasi, atau jenis tenancy di tengah jalan. Tipe Reserved Instance manakah yang memberikan fleksibilitas untuk mengubah atribut-atribut tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Convertible Reserved Instances"
      },
      {
        "id": "B",
        "text": "Standard Reserved Instances"
      },
      {
        "id": "C",
        "text": "Scheduled Reserved Instances"
      },
      {
        "id": "D",
        "text": "On-Demand Instances"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Convertible Reserved Instances menawarkan diskon signifikan (hingga 54%) dengan fleksibilitas unik untuk mengubah keluarga instance EC2, sistem operasi, ukuran, dan tenancy selama masa komitmen.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0098",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah grup korporasi mengaktifkan Consolidated Billing di AWS Organizations. Salah satu akun anggota membeli Savings Plans atau Reserved Instances (RI), namun kapasitas komputasinya tidak habis terpakai oleh akun tersebut pada jam tertentu. Apa yang terjadi pada kelebihan kapasitas diskon Savings Plans/RI tersebut di dalam organisasi?",
    "options": [
      {
        "id": "A",
        "text": "Diskon Savings Plans/RI dapat otomatis dibagikan dan diterapkan ke penggunaan akun anggota lain di dalam keluarga Consolidated Billing yang memenuhi syarat"
      },
      {
        "id": "B",
        "text": "Diskon hangus dan tidak dapat dimanfaatkan akun lain sama sekali"
      },
      {
        "id": "C",
        "text": "Akun anggota tersebut otomatis dikenakan denda penalti biaya"
      },
      {
        "id": "D",
        "text": "AWS secara otomatis membatalkan komitmen kontrak"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Di bawah Consolidated Billing pada AWS Organizations, manfaat harga diskon dari Reserved Instances dan Savings Plans secara otomatis dapat dibagikan di antara seluruh akun anggota di dalam organisasi untuk memaksimalkan penghematan biaya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0099",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Saat meninjau tagihan biaya di AWS Cost Explorer, seorang administrator melihat adanya tag dengan awalan 'aws:' (seperti 'aws:createdBy'). Manakah pernyataan yang paling tepat membedakan antara AWS-Generated Tags dan User-Defined Cost Allocation Tags?",
    "options": [
      {
        "id": "A",
        "text": "AWS-Generated Tags diawali dengan awalan 'aws:' dan dibuat otomatis oleh AWS untuk melacak identitas pembuat resource, sedangkan User-Defined Tags dibuat secara manual oleh pengguna dengan awalan 'user:'"
      },
      {
        "id": "B",
        "text": "AWS-Generated Tags berbayar, sedangkan User-Defined Tags gratis"
      },
      {
        "id": "C",
        "text": "User-Defined Tags tidak dapat diaktifkan di Billing Console"
      },
      {
        "id": "D",
        "text": "AWS-Generated Tags hanya dapat digunakan pada database Amazon RDS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS-Generated Tags (seperti 'aws:createdBy') didefinisikan dan diterapkan otomatis oleh AWS serta diawali dengan awalan 'aws:', sedangkan User-Defined Tags dibuat secara kustom oleh pengguna dan diawali dengan awalan 'user:' saat diaktifkan untuk alokasi biaya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_scenario_0100",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Sebuah korporasi besar berlangganan paket AWS Enterprise Support. Mereka memiliki pertanyaan mendalam mengenai struktur faktur pembayaran bulanan, rincian biaya lintas anak perusahaan, dan alokasi kredit tagihan. Tim ahli non-teknis AWS manakah yang didedikasikan untuk menangani pertanyaan penagihan dan administrasi akun tingkat enterprise ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Support Concierge Team"
      },
      {
        "id": "B",
        "text": "AWS Abuse Team"
      },
      {
        "id": "C",
        "text": "AWS Solutions Architects Associate"
      },
      {
        "id": "D",
        "text": "Technical Account Manager (TAM) Spesialis Jaringan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Support Concierge adalah tim spesialis operasional dan penagihan senior yang didedikasikan secara eksklusif untuk pelanggan Enterprise Support guna menjawab pertanyaan seputar tagihan, faktur, alokasi biaya, dan manajemen akun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0091",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Virtual firewall stateless di level subnet pada arsitektur Amazon VPC disebut?",
    "options": [
      {
        "id": "A",
        "text": "Security Group"
      },
      {
        "id": "B",
        "text": "Network ACL (NACL)"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "Route Table"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network ACL (NACL) adalah virtual firewall stateless di tingkat subnet yang memeriksa traffic masuk (inbound) dan keluar (outbound).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0092",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan ingin menerapkan standarisasi pelabelan resource (tagging) untuk alokasi biaya departemen, identifikasi kepemilikan lingkungan (Environment), dan otomatisasi skrip operasional. Berapakah batas maksimal tag yang ditentukan pengguna (user-defined tags) yang dapat dilampirkan pada satu resource AWS?",
    "options": [
      {
        "id": "A",
        "text": "10 tags"
      },
      {
        "id": "B",
        "text": "25 tags"
      },
      {
        "id": "C",
        "text": "50 tags"
      },
      {
        "id": "D",
        "text": "100 tags"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS menetapkan batas maksimal 50 user-defined tags (tag yang dibuat pengguna) per resource AWS untuk membantu pelacakan biaya, kontrol akses, dan otomatisasi tata kelola.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0093",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah sistem operasi Linux pada Amazon EC2 membutuhkan penyimpanan tingkat blok (block storage) yang persisten untuk partisi sistem operasi (root volume) dan instalasi dependensi perangkat lunak. Layanan penyimpanan AWS manakah yang digunakan sebagai volume virtual disk tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "C",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon EBS adalah volume penyimpanan tingkat blok berkinerja tinggi yang dirancang untuk digunakan bersama instance Amazon EC2 sebagai root volume dan volume data tambahan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0094",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi ingin memberlakukan aturan tata kelola di mana pembuatan instance Amazon EC2 baru akan ditolak secara otomatis jika pengguna tidak menyertakan tag wajib 'CostCenter' dan 'Owner'. Fitur AWS Organizations manakah yang dapat digabungkan untuk memaksakan kebijakan kepatuhan tag ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Budgets"
      },
      {
        "id": "B",
        "text": "Tag Policies dan Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch Logs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tag Policies di AWS Organizations membantu menstandarisasi tag, dan ketika digabungkan dengan Service Control Policies (SCPs) dengan kondisi 'aws:RequestTag', dapat secara tegas menolak permintaan pembuatan resource yang tidak menyertakan tag wajib.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0095",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah platform pemesanan tiket ingin memisahkan modul penerima pesanan dari modul pemroses pembayaran agar kedua komponen dapat diskalakan secara independen dan pesanan tetap aman di dalam antrean saat terjadi lonjakan traffic. Layanan antrean pesan terdistribusi AWS manakah yang harus diintegrasikan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis Data Streams"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SQS menyediakan antrean pesan (message queue) terdistribusi yang sangat andal untuk memisahkan (decouple) komponen microservices secara asinkron.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0096",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim keamanan cloud ingin mendeteksi aktivitas mencurigakan pada akun AWS mereka, seperti panggilan API yang tidak biasa atau adanya instance EC2 yang disusupi malware penambang kripto. Layanan deteksi ancaman cerdas AWS manakah yang menganalisis CloudTrail, VPC Flow Logs, dan DNS Logs menggunakan machine learning?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang menganalisis sumber data dasar (CloudTrail, VPC Flow Logs, DNS logs) menggunakan machine learning untuk mendeteksi ancaman keamanan pada akun AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0097",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi web berbasis Linux memerlukan direktori penyimpanan file bersama yang dapat di-mount secara simultan oleh puluhan instance Amazon EC2 di lintas Availability Zone menggunakan protokol Network File System (NFS). Layanan penyimpanan terkelola AWS manakah yang dirancang untuk skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "D",
        "text": "Amazon FSx for Windows"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon EFS menyediakan sistem file bersama berbasis NFSv4 yang elastis dan dapat di-mount secara simultan oleh ratusan instance Linux di berbagai Availability Zone.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0098",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim keuangan perusahaan telah membuat custom tag seperti 'CostCenter' dan 'Project' pada berbagai resource AWS. Namun, saat membuka AWS Cost Explorer, tag tersebut belum muncul sebagai opsi filter laporan biaya. Tindakan konfigurasi apakah yang wajib dilakukan pada AWS Billing Console agar tag tersebut dapat digunakan dalam laporan biaya?",
    "options": [
      {
        "id": "A",
        "text": "Membuat IAM Role baru untuk tim keuangan"
      },
      {
        "id": "B",
        "text": "Mengaktifkan tag tersebut pada menu Cost Allocation Tags di Billing Console"
      },
      {
        "id": "C",
        "text": "Melakukan reboot pada seluruh instance EC2 yang memiliki tag"
      },
      {
        "id": "D",
        "text": "Membuka tiket permohonan ke AWS Support"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Agar user-defined tags dapat digunakan sebagai filter atau kategori pemecahan biaya di AWS Cost Explorer dan laporan tagihan, tag tersebut wajib diaktifkan terlebih dahulu di menu 'Cost Allocation Tags' pada AWS Billing Console.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0099",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi keuangan menyimpan jutaan dokumen pelanggan di Amazon S3. Untuk mematuhi peraturan privasi data (seperti GDPR), tim kepatuhan perlu mendeteksi secara otomatis apakah ada file yang mengandung data sensitif seperti informasi identitas pribadi (PII) atau nomor kartu kredit yang tidak terproteksi. Layanan keamanan AWS manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Macie"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Macie adalah layanan keamanan data terkelola yang memanfaatkan machine learning untuk menemukan, mengklasifikasikan, dan melindungi data sensitif (PII) yang tersimpan di Amazon S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0100",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah grup korporasi memiliki 20 akun AWS anggota di bawah satu organisasi terpadu. Mereka ingin menggabungkan seluruh tagihan bulanan akun-akun tersebut ke dalam satu faktur pembayaran tunggal agar penggunaan kumulatif Amazon S3 dan Amazon EC2 mendapatkan tier diskon volume. Fitur AWS Organizations manakah yang menyediakan fungsi ini?",
    "options": [
      {
        "id": "A",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "B",
        "text": "Consolidated Billing"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer Shared"
      },
      {
        "id": "D",
        "text": "AWS Resource Access Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Fitur Consolidated Billing di AWS Organizations menyatukan tagihan pembayaran dari semua akun anggota ke akun utama (Management Account) dan menggabungkan volume penggunaan untuk mendapatkan diskon harga bertingkat (volume tiered discounts).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0101",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi menerapkan kebijakan tata kelola ketat bernama 'Tag-or-Terminate' menggunakan fungsi otomatisasi AWS Lambda. Kebijakan ini mendeteksi resource komputasi yang tidak mematuhi standar penandaan tag wajib dalam waktu 24 jam setelah dibuat. Tindakan apakah yang secara otomatis dieksekusi terhadap resource yang tidak patuh (non-compliant) tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Resource dipindahkan secara otomatis ke Region yang berbeda"
      },
      {
        "id": "B",
        "text": "Resource diberikan alamat IP publik baru secara acak"
      },
      {
        "id": "C",
        "text": "Resource langsung dihentikan dan dihapus permanen (terminated / dimusnahkan)"
      },
      {
        "id": "D",
        "text": "Resource secara otomatis di-upgrade ke tipe instance yang lebih besar"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pada arsitektur tata kelola 'Tag-or-Terminate', resource yang tidak menyertakan tag wajib (seperti Environment atau Owner) akan otomatis di-terminate (dimusnahkan) oleh skrip otomatisasi guna mencegah resource liar dan pemborosan biaya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0102",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah institusi perbankan sedang diaudit oleh regulator industri keuangan dan diwajibkan untuk menyerahkan dokumen sertifikasi kepatuhan ISO 27001 dan laporan SOC 2 Type II dari infrastruktur cloud AWS. Portal swalayan resmi AWS manakah yang menyediakan akses gratis untuk mengunduh laporan audit kepatuhan pihak ketiga tersebut?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "AWS Audit Manager"
      },
      {
        "id": "C",
        "text": "AWS Artifact"
      },
      {
        "id": "D",
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Artifact adalah portal kepatuhan sentral resmi AWS yang menyediakan akses gratis on-demand untuk mengunduh laporan audit keamanan dan sertifikasi kepatuhan pihak ketiga (SOC, PCI, ISO) serta menyetujui perjanjian kepatuhan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0103",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebelum mengajukan permohonan investasi cloud ke jajaran pimpinan perusahaan, seorang Solutions Architect perlu menghitung estimasi pengeluaran biaya bulanan untuk rancangan arsitektur AWS baru (terdiri dari 10 instance EC2, 2 database RDS, dan 5 TB penyimpanan S3) SEBELUM sistem dibangun. Alat AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "AWS Cost and Usage Report"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Pricing Calculator adalah alat web resmi bebas biaya dari AWS yang memungkinkan pengguna memodelkan arsitektur solusi dan memproyeksikan estimasi biaya bulanan sebelum resource diluncurkan ke cloud.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0104",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah platform e-commerce enterprise membutuhkan basis data relasional terkelola penuh yang sepenuhnya kompatibel dengan MySQL dan PostgreSQL, menawarkan throughput performa hingga 5 kali lipat dibanding MySQL standar, serta secara otomatis mereplikasi data ke 6 salinan di 3 Availability Zone. Layanan basis data AWS manakah yang dirancang khusus untuk skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for MariaDB"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Aurora"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Aurora adalah mesin basis data relasional enterprise terkelola penuh milik AWS yang kompatibel dengan MySQL dan PostgreSQL, dengan performa hingga 5x MySQL serta penyimpanan terdistribusi berdaya tahan tinggi (6 salinan di 3 AZ).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0105",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah universitas menjalankan simulasi pemodelan iklim berskala besar yang membutuhkan ribuan inti CPU (vCPU). Beban kerja ini bersifat batch, dapat dijeda dan dilanjutkan kapan saja tanpa merusak data jika kapasitas komputasi ditarik kembali oleh AWS. Model pembelian Amazon EC2 manakah yang menawarkan diskon tertinggi (hingga 90%)?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Dedicated Hosts"
      },
      {
        "id": "C",
        "text": "Spot Instances"
      },
      {
        "id": "D",
        "text": "Reserved Instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EC2 Spot Instances menawarkan diskon hingga 90% dibandingkan tarif On-Demand dengan memanfaatkan sisa kapasitas komputasi AWS yang menganggur, sangat ideal untuk beban kerja yang tahan interupsi (fault-tolerant/batch).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0106",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Berdasarkan AWS Shared Responsibility Model (Model Tanggung Jawab Bersama), manakah dari tugas operasional berikut yang sepenuhnya menjadi tanggung jawab pelanggan saat mengoperasikan beban kerja aplikasi pada instance Amazon EC2?",
    "options": [
      {
        "id": "A",
        "text": "Melakukan instalasi pembaruan keamanan (patching) pada sistem operasi tamu (guest OS) instance EC2"
      },
      {
        "id": "B",
        "text": "Melakukan pembaruan firmware pada server perangkat keras fisik di data center AWS"
      },
      {
        "id": "C",
        "text": "Mengelola pendingin dan pasokan listrik pada fasilitas data center"
      },
      {
        "id": "D",
        "text": "Memusnahkan disk fisik yang rusak di lingkungan infrastruktur global AWS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pada model infrastruktur IaaS seperti Amazon EC2, pelanggan bertanggung jawab penuh atas 'keamanan di dalam cloud', yang mencakup pengelolaan patch keamanan sistem operasi tamu (guest OS), aplikasi, firewall Security Group, dan data.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0107",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi sistem peringatan dini gempa bumi perlu menyiarkan pesan peringatan darurat secara instan kepada ribuan penerima sekaligus, termasuk notifikasi push email, SMS, dan panggilan ke webhook pemrosesan otomatis (arsitektur fan-out). Layanan messaging AWS manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "D",
        "text": "Amazon MQ"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SNS adalah layanan pesan pub/sub yang dirancang untuk pengiriman pesan satu-ke-banyak (fan-out) bervolume tinggi ke berbagai endpoint pelanggan seperti email, SMS, mobile push, dan HTTP/S endpoints.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0108",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Direktur Keuangan sedang meninjau manfaat transisi dari data center on-premise ke AWS Cloud. Manakah pernyataan berikut yang paling tepat menjelaskan keuntungan finansial utama dari komputasi cloud dibandingkan model infrastruktur tradisional?",
    "options": [
      {
        "id": "A",
        "text": "Mengharuskan perusahaan membeli perangkat server di muka untuk mendapatkan diskon"
      },
      {
        "id": "B",
        "text": "Mengubah belanja modal besar di awal (Capital Expenditures / CapEx) menjadi biaya variabel operasional yang fleksibel (Operating Expenses / OpEx)"
      },
      {
        "id": "C",
        "text": "Menghilangkan seluruh kebutuhan personil tim teknologi informasi di perusahaan"
      },
      {
        "id": "D",
        "text": "Menjamin biaya tagihan bulanan selalu bernilai tetap tanpa mempedulikan penggunaan"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Keuntungan finansial utama komputasi cloud adalah menukar investasi modal besar di awal untuk perangkat keras (CapEx) menjadi biaya variabel operasional yang dibayar sesuai pemakaian nyata (OpEx / Pay-as-you-go).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0109",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan membutuhkan layanan Domain Name System (DNS) terkelola yang memiliki tingkat ketersediaan 100% SLA, hemat biaya, dan mampu merutekan pengguna internet global ke aplikasi mereka pada port standar 53 dengan berbagai kebijakan perutean cerdas. Layanan jaringan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "Amazon Route 53"
      },
      {
        "id": "C",
        "text": "Amazon Virtual Private Cloud (Amazon VPC)"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Route 53 adalah layanan web Domain Name System (DNS) cloud yang sangat andal dan dapat diskalakan yang dirancang untuk menerjemahkan nama domain dan merutekan lalu lintas pengguna pada port 53.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0110",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi sedang melakukan audit arsitektur cloud mereka dan ingin memastikan bahwa mereka tidak mengalokasikan kapasitas instance secara berlebihan, selalu menghapus volume penyimpanan yang tidak terpakai, dan memilih model penetapan harga yang paling efisien. Pilar AWS Well-Architected Framework manakah yang berfokus pada efisiensi dana ini?",
    "options": [
      {
        "id": "A",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "B",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      },
      {
        "id": "C",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "D",
        "text": "Keamanan (Security)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pilar Cost Optimization (Optimalisasi Biaya) pada AWS Well-Architected Framework mencakup kemampuan untuk menjalankan sistem guna memberikan nilai bisnis pada titik harga serendah mungkin.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0111",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi leaderboard game multipemain online membutuhkan penyimpanan basis data NoSQL model key-value yang terkelola penuh, serverless, dan mampu memberikan latensi respons baca dan tulis di bawah 10 milidetik (single-digit millisecond latency) secara konsisten pada skala beban jutaan pemain. Layanan AWS manakah yang harus dipilih?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for MySQL"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon Aurora Serverless"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB adalah basis data NoSQL terkelola penuh yang menyediakan performa konsisten satu digit milidetik pada skala apa pun tanpa memerlukan manajemen server (serverless).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0112",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang ingin membuat fungsi otomatisasi yang memproses data sensor IoT setiap kali ada data baru terkirim, tanpa perlu memprovisikan server, mengonfigurasi klaster, atau membayar saat tidak ada data yang masuk (hanya membayar durasi eksekusi kode dalam milidetik). Layanan komputasi serverless AWS manakah yang dimaksud?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Container Service (Amazon ECS)"
      },
      {
        "id": "B",
        "text": "AWS Lambda"
      },
      {
        "id": "C",
        "text": "Amazon EC2"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Lambda memungkinkan eksekusi kode tanpa perlu memprovisikan atau mengelola server (serverless). Pengguna hanya membayar untuk waktu komputasi yang digunakan dalam pecahan milidetik saat fungsi dipicu.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0113",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan baru saja mendaftarkan akun AWS organisasi mereka. Menurut rekomendasi keamanan terbaik AWS (AWS Security Best Practices), tindakan perlindungan identitas PALING krusial apakah yang harus segera diaktifkan pada akun AWS Root User?",
    "options": [
      {
        "id": "A",
        "text": "Mengaktifkan Multi-Factor Authentication (MFA)"
      },
      {
        "id": "B",
        "text": "Membuat Access Key ID permanen untuk mempermudah akses terminal"
      },
      {
        "id": "C",
        "text": "Membagikan kata sandi root ke seluruh administrator sistem"
      },
      {
        "id": "D",
        "text": "Menonaktifkan logging CloudTrail pada akun root"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mengaktifkan Multi-Factor Authentication (MFA) pada akun AWS Root User adalah tindakan keamanan paling mendasar dan krusial untuk mencegah pengambilalihan akun yang memiliki hak akses tertinggi tanpa batas.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0114",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tim kepatuhan keamanan membutuhkan layanan otomatis yang terus-menerus mengevaluasi konfigurasi seluruh resource AWS, mencatat perubahan konfigurasi dari waktu ke waktu, dan secara otomatis mendeteksi jika ada volume Amazon EBS yang berstatus tidak terpasang (unattached). Layanan kepatuhan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Config mencatat, mengaudit, dan mengevaluasi konfigurasi sumber daya AWS terhadap aturan kepatuhan yang telah ditentukan (seperti mendeteksi volume EBS unattached).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0115",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi multinasional menggunakan AWS Organizations untuk mengelola puluhan akun AWS divisi. Tim keamanan ingin menetapkan batas izin maksimum terpusat (guardrails) yang secara mutlak melarang seluruh akun anggota meluncurkan instance di luar Region tertentu, bahkan jika admin akun anggota memiliki hak administrator penuh. Fitur AWS Organizations manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "IAM Managed Policies"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "AWS Directory Service"
      },
      {
        "id": "D",
        "text": "Network Access Control Lists"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Service Control Policies (SCPs) di AWS Organizations menetapkan batas izin maksimum (guardrails) bagi seluruh entitas IAM di dalam akun anggota, dan tidak dapat dilewati bahkan oleh akun administrator lokal di akun anggota.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0116",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang arsitek solusi merancang sistem aplikasi di mana modul penerimaan pesanan dan modul pemrosesan faktur dihubungkan secara asinkron melalui antrean Amazon SQS, sehingga kegagalan sementara pada modul faktur tidak menghentikan operasional modul pesanan. Prinsip arsitektur cloud manakah yang diterapkan?",
    "options": [
      {
        "id": "A",
        "text": "Monolithic Design"
      },
      {
        "id": "B",
        "text": "Decoupling (Loose Coupling / Pemisahan Komponen)"
      },
      {
        "id": "C",
        "text": "Single Point of Failure"
      },
      {
        "id": "D",
        "text": "Hard Dependency"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Prinsip Decoupling (Loose Coupling) menganjurkan pemisahan komponen sistem agar kegagalan atau beban tinggi pada satu modul tidak berdampak buruk atau melumpuhkan modul lainnya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0117",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs e-commerce secara otomatis menambah 10 instance Amazon EC2 saat lonjakan diskon tengah malam terjadi, dan kemudian secara otomatis mengurangi 10 instance tersebut setelah pengunjung kembali normal sehingga perusahaan tidak membayar server yang menganggur. Karakteristik komputasi cloud manakah yang paling tepat menggambarkan hal ini?",
    "options": [
      {
        "id": "A",
        "text": "Ketersediaan Tinggi (High Availability)"
      },
      {
        "id": "B",
        "text": "Elastisitas (Elasticity)"
      },
      {
        "id": "C",
        "text": "Agilitas (Agility)"
      },
      {
        "id": "D",
        "text": "Toleransi Kesalahan (Fault Tolerance)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Elastisitas (Elasticity) adalah kemampuan sistem cloud untuk secara dinamis mengalokasikan dan melepaskan kapasitas sumber daya komputasi secara otomatis mengikuti fluktuasi permintaan nyata.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0118",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Cloud Engineer sedang menjelaskan konsep ketahanan fisik cloud kepada tim operasional. Manakah dari pernyataan berikut yang paling tepat mendefinisikan sebuah AWS Availability Zone (AZ)?",
    "options": [
      {
        "id": "A",
        "text": "Sebuah server rak tunggal di pusat data lokal"
      },
      {
        "id": "B",
        "text": "Satu atau lebih pusat data fisik terpisah dengan sumber daya listrik, pendingin, dan jaringan terisolasi di dalam satu Region"
      },
      {
        "id": "C",
        "text": "Sebuah zona benua yang mencakup seluruh negara di belahan bumi tertentu"
      },
      {
        "id": "D",
        "text": "Titik kehadiran edge (Edge Location) untuk caching konten CloudFront"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Sebuah AWS Availability Zone (AZ) terdiri dari satu atau lebih pusat data fisik terpisah yang memiliki daya, pendinginan, dan jaringan redundan di dalam satu AWS Region.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0119",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service automatically provisions & manages infrastructure based on a YAML/JSON template?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS OpsWorks"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CloudFormation is Infrastructure as Code (IaC) — it provisions and manages AWS resources from a declarative template.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0120",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service automatically distributes incoming traffic across multiple EC2 instances?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "AWS Auto Scaling"
      },
      {
        "id": "C",
        "text": "Elastic Load Balancing (ELB)"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Elastic Load Balancing automatically distributes incoming traffic across multiple targets (EC2, containers, IPs) in one or more AZs.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0121",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which ELB type operates at Layer 7 (HTTP/HTTPS) and supports host/path-based routing rules?",
    "options": [
      {
        "id": "A",
        "text": "Classic Load Balancer"
      },
      {
        "id": "B",
        "text": "Network Load Balancer"
      },
      {
        "id": "C",
        "text": "Gateway Load Balancer"
      },
      {
        "id": "D",
        "text": "Application Load Balancer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Application Load Balancer (ALB) works at OSI Layer 7 and supports advanced routing based on HTTP headers, host names, and URL paths.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0122",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS feature automatically adjusts the number of EC2 instances based on defined demand metrics?",
    "options": [
      {
        "id": "A",
        "text": "Elastic Load Balancing"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Auto Scaling"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Auto Scaling automatically adds or removes EC2 instances based on CloudWatch metrics (e.g. CPU > 70%) to match demand.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0123",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon RDS feature automatically creates a standby replica in a different AZ for high availability?",
    "options": [
      {
        "id": "A",
        "text": "RDS Read Replica"
      },
      {
        "id": "B",
        "text": "RDS Multi-AZ Deployment"
      },
      {
        "id": "C",
        "text": "RDS Automated Backup"
      },
      {
        "id": "D",
        "text": "RDS Performance Insights"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "RDS Multi-AZ creates a synchronous standby replica in a separate AZ. If the primary fails, AWS automatically fails over — no data loss.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0124",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the key difference between an RDS Read Replica and a Multi-AZ standby instance?",
    "options": [
      {
        "id": "A",
        "text": "Read Replica is synchronous; Multi-AZ is asynchronous"
      },
      {
        "id": "B",
        "text": "Read Replica serves read traffic; Multi-AZ standby is only for failover"
      },
      {
        "id": "C",
        "text": "Read Replica is in the same AZ; Multi-AZ spans multiple regions"
      },
      {
        "id": "D",
        "text": "Multi-AZ supports MySQL only; Read Replica supports all engines"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Read Replicas serve read-only queries (scalability). Multi-AZ standby is passive — only activated during a primary failure (high availability).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0125",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service lets developers deploy web apps without managing the underlying EC2 infrastructure?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Fargate"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "Amazon Lightsail"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Elastic Beanstalk is a PaaS that automatically handles deployment, capacity provisioning, load balancing, and monitoring.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0126",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon CloudWatch feature sends alerts when a metric exceeds a defined threshold?",
    "options": [
      {
        "id": "A",
        "text": "CloudWatch Logs Insights"
      },
      {
        "id": "B",
        "text": "CloudWatch Alarms"
      },
      {
        "id": "C",
        "text": "CloudWatch Dashboards"
      },
      {
        "id": "D",
        "text": "CloudWatch Events"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CloudWatch Alarms monitor a single metric and trigger actions (SNS notification, Auto Scaling) when the metric breaches a threshold.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0127",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides centralized managed backup across AWS services like RDS, EBS, DynamoDB, and EFS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Lifecycle Policy"
      },
      {
        "id": "B",
        "text": "AWS Backup"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Data Lifecycle Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Backup is a fully managed centralized backup service that automates backup scheduling, retention, and monitoring across AWS services.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0128",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service allows patching, running commands, and managing EC2 fleets without SSH access?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Systems Manager provides operational management of EC2 fleets — patch management, run command, and Session Manager (no SSH needed).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0129",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service automates software release pipelines including build, test, and deploy stages?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeCommit"
      },
      {
        "id": "B",
        "text": "AWS CodePipeline"
      },
      {
        "id": "C",
        "text": "AWS CodeBuild"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CodePipeline is a fully managed CI/CD service that automates build, test, and deploy phases into a release pipeline.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0130",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service compiles source code, runs tests, and produces deployment-ready software artifacts?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodePipeline"
      },
      {
        "id": "B",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "C",
        "text": "AWS CodeBuild"
      },
      {
        "id": "D",
        "text": "AWS CodeCommit"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS CodeBuild is a fully managed build service that compiles source code, runs unit tests, and produces deployable artifacts.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0131",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service routes users to the nearest AWS Region using the AWS global network for low latency?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "Amazon Route 53 Latency Routing"
      },
      {
        "id": "C",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Global Accelerator routes traffic through the AWS backbone network to the optimal endpoint, reducing latency and improving availability.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0132",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS security service protects web applications against SQL injection and cross-site scripting (XSS)?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS Firewall Manager"
      },
      {
        "id": "D",
        "text": "AWS WAF"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS WAF (Web Application Firewall) filters HTTP/HTTPS requests and blocks common web exploits like SQLi, XSS using managed or custom rules.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0133",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides managed DDoS protection automatically for all AWS customers at no extra cost?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF"
      },
      {
        "id": "B",
        "text": "AWS Shield Standard"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "AWS Firewall Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Shield Standard is automatically applied at no charge to all AWS customers, protecting against common Layer 3/4 DDoS attacks.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0134",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS AI service can analyze images and videos to detect objects, faces, and inappropriate content?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Comprehend"
      },
      {
        "id": "B",
        "text": "Amazon Transcribe"
      },
      {
        "id": "C",
        "text": "Amazon Rekognition"
      },
      {
        "id": "D",
        "text": "Amazon Textract"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Rekognition is AWS's computer vision service for image and video analysis — detecting objects, faces, celebrities, and unsafe content.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0135",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS AI service performs Natural Language Processing (NLP) to detect sentiment and key phrases in text?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Translate"
      },
      {
        "id": "B",
        "text": "Amazon Lex"
      },
      {
        "id": "C",
        "text": "Amazon Polly"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Comprehend is a NLP service that detects sentiment, entities, key phrases, and language in unstructured text.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0136",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service automatically translates text between languages using deep learning?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Transcribe"
      },
      {
        "id": "B",
        "text": "Amazon Polly"
      },
      {
        "id": "C",
        "text": "Amazon Translate"
      },
      {
        "id": "D",
        "text": "Amazon Lex"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Translate is a neural machine translation service that delivers fast, high-quality language translation between supported languages.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0137",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service converts text into lifelike speech using deep learning (text-to-speech)?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Transcribe"
      },
      {
        "id": "B",
        "text": "Amazon Polly"
      },
      {
        "id": "C",
        "text": "Amazon Lex"
      },
      {
        "id": "D",
        "text": "Amazon Comprehend"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Polly uses deep learning to synthesize natural-sounding speech from text in multiple languages and voices.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0138",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS Snow Family device is best for petabyte-scale offline data migration with built-in compute?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowcone"
      },
      {
        "id": "B",
        "text": "AWS Snowball Edge Storage Optimized"
      },
      {
        "id": "C",
        "text": "AWS Snowmobile"
      },
      {
        "id": "D",
        "text": "AWS DataSync"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Snowmobile is a 100 PB exabyte-scale data transfer service using a physical secure shipping container pulled by a truck.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0139",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service is the smallest Snow Family device, rugged and portable, for edge computing and small migrations?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "B",
        "text": "AWS Snowmobile"
      },
      {
        "id": "C",
        "text": "AWS Snowcone"
      },
      {
        "id": "D",
        "text": "AWS DataSync"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Snowcone is the smallest (4.5 lbs) Snow Family device with 8TB storage, designed for edge computing and small data transfers.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0140",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS tool estimates the Total Cost of Ownership (TCO) when migrating from on-premises to AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Migration Evaluator"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Migration Evaluator (formerly TSO Logic) provides a TCO analysis and business case for migrating on-premises workloads to AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0141",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides a personalized view of AWS service health events affecting your account?",
    "options": [
      {
        "id": "A",
        "text": "AWS Service Health Dashboard"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Personal Health Dashboard"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Personal Health Dashboard provides alerts and remediation guidance for AWS events that may specifically impact your resources.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0142",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS database service is purpose-built for storing and querying highly connected graph data?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "C",
        "text": "Amazon Neptune"
      },
      {
        "id": "D",
        "text": "Amazon Keyspaces"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Neptune is a fully managed graph database service supporting Property Graph (Gremlin) and RDF (SPARQL) for connected datasets.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0143",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides managed Apache Cassandra-compatible NoSQL database at scale?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Neptune"
      },
      {
        "id": "C",
        "text": "Amazon Keyspaces (for Apache Cassandra)"
      },
      {
        "id": "D",
        "text": "Amazon DocumentDB"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Keyspaces is a scalable, highly available managed Apache Cassandra-compatible database service, serverless and fully managed.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0144",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Under the AWS Shared Responsibility Model, which of the following is AWS's responsibility?",
    "options": [
      {
        "id": "A",
        "text": "Encrypting data stored in Amazon S3 buckets"
      },
      {
        "id": "B",
        "text": "Configuring Security Groups on EC2 instances"
      },
      {
        "id": "C",
        "text": "Physical security of data center facilities"
      },
      {
        "id": "D",
        "text": "Managing IAM user permissions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Physical security of AWS data centers (facilities, power, hardware) is Security OF the Cloud — entirely AWS's responsibility.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0145",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS CloudFormation concept allows reuse of resource definitions across multiple stacks?",
    "options": [
      {
        "id": "A",
        "text": "CloudFormation Drift Detection"
      },
      {
        "id": "B",
        "text": "CloudFormation StackSets"
      },
      {
        "id": "C",
        "text": "CloudFormation Nested Stacks"
      },
      {
        "id": "D",
        "text": "CloudFormation Change Sets"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nested Stacks allow referencing other CloudFormation stacks as resources, enabling modular and reusable infrastructure templates.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0146",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service enables running one CloudFormation stack across multiple accounts and regions?",
    "options": [
      {
        "id": "A",
        "text": "CloudFormation Nested Stacks"
      },
      {
        "id": "B",
        "text": "AWS Control Tower"
      },
      {
        "id": "C",
        "text": "CloudFormation StackSets"
      },
      {
        "id": "D",
        "text": "AWS Service Catalog"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "CloudFormation StackSets extends stacks to deploy across multiple AWS accounts and regions with a single CloudFormation operation.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0147",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A startup wants the lowest upfront cost with maximum flexibility, no long-term commitment for EC2. Which model?",
    "options": [
      {
        "id": "A",
        "text": "Reserved Instances (1-year, All Upfront)"
      },
      {
        "id": "B",
        "text": "Spot Instances"
      },
      {
        "id": "C",
        "text": "On-Demand Instances"
      },
      {
        "id": "D",
        "text": "Savings Plans (Compute)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "On-Demand Instances have zero upfront cost and no commitment — pay by the second/hour. Best for unpredictable or short-term workloads.",
    "difficulty": "Sulit",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0148",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS pricing model gives up to 66% discount by committing to consistent compute usage for 1 or 3 years?",
    "options": [
      {
        "id": "A",
        "text": "Reserved Instances"
      },
      {
        "id": "B",
        "text": "Dedicated Hosts"
      },
      {
        "id": "C",
        "text": "Spot Instances"
      },
      {
        "id": "D",
        "text": "Compute Savings Plans"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Compute Savings Plans offer up to 66% discount vs On-Demand by committing to a consistent hourly spend, applying across EC2, Lambda, and Fargate.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0149",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provisions & manages infrastructure based on a YAML/JSON template?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "AWS OpsWorks"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudFormation dipilih karena ia adalah layanan Infrastructure as Code (IaC) yang memungkinkan kita mendefinisikan seluruh infrastruktur AWS secara deklaratif dalam file YAML atau JSON, lalu AWS yang menentukan urutan pembuatannya secara otomatis.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0150",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which ELB type operates at Layer 7 (HTTP/HTTPS) and supports host/path-based routing?",
    "options": [
      {
        "id": "A",
        "text": "Classic Load Balancer"
      },
      {
        "id": "B",
        "text": "Network Load Balancer"
      },
      {
        "id": "C",
        "text": "Gateway Load Balancer"
      },
      {
        "id": "D",
        "text": "Application Load Balancer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Application Load Balancer (ALB) dipilih karena ia beroperasi di Layer 7 (application layer) dan mendukung routing berdasarkan host name atau URL path. Network Load Balancer bekerja di Layer 4 (transport layer) untuk traffic TCP/UDP berkecepatan tinggi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0151",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS feature automatically adjusts EC2 instance count based on demand metrics?",
    "options": [
      {
        "id": "A",
        "text": "Elastic Load Balancing"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Auto Scaling"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Auto Scaling dipilih karena tugasnya memang secara otomatis menambah atau mengurangi jumlah EC2 instance berdasarkan metrik seperti CPU utilization. CloudWatch hanya memonitor dan memberikan alarm, bukan yang mengeksekusi penambahan instance.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0152",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon RDS feature creates a standby replica in a different AZ for high availability?",
    "options": [
      {
        "id": "A",
        "text": "RDS Multi-AZ Deployment"
      },
      {
        "id": "B",
        "text": "RDS Read Replica"
      },
      {
        "id": "C",
        "text": "RDS Automated Backup"
      },
      {
        "id": "D",
        "text": "RDS Performance Insights"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "RDS Multi-AZ Deployment dipilih karena ia secara otomatis membuat replica standby sinkron di AZ berbeda. Jika primary gagal, AWS otomatis failover ke standby tanpa kehilangan data. Read Replica berbeda karena dipakai untuk membagi beban baca (read scaling), bukan failover.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0153",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the key difference between RDS Read Replica and Multi-AZ standby?",
    "options": [
      {
        "id": "A",
        "text": "Read Replica is synchronous; Multi-AZ is asynchronous"
      },
      {
        "id": "B",
        "text": "Read Replica serves read traffic; Multi-AZ standby is only for failover"
      },
      {
        "id": "C",
        "text": "Read Replica is in the same AZ; Multi-AZ spans multiple regions"
      },
      {
        "id": "D",
        "text": "Multi-AZ supports MySQL only; Read Replica supports all engines"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Jawabannya Read Replica melayani query baca (scalability), sedangkan Multi-AZ standby hanya aktif saat primary gagal (high availability). Keduanya berbeda tujuan: Read Replica untuk performa, Multi-AZ untuk ketersediaan. Read Replica menggunakan replikasi asinkron, Multi-AZ menggunakan replikasi sinkron.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0154",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service lets developers deploy web apps without managing EC2 infrastructure?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Fargate"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "Amazon Lightsail"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Elastic Beanstalk dipilih karena ia adalah layanan PaaS yang secara otomatis mengurus provisioning server, load balancing, auto scaling, dan monitoring. Developer cukup upload kode aplikasinya, sisanya diurus Elastic Beanstalk.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0155",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which CloudWatch feature sends alerts when a metric exceeds a defined threshold?",
    "options": [
      {
        "id": "A",
        "text": "CloudWatch Logs Insights"
      },
      {
        "id": "B",
        "text": "CloudWatch Dashboards"
      },
      {
        "id": "C",
        "text": "CloudWatch Events"
      },
      {
        "id": "D",
        "text": "CloudWatch Alarms"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "CloudWatch Alarms dipilih karena fungsinya spesifik untuk memantau satu metrik dan memicu tindakan (notifikasi SNS, Auto Scaling) ketika metrik melampaui batas yang ditentukan. CloudWatch Logs Insights untuk query log, Dashboards untuk visualisasi, Events untuk memicu aksi berdasarkan perubahan status resource.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0156",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides centralized managed backup across RDS, EBS, DynamoDB, and EFS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Backup"
      },
      {
        "id": "B",
        "text": "Amazon S3 Lifecycle Policy"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Data Lifecycle Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Backup dipilih karena ia adalah satu-satunya layanan yang menyediakan backup terpusat dan terkelola penuh untuk berbagai layanan AWS sekaligus (RDS, EBS, DynamoDB, EFS, S3) dalam satu konsol. S3 Lifecycle Policy hanya mengelola objek di S3, bukan layanan lain.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0157",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service manages EC2 fleets with patching and commands without SSH access?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Systems Manager dipilih karena menyediakan fitur patch management, Run Command, dan Session Manager yang memungkinkan pengelolaan EC2 tanpa membuka port 22 (SSH). CloudTrail hanya untuk audit log API, Inspector untuk vulnerability scanning, Config untuk compliance resource.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0158",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service automates software release pipelines: build, test, and deploy stages?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeCommit"
      },
      {
        "id": "B",
        "text": "AWS CodeBuild"
      },
      {
        "id": "C",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "D",
        "text": "AWS CodePipeline"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS CodePipeline dipilih karena ia adalah layanan CI/CD yang mengotomatisasi seluruh alur rilis software dari build, test, hingga deploy ke production. CodeBuild hanya mengkompilasi kode, CodeDeploy hanya mendeploy, sedangkan CodePipeline mengorkestrasikan ketiganya.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0159",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service compiles source code, runs tests, and produces deployable artifacts?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodePipeline"
      },
      {
        "id": "B",
        "text": "AWS CodeBuild"
      },
      {
        "id": "C",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "D",
        "text": "AWS CodeCommit"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CodeBuild dipilih karena tugasnya spesifik pada proses build: mengkompilasi source code, menjalankan unit test, dan menghasilkan artifact yang siap dideploy (misal file .jar, .zip, atau Docker image). CodePipeline mengatur alurnya, CodeBuild yang mengeksekusi proses build.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0160",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service routes users to the nearest AWS Region via the AWS global backbone network?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "Amazon Route 53 Latency Routing"
      },
      {
        "id": "C",
        "text": "AWS Direct Connect"
      },
      {
        "id": "D",
        "text": "AWS Global Accelerator"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Global Accelerator dipilih karena ia mengarahkan traffic pengguna melalui jaringan backbone global AWS (bukan internet publik) ke endpoint terdekat yang optimal. Berbeda dengan CloudFront yang fokus pada caching konten statis, Global Accelerator meningkatkan performa koneksi TCP/UDP ke aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0161",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS security service protects web apps against SQL injection and XSS attacks?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "AWS Firewall Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS WAF (Web Application Firewall) dipilih karena dirancang khusus untuk memfilter request HTTP/HTTPS dan memblokir eksploitasi web umum seperti SQL Injection dan Cross-Site Scripting. AWS Shield melindungi dari DDoS di Layer 3/4, bukan dari serangan aplikasi Layer 7.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0162",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides automatic DDoS protection for all customers at no extra charge?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield Standard"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "AWS Firewall Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Shield Standard dipilih karena perlindungan DDoS dasar ini otomatis aktif untuk semua pelanggan AWS tanpa biaya tambahan. Shield Advanced berbayar dan memberikan perlindungan lebih canggih, sedangkan WAF membutuhkan konfigurasi rule dan berbayar terpisah.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0163",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS AI service analyzes images and videos to detect objects, faces, and unsafe content?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Comprehend"
      },
      {
        "id": "B",
        "text": "Amazon Transcribe"
      },
      {
        "id": "C",
        "text": "Amazon Rekognition"
      },
      {
        "id": "D",
        "text": "Amazon Textract"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Rekognition dipilih karena ia adalah layanan computer vision AWS yang khusus untuk analisis gambar dan video. Rekognition dapat mendeteksi objek, wajah, selebriti, teks dalam gambar, dan konten tidak pantas. Textract fokus pada ekstraksi teks dari dokumen, bukan analisis gambar umum.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0164",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS AI service performs NLP to detect sentiment and key phrases in text?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Translate"
      },
      {
        "id": "B",
        "text": "Amazon Comprehend"
      },
      {
        "id": "C",
        "text": "Amazon Polly"
      },
      {
        "id": "D",
        "text": "Amazon Lex"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Comprehend dipilih karena ia adalah layanan Natural Language Processing (NLP) yang menganalisis teks untuk mendeteksi sentimen (positif/negatif/netral), entitas, frasa kunci, dan bahasa. Amazon Translate hanya menerjemahkan bahasa, bukan menganalisis makna atau sentimen teks.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0165",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS Snow Family device is designed for exabyte-scale offline migration via a physical truck?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowcone"
      },
      {
        "id": "B",
        "text": "AWS Snowball Edge Storage Optimized"
      },
      {
        "id": "C",
        "text": "AWS DataSync"
      },
      {
        "id": "D",
        "text": "AWS Snowmobile"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Snowmobile dipilih karena ia adalah satu-satunya perangkat Snow Family yang mampu memindahkan hingga 100 Petabyte data sekaligus menggunakan kontainer fisik berukuran besar yang ditarik truk. Snowball Edge hanya mampu sekitar 80TB per perangkat.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0166",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which is the smallest Snow Family device (4.5 lbs) for edge computing and small data migrations?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "B",
        "text": "AWS Snowmobile"
      },
      {
        "id": "C",
        "text": "AWS Snowcone"
      },
      {
        "id": "D",
        "text": "AWS DataSync"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Snowcone dipilih karena ia adalah perangkat Snow Family terkecil dan teringan (sekitar 2 kg / 4.5 lbs) dengan kapasitas 8TB, dirancang untuk edge location terpencil dan migrasi data skala kecil. Snowball Edge jauh lebih besar dan kapasitasnya mencapai 80TB.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0167",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS tool estimates TCO when migrating workloads from on-premises to AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Migration Evaluator"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Migration Evaluator (sebelumnya TSO Logic) dipilih karena ia menganalisis infrastruktur on-premises yang ada dan menghasilkan laporan Total Cost of Ownership (TCO) perbandingan biaya on-premises vs AWS. AWS Pricing Calculator untuk estimasi biaya layanan baru, bukan untuk perbandingan migrasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0168",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service shows personalized health events that specifically impact your account?",
    "options": [
      {
        "id": "A",
        "text": "AWS Health Dashboard (Personal)"
      },
      {
        "id": "B",
        "text": "AWS Service Health Dashboard"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Personal Health Dashboard dipilih karena ia menampilkan notifikasi yang dipersonalisasi khusus untuk resource di akun AWS Anda. Service Health Dashboard hanya menampilkan status layanan AWS secara global, bukan yang berdampak spesifik ke akun kita.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0169",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS database service is purpose-built for querying highly connected graph data?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "C",
        "text": "Amazon Neptune"
      },
      {
        "id": "D",
        "text": "Amazon Keyspaces"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Neptune dipilih karena ia adalah satu-satunya database AWS yang dibangun khusus untuk data berbentuk graf (graph database), seperti jaringan sosial, knowledge graph, atau fraud detection. DynamoDB adalah NoSQL key-value, DocumentDB untuk dokumen JSON, Keyspaces untuk Cassandra.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0170",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides a managed Apache Cassandra-compatible NoSQL database?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Keyspaces (for Apache Cassandra)"
      },
      {
        "id": "C",
        "text": "Amazon Neptune"
      },
      {
        "id": "D",
        "text": "Amazon DocumentDB"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Keyspaces dipilih karena ia adalah layanan database AWS yang kompatibel dengan Apache Cassandra, sehingga aplikasi yang sebelumnya menggunakan Cassandra on-premises bisa bermigrasi tanpa mengubah kode. DynamoDB bukan kompatibel dengan Cassandra.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0171",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Under Shared Responsibility Model, which of these is solely AWS's responsibility?",
    "options": [
      {
        "id": "A",
        "text": "Encrypting data stored in S3 buckets"
      },
      {
        "id": "B",
        "text": "Configuring Security Groups on EC2 instances"
      },
      {
        "id": "C",
        "text": "Managing IAM user permissions and policies"
      },
      {
        "id": "D",
        "text": "Physical security of AWS data center facilities"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Keamanan fisik data center (gedung, listrik, hardware, jaringan fisik) adalah tanggung jawab AWS sepenuhnya sebagai 'Security OF the Cloud'. Enkripsi data di S3, konfigurasi Security Group, dan manajemen IAM adalah tanggung jawab pelanggan sebagai 'Security IN the Cloud'.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0172",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which CloudFormation feature enables modular templates by referencing other stacks as resources?",
    "options": [
      {
        "id": "A",
        "text": "CloudFormation Drift Detection"
      },
      {
        "id": "B",
        "text": "CloudFormation StackSets"
      },
      {
        "id": "C",
        "text": "CloudFormation Nested Stacks"
      },
      {
        "id": "D",
        "text": "CloudFormation Change Sets"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "CloudFormation Nested Stacks dipilih karena memungkinkan satu template mereferensikan template lain sebagai resource, sehingga infrastruktur bisa dimodularisasi menjadi komponen yang reusable (misal modul VPC, modul database). StackSets untuk deploy ke banyak akun/region sekaligus.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0173",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service deploys a single CloudFormation stack across multiple accounts and regions?",
    "options": [
      {
        "id": "A",
        "text": "CloudFormation Nested Stacks"
      },
      {
        "id": "B",
        "text": "AWS Control Tower"
      },
      {
        "id": "C",
        "text": "AWS Service Catalog"
      },
      {
        "id": "D",
        "text": "CloudFormation StackSets"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "CloudFormation StackSets dipilih karena memungkinkan deployment satu template CloudFormation ke banyak akun AWS dan banyak region sekaligus dalam satu operasi. Nested Stacks hanya memodularisasi template dalam satu stack, bukan multi-akun.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0174",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A startup needs zero upfront cost, no commitment, maximum flexibility for EC2. Which pricing model?",
    "options": [
      {
        "id": "A",
        "text": "Reserved Instances (1-year, All Upfront)"
      },
      {
        "id": "B",
        "text": "Spot Instances"
      },
      {
        "id": "C",
        "text": "On-Demand Instances"
      },
      {
        "id": "D",
        "text": "Compute Savings Plans"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "On-Demand Instances dipilih karena tidak ada biaya di muka dan tidak ada komitmen jangka panjang — bayar per detik atau per jam sesuai pemakaian. Reserved Instances butuh komitmen 1-3 tahun, Spot Instances bisa diinterrupsi kapan saja, Savings Plans butuh komitmen penggunaan per jam.",
    "difficulty": "Sulit",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0175",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS pricing model gives up to 66% discount by committing to consistent compute usage?",
    "options": [
      {
        "id": "A",
        "text": "Reserved Instances"
      },
      {
        "id": "B",
        "text": "Compute Savings Plans"
      },
      {
        "id": "C",
        "text": "Spot Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Hosts"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Compute Savings Plans dipilih karena memberikan diskon hingga 66% vs On-Demand dengan cara berkomitmen pada jumlah pengeluaran compute per jam (bukan tipe instance tertentu) selama 1 atau 3 tahun. Lebih fleksibel dari Reserved Instances karena berlaku untuk EC2, Lambda, dan Fargate lintas region.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0176",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which S3 storage class is designed for infrequently accessed data at lower cost?",
    "options": [
      {
        "id": "A",
        "text": "S3 Standard"
      },
      {
        "id": "B",
        "text": "S3 Standard-IA"
      },
      {
        "id": "C",
        "text": "S3 Glacier Instant Retrieval"
      },
      {
        "id": "D",
        "text": "S3 One Zone-IA"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "S3 Standard-IA (Infrequent Access) dipilih karena dirancang untuk data yang jarang diakses tapi tetap butuh retrieval cepat, dengan biaya storage lebih rendah dari S3 Standard. S3 Glacier untuk archival jangka panjang dengan retrieval lebih lambat.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0177",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides a private, dedicated connection from on-premises to AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS VPN"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "D",
        "text": "Amazon VPC Peering"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Direct Connect dipilih karena menyediakan koneksi jaringan fisik yang dedicated dan private dari data center on-premises ke AWS — bukan melewati internet publik. AWS VPN tetap melewati internet tapi dienkripsi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0178",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which VPC component allows instances in a private subnet to access the internet outbound?",
    "options": [
      {
        "id": "A",
        "text": "Internet Gateway"
      },
      {
        "id": "B",
        "text": "NAT Gateway"
      },
      {
        "id": "C",
        "text": "VPC Endpoint"
      },
      {
        "id": "D",
        "text": "Egress-Only Internet Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NAT Gateway dipilih karena memungkinkan instance di private subnet melakukan koneksi outbound ke internet tanpa mengekspos instance tersebut ke inbound traffic dari internet. Internet Gateway dibutuhkan oleh public subnet, bukan private.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0179",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service lets you query data stored in S3 using standard SQL without any servers?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon EMR"
      },
      {
        "id": "D",
        "text": "AWS Glue"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Athena dipilih karena merupakan layanan query serverless yang memungkinkan analisis data langsung di S3 menggunakan SQL standar — tanpa perlu provisioning atau mengelola infrastruktur apapun. Redshift membutuhkan cluster yang di-provision.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0180",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service manages secrets like DB passwords and API keys with automatic rotation?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager Parameter Store"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Secrets Manager dipilih karena fitur utamanya adalah manajemen siklus hidup secrets termasuk automatic rotation secara terjadwal. Parameter Store bisa menyimpan secrets tapi tidak memiliki fitur automatic rotation bawaan seperti Secrets Manager.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0181",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service manages encryption keys for data protection across AWS services?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
      },
      {
        "id": "B",
        "text": "AWS CloudHSM"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Key Management Service (KMS) dipilih karena merupakan layanan terpusat untuk membuat, mengelola, dan mengontrol penggunaan encryption keys di seluruh layanan AWS. CloudHSM menyediakan dedicated hardware security module untuk kebutuhan compliance khusus.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0182",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service performs automated vulnerability assessments on EC2 and container workloads?",
    "options": [
      {
        "id": "A",
        "text": "AWS GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Security Hub"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Inspector dipilih karena fungsi spesifiknya adalah automated vulnerability scanning terhadap EC2 instances dan container images untuk menemukan software vulnerabilities dan unintended network exposure. GuardDuty fokus pada threat detection dari log, bukan vulnerability scanning.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0183",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides a unified security findings dashboard across multiple security services?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Security Hub"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Audit Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Security Hub dipilih karena mengagregasi, mengorganisasi, dan memprioritaskan security alerts dan findings dari berbagai layanan AWS (GuardDuty, Inspector, Macie, dll) ke dalam satu dashboard terpusat. GuardDuty hanya menghasilkan findings, Security Hub yang mengumpulkannya.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0184",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service routes VPC traffic privately to AWS services without using the internet?",
    "options": [
      {
        "id": "A",
        "text": "NAT Gateway"
      },
      {
        "id": "B",
        "text": "Internet Gateway"
      },
      {
        "id": "C",
        "text": "VPC Endpoint"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "VPC Endpoint dipilih karena memungkinkan instance di VPC mengakses layanan AWS (seperti S3, DynamoDB) secara private melalui jaringan AWS — tanpa membutuhkan Internet Gateway, NAT, atau koneksi internet. Ini meningkatkan keamanan dan mengurangi biaya transfer data.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0185",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service connects multiple VPCs and on-premises networks via a central hub?",
    "options": [
      {
        "id": "A",
        "text": "VPC Peering"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "AWS PrivateLink"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Transit Gateway dipilih karena bertindak sebagai hub terpusat yang menghubungkan ratusan VPC dan koneksi on-premises dalam satu arsitektur hub-and-spoke. VPC Peering hanya menghubungkan dua VPC secara point-to-point dan tidak mendukung transitive routing.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0186",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which S3 feature protects objects from accidental deletion by keeping all versions?",
    "options": [
      {
        "id": "A",
        "text": "S3 Object Lock"
      },
      {
        "id": "B",
        "text": "S3 Versioning"
      },
      {
        "id": "C",
        "text": "S3 Replication"
      },
      {
        "id": "D",
        "text": "S3 Lifecycle Policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "S3 Versioning dipilih karena menyimpan setiap versi objek yang diupload atau dihapus, sehingga memungkinkan pemulihan ke versi sebelumnya jika terjadi penghapusan atau overwrite yang tidak disengaja. S3 Object Lock lebih spesifik untuk compliance write-once-read-many (WORM).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0187",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which S3 feature automatically copies objects across AWS Regions for disaster recovery?",
    "options": [
      {
        "id": "A",
        "text": "S3 Versioning"
      },
      {
        "id": "B",
        "text": "S3 Transfer Acceleration"
      },
      {
        "id": "C",
        "text": "S3 Cross-Region Replication (CRR)"
      },
      {
        "id": "D",
        "text": "S3 Lifecycle Policy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "S3 Cross-Region Replication (CRR) dipilih karena secara otomatis mereplikasi objek dari bucket sumber di satu Region ke bucket tujuan di Region berbeda untuk kebutuhan disaster recovery dan compliance data residency. S3 Versioning harus aktif sebagai prasyarat CRR.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0188",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS support plan provides a dedicated Technical Account Manager (TAM)?",
    "options": [
      {
        "id": "A",
        "text": "AWS Basic Support"
      },
      {
        "id": "B",
        "text": "AWS Developer Support"
      },
      {
        "id": "C",
        "text": "AWS Business Support"
      },
      {
        "id": "D",
        "text": "AWS Enterprise Support"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Enterprise Support dipilih karena satu-satunya plan yang menyertakan dedicated Technical Account Manager (TAM) yang bertindak sebagai advisor proaktif, membantu optimasi arsitektur dan perencanaan operasional jangka panjang. Business Support hanya memberikan akses ke AWS Support API.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0189",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service runs containerized workloads on Fargate without managing EC2 nodes?",
    "options": [
      {
        "id": "A",
        "text": "Amazon ECS on EC2"
      },
      {
        "id": "B",
        "text": "Amazon EKS on EC2"
      },
      {
        "id": "C",
        "text": "AWS App Runner"
      },
      {
        "id": "D",
        "text": "Amazon ECS on Fargate"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon ECS on Fargate dipilih karena Fargate adalah serverless compute engine untuk container yang menghilangkan kebutuhan provisioning dan pengelolaan EC2 instance. Pengguna cukup mendefinisikan resource CPU/memory container, Fargate yang mengelola infrastrukturnya.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0190",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS Well-Architected pillar focuses on monitoring, alerting, and continuous improvement of operations?",
    "options": [
      {
        "id": "A",
        "text": "Operational Excellence"
      },
      {
        "id": "B",
        "text": "Reliability"
      },
      {
        "id": "C",
        "text": "Performance Efficiency"
      },
      {
        "id": "D",
        "text": "Sustainability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Operational Excellence dipilih karena berfokus pada kemampuan menjalankan workload secara efektif, mendapatkan insight operasional, dan terus meningkatkan proses serta prosedur. Reliability fokus pada kemampuan workload untuk recover dari failure.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0191",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service uses a visual workflow to coordinate multiple Lambda functions in sequence?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SQS"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon EventBridge"
      },
      {
        "id": "D",
        "text": "Amazon MQ"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Step Functions dipilih karena menyediakan visual workflow orchestration untuk mengoordinasikan serangkaian Lambda functions, services, atau manual tasks dalam urutan langkah yang terdefinisi. SQS hanya untuk queueing, bukan untuk orchestration workflow multi-step.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0192",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service delivers a managed event bus to route events between AWS services and SaaS apps?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EventBridge"
      },
      {
        "id": "B",
        "text": "Amazon SNS"
      },
      {
        "id": "C",
        "text": "Amazon SQS"
      },
      {
        "id": "D",
        "text": "AWS Step Functions"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EventBridge dipilih karena merupakan serverless event bus yang menghubungkan aplikasi menggunakan event dari layanan AWS, aplikasi custom, dan SaaS partners secara real-time. SNS adalah pub/sub untuk fanout notification, EventBridge untuk event-driven routing yang lebih kompleks.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0193",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service is a petabyte-scale cloud data warehouse optimized for analytics?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
      },
      {
        "id": "B",
        "text": "Amazon RDS"
      },
      {
        "id": "C",
        "text": "Amazon Aurora"
      },
      {
        "id": "D",
        "text": "Amazon DynamoDB"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Redshift dipilih karena merupakan cloud data warehouse yang dioptimalkan untuk OLAP (Online Analytical Processing) dan query analitik terhadap dataset berukuran petabyte menggunakan columnar storage. RDS dan Aurora dioptimalkan untuk OLTP (transactional workloads).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0194",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service is used to provision SSL/TLS certificates for use with AWS services at no cost?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "AWS CloudHSM"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager (ACM)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Certificate Manager (ACM) dipilih karena menyediakan provisioning, manajemen, dan deployment SSL/TLS certificates secara gratis untuk digunakan dengan layanan AWS seperti ELB, CloudFront, dan API Gateway. Sertifikat ACM di-renew secara otomatis.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0195",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service performs ETL (Extract, Transform, Load) operations to prepare data for analytics?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "Amazon EMR"
      },
      {
        "id": "C",
        "text": "AWS Glue"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Glue dipilih karena merupakan layanan ETL serverless yang secara otomatis menemukan, mengkatalogkan, dan mentransformasi data dari berbagai sumber untuk keperluan analytics. Athena digunakan untuk query data yang sudah siap, bukan untuk ETL.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0196",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service ingests and processes real-time streaming data at massive scale?",
    "options": [
      {
        "id": "A",
        "text": "AWS Glue"
      },
      {
        "id": "B",
        "text": "Amazon SQS"
      },
      {
        "id": "C",
        "text": "Amazon Kinesis Data Streams"
      },
      {
        "id": "D",
        "text": "AWS Batch"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Kinesis Data Streams dipilih karena didesain khusus untuk ingestion dan processing data streaming real-time dalam volume besar (log, clickstream, IoT telemetry) dengan latency rendah. SQS adalah message queue untuk decoupling, bukan untuk streaming analytics.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0197",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which IAM feature sets the maximum permissions boundary for an IAM entity?",
    "options": [
      {
        "id": "A",
        "text": "IAM Resource Policy"
      },
      {
        "id": "B",
        "text": "IAM Permission Boundary"
      },
      {
        "id": "C",
        "text": "Service Control Policy (SCP)"
      },
      {
        "id": "D",
        "text": "IAM Trust Policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "IAM Permission Boundary dipilih karena merupakan managed policy yang digunakan untuk menetapkan batas izin maksimum yang bisa dimiliki oleh IAM user atau role — bahkan jika identity policy memberikan izin lebih luas. SCP serupa tapi bekerja di level AWS Organizations, bukan per entitas IAM.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0198",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service enables single sign-on (SSO) access to multiple AWS accounts and business apps?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM Identity Center"
      },
      {
        "id": "B",
        "text": "Amazon Cognito"
      },
      {
        "id": "C",
        "text": "AWS Directory Service"
      },
      {
        "id": "D",
        "text": "IAM Federation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS IAM Identity Center (sebelumnya AWS SSO) dipilih karena menyediakan centralized SSO untuk mengakses beberapa akun AWS dan aplikasi bisnis (Salesforce, Office 365) dari satu portal. Amazon Cognito untuk autentikasi end-user pada aplikasi web/mobile, bukan untuk akses multi-akun AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0199",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service sets up and enforces a multi-account environment with guardrails automatically?",
    "options": [
      {
        "id": "A",
        "text": "AWS Control Tower"
      },
      {
        "id": "B",
        "text": "AWS Organizations"
      },
      {
        "id": "C",
        "text": "AWS Service Catalog"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Control Tower dipilih karena secara otomatis menyiapkan landing zone multi-akun yang aman dengan guardrails (preventive dan detective controls) berdasarkan AWS best practices. AWS Organizations menyediakan struktur akun, tapi Control Tower yang mengotomatisasi setup dan governance-nya.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0200",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS Well-Architected pillar addresses using the right resource types and sizes to meet workload needs?",
    "options": [
      {
        "id": "A",
        "text": "Cost Optimization"
      },
      {
        "id": "B",
        "text": "Sustainability"
      },
      {
        "id": "C",
        "text": "Operational Excellence"
      },
      {
        "id": "D",
        "text": "Performance Efficiency"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pilar Performance Efficiency dipilih karena berfokus pada penggunaan computing resources secara efisien sesuai kebutuhan workload — memilih tipe instance, database, dan storage yang tepat. Cost Optimization lebih fokus pada menghilangkan pemborosan biaya, bukan tentang memilih resource yang tepat untuk performa.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0201",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS support plan is the minimum to get 24/7 phone and chat access to Cloud Support Engineers?",
    "options": [
      {
        "id": "A",
        "text": "AWS Basic"
      },
      {
        "id": "B",
        "text": "AWS Developer"
      },
      {
        "id": "C",
        "text": "AWS Business"
      },
      {
        "id": "D",
        "text": "AWS Enterprise"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Business Support dipilih karena merupakan plan terendah yang menyertakan akses 24/7 ke Cloud Support Engineers via phone, chat, dan email untuk semua jenis kasus. Developer Support hanya memberikan akses email ke Cloud Support Associates di jam kerja.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0202",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides the most granular and complete billing data via a report delivered to S3?",
    "options": [
      {
        "id": "A",
        "text": "AWS Budgets"
      },
      {
        "id": "B",
        "text": "AWS Cost and Usage Report (CUR)"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "D",
        "text": "AWS Billing Dashboard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Cost and Usage Report (CUR) dipilih karena menghasilkan laporan tagihan paling detail dan komprehensif (hingga per resource, per tag, per jam) yang secara otomatis dikirim ke S3. Cost Explorer hanya menampilkan visualisasi biaya historis, bukan raw data granular.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0203",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service monitors costs and sends alerts when spending exceeds a defined threshold?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Cost and Usage Report"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Budgets dipilih karena memungkinkan pengguna menetapkan batas biaya, penggunaan, atau Reserved Instance/Savings Plans, lalu mengirim alert (email/SNS) saat threshold terlampaui. Cost Explorer untuk analisis historis, bukan untuk alerting threshold.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0204",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service shares resources like subnets and Transit Gateways across multiple AWS accounts?",
    "options": [
      {
        "id": "A",
        "text": "AWS Resource Access Manager (RAM)"
      },
      {
        "id": "B",
        "text": "AWS Organizations"
      },
      {
        "id": "C",
        "text": "AWS PrivateLink"
      },
      {
        "id": "D",
        "text": "VPC Peering"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Resource Access Manager (RAM) dipilih karena memungkinkan berbagi resource AWS (subnet, Transit Gateway, Route 53 Resolver rules) secara aman ke akun AWS lain atau dalam satu Organization tanpa perlu duplikasi resource. VPC Peering hanya menghubungkan VPC, bukan berbagi resource.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0205",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "An app needs to cache database query results to reduce latency. Which AWS service is best?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB Accelerator (DAX)"
      },
      {
        "id": "C",
        "text": "Amazon MemoryDB"
      },
      {
        "id": "D",
        "text": "Amazon ElastiCache"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon ElastiCache dipilih karena merupakan layanan in-memory caching terkelola (Redis atau Memcached) yang ideal untuk menyimpan hasil query database sehingga permintaan berikutnya dilayani dari cache dengan latency microsecond. DAX spesifik hanya untuk DynamoDB, bukan untuk database lain.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0206",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Administrator Keamanan mewajibkan pengaktifan Multi-Factor Authentication (MFA) pada akun Root User dan seluruh pengguna IAM berhak istimewa di AWS. Apakah fungsi utama dari pengaktifan MFA dalam strategi perlindungan identitas akun AWS?",
    "options": [
      {
        "id": "A",
        "text": "Memberikan lapisan keamanan pertahanan ekstra di luar nama pengguna dan kata sandi dengan mewajibkan kode token sekali pakai dari perangkat fisik/aplikasi"
      },
      {
        "id": "B",
        "text": "Mempercepat proses masuk (login) ke AWS Management Console tanpa perlu memasukkan kata sandi"
      },
      {
        "id": "C",
        "text": "Mencegah pengguna mengubah konfigurasi Security Group di dalam VPC"
      },
      {
        "id": "D",
        "text": "Menghilangkan kebutuhan pembuatan akun IAM untuk pengguna lain"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Multi-Factor Authentication (MFA) menambahkan lapisan keamanan pertahanan kedua di luar kredensial nama pengguna dan kata sandi, mewajibkan kode autentikasi unik dari perangkat fisik atau aplikasi autentikator.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0207",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Cloud Financial Manager ingin menerima peringatan email instan segera setelah perkiraan pengeluaran biaya bulanan pada akun AWS mendekati ambang batas anggaran $1,00. Kombinasi layanan AWS manakah yang paling tepat digunakan untuk menyetel batas anggaran dan mengirimkan notifikasi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer terintegrasi dengan AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "AWS Budgets terintegrasi dengan Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator terintegrasi dengan Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor terintegrasi dengan AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Budgets memungkinkan pembuatan ambang batas anggaran biaya dan penggunaan, dan ketika terintegrasi dengan Amazon SNS, dapat secara otomatis mengirimkan notifikasi email saat biaya aktual atau proyeksi mendekati batas.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0208",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Dalam praktik terbaik keamanan industri AWS (Security Best Practices), administrator disarankan menggunakan AWS Systems Manager (SSM) Session Manager untuk mengelola instance Amazon EC2 jarak jauh daripada menggunakan koneksi SSH konvensional. Mengapa Session Manager jauh lebih aman?",
    "options": [
      {
        "id": "A",
        "text": "Karena Session Manager mewajibkan instance EC2 memiliki alamat IP publik"
      },
      {
        "id": "B",
        "text": "Karena Session Manager secara otomatis menaikkan spesifikasi kapasitas RAM server"
      },
      {
        "id": "C",
        "text": "Karena Session Manager memungkinkan remote shell tanpa perlu membuka port inbound SSH 22 pada Security Group dan tanpa memerlukan alamat IP publik atau bastion host"
      },
      {
        "id": "D",
        "text": "Karena Session Manager menonaktifkan pencatatan log pada CloudTrail"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Systems Manager Session Manager menyediakan koneksi shell aman melalui agen SSM tanpa perlu membuka port inbound 22 SSH, tanpa memerlukan bastion host, dan tanpa memerlukan alamat IP publik pada instance.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0209",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Network Engineer sedang merancang Custom VPC baru di AWS untuk lingkungan produksi perusahaan. Rentang blok alamat IPv4 privat standar (RFC 1918) dengan ukuran CIDR berkapasitas 65.536 alamat IP manakah yang paling umum digunakan sebagai CIDR block utama sebuah VPC?",
    "options": [
      {
        "id": "A",
        "text": "192.168.1.0/24"
      },
      {
        "id": "B",
        "text": "172.16.0.0/28"
      },
      {
        "id": "C",
        "text": "8.8.8.8/32"
      },
      {
        "id": "D",
        "text": "10.0.0.0/16"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Rentang CIDR 10.0.0.0/16 adalah standar paling umum untuk membuat Amazon VPC privat kustom, menyediakan 65.536 alamat IP privat yang dapat dipecah menjadi berbagai subnet publik dan privat.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0210",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Dalam arsitektur web bertingkat (multi-tier), seorang insinyur keamanan ingin memastikan bahwa instance Amazon EC2 di lapisan web server hanya dapat menerima lalu lintas HTTP dari Application Load Balancer (ALB) dan memblokir seluruh lalu lintas langsung lainnya. Bagaimana cara paling aman mengonfigurasi aturan inbound Security Group pada instance EC2 tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Mengatur Source pada aturan inbound port HTTP 80 agar merujuk langsung ke ID Security Group milik Application Load Balancer (sg-xxxxxx)"
      },
      {
        "id": "B",
        "text": "Membuka port HTTP 80 ke seluruh internet dengan CIDR source 0.0.0.0/0"
      },
      {
        "id": "C",
        "text": "Menetapkan aturan port 80 pada Network ACL subnet publik saja"
      },
      {
        "id": "D",
        "text": "Menghubungkan instance EC2 langsung ke Internet Gateway tanpa Security Group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Praktik terbaik arsitektur AWS adalah menautkan Security Group EC2 langsung ke Security Group ID milik Load Balancer sebagai Source, memastikan instance hanya menerima lalu lintas yang telah melalui load balancer.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0211",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang Solutions Architect menyarankan agar aplikasi web produksi disebarkan minimal pada dua instance Amazon EC2 yang berada di dua Availability Zone (AZ) berbeda (pola Multi-AZ deployment). Apakah alasan arsitektural utama di balik rekomendasi penempatan lintas AZ ini?",
    "options": [
      {
        "id": "A",
        "text": "Untuk mengurangi biaya lisensi perangkat lunak sistem operasi hingga 50%"
      },
      {
        "id": "B",
        "text": "Untuk mencapai Ketersediaan Tinggi (High Availability) dan toleransi kesalahan fisik terhadap potensi kegagalan data center pada satu AZ"
      },
      {
        "id": "C",
        "text": "Untuk mempercepat instalasi pembaruan patch Windows Update"
      },
      {
        "id": "D",
        "text": "Karena AWS melarang penempatan dua instance pada AZ yang sama"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Penyebaran multi-AZ memastikan bahwa jika salah satu pusat data fisik di sebuah Availability Zone mengalami pemadaman listrik atau bencana, aplikasi tetap berjalan normal dilayani oleh instance di AZ lainnya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0212",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang meluncurkan instance web server pada subnet publik di Amazon VPC. Komponen jaringan VPC manakah yang harus dilampirkan (attached) ke VPC dan dirutekan pada Route Table agar subnet publik tersebut memiliki konektivitas komunikasi dua arah dengan internet luar?",
    "options": [
      {
        "id": "A",
        "text": "NAT Gateway"
      },
      {
        "id": "B",
        "text": "Virtual Private Gateway"
      },
      {
        "id": "C",
        "text": "Internet Gateway (IGW)"
      },
      {
        "id": "D",
        "text": "Egress-Only Internet Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Internet Gateway (IGW) adalah komponen VPC redundan yang menyediakan konektivitas dua arah antara sumber daya di dalam subnet publik VPC dengan internet publik luar.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0213",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang insinyur jaringan sedang membandingkan mekanisme kerja antara Security Group dan Network Access Control List (NACL) di Amazon VPC. Manakah dari pernyataan berikut yang paling tepat menjelaskan perbedaan sifat 'state' antara kedua kontrol firewall tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Security Group bersifat stateless, sedangkan Network ACL bersifat stateful"
      },
      {
        "id": "B",
        "text": "Keduanya bersifat stateless dan tidak mengingat status koneksi"
      },
      {
        "id": "C",
        "text": "Keduanya bersifat stateful dan otomatis mengizinkan lalu lintas balasan"
      },
      {
        "id": "D",
        "text": "Security Group bersifat stateful (lalu lintas balasan otomatis diizinkan), sedangkan Network ACL bersifat stateless (aturan masuk dan keluar harus didefinisikan secara terpisah)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Security Group bersifat stateful (respons koneksi otomatis diizinkan keluar/masuk), sedangkan Network ACL bersifat stateless (lalu lintas masuk dan keluar dievaluasi secara terpisah dan harus diizinkan secara eksplisit pada kedua arah).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0214",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Di bawah model tanggung jawab bersama AWS (AWS Shared Responsibility Model), manakah dari tanggung jawab operasional berikut yang secara eksklusif berada di pihak AWS (Security OF the Cloud)?",
    "options": [
      {
        "id": "A",
        "text": "Keamanan fisik fasilitas pusat data, pemeliharaan perangkat keras server fisik, dan lapisan virtualisasi infrastruktur"
      },
      {
        "id": "B",
        "text": "Pengelolaan kredensial akun pengguna IAM dan rotasi kata sandi"
      },
      {
        "id": "C",
        "text": "Konfigurasi aturan firewall masuk dan keluar pada Security Group VPC"
      },
      {
        "id": "D",
        "text": "Penerapan enkripsi sisi klien pada data pelanggan sebelum diunggah ke cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS bertanggung jawab atas keamanan 'dari' cloud, yang mencakup perlindungan fisik fasilitas pusat data, infrastruktur perangkat keras, pasokan listrik, dan lapisan perangkat lunak dasar virtualisasi (hypervisor).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0215",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Di bawah model tanggung jawab bersama AWS (AWS Shared Responsibility Model), manakah dari tugas operasional berikut yang sepenuhnya menjadi tanggung jawab pelanggan (Security IN the Cloud)?",
    "options": [
      {
        "id": "A",
        "text": "Memperbaiki kerusakan fisik kabel serat optik antar fasilitas data center AWS"
      },
      {
        "id": "B",
        "text": "Pengelolaan akun pengguna, rotasi kredensial, dan konfigurasi hak akses IAM"
      },
      {
        "id": "C",
        "text": "Pembaruan firmware pada sakelar jaringan fisik data center"
      },
      {
        "id": "D",
        "text": "Pemusnahan media magnetik hard drive yang sudah usang di fasilitas AWS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pelanggan bertanggung jawab atas keamanan 'di dalam' cloud, yang mencakup manajemen akun pengguna, kontrol akses IAM, konfigurasi firewall, enkripsi data, dan perlindungan sistem operasi tamu.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0216",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi menerapkan enkripsi data at-rest pada seluruh database Amazon RDS, mengonfigurasi autentikasi multifaktor (MFA), dan menggunakan AWS WAF untuk melindungi aplikasi dari eksploitasi web. Pilar AWS Well-Architected Framework manakah yang paling didukung oleh praktik-praktik ini?",
    "options": [
      {
        "id": "A",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "B",
        "text": "Efisiensi Kinerja (Performance Efficiency)"
      },
      {
        "id": "C",
        "text": "Keamanan (Security)"
      },
      {
        "id": "D",
        "text": "Keunggulan Operasional (Operational Excellence)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pilar Security (Keamanan) pada AWS Well-Architected Framework berfokus pada perlindungan data, sistem, dan aset digital melalui kontrol hak akses, enkripsi data, dan deteksi ancaman proaktif.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0217",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim arsitek rutin mematikan instance EC2 lingkungan uji di luar jam kerja, mengidentifikasi dan menghapus volume EBS yang tidak terpasang, serta memilih komitmen Savings Plans untuk beban kerja stabil. Pilar AWS Well-Architected Framework manakah yang paling didukung oleh inisiatif ini?",
    "options": [
      {
        "id": "A",
        "text": "Keberlanjutan (Sustainability)"
      },
      {
        "id": "B",
        "text": "Keandalan (Reliability)"
      },
      {
        "id": "C",
        "text": "Keamanan (Security)"
      },
      {
        "id": "D",
        "text": "Optimalisasi Biaya (Cost Optimization)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pilar Cost Optimization (Optimalisasi Biaya) berfokus pada kemampuan menjalankan sistem secara hemat, menghilangkan pengeluaran yang tidak perlu, dan memaksimalkan nilai bisnis dari setiap rupiah yang dibelanjakan di cloud.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0218",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memerlukan rekaman catatan audit yang komprehensif mengenai seluruh aktivitas pemanggilan API AWS (baik yang dilakukan melalui AWS Management Console, CLI, SDK, maupun perkakas otomatisasi) untuk keperluan tata kelola dan audit kepatuhan regulasi. Layanan AWS manakah yang harus diaktifkan?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudTrail menyediakan tata kelola, kepatuhan, dan audit operasional akun AWS dengan mencatat seluruh riwayat pemanggilan API dan tindakan pengguna di seluruh layanan AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0219",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tim operasional membutuhkan dashboard pemantauan waktu nyata (real-time) yang menampilkan grafik metrik pemakaian CPU, lalu lintas jaringan (Network I/O), dan operasi baca-tulis disk (Disk I/O) pada armada Amazon EC2 mereka, lengkap dengan kemampuan memicu alarm jika CPU melampaui 85%. Layanan AWS manakah yang menyediakan fungsi pemantauan metrik ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon CloudWatch adalah layanan pemantauan dan observabilitas yang mengumpulkan data metrik operasional, log, dan memicu alarm otomatis saat batas performa tercapai.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0220",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah grup korporasi ingin mengelola puluhan akun AWS anak perusahaan secara terpusat, mengelompokkan akun ke dalam Unit Organisasi (OU), dan menerapkan Service Control Policies (SCPs) untuk membatasi izin operasional pada akun-akun tersebut. Layanan tata kelola AWS manakah yang menyediakan kapabilitas ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM Identity Center"
      },
      {
        "id": "B",
        "text": "AWS Control Tower"
      },
      {
        "id": "C",
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "AWS Directory Service"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Organizations adalah layanan manajemen akun terpusat yang memungkinkan penggabungan beberapa akun AWS ke dalam satu organisasi, pengelompokan OU, dan penerapan Service Control Policies (SCPs).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0221",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebelum adanya cloud computing, sebuah perusahaan membutuhkan waktu hingga beberapa bulan untuk memesan, merakit, dan mengonfigurasi perangkat keras server baru. Dengan AWS, tim pengembang dapat meluncurkan puluhan server komputasi dalam hitungan menit untuk bereksperimen. Keuntungan utama komputasi cloud manakah yang digambarkan oleh skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Penyimpanan global terpusat"
      },
      {
        "id": "B",
        "text": "Penghematan biaya lisensi tetap"
      },
      {
        "id": "C",
        "text": "Toleransi kesalahan bawaan"
      },
      {
        "id": "D",
        "text": "Kelincahan dan Kecepatan Inovasi (Agility)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Agility (Kelincahan) adalah keuntungan cloud di mana sumber daya teknologi baru dapat diluncurkan hanya dengan beberapa klik dalam hitungan menit, secara dramatis mempercepat laju inovasi dan eksperimen bisnis.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0222",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Seorang insinyur cloud sedang menjelaskan perbedaan konsep arsitektur antara 'Scalability' dan 'Elasticity' pada AWS. Manakah dari pernyataan berikut yang paling tepat merangkum perbedaan mendasar antara kedua konsep tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Scalability adalah kemampuan sistem untuk menangani pertumbuhan beban dengan menambah kapasitas; sedangkan Elasticity adalah kemampuan untuk menambah dan mengurangi kapasitas secara otomatis mengikuti fluktuasi permintaan"
      },
      {
        "id": "B",
        "text": "Scalability hanya berlaku untuk database relasional, sedangkan Elasticity hanya berlaku untuk server komputasi"
      },
      {
        "id": "C",
        "text": "Scalability bersifat otomatis penuh, sedangkan Elasticity membutuhkan campur tangan manual admin"
      },
      {
        "id": "D",
        "text": "Scalability mengacu pada penyimpanan disk, sedangkan Elasticity mengacu pada jaringan bandwidth"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Scalability mengacu pada kapasitas sistem untuk menangani peningkatan beban kerja jangka panjang; sedangkan Elasticity adalah kemampuan dinamis dua arah untuk otomatis scale-out saat beban naik dan scale-in saat beban turun guna menghemat biaya.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0223",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan memiliki data gambar profil pengguna yang jarang sekali diakses kembali setelah 30 hari, namun jika sewaktu-waktu pengguna membuka halaman profil mereka, gambar tersebut harus dapat diambil seketika dalam hitungan milidetik. Storage class Amazon S3 manakah yang paling hemat biaya untuk pola akses ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Standard"
      },
      {
        "id": "B",
        "text": "Amazon S3 Standard-Infrequent Access (S3 Standard-IA)"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier Flexible Retrieval"
      },
      {
        "id": "D",
        "text": "Amazon S3 Glacier Deep Archive"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon S3 Standard-IA dirancang untuk data yang jarang diakses namun membutuhkan akses cepat seketika (milidetik) saat diminta, dengan biaya penyimpanan bulanan lebih rendah dibanding S3 Standard.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0224",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah lembaga medis diwajibkan oleh undang-undang untuk mempertahankan salinan cadangan rekam medis digital selama 10 tahun. Data cadangan ini sangat jarang diakses, dan penundaan waktu pengambilan data dalam 12 jam dapat diterima demi efisiensi biaya penyimpanan terendah. Storage class Amazon S3 manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Standard"
      },
      {
        "id": "B",
        "text": "Amazon S3 One Zone-IA"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier Deep Archive"
      },
      {
        "id": "D",
        "text": "Amazon S3 Express One Zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon S3 Glacier Deep Archive adalah kelas penyimpanan arsip paling hemat di AWS yang dirancang untuk retensi data jangka panjang 7-10 tahun dengan waktu pengambilan data standar sekitar 12 jam.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0225",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan media menyiarkan konten video dan situs web berita kepada jutaan pengguna di seluruh dunia. Apakah fungsi utama dari layanan Amazon CloudFront dalam arsitektur pengiriman konten web modern ini?",
    "options": [
      {
        "id": "A",
        "text": "Menjalankan database relasional lintas benua"
      },
      {
        "id": "B",
        "text": "Mengonversi video resolusi tinggi menjadi resolusi seluler"
      },
      {
        "id": "C",
        "text": "Menyediakan koneksi VPN privat khusus antara kantor dan VPC"
      },
      {
        "id": "D",
        "text": "Menyajikan konten statis dan dinamis dengan latensi rendah dan kecepatan transfer tinggi ke pengguna global memanfaatkan jaringan Edge Locations"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon CloudFront bertindak sebagai Content Delivery Network (CDN) global yang meng-cache konten pada jaringan Edge Locations di seluruh dunia untuk meminimalkan latensi dan mempercepat akses bagi pengguna.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0226",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi membutuhkan layanan Domain Name System (DNS) terkelola yang sangat andal, hemat biaya, dan dapat diskalakan secara elastis untuk merutekan traffic pengguna internet ke aplikasi web mereka pada port standar 53. Layanan jaringan AWS manakah yang dirancang untuk kebutuhan ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "Amazon Virtual Private Cloud (Amazon VPC)"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Route 53 adalah layanan DNS cloud berdaya tahan tinggi dan dapat diskalakan yang dirancang untuk menerjemahkan nama domain dan merutekan traffic pada port 53 dengan tingkat SLA ketersediaan 100%.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0227",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi seluler membutuhkan basis data NoSQL terkelola penuh tanpa server yang menggunakan model key-value dan dokumen, serta mampu menangani jutaan permintaan baca/tulis per detik dengan latensi konsisten satu digit milidetik. Layanan basis data AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for PostgreSQL"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon Aurora"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB adalah basis data NoSQL key-value terkelola penuh tanpa server yang menawarkan performa konsisten satu digit milidetik pada skala apa pun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0228",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi enterprise akuntansi membutuhkan basis data terstruktur yang mendukung transaksi ACID, skema tabel relasional, query SQL kompleks, dan foreign keys. Layanan terkelola AWS manakah yang paling tepat untuk mengelola mesin basis data seperti PostgreSQL, MySQL, MariaDB, atau Oracle ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "C",
        "text": "Amazon Relational Database Service (Amazon RDS)"
      },
      {
        "id": "D",
        "text": "Amazon Keyspaces"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon RDS (Relational Database Service) mempermudah penyiapan, pengoperasian, dan penskalaan basis data relasional (SQL) di cloud dengan dukungan untuk mesin seperti PostgreSQL, MySQL, MariaDB, Oracle, dan SQL Server.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0229",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan retail besar ingin menggabungkan data transaksi dari berbagai sumber toko fisik dan online ke dalam satu gudang data cloud berskala petabyte untuk menjalankan query analitik bisnis (OLAP) yang kompleks secara cepat. Layanan data warehouse AWS manakah yang dirancang untuk skenario ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon RDS for MySQL"
      },
      {
        "id": "C",
        "text": "Amazon OpenSearch Service"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Redshift adalah layanan data warehouse berskala petabyte berbasis cloud yang dioptimalkan untuk analisis data berskala besar (OLAP) dan Business Intelligence menggunakan SQL standar.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0230",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah tim pengembang ingin membuat alur kerja pemrosesan data di mana sebuah fungsi kode Python dijalankan hanya saat ada file gambar baru yang diunggah ke bucket Amazon S3, dan berhenti total saat tidak ada file baru (zero idle cost). Layanan komputasi serverless AWS manakah yang dirancang untuk arsitektur event-driven ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Lambda"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "Amazon ECS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Lambda adalah layanan komputasi tanpa server (serverless) yang mengeksekusi kode berdasarkan pemicu event (event-driven) dan secara otomatis mengelola seluruh alokasi infrastruktur dan penskalaan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0231",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah lab komputasi riset menjalankan pemrosesan citra satelit batch yang sangat fleksibel terhadap jadwal eksekusi dan toleran terhadap interupsi (dapat dijeda dan dilanjutkan kapan saja). Opsi penetapan harga Amazon EC2 manakah yang paling hemat biaya untuk beban kerja ini?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Spot Instances"
      },
      {
        "id": "C",
        "text": "Reserved Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Hosts"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Spot Instances memanfaatkan sisa kapasitas komputasi AWS yang menganggur dengan diskon hingga 90% dibandingkan On-Demand, menjadikannya pilihan paling hemat biaya untuk beban kerja toleran interupsi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0232",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi memiliki beban kerja basis data inti yang berjalan stabil sepanjang waktu (steady-state workload) selama 24 jam sehari, 7 hari seminggu. Perusahaan bersedia membuat komitmen pemakaian komputasi stabil selama 1 atau 3 tahun untuk mendapatkan diskon besar (hingga 72%). Model pembelian Amazon EC2 manakah yang paling tepat?",
    "options": [
      {
        "id": "A",
        "text": "Spot Instances"
      },
      {
        "id": "B",
        "text": "On-Demand Instances"
      },
      {
        "id": "C",
        "text": "Savings Plans atau Reserved Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Hosts On-Demand"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Savings Plans dan Reserved Instances menawarkan penghematan signifikan (hingga 72%) dibandingkan tarif On-Demand sebagai imbalan atas komitmen penggunaan komputasi stabil selama periode 1 atau 3 tahun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0233",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah instance Amazon EC2 membutuhkan penyimpanan tingkat blok (block-level storage) yang persisten dan dapat diformat dengan sistem file untuk digunakan sebagai drive sistem operasi (root volume). Layanan penyimpanan AWS manakah yang digunakan untuk tujuan ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Storage Service (Amazon S3)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EBS menyediakan volume penyimpanan blok persisten yang berkinerja tinggi yang dirancang khusus untuk dipasang ke instance Amazon EC2 sebagai root volume sistem operasi dan volume data.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0234",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah arsitektur aplikasi berbasis Linux terdiri dari puluhan instance Amazon EC2 yang membutuhkan sistem file penyimpanan bersama (shared storage) yang elastis, terkelola, dan dapat diakses bersamaan melalui protokol Network File System (NFS). Layanan AWS manakah yang harus diimplementasikan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "D",
        "text": "AWS Snowball"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EFS menyediakan sistem file bersama berbasis NFS yang elastis dan dapat dipasang (mounted) secara simultan oleh ratusan instance Linux di berbagai Availability Zone.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0235",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah aplikasi pemantauan server perlu mengirimkan sinyal notifikasi darurat ke berbagai saluran (seperti SMS ke ponsel staf on-call, email ke manajer, dan memicu webhook ke sistem ticketing) secara bersamaan menggunakan pola publish/subscribe. Layanan perpesanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "B",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "C",
        "text": "Amazon MQ"
      },
      {
        "id": "D",
        "text": "AWS Step Functions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon SNS adalah layanan pesan pub/sub yang menyediakan pengiriman notifikasi instan satu-ke-banyak (fan-out) ke berbagai pelanggan seperti SMS, email, dan HTTP/S endpoints.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0236",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah situs e-commerce ingin memisahkan modul penerima pesanan dari modul pemroses pembayaran agar lonjakan pesanan pelanggan ditampung terlebih dahulu di dalam antrean terdistribusi yang aman tanpa membebani server backend. Layanan antrean pesan (message queuing) AWS manakah yang harus digunakan?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "B",
        "text": "Amazon EventBridge"
      },
      {
        "id": "C",
        "text": "Amazon Simple Queue Service (Amazon SQS)"
      },
      {
        "id": "D",
        "text": "AWS AppSync"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SQS adalah layanan antrean pesan terdistribusi terkelola penuh yang memungkinkan pemisahan (decoupling) komponen aplikasi terdistribusi melalui komunikasi asinkron.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0237",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Semua pelanggan AWS secara otomatis mendapatkan perlindungan tanpa biaya tambahan terhadap serangan penolakan layanan terdistribusi (Distributed Denial of Service / DDoS) umum pada lapisan jaringan (Layer 3) dan transport (Layer 4) seperti SYN floods dan UDP reflection. Layanan keamanan AWS manakah yang menyediakan perlindungan default ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Shield Standard"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Shield Standard disertakan secara gratis bagi seluruh pelanggan AWS untuk secara otomatis melindungi infrastruktur dan aplikasi dari serangan DDoS umum pada Layer 3 dan Layer 4.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0238",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan ingin melindungi aplikasi web publik mereka dari eksploitasi pada lapisan aplikasi (OSI Layer 7), seperti serangan injeksi SQL (SQL Injection) dan skrip lintas situs (Cross-Site Scripting / XSS). Layanan keamanan AWS manakah yang harus dipasang di depan Application Load Balancer?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF (Web Application Firewall)"
      },
      {
        "id": "B",
        "text": "AWS Shield Standard"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "Network Access Control List (NACL)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS WAF adalah Web Application Firewall yang beroperasi pada OSI Layer 7 untuk memfilter dan memblokir lalu lintas web berbahaya dari eksploitasi web umum seperti SQLi dan XSS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0239",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah organisasi ingin mendeteksi ancaman keamanan secara cerdas pada akun AWS mereka, seperti adanya komunikasi instance EC2 ke IP server penyerang atau adanya eksfiltrasi data melalui kueri DNS mencurigakan. Layanan keamanan cerdas AWS manakah yang menganalisis VPC Flow Logs dan DNS Logs menggunakan machine learning?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang terus memantau akun AWS menggunakan machine learning untuk mendeteksi perilaku tidak sah dan ancaman keamanan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0240",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah institusi perbankan menyimpan jutaan file formulir nasabah di Amazon S3. Untuk mematuhi peraturan kepatuhan privasi data, tim keamanan memerlukan layanan yang secara otomatis memindai, mengidentifikasi, dan melindungi data sensitif seperti Personally Identifiable Information (PII) menggunakan machine learning. Layanan AWS manakah ini?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Macie adalah layanan keamanan data terkelola yang memanfaatkan machine learning untuk menemukan, mengklasifikasikan, dan melindungi data sensitif (PII) di Amazon S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0241",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan ingin mengenkripsi data pada volume Amazon EBS dan tabel Amazon RDS mereka. Mereka membutuhkan layanan terkelola untuk membuat, mengontrol hak akses, merotasi, dan mengaudit siklus hidup kunci enkripsi kriptografi. Layanan AWS manakah yang digunakan untuk tujuan ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "AWS Certificate Manager (ACM)"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "AWS Key Management Service (AWS KMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) mempermudah pembuatan, pengelolaan, dan pengontrolan kunci kriptografi (KMS keys) di berbagai layanan AWS dan aplikasi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0242",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan yang mengoperasikan beban kerja produksi di AWS membutuhkan dukungan teknis responsif 24/7 melalui telepon, obrolan langsung (chat), dan email dengan waktu respons kasus tingkat keparahan tinggi di bawah 1 jam. Tingkat AWS Support Plan terendah manakah yang memenuhi kriteria dukungan 24/7 ini?",
    "options": [
      {
        "id": "A",
        "text": "Business Support Plan"
      },
      {
        "id": "B",
        "text": "Developer Support Plan"
      },
      {
        "id": "C",
        "text": "Basic Support Plan"
      },
      {
        "id": "D",
        "text": "Enterprise Support Plan"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Paket AWS Business Support adalah tingkat dukungan terendah yang menyediakan akses 24/7 ke Cloud Support Engineers melalui telepon, chat, dan email untuk lingkungan produksi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0243",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah korporasi besar mempertimbangkan untuk berlangganan paket AWS Enterprise Support Plan. Fasilitas pendampingan ahli tingkat tinggi manakah yang secara eksklusif hanya tersedia pada paket Enterprise Support (tidak ada di paket Business atau Developer)?",
    "options": [
      {
        "id": "A",
        "text": "Akses ke dokumentasi resmi AWS dan forum komunitas"
      },
      {
        "id": "B",
        "text": "Dukungan seorang Technical Account Manager (TAM) yang didedikasikan secara eksklusif untuk akun perusahaan"
      },
      {
        "id": "C",
        "text": "Kemampuan membuka tiket dukungan via email"
      },
      {
        "id": "D",
        "text": "Akses ke dashboard pemeriksaan dasar AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Akses ke dedicated Technical Account Manager (TAM) yang ditugaskan khusus secara eksklusif hanya disediakan pada paket AWS Enterprise Support Plan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0244",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah startup ingin mengaudit konfigurasi akun AWS mereka untuk mengidentifikasi peluang penghematan biaya (seperti volume EBS yang menganggur), celah keamanan (seperti port terbuka 0.0.0.0/0), dan peningkatan toleransi kesalahan. Layanan online AWS manakah yang menyediakan rekomendasi best practice otomatis ini?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Trusted Advisor adalah alat online yang secara proaktif membandingkan akun AWS terhadap praktik terbaik dalam lima kategori: optimalisasi biaya, performa, keamanan, toleransi kesalahan, dan kuota layanan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0245",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Sebuah perusahaan layanan kesehatan yang sedang menjalani audit kepatuhan eksternal perlu mengunduh laporan audit SOC 2 Type II, sertifikasi ISO 27001, dan menyetujui Business Associate Agreement (BAA) terkait regulasi HIPAA di AWS. Portal mandiri resmi AWS manakah yang harus diakses?",
    "options": [
      {
        "id": "A",
        "text": "AWS Security Hub"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Artifact adalah portal kepatuhan sentral mandiri resmi di AWS tempat pelanggan dapat mengunduh laporan audit kepatuhan pihak ketiga dan menyetujui perjanjian kepatuhan secara on-demand.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0246",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Under the AWS Shared Responsibility Model, which task is the responsibility of AWS?",
    "options": [
      {
        "id": "A",
        "text": "Physical security of datacenters and hardware infrastructure"
      },
      {
        "id": "B",
        "text": "Configuring firewall Security Group rules on instances"
      },
      {
        "id": "C",
        "text": "Patching the guest operating system on an Amazon EC2 instance"
      },
      {
        "id": "D",
        "text": "Client-side data encryption before uploading to S3"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS bertanggung jawab atas keamanan fisik datacenter, fasilitas, dan hardware (Security OF the Cloud).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0247",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Under the AWS Shared Responsibility Model, which task is the customer's responsibility?",
    "options": [
      {
        "id": "A",
        "text": "Maintaining inter-datacenter physical fiber cabling"
      },
      {
        "id": "B",
        "text": "Managing IAM user accounts, credentials, and access policies"
      },
      {
        "id": "C",
        "text": "Replacing defective physical server hard drives in AWS racks"
      },
      {
        "id": "D",
        "text": "Upgrading firmware on physical AWS network switches"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pengelolaan kredensial IAM, data, dan akses aplikasi adalah tanggung jawab penuh pelanggan (Security IN the Cloud).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0248",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which pillar of the AWS Well-Architected Framework focuses on protecting information and systems?",
    "options": [
      {
        "id": "A",
        "text": "Operational Excellence"
      },
      {
        "id": "B",
        "text": "Reliability"
      },
      {
        "id": "C",
        "text": "Security"
      },
      {
        "id": "D",
        "text": "Cost Optimization"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pilar Security menitikberatkan pada perlindungan data, manajemen identitas, dan kontrol pencegahan ancaman.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0249",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Well-Architected pillar focuses on avoiding unnecessary expenditure and matching supply with demand?",
    "options": [
      {
        "id": "A",
        "text": "Performance Efficiency"
      },
      {
        "id": "B",
        "text": "Sustainability"
      },
      {
        "id": "C",
        "text": "Reliability"
      },
      {
        "id": "D",
        "text": "Cost Optimization"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pilar Cost Optimization bertujuan mengoptimalkan pengeluaran finansial tanpa mengorbankan performa bisnis.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0250",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the main purpose of enabling Multi-Factor Authentication (MFA) on the AWS root user?",
    "options": [
      {
        "id": "A",
        "text": "Adds an extra layer of security beyond username and password"
      },
      {
        "id": "B",
        "text": "Automatically reduces monthly billing costs"
      },
      {
        "id": "C",
        "text": "Protects EC2 instances from DDoS attacks"
      },
      {
        "id": "D",
        "text": "Accelerates login speed to the AWS Management Console"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "MFA memberikan lapisan proteksi ganda dengan kode token dinamis untuk mengamankan akun root meskipun password bocor.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0251",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service records API calls and user activities across an AWS account for compliance auditing?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudTrail mencatat riwayat panggilan API untuk audit forensik, governance, dan pemantauan aktivitas.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0252",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service collects real-time operational metrics and monitors resource utilization like CPU?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Artifact"
      },
      {
        "id": "D",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon CloudWatch mengumpulkan metrik performa real-time, grafik utilisasi resource, dan memicu alarm.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0253",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service enables central management and governance of multiple accounts using SCPs?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM User Groups"
      },
      {
        "id": "B",
        "text": "AWS Resource Access Manager"
      },
      {
        "id": "C",
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "AWS Directory Service"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Organizations mengelola multi-akun AWS secara tersentralisasi dan menerapkan Service Control Policies (SCPs).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0254",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the primary business advantage of the cloud computing concept called 'Agility'?",
    "options": [
      {
        "id": "A",
        "text": "Upfront hardware acquisition expenses are required"
      },
      {
        "id": "B",
        "text": "Data servers reside on customer premises"
      },
      {
        "id": "C",
        "text": "Provisioning infrastructure takes several weeks of planning"
      },
      {
        "id": "D",
        "text": "Ability to rapidly innovate and deploy resources within minutes"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Agility mempercepat time-to-market karena resource dapat diluncurkan seketika dalam hitungan menit.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0255",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service sends automated email alerts when monthly spending approaches a defined threshold?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "AWS Budgets integrated with Amazon SNS"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch Logs"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Budgets digunakan untuk menetapkan target biaya bulanan dan terhubung ke Amazon SNS untuk notifikasi email.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0256",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the difference between Scalability and Elasticity in AWS cloud architecture?",
    "options": [
      {
        "id": "A",
        "text": "Scalability accommodates growth; Elasticity dynamically scales up/down"
      },
      {
        "id": "B",
        "text": "Scalability applies only to storage; Elasticity applies to compute"
      },
      {
        "id": "C",
        "text": "Scalability is always manual; Elasticity cannot be automated"
      },
      {
        "id": "D",
        "text": "They are completely interchangeable terms with no technical distinction"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Scalability adalah kemampuan menangani beban lebih besar, sedangkan Elasticity mencakup scale-out dan scale-in otomatis.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0257",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon S3 storage class is best for data accessed infrequently but requiring millisecond retrieval?",
    "options": [
      {
        "id": "A",
        "text": "S3 Glacier Flexible Retrieval"
      },
      {
        "id": "B",
        "text": "S3 Standard-Infrequent Access (S3 Standard-IA)"
      },
      {
        "id": "C",
        "text": "S3 Glacier Deep Archive"
      },
      {
        "id": "D",
        "text": "S3 Intelligent-Tiering Archive"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "S3 Standard-IA menawarkan biaya penyimpanan rendah untuk data jarang diakses tapi siap diakses cepat dalam milidetik.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0258",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon S3 storage class provides the lowest storage cost for long-term archiving?",
    "options": [
      {
        "id": "A",
        "text": "S3 Standard"
      },
      {
        "id": "B",
        "text": "S3 One Zone-IA"
      },
      {
        "id": "C",
        "text": "S3 Glacier Deep Archive"
      },
      {
        "id": "D",
        "text": "S3 Express One Zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "S3 Glacier Deep Archive adalah opsi penyimpanan paling murah di AWS untuk arsip regulasi jangka panjang.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0259",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the primary role of Amazon CloudFront in a scalable web architecture?",
    "options": [
      {
        "id": "A",
        "text": "Replaces relational database clusters like MySQL"
      },
      {
        "id": "B",
        "text": "Defines private IP routing policies within a VPC"
      },
      {
        "id": "C",
        "text": "Takes daily automated EBS volume snapshot backups"
      },
      {
        "id": "D",
        "text": "Delivers content globally with low latency using Edge Locations"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon CloudFront adalah Content Delivery Network (CDN) yang mendistribusikan cache konten via Edge Locations.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0260",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Why is AWS Systems Manager Session Manager preferred over SSH for connecting to EC2 instances?",
    "options": [
      {
        "id": "A",
        "text": "It automatically increases instance CPU performance"
      },
      {
        "id": "B",
        "text": "It applies OS security patches every hour"
      },
      {
        "id": "C",
        "text": "No need to open inbound port 22 and requires no public IP"
      },
      {
        "id": "D",
        "text": "It is the only method supported by Amazon Linux 2023"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Session Manager mengamankan remote shell tanpa membuka port 22 ke publik dan tanpa perlu IP publik pada instans.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0261",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which highly available and scalable cloud Domain Name System (DNS) web service is provided by AWS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "Amazon CloudFront"
      },
      {
        "id": "D",
        "text": "AWS Transit Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Route 53 adalah layanan DNS terkelola AWS yang menghubungkan nama domain ke resource IP AWS atau eksternal.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0262",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which fully managed NoSQL database service delivers single-digit millisecond performance at any scale?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS MySQL"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Aurora"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB adalah database NoSQL key-value serverless dengan latensi satu digit milidetik.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0263",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which database engine category is specifically managed by Amazon Relational Database Service (RDS)?",
    "options": [
      {
        "id": "A",
        "text": "Document and key-value databases"
      },
      {
        "id": "B",
        "text": "Graph databases"
      },
      {
        "id": "C",
        "text": "Relational (SQL) databases"
      },
      {
        "id": "D",
        "text": "Wide-column databases"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon RDS mengelola database relasional (SQL) seperti PostgreSQL, MySQL, MariaDB, Oracle, dan SQL Server.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0264",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS cloud service provides a petabyte-scale data warehouse for complex analytical SQL queries?",
    "options": [
      {
        "id": "A",
        "text": "Amazon ElastiCache"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon OpenSearch Service"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Redshift adalah cloud data warehouse terkelola untuk analisa data skala petabyte menggunakan SQL.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0265",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the standard IPv4 CIDR block commonly used for creating a custom private VPC?",
    "options": [
      {
        "id": "A",
        "text": "192.168.1.1/32"
      },
      {
        "id": "B",
        "text": "0.0.0.0/0"
      },
      {
        "id": "C",
        "text": "172.31.0.0/28"
      },
      {
        "id": "D",
        "text": "10.0.0.0/16"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "10.0.0.0/16 menyediakan hingga 65.536 IP address privat untuk segmentasi multi-subnet di VPC.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0266",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which serverless compute service lets you run code in response to events without provisioning servers?",
    "options": [
      {
        "id": "A",
        "text": "AWS Lambda"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "Amazon Lightsail"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Lambda menjalankan kode berbasis event tanpa perlu mengelola atau menyewa server virtual.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0267",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon EC2 pricing model provides the highest discount for fault-tolerant, interruptible workloads?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Spot Instances"
      },
      {
        "id": "C",
        "text": "Reserved Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Hosts"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Spot Instances menawarkan diskon hingga 90% dari harga On-Demand untuk workload fleksibel yang tahan interupsi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0268",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which pricing option offers significant savings in exchange for a committed 1-year or 3-year usage term?",
    "options": [
      {
        "id": "A",
        "text": "Spot Instances"
      },
      {
        "id": "B",
        "text": "On-Demand Instances"
      },
      {
        "id": "C",
        "text": "Savings Plans / Reserved Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Savings Plans dan Reserved Instances memberikan diskon besar atas komitmen pemakaian konstan 1 atau 3 tahun.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0269",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which high-performance block storage service is designed for persistent root volumes attached to Amazon EC2?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Amazon EFS"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Elastic Block Store (EBS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EBS menyediakan block-level storage persisten untuk root volume dan data disk instans EC2.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0270",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "How do you configure an EC2 Security Group to accept web traffic only from an Application Load Balancer?",
    "options": [
      {
        "id": "A",
        "text": "Set the HTTP inbound rule source to the ALB Security Group ID"
      },
      {
        "id": "B",
        "text": "Open port 80 to 0.0.0.0/0 with a restrictive NACL"
      },
      {
        "id": "C",
        "text": "Attach an Internet Gateway directly to the private subnet"
      },
      {
        "id": "D",
        "text": "Assign an Elastic IP address to each EC2 instance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Security Group Chaining dilakukan dengan mereferensikan ID Security Group ALB sebagai source pada inbound rule EC2.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0271",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service provides a shared, elastic file system accessible concurrently by multiple EC2 instances via NFS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic File System (EFS)"
      },
      {
        "id": "B",
        "text": "Amazon EBS"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "D",
        "text": "AWS Snowball"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EFS menyediakan file system berbasis NFS yang dapat di-mount bersamaan oleh ribuan instans EC2.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0272",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS messaging service uses a publish/subscribe (pub/sub) pattern to broadcast messages to subscribers?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SQS"
      },
      {
        "id": "B",
        "text": "Amazon Simple Notification Service (SNS)"
      },
      {
        "id": "C",
        "text": "Amazon MQ"
      },
      {
        "id": "D",
        "text": "AWS Step Functions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon SNS adalah layanan pub/sub yang mengirimkan pesan ke banyak subscriber (email, SMS, HTTP, SQS, Lambda).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0273",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS managed service provides message queuing to decouple and scale distributed microservices?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SNS"
      },
      {
        "id": "B",
        "text": "Amazon Kinesis"
      },
      {
        "id": "C",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "id": "D",
        "text": "Amazon EventBridge"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SQS adalah antrean pesan terkelola yang memungkinkan decoupling antarkomponen arsitektur aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0274",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS security service provides automatic protection against common Layer 3 and 4 DDoS attacks for free?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Shield Standard"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Shield Standard aktif secara default tanpa biaya tambahan untuk memitigasi serangan DDoS layer 3/4.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0275",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Why should production web architectures be deployed across at least two Availability Zones (Multi-AZ)?",
    "options": [
      {
        "id": "A",
        "text": "To cut compute operational costs by half"
      },
      {
        "id": "B",
        "text": "To achieve High Availability and datacenter fault tolerance"
      },
      {
        "id": "C",
        "text": "To automatically double local EBS storage capacity"
      },
      {
        "id": "D",
        "text": "Because AWS regulations require two active regions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Multi-AZ mendistribusikan beban kerja ke datacenter fisik terpisah guna mencegah downtime jika terjadi bencana di satu AZ.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0276",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service helps protect web applications by filtering HTTP/HTTPS traffic against SQL injection and XSS?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF (Web Application Firewall)"
      },
      {
        "id": "B",
        "text": "AWS Shield Standard"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "AWS KMS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS WAF memeriksa traffic layer 7 (HTTP/S) untuk memblokir eksploitasi web umum seperti SQL Injection dan XSS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0277",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which intelligent threat detection service analyzes VPC Flow Logs and DNS logs using machine learning?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon GuardDuty memantau aktivitas mencurigakan dan ancaman akun menggunakan machine learning pada audit logs.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0278",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which security service discovers and protects sensitive personal data (PII) stored in Amazon S3 buckets?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS KMS"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "AWS CloudHSM"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Macie menggunakan pattern matching dan ML untuk menemukan data sensitif (PII/kartu kredit) di bucket S3.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0279",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service is used to create, manage, and control cryptographic encryption keys across AWS services?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM"
      },
      {
        "id": "B",
        "text": "AWS Certificate Manager"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Key Management Service (KMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS KMS memudahkan pembuatan dan kontrol kunci kriptografi untuk mengenkripsi data di berbagai layanan AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0280",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which VPC component enables two-way communication between public subnets and the internet?",
    "options": [
      {
        "id": "A",
        "text": "Virtual Private Gateway (VGW)"
      },
      {
        "id": "B",
        "text": "NAT Instance"
      },
      {
        "id": "C",
        "text": "Internet Gateway (IGW)"
      },
      {
        "id": "D",
        "text": "VPC Endpoint"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Internet Gateway (IGW) berfungsi sebagai pintu gerbang komunikasi dua arah antara subnet publik dengan internet.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0281",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which is the lowest AWS Support tier that provides 24/7 access to Cloud Support Engineers via phone and chat?",
    "options": [
      {
        "id": "A",
        "text": "Business Support"
      },
      {
        "id": "B",
        "text": "Developer Support"
      },
      {
        "id": "C",
        "text": "Basic Support"
      },
      {
        "id": "D",
        "text": "Enterprise On-Ramp"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Business Support adalah level minimum yang memberikan akses 24x7 via telepon, chat, dan email.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0282",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which feature is exclusively provided to customers subscribed to the AWS Enterprise Support plan?",
    "options": [
      {
        "id": "A",
        "text": "Access to official AWS documentation"
      },
      {
        "id": "B",
        "text": "A designated Technical Account Manager (TAM)"
      },
      {
        "id": "C",
        "text": "Access to community discussion forums"
      },
      {
        "id": "D",
        "text": "Monthly billing statements"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Dedicated Technical Account Manager (TAM) adalah penasihat teknis eksklusif pada Enterprise Support plan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0283",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which online tool provides real-time guidance to help provision resources following AWS best practices?",
    "options": [
      {
        "id": "A",
        "text": "AWS Artifact"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Trusted Advisor memindai akun dan memberikan rekomendasi optimasi biaya, performa, keamanan, dan fault tolerance.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0284",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which no-cost self-service portal provides on-demand access to AWS security compliance reports and ISO certs?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "AWS Security Hub"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Artifact adalah portal resmi untuk mengunduh laporan kepatuhan (SOC, PCI) dan sertifikasi ISO AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0285",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the key state behavior difference between Security Groups and Network ACLs (NACLs)?",
    "options": [
      {
        "id": "A",
        "text": "Security Groups cannot evaluate outbound traffic"
      },
      {
        "id": "B",
        "text": "NACLs automatically permit return traffic"
      },
      {
        "id": "C",
        "text": "Security Groups operate strictly at the subnet level"
      },
      {
        "id": "D",
        "text": "Security Groups are stateful, while NACLs are stateless"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Security Group bersifat stateful (return traffic otomatis lolos), sedangkan NACL bersifat stateless.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0286",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which migration strategy moves applications to AWS without any code or architecture changes (Lift-and-Shift)?",
    "options": [
      {
        "id": "A",
        "text": "Rehost"
      },
      {
        "id": "B",
        "text": "Replatform"
      },
      {
        "id": "C",
        "text": "Refactor"
      },
      {
        "id": "D",
        "text": "Repurchase"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Rehost (dikenal sebagai Lift-and-Shift) memindahkan server/VM dari on-premises ke EC2 tanpa mengubah arsitektur atau kode aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0287",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A company moves a self-hosted on-premises database to Amazon RDS without modifying application code. This is:",
    "options": [
      {
        "id": "A",
        "text": "Rehost"
      },
      {
        "id": "B",
        "text": "Replatform"
      },
      {
        "id": "C",
        "text": "Refactor"
      },
      {
        "id": "D",
        "text": "Retire"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Replatform (Lift-Tinker-and-Shift) mengadopsi layanan terkelola cloud (seperti Amazon RDS) untuk menghemat biaya operasional tanpa mengubah core logic aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0288",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which migration strategy re-architects a legacy monolithic app into serverless microservices using AWS Lambda?",
    "options": [
      {
        "id": "A",
        "text": "Rehost"
      },
      {
        "id": "B",
        "text": "Replatform"
      },
      {
        "id": "C",
        "text": "Refactor (Re-architect)"
      },
      {
        "id": "D",
        "text": "Retain"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Refactor / Re-architect merombak arsitektur aplikasi secara fundamental menjadi arsitektur cloud-native modern (serverless, microservices) untuk skalabilitas maksimal.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0289",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A company abandons its legacy on-premise CRM and moves entirely to a third-party cloud SaaS solution. This is:",
    "options": [
      {
        "id": "A",
        "text": "Rehost"
      },
      {
        "id": "B",
        "text": "Replatform"
      },
      {
        "id": "C",
        "text": "Refactor"
      },
      {
        "id": "D",
        "text": "Repurchase (Drop-and-Shop)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Repurchase (Drop-and-Shop) adalah strategi beralih dari aplikasi custom ke produk software-as-a-service (SaaS) yang siap pakai.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0290",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which migration strategy keeps certain legacy applications on-premises due to recent investments or compliance?",
    "options": [
      {
        "id": "A",
        "text": "Retain (Revisit)"
      },
      {
        "id": "B",
        "text": "Rehost"
      },
      {
        "id": "C",
        "text": "Retire"
      },
      {
        "id": "D",
        "text": "Repurchase"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Retain mempertahankan aplikasi di lingkungan on-premises untuk ditinjau kembali di masa mendatang (karena compliance, lisensi, atau depresiasi aset).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0291",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A company finds legacy servers that are no longer needed by any application. Which 6R strategy applies?",
    "options": [
      {
        "id": "A",
        "text": "Retain"
      },
      {
        "id": "B",
        "text": "Retire"
      },
      {
        "id": "C",
        "text": "Rehost"
      },
      {
        "id": "D",
        "text": "Replatform"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Retire adalah strategi menonaktifkan atau mematikan resource dan aplikasi yang sudah tidak memberikan nilai bisnis (biasanya 10-20% portofolio).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0292",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What financial benefit does migrating from on-premises datacenters to the AWS Cloud provide?",
    "options": [
      {
        "id": "A",
        "text": "Higher upfront Capital Expenditure (CapEx)"
      },
      {
        "id": "B",
        "text": "Elimination of all operating costs"
      },
      {
        "id": "C",
        "text": "Trading capital expense (CapEx) for variable operational expense (OpEx)"
      },
      {
        "id": "D",
        "text": "Fixed long-term depreciation schedules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS memungkinkan perusahaan mengganti belanja modal besar di awal (CapEx) dengan biaya operasional variabel yang dibayar sesuai pemakaian (OpEx).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0293",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "How does AWS achieve lower pay-as-you-go prices for its customers over time?",
    "options": [
      {
        "id": "A",
        "text": "By increasing server hardware profit margins"
      },
      {
        "id": "B",
        "text": "By charging customers mandatory upfront fees"
      },
      {
        "id": "C",
        "text": "By limiting resource availability per region"
      },
      {
        "id": "D",
        "text": "By passing massive economies of scale back to customers"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Agregasi ratusan ribu pelanggan memungkinkan AWS mencapai skala ekonomi masif (economies of scale) dan menurunkan harga secara berkala.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0294",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which architecture concept ensures zero downtime by running redundant components with zero disruption during failures?",
    "options": [
      {
        "id": "A",
        "text": "Fault Tolerance"
      },
      {
        "id": "B",
        "text": "High Availability"
      },
      {
        "id": "C",
        "text": "Elasticity"
      },
      {
        "id": "D",
        "text": "Scalability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Fault Tolerance menjamin ketersediaan sistem tanpa downtime sama sekali (zero disruption) melalui redundansi penuh, berbeda dengan HA yang menoleransi degradasi minor.",
    "difficulty": "Sulit",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0295",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which framework guides organizations to accelerate cloud transformation across 6 business/technical perspectives?",
    "options": [
      {
        "id": "A",
        "text": "AWS Well-Architected Tool"
      },
      {
        "id": "B",
        "text": "AWS Cloud Adoption Framework (AWS CAF)"
      },
      {
        "id": "C",
        "text": "AWS Migration Evaluator"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CAF mengorganisir panduan transformasi cloud ke dalam 6 perspektif: Business, People, Governance, Platform, Security, dan Operations.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0296",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Well-Architected pillar focuses on recovering workloads dynamically from failures and testing recovery?",
    "options": [
      {
        "id": "A",
        "text": "Performance Efficiency"
      },
      {
        "id": "B",
        "text": "Operational Excellence"
      },
      {
        "id": "C",
        "text": "Reliability"
      },
      {
        "id": "D",
        "text": "Sustainability"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Pilar Reliability berfokus pada ketahanan sistem dalam pulih dari kegagalan infrastruktur dan mengotomatiskan prosedur pemulihan bencana.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0297",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS Well-Architected Framework pillar focuses on minimizing environmental impacts of running cloud workloads?",
    "options": [
      {
        "id": "A",
        "text": "Cost Optimization"
      },
      {
        "id": "B",
        "text": "Operational Excellence"
      },
      {
        "id": "C",
        "text": "Reliability"
      },
      {
        "id": "D",
        "text": "Sustainability"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pilar Sustainability berfokus pada efisiensi energi dan pengurangan dampak jejak karbon lingkungan dari penggunaan resource cloud.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0298",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Under the Shared Responsibility Model for Amazon RDS, which task is the customer responsible for?",
    "options": [
      {
        "id": "A",
        "text": "Database user authentication and network firewall access rules"
      },
      {
        "id": "B",
        "text": "Patching the underlying operating system of the database"
      },
      {
        "id": "C",
        "text": "Performing physical server hardware maintenance"
      },
      {
        "id": "D",
        "text": "Managing physical disk replacements in the datacenter"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pada Amazon RDS (layanan terkelola), AWS mengurus OS dan hardware. Pelanggan bertanggung jawab atas autentikasi user database dan konfigurasi Security Group.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0299",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Granting users only the minimum permissions necessary to perform their specific job functions follows which principle?",
    "options": [
      {
        "id": "A",
        "text": "Defense in Depth"
      },
      {
        "id": "B",
        "text": "Principle of Least Privilege"
      },
      {
        "id": "C",
        "text": "Separation of Duties"
      },
      {
        "id": "D",
        "text": "Root Account Delegation"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Prinsip Least Privilege mewajibkan pemberian izin akses seminimal mungkin yang diperlukan untuk menjalankan tugas pekerjaan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0300",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the recommended secure method for an EC2 instance to access an S3 bucket without embedding credentials?",
    "options": [
      {
        "id": "A",
        "text": "Store IAM root access keys in a text file on the EC2 instance"
      },
      {
        "id": "B",
        "text": "Hardcode IAM user secret keys inside the application code"
      },
      {
        "id": "C",
        "text": "Attach an IAM Role with an S3 policy to the EC2 instance"
      },
      {
        "id": "D",
        "text": "Open the S3 bucket policy to public anonymous read access"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "IAM Role menggunakan kredensial temporer via STS yang di-rotate otomatis oleh AWS, menghilangkan risiko penyimpanan hardcoded credentials pada server.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0301",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS security service inspects web traffic at Layer 7 to block Cross-Site Scripting (XSS) and SQL Injection?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield Standard"
      },
      {
        "id": "B",
        "text": "Security Group"
      },
      {
        "id": "C",
        "text": "Network ACL"
      },
      {
        "id": "D",
        "text": "AWS WAF"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS WAF adalah Web Application Firewall yang beroperasi di Layer 7 (HTTP/HTTPS) untuk mendeteksi dan memblokir serangan aplikasi web seperti SQLi dan XSS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0302",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which threat detection service uses machine learning to identify unauthorized crypto-mining or compromised credentials?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang memantau VPC Flow Logs, DNS logs, dan CloudTrail event menggunakan machine learning.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0303",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which automated security assessment service scans EC2 instances and container images for software vulnerabilities?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Inspector memindai beban kerja EC2 dan image container (ECR) secara otomatis untuk menemukan kerentanan perangkat lunak (CVE) dan paparan jaringan.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0304",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which security service uses machine learning and pattern matching to discover sensitive data (PII) in Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "Amazon Macie"
      },
      {
        "id": "D",
        "text": "AWS Shield"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Macie adalah layanan perlindungan privasi data yang memindai objek S3 untuk menemukan Personally Identifiable Information (PII) dan kredensial.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0305",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS managed service creates and controls cryptographic keys used to encrypt data at rest across AWS services?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "AWS Certificate Manager"
      },
      {
        "id": "D",
        "text": "AWS Key Management Service (KMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS KMS adalah layanan terkelola untuk membuat dan mengontrol cryptographic keys (KMS keys) guna enkripsi data at rest.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0306",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service should you choose if you need automatic lifecycle rotation for database credentials on Amazon RDS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager Parameter Store"
      },
      {
        "id": "C",
        "text": "AWS Key Management Service (KMS)"
      },
      {
        "id": "D",
        "text": "Amazon Cognito"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Secrets Manager memiliki fitur bawaan untuk melakukan rotasi kredensial database (RDS/Redshift) secara otomatis terjadwal menggunakan Lambda.",
    "difficulty": "Sulit",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0307",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Where can an auditor download AWS SOC reports, PCI DSS compliance agreements, and ISO certifications on demand?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "AWS Artifact"
      },
      {
        "id": "C",
        "text": "AWS Security Hub"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Artifact adalah portal mandiri gratis untuk mengunduh laporan audit kepatuhan keamanan resmi dan sertifikasi regulasi AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0308",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which feature of AWS Organizations establishes central permission guardrails across member accounts?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role Policies"
      },
      {
        "id": "B",
        "text": "Resource Access Manager"
      },
      {
        "id": "C",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "D",
        "text": "VPC Peering Connections"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Service Control Policies (SCPs) menetapkan batas izin maksimum (guardrails) bagi seluruh user dan role pada member accounts dalam AWS Organizations.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0309",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A security analyst needs to determine who deleted an S3 bucket yesterday. Which AWS service provides this log record?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch Metrics"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "VPC Flow Logs"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS CloudTrail mencatat detail lengkap setiap panggilan API akun (siapa, kapan, IP mana, dan tindakan apa seperti DeleteBucket).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0310",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service continuously tracks configuration changes and evaluates compliance against desired baseline rules?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Config memantau dan mencatat riwayat konfigurasi resource AWS serta mengevaluasi apakah resource patuh terhadap compliance rules.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0311",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which tier of AWS Shield provides 24/7 access to the DDoS Response Team (DRT) and cost protection against DDoS spikes?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield Standard"
      },
      {
        "id": "B",
        "text": "AWS Shield Advanced"
      },
      {
        "id": "C",
        "text": "AWS WAF Pro"
      },
      {
        "id": "D",
        "text": "AWS Network Firewall"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Shield Advanced menyediakan proteksi komprehensif, akses langsung 24x7 ke DDoS Response Team (DRT), dan perlindungan lonjakan biaya tagihan akibat serangan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0312",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "If you add an inbound allow rule on a Security Group, what happens to the corresponding outbound return traffic?",
    "options": [
      {
        "id": "A",
        "text": "It is blocked unless you explicitly add an outbound rule"
      },
      {
        "id": "B",
        "text": "It must be evaluated by a Network ACL rule first"
      },
      {
        "id": "C",
        "text": "It is automatically allowed because Security Groups are stateful"
      },
      {
        "id": "D",
        "text": "It is dropped if the port is different"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Security Group bersifat stateful: jika lalu lintas masuk (inbound) diizinkan, lalu lintas balasan (outbound) secara otomatis diizinkan lolos.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0313",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What defines a public subnet compared to a private subnet inside an Amazon VPC?",
    "options": [
      {
        "id": "A",
        "text": "Public subnets do not use Security Groups"
      },
      {
        "id": "B",
        "text": "Public subnets only support Linux operating systems"
      },
      {
        "id": "C",
        "text": "Public subnets span across multiple AWS regions"
      },
      {
        "id": "D",
        "text": "Public subnets have a direct route to an Internet Gateway (0.0.0.0/0)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Subnet didefinisikan sebagai publik apabila route table-nya memiliki rute tujuan 0.0.0.0/0 yang mengarah ke Internet Gateway (IGW).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0314",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which global infrastructure component does Amazon CloudFront use to cache content closer to end-users worldwide?",
    "options": [
      {
        "id": "A",
        "text": "Edge Locations"
      },
      {
        "id": "B",
        "text": "Availability Zones"
      },
      {
        "id": "C",
        "text": "Regional VPCs"
      },
      {
        "id": "D",
        "text": "Local Outposts"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "CloudFront memanfaatkan jaringan Edge Locations global yang tersebar di ratusan kota dunia untuk menyimpan cache data di dekat pengguna.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0315",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service helps migrate relational databases to AWS with minimal downtime while keeping the source DB operational?",
    "options": [
      {
        "id": "A",
        "text": "AWS DataSync"
      },
      {
        "id": "B",
        "text": "AWS Database Migration Service (AWS DMS)"
      },
      {
        "id": "C",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "D",
        "text": "AWS Application Migration Service"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS DMS mereplikasi data secara continuous dari database on-premises ke AWS dengan downtime mendekati nol selama proses migrasi berlangsung.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0316",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which primary AWS service automates lift-and-shift server migrations (Rehost) from physical, virtual, or other clouds?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowmobile"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS Application Migration Service (AWS MGN)"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS MGN adalah layanan utama AWS untuk otomatisasi migrasi Rehost (lift-and-shift) berbasis blok dari server fisik, VMware, atau cloud lain ke EC2.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0317",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which device transfers up to 80 TB of data securely to AWS when network bandwidth is slow or unavailable?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "AWS DataSync"
      },
      {
        "id": "D",
        "text": "AWS Snowball Edge Storage Optimized"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Snowball Edge adalah perangkat fisik tahan guncangan untuk memindahkan puluhan terabyte data offline ke AWS tanpa menghabiskan bandwidth internet.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0318",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which characteristic best describes AWS Lambda serverless computing?",
    "options": [
      {
        "id": "A",
        "text": "You only pay for the execution compute time consumed by your code"
      },
      {
        "id": "B",
        "text": "You must pre-allocate and reserve dedicated virtual CPU cores"
      },
      {
        "id": "C",
        "text": "You are responsible for guest operating system security patches"
      },
      {
        "id": "D",
        "text": "Instances run continuously 24/7 regardless of incoming requests"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dengan model serverless Lambda, pengguna tidak mengelola server dan hanya membayar durasi waktu komputasi saat fungsi dijalankan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0319",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A team wants to run Docker containers on AWS using open-source Kubernetes tooling. Which service should they choose?",
    "options": [
      {
        "id": "A",
        "text": "Amazon ECS"
      },
      {
        "id": "B",
        "text": "Amazon EKS (Elastic Kubernetes Service)"
      },
      {
        "id": "C",
        "text": "AWS Fargate"
      },
      {
        "id": "D",
        "text": "AWS App Runner"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon EKS adalah layanan Kubernetes terkelola bersertifikat CNCF yang kompatibel penuh dengan tooling standar ekosistem Kubernetes.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0320",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which serverless compute engine works with Amazon ECS and EKS to run containers without managing underlying EC2 servers?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "Amazon Lightsail"
      },
      {
        "id": "C",
        "text": "AWS Fargate"
      },
      {
        "id": "D",
        "text": "AWS Outposts"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Fargate adalah serverless compute engine untuk kontainer yang menghilangkan kebutuhan provisioning dan pengelolaan instans EC2 host.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0321",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service lets you model, provision, and version AWS resources declaratively using JSON or YAML templates?",
    "options": [
      {
        "id": "A",
        "text": "AWS OpsWorks"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager"
      },
      {
        "id": "C",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "D",
        "text": "AWS CloudFormation"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS CloudFormation adalah layanan Infrastructure as Code (IaC) native AWS untuk membuat dan mengelola resource via template JSON/YAML.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0322",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "How can an organization automatically move older S3 objects to S3 Glacier Deep Archive after 90 days?",
    "options": [
      {
        "id": "A",
        "text": "Configure an S3 Lifecycle rule"
      },
      {
        "id": "B",
        "text": "Enable S3 Versioning"
      },
      {
        "id": "C",
        "text": "Set up an S3 Event Notification"
      },
      {
        "id": "D",
        "text": "Use S3 Cross-Region Replication"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "S3 Lifecycle management memungkinkan aturan transisi otomatis antartingkat penyimpanan (misal Standard ke Glacier) berdasarkan usia objek.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0323",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service seamlessly connects on-premises applications with AWS cloud storage via standard file/volume protocols?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "AWS Transfer Family"
      },
      {
        "id": "D",
        "text": "Amazon EFS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Storage Gateway menyediakan integrasi hybrid storage yang menghubungkan aplikasi on-premises ke penyimpanan cloud AWS tanpa batas.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0324",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS messaging service provides a fully managed buffer queue to decouple interdependent microservices components?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SNS"
      },
      {
        "id": "B",
        "text": "Amazon Kinesis"
      },
      {
        "id": "C",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "id": "D",
        "text": "Amazon EventBridge"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon SQS adalah antrean pesan terkelola yang berfungsi sebagai penyangga (buffer) untuk mendecouple komponen sistem terdistribusi.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0325",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which relational database engine developed by AWS is MySQL and PostgreSQL-compatible with up to 5x higher throughput?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "D",
        "text": "Amazon Aurora"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Aurora adalah cloud-native relational database engine berkinerja tinggi yang kompatibel penuh dengan MySQL dan PostgreSQL.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0326",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service can automatically trigger an Auto Scaling policy when average EC2 CPU utilization exceeds 80%?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch Alarms"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail Insights"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon CloudWatch Alarms memantau metrik performa dan dapat langsung memicu aksi seperti Auto Scaling policy atau notifikasi SNS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0327",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which IAM policy must be attached to an EC2 instance role to enable AWS Systems Manager Session Manager access?",
    "options": [
      {
        "id": "A",
        "text": "AdministratorAccess"
      },
      {
        "id": "B",
        "text": "AmazonSSMManagedInstanceCore"
      },
      {
        "id": "C",
        "text": "AWSCloudTrail_FullAccess"
      },
      {
        "id": "D",
        "text": "AmazonEC2FullAccess"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AmazonSSMManagedInstanceCore adalah policy terkelola resmi yang memberikan izin dasar bagi agent SSM untuk terhubung ke endpoint Systems Manager.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0328",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is the minimum number of Availability Zones required to ensure High Availability for an Application Load Balancer?",
    "options": [
      {
        "id": "A",
        "text": "1 Availability Zone"
      },
      {
        "id": "B",
        "text": "4 Availability Zones"
      },
      {
        "id": "C",
        "text": "At least 2 Availability Zones"
      },
      {
        "id": "D",
        "text": "Must be deployed across 2 separate Regions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Application Load Balancer mewajibkan pemilihan subnet minimal di 2 Availability Zone yang berbeda untuk menjamin ketersediaan tinggi.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0329",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which type of Elastic Load Balancer routes traffic based on HTTP request content such as URL paths (/images or /orders)?",
    "options": [
      {
        "id": "A",
        "text": "Network Load Balancer (NLB)"
      },
      {
        "id": "B",
        "text": "Gateway Load Balancer (GWLB)"
      },
      {
        "id": "C",
        "text": "Classic Load Balancer (CLB)"
      },
      {
        "id": "D",
        "text": "Application Load Balancer (ALB)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Application Load Balancer (ALB) beroperasi pada Layer 7 (Application layer) dan mendukung routing canggih berbasis path URL dan host header.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0330",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which EC2 pricing model offers up to 90% discount for batch jobs that can tolerate unexpected interruptions?",
    "options": [
      {
        "id": "A",
        "text": "Spot Instances"
      },
      {
        "id": "B",
        "text": "On-Demand Instances"
      },
      {
        "id": "C",
        "text": "Reserved Instances"
      },
      {
        "id": "D",
        "text": "Dedicated Hosts"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Spot Instances memanfaatkan kapasitas komputasi cadangan AWS dengan diskon hingga 90%, cocok untuk batch processing yang tahan interupsi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0331",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which flexible pricing model offers large discounts in exchange for a committed hourly compute spend ($/hr)?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Pricing"
      },
      {
        "id": "B",
        "text": "Compute Savings Plans"
      },
      {
        "id": "C",
        "text": "Spot Fleet Pricing"
      },
      {
        "id": "D",
        "text": "Dedicated Instance Allowance"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Savings Plans memberikan fleksibilitas diskon besar dengan komitmen penggunaan komputasi stabil (diukur dalam $/jam) selama 1 atau 3 tahun.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0332",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which tool sends alerts before actual costs exceed budget by evaluating forecasted monthly spending trends?",
    "options": [
      {
        "id": "A",
        "text": "Cost and Usage Report"
      },
      {
        "id": "B",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "C",
        "text": "AWS Budgets"
      },
      {
        "id": "D",
        "text": "AWS Billing Conductor"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Budgets mendukung evaluasi terhadap actual spend maupun forecasted spend untuk membunyikan alarm sebelum tagihan membengkak.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0333",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS billing tool provides interactive charts to visualize, understand, and forecast your historical AWS spending?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "AWS Cost Explorer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Cost Explorer memungkinkan pengguna menganalisis grafik pengeluaran historis hingga 12 bulan ke belakang dan memproyeksikan biaya ke depan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0334",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which feature is uniquely provided to customers on the AWS Enterprise Support plan?",
    "options": [
      {
        "id": "A",
        "text": "A dedicated Technical Account Manager (TAM)"
      },
      {
        "id": "B",
        "text": "Access to the AWS Discussion Forums"
      },
      {
        "id": "C",
        "text": "Access to 7 core Trusted Advisor checks"
      },
      {
        "id": "D",
        "text": "Ability to open support cases via web browser"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Technical Account Manager (TAM) adalah penasihat teknis khusus yang mendampingi operasional arsitektur hanya pada Enterprise Support plan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0335",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "What is an advantage of using Consolidated Billing through AWS Organizations?",
    "options": [
      {
        "id": "A",
        "text": "Guaranteed free Enterprise Support for all accounts"
      },
      {
        "id": "B",
        "text": "Volume discount sharing across all linked accounts"
      },
      {
        "id": "C",
        "text": "Automatic encryption of all S3 buckets"
      },
      {
        "id": "D",
        "text": "Elimination of all data transfer fees between regions"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Consolidated Billing menggabungkan pemakaian dari seluruh linked accounts sehingga kuota tiering volume discount (misal S3 data tiering) lebih cepat tercapai.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0336",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud computing advantage allows deploying applications globally in minutes with minimal latency?",
    "options": [
      {
        "id": "A",
        "text": "Go global in minutes"
      },
      {
        "id": "B",
        "text": "Stop guessing capacity"
      },
      {
        "id": "C",
        "text": "Benefit from massive economies of scale"
      },
      {
        "id": "D",
        "text": "Trade capital expense for variable expense"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Go global in minutes dipilih karena keunggulan cloud ini memungkinkan deployment aplikasi ke berbagai AWS Region dan Edge Location di seluruh dunia hanya dalam hitungan menit untuk meminimalkan latensi pengguna global.\n\nKenapa opsi lain salah:\n• Opsi B (Stop guessing capacity): Stop guessing capacity berkaitan dengan penskalaan elastis sesuai kebutuhan beban kerja nyata, bukan deployment global.\n• Opsi C (Benefit from massive economies of scale): Benefit from massive economies of scale merujuk pada penurunan biaya layanan cloud berkat jutaan pelanggan agregat AWS.\n• Opsi D (Trade capital expense for variable expense): Trade capital expense for variable expense berkaitan dengan peralihan model finansial dari CapEx ke OpEx, bukan jangkauan global.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0337",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on skills, organizational structure, and culture?",
    "options": [
      {
        "id": "A",
        "text": "Business perspective"
      },
      {
        "id": "B",
        "text": "People perspective"
      },
      {
        "id": "C",
        "text": "Governance perspective"
      },
      {
        "id": "D",
        "text": "Platform perspective"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "People perspective dipilih karena perspektif ini dalam AWS CAF berfokus pada kesiapan talenta, pelatihan keterampilan, manajemen perubahan budaya organisasi, dan struktur tim cloud.\n\nKenapa opsi lain salah:\n• Opsi A (Business perspective): Business perspective berfokus pada penyelarasan investasi cloud dengan strategi dan model bisnis organisasi.\n• Opsi C (Governance perspective): Governance perspective berfokus pada orkestrasi program cloud, manajemen risiko, dan tata kelola portfolio.\n• Opsi D (Platform perspective): Platform perspective berfokus pada arsitektur teknis, pola arsitektur cloud, dan modernisasi infrastruktur.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0338",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud computing model retains full customer control over the operating system, runtime, and virtualization?",
    "options": [
      {
        "id": "A",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "D",
        "text": "Function as a Service (FaaS)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Infrastructure as a Service (IaaS) dipilih karena memberikan tingkat kontrol paling tinggi kepada pelanggan atas OS, storage, dan virtual networking, sementara hardware fisik dikelola oleh AWS.\n\nKenapa opsi lain salah:\n• Opsi A (Software as a Service (SaaS)): Software as a Service (SaaS) sepenuhnya dikelola penyedia pihak ketiga (misal Salesforce, Microsoft 365); pelanggan hanya pengguna akhir.\n• Opsi B (Platform as a Service (PaaS)): Platform as a Service (PaaS) mengabstraksi OS dan runtime; pelanggan hanya mengelola kode aplikasi dan konfigurasi (misal AWS Elastic Beanstalk).\n• Opsi D (Function as a Service (FaaS)): Function as a Service (FaaS) atau serverless hanya meminta pelanggan mengunggah potongan fungsi/kode tanpa akses OS sama sekali (misal AWS Lambda).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0339",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which design principle suggests components function independently without cascading failure?",
    "options": [
      {
        "id": "A",
        "text": "Monolithic design"
      },
      {
        "id": "B",
        "text": "Tight coupling"
      },
      {
        "id": "C",
        "text": "Single point of failure"
      },
      {
        "id": "D",
        "text": "Loose coupling (Decoupling)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Loose coupling (Decoupling) dipilih karena prinsip desain ini memisahkan dependensi antar komponen (misalnya menggunakan Amazon SQS atau SNS) sehingga kegagalan satu komponen tidak menyebabkan seluruh sistem tumbang.\n\nKenapa opsi lain salah:\n• Opsi A (Monolithic design): Monolithic design menggabungkan seluruh komponen dalam satu basis kode dan proses tunggal yang saling bergantung erat.\n• Opsi B (Tight coupling): Tight coupling membuat komponen sangat terikat; jika satu komponen bermasalah, komponen lain langsung ikut gagal.\n• Opsi C (Single point of failure): Single point of failure adalah kelemahan arsitektur di mana kegagalan satu elemen kritis dapat meruntuhkan seluruh sistem.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0340",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Under the AWS Shared Responsibility Model, which security task is the customer responsible for on Amazon EC2?",
    "options": [
      {
        "id": "A",
        "text": "Patching guest operating systems and installed software"
      },
      {
        "id": "B",
        "text": "Decommissioning defective physical hard disk drives"
      },
      {
        "id": "C",
        "text": "Upgrading physical virtualization hypervisor firmware"
      },
      {
        "id": "D",
        "text": "Maintaining physical perimeter security of datacenters"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Patching guest OS dipilih karena pada model IaaS (EC2), pelanggan memegang kendali penuh dan tanggung jawab penuh (Security IN the Cloud) atas sistem operasi tamu, konfigurasi firewall, dan aplikasi yang diinstal.\n\nKenapa opsi lain salah:\n• Opsi B (Decommissioning defective physical hard disk drives): Decommissioning hard drive fisik adalah tanggung jawab AWS (Security OF the Cloud) pada fasilitas datacenter fisik mereka.\n• Opsi C (Upgrading physical virtualization hypervisor firmware): Upgrading hypervisor dan firmware virtualisasi fisik adalah tanggung jawab infrastruktur dasar AWS.\n• Opsi D (Maintaining physical perimeter security of datacenters): Keamanan fisik perimeter fasilitas datacenter (pagar, CCTV, satpam) sepenuhnya merupakan tanggung jawab AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0341",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service provides intelligent threat detection by monitoring DNS logs, VPC Flow Logs, and CloudTrail?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Macie"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS Shield"
      },
      {
        "id": "D",
        "text": "Amazon Inspector"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon GuardDuty dipilih karena merupakan layanan intelligent threat detection berbasis machine learning yang menganalisis VPC Flow Logs, DNS Query Logs, dan AWS CloudTrail Event Logs untuk mendeteksi aktivitas mencurigakan.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Macie): Amazon Macie berfokus pada penemuan dan perlindungan data sensitif (PII) di S3, bukan deteksi ancaman jaringan multi-log.\n• Opsi C (AWS Shield): AWS Shield adalah layanan proteksi terkelola terhadap serangan Distributed Denial of Service (DDoS) di Layer 3/4 dan Layer 7.\n• Opsi D (Amazon Inspector): Amazon Inspector memindai kerentanan software (CVE) pada EC2 dan container image ECR, bukan deteksi ancaman realtime berbasis log.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0342",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which service automatically scans Amazon EC2 instances and ECR container images for software vulnerabilities?",
    "options": [
      {
        "id": "A",
        "text": "AWS GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Inspector dipilih karena dirancang khusus untuk memindai kerentanan software (CVE) dan paparan jaringan yang tidak diinginkan pada instance EC2 dan container images di Amazon ECR.\n\nKenapa opsi lain salah:\n• Opsi A (AWS GuardDuty): AWS GuardDuty memantau aktivitas mencurigakan dan ancaman tak dikenal dari log, bukan scanner kerentanan CVE pada host.\n• Opsi B (AWS WAF): AWS WAF memfilter request HTTP/HTTPS masuk pada Layer 7 untuk melindungi web app dari SQLi/XSS, bukan scanner sistem.\n• Opsi D (AWS Security Hub): AWS Security Hub adalah dasbor pusat agregasi temuan keamanan dari berbagai layanan (GuardDuty, Inspector, Macie).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0343",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which security service uses machine learning to discover and protect sensitive personal data (PII) in Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS KMS"
      },
      {
        "id": "D",
        "text": "Amazon Macie"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Macie dipilih karena memanfaatkan machine learning untuk mengidentifikasi dan memproteksi data sensitif seperti Personally Identifiable Information (PII) dan nomor kartu kredit yang tersimpan di Amazon S3.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon GuardDuty): Amazon GuardDuty memantau anomali jaringan dan akun, bukan memeriksa isi konten data objek di dalam S3.\n• Opsi B (Amazon Inspector): Amazon Inspector menganalisis kerentanan CVE pada sistem operasi EC2 dan container, bukan klasifikasi konten S3.\n• Opsi C (AWS KMS): AWS KMS mengenkripsi data menggunakan kunci kriptografi, bukan mencari atau mengklasifikasikan data personal (PII).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0344",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which web application firewall service lets you create rules to block common web exploits like SQL injection and XSS?",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF"
      },
      {
        "id": "B",
        "text": "AWS Shield Advanced"
      },
      {
        "id": "C",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "D",
        "text": "Network ACL (NACL)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS WAF dipilih karena beroperasi di Layer 7 (HTTP/HTTPS) untuk memfilter request dan memblokir serangan exploit web umum seperti SQL Injection (SQLi) dan Cross-Site Scripting (XSS).\n\nKenapa opsi lain salah:\n• Opsi B (AWS Shield Advanced): AWS Shield Advanced berfokus pada mitigasi serangan DDoS skala besar (Layer 3/4 dan Layer 7), bukan inspeksi granular aturan SQLi/XSS aplikasi.\n• Opsi C (Amazon GuardDuty): Amazon GuardDuty mendeteksi ancaman akun dan anomali jaringan, bukan web application firewall yang memblokir request HTTP.\n• Opsi D (Network ACL (NACL)): Network ACL (NACL) adalah firewall stateless di level subnet yang menyaring IP/port Layer 4, tidak dapat memeriksa payload HTTP Layer 7.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0345",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS managed service creates and controls cryptographic encryption keys used across AWS services?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudHSM"
      },
      {
        "id": "B",
        "text": "AWS Key Management Service (AWS KMS)"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager (ACM)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) dipilih karena merupakan layanan terkelola multi-tenant untuk membuat dan mengelola kunci enkripsi kriptografis (KMS keys) yang terintegrasi di seluruh ekosistem AWS.\n\nKenapa opsi lain salah:\n• Opsi A (AWS CloudHSM): AWS CloudHSM menyediakan dedicated hardware security module (FIPS 140-2 Level 3) single-tenant berbiaya tinggi, bukan multi-tenant terkelola.\n• Opsi C (AWS Secrets Manager): AWS Secrets Manager menyimpan kredensial dan secret serta mendukung rotasi otomatis, namun enkripsinya tetap menggunakan kunci dari KMS.\n• Opsi D (AWS Certificate Manager (ACM)): AWS Certificate Manager (ACM) mengelola dan memprovisi sertifikat SSL/TLS untuk HTTPS, bukan kunci enkripsi data serbaguna.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0346",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service helps manage, retrieve, and automatically rotate database credentials, API keys, and secrets?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager Parameter Store"
      },
      {
        "id": "C",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "D",
        "text": "AWS IAM"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Secrets Manager dipilih karena memiliki fitur bawaan untuk melakukan automatic lifecycle rotation pada kredensial database (seperti Amazon RDS) tanpa downtime aplikasi.\n\nKenapa opsi lain salah:\n• Opsi A (AWS KMS): AWS KMS mengelola kunci enkripsi kriptografis, tetapi tidak menyimpan secret string atau menangani rotasi password database otomatis.\n• Opsi B (AWS Systems Manager Parameter Store): Systems Manager Parameter Store menyimpan konfigurasi dan string rahasia sederhana, tetapi tidak memiliki fitur rotasi password otomatis bawaan untuk RDS.\n• Opsi D (AWS IAM): AWS IAM mengelola otorisasi dan identitas pengguna AWS, bukan kredensial database relasional aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0347",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Where can a compliance officer download AWS security and compliance reports (such as SOC and PCI reports) on demand?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "AWS Security Hub"
      },
      {
        "id": "D",
        "text": "AWS Artifact"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Artifact dipilih karena merupakan portal swalayan tanpa biaya untuk mengunduh laporan audit kepatuhan resmi AWS (SOC 1/2/3, PCI DSS) dan menyetujui perjanjian compliance.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Trusted Advisor): AWS Trusted Advisor memberikan rekomendasi best practices seputar biaya, performa, dan keamanan, bukan portal unduh dokumen audit.\n• Opsi B (AWS Config): AWS Config mencatat perubahan histori konfigurasi resource, bukan repositori sertifikat compliance dan NDA.\n• Opsi C (AWS Security Hub): AWS Security Hub mengagregasi temuan keamanan dan skor compliance teknis, bukan penyedia dokumen audit resmi AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0348",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service records configuration changes and evaluates resource configurations against compliance rules?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Config dipilih karena berfungsi merekam riwayat perubahan konfigurasi resource secara berkelanjutan dan mengevaluasi kesesuaian konfigurasi terhadap aturan compliance (rule evaluation).\n\nKenapa opsi lain salah:\n• Opsi B (AWS CloudTrail): AWS CloudTrail mencatat riwayat panggilan API (siapa melakukan apa), bukan melacak konfigurasi internal resource atau aturan compliance.\n• Opsi C (Amazon CloudWatch): Amazon CloudWatch mengumpulkan metrik performa (CPU, RAM, disk) dan log aplikasi secara real-time, bukan mengevaluasi konfigurasi compliance.\n• Opsi D (AWS Trusted Advisor): AWS Trusted Advisor memberikan rekomendasi optimasi secara berkala, bukan continuous tracking rule evaluation konfigurasi resource.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0349",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service enables multi-factor authentication (MFA) and granular permissions for identity governance?",
    "options": [
      {
        "id": "A",
        "text": "AWS Directory Service"
      },
      {
        "id": "B",
        "text": "AWS Identity and Access Management (IAM)"
      },
      {
        "id": "C",
        "text": "Amazon Cognito"
      },
      {
        "id": "D",
        "text": "AWS Organizations"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS IAM dipilih karena merupakan layanan manajemen identitas pusat untuk mengatur user, group, role, kebijakan akses (policies), dan pemberlakuan Multi-Factor Authentication (MFA).\n\nKenapa opsi lain salah:\n• Opsi A (AWS Directory Service): AWS Directory Service menghubungkan atau meng-host direktori Microsoft Active Directory, bukan layanan identitas bawaan AWS IAM.\n• Opsi C (Amazon Cognito): Amazon Cognito ditujukan untuk autentikasi user aplikasi web/mobile konsumen (customer identity), bukan identitas admin/developer internal akun AWS.\n• Opsi D (AWS Organizations): AWS Organizations mengelola struktur multi-akun dan billing terpusat, bukan tempat mendefinisikan user IAM dan otentikasi MFA pengguna.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0350",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service provides simple and secure user sign-up, sign-in, and access control for mobile and web applications?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM"
      },
      {
        "id": "B",
        "text": "AWS Organizations"
      },
      {
        "id": "C",
        "text": "Amazon Cognito"
      },
      {
        "id": "D",
        "text": "AWS Single Sign-On"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Cognito dipilih karena dirancang khusus untuk menangani autentikasi pengguna akhir (customer identity pools & user pools), pendaftaran, dan login via social identity providers (Google, Facebook, Apple).\n\nKenapa opsi lain salah:\n• Opsi A (AWS IAM): AWS IAM mengelola akses internal operator/developer ke console dan API AWS, bukan end-user konsumen aplikasi.\n• Opsi B (AWS Organizations): AWS Organizations mengatur hierarki akun AWS perusahaan, bukan otentikasi pendaftaran pengguna akhir aplikasi.\n• Opsi D (AWS Single Sign-On): AWS IAM Identity Center (dulu Single Sign-On) mengelola akses SSO internal karyawan ke multi-akun AWS dan aplikasi bisnis.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0351",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which feature prevents member accounts in an organization from deleting CloudTrail logs, even by root users?",
    "options": [
      {
        "id": "A",
        "text": "IAM Permission Boundaries"
      },
      {
        "id": "B",
        "text": "Consolidated Billing tags"
      },
      {
        "id": "C",
        "text": "IAM Resource-based policies"
      },
      {
        "id": "D",
        "text": "Service Control Policies (SCPs)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Service Control Policies (SCPs) dipilih karena merupakan guardrail pusat di AWS Organizations yang mampu membatasi aksi akun anggota, termasuk menolak (deny) penghapusan CloudTrail trails bahkan oleh root user akun anggota sekalipun.\n\nKenapa opsi lain salah:\n• Opsi A (IAM Permission Boundaries): IAM Permission Boundaries membatasi izin maksimum yang dapat dimiliki oleh IAM user atau role, bukan kebijakan di tingkat AWS Organizations.\n• Opsi B (Consolidated Billing tags): Consolidated Billing tags digunakan untuk pelacakan alokasi biaya penagihan terpusat, bukan kontrol izin keamanan.\n• Opsi C (IAM Resource-based policies): IAM Resource-based policies dipasang langsung pada resource spesifik (seperti S3 Bucket Policy), bukan guardrail multi-akun Organizations.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0352",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which compute option is a serverless, event-driven compute service that executes code without provisioning servers?",
    "options": [
      {
        "id": "A",
        "text": "AWS Lambda"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "Amazon Lightsail"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Lambda dipilih karena merupakan layanan serverless murni di mana kode dieksekusi hanya saat dipicu oleh event tertentu dan biaya dihitung per millisecond waktu eksekusi.\n\nKenapa opsi lain salah:\n• Opsi B (Amazon EC2): Amazon EC2 membutuhkan provisioning, konfigurasi, dan pemeliharaan server/OS secara manual oleh pengguna.\n• Opsi C (Amazon Lightsail): Amazon Lightsail menyediakan virtual private server (VPS) sederhana yang telah dibundel, bukan serverless compute murni berbasis event.\n• Opsi D (AWS Elastic Beanstalk): AWS Elastic Beanstalk adalah PaaS yang tetap memprovisi dan menjalankan instance EC2 di latar belakang.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0353",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Platform as a Service (PaaS) solution automatically handles deployment, capacity provisioning, and load balancing?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "Amazon EC2 Auto Scaling"
      },
      {
        "id": "D",
        "text": "AWS OpsWorks"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Elastic Beanstalk dipilih karena merupakan penawaran PaaS AWS yang memudahkan deployment kode aplikasi web (Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker) dengan otomatisasi provisioning infrastruktur.\n\nKenapa opsi lain salah:\n• Opsi A (AWS CloudFormation): AWS CloudFormation adalah layanan Infrastructure as Code deklaratif, bukan platform otomatisasi deployment aplikasi (PaaS).\n• Opsi C (Amazon EC2 Auto Scaling): Amazon EC2 Auto Scaling menambah atau mengurangi jumlah instance EC2 secara dinamis, bukan platform deployment aplikasi web lengkap.\n• Opsi D (AWS OpsWorks): AWS OpsWorks menggunakan Chef atau Puppet untuk otomatisasi konfigurasi server, bukan platform PaaS managed bawaan AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0354",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which serverless compute engine allows running Docker containers on Amazon ECS and EKS without managing EC2 instances?",
    "options": [
      {
        "id": "A",
        "text": "AWS Lambda"
      },
      {
        "id": "B",
        "text": "Amazon EC2 Spot Instances"
      },
      {
        "id": "C",
        "text": "AWS Fargate"
      },
      {
        "id": "D",
        "text": "AWS Batch"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Fargate dipilih karena merupakan serverless container compute engine yang mengeliminasi kebutuhan mengelola cluster EC2 virtual machines untuk Amazon ECS maupun EKS.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Lambda): AWS Lambda menjalankan kode berbasis event berupa fungsi individual pendek (maksimal 15 menit), bukan container orkestrasi skala panjang ECS/EKS.\n• Opsi B (Amazon EC2 Spot Instances): Spot Instances adalah model penetapan harga EC2 berdiskon hingga 90% yang dapat dihentikan sewaktu-waktu, bukan container engine serverless.\n• Opsi D (AWS Batch): AWS Batch merencanakan dan mengeksekusi batch computing jobs dalam jumlah besar, bukan serverless container runtime untuk ECS/EKS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0355",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service provisions AWS cloud infrastructure as code (IaC) using declarative JSON or YAML templates?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "B",
        "text": "AWS Systems Manager"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "AWS CloudFormation"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS CloudFormation dipilih karena merupakan layanan resmi AWS untuk Infrastructure as Code (IaC) yang memodelkan dan memprovisioning seluruh sumber daya cloud secara deklaratif berbasis template.\n\nKenapa opsi lain salah:\n• Opsi A (AWS CodeDeploy): AWS CodeDeploy mengotomatiskan deployment software ke berbagai instance compute (EC2, ECS, on-premises), bukan memodelkan infrastruktur cloud (IaC).\n• Opsi B (AWS Systems Manager): AWS Systems Manager mengelola operasional instance dan visibilitas sistem, bukan engine Infrastructure as Code deklaratif.\n• Opsi C (AWS Elastic Beanstalk): AWS Elastic Beanstalk mempermudah deployment aplikasi web, namun tidak menggunakan template deklaratif serbaguna untuk seluruh resource AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0356",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which object storage class is designed for long-term data archiving with retrieval times ranging from minutes to hours?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Glacier Flexible Retrieval"
      },
      {
        "id": "B",
        "text": "Amazon S3 Standard-IA"
      },
      {
        "id": "C",
        "text": "Amazon S3 One Zone-IA"
      },
      {
        "id": "D",
        "text": "Amazon S3 Express One Zone"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon S3 Glacier Flexible Retrieval dipilih karena menawarkan opsi arsip berbiaya rendah dengan tiga pilihan kecepatan pengambilan data: Expedited (1-5 menit), Standard (3-5 jam), dan Bulk (5-12 jam).\n\nKenapa opsi lain salah:\n• Opsi B (Amazon S3 Standard-IA): S3 Standard-IA dirancang untuk data yang jarang diakses tetapi membutuhkan akses milidetik langsung, bukan untuk data arsip jangka panjang.\n• Opsi C (Amazon S3 One Zone-IA): S3 One Zone-IA menyimpan data yang jarang diakses di hanya satu Availability Zone untuk menghemat biaya, bukan tier arsip multi-jam.\n• Opsi D (Amazon S3 Express One Zone): S3 Express One Zone adalah tier latensi ultra-rendah satu digit milidetik untuk analitik intensif, bukan untuk arsip data.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0357",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which storage service provides a fully managed, shared POSIX file system concurrently accessible by multiple Linux EC2s?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EBS"
      },
      {
        "id": "B",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Amazon FSx for Windows File Server"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon EFS dipilih karena menyediakan shared elastic file system berbasis protokol NFSv4 yang dapat di-mount secara bersamaan oleh ribuan instance Linux EC2 lintas Availability Zone.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon EBS): Amazon EBS adalah block storage yang hanya dapat di-attach ke satu instance EC2 secara bersamaan (kecuali mode multi-attach IO1/IO2 di satu AZ).\n• Opsi C (Amazon S3): Amazon S3 adalah object storage berbasis API HTTP/HTTPS (REST), bukan file system POSIX yang dapat di-mount langsung via Linux NFS.\n• Opsi D (Amazon FSx for Windows File Server): FSx for Windows File Server dirancang khusus untuk lingkungan Windows berbasis SMB, bukan shared POSIX file system Linux.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0358",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which block storage volume type is directly attached to EC2 instances for persistent operating system drives?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Amazon EFS"
      },
      {
        "id": "C",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EBS dipilih karena menyediakan raw block storage persisten berkinerja tinggi yang dipasang sebagai root drive atau disk data tambahan pada instance Amazon EC2.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon S3): Amazon S3 adalah object storage berbasis bucket dan key melalui protokol web, tidak dapat di-attach langsung sebagai disk boot OS.\n• Opsi B (Amazon EFS): Amazon EFS adalah shared network file system via NFS, bukan raw block storage berkecepatan tinggi untuk root volume instance.\n• Opsi D (AWS Storage Gateway): AWS Storage Gateway menjembatani storage on-premises ke AWS cloud storage, bukan virtual drive lokal instance EC2.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0359",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which hybrid storage service integrates on-premises environments with AWS cloud storage via standard protocols?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "AWS DataSync"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Storage Gateway dipilih karena menyediakan jembatan penyimpanan hibrida (File Gateway, Volume Gateway, Tape Gateway) untuk menghubungkan aplikasi lokal on-premises ke AWS storage.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon CloudFront): Amazon CloudFront adalah Content Delivery Network (CDN) global untuk caching konten web, bukan jembatan hybrid storage lokal.\n• Opsi B (AWS Direct Connect): AWS Direct Connect menyediakan koneksi jaringan fisik privat khusus, bukan gateway protokol penyimpanan data (NFS/SMB/iSCSI).\n• Opsi C (AWS DataSync): AWS DataSync mengotomatiskan transfer dan replikasi data massal online antar storage, bukan gateway perantara caching storage on-premises.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0360",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which cloud-native database engine automatically replicates 6 copies of your data across 3 Availability Zones?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Aurora"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon RDS for MySQL"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Aurora dipilih karena arsitektur storage terdistribusinya secara otomatis mereplikasi data sebanyak 6 salinan (6-way replication) di 3 Availability Zone untuk ketahanan dan ketersediaan tinggi.\n\nKenapa opsi lain salah:\n• Opsi B (Amazon DynamoDB): Amazon DynamoDB adalah database NoSQL key-value & document, bukan engine database relasional kompatibel MySQL/PostgreSQL.\n• Opsi C (Amazon RDS for MySQL): Amazon RDS for MySQL menggunakan engine standar open-source MySQL dengan replikasi Multi-AZ 2-way (primary-standby), bukan 6-way terdistribusi otomatis.\n• Opsi D (Amazon Redshift): Amazon Redshift adalah data warehouse untuk analitik OLAP, bukan database transaksional (OLTP) relasional.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0361",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "A gaming mobile app requires a serverless key-value database with sub-10ms latency for player profiles. Which to use?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS for MySQL"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB dipilih karena merupakan database NoSQL key-value dan document serverless yang dirancang untuk aplikasi mobile/game dengan kebutuhan throughput tinggi dan latensi respon sub-10 milidetik.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon RDS for MySQL): Amazon RDS for MySQL adalah database relasional OLTP dengan struktur tabel kaku dan overhead latensi puluhan milidetik pada beban tinggi.\n• Opsi C (Amazon DocumentDB): Amazon DocumentDB adalah database terkelola yang kompatibel dengan MongoDB (document store), bukan key-value engine serverless berkecepatan sub-10ms.\n• Opsi D (Amazon Redshift): Amazon Redshift adalah data warehouse analitik berbasis kolom untuk query analitik kompleks, bukan untuk game/app state transaksional real-time.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0362",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which fast, fully managed petabyte-scale cloud data warehouse service is optimized for running complex SQL analytics?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon EMR"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Redshift dipilih karena merupakan layanan data warehouse berbasis columnar storage yang dirancang khusus untuk analitik OLAP (Online Analytical Processing) skala besar (petabyte).\n\nKenapa opsi lain salah:\n• Opsi A (Amazon RDS): Amazon RDS dirancang untuk beban kerja transaksional online (OLTP) skala gigabyte hingga beberapa terabyte, bukan analitik data petabyte.\n• Opsi B (Amazon DynamoDB): Amazon DynamoDB adalah database NoSQL operasional berkecepatan tinggi, bukan mesin olap data warehouse dengan kemampuan query join kompleks.\n• Opsi D (Amazon EMR): Amazon EMR mengelola cluster Hadoop/Spark untuk pemrosesan data besar terdistribusi, bukan data warehouse berbasis SQL tabular langsung.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0363",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which in-memory data store service supports Redis and Memcached to accelerate application database read response times?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
      },
      {
        "id": "B",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB Accelerator (DAX)"
      },
      {
        "id": "D",
        "text": "Amazon ElastiCache"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon ElastiCache dipilih karena merupakan layanan caching in-memory terkelola berbasis Redis atau Memcached untuk meringankan beban database relasional dan mempercepat latensi respon baca.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Redshift): Amazon Redshift adalah data warehouse analitik berbasis disk/columnar, bukan in-memory microsecond caching layer.\n• Opsi B (Amazon DocumentDB): Amazon DocumentDB adalah database NoSQL document store kompatibel MongoDB, bukan in-memory cache.\n• Opsi C (Amazon DynamoDB Accelerator (DAX)): DynamoDB Accelerator (DAX) adalah cache in-memory khusus untuk Amazon DynamoDB saja, bukan untuk database relasional atau Redis/Memcached.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0364",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which serverless interactive query service lets you analyze data directly in Amazon S3 using standard SQL syntax?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon QuickSight"
      },
      {
        "id": "D",
        "text": "AWS Glue"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Athena dipilih karena merupakan serverless query engine yang memungkinkan pengguna menjalankan query SQL langsung ke file data (CSV, JSON, Parquet) yang ada di Amazon S3 tanpa perlu me-load ke database.\n\nKenapa opsi lain salah:\n• Opsi B (Amazon Redshift): Amazon Redshift mengharuskan data dimuat (LOAD/COPY) terlebih dahulu ke dalam cluster tabel data warehouse sebelum dapat di-query SQL.\n• Opsi C (Amazon QuickSight): Amazon QuickSight adalah alat visualisasi dan dashboard Business Intelligence, bukan query engine interaktif langsung di atas file S3.\n• Opsi D (AWS Glue): AWS Glue adalah layanan ETL data integration untuk menyiapkan, mentransformasi, dan mengkatalogkan data, bukan serverless query runner SQL langsung.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0365",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which serverless data integration service makes it easy to discover, prepare, and combine data for analytics?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "AWS Glue"
      },
      {
        "id": "C",
        "text": "Amazon EMR"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Glue dipilih karena merupakan layanan ETL (Extract, Transform, and Load) terkelola penuh yang dilengkapi Data Catalog terpusat untuk mengotomatiskan persiapan data analitik.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Athena): Amazon Athena adalah serverless query engine untuk menganalisis data menggunakan SQL, bukan pipeline ETL untuk mentransformasi data.\n• Opsi C (Amazon EMR): Amazon EMR adalah platform cluster terkelola untuk menjalankan framework big data seperti Apache Spark/Hadoop, bukan serverless ETL service sederhana.\n• Opsi D (Amazon Kinesis): Amazon Kinesis berfokus pada pengumpulan dan pemrosesan data streaming real-time, bukan batch data integration & ETL.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0366",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which cloud-powered business intelligence (BI) service allows delivering interactive dashboards and ML insights?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "AWS Glue"
      },
      {
        "id": "C",
        "text": "Amazon QuickSight"
      },
      {
        "id": "D",
        "text": "Amazon SageMaker"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon QuickSight dipilih karena merupakan layanan Business Intelligence (BI) serverless dari AWS untuk membuat visualisasi data interaktif, dashboard, dan laporan analitik bisnis.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Athena): Amazon Athena adalah query engine interaktif berbasis SQL, bukan alat pembuatan dashboard visual atau presentasi BI.\n• Opsi B (AWS Glue): AWS Glue berfokus pada data preparation dan pipeline ETL, bukan penyajian visualisasi analitik interaktif kepada stakeholder bisnis.\n• Opsi D (Amazon SageMaker): Amazon SageMaker adalah platform terintegrasi untuk membangun, melatih, dan men-deploy model Machine Learning (ML), bukan tool Business Intelligence (BI).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0367",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service easily collects, processes, and analyzes real-time streaming data at massive scale?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SQS"
      },
      {
        "id": "B",
        "text": "Amazon SNS"
      },
      {
        "id": "C",
        "text": "AWS Batch"
      },
      {
        "id": "D",
        "text": "Amazon Kinesis"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Kinesis dipilih karena dirancang khusus untuk memproses dan menganalisis aliran data real-time berkecepatan tinggi (seperti video, audio, log aplikasi, dan telemetry IoT).\n\nKenapa opsi lain salah:\n• Opsi A (Amazon SQS): Amazon SQS adalah antrean pesan asynchronous (queue buffer) untuk decoupled processing, bukan platform data streaming throughput ultra-tinggi berskala besar.\n• Opsi B (Amazon SNS): Amazon SNS adalah messaging pub/sub untuk broadcast notifikasi ke banyak pelanggan/topik, bukan platform penampung dan pengolah stream data berkelanjutan.\n• Opsi C (AWS Batch): AWS Batch mengorkestrasi eksekusi batch computing jobs dalam jumlah besar, bukan pengolah data streaming kontinu real-time.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0368",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which dedicated private network connection links an on-premises datacenter directly to AWS without using the internet?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Site-to-Site VPN"
      },
      {
        "id": "C",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "D",
        "text": "Internet Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Direct Connect dipilih karena menyediakan koneksi jaringan fiber optik privat khusus langsung dari datacenter on-premises ke AWS, menjamin konsistensi bandwidth dan tidak melewati internet publik.\n\nKenapa opsi lain salah:\n• Opsi B (AWS Site-to-Site VPN): AWS Site-to-Site VPN menggunakan tunnel IPsec terenkripsi yang tetap melintasi jaringan internet publik, sehingga latensi dan bandwidth dapat berfluktuasi.\n• Opsi C (AWS Transit Gateway): AWS Transit Gateway adalah hub routing jaringan cloud, bukan jalur koneksi fisik privat fisik dari datacenter lokal.\n• Opsi D (Internet Gateway): Internet Gateway menghubungkan subnet VPC dengan internet publik, berlawanan dengan koneksi jaringan privat.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0369",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service acts as a central hub to connect multiple Amazon VPCs and on-premises networks together?",
    "options": [
      {
        "id": "A",
        "text": "VPC Peering"
      },
      {
        "id": "B",
        "text": "AWS Transit Gateway"
      },
      {
        "id": "C",
        "text": "Direct Connect Gateway"
      },
      {
        "id": "D",
        "text": "Virtual Private Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Transit Gateway dipilih karena berfungsi sebagai central network hub (arsitektur hub-and-spoke) yang menyederhanakan interkoneksi ribuan VPC dan jaringan on-premises tanpa kerumitan VPC peering mesh.\n\nKenapa opsi lain salah:\n• Opsi A (VPC Peering): VPC Peering adalah koneksi point-to-point langsung antar dua VPC; menjadi sangat rumit jika menghubungkan puluhan atau ratusan VPC (mesh complex).\n• Opsi C (Direct Connect Gateway): Direct Connect Gateway menghubungkan koneksi Direct Connect ke beberapa VPC lintas region, tetapi tidak bertindak sebagai hub transit antar-VPC lokal.\n• Opsi D (Virtual Private Gateway): Virtual Private Gateway adalah gateway VPN di sisi VPC untuk koneksi satu VPC ke on-premises, bukan sentral hub multi-VPC.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0370",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which developer tool helps developers analyze and debug distributed applications and microservices architectures?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "AWS X-Ray"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS X-Ray dipilih karena mengumpulkan data request tracing end-to-end melintasi berbagai microservices, membantu developer memetakan service map dan menemukan bottleneck performa aplikasi.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon CloudWatch): Amazon CloudWatch mengumpulkan metrik, log, dan alarm sistem, tetapi tidak memetakan request tracing visual antar microservices.\n• Opsi B (AWS CloudTrail): AWS CloudTrail mencatat siapa yang memanggil API AWS tertentu (tata kelola audit), bukan mendebug latensi alur kode aplikasi pengguna.\n• Opsi D (AWS Systems Manager): AWS Systems Manager mengelola administrasi instance, otomatisasi patching, dan remote shell, bukan profiler latensi tracing aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0371",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which service recommends optimal AWS resources for your workloads by analyzing historical utilization metrics with ML?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Compute Optimizer"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Compute Optimizer dipilih karena memanfaatkan machine learning untuk menganalisis metrik pemanfaatan historis CloudWatch dan merekomendasikan instance EC2, EBS, atau Lambda yang tepat (right-sizing).\n\nKenapa opsi lain salah:\n• Opsi A (AWS Cost Explorer): AWS Cost Explorer menyajikan riwayat biaya historis dan peramalan pengeluaran, bukan rekomendasi spesifikasi instance berbasis ML metrik utilitas.\n• Opsi B (AWS Budgets): AWS Budgets mengirimkan peringatan saat biaya mendekati anggaran yang ditentukan, bukan merekomendasikan tipe instance yang optimal.\n• Opsi C (AWS Trusted Advisor): AWS Trusted Advisor memeriksa pilar best practices umum (seperti port terbuka atau idle resource), tetapi Compute Optimizer jauh lebih mendalam dalam analisis machine learning metrik CloudWatch untuk right-sizing compute.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0372",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which tool provides custom alerts when spending or usage exceeds (or is forecasted to exceed) specified thresholds?",
    "options": [
      {
        "id": "A",
        "text": "AWS Budgets"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Billing Conductor"
      },
      {
        "id": "D",
        "text": "AWS Trusted Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Budgets dipilih karena memungkinkan pembuatan anggaran biaya dan penggunaan kustom, serta mengirimkan notifikasi peringatan proaktif saat biaya aktual atau perkiraan (forecasted) melampaui batas batas threshold.\n\nKenapa opsi lain salah:\n• Opsi B (AWS Cost Explorer): AWS Cost Explorer digunakan untuk analisis visual interaktif data biaya historis, bukan untuk membuat batasan budget dan peringatan otomatis.\n• Opsi C (AWS Billing Conductor): AWS Billing Conductor mengkustomisasi laporan penagihan untuk klien atau unit bisnis, bukan mengirimkan alert threshold budget.\n• Opsi D (AWS Trusted Advisor): AWS Trusted Advisor memiliki beberapa check terkait biaya, tetapi bukan tool pembuatan anggaran dan notifikasi ambang batas kustom.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0373",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which AWS tool provides an interactive interface to visualize, understand, and forecast your AWS costs and usage?",
    "options": [
      {
        "id": "A",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "B",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "C",
        "text": "AWS Budgets"
      },
      {
        "id": "D",
        "text": "AWS Cost and Usage Report"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Cost Explorer dipilih karena menyediakan dashboard visual interaktif untuk menganalisis pengeluaran historis, mengidentifikasi tren pengeluaran, dan memproyeksikan estimasi biaya cloud di masa mendatang.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Pricing Calculator): AWS Pricing Calculator digunakan untuk membuat estimasi biaya proyek arsitektur baru sebelum di-deploy, bukan menganalisis biaya yang sudah berjalan.\n• Opsi C (AWS Budgets): AWS Budgets berfokus pada penetapan target plafon anggaran dan notifikasi alert, bukan dashboard grafik analisis pengeluaran.\n• Opsi D (AWS Cost and Usage Report): AWS Cost and Usage Report (CUR) menyediakan file raw data CSV paling mendetail di S3, bukan dashboard grafik visual interaktif langsung.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0374",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which web-based tool helps estimate the cost of AWS architecture scenarios before building workloads?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "AWS Cost Anomaly Detection"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Pricing Calculator dipilih karena merupakan alat estimasi web gratis tanpa biaya untuk menghitung estimasi biaya layanan AWS sebelum arsitektur benar-benar di-deploy ke lingkungan cloud.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Cost Explorer): AWS Cost Explorer menganalisis tagihan historis yang sudah berjalan, bukan mengestimasi konfigurasi sebelum resource dibuat.\n• Opsi B (AWS Budgets): AWS Budgets memantau pengeluaran aktif terhadap batas anggaran, bukan kalkulator perencanaan pra-migrasi.\n• Opsi D (AWS Cost Anomaly Detection): AWS Cost Anomaly Detection menggunakan ML untuk mendeteksi lonjakan biaya tak terduga yang sedang berlangsung, bukan alat perencanaan pra-arsitektur.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0375",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which AWS Support plan tier is the lowest plan that includes a designated Technical Account Manager (TAM)?",
    "options": [
      {
        "id": "A",
        "text": "Developer Support"
      },
      {
        "id": "B",
        "text": "Business Support"
      },
      {
        "id": "C",
        "text": "Enterprise On-Ramp"
      },
      {
        "id": "D",
        "text": "Enterprise Support"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Enterprise Support dipilih karena merupakan satu-satunya level dukungan tertinggi yang memberikan dedicated Technical Account Manager (TAM) purna-waktu untuk bimbingan arsitektur dan operasional proaktif (Enterprise On-Ramp menyediakan pool of TAMs, bukan dedicated TAM).\n\nKenapa opsi lain salah:\n• Opsi A (Developer Support): Developer Support hanya menyediakan akses bisnis jam kerja via email tanpa panduan arsitektur atau Technical Account Manager (TAM).\n• Opsi B (Business Support): Business Support menyediakan akses 24/7 ke Cloud Support Engineers via phone/chat, tetapi tidak menyertakan Technical Account Manager (TAM).\n• Opsi C (Enterprise On-Ramp): Enterprise On-Ramp menyediakan akses ke pool of TAMs bersama (bukan designated/dedicated TAM secara personal khusus).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0376",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud computing model delivers software over the internet on a subscription basis?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "D",
        "text": "Function as a Service (FaaS)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Software as a Service (SaaS) menyediakan aplikasi lengkap berbasis cloud yang dikelola penuh oleh provider; pengguna hanya mengaksesnya melalui web browser tanpa memikirkan infrastruktur atau kode sumber.\n\nKenapa opsi lain salah:\n• Opsi A (Infrastructure as a Service (IaaS)): IaaS memberikan kontrol mendalam atas OS, storage, dan networking virtual (contoh: Amazon EC2).\n• Opsi B (Platform as a Service (PaaS)): PaaS menyediakan platform bagi developer untuk menulis dan deploy kode aplikasi tanpa mengelola OS (contoh: AWS Elastic Beanstalk).\n• Opsi D (Function as a Service (FaaS)): FaaS (serverless compute) menjalankan fungsi kode individual berbasis event tanpa provisioning server (contoh: AWS Lambda).",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0377",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Under the AWS Shared Responsibility Model, which security task is the customer responsible for?",
    "options": [
      {
        "id": "A",
        "text": "Patching physical hypervisor firmware"
      },
      {
        "id": "B",
        "text": "Securing the physical datacenter facilities and perimeter"
      },
      {
        "id": "C",
        "text": "Decommissioning defective physical hard disk drives"
      },
      {
        "id": "D",
        "text": "Configuring Amazon EC2 guest operating systems and security groups"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pelanggan bertanggung jawab atas Keamanan DI DALAM Cloud (Security IN the Cloud), yang mencakup instalasi update/patch OS tamu pada EC2, konfigurasi firewall (Security Groups), serta enkripsi data pelanggan.\n\nKenapa opsi lain salah:\n• Opsi A (Patching physical hypervisor firmware): Patching hypervisor virtualisasi fisik adalah tanggung jawab infrastruktur dasar AWS (Security OF the Cloud).\n• Opsi B (Securing the physical datacenter facilities and perimeter): Keamanan fisik perimeter, CCTV, dan akses gedung datacenter sepenuhnya dikelola oleh AWS.\n• Opsi C (Decommissioning defective physical hard disk drives): Penghancuran dan penonaktifan hard drive fisik yang rusak merupakan kewajiban datacenter AWS.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0378",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS compute service executes backend code automatically in response to triggers without servers?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "AWS Lambda"
      },
      {
        "id": "D",
        "text": "Amazon Lightsail"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Lambda adalah layanan komputasi serverless yang menjalankan kode saat dipicu oleh event tertentu (misal upload file S3 atau request API Gateway) dan hanya menagih durasi eksekusi dalam milidetik.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon EC2): Amazon EC2 mengharuskan Anda melakukan provisioning, konfigurasi sistem operasi, dan mengelola server virtual.\n• Opsi B (AWS Elastic Beanstalk): AWS Elastic Beanstalk adalah PaaS yang tetap membuat dan menjalankan instance EC2 di bawah kapnya.\n• Opsi D (Amazon Lightsail): Amazon Lightsail adalah virtual private server (VPS) sederhana all-in-one untuk situs web atau proyek kecil.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0379",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which web-based tool estimates the cost of an AWS architecture BEFORE deploying any resources?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "C",
        "text": "AWS Budgets"
      },
      {
        "id": "D",
        "text": "AWS Cost and Usage Report"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Pricing Calculator adalah web tool publik gratis untuk memperkirakan dan merencanakan estimasi biaya bulanan arsitektur solusi AWS sebelum resource benar-benar dibangun.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Cost Explorer): AWS Cost Explorer digunakan untuk menganalisis, memvisualisasikan, dan meninjau data historis pengeluaran yang SUDAH terjadi.\n• Opsi C (AWS Budgets): AWS Budgets digunakan untuk menetapkan ambang batas anggaran biaya/penggunaan dan mengirimkan notifikasi saat terlampaui.\n• Opsi D (AWS Cost and Usage Report): AWS Cost and Usage Report (CUR) menghasilkan file laporan tagihan detail paling komprehensif ke S3.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0380",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud architecture principle emphasizes designing systems that prevent cascading failures?",
    "options": [
      {
        "id": "A",
        "text": "Tightly coupled architecture"
      },
      {
        "id": "B",
        "text": "Vertical scaling only"
      },
      {
        "id": "C",
        "text": "Loose coupling (Decoupling)"
      },
      {
        "id": "D",
        "text": "Single point of failure"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Loose coupling (Decoupling) memisahkan komponen sistem (misal menggunakan antrean SQS) sehingga kegagalan pada satu komponen tidak langsung merembet dan meruntuhkan komponen lainnya.\n\nKenapa opsi lain salah:\n• Opsi A (Tightly coupled architecture): Tightly coupled architecture membuat seluruh komponen saling bergantung erat; kegagalan satu modul akan meruntuhkan seluruh aplikasi.\n• Opsi B (Vertical scaling only): Vertical scaling hanya memperbesar ukuran kapasitas satu server, bukan prinsip isolasi kegagalan antar komponen.\n• Opsi D (Single point of failure): Single point of failure adalah anti-pattern kelemahan sistem di mana kegagalan satu titik merusak keseluruhan layanan.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0381",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service creates, manages, and controls cryptographic encryption keys for data protection?",
    "options": [
      {
        "id": "A",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "B",
        "text": "AWS CloudHSM"
      },
      {
        "id": "C",
        "text": "AWS Certificate Manager (ACM)"
      },
      {
        "id": "D",
        "text": "AWS Key Management Service (AWS KMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Key Management Service (AWS KMS) adalah layanan terkelola yang memudahkan pembuatan, rotasi, dan pengendalian kunci enkripsi simetris maupun asimetris yang terintegrasi di seluruh layanan AWS.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Secrets Manager): AWS Secrets Manager digunakan untuk menyimpan, mengambil, dan merotasi kredensial password database dan API token.\n• Opsi B (AWS CloudHSM): AWS CloudHSM adalah modul hardware kriptografi khusus (FIPS 140-2 Level 3) berbayar tinggi dan dikelola langsung oleh pelanggan.\n• Opsi C (AWS Certificate Manager (ACM)): AWS Certificate Manager (ACM) digunakan untuk menerbitkan dan mengelola sertifikat SSL/TLS publik dan privat.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0382",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Amazon S3 storage class offers the lowest storage cost for archives accessed 1-2 times a year?",
    "options": [
      {
        "id": "A",
        "text": "S3 Standard-Infrequent Access"
      },
      {
        "id": "B",
        "text": "S3 One Zone-Infrequent Access"
      },
      {
        "id": "C",
        "text": "S3 Glacier Flexible Retrieval"
      },
      {
        "id": "D",
        "text": "S3 Glacier Deep Archive"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "S3 Glacier Deep Archive adalah storage class paling murah di seluruh AWS (biaya serendah ~$0.00099 per GB/bulan), dirancang untuk retensi data jangka panjang yang hanya diakses 1-2 kali per tahun dengan waktu retrieval 12 jam.\n\nKenapa opsi lain salah:\n• Opsi A (S3 Standard-Infrequent Access): S3 Standard-IA dirancang untuk data yang jarang diakses namun membutuhkan akses retrieval instan dalam hitungan milidetik.\n• Opsi B (S3 One Zone-Infrequent Access): S3 One Zone-IA hanya menyimpan data di satu AZ, memiliki biaya lebih rendah dari Standard-IA tetapi bukan yang paling murah untuk arsip jangka panjang.\n• Opsi C (S3 Glacier Flexible Retrieval): S3 Glacier Flexible Retrieval menawarkan waktu retrieval 1-5 menit hingga beberapa jam, namun biaya per gigabyte-nya lebih mahal daripada Deep Archive.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0383",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which tool sends alerts before actual costs exceed budget by evaluating forecast spending patterns?",
    "options": [
      {
        "id": "A",
        "text": "AWS Budgets"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch Billing Alarms"
      },
      {
        "id": "D",
        "text": "AWS Cost Anomaly Detection"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Budgets memungkinkan pembuatan ambang batas anggaran kustom dan dapat memicu alert berdasarkan perkiraan tagihan (forecasted costs) sebelum batas biaya sebenarnya terlewati.\n\nKenapa opsi lain salah:\n• Opsi B (AWS Trusted Advisor): AWS Trusted Advisor memberikan rekomendasi optimalisasi pilar arsitektur, bukan konfigurasi alert anggaran dinamis.\n• Opsi C (Amazon CloudWatch Billing Alarms): CloudWatch Billing Alarms hanya mengirimkan alert berdasarkan metrik akumulasi biaya aktual, bukan proyeksi forecasting.\n• Opsi D (AWS Cost Anomaly Detection): AWS Cost Anomaly Detection menggunakan machine learning untuk mendeteksi lonjakan pengeluaran mendadak yang tidak biasa.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0384",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which AWS Well-Architected Framework pillar focuses on recovering workloads dynamically from disruptions?",
    "options": [
      {
        "id": "A",
        "text": "Reliability"
      },
      {
        "id": "B",
        "text": "Operational Excellence"
      },
      {
        "id": "C",
        "text": "Cost Optimization"
      },
      {
        "id": "D",
        "text": "Performance Efficiency"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Reliability berfokus pada kemampuan beban kerja untuk menjalankan fungsinya secara benar dan konsisten, serta pulih secara otomatis dari kegagalan infrastruktur atau gangguan layanan.\n\nKenapa opsi lain salah:\n• Opsi B (Operational Excellence): Operational Excellence berfokus pada menjalankan dan memantau sistem untuk memberikan nilai bisnis serta meningkatkan proses operasional secara berkala.\n• Opsi C (Cost Optimization): Cost Optimization berfokus pada menghindari pengeluaran yang tidak perlu dan memilih tipe resource paling hemat biaya.\n• Opsi D (Performance Efficiency): Performance Efficiency berfokus pada penggunaan sumber daya komputasi secara efisien untuk memenuhi persyaratan sistem seiring perubahan permintaan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0385",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Where can compliance officers download official AWS SOC, PCI DSS, and ISO compliance reports?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS Artifact"
      },
      {
        "id": "D",
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Artifact adalah portal mandiri gratis untuk mengakses dokumen kepatuhan resmi AWS, laporan audit independen (SOC 1/2/3, PCI DSS), serta persetujuan hukum seperti BAA (HIPAA).\n\nKenapa opsi lain salah:\n• Opsi A (AWS Trusted Advisor): AWS Trusted Advisor memberikan rekomendasi best practice seputar biaya, performa, dan batas keamanan akun.\n• Opsi B (Amazon Inspector): Amazon Inspector memindai celah kerentanan software (CVE) pada EC2 dan container ECR.\n• Opsi D (AWS Security Hub): AWS Security Hub mengumpulkan dan memprioritaskan temuan postur keamanan dari berbagai layanan AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0386",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS storage service provides a fully managed, POSIX-compliant shared file system for Linux EC2?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Block Store (Amazon EBS)"
      },
      {
        "id": "B",
        "text": "Amazon Elastic File System (Amazon EFS)"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Elastic File System (Amazon EFS) menyediakan sistem berkas bersama (shared file storage) berbasis protokol NFSv4 yang dapat di-mount secara simultan oleh ribuan instance EC2 Linux.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Elastic Block Store (Amazon EBS)): Amazon EBS adalah block storage yang pada umumnya hanya dapat dipasang ke satu instance EC2 pada satu waktu (kecuali konfigurasi EBS Multi-Attach tertentu).\n• Opsi C (Amazon S3): Amazon S3 adalah object storage berbasis protokol HTTP/REST API, bukan shared file system POSIX lokal.\n• Opsi D (AWS Storage Gateway): AWS Storage Gateway menjembatani integrasi storage on-premises ke AWS cloud.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0387",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which Amazon EC2 purchasing option offers the deepest discounts (up to 90%) for interruptible batch jobs?",
    "options": [
      {
        "id": "A",
        "text": "On-Demand Instances"
      },
      {
        "id": "B",
        "text": "Savings Plans"
      },
      {
        "id": "C",
        "text": "Spot Instances"
      },
      {
        "id": "D",
        "text": "Reserved Instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EC2 Spot Instances menawarkan diskon terbesar (hingga 90% dibandingkan On-Demand) dengan memanfaatkan sisa kapasitas AWS yang tidak terpakai, cocok untuk workload fleksibel yang tahan interupsi.\n\nKenapa opsi lain salah:\n• Opsi A (On-Demand Instances): On-Demand Instances membayar komputasi per detik tanpa komitmen jangka panjang, tetapi dengan tarif per jam standar paling mahal.\n• Opsi B (Savings Plans): Savings Plans memberikan diskon hingga 66-72% dengan komitmen penggunaan konsisten ($/jam) selama 1 atau 3 tahun.\n• Opsi D (Reserved Instances): Reserved Instances menawarkan diskon signifikan dengan komitmen kapasitas spesifik selama masa kontrak 1 atau 3 tahun.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0388",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "What is the primary operational difference between Scalability and Elasticity in AWS?",
    "options": [
      {
        "id": "A",
        "text": "Scalability is automatic; elasticity requires manual server reboots"
      },
      {
        "id": "B",
        "text": "There is no difference; both terms mean exactly the same thing"
      },
      {
        "id": "C",
        "text": "Elasticity applies to storage only; scalability applies to compute"
      },
      {
        "id": "D",
        "text": "Elasticity adapts to demand dynamically; scalability handles growth"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Elasticity adalah kemampuan menyesuaikan alokasi kapasitas secara dinamis (naik dan turun) sesuai lonjakan traffic real-time, sedangkan Scalability adalah kemampuan sistem menangani peningkatan beban jangka panjang.\n\nKenapa opsi lain salah:\n• Opsi A (Scalability is automatic; elasticity requires manual server reboots): Elasticity justru beroperasi secara otomatis (misal Auto Scaling), bukan memerlukan reboot manual.\n• Opsi B (There is no difference; both terms mean exactly the same thing): Keduanya memiliki fokus teknis berbeda: elastisitas berfokus pada variasi dinamis (pay only what you use), skalabilitas pada daya tampung volume.\n• Opsi C (Elasticity applies to storage only; scalability applies to compute): Baik elastisitas maupun skalabilitas berlaku untuk komputasi, database, penyimpanan, dan jaringan.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0389",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS security service uses machine learning to discover and protect sensitive PII in S3?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "Amazon Macie"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Macie menggunakan machine learning dan pattern matching otomatis untuk memindai, mengklasifikasi, dan melindungi data sensitif seperti Personally Identifiable Information (PII) di bucket Amazon S3.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon GuardDuty): Amazon GuardDuty mendeteksi ancaman keamanan dan aktivitas mencurigakan dari analisis log jaringan dan API.\n• Opsi B (AWS WAF): AWS WAF memfilter request HTTP/HTTPS di Layer 7 untuk memblokir serangan eksploitasi web.\n• Opsi C (Amazon Inspector): Amazon Inspector memindai celah kerentanan software (CVE) pada sistem operasi dan image container.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0390",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS database service is fully managed, NoSQL, and delivers single-digit millisecond latency?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS"
      },
      {
        "id": "B",
        "text": "Amazon Aurora"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon DynamoDB adalah database NoSQL serverless terkelola penuh (key-value dan document) yang mampu menangani lebih dari 10 triliun permintaan per hari dengan latensi konsisten di bawah 10 milidetik.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon RDS): Amazon RDS adalah layanan database relasional terkelola untuk MySQL, PostgreSQL, MariaDB, Oracle, dan SQL Server.\n• Opsi B (Amazon Aurora): Amazon Aurora adalah mesin database relasional enterprise AWS yang kompatibel dengan MySQL dan PostgreSQL.\n• Opsi D (Amazon Redshift): Amazon Redshift adalah layanan data warehouse analitik OLAP berbasis petabyte, bukan database transaksional operasional NoSQL.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0391",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which AWS Support plan is the LOWEST tier that includes 24/7 phone, email, and chat technical support?",
    "options": [
      {
        "id": "A",
        "text": "Basic Support"
      },
      {
        "id": "B",
        "text": "Developer Support"
      },
      {
        "id": "C",
        "text": "Business Support"
      },
      {
        "id": "D",
        "text": "Enterprise On-Ramp Support"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Business Support adalah tier paling rendah yang menyediakan akses teknis 24/7 melalui telepon, live chat, dan email ke Cloud Support Engineers untuk jumlah kasus tak terbatas dengan respon <1 jam.\n\nKenapa opsi lain salah:\n• Opsi A (Basic Support): Basic Support bersifat gratis untuk semua akun, tetapi hanya menyediakan bantuan seputar billing dan batas akun (tanpa technical support).\n• Opsi B (Developer Support): Developer Support hanya menyediakan bantuan teknis via email pada jam kerja bisnis reguler (business hours), bukan 24/7.\n• Opsi D (Enterprise On-Ramp Support): Enterprise On-Ramp adalah tier di atas Business Support dengan waktu respon 30 menit dan akses pool Technical Account Manager.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0392",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud benefit allows businesses to rapidly deploy services globally without buying hardware?",
    "options": [
      {
        "id": "A",
        "text": "Trade capital expense for variable expense"
      },
      {
        "id": "B",
        "text": "Stop spending money running data centers"
      },
      {
        "id": "C",
        "text": "Benefit from massive economies of scale"
      },
      {
        "id": "D",
        "text": "Increase speed and agility"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Increase speed and agility memungkinkan organisasi melakukan provisioning resource cloud dalam hitungan menit (bukan minggu/bulan proses procurement fisik), sehingga tim dapat bereksperimen dan berinovasi jauh lebih cepat.\n\nKenapa opsi lain salah:\n• Opsi A (Trade capital expense for variable expense): Trade capital expense for variable expense berfokus pada model finansial (CapEx ke OpEx), bukan kecepatan peluncuran inovasi teknis.\n• Opsi B (Stop spending money running data centers): Stop spending money running data centers berfokus pada eliminasi biaya sewa gedung, listrik, pendingin, dan staf fasilitas fisik.\n• Opsi C (Benefit from massive economies of scale): Benefit from massive economies of scale berfokus pada penurunan harga kumulatif berkat jutaan pelanggan AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0393",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service provides intelligent threat detection by monitoring CloudTrail, VPC Flow, and DNS logs?",
    "options": [
      {
        "id": "A",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Shield"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "Amazon Detective"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection terkelola yang terus memantau aktivitas berbahaya dan perilaku anomali menggunakan machine learning atas CloudTrail, VPC Flow Logs, dan DNS Query Logs.\n\nKenapa opsi lain salah:\n• Opsi B (AWS Shield): AWS Shield memberikan proteksi terhadap serangan Distributed Denial of Service (DDoS) pada Layer 3/4.\n• Opsi C (AWS WAF): AWS WAF memfilter request HTTP/HTTPS masuk untuk mencegah injeksi SQL dan Cross-Site Scripting.\n• Opsi D (Amazon Detective): Amazon Detective membantu menginvestigasi dan menganalisis akar penyebab temuan keamanan setelah terdeteksi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0394",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which relational database engine developed by AWS offers up to 5x throughput of standard MySQL?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon DocumentDB"
      },
      {
        "id": "D",
        "text": "Amazon Aurora"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon Aurora adalah mesin database relasional cloud-native AWS yang menawarkan hingga 5x throughput MySQL standar dan 3x throughput PostgreSQL standar dengan replikasi 6 salinan data di 3 AZ.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon DynamoDB): Amazon DynamoDB adalah database NoSQL key-value, bukan engine SQL relasional.\n• Opsi B (Amazon Redshift): Amazon Redshift dioptimalkan untuk analitik data warehouse (OLAP), bukan pemrosesan transaksi cepat (OLTP).\n• Opsi C (Amazon DocumentDB): Amazon DocumentDB adalah database NoSQL dokumen terkelola yang kompatibel dengan MongoDB.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0395",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Which dedicated role is provided exclusively to AWS Enterprise Support plan customers?",
    "options": [
      {
        "id": "A",
        "text": "Dedicated Solutions Architect"
      },
      {
        "id": "B",
        "text": "Designated Technical Account Manager (TAM)"
      },
      {
        "id": "C",
        "text": "AWS Certified Database Specialist"
      },
      {
        "id": "D",
        "text": "AWS Security Assurance Officer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Enterprise Support Plan (dan Enterprise On-Ramp dengan pool TAM) menyediakan designated Technical Account Manager (TAM) yang bertindak sebagai penasihat teknis proaktif utama untuk arsitektur dan operasional cloud Anda.\n\nKenapa opsi lain salah:\n• Opsi A (Dedicated Solutions Architect): Solutions Architect dapat membantu pelanggan di berbagai tingkatan atau program konsultasi, tetapi bukan advisor operasional harian yang melekat via support tier.\n• Opsi C (AWS Certified Database Specialist): AWS Certified Database Specialist adalah sertifikasi keahlian individu, bukan fasilitas dedicated support plan.\n• Opsi D (AWS Security Assurance Officer): AWS Security Assurance Officer bukan entitas personil yang disediakan oleh AWS Support plans.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0396",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which AWS CAF perspective bridges business strategies with measurable business outcomes?",
    "options": [
      {
        "id": "A",
        "text": "Governance perspective"
      },
      {
        "id": "B",
        "text": "Security perspective"
      },
      {
        "id": "C",
        "text": "Operations perspective"
      },
      {
        "id": "D",
        "text": "Business perspective"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Business perspective pada AWS Cloud Adoption Framework (AWS CAF) membantu memastikan bahwa adopsi cloud selaras dengan tujuan bisnis, ROI, model bisnis digital, dan strategi pertumbuhan perusahaan.\n\nKenapa opsi lain salah:\n• Opsi A (Governance perspective): Governance perspective berfokus pada manajemen program cloud, kurasi portfolio proyek, dan kepatuhan anggaran.\n• Opsi B (Security perspective): Security perspective berfokus pada tata kelola data, manajemen identitas, dan kepatuhan regulasi keamanan cyber.\n• Opsi C (Operations perspective): Operations perspective berfokus pada pemeliharaan SLA operasional, observabilitas, dan manajemen insiden beban kerja.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0397",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which security best practice should be applied IMMEDIATELY to the AWS account root user?",
    "options": [
      {
        "id": "A",
        "text": "Generate access keys for regular daily administrative tasks"
      },
      {
        "id": "B",
        "text": "Enable Multi-Factor Authentication (MFA) and lock away root credentials"
      },
      {
        "id": "C",
        "text": "Attach AdministratorAccess inline policy directly to the root user"
      },
      {
        "id": "D",
        "text": "Share the root password with all DevOps team leads"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Best practice AWS paling utama adalah mengaktifkan MFA pada akun root, tidak membuat access key untuk pekerjaan rutin, dan beralih menggunakan user IAM / AWS IAM Identity Center dengan prinsip hak akses terendah.\n\nKenapa opsi lain salah:\n• Opsi A (Generate access keys for regular daily administrative tasks): Membuat access key pada root user sangat dilarang karena berisiko tinggi terhadap kompromi seluruh akun.\n• Opsi C (Attach AdministratorAccess inline policy directly to the root user): Root user secara default sudah memiliki akses tak terbatas ke semua resource tanpa perlu melampirkan IAM policy.\n• Opsi D (Share the root password with all DevOps team leads): Membagikan password root melanggar prinsip akuntabilitas dan meningkatkan risiko pembobolan akun.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0398",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS global content delivery network (CDN) securely delivers data, videos, and APIs with low latency?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "AWS Direct Connect"
      },
      {
        "id": "C",
        "text": "Amazon CloudFront"
      },
      {
        "id": "D",
        "text": "AWS Global Accelerator"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon CloudFront adalah layanan Content Delivery Network (CDN) global yang menggunakan jaringan ratusan Edge Locations di seluruh dunia untuk meng-cache konten statis dan dinamis dekat dengan pengguna akhir.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Route 53): Amazon Route 53 adalah layanan DNS terkelola yang sangat andal dan dapat diskalakan pada port 53.\n• Opsi B (AWS Direct Connect): AWS Direct Connect menyediakan jalur koneksi jaringan fiber optik privat khusus dari on-premises ke AWS.\n• Opsi D (AWS Global Accelerator): AWS Global Accelerator mengoptimalkan rute traffic IP statis global melalui backbone AWS untuk aplikasi TCP/UDP.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0399",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "What is the primary financial benefit of Consolidated Billing in AWS Organizations?",
    "options": [
      {
        "id": "A",
        "text": "It eliminates all data transfer fees across global AWS Regions"
      },
      {
        "id": "B",
        "text": "It combines usage across accounts to qualify for tiered volume discounts"
      },
      {
        "id": "C",
        "text": "It provides free unlimited access to AWS Enterprise Support"
      },
      {
        "id": "D",
        "text": "It automatically converts all On-Demand instances into Spot instances"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Consolidated Billing menggabungkan seluruh tagihan akun member ke satu akun pembayar (management account), mengakumulasikan pemakaian layanan (seperti S3 dan EC2) sehingga mencapai tier volume discount yang lebih murah.\n\nKenapa opsi lain salah:\n• Opsi A (It eliminates all data transfer fees across global AWS Regions): Biaya data transfer antar region tetap berlaku sesuai tarif AWS normal dan tidak dihapus oleh Consolidated Billing.\n• Opsi C (It provides free unlimited access to AWS Enterprise Support): Biaya Enterprise Support dihitung terpisah berdasarkan persentase total tagihan bulanan dan tidak digratiskan.\n• Opsi D (It automatically converts all On-Demand instances into Spot instances): Consolidated Billing adalah fitur penagihan finansial, tidak mengubah tipe instance atau arsitektur komputasi secara otomatis.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0400",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which AWS Well-Architected Framework pillar focuses on minimizing environmental impact?",
    "options": [
      {
        "id": "A",
        "text": "Cost Optimization"
      },
      {
        "id": "B",
        "text": "Operational Excellence"
      },
      {
        "id": "C",
        "text": "Performance Efficiency"
      },
      {
        "id": "D",
        "text": "Sustainability"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Pilar Sustainability (ditambahkan pada 2021) berfokus pada pengurangan dampak lingkungan dari beban kerja cloud, memaksimalkan utilisasi resource, dan meminimalkan jejak karbon.\n\nKenapa opsi lain salah:\n• Opsi A (Cost Optimization): Cost Optimization berfokus pada penghematan pengeluaran finansial organisasi, bukan jejak ekologis/karbon.\n• Opsi B (Operational Excellence): Operational Excellence berfokus pada proses rilis, otomasi deployment, dan pembelajaran dari kegagalan sistem.\n• Opsi C (Performance Efficiency): Performance Efficiency berfokus pada pemilihan arsitektur komputasi untuk mencapai throughput dan latensi optimal.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0401",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS Organizations feature enforces permission guardrails across all member accounts?",
    "options": [
      {
        "id": "A",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "B",
        "text": "IAM Permission Boundaries"
      },
      {
        "id": "C",
        "text": "Security Groups"
      },
      {
        "id": "D",
        "text": "Network Access Control Lists (NACLs)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Service Control Policies (SCPs) memungkinkan administrator master account menetapkan batas izin maksimum (guardrails) yang membatasi tindakan apa saja yang dapat dilakukan oleh akun member dalam organisasi.\n\nKenapa opsi lain salah:\n• Opsi B (IAM Permission Boundaries): IAM Permission Boundaries membatasi izin maksimum untuk satu entitas IAM (user/role), bukan tata kelola multi-akun.\n• Opsi C (Security Groups): Security Groups adalah virtual firewall stateful di tingkat instance EC2 atau ENI.\n• Opsi D (Network Access Control Lists (NACLs)): NACLs adalah virtual firewall stateless di tingkat subnet VPC.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0402",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which VPC component enables instances in a private subnet to initiate outbound internet traffic?",
    "options": [
      {
        "id": "A",
        "text": "Internet Gateway"
      },
      {
        "id": "B",
        "text": "NAT Gateway"
      },
      {
        "id": "C",
        "text": "Virtual Private Gateway"
      },
      {
        "id": "D",
        "text": "Egress-Only Internet Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "NAT Gateway (ditempatkan di subnet publik) memungkinkan instance di private subnet melakukan koneksi outbound IPv4 ke internet (misal untuk patching atau download dependencies) sambil mencegah internet memulai koneksi masuk.\n\nKenapa opsi lain salah:\n• Opsi A (Internet Gateway): Internet Gateway memungkinkan komunikasi dua arah (inbound & outbound) langsung antara subnet publik dan internet.\n• Opsi C (Virtual Private Gateway): Virtual Private Gateway digunakan sebagai endpoint target untuk koneksi AWS Site-to-Site VPN di sisi AWS.\n• Opsi D (Egress-Only Internet Gateway): Egress-Only Internet Gateway hanya digunakan khusus untuk lalu lintas outbound IPv6, bukan IPv4 umum.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0403",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which migration strategy involves moving applications to AWS without making any code changes?",
    "options": [
      {
        "id": "A",
        "text": "Replatforming"
      },
      {
        "id": "B",
        "text": "Refactoring"
      },
      {
        "id": "C",
        "text": "Rehosting"
      },
      {
        "id": "D",
        "text": "Repurchasing"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Rehosting (dikenal juga sebagai 'lift-and-shift') memindahkan aplikasi dan VM on-premises langsung ke AWS (seperti Amazon EC2) secara as-is tanpa memodifikasi arsitektur atau kode aplikasi.\n\nKenapa opsi lain salah:\n• Opsi A (Replatforming): Replatforming ('lift-tinker-and-shift') membuat sedikit optimasi cloud tanpa mengubah arsitektur inti (misal memindahkan database ke Amazon RDS).\n• Opsi B (Refactoring): Refactoring / Re-architecting menulis ulang aplikasi menggunakan arsitektur cloud-native (seperti microservices serverless).\n• Opsi D (Repurchasing): Repurchasing beralih ke produk SaaS pihak ketiga yang sudah siap pakai (misal beralih ke Salesforce atau Workday).",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0404",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service helps manage, retrieve, and automatically rotate database credentials and API keys?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager Parameter Store"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
      },
      {
        "id": "C",
        "text": "AWS Key Management Service (KMS)"
      },
      {
        "id": "D",
        "text": "AWS IAM Access Analyzer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Secrets Manager memungkinkan penyimpanan aman kredensial database dan API key serta memiliki fitur unggulan rotasi password otomatis berkala menggunakan fungsi AWS Lambda.\n\nKenapa opsi lain salah:\n• Opsi A (AWS Systems Manager Parameter Store): Systems Manager Parameter Store menyimpan konfigurasi teks dan string aman tanpa kapabilitas built-in rotasi otomatis.\n• Opsi C (AWS Key Management Service (KMS)): AWS KMS membuat dan mengelola kunci enkripsi kriptografi, bukan data rahasia/password itu sendiri.\n• Opsi D (AWS IAM Access Analyzer): IAM Access Analyzer membantu mengidentifikasi resource yang dapat diakses oleh entitas di luar akun atau organisasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0405",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service lets you run complex SQL queries directly on structured data stored in Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Athena"
      },
      {
        "id": "B",
        "text": "Amazon EMR"
      },
      {
        "id": "C",
        "text": "Amazon QuickSight"
      },
      {
        "id": "D",
        "text": "AWS Glue DataBrew"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon Athena adalah layanan interactive query serverless yang memungkinkan Anda mengeksekusi query SQL standar langsung terhadap data di Amazon S3 tanpa perlu me-load data ke database atau mengelola server.\n\nKenapa opsi lain salah:\n• Opsi B (Amazon EMR): Amazon EMR digunakan untuk memproses komputasi big data skala besar menggunakan framework open source seperti Hadoop dan Spark.\n• Opsi C (Amazon QuickSight): Amazon QuickSight adalah layanan Business Intelligence (BI) cloud untuk visualisasi dashboard dan pelaporan grafis.\n• Opsi D (AWS Glue DataBrew): AWS Glue DataBrew adalah tool visual data preparation untuk membersihkan dan menormalkan data tanpa menulis kode.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0406",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Which cloud computing model offers users the highest level of control over OS and networking?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)"
      },
      {
        "id": "D",
        "text": "Serverless Architecture"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Infrastructure as a Service (IaaS) memberikan kendali teknis paling luas kepada pengguna atas pemilihan OS, patching, konfigurasi routing, storage block, dan firewall jaringan.\n\nKenapa opsi lain salah:\n• Opsi B (Platform as a Service (PaaS)): PaaS mengabstraksi lapisan sistem operasi dan hardware sehingga pengguna hanya mengontrol kode dan runtime aplikasi.\n• Opsi C (Software as a Service (SaaS)): SaaS dikelola secara menyeluruh oleh vendor penyedia layanan; pengguna akhir tidak memiliki kendali infrastruktur sama sekali.\n• Opsi D (Serverless Architecture): Serverless sepenuhnya mengabstraksi manajemen server, provisioning, OS, dan scaling di bawah kap AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0407",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS security service protects applications against Distributed Denial of Service (DDoS)?",
    "options": [
      {
        "id": "A",
        "text": "AWS Shield"
      },
      {
        "id": "B",
        "text": "AWS WAF"
      },
      {
        "id": "C",
        "text": "AWS Firewall Manager"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Shield adalah layanan perlindungan terkelola terhadap serangan DDoS. AWS Shield Standard aktif secara otomatis dan gratis untuk seluruh pelanggan AWS guna menahan serangan Layer 3/4.\n\nKenapa opsi lain salah:\n• Opsi B (AWS WAF): AWS WAF berfokus pada filter paket HTTP/HTTPS Layer 7 terhadap eksploitasi web aplikasi (seperti SQLi dan XSS).\n• Opsi C (AWS Firewall Manager): AWS Firewall Manager mengelola aturan WAF, Shield, dan VPC Security Groups secara terpusat di AWS Organizations.\n• Opsi D (Amazon GuardDuty): Amazon GuardDuty memantau anomali dan ancaman berbahaya dari pembacaan log akun.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0408",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service provides a visual workflow orchestrator to coordinate distributed microservices?",
    "options": [
      {
        "id": "A",
        "text": "AWS Step Functions"
      },
      {
        "id": "B",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "id": "C",
        "text": "Amazon Simple Notification Service (SNS)"
      },
      {
        "id": "D",
        "text": "Amazon EventBridge"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Step Functions adalah layanan visual workflow orchestration serverless yang mengoordinasikan beberapa layanan AWS (seperti Lambda, ECS, dan DynamoDB) menjadi alur kerja state machine terdistribusi.\n\nKenapa opsi lain salah:\n• Opsi B (Amazon Simple Queue Service (SQS)): Amazon SQS adalah antrean pesan asynchronous (point-to-point) untuk menampung pesan sementara antar sistem.\n• Opsi C (Amazon Simple Notification Service (SNS)): Amazon SNS adalah layanan pesan model publish/subscribe (pub/sub) untuk broadcast notifikasi fan-out.\n• Opsi D (Amazon EventBridge): Amazon EventBridge adalah event bus terkelola tanpa server untuk merutekan event dari SaaS atau aplikasi AWS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0409",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "What is an AWS Availability Zone (AZ) primarily composed of?",
    "options": [
      {
        "id": "A",
        "text": "A collection of edge cache servers worldwide"
      },
      {
        "id": "B",
        "text": "A virtual private network connecting multiple AWS accounts"
      },
      {
        "id": "C",
        "text": "A single geographic country containing all AWS resources"
      },
      {
        "id": "D",
        "text": "One or more discrete data centers with redundant power & network"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Satu Availability Zone (AZ) terdiri dari satu atau beberapa datacenter terpisah secara fisik yang dilengkapi sumber daya listrik mandiri, pendingin, dan konektivitas jaringan fiber berlatensi sangat rendah.\n\nKenapa opsi lain salah:\n• Opsi A (A collection of edge cache servers worldwide): Kumpulan server cache global adalah Edge Locations (digunakan oleh Amazon CloudFront), bukan AZ.\n• Opsi B (A virtual private network connecting multiple AWS accounts): Jaringan privat antar akun atau VPC dibuat menggunakan VPC Peering atau AWS Transit Gateway.\n• Opsi C (A single geographic country containing all AWS resources): Suatu wilayah geografis yang berisi beberapa AZ disebut AWS Region, bukan Availability Zone.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0410",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service continuously tracks configuration history and evaluates compliance with desired rules?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "AWS Health"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Config mencatat setiap perubahan konfigurasi resource AWS dari waktu ke waktu dan mengevaluasinya terhadap aturan kepatuhan (Config Rules) secara terus menerus.\n\nKenapa opsi lain salah:\n• Opsi A (AWS CloudTrail): AWS CloudTrail mencatat riwayat pemanggilan API (siapa yang memanggil apa dan kapan), bukan perubahan konfigurasi detail resource.\n• Opsi B (Amazon CloudWatch): Amazon CloudWatch mengumpulkan metrik kinerja, log aplikasi, dan memicu alarm saat threshold terlampaui.\n• Opsi D (AWS Health): AWS Health memberikan peringatan terkait gangguan layanan infrastruktur AWS yang berdampak pada akun Anda.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0411",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS service model enables provisioning cloud infrastructure via JSON or YAML code templates?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS CloudFormation adalah layanan Infrastructure as Code (IaC) deklaratif yang memungkinkan pemodelan, provisioning, dan manajemen seluruh stack resource AWS secara otomatis melalui template JSON atau YAML.\n\nKenapa opsi lain salah:\n• Opsi B (AWS Elastic Beanstalk): AWS Elastic Beanstalk adalah PaaS untuk deploy aplikasi web tanpa menulis spesifikasi template IaC mentah.\n• Opsi C (AWS Systems Manager): AWS Systems Manager adalah pusat manajemen operasional untuk patching, audit, dan inventarisasi fleet server.\n• Opsi D (AWS CodeDeploy): AWS CodeDeploy mengotomatiskan deployment paket kode software ke EC2, Fargate, Lambda, atau server on-premises.",
    "difficulty": "Mudah",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0412",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which IAM entity should be attached to an Amazon EC2 instance to securely access AWS resources?",
    "options": [
      {
        "id": "A",
        "text": "IAM User access key credentials"
      },
      {
        "id": "B",
        "text": "IAM Role"
      },
      {
        "id": "C",
        "text": "IAM Group"
      },
      {
        "id": "D",
        "text": "Root account credentials"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Melampirkan IAM Role ke EC2 instance instance profile adalah best practice standar; AWS STS otomatis menyediakan kredensial keamanan sementara yang dirotasi berkala tanpa perlu hardcode access key.\n\nKenapa opsi lain salah:\n• Opsi A (IAM User access key credentials): Menyimpan IAM User access key di file konfigurasi EC2 sangat berisiko bocor dan melanggar best practice keamanan.\n• Opsi C (IAM Group): IAM Group hanya dapat menampung IAM User dan tidak bisa dilampirkan langsung ke instance EC2.\n• Opsi D (Root account credentials): Kredensial root user tidak boleh digunakan sama sekali untuk operasional server atau aplikasi.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0413",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which AWS hybrid storage service seamlessly connects on-premises applications to AWS cloud storage?",
    "options": [
      {
        "id": "A",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "B",
        "text": "AWS DataSync"
      },
      {
        "id": "C",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "D",
        "text": "AWS Transfer Family"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Storage Gateway menyediakan integrasi hybrid seamless antara software on-premises dengan storage AWS (S3, EBS, FSx) melalui protokol file (NFS/SMB), volume iSCSI, dan Virtual Tape Library (VTL).\n\nKenapa opsi lain salah:\n• Opsi B (AWS DataSync): AWS DataSync adalah akselerator transfer data online berkecepatan tinggi antara on-premises dan AWS, bukan gateway penyimpanan.\n• Opsi C (AWS Snowball Edge): AWS Snowball Edge adalah perangkat fisik offline ruggedized untuk migrasi data skala petabyte dan edge computing.\n• Opsi D (AWS Transfer Family): AWS Transfer Family mengelola migrasi file transfer berbasis SFTP, FTPS, dan FTP langsung ke S3 atau EFS.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0414",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Which AWS service provides centralized identity and single sign-on access across multiple accounts?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Cognito"
      },
      {
        "id": "B",
        "text": "AWS IAM Identity Center"
      },
      {
        "id": "C",
        "text": "AWS Directory Service"
      },
      {
        "id": "D",
        "text": "AWS IAM Groups"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS IAM Identity Center (sebelumnya AWS Single Sign-On) mengelola akses portal masuk tunggal (SSO) secara terpusat bagi user dan tim ke beberapa akun AWS dan aplikasi cloud bisnis.\n\nKenapa opsi lain salah:\n• Opsi A (Amazon Cognito): Amazon Cognito menyediakan sistem autentikasi, registrasi, dan federasi user khusus untuk aplikasi web dan mobile pelanggan akhir.\n• Opsi C (AWS Directory Service): AWS Directory Service menghubungkan atau meng-host Microsoft Active Directory terkelola di AWS.\n• Opsi D (AWS IAM Groups): IAM Groups hanya mengelompokkan beberapa IAM user dalam satu akun tunggal.",
    "difficulty": "Sedang",
    "lang": "en"
  },
  {
    "id": "ccp_kahoot_0415",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Which Elastic Load Balancing (ELB) type is specifically designed for ultra-high performance TCP and UDP?",
    "options": [
      {
        "id": "A",
        "text": "Application Load Balancer (ALB)"
      },
      {
        "id": "B",
        "text": "Network Load Balancer (NLB)"
      },
      {
        "id": "C",
        "text": "Gateway Load Balancer (GWLB)"
      },
      {
        "id": "D",
        "text": "Classic Load Balancer (CLB)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network Load Balancer (NLB) beroperasi pada Layer 4 (Transport Layer) dari model OSI, mampu menangani jutaan request per detik dengan latensi ultra-rendah dan mendukung traffic TCP, UDP, serta TLS.\n\nKenapa opsi lain salah:\n• Opsi A (Application Load Balancer (ALB)): Application Load Balancer (ALB) beroperasi pada Layer 7 (HTTP/HTTPS) dan mendukung routing berbasis host/path.\n• Opsi C (Gateway Load Balancer (GWLB)): Gateway Load Balancer (GWLB) digunakan khusus untuk deploy dan scale virtual appliance pihak ketiga seperti firewall dan IDS/IPS.\n• Opsi D (Classic Load Balancer (CLB)): Classic Load Balancer (CLB) adalah load balancer generasi lama yang sudah tidak direkomendasikan untuk arsitektur baru.",
    "difficulty": "Mudah",
    "lang": "en"
  }
]

export const ccpQuestionBankId: ExamQuestion[] = ccpQuestionBank.filter((q) => q.lang === 'id')
export const ccpQuestionBankEn: ExamQuestion[] = ccpQuestionBank.filter((q) => q.lang === 'en')

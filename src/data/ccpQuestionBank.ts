import type { ExamQuestion } from './questionBank'

export const ccpQuestionBank: ExamQuestion[] = [
  {
    "id": "ccp_kahoot_0001",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Perbedaan utama antara perintah 'aws s3' dan 'aws s3api' pada AWS CLI adalah?",
    "options": [
      {
        "id": "A",
        "text": "aws s3 berbayar, s3api gratis"
      },
      {
        "id": "B",
        "text": "Keduanya tidak memiliki perbedaan fungsi"
      },
      {
        "id": "C",
        "text": "aws s3 khusus Windows, s3api khusus Linux"
      },
      {
        "id": "D",
        "text": "aws s3 perintah high-level, s3api low-level 1-to-1 API"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "aws s3 menyediakan perintah tingkat tinggi (sync, mb, cp), sedangkan aws s3api memberikan kontrol granular 1-to-1 terhadap S3 REST API.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0002",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Aturan penamaan nama bucket Amazon S3 yang WAJIB dipatuhi di seluruh dunia adalah?",
    "options": [
      {
        "id": "A",
        "text": "Wajib diawali dengan kata 'aws-' di depan nama"
      },
      {
        "id": "B",
        "text": "Boleh huruf kapital asalkan unik dalam satu Region"
      },
      {
        "id": "C",
        "text": "Unik global & hanya huruf kecil, angka, tanda minus"
      },
      {
        "id": "D",
        "text": "Boleh sama antar akun asalkan beda Availability Zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Nama bucket S3 harus unik secara global di seluruh dunia dan mengikuti konvensi DNS: tidak boleh ada huruf kapital atau spasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0003",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan keamanan threat detection yang menganalisis DNS Logs dan CloudTrail adalah?",
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
        "text": "AWS KMS"
      },
      {
        "id": "D",
        "text": "Amazon GuardDuty"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection berbasis machine learning yang memonitor anomali pada akun AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0004",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tipe storage block storage persisten yang dipasang sebagai hard disk virtual EC2?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Elastic Block Store (EBS)"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "Amazon Simple Storage Service (S3)"
      },
      {
        "id": "D",
        "text": "Amazon Elastic File System (EFS)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon EBS adalah block-level storage volume yang diformat menjadi filesystem untuk instance EC2.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0005",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan file storage bersama yang bisa di-mount bersamaan oleh banyak EC2 Linux?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Amazon FSx"
      },
      {
        "id": "C",
        "text": "Amazon EBS"
      },
      {
        "id": "D",
        "text": "Amazon Elastic File System (EFS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EFS menyediakan file system bersama berbasis NFSv4 yang elastis dan multi-attach.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0006",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan message broker antrean pesan untuk memisahkan (decouple) microservices?",
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
        "text": "Amazon Simple Notification Service (SNS)"
      },
      {
        "id": "D",
        "text": "Amazon Simple Queue Service (SQS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon SQS adalah distributed message queue yang andal untuk decoupling antar komponen sistem.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0007",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan keamanan apa yang menggunakan ML untuk menemukan data pribadi (PII) di S3?",
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
    "explanation": "Amazon Macie secara spesifik memindai bucket S3 untuk mendeteksi data sensitif/PII (Nomor KTP, Kartu Kredit).",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0008",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Konsep cloud apa yang memungkinkan penambahan kapasitas server saat promo diskon?",
    "options": [
      {
        "id": "A",
        "text": "Skalabilitas (Scalability)"
      },
      {
        "id": "B",
        "text": "High Availability"
      },
      {
        "id": "C",
        "text": "Fault Tolerance"
      },
      {
        "id": "D",
        "text": "Agility"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Skalabilitas adalah kemampuan sistem untuk menangani lonjakan beban kerja dengan menambah sumber daya.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0009",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Apa definisi dari AWS Availability Zone (AZ)?",
    "options": [
      {
        "id": "A",
        "text": "Sebuah kabel fiber optik bawah laut antar benua"
      },
      {
        "id": "B",
        "text": "Satu atau lebih data center fisik terpisah dalam satu Region"
      },
      {
        "id": "C",
        "text": "Sebuah negara tempat server cloud berada"
      },
      {
        "id": "D",
        "text": "Sebuah server tunggal di kantor cabang"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Tiap AZ memiliki fasilitas listrik, pendingin, dan keamanan fisik yang terisolasi dari AZ lain di Region yang sama.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0010",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Alat apa yang memperkirakan biaya bulanan arsitektur solusi SEBELUM dibuat di AWS?",
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
    "explanation": "AWS Pricing Calculator adalah kalkulator web gratis untuk mengestimasi biaya rancangan arsitektur AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0011",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database NoSQL terkelola penuh dengan performa konsisten satu digit milidetik?",
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
    "explanation": "Amazon DynamoDB adalah key-value dan document database NoSQL terkelola yang serverless.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0012",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan apa yang menerima event notification dari S3 lalu mengirim email ke admin?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "id": "C",
        "text": "Amazon Kinesis Data Streams"
      },
      {
        "id": "D",
        "text": "Amazon Simple Notification Service (SNS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "S3 Event Notifications menerbitkan event ke SNS Topic yang kemudian menyiarkan notifikasi email/SMS ke subscribers.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0013",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang menyediakan laporan kepatuhan resmi (SOC 1/2/3, ISO, PCI-DSS) di AWS?",
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
    "explanation": "AWS Artifact adalah portal self-service gratis untuk mengunduh laporan audit compliance pihak ketiga dan perjanjian kepatuhan AWS.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0014",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Keuntungan finansial utama dari komputasi cloud dibandingkan on-premise adalah?",
    "options": [
      {
        "id": "A",
        "text": "Tidak memerlukan koneksi internet untuk mengelola"
      },
      {
        "id": "B",
        "text": "Menghilangkan biaya lisensi software selamanya"
      },
      {
        "id": "C",
        "text": "Hardware server menjadi milik permanen perusahaan"
      },
      {
        "id": "D",
        "text": "Mengubah belanja modal (CapEx) menjadi biaya operasional (OpEx)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Dengan Pay-as-you-go, perusahaan tidak perlu membeli datacenter di muka (CapEx), melainkan membayar pemakaian berkala (OpEx).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0015",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Agar Amazon S3 bisa mem-publish notifikasi ke SNS Topic, apa yang harus diatur?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role pada EC2 CLI Host"
      },
      {
        "id": "B",
        "text": "Security Group Inbound Port 80"
      },
      {
        "id": "C",
        "text": "Access Policy pada SNS Topic mengizinkan s3.amazonaws.com"
      },
      {
        "id": "D",
        "text": "Elastic IP pada SNS Topic"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "SNS Topic memiliki Access Policy (Resource-based Policy) yang wajib memberikan izin Action: 'SNS:Publish' kepada s3.amazonaws.com.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0016",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Model harga EC2 yang memanfaatkan sisa kapasitas nganggur AWS dengan diskon s/d 90%?",
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
    "explanation": "Spot Instances menawarkan diskon terbesar untuk workload toleran interupsi (batch processing, data testing).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0017",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Entitas IAM mana yang memberikan izin sementara ke EC2 untuk mengakses S3?",
    "options": [
      {
        "id": "A",
        "text": "IAM User"
      },
      {
        "id": "B",
        "text": "IAM Policy Standalone"
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
    "explanation": "IAM Role memberikan kredensial temporer yang di-rotate otomatis tanpa perlu menyimpan Access Key statis di server.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0018",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Storage class S3 paling hemat untuk arsip data jangka panjang yang jarang diakses?",
    "options": [
      {
        "id": "A",
        "text": "S3 Express One Zone"
      },
      {
        "id": "B",
        "text": "S3 Glacier Deep Archive"
      },
      {
        "id": "C",
        "text": "S3 One Zone-IA"
      },
      {
        "id": "D",
        "text": "S3 Standard"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "S3 Glacier Deep Archive adalah opsi penyimpanan data paling murah untuk arsip regulasi 7-10 tahun.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0019",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Tindakan keamanan PALING krusial yang harus diterapkan pada AWS Root User adalah?",
    "options": [
      {
        "id": "A",
        "text": "Menghapus password akun root"
      },
      {
        "id": "B",
        "text": "Membuat Access Key ID permanen"
      },
      {
        "id": "C",
        "text": "Membagikan kredensial root ke semua developer"
      },
      {
        "id": "D",
        "text": "Mengaktifkan Multi-Factor Authentication (MFA)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Root user memiliki akses penuh tanpa batas. MFA adalah rekomendasi keamanan utama untuk melindungi root account.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0020",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan keamanan apa yang melindungi aplikasi web dari SQL Injection dan XSS?",
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
    "explanation": "AWS WAF bekerja di Layer 7 (Application Layer) memfilter payload HTTP/HTTPS dari serangan eksploitasi web.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0021",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Paket AWS Support mana yang menyediakan dedicated Technical Account Manager (TAM)?",
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
        "text": "Basic Support"
      },
      {
        "id": "D",
        "text": "Enterprise Support"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "TAM (Technical Account Manager) adalah penasihat teknis khusus yang hanya didapatkan pada paket Enterprise Support (dan Enterprise On-Ramp).",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0022",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan DNS terkelola yang sangat andal dan scalable pada port 53 adalah?",
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
        "text": "Elastic Load Balancing"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Route 53 adalah layanan DNS domain dan routing lalu lintas jaringan cloud AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0023",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Berdasarkan AWS Shared Responsibility Model, apa yang menjadi tanggung jawab AWS?",
    "options": [
      {
        "id": "A",
        "text": "Manajemen data enkripsi pelanggan"
      },
      {
        "id": "B",
        "text": "Konfigurasi firewall Security Group"
      },
      {
        "id": "C",
        "text": "Update sistem operasi pada instance EC2"
      },
      {
        "id": "D",
        "text": "Keamanan fisik data center, server rack, & hypervisor"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS bertanggung jawab 'Security OF the Cloud' (fasilitas fisik, daya, hardware, kabel jaringan, dan software virtualisasi dasar).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0024",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan komputasi serverless yang mengeksekusi kode tanpa perlu setup OS/server?",
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
        "text": "Amazon Lightsail"
      },
      {
        "id": "D",
        "text": "AWS Lambda"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Lambda menjalankan kode berdasarkan trigger/event dan Anda hanya membayar waktu komputasi milidetik yang digunakan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0025",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Kebijakan apa di AWS Organizations untuk membatasi izin maksimum semua akun member?",
    "options": [
      {
        "id": "A",
        "text": "IAM Permissions Boundary"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCPs)"
      },
      {
        "id": "C",
        "text": "Session Policy"
      },
      {
        "id": "D",
        "text": "Resource-based Policy"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Service Control Policies (SCPs) di AWS Organizations menetapkan batas atas (guardrail) izin yang tidak dapat dilanggar akun member.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0026",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan relational database terkelola (RDS) yang eksklusif dan dioptimasi AWS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
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
        "text": "Amazon OpenSearch"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Aurora adalah relational database engine buatan AWS yang kompatibel dengan MySQL dan PostgreSQL hingga 5x lebih cepat.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0027",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Virtual firewall di level subnet yang bersifat stateless di Amazon VPC disebut?",
    "options": [
      {
        "id": "A",
        "text": "Route Table"
      },
      {
        "id": "B",
        "text": "Network Access Control List (NACL)"
      },
      {
        "id": "C",
        "text": "Security Group"
      },
      {
        "id": "D",
        "text": "NAT Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network ACL (NACL) adalah firewall di level subnet yang bersifat stateless (inbound dan outbound harus diatur eksplisit).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0028",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Prinsip keamanan yang hanya memberikan hak akses minimum sesuai fungsi kerja adalah?",
    "options": [
      {
        "id": "A",
        "text": "Zero Trust Perimeter"
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
        "text": "Separation of Powers"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Principle of Least Privilege membatasi izin hanya pada aksi yang benar-benar esensial untuk tugas user.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0029",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan Content Delivery Network (CDN) global milik AWS disebut?",
    "options": [
      {
        "id": "A",
        "text": "Amazon VPC Peering"
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
        "text": "AWS Global Accelerator"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon CloudFront adalah layanan CDN global yang melakukan caching data statis di Edge Locations terdekat dengan user.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0030",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Untuk membatasi user hanya bisa upload ke folder tertentu di bucket S3, gunakan?",
    "options": [
      {
        "id": "A",
        "text": "Security Group port 443"
      },
      {
        "id": "B",
        "text": "Route Table Subnet"
      },
      {
        "id": "C",
        "text": "Network ACL Inbound Rule"
      },
      {
        "id": "D",
        "text": "IAM Policy dengan Condition Prefix (misal: images/*)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Di S3 folder disebut prefix. Kita membatasi izin user di IAM policy dengan Condition StringLike s3:prefix: images/*.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0031",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan file storage bersama berbasis NFS yang dapat di-mount banyak instance EC2 Linux?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EBS"
      },
      {
        "id": "B",
        "text": "Amazon FSx for Windows"
      },
      {
        "id": "C",
        "text": "Amazon Elastic File System (EFS)"
      },
      {
        "id": "D",
        "text": "Amazon S3"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon EFS adalah serverless file system berbasis NFS yang elastis dan dapat diakses bersamaan oleh ribuan instance EC2 Linux.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0032",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan threat detection cerdas berbasis ML yang menganalisis CloudTrail dan DNS Logs?",
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
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection yang terus memantau aktivitas mencurigakan dan akses tidak sah di akun AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0033",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Di bawah Shared Responsibility Model, apa yang menjadi tanggung jawab pelanggan AWS?",
    "options": [
      {
        "id": "A",
        "text": "Pembaruan firmware perangkat keras hypervisor"
      },
      {
        "id": "B",
        "text": "Pembuangan hard disk fisik yang rusak"
      },
      {
        "id": "C",
        "text": "Konfigurasi Security Group dan patch pada Guest OS EC2"
      },
      {
        "id": "D",
        "text": "Keamanan fisik gedung data center AWS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS bertanggung jawab atas keamanan OF the cloud (fisik, hypervisor), sedangkan pelanggan bertanggung jawab atas keamanan IN the cloud (OS tamu, firewall).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0034",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Alat apa yang memungkinkan pembuatan batas anggaran biaya dan peringatan saat terlampaui?",
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
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "AWS Budgets"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Budgets memungkinkan pembuatan budget khusus untuk melacak biaya dan penggunaan, serta memicu notifikasi peringatan jika terlampaui.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0035",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan messaging pub/sub yang mengirimkan notifikasi satu-ke-banyak (fanout) ke email/SMS?",
    "options": [
      {
        "id": "A",
        "text": "AWS SES"
      },
      {
        "id": "B",
        "text": "Amazon MQ"
      },
      {
        "id": "C",
        "text": "Amazon SQS"
      },
      {
        "id": "D",
        "text": "Amazon Simple Notification Service (SNS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon SNS adalah layanan publish/subscribe terkelola untuk pesan fanout ke banyak endpoint pelanggan seperti email, SMS, SQS, atau Lambda.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0036",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Apa keuntungan finansial utama komputasi cloud dibanding infrastruktur on-premise?",
    "options": [
      {
        "id": "A",
        "text": "Menghilangkan biaya lisensi sistem operasi selamanya"
      },
      {
        "id": "B",
        "text": "Menghilangkan kebutuhan koneksi internet untuk pengelolaan"
      },
      {
        "id": "C",
        "text": "Mengubah belanja modal (CapEx) menjadi biaya operasional (OpEx)"
      },
      {
        "id": "D",
        "text": "Hardware server menjadi milik permanen perusahaan"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Di cloud, pelanggan beralih dari belanja modal di muka yang besar (CapEx) menjadi biaya operasional berjalan (OpEx) sesuai pemakaian (pay-as-you-go).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0037",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Konsep cloud apa yang memungkinkan penambahan kapasitas server saat beban melonjak?",
    "options": [
      {
        "id": "A",
        "text": "Fault Tolerance"
      },
      {
        "id": "B",
        "text": "Agilitas (Agility)"
      },
      {
        "id": "C",
        "text": "High Availability"
      },
      {
        "id": "D",
        "text": "Skalabilitas (Scalability)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Skalabilitas adalah kemampuan sistem untuk menangani lonjakan beban kerja dengan menambah sumber daya komputasi secara terarah.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0038",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Entitas IAM mana yang tepat digunakan untuk memberikan izin akses sementara ke EC2?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role"
      },
      {
        "id": "B",
        "text": "IAM User dengan password"
      },
      {
        "id": "C",
        "text": "Kredensial root akun"
      },
      {
        "id": "D",
        "text": "IAM Group dengan API key"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "IAM Role memberikan kredensial keamanan sementara (temporary credentials) kepada resource seperti instance EC2 tanpa hardcoded API keys.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0039",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan keamanan apa yang menggunakan Machine Learning untuk mendeteksi data pribadi di S3?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Detective"
      },
      {
        "id": "B",
        "text": "AWS Secrets Manager"
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
    "explanation": "Amazon Macie adalah layanan keamanan data berbasis ML untuk menemukan, mengklasifikasi, dan melindungi data sensitif/PII di Amazon S3.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0040",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Konsep arsitektur cloud apa yang memastikan sistem tetap berjalan meski ada komponen gagal?",
    "options": [
      {
        "id": "A",
        "text": "Cost Optimization"
      },
      {
        "id": "B",
        "text": "Horizontal Elasticity"
      },
      {
        "id": "C",
        "text": "Fault Tolerance & High Availability"
      },
      {
        "id": "D",
        "text": "Microservices Decoupling"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Fault Tolerance adalah kemampuan sistem untuk tetap berfungsi normal tanpa downtime ketika terjadi kegagalan pada satu atau lebih komponen pendukung.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0041",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Alat web gratis AWS untuk memperkirakan estimasi biaya SEBELUM membangun solusi?",
    "options": [
      {
        "id": "A",
        "text": "Cost and Usage Report"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "D",
        "text": "AWS Pricing Calculator"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Pricing Calculator adalah alat estimasi berbasis web gratis untuk merencanakan dan memperkirakan biaya arsitektur AWS sebelum implementasi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0042",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Fitur apa di AWS Organizations yang menggabungkan tagihan seluruh akun untuk diskon volume?",
    "options": [
      {
        "id": "A",
        "text": "Consolidated Billing"
      },
      {
        "id": "B",
        "text": "Service Control Policies"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer Sharing"
      },
      {
        "id": "D",
        "text": "Cost Allocation Tags"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Consolidated Billing menyatukan pembayaran seluruh member account ke satu management account dan menggabungkan penggunaan untuk diskon volume tiering.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0043",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan antrean pesan terdistribusi (message queue) untuk memisahkan microservices?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (SQS)"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon Kinesis"
      },
      {
        "id": "D",
        "text": "Amazon Simple Notification Service (SNS)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon SQS adalah distributed message queuing service untuk mendecouple dan menskalakan microservices serta distributed systems.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0044",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang menyediakan laporan kepatuhan resmi (SOC, ISO, PCI-DSS) di AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Artifact"
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
        "text": "AWS Security Hub"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Artifact adalah portal swalayan untuk mengunduh laporan audit kepatuhan dan perjanjian hukum (compliance reports) resmi dari AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0045",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Model harga EC2 yang memanfaatkan sisa kapasitas nganggur dengan diskon hingga 90%?",
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
        "text": "Reserved Instances"
      },
      {
        "id": "D",
        "text": "Spot Instances"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon EC2 Spot Instances menawarkan diskon hingga 90% dari harga On-Demand untuk beban kerja yang fleksibel terhadap interupsi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0046",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang dipakai untuk menginstal CloudWatch Agent ke banyak EC2 tanpa SSH?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2 Auto Scaling Lifecycle Hook"
      },
      {
        "id": "B",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager (SSM) Run Command"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Systems Manager Run Command memungkinkan eksekusi perintah administrasi dan instalasi software secara massal dan aman tanpa membuka port 22 (SSH).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0047",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Virtual firewall di level subnet yang bersifat stateless di dalam Amazon VPC disebut?",
    "options": [
      {
        "id": "A",
        "text": "Internet Gateway"
      },
      {
        "id": "B",
        "text": "Network Access Control List (NACL)"
      },
      {
        "id": "C",
        "text": "Security Group"
      },
      {
        "id": "D",
        "text": "NAT Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Network ACL (NACL) adalah firewall stateless di tingkat subnet, yang mengevaluasi aturan inbound dan outbound secara terpisah.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0048",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur CloudWatch Logs apa yang mengubah teks log HTTP 404 menjadi metrik kuantitatif?",
    "options": [
      {
        "id": "A",
        "text": "Log Stream Multiplexer"
      },
      {
        "id": "B",
        "text": "CloudWatch Insights Export"
      },
      {
        "id": "C",
        "text": "Subscription Filter"
      },
      {
        "id": "D",
        "text": "Metric Filter"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Metric Filter memfilter baris log teks mentah berdasarkan pola tertentu (misal: status_code=404) dan mengubahnya menjadi metrik numerik time-series.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0049",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Prinsip keamanan yang hanya memberikan hak akses minimum sesuai pekerjaan disebut?",
    "options": [
      {
        "id": "A",
        "text": "Zero Trust Perimeter"
      },
      {
        "id": "B",
        "text": "Separation of Environments"
      },
      {
        "id": "C",
        "text": "Principle of Least Privilege"
      },
      {
        "id": "D",
        "text": "Defense in Depth"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Principle of Least Privilege membatasi hak akses pengguna hanya pada aksi dan sumber daya yang benar-benar esensial untuk tugasnya.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0050",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan inspeksi otomatis rekomendasi optimasi biaya, performa, dan keamanan di AWS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "AWS Well-Architected Tool"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "AWS Health Dashboard"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Trusted Advisor memberikan panduan real-time untuk membantu mengoptimalkan biaya, meningkatkan performa, dan memperkuat keamanan arsitektur.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0051",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan AWS yang tepat untuk mengaudit kepatuhan tag dan EBS volume yang unattached?",
    "options": [
      {
        "id": "A",
        "text": "AWS Config"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail"
      },
      {
        "id": "D",
        "text": "AWS Shield Advanced"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Config berfungsi melacak inventaris, mengaudit histori konfigurasi resource, dan mengevaluasi kepatuhan terhadap aturan (seperti required-tags & ec2-volume-inuse-check).",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0052",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan pencatatan dan audit seluruh aktivitas API call serta login di akun AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
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
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS CloudTrail merekam aktivitas tata kelola, kepatuhan, dan audit operasional akun AWS melalui pencatatan setiap panggilan API.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0053",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Definisi dari AWS Availability Zone (AZ) yang paling tepat adalah?",
    "options": [
      {
        "id": "A",
        "text": "Satu atau lebih data center fisik terpisah dalam satu Region"
      },
      {
        "id": "B",
        "text": "Pusat data bersama pihak ketiga di luar AWS"
      },
      {
        "id": "C",
        "text": "Satu negara tempat server cloud diletakkan"
      },
      {
        "id": "D",
        "text": "Kabel fiber optik bawah laut yang menghubungkan benua"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Setiap AZ terdiri dari satu atau lebih data center diskrit dengan fasilitas daya, pendingin, dan jaringan yang terisolasi dalam satu AWS Region.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0054",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Pilar AWS Well-Architected Framework mana yang berfokus menghindari pemborosan dana?",
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
        "text": "Reliability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Cost Optimization berfokus pada kemampuan menjalankan sistem untuk memberikan nilai bisnis optimal dengan pengeluaran biaya serendah mungkin.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0055",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database NoSQL terkelola penuh dengan latensi satu digit milidetik skala besar?",
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
        "text": "Amazon Redshift"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon DynamoDB adalah database key-value dan document serverless yang menawarkan latensi satu digit milidetik pada skala beban berapapun.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0056",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Mengapa utilisasi RAM pada EC2 tidak terlihat di grafik default Amazon CloudWatch?",
    "options": [
      {
        "id": "A",
        "text": "CloudWatch membebankan biaya tambahan untuk melihat RAM"
      },
      {
        "id": "B",
        "text": "EC2 tidak memiliki memori fisik RAM"
      },
      {
        "id": "C",
        "text": "RAM ada di level OS tamu, di luar jangkauan Hypervisor AWS"
      },
      {
        "id": "D",
        "text": "RAM hanya bisa dipantau lewat AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Hypervisor AWS hanya memantau metrik eksternal host (CPU, disk I/O, network). RAM dan file sistem berada di dalam Guest OS sehingga memerlukan CloudWatch Agent.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0057",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan apa yang bereaksi seketika saat status instance EC2 berubah menjadi Stopped?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail Insights"
      },
      {
        "id": "B",
        "text": "Amazon CloudWatch Metric Alarm"
      },
      {
        "id": "C",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch Events (Amazon EventBridge)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "CloudWatch Events (kini berevolusi menjadi EventBridge) bersifat event-driven near real-time, mendeteksi perubahan status resource secara instan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0058",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Storage class S3 paling hemat biaya untuk arsip jangka panjang yang jarang diakses?",
    "options": [
      {
        "id": "A",
        "text": "S3 Standard-Infrequent Access"
      },
      {
        "id": "B",
        "text": "S3 Glacier Deep Archive"
      },
      {
        "id": "C",
        "text": "S3 Express One Zone"
      },
      {
        "id": "D",
        "text": "S3 One Zone-IA"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "S3 Glacier Deep Archive adalah storage class paling ekonomis di AWS untuk pengarsipan jangka panjang dengan waktu retrieval beberapa jam.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0059",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Service AWS apa yang memberikan rekomendasi penghematan biaya, keamanan, dan toleransi kesalahan?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "AWS Config"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Trusted Advisor memberikan rekomendasi real-time untuk 5 pilar: biaya, performa, keamanan, toleransi kesalahan, dan kuota layanan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0060",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang digunakan di lab untuk menjalankan query SQL langsung atas log CloudTrail di S3?",
    "options": [
      {
        "id": "A",
        "text": "Amazon RDS PostgreSQL"
      },
      {
        "id": "B",
        "text": "Amazon Athena"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon OpenSearch Service"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Athena adalah serverless query service interaktif yang memungkinkan analisis log CloudTrail di S3 menggunakan SQL standar tanpa ETL.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0061",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Pilar AWS Well-Architected mana yang fokus pada efisiensi penggunaan sumber daya komputasi?",
    "options": [
      {
        "id": "A",
        "text": "Performance Efficiency"
      },
      {
        "id": "B",
        "text": "Cost Optimization"
      },
      {
        "id": "C",
        "text": "Operational Excellence"
      },
      {
        "id": "D",
        "text": "Reliability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Pilar Performance Efficiency berfokus pada penggunaan sumber daya komputasi secara efisien untuk memenuhi kebutuhan sistem dan mempertahankan efisiensi.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0062",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur AWS Organizations apa yang digunakan untuk menetapkan batas izin maksimum pada member accounts?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role Delegation"
      },
      {
        "id": "B",
        "text": "Resource Access Manager (RAM)"
      },
      {
        "id": "C",
        "text": "Service Control Policies (SCP)"
      },
      {
        "id": "D",
        "text": "Security Group Ingress Rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Service Control Policies (SCP) menetapkan batasan izin (guardrails) maksimum untuk akun member di AWS Organizations.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0063",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Secara default, berapa lama AWS CloudTrail menyimpan riwayat log pada menu Event History di konsol?",
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
    "explanation": "CloudTrail Event History menyimpan catatan aktivitas API manajemen selama 90 hari secara gratis tanpa perlu membuat trail.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0064",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan storage hibrida apa yang menghubungkan aplikasi on-premise ke cloud storage AWS secara seamless?",
    "options": [
      {
        "id": "A",
        "text": "AWS DataSync"
      },
      {
        "id": "B",
        "text": "Amazon S3 Transfer Acceleration"
      },
      {
        "id": "C",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Storage Gateway menyediakan integrasi penyimpanan hybrid (File, Volume, Tape Gateway) antara on-premise dan cloud AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0065",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Tipe support plan terendah yang memberikan akses Technical Account Manager (TAM) khusus adalah?",
    "options": [
      {
        "id": "A",
        "text": "Developer Plan"
      },
      {
        "id": "B",
        "text": "Business Plan"
      },
      {
        "id": "C",
        "text": "Enterprise Support"
      },
      {
        "id": "D",
        "text": "Basic Support"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Enterprise Support adalah paket dukungan AWS yang menyediakan Technical Account Manager (TAM) khusus dan Concierge Support 24/7.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0066",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan CDN global AWS yang mempercepat pengiriman konten web statis dan dinamis dengan caching adalah?",
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
        "text": "AWS Global Accelerator"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon CloudFront adalah Content Delivery Network (CDN) yang mengirimkan data, video, dan aplikasi secara aman dengan latensi rendah melalui Edge Locations.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0067",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Field apa di log CloudTrail yang menunjukkan akun atau entitas IAM yang memanggil aksi/API?",
    "options": [
      {
        "id": "A",
        "text": "requestParameters"
      },
      {
        "id": "B",
        "text": "sourceIPAddress"
      },
      {
        "id": "C",
        "text": "userIdentity"
      },
      {
        "id": "D",
        "text": "eventSource"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Field userIdentity dalam struktur JSON log CloudTrail memuat informasi identitas pemanggil (userName, ARN, type, dsb).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0068",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Perbedaan mendasar antara AWS CloudTrail dan Amazon CloudWatch adalah?",
    "options": [
      {
        "id": "A",
        "text": "CloudTrail untuk metrik performa, CloudWatch untuk audit API"
      },
      {
        "id": "B",
        "text": "CloudTrail untuk audit API pemanggil, CloudWatch untuk metrik & alarm"
      },
      {
        "id": "C",
        "text": "CloudTrail hanya untuk billing, CloudWatch untuk enkripsi data"
      },
      {
        "id": "D",
        "text": "CloudTrail mengelola server fisik, CloudWatch membuat VPC"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CloudTrail melacak aktivitas API dan audit ('WHO did WHAT'), sedangkan CloudWatch memantau performa sistem, log aplikasi, dan alarm.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0069",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan kepatuhan apa yang memberikan akses on-demand ke laporan keamanan & sertifikasi AWS (misal SOC, PCI)?",
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
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Secrets Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Artifact adalah portal pusat untuk mengunduh laporan kepatuhan AWS (seperti ISO, SOC, PCI) dan perjanjian hukum secara mandiri.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0070",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Komponen VPC apa yang berfungsi sebagai virtual firewall stateless di tingkat subnet?",
    "options": [
      {
        "id": "A",
        "text": "Security Group"
      },
      {
        "id": "B",
        "text": "NAT Gateway"
      },
      {
        "id": "C",
        "text": "Internet Gateway"
      },
      {
        "id": "D",
        "text": "Network Access Control List (NACL)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Network ACL (NACL) adalah lapisan keamanan firewall stateless di level subnet yang memeriksa lalu lintas inbound dan outbound.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0071",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "EventName CloudTrail apa yang tercatat saat hacker menambahkan inbound rule SSH baru di Security Group?",
    "options": [
      {
        "id": "A",
        "text": "CreateSecurityGroup"
      },
      {
        "id": "B",
        "text": "AuthorizeSecurityGroupIngress"
      },
      {
        "id": "C",
        "text": "ModifyInstanceAttribute"
      },
      {
        "id": "D",
        "text": "RevokeSecurityGroupEgress"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AuthorizeSecurityGroupIngress adalah API call yang dipanggil ketika sebuah rule masuk (inbound) baru ditambahkan ke Security Group.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0072",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan keamanan AI apa yang mendeteksi ancaman terus-menerus dengan menganalisis CloudTrail dan VPC Flow Logs?",
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
        "text": "AWS Shield"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty menganalisis AWS CloudTrail events, VPC Flow Logs, dan DNS query logs untuk mendeteksi ancaman keamanan secara cerdas.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0073",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Opsi pricing EC2 apa yang menawarkan diskon terbesar (hingga 90%) untuk workload fleksibel & tahan interupsi?",
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
    "explanation": "Spot Instances memanfaatkan kapasitas komputasi cadangan AWS yang tidak terpakai dengan diskon hingga 90%, namun dapat dihentikan dengan pemberitahuan 2 menit.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0074",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang digunakan untuk membuat arsitektur as code (IaC) menggunakan template JSON/YAML?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeDeploy"
      },
      {
        "id": "B",
        "text": "AWS OpsWorks"
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
    "explanation": "AWS CloudFormation memungkinkan pengguna memodelkan dan mengonfigurasi seluruh sumber daya infrastruktur AWS melalui kode (IaC).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0075",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Untuk mengeraskan keamanan SSH pada instance Linux lab, opsi apa yang diubah pada file /etc/ssh/sshd_config?",
    "options": [
      {
        "id": "A",
        "text": "Port 80 menjadi Port 443"
      },
      {
        "id": "B",
        "text": "PermitRootLogin yes menjadi no"
      },
      {
        "id": "C",
        "text": "PasswordAuthentication yes menjadi no"
      },
      {
        "id": "D",
        "text": "AllowUsers ec2-user menjadi chaos"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Mengubah 'PasswordAuthentication no' menonaktifkan login SSH berbasis password sehingga hanya autentikasi key pair kriptografis yang diizinkan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0076",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database NoSQL key-value terkelola penuh dari AWS yang menawarkan latensi single-digit milidetik adalah?",
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
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon DocumentDB"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon DynamoDB adalah database NoSQL serverless fully-managed yang memberikan performa konsisten di bawah 10 milidetik pada skala apa pun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0077",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Fitur AWS apa yang memungkinkan beberapa akun AWS digabung untuk mendapatkan diskon volume (Volume Discounts)?",
    "options": [
      {
        "id": "A",
        "text": "Consolidated Billing di AWS Organizations"
      },
      {
        "id": "B",
        "text": "Cost Allocation Tags"
      },
      {
        "id": "C",
        "text": "AWS Budgets Alerts"
      },
      {
        "id": "D",
        "text": "AWS Cost Explorer Reports"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Consolidated Billing menggabungkan tagihan semua member account di bawah satu payer account sehingga penggunaan diakumulasi untuk diskon volume.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0078",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan apa yang mempermudah migrasi database on-premise ke AWS dengan meminimalkan downtime aplikasi?",
    "options": [
      {
        "id": "A",
        "text": "AWS DataSync"
      },
      {
        "id": "B",
        "text": "AWS Snowcone"
      },
      {
        "id": "C",
        "text": "AWS Schema Conversion Tool saja"
      },
      {
        "id": "D",
        "text": "AWS Database Migration Service (DMS)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "AWS Database Migration Service (AWS DMS) membantu memigrasikan database ke AWS dengan cepat, aman, dan meminimalkan downtime sistem sumber.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0079",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Dalam Shared Responsibility Model, siapakah yang bertanggung jawab mengonfigurasi enkripsi data at-rest di S3?",
    "options": [
      {
        "id": "A",
        "text": "Hanya AWS secara otomatis"
      },
      {
        "id": "B",
        "text": "Pelanggan (Customer)"
      },
      {
        "id": "C",
        "text": "Penyedia hardware data center"
      },
      {
        "id": "D",
        "text": "AWS Marketplace vendor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pelanggan bertanggung jawab atas pengelolaan data pelanggan, klasifikasi aset, serta konfigurasi enkripsi (data at-rest & in-transit).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0080",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Manakah storage class Amazon S3 yang paling hemat biaya untuk data arsip jangka panjang yang jarang diakses?",
    "options": [
      {
        "id": "A",
        "text": "S3 Standard"
      },
      {
        "id": "B",
        "text": "S3 Standard-Infrequent Access"
      },
      {
        "id": "C",
        "text": "S3 One Zone-IA"
      },
      {
        "id": "D",
        "text": "S3 Glacier Flexible / Deep Archive"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon S3 Glacier Flexible Retrieval dan S3 Glacier Deep Archive adalah opsi penyimpanan arsip jangka panjang dengan biaya terendah di AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0081",
    "domain": "Billing & Pricing",
    "type": "single",
    "prompt": "Tool apa yang dapat memperkirakan biaya bulanan arsitektur AWS sebelum sistem dibangun di cloud?",
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
        "text": "AWS Billing Conductor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS Pricing Calculator adalah tool estimasi berbasis web untuk memperkirakan biaya pemakaian layanan AWS sebelum solusi diimplementasikan.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0082",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan komputasi serverless yang menjalankan kode berdasarkan trigger event tanpa mengelola server sama sekali?",
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
    "explanation": "AWS Lambda memungkinkan Anda menjalankan kode tanpa mengelola server, dengan penagihan hanya per milidetik saat kode dieksekusi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0083",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur apa yang memungkinkan transfer data pribadi berkecepatan tinggi antara VPC dan layanan AWS seperti S3?",
    "options": [
      {
        "id": "A",
        "text": "VPC Endpoint (Gateway / Interface)"
      },
      {
        "id": "B",
        "text": "Internet Gateway"
      },
      {
        "id": "C",
        "text": "Egress-only Internet Gateway"
      },
      {
        "id": "D",
        "text": "NAT Instance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "VPC Endpoint memungkinkan koneksi privat antara VPC Anda dan layanan AWS yang didukung tanpa memerlukan Internet Gateway atau NAT.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0084",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang bertindak sebagai Web Application Firewall untuk memblokir serangan umum seperti SQLi dan XSS?",
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
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "AWS Network Firewall"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS WAF membantu melindungi aplikasi web dari eksploitasi web umum (SQL Injection, Cross-Site Scripting) di level aplikasi (Layer 7).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0085",
    "domain": "Cloud Concepts",
    "type": "single",
    "prompt": "Prinsip arsitektur cloud mana yang menyarankan pemisahan komponen agar kegagalan satu modul tidak mematikan sistem?",
    "options": [
      {
        "id": "A",
        "text": "Loose Coupling (Kopling Longgar)"
      },
      {
        "id": "B",
        "text": "Monolithic Integration"
      },
      {
        "id": "C",
        "text": "Single Point of Architecture"
      },
      {
        "id": "D",
        "text": "Centralized Data Storage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Loose Coupling (pengurangan dependensi antar komponen) memastikan bahwa jika satu komponen gagal, komponen lain tetap dapat beroperasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0086",
    "domain": "Security & Compliance",
    "type": "single",
    "prompt": "Layanan apa yang mengelola lifecycle kunci enkripsi dan terintegrasi dengan sebagian besar layanan AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudHSM"
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
        "text": "Amazon Cognito"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS KMS adalah layanan terkelola yang memudahkan pembuatan, pengelolaan, dan kontrol kunci kriptografis yang digunakan untuk mengenkripsi data.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0087",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Karakteristik komputasi cloud apa yang memungkinkan alokasi dan pelepasan sumber daya otomatis sesuai beban?",
    "options": [
      {
        "id": "A",
        "text": "Elastisitas (Elasticity)"
      },
      {
        "id": "B",
        "text": "Penyimpanan Statis"
      },
      {
        "id": "C",
        "text": "Toleransi Fisik"
      },
      {
        "id": "D",
        "text": "Latensi Rendah"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Elastisitas adalah kemampuan untuk menyesuaikan (tambah/kurangi) kapasitas komputasi secara dinamis dan otomatis sesuai fluktuasi permintaan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0088",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan transfer data fisik berkapasitas Petabyte menggunakan perangkat keras khusus terlindungi dari AWS adalah?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Snowball"
      },
      {
        "id": "C",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "D",
        "text": "Amazon S3 Transfer Acceleration"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Keluarga AWS Snow (termasuk AWS Snowball) menyediakan perangkat keras fisik khusus untuk memindahkan data skala Petabyte ke AWS secara offline.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0089",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Entitas IAM mana yang paling tepat digunakan untuk memberikan izin akses sementara ke EC2?",
    "options": [
      {
        "id": "A",
        "text": "IAM User"
      },
      {
        "id": "B",
        "text": "IAM Group"
      },
      {
        "id": "C",
        "text": "IAM Role"
      },
      {
        "id": "D",
        "text": "IAM Root Account"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "IAM Role digunakan untuk memberikan temporary credentials ke resource AWS seperti EC2 tanpa perlu hardcode access key.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0090",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Perbedaan utama antara opsi --filter dan --query pada perintah AWS CLI adalah?",
    "options": [
      {
        "id": "A",
        "text": "--filter di server-side AWS, --query di client-side (JMESPath)"
      },
      {
        "id": "B",
        "text": "--filter hanya untuk JSON, --query untuk table"
      },
      {
        "id": "C",
        "text": "--filter di client-side, --query di server-side AWS"
      },
      {
        "id": "D",
        "text": "Keduanya identik dan hanya alias sintaks"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "--filter menyaring data di server-side AWS (hemat bandwidth), sedangkan --query memproyeksikan data di client-side dengan JMESPath.",
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
    "prompt": "Berapa batas maksimal user-defined tags yang dapat dipasang pada satu resource AWS?",
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
    "explanation": "AWS menetapkan batas kuota maksimal 50 user-defined tags untuk sebagian besar resource AWS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0093",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tipe block storage persisten yang dipasang sebagai virtual disk pada instance EC2 adalah?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EFS"
      },
      {
        "id": "B",
        "text": "Amazon EBS"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Instance Store"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Elastic Block Store (EBS) menyediakan raw block storage persisten berkinerja tinggi untuk instance EC2.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0094",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur AWS Organizations apa yang dapat menolak pembuatan EC2 jika tidak menyertakan tag wajib?",
    "options": [
      {
        "id": "A",
        "text": "Consolidated Billing"
      },
      {
        "id": "B",
        "text": "Tag Policies & SCP"
      },
      {
        "id": "C",
        "text": "Resource Groups"
      },
      {
        "id": "D",
        "text": "AWS Cost Explorer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Service Control Policies (SCP) dan Tag Policies di AWS Organizations dapat memberlakukan guardrail wajib tag (preventive control).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0095",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan message queue terdistribusi yang digunakan untuk decoupling microservices adalah?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SNS"
      },
      {
        "id": "B",
        "text": "AWS Step Functions"
      },
      {
        "id": "C",
        "text": "Amazon SQS"
      },
      {
        "id": "D",
        "text": "Amazon MQ"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Simple Queue Service (SQS) adalah antrean pesan terkelola penuh untuk decoupling komponen aplikasi dan microservices.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0096",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan threat detection cerdas yang menganalisis CloudTrail dan DNS Logs menggunakan ML adalah?",
    "options": [
      {
        "id": "A",
        "text": "AWS GuardDuty"
      },
      {
        "id": "B",
        "text": "AWS Shield"
      },
      {
        "id": "C",
        "text": "Amazon Inspector"
      },
      {
        "id": "D",
        "text": "AWS Macie"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Amazon GuardDuty adalah layanan intelligent threat detection berbasis Machine Learning yang menganalisis CloudTrail, VPC Flow, dan DNS Logs.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0097",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Shared storage berbasis NFS yang dapat di-mount secara simultan oleh banyak EC2 Linux adalah?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EBS"
      },
      {
        "id": "B",
        "text": "Amazon EFS"
      },
      {
        "id": "C",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "D",
        "text": "AWS Storage Gateway"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Elastic File System (EFS) adalah serverless shared file storage berbasis NFS v4 untuk instance Linux yang dapat diakses bersamaan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0098",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Agar custom tag dapat digunakan untuk breakdown laporan biaya di AWS Cost Explorer, tag harus?",
    "options": [
      {
        "id": "A",
        "text": "Ditambahkan ke IAM User Policy"
      },
      {
        "id": "B",
        "text": "Diaktivasi di Cost Allocation Tags pada Billing Console"
      },
      {
        "id": "C",
        "text": "Didaftarkan manual di AWS Trusted Advisor"
      },
      {
        "id": "D",
        "text": "Menggunakan format huruf kapital semua (UPPERCASE)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Custom tag tidak otomatis muncul di laporan tagihan; administrator harus mengaktifkannya di menu Cost Allocation Tags pada AWS Billing Console.",
    "difficulty": "Sulit",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0099",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan keamanan yang menggunakan Machine Learning untuk mendeteksi data sensitif (PII) di S3?",
    "options": [
      {
        "id": "A",
        "text": "AWS KMS"
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
        "text": "AWS GuardDuty"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Macie adalah layanan data security dan privacy yang menggunakan pattern matching dan ML untuk menemukan data sensitif (PII) di S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0100",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur AWS Organizations yang menggabungkan tagihan seluruh akun untuk diskon volume adalah?",
    "options": [
      {
        "id": "A",
        "text": "Cost Allocation Tags"
      },
      {
        "id": "B",
        "text": "Consolidated Billing"
      },
      {
        "id": "C",
        "text": "AWS Budgets"
      },
      {
        "id": "D",
        "text": "Service Control Policies"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Consolidated Billing menggabungkan seluruh tagihan member accounts ke payer account untuk mendapatkan diskon volume secara agregat.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0101",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Pada kebijakan 'Tag-or-Terminate', tindakan apa yang dilakukan terhadap resource non-compliant?",
    "options": [
      {
        "id": "A",
        "text": "Otomatis di-quarantine ke VPC lain"
      },
      {
        "id": "B",
        "text": "Diberikan tag default secara otomatis"
      },
      {
        "id": "C",
        "text": "Resource langsung di-terminate / dimusnahkan"
      },
      {
        "id": "D",
        "text": "Tagihan akun langsung dibekukan"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tag-or-terminate policy adalah governance strict di mana resource liar tanpa tag wajib langsung diterminasi untuk mencegah security risk & unbudgeted cost.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0102",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan portal mandiri untuk mengakses dokumen audit dan laporan compliance resmi AWS adalah?",
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
    "explanation": "AWS Artifact adalah portal compliance on-demand resmi untuk mengunduh laporan keamanan (SOC 1/2/3, ISO, PCI-DSS) dan perjanjian kepatuhan.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0103",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tool gratis AWS untuk memproyeksikan estimasi biaya bulanan SEBELUM membangun infrastruktur?",
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
        "text": "AWS Pricing Calculator"
      },
      {
        "id": "D",
        "text": "Cost & Usage Report"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Pricing Calculator adalah web tool gratis untuk membuat arsitektur perkiraan biaya AWS sebelum workload dibangun.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0104",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database relational terkelola eksklusif AWS dengan kompatibilitas MySQL & PostgreSQL?",
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
        "text": "Amazon OpenSearch"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Aurora adalah relational database enterprise eksklusif AWS yang kompatibel dengan MySQL dan PostgreSQL dengan performa hingga 5x lipat.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0105",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Pricing model EC2 yang memanfaatkan spare capacity dengan diskon hingga 90% namun interruptible?",
    "options": [
      {
        "id": "A",
        "text": "Reserved Instances"
      },
      {
        "id": "B",
        "text": "On-Demand Instances"
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
      "C"
    ],
    "explanation": "EC2 Spot Instances memanfaatkan spare compute capacity AWS dengan diskon hingga 90%, cocok untuk fault-tolerant & flexible workloads.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0106",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Dalam AWS Shared Responsibility Model, manakah yang merupakan tanggung jawab pelanggan?",
    "options": [
      {
        "id": "A",
        "text": "Patching OS pada instance Amazon EC2"
      },
      {
        "id": "B",
        "text": "Pemusnahan fisik media storage di Data Center"
      },
      {
        "id": "C",
        "text": "Keamanan fisik fasilitas Edge Location"
      },
      {
        "id": "D",
        "text": "Patching hypervisor virtualisasi AWS"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Berdasarkan Shared Responsibility Model (Security IN the Cloud), pelanggan bertanggung jawab atas konfigurasi OS, patching OS EC2, dan firewall.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0107",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan pub/sub messaging untuk mengirimkan notifikasi satu-ke-banyak (fanout) ke email/SMS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SES"
      },
      {
        "id": "B",
        "text": "Amazon SQS"
      },
      {
        "id": "C",
        "text": "Amazon SNS"
      },
      {
        "id": "D",
        "text": "Amazon MQ"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Simple Notification Service (SNS) adalah layanan pub/sub messaging terkelola untuk pengiriman pesan fanout ke subscriber (email, SMS, Lambda, SQS).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0108",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Keuntungan finansial utama dari komputasi cloud dibandingkan model on-premises tradisional adalah?",
    "options": [
      {
        "id": "A",
        "text": "Mengganti biaya operasional (OpEx) menjadi modal besar (CapEx)"
      },
      {
        "id": "B",
        "text": "Mengganti belanja modal di awal (CapEx) menjadi biaya variabel (OpEx)"
      },
      {
        "id": "C",
        "text": "Menghilangkan kewajiban monitoring performa aplikasi"
      },
      {
        "id": "D",
        "text": "Mengurangi kebutuhan konektivitas internet"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Cloud computing mengubah Capital Expenditures (CapEx) besar di awal menjadi Operational Expenditures (OpEx) variabel yang fleksibel (pay-as-you-go).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0109",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan DNS terkelola yang highly available dan scalable pada port 53 adalah?",
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
        "text": "Amazon CloudFront"
      },
      {
        "id": "D",
        "text": "AWS Global Accelerator"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Amazon Route 53 adalah layanan cloud Domain Name System (DNS) terkelola yang sangat andal dan dapat diskalakan secara global.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0110",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Pilar AWS Well-Architected Framework mana yang berfokus pada penghindaran pemborosan dana?",
    "options": [
      {
        "id": "A",
        "text": "Operational Excellence"
      },
      {
        "id": "B",
        "text": "Cost Optimization"
      },
      {
        "id": "C",
        "text": "Reliability"
      },
      {
        "id": "D",
        "text": "Performance Efficiency"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pilar Cost Optimization berfokus pada kemampuan menjalankan sistem untuk memberikan nilai bisnis dengan harga serendah mungkin.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0111",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database NoSQL key-value terkelola penuh dengan performa single-digit millisecond latency?",
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
    "explanation": "Amazon DynamoDB adalah database NoSQL serverless terkelola penuh yang menawarkan single-digit millisecond latency pada skala apa pun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0112",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan compute serverless yang mengeksekusi kode berdasarkan event trigger tanpa server provisioning?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "AWS Lambda"
      },
      {
        "id": "C",
        "text": "Amazon ECS"
      },
      {
        "id": "D",
        "text": "Amazon EC2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "AWS Lambda adalah layanan compute serverless berbasis event yang menjalankan kode tanpa perlu provisioning atau mengelola server.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0113",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Manakah tindakan keamanan PALING krusial yang harus segera diterapkan pada AWS Root User?",
    "options": [
      {
        "id": "A",
        "text": "Mengaktifkan Multi-Factor Authentication (MFA)"
      },
      {
        "id": "B",
        "text": "Membuat Access Key untuk pemakaian CLI rutin"
      },
      {
        "id": "C",
        "text": "Menghapus izin AdministratorAccess"
      },
      {
        "id": "D",
        "text": "Membagikan kredensial login ke seluruh tim DevOps"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Mengaktifkan MFA dan tidak membuat access key untuk root user adalah best practice keamanan utama untuk mengamankan akun AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0114",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan otomatis untuk mengaudit kepatuhan konfigurasi resource dan mendeteksi unattached volume?",
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
      "C"
    ],
    "explanation": "AWS Config mencatat perubahan konfigurasi resource cloud dari waktu ke waktu dan mengevaluasi kepatuhannya terhadap aturan tata kelola (Config Rules).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0115",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur AWS Organizations untuk menetapkan batasan izin maksimum (guardrails) pada member accounts?",
    "options": [
      {
        "id": "A",
        "text": "IAM Policy Delegation"
      },
      {
        "id": "B",
        "text": "Service Control Policies (SCP)"
      },
      {
        "id": "C",
        "text": "AWS Shield"
      },
      {
        "id": "D",
        "text": "Resource Access Manager"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Service Control Policies (SCP) menetapkan batasan izin maksimum di tingkat Organization Unit (OU) atau member accounts.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0116",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Prinsip arsitektur cloud untuk memisahkan komponen agar kegagalan satu komponen tidak melumpuhkan sistem?",
    "options": [
      {
        "id": "A",
        "text": "Tight Coupling"
      },
      {
        "id": "B",
        "text": "Decoupling"
      },
      {
        "id": "C",
        "text": "Single Point of Failure"
      },
      {
        "id": "D",
        "text": "Monolithic Architecture"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Decoupling (loosely coupled architecture) memisahkan komponen sistem (misalnya menggunakan queue/broker) agar kegagalan satu komponen terisolasi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0117",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Karakteristik komputasi cloud yang memungkinkan alokasi dan pelepasan resource otomatis sesuai beban?",
    "options": [
      {
        "id": "A",
        "text": "High Availability"
      },
      {
        "id": "B",
        "text": "Elasticity"
      },
      {
        "id": "C",
        "text": "Fault Tolerance"
      },
      {
        "id": "D",
        "text": "Durability"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Elasticity adalah kemampuan mengalokasikan dan melepaskan resource komputasi secara dinamis dan otomatis sesuai fluktuasi workload real-time.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0118",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Definisi AWS Availability Zone (AZ) yang paling tepat adalah?",
    "options": [
      {
        "id": "A",
        "text": "Satu lokasi fisik data center tunggal di satu negara"
      },
      {
        "id": "B",
        "text": "Satu atau lebih data center terpisah dengan daya & jaringan redundan"
      },
      {
        "id": "C",
        "text": "Kumpulan Edge Locations untuk Content Delivery Network"
      },
      {
        "id": "D",
        "text": "Batas yurisdiksi geografis global AWS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Availability Zone (AZ) terdiri dari satu atau lebih data center fisik terpisah dalam satu AWS Region yang dilengkapi catu daya dan jaringan redundan.",
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
    "prompt": "Apa fungsi utama mengaktifkan Multi-Factor Authentication (MFA) pada Root User AWS?",
    "options": [
      {
        "id": "A",
        "text": "Memberikan lapisan keamanan ekstra di luar email dan password"
      },
      {
        "id": "B",
        "text": "Membatasi biaya tagihan bulanan secara otomatis"
      },
      {
        "id": "C",
        "text": "Mencegah instance EC2 terkena serangan DDoS"
      },
      {
        "id": "D",
        "text": "Mempercepat akses login ke AWS Management Console"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "MFA memberikan lapisan keamanan tambahan berupa kode dinamis dari token fisik/aplikasi sehingga akses root terlindungi meskipun password bocor.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0207",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang paling tepat untuk mengirim email alert jika tagihan bulanan mendekati $1.00?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "AWS Budgets terintegrasi dengan Amazon SNS"
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
    "explanation": "AWS Budgets digunakan untuk menetapkan batas anggaran biaya dan terhubung ke Amazon SNS untuk mengirimkan email notifikasi alert.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0208",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Mengapa best practice industri menyarankan remote EC2 menggunakan AWS Systems Manager (SSM)?",
    "options": [
      {
        "id": "A",
        "text": "Karena SSM meningkatkan performa CPU server web"
      },
      {
        "id": "B",
        "text": "Karena SSM otomatis melakukan patch update setiap jam"
      },
      {
        "id": "C",
        "text": "Karena tidak perlu membuka port 22 SSH dan tanpa public IP"
      },
      {
        "id": "D",
        "text": "Karena SSM adalah satu-satunya cara menjalankan Linux"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AWS Systems Manager Session Manager memungkinkan akses shell aman ke instans tanpa membuka inbound port 22 ke internet dan tanpa membutuhkan public IP.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0209",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Berapa CIDR block default yang umum digunakan untuk membuat 1 Custom VPC skala private?",
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
    "explanation": "10.0.0.0/16 adalah CIDR range standar privat Class A yang menyediakan hingga 65.536 alamat IP privat untuk subnetting dalam VPC.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0210",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Bagaimana cara membuat Security Group EC2 hanya menerima traffic web dari Application Load Balancer?",
    "options": [
      {
        "id": "A",
        "text": "Mengatur source rule HTTP ke Security Group ID milik ALB"
      },
      {
        "id": "B",
        "text": "Membuka port 80 ke CIDR block 0.0.0.0/0"
      },
      {
        "id": "C",
        "text": "Memasang Internet Gateway langsung ke subnet privat"
      },
      {
        "id": "D",
        "text": "Menghubungkan Elastic IP publik ke instance EC2"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Security Group chaining dilakukan dengan mengarahkan source inbound rule ke ID Security Group ALB (misal sg-xxxx) bukan IP publik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0211",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Mengapa arsitektur web production disarankan deploy minimal di 2 Availability Zone (Multi-AZ)?",
    "options": [
      {
        "id": "A",
        "text": "Untuk mengurangi biaya sewa server hingga 50%"
      },
      {
        "id": "B",
        "text": "Untuk High Availability dan toleransi bencana fisik datacenter"
      },
      {
        "id": "C",
        "text": "Agar kapasitas hard disk server otomatis berlipat ganda"
      },
      {
        "id": "D",
        "text": "Karena regulasi AWS mewajibkan 2 region aktif"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Multi-AZ mendistribusikan beban aplikasi di datacenter fisik yang terpisah sehingga jika satu AZ padam, sistem tetap beroperasi normal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0212",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Komponen VPC apa yang berfungsi menghubungkan subnet publik dengan internet luar secara dua arah?",
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
    "explanation": "Internet Gateway (IGW) adalah gateway terkelola yang menyediakan target pada route table VPC untuk komunikasi dua arah dengan internet.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0213",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Apa perbedaan utama sifat state antara Security Group dan Network ACL (NACL)?",
    "options": [
      {
        "id": "A",
        "text": "Security Group tidak punya aturan outbound"
      },
      {
        "id": "B",
        "text": "NACL otomatis mengizinkan return traffic"
      },
      {
        "id": "C",
        "text": "Security Group bekerja di level subnet"
      },
      {
        "id": "D",
        "text": "Security Group bersifat stateful, sedangkan NACL stateless"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Security Group bersifat stateful (respon otomatis diizinkan jika inbound lolos), sedangkan NACL stateless (inbound dan outbound harus diatur eksplisit).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0214",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Di bawah Shared Responsibility Model, manakah yang merupakan tanggung jawab AWS?",
    "options": [
      {
        "id": "A",
        "text": "Keamanan fisik fasilitas datacenter dan hardware"
      },
      {
        "id": "B",
        "text": "Konfigurasi firewall Security Group pada instance"
      },
      {
        "id": "C",
        "text": "Patching sistem operasi tamu pada Amazon EC2"
      },
      {
        "id": "D",
        "text": "Enkripsi data aplikasi sisi klien"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AWS bertanggung jawab atas keamanan fasilitas fisik, hardware server, dan infrastruktur global (Security OF the Cloud).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0215",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Di bawah Shared Responsibility Model, manakah yang merupakan tanggung jawab pelanggan?",
    "options": [
      {
        "id": "A",
        "text": "Pemeliharaan kabel jaringan antardatacenter"
      },
      {
        "id": "B",
        "text": "Pengelolaan user account dan hak akses IAM"
      },
      {
        "id": "C",
        "text": "Penggantian hard drive server fisik yang rusak"
      },
      {
        "id": "D",
        "text": "Pembaruan firmware switch fisik AWS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pelanggan bertanggung jawab mengelola data, konfigurasi IAM, autentikasi pengguna, dan sistem operasi (Security IN the Cloud).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0216",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Manakah pilar AWS Well-Architected Framework yang fokus mencegah dan memitigasi risiko keamanan?",
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
    "explanation": "Pilar Security berfokus pada perlindungan data, sistem, integritas aset, dan pengelolaan identitas sesuai prinsip least privilege.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0217",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Pilar Well-Architected Framework mana yang berfokus menjalankan sistem tanpa memboroskan dana?",
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
    "explanation": "Cost Optimization berfokus pada pengelolaan alokasi dana, pemilihan jenis resource yang tepat, dan penghapusan biaya yang tidak perlu.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0218",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang mencatat riwayat panggilan API untuk keperluan tata kelola dan audit kepatuhan?",
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
    "explanation": "AWS CloudTrail mencatat seluruh aktivitas akun dan panggilan API yang dilakukan pengguna, role, atau layanan AWS lain.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0219",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang menyediakan metrik pemantauan real-time seperti penggunaan CPU dan memori?",
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
    "explanation": "Amazon CloudWatch mengumpulkan metrik, log operasional, serta memantau utilisasi resource seperti CPU utilization pada EC2.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0220",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Fitur AWS apa yang memungkinkan pengelompokan akun dengan Service Control Policies (SCP)?",
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
    "explanation": "AWS Organizations memungkinkan konsolidasi multi-akun dalam satu organisasi dan menerapkan batasan izin via Service Control Policies (SCP).",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0221",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Apa keuntungan utama dari konsep cloud computing yang disebut 'Agility'?",
    "options": [
      {
        "id": "A",
        "text": "Biaya hardware dibayar penuh di muka"
      },
      {
        "id": "B",
        "text": "Lokasi server berada di kantor pelanggan"
      },
      {
        "id": "C",
        "text": "Perlu waktu berminggu-minggu untuk provisioning server"
      },
      {
        "id": "D",
        "text": "Mampu berinovasi dan merilis resource dalam hitungan menit"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Agility memungkinkan organisasi bereksperimen dan meluncurkan resource baru secara instan tanpa menunggu siklus pengadaan hardware.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0222",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Apa perbedaan mendasar antara konsep Scalability dan Elasticity pada AWS?",
    "options": [
      {
        "id": "A",
        "text": "Scalability menambah kapasitas; Elasticity otomatis naik dan turun"
      },
      {
        "id": "B",
        "text": "Scalability hanya untuk storage; Elasticity hanya untuk compute"
      },
      {
        "id": "C",
        "text": "Scalability bersifat manual; Elasticity tidak bisa diotomatisasi"
      },
      {
        "id": "D",
        "text": "Keduanya adalah istilah yang identik tanpa perbedaan fungsi"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Scalability adalah kemampuan sistem menangani kenaikan beban, sedangkan Elasticity adalah kemampuan menyesuaikan kapasitas naik dan turun otomatis.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0223",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Storage class Amazon S3 apa yang paling tepat untuk data yang jarang diakses tapi harus instan saat dibutuhkan?",
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
    "explanation": "S3 Standard-IA ideal untuk data yang jarang diakses namun membutuhkan waktu pengambilan dalam hitungan milidetik saat diminta.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0224",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Storage class Amazon S3 apa yang menawarkan biaya penyimpanan terendah untuk arsip jangka panjang?",
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
    "explanation": "S3 Glacier Deep Archive adalah opsi penyimpanan paling murah di AWS untuk data arsip 7-10 tahun dengan waktu retrieval beberapa jam.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0225",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Apa fungsi utama dari Amazon CloudFront dalam arsitektur web modern?",
    "options": [
      {
        "id": "A",
        "text": "Menggantikan fungsi database relasional MySQL"
      },
      {
        "id": "B",
        "text": "Mengonfigurasi rute jaringan internal VPC"
      },
      {
        "id": "C",
        "text": "Membuat cadangan snapshot disk secara harian"
      },
      {
        "id": "D",
        "text": "Mengirimkan konten global dengan latensi rendah via Edge Location"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Amazon CloudFront adalah layanan Content Delivery Network (CDN) yang menyimpan cache konten web di Edge Location dekat pengguna.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0226",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan DNS terkelola yang sangat andal dan scalable dari AWS adalah:",
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
    "explanation": "Amazon Route 53 adalah layanan DNS (Domain Name System) web service yang berfungsi menerjemahkan nama domain menjadi IP address.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0227",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan database AWS apa yang dirancang untuk model NoSQL key-value dengan performa satu digit milidetik?",
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
    "explanation": "Amazon DynamoDB adalah database serverless NoSQL key-value dan document yang menawarkan latensi konsisten di bawah 10 milidetik.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0228",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Tipe database apa yang paling tepat dikelola menggunakan Amazon RDS?",
    "options": [
      {
        "id": "A",
        "text": "Key-value dan document database"
      },
      {
        "id": "B",
        "text": "Graph database"
      },
      {
        "id": "C",
        "text": "Database relasional (SQL)"
      },
      {
        "id": "D",
        "text": "Wide-column database"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Amazon Relational Database Service (RDS) mempermudah setup dan pengelolaan database relasional seperti MySQL, PostgreSQL, dan MariaDB.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0229",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang menyediakan data warehouse berbasis cloud untuk analisis SQL skala petabyte?",
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
    "explanation": "Amazon Redshift adalah layanan data warehouse cloud yang cepat dan terkelola penuh untuk analisis data skala besar menggunakan standar SQL.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0230",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan compute serverless AWS yang menjalankan kode hanya saat ada event yang memicunya adalah:",
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
    "explanation": "AWS Lambda memungkinkan eksekusi kode tanpa server provisioning, di mana pengguna hanya membayar waktu komputasi saat kode aktif berjalan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0231",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Opsi pricing EC2 mana yang paling hemat untuk workload dengan jadwal fleksibel yang bisa terhenti mendadak?",
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
    "explanation": "Spot Instances memanfaatkan kapasitas komputasi cadangan AWS dengan diskon hingga 90%, cocok untuk beban kerja yang tahan interupsi.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0232",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Opsi pembelian EC2 mana yang menawarkan diskon besar dengan komitmen penggunaan 1 atau 3 tahun?",
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
    "explanation": "Savings Plans dan Reserved Instances memberikan diskon signifikan dibandingkan On-Demand dengan komitmen konsisten selama 1 atau 3 tahun.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0233",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan penyimpanan blok persisten yang digunakan sebagai root volume pada Amazon EC2 adalah:",
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
    "explanation": "Amazon EBS menyediakan penyimpanan level blok (block storage) yang persisten dan terhubung langsung ke satu instans EC2.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0234",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan storage apa yang menyediakan shared file storage elastis menggunakan protokol NFS untuk banyak EC2?",
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
    "explanation": "Amazon EFS menyediakan file system terkelola berbasis NFS yang dapat di-mount dan diakses bersamaan oleh ribuan instans EC2.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0235",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan messaging AWS apa yang menggunakan pola publish/subscribe (pub/sub) untuk mengirim notifikasi?",
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
    "explanation": "Amazon SNS adalah layanan messaging terkelola berbasis pub/sub yang mendistribusikan pesan ke banyak subscriber (email, SMS, Lambda).",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0236",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan AWS apa yang menyediakan antrean pesan (message queuing) untuk mendecouple komponen aplikasi?",
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
    "explanation": "Amazon SQS menyediakan antrean pesan terkelola penuh yang memungkinkan decoupling arsitektur microservices secara andal.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0237",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan keamanan AWS apa yang melindungi aplikasi web dari serangan DDoS layer 3 dan 4 secara gratis?",
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
    "explanation": "AWS Shield Standard aktif secara otomatis dan melindungi seluruh pelanggan AWS dari serangan DDoS umum pada layer 3/4 tanpa biaya tambahan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0238",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan keamanan AWS apa yang memfilter lalu lintas web terhadap eksploitasi SQL Injection dan XSS?",
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
    "explanation": "AWS WAF memungkinkan pembuatan rule untuk memantau request HTTP/HTTPS dan memblokir serangan aplikasi umum seperti SQLi dan XSS.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0239",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan deteksi ancaman cerdas AWS yang menganalisis VPC Flow Logs dan DNS Logs menggunakan machine learning adalah:",
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
    "explanation": "Amazon GuardDuty adalah layanan threat detection cerdas yang terus memantau aktivitas mencurigakan pada akun menggunakan machine learning.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0240",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan keamanan AWS apa yang dirancang untuk menemukan dan melindungi data sensitif (PII) di Amazon S3?",
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
    "explanation": "Amazon Macie menggunakan machine learning dan pattern matching untuk mendeteksi data sensitif seperti nomor KTP atau kartu kredit di S3.",
    "difficulty": "Sedang",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0241",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan apa yang digunakan untuk membuat dan mengelola kunci enkripsi (cryptographic keys) di AWS?",
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
    "explanation": "AWS KMS mempermudah pembuatan dan kontrol cryptographic keys yang digunakan untuk mengenkripsi data di berbagai layanan AWS.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0242",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "AWS Support Plan level mana yang paling rendah yang memberikan akses 24/7 via telepon, chat, dan email?",
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
    "explanation": "Business Support adalah tier terendah yang memberikan akses 24x7 ke Cloud Support Engineers via telepon, chat, dan email.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0243",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Dukungan apa yang hanya tersedia eksklusif pada AWS Enterprise Support Plan?",
    "options": [
      {
        "id": "A",
        "text": "Akses ke dokumentasi AWS resmi"
      },
      {
        "id": "B",
        "text": "Technical Account Manager (TAM) yang didedikasikan"
      },
      {
        "id": "C",
        "text": "Akses ke forum komunitas AWS"
      },
      {
        "id": "D",
        "text": "Laporan bulanan AWS Billing"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Designated Technical Account Manager (TAM) adalah penasihat teknis khusus yang hanya tersedia pada paket Enterprise Support.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0244",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Layanan online gratis apa yang memberikan rekomendasi best practice seputar biaya, performa, dan keamanan akun?",
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
    "explanation": "AWS Trusted Advisor memindai lingkungan AWS Anda dan memberikan rekomendasi optimasi biaya, performa, keamanan, dan toleransi kesalahan.",
    "difficulty": "Mudah",
    "lang": "id"
  },
  {
    "id": "ccp_kahoot_0245",
    "domain": "Technology & Services",
    "type": "single",
    "prompt": "Portal mandiri apa di AWS tempat pelanggan dapat mengunduh dokumen kepatuhan (compliance reports) dan sertifikat ISO?",
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
    "explanation": "AWS Artifact adalah portal resmi tanpa biaya untuk mengakses laporan kepatuhan keamanan AWS seperti SOC, PCI DSS, dan sertifikasi ISO.",
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

import type { ExamQuestion } from './questionBank'

export const ccpQuestionBank: ExamQuestion[] = 
[
  {
    "id": "tech_001",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_002",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_001",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_003",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_004",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_005",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_002",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_006",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_007",
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
    "difficulty": "Mudah"
  },
  {
    "id": "bill_001",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_008",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_009",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_003",
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
    "difficulty": "Sulit"
  },
  {
    "id": "bill_002",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_010",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_003",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_004",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_011",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_005",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_006",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_004",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_012",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_007",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_013",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_014",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_015",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_008",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_009",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_016",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_010",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_017",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_011",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_012",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_005",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_018",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_006",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_019",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_013",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_014",
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
    "difficulty": "Sulit"
  },
  {
    "id": "cc_001",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_007",
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
    "difficulty": "Mudah"
  },
  {
    "id": "bill_008",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_020",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_015",
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
    "difficulty": "Mudah"
  },
  {
    "id": "bill_009",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_016",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_017",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_021",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_018",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_022",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_019",
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
    "difficulty": "Sulit"
  },
  {
    "id": "sec_020",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_023",
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
    "difficulty": "Mudah"
  },
  {
    "id": "bill_010",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_024",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_025",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_026",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_027",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_028",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_021",
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
    "difficulty": "Sedang"
  },
  {
    "id": "cc_002",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_029",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_022",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_030",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_011",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_031",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_023",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_024",
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
    "difficulty": "Mudah"
  },
  {
    "id": "sec_025",
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
    "difficulty": "Sulit"
  },
  {
    "id": "sec_026",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_027",
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
    "difficulty": "Sulit"
  },
  {
    "id": "sec_028",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_012",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_032",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_029",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_033",
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
    "difficulty": "Sedang"
  },
  {
    "id": "bill_013",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_034",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_030",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_035",
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
    "difficulty": "Mudah"
  },
  {
    "id": "bill_014",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_036",
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
    "difficulty": "Sedang"
  },
  {
    "id": "tech_037",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_031",
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
    "difficulty": "Sedang"
  },
  {
    "id": "cc_003",
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
    "difficulty": "Sedang"
  },
  {
    "id": "sec_032",
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
    "difficulty": "Sulit"
  },
  {
    "id": "tech_038",
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
    "difficulty": "Mudah"
  },
  {
    "id": "tech_039",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_089",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_090",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_091",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_092",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_093",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_094",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_095",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_096",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_097",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_098",
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
    "difficulty": "Sulit"
  },
  {
    "id": "gen_099",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_100",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_101",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_102",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_103",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_104",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_105",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_106",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_107",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_108",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_109",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_110",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_111",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_112",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_113",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_114",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_115",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_116",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_117",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_118",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_119",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_120",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_121",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_122",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_123",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_124",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_125",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_126",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_127",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_128",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_129",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_130",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_131",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_132",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_133",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_134",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_135",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_136",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_137",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_138",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_139",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_140",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_141",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_142",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_143",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_144",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_145",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_146",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_147",
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
    "difficulty": "Sulit"
  },
  {
    "id": "gen_148",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_149",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_150",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_151",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_152",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_153",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_154",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_155",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_156",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_157",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_158",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_159",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_160",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_161",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_162",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_163",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_164",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_165",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_166",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_167",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_168",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_169",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_170",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_171",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_172",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_173",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_174",
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
    "difficulty": "Sulit"
  },
  {
    "id": "gen_175",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_176",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_177",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_178",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_179",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_180",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_181",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_182",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_183",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_184",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_185",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_186",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_187",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_188",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_189",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_190",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_191",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_192",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_193",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_194",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_195",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_196",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_197",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_198",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_199",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_200",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_201",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_202",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_203",
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
    "difficulty": "Mudah"
  },
  {
    "id": "gen_204",
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
    "difficulty": "Sedang"
  },
  {
    "id": "gen_205",
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
    "difficulty": "Sedang"
  }
]

// Distinct scenarios, not paraphrases or duplicated IDs. Concept notes explain each alternative.
const concepts = {
  trail: [
    "AWS CloudTrail",
    "Merekam aktivitas API dan identitas pemanggil untuk audit.",
    "Records API activity and caller identity for auditing.",
    "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  ],
  config: [
    "AWS Config",
    "Mencatat konfigurasi resource dan mengevaluasi kepatuhan aturan.",
    "Records resource configuration and evaluates compliance rules.",
    "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html",
  ],
  guard: [
    "Amazon GuardDuty",
    "Menganalisis sumber log untuk mendeteksi aktivitas berbahaya.",
    "Analyzes log sources to detect malicious activity.",
    "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html",
  ],
  inspector: [
    "Amazon Inspector",
    "Memindai workload yang didukung untuk kerentanan perangkat lunak dan paparan jaringan.",
    "Scans supported workloads for software vulnerabilities and network exposure.",
    "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
  ],
  macie: [
    "Amazon Macie",
    "Menemukan data sensitif seperti informasi pribadi pada objek S3.",
    "Discovers sensitive data such as personal information in S3 objects.",
    "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
  ],
  hub: [
    "AWS Security Hub",
    "Menggabungkan temuan keamanan dari layanan dan integrasi yang didukung.",
    "Aggregates security findings from supported services and integrations.",
    "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html",
  ],
  waf: [
    "AWS WAF",
    "Memfilter permintaan web berdasarkan aturan HTTP termasuk SQL injection.",
    "Filters web requests using HTTP rules including SQL injection detection.",
    "https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html",
  ],
  shield: [
    "AWS Shield",
    "Memberikan perlindungan terhadap serangan distributed denial of service.",
    "Provides protection against distributed denial-of-service attacks.",
    "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html",
  ],
  kms: [
    "AWS KMS",
    "Mengelola kunci kriptografi dan izin penggunaannya.",
    "Manages cryptographic keys and permissions to use them.",
    "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
  ],
  secrets: [
    "AWS Secrets Manager",
    "Menyimpan secret dan mendukung rotasi kredensial terkelola.",
    "Stores secrets and supports managed credential rotation.",
    "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",
  ],
  acm: [
    "AWS Certificate Manager",
    "Menyediakan dan mengelola sertifikat TLS untuk layanan yang terintegrasi.",
    "Provisions and manages TLS certificates for integrated services.",
    "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html",
  ],
  sts: [
    "AWS STS",
    "Menerbitkan kredensial keamanan sementara untuk sesi role.",
    "Issues temporary security credentials for role sessions.",
    "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html",
  ],
  analyzer: [
    "IAM Access Analyzer",
    "Menganalisis akses resource dan membantu menemukan akses eksternal.",
    "Analyzes resource access and helps identify external access.",
    "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html",
  ],
  cognito: [
    "Amazon Cognito user pools",
    "Mengelola pendaftaran dan login pengguna aplikasi.",
    "Manages application user sign-up and sign-in.",
    "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html",
  ],
  scp: [
    "AWS Organizations service control policies",
    "Membatasi izin maksimum akun anggota; tidak memberikan izin sendiri.",
    "Restricts maximum permissions in member accounts; it does not grant permissions.",
    "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
  ],
  mfa: [
    "Multi-factor authentication",
    "Memerlukan faktor autentikasi tambahan selain password.",
    "Requires an additional authentication factor beyond a password.",
    "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
  ],
  role: [
    "IAM role with least-privilege policy",
    "Memberikan izin terbatas melalui kredensial sementara tanpa access key tetap.",
    "Grants scoped permissions using temporary credentials without permanent access keys.",
    "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
  ],
  session: [
    "Systems Manager Session Manager",
    "Menyediakan sesi administrasi ke managed node tanpa membuka port SSH inbound.",
    "Provides administration sessions to managed nodes without opening inbound SSH ports.",
    "https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html",
  ],
  endpoint: [
    "S3 gateway VPC endpoint",
    "Menyediakan rute privat dari VPC ke S3 tanpa NAT gateway.",
    "Provides a private route from a VPC to S3 without a NAT gateway.",
    "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html",
  ],
  block: [
    "S3 Block Public Access",
    "Membatasi pemberian akses publik pada bucket dan access point S3.",
    "Restricts public access grants on S3 buckets and access points.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html",
  ],
  lock: [
    "S3 Object Lock compliance mode",
    "Mencegah penghapusan atau penimpaan versi objek selama retensi compliance.",
    "Prevents deleting or overwriting object versions during compliance retention.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",
  ],
  multi: [
    "RDS Multi-AZ DB instance",
    "Menyediakan standby sinkron untuk failover; standby ini bukan read replica.",
    "Provides a synchronous standby for failover; this standby is not a read replica.",
    "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
  ],
  replica: [
    "RDS read replica",
    "Menyediakan replika baca asinkron untuk mengurangi beban baca primary.",
    "Provides an asynchronous read replica to reduce reads on the primary.",
    "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
  ],
  sqs: [
    "Amazon SQS standard queue",
    "Memisahkan producer dan consumer dengan antrean durable; consumer harus menangani duplikasi.",
    "Decouples producers and consumers with a durable queue; consumers must handle duplicates.",
    "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  ],
  fifo: [
    "Amazon SQS FIFO queue",
    "Menjaga urutan pesan dalam message group.",
    "Preserves message order within each message group.",
    "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html",
  ],
  sns: [
    "Amazon SNS topic",
    "Mendistribusikan satu publikasi ke beberapa subscriber.",
    "Fans out one publication to multiple subscribers.",
    "https://docs.aws.amazon.com/sns/latest/dg/welcome.html",
  ],
  efs: [
    "Amazon EFS Regional",
    "Menyediakan filesystem NFS bersama yang dapat diakses dari beberapa AZ.",
    "Provides a shared NFS file system accessible across Availability Zones.",
    "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
  ],
  ebs: [
    "Amazon EBS",
    "Menyediakan block storage persisten yang berada dalam satu AZ.",
    "Provides persistent block storage within an Availability Zone.",
    "https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html",
  ],
  backup: [
    "AWS Backup",
    "Mengatur kebijakan dan pemantauan backup terpusat untuk resource yang didukung.",
    "Centrally manages backup policies and monitoring for supported resources.",
    "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html",
  ],
  versioning: [
    "S3 Versioning",
    "Menyimpan beberapa versi objek untuk memulihkan overwrite atau delete marker.",
    "Keeps multiple object versions to recover from overwrites or delete markers.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html",
  ],
  global: [
    "DynamoDB global tables",
    "Mereplikasi tabel untuk akses multi-Region dengan kemampuan tulis multiaktif.",
    "Replicates tables for multi-Region access with multi-active writes.",
    "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html",
  ],
  asg: [
    "EC2 Auto Scaling",
    "Menyesuaikan jumlah instance dan mengganti instance tidak sehat sesuai konfigurasi.",
    "Adjusts instance count and replaces unhealthy instances according to configuration.",
    "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  ],
  alb: [
    "Application Load Balancer",
    "Merutekan HTTP/HTTPS menggunakan informasi layer aplikasi seperti path dan host.",
    "Routes HTTP/HTTPS using application information such as paths and hosts.",
    "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
  ],
  nlb: [
    "Network Load Balancer",
    "Menyeimbangkan koneksi jaringan layer transport, termasuk TCP dan UDP.",
    "Balances transport-layer network connections including TCP and UDP.",
    "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html",
  ],
  route: [
    "Amazon Route 53 health-check failover",
    "Mengalihkan jawaban DNS berdasarkan status health check endpoint.",
    "Changes DNS answers based on endpoint health checks.",
    "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html",
  ],
  step: [
    "AWS Step Functions",
    "Mengorkestrasi workflow dengan state, retry, dan penanganan error.",
    "Orchestrates workflows with states, retries, and error handling.",
    "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html",
  ],
  s3: [
    "Amazon S3",
    "Menyimpan objek melalui API; bukan block device atau filesystem NFS.",
    "Stores objects through APIs; it is not a block device or NFS file system.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  ],
  cloudfront: [
    "Amazon CloudFront",
    "Mengirim dan meng-cache konten melalui edge location.",
    "Delivers and caches content through edge locations.",
    "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  ],
  cache: [
    "Amazon ElastiCache",
    "Menyimpan data dalam memori untuk mengurangi pembacaan database.",
    "Caches data in memory to reduce database reads.",
    "https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/WhatIs.html",
  ],
  dax: [
    "DynamoDB Accelerator (DAX)",
    "Memberikan cache dalam memori yang kompatibel dengan pola akses DynamoDB.",
    "Provides an in-memory cache compatible with DynamoDB access patterns.",
    "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html",
  ],
  athena: [
    "Amazon Athena",
    "Menjalankan query SQL pada data S3 tanpa mengelola server query.",
    "Runs SQL queries against S3 data without managing query servers.",
    "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
  ],
  redshift: [
    "Amazon Redshift",
    "Menyediakan data warehouse untuk analitik terstruktur.",
    "Provides a data warehouse for structured analytics.",
    "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html",
  ],
  kinesis: [
    "Amazon Kinesis Data Streams",
    "Menyimpan dan memproses aliran record untuk consumer streaming.",
    "Stores and processes record streams for streaming consumers.",
    "https://docs.aws.amazon.com/streams/latest/dev/introduction.html",
  ],
  lambda: [
    "AWS Lambda",
    "Menjalankan fungsi berdasarkan event tanpa mengelola server fungsi.",
    "Runs event-driven functions without managing function servers.",
    "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
  ],
  fargate: [
    "AWS Fargate",
    "Menjalankan task atau pod container tanpa mengelola host EC2.",
    "Runs container tasks or pods without managing EC2 hosts.",
    "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html",
  ],
  proxy: [
    "Amazon RDS Proxy",
    "Mengelola pool koneksi database untuk mengurangi overhead koneksi aplikasi.",
    "Pools database connections to reduce application connection overhead.",
    "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html",
  ],
  opensearch: [
    "Amazon OpenSearch Service",
    "Menyediakan indeks pencarian dan analitik log.",
    "Provides search indexes and log analytics.",
    "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
  ],
  accelerator: [
    "AWS Global Accelerator",
    "Menggunakan IP anycast dan jaringan global AWS untuk trafik TCP/UDP.",
    "Uses anycast IP addresses and the AWS global network for TCP/UDP traffic.",
    "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
  ],
  spot: [
    "EC2 Spot Instances",
    "Menggunakan kapasitas EC2 cadangan dengan risiko interupsi.",
    "Uses spare EC2 capacity with interruption risk.",
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  ],
  savings: [
    "Compute Savings Plans",
    "Memberikan penghematan untuk komitmen penggunaan komputasi per jam.",
    "Provides savings for a commitment to hourly compute usage.",
    "https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
  ],
  budget: [
    "AWS Budgets",
    "Memberikan peringatan saat biaya atau penggunaan mendekati batas yang ditentukan.",
    "Alerts when cost or usage approaches defined thresholds.",
    "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
  ],
  explorer: [
    "AWS Cost Explorer",
    "Menganalisis tren biaya dan penggunaan historis.",
    "Analyzes historical cost and usage trends.",
    "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html",
  ],
  intelligent: [
    "S3 Intelligent-Tiering",
    "Memindahkan objek di antara tier akses berdasarkan pola akses dengan biaya monitoring.",
    "Moves objects between access tiers based on access patterns with a monitoring charge.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html",
  ],
  glacier: [
    "S3 Glacier Deep Archive",
    "Menyimpan arsip jangka panjang dengan waktu pemulihan dalam hitungan jam.",
    "Stores long-term archives with retrieval times measured in hours.",
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
  ],
  ondemand: [
    "EC2 On-Demand Instances",
    "Menjalankan instance tanpa komitmen jangka panjang dan tanpa interupsi Spot.",
    "Runs instances without a long-term commitment or Spot interruption.",
    "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html",
  ],
  tags: [
    "Cost allocation tags",
    "Mengelompokkan biaya menggunakan tag yang diaktifkan untuk alokasi biaya.",
    "Groups costs using tags activated for cost allocation.",
    "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
  ],
  scale: [
    "Elasticity",
    "Menambah dan mengurangi kapasitas mengikuti perubahan permintaan.",
    "Adds and removes capacity as demand changes.",
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  ],
  agility: [
    "Agility",
    "Mempercepat eksperimen dan penyediaan resource sesuai kebutuhan.",
    "Speeds up experiments and on-demand resource provisioning.",
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  ],
  variable: [
    "Variable expense",
    "Mengubah pengeluaran tetap awal menjadi biaya penggunaan yang bervariasi.",
    "Replaces upfront fixed expenditure with variable usage expenditure.",
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  ],
  economies: [
    "Economies of scale",
    "Menggabungkan permintaan banyak pelanggan untuk mencapai efisiensi skala.",
    "Aggregates demand from many customers to achieve scale efficiencies.",
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  ],
  az: [
    "Availability Zones",
    "Merupakan lokasi infrastruktur terpisah dalam satu Region untuk membatasi dampak kegagalan.",
    "Are separate infrastructure locations within a Region that limit failure impact.",
    "https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html",
  ],
  region: [
    "AWS Regions",
    "Merupakan area geografis yang berisi beberapa Availability Zone.",
    "Are geographic areas containing multiple Availability Zones.",
    "https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html",
  ],
  edge: [
    "Edge locations",
    "Mendekatkan layanan edge seperti distribusi konten kepada pengguna.",
    "Bring edge services such as content delivery closer to users.",
    "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  ],
  shared: [
    "Shared responsibility model",
    "Membagi tanggung jawab keamanan AWS dan pelanggan menurut layanan yang digunakan.",
    "Divides AWS and customer security responsibilities according to the service used.",
    "https://aws.amazon.com/compliance/shared-responsibility-model/",
  ],
  iac: [
    "Infrastructure as code",
    "Menyatakan infrastruktur secara deklaratif untuk provisioning yang dapat diulang.",
    "Declares infrastructure for repeatable provisioning.",
    "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",
  ],
  decouple: [
    "Loose coupling",
    "Mengurangi ketergantungan langsung agar komponen dapat gagal atau diskalakan secara mandiri.",
    "Reduces direct dependencies so components can fail or scale independently.",
    "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  ],
  rights: [
    "Right-sizing",
    "Menyesuaikan ukuran resource menggunakan kebutuhan workload dan metrik.",
    "Matches resource sizes to workload needs and measured metrics.",
    "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html",
  ],
  serverless: [
    "Serverless computing",
    "Memindahkan pengelolaan server layanan kepada provider; pelanggan tetap bertanggung jawab atas kode dan data.",
    "Delegates service server management to the provider; customers still own code and data responsibilities.",
    "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
  ],
};
const cases = {
  cloud: [
    [
      "Toko online menambah kapasitas saat promosi dan menguranginya setelah promosi selesai. Konsep apa yang ditunjukkan?",
      "A shop adds capacity for a sale and removes it afterward. Which concept is demonstrated?",
      "scale",
    ],
    [
      "Tim mencoba tiga desain baru dalam sehari tanpa memesan server fisik. Manfaat cloud apa yang paling langsung?",
      "A team tries three new designs in a day without ordering hardware. What is the most direct cloud benefit?",
      "agility",
    ],
    [
      "Startup menghindari pembelian server di muka dan membayar penggunaan bulanan. Model biaya apa yang digunakan?",
      "A startup avoids buying servers upfront and pays for monthly usage. Which expense model applies?",
      "variable",
    ],
    [
      "Penyedia cloud membeli kapasitas dalam volume besar untuk banyak pelanggan. Prinsip ekonomi apa yang menjelaskan efisiensinya?",
      "A cloud provider buys capacity in bulk for many customers. Which economic principle explains its efficiency?",
      "economies",
    ],
    [
      "Aplikasi harus bertahan jika satu lokasi infrastruktur dalam Region gagal. Infrastruktur mana yang perlu dipisahkan?",
      "An application must survive failure of one infrastructure location within a Region. Which locations should it span?",
      "az",
    ],
    [
      "Organisasi memilih area geografis untuk menempatkan data dekat pelanggan Eropa. Unit infrastruktur apa yang dipilih?",
      "An organization selects a geographic area to host data near European customers. Which infrastructure unit is it choosing?",
      "region",
    ],
    [
      "File website perlu disajikan dekat pengguna di berbagai negara tanpa memindahkan database utama. Infrastruktur apa yang membantu?",
      "Website files need serving near users in many countries without moving the primary database. Which infrastructure helps?",
      "edge",
    ],
    [
      "AWS menjaga keamanan fasilitas fisik, sedangkan pelanggan mengatur izin data. Konsep apa yang menjelaskan pembagian ini?",
      "AWS secures physical facilities while customers configure data permissions. Which concept explains this split?",
      "shared",
    ],
    [
      "Tim ingin membuat ulang jaringan dari template yang tersimpan di version control. Praktik apa yang digunakan?",
      "A team recreates a network from templates in version control. Which practice is being used?",
      "iac",
    ],
    [
      "Producer tetap menerima pesanan ketika worker sedang berhenti, lalu worker memproses backlog. Prinsip desain apa yang diterapkan?",
      "A producer accepts orders while workers are stopped, and workers process the backlog later. Which design principle applies?",
      "decouple",
    ],
    [
      "CPU server selalu di bawah 5 persen dan ukuran instance dikurangi berdasarkan metrik. Praktik apa yang dilakukan?",
      "A server stays below 5 percent CPU and its instance size is reduced using metrics. Which practice is this?",
      "rights",
    ],
    [
      "Developer mengunggah kode fungsi tanpa mengelola patch OS host eksekusinya. Model komputasi apa yang sesuai?",
      "A developer uploads function code without patching its execution hosts. Which computing model fits?",
      "serverless",
    ],
    [
      "Perusahaan membuka lingkungan uji untuk satu hari lalu menghapusnya tanpa proses pengadaan perangkat. Manfaat utama apa yang terlihat?",
      "A company creates a test environment for one day and deletes it without hardware procurement. What is the main benefit?",
      "agility",
    ],
    [
      "Beban malam turun menjadi sepersepuluh beban siang dan kapasitas mengikuti perubahan itu. Sifat cloud apa yang digunakan?",
      "Night demand falls to one tenth of daytime demand and capacity follows it. Which cloud characteristic is used?",
      "scale",
    ],
    [
      "Tim beralih ke database terkelola tetapi masih harus menentukan siapa yang boleh membaca tabel. Prinsip apa yang berlaku?",
      "A team adopts a managed database but must still decide who can read tables. Which principle applies?",
      "shared",
    ],
  ],
  security: [
    [
      "Auditor ingin mengetahui siapa yang memanggil DeleteBucket kemarin. Layanan mana yang dicari?",
      "An auditor needs to identify who called DeleteBucket yesterday. Which service should be checked?",
      "trail",
    ],
    [
      "Tim ingin mendeteksi perubahan security group yang membuka port publik melalui aturan kepatuhan. Layanan mana yang sesuai?",
      "A team wants compliance rules to detect security groups changed to expose public ports. Which service fits?",
      "config",
    ],
    [
      "Tim keamanan memerlukan deteksi ancaman berdasarkan aktivitas akun dan sumber log AWS. Layanan mana yang sesuai?",
      "Security needs threat detection from account activity and AWS log sources. Which service fits?",
      "guard",
    ],
    [
      "Tim memerlukan temuan kerentanan paket pada instance EC2 yang didukung. Layanan mana yang digunakan?",
      "A team needs package vulnerability findings for supported EC2 instances. Which service should it use?",
      "inspector",
    ],
    [
      "Bucket S3 mungkin berisi nomor identitas pelanggan. Layanan mana yang membantu menemukan data sensitif itu?",
      "An S3 bucket may contain customer identification numbers. Which service helps discover that sensitive data?",
      "macie",
    ],
    [
      "Analis ingin melihat temuan keamanan dari beberapa layanan dalam satu tempat. Layanan mana yang sesuai?",
      "Analysts want security findings from several services in one place. Which service fits?",
      "hub",
    ],
    [
      "Situs perlu memblokir permintaan HTTP yang cocok dengan pola SQL injection. Layanan mana yang sesuai?",
      "A site needs to block HTTP requests matching SQL injection patterns. Which service fits?",
      "waf",
    ],
    [
      "Perusahaan menilai layanan AWS yang khusus berfokus pada perlindungan DDoS. Layanan mana yang relevan?",
      "A company evaluates the AWS service focused on DDoS protection. Which service is relevant?",
      "shield",
    ],
    [
      "Aplikasi perlu mengendalikan siapa yang dapat memakai kunci enkripsi melalui key policy. Layanan mana yang sesuai?",
      "An app must control cryptographic key use with key policies. Which service fits?",
      "kms",
    ],
    [
      "Password database perlu disimpan dan dirotasi tanpa menaruhnya dalam source code. Layanan mana yang sesuai?",
      "A database password must be stored and rotated without placing it in source code. Which service fits?",
      "secrets",
    ],
    [
      "ALB memerlukan sertifikat TLS yang dikelola untuk domain perusahaan. Layanan mana yang sesuai?",
      "An ALB needs a managed TLS certificate for the company domain. Which service fits?",
      "acm",
    ],
    [
      "Aplikasi lintas akun membutuhkan kredensial sementara dari operasi AssumeRole. Layanan mana yang menerbitkannya?",
      "A cross-account app needs temporary credentials from AssumeRole. Which service issues them?",
      "sts",
    ],
    [
      "Tim ingin mengetahui bucket policy yang memberikan akses di luar organisasi. Alat mana yang membantu?",
      "A team wants to identify bucket policies granting access outside its organization. Which tool helps?",
      "analyzer",
    ],
    [
      "Website pelanggan membutuhkan pendaftaran dan login pengguna aplikasi. Layanan mana yang paling sesuai?",
      "A customer website needs application user registration and sign-in. Which service best fits?",
      "cognito",
    ],
    [
      "Organisasi perlu melarang aksi tertentu pada akun anggota meskipun admin akun memberi izin. Mekanisme mana yang sesuai?",
      "An organization must prohibit actions in member accounts even when account admins grant them. Which mechanism fits?",
      "scp",
    ],
    [
      "Akun privileged perlu verifikasi tambahan setelah password. Kontrol mana yang sesuai?",
      "A privileged account needs extra verification after a password. Which control fits?",
      "mfa",
    ],
    [
      "Task ECS hanya boleh membaca satu bucket tanpa menyimpan access key statis. Mekanisme mana yang sesuai?",
      "An ECS task must read one bucket without storing static access keys. Which mechanism fits?",
      "role",
    ],
    [
      "Administrator perlu masuk ke managed EC2 tanpa membuka inbound port 22. Layanan mana yang sesuai?",
      "An administrator needs access to managed EC2 without opening inbound port 22. Which service fits?",
      "session",
    ],
    [
      "Instance privat perlu mengakses S3 tanpa melewati NAT gateway. Komponen mana yang sesuai?",
      "Private instances need S3 access without traversing a NAT gateway. Which component fits?",
      "endpoint",
    ],
    [
      "Perusahaan ingin mencegah ACL atau bucket policy memberi akses publik pada bucket S3. Kontrol mana yang sesuai?",
      "A company wants to prevent ACLs or bucket policies from granting public S3 access. Which control fits?",
      "block",
    ],
    [
      "Arsip hukum tidak boleh dihapus bahkan oleh root selama retensi compliance. Fitur mana yang sesuai?",
      "Legal archives must not be deleted even by root during compliance retention. Which feature fits?",
      "lock",
    ],
  ],
  resilience: [
    [
      "Database relasional perlu failover otomatis ketika AZ primary gagal, tanpa kebutuhan read scaling. Pilihan mana yang sesuai?",
      "A relational database needs automatic failover if its primary AZ fails, with no read-scaling need. Which option fits?",
      "multi",
    ],
    [
      "Laporan read-only membebani primary RDS dan dapat menerima replication lag. Pilihan mana yang sesuai?",
      "Read-only reports overload an RDS primary and can tolerate replication lag. Which option fits?",
      "replica",
    ],
    [
      "Pesanan harus tetap diterima saat worker dimatikan untuk deployment. Pilihan mana yang memisahkan keduanya?",
      "Orders must still be accepted while workers are stopped for deployment. Which option decouples them?",
      "sqs",
    ],
    [
      "Pesan untuk pelanggan yang sama harus diproses sesuai urutan kirim. Pilihan mana yang sesuai?",
      "Messages for the same customer must be processed in send order. Which option fits?",
      "fifo",
    ],
    [
      "Satu event pesanan harus diterima layanan email, analitik, dan fulfillment secara terpisah. Pilihan mana yang sesuai?",
      "One order event must reach email, analytics, and fulfillment subscribers separately. Which option fits?",
      "sns",
    ],
    [
      "Web server Linux di dua AZ membutuhkan direktori upload NFS yang sama. Pilihan mana yang sesuai?",
      "Linux web servers in two AZs need the same NFS upload directory. Which option fits?",
      "efs",
    ],
    [
      "Instance memerlukan block storage yang bertahan setelah instance dihentikan. Pilihan mana yang sesuai?",
      "An instance needs block storage that survives an instance stop. Which option fits?",
      "ebs",
    ],
    [
      "Organisasi ingin mengelola jadwal backup beberapa tipe resource melalui kebijakan terpusat. Pilihan mana yang sesuai?",
      "An organization wants central policy-based backup schedules for multiple resource types. Which option fits?",
      "backup",
    ],
    [
      "Pengguna menimpa file S3 dan perlu mengambil versi sebelumnya. Fitur mana yang harus sudah diaktifkan?",
      "A user overwrites an S3 file and needs the previous version. Which feature must already be enabled?",
      "versioning",
    ],
    [
      "Aplikasi membutuhkan tabel key-value yang bisa ditulis dari dua Region. Pilihan mana yang sesuai?",
      "An app needs a key-value table writable from two Regions. Which option fits?",
      "global",
    ],
    [
      "Web tier harus mengganti instance tidak sehat dan menambah instance ketika traffic naik. Pilihan mana yang sesuai?",
      "A web tier must replace unhealthy instances and add instances as traffic rises. Which option fits?",
      "asg",
    ],
    [
      "Dua layanan HTTP berbagi satu endpoint dan dibedakan oleh path URL. Pilihan mana yang sesuai?",
      "Two HTTP services share one endpoint and are distinguished by URL path. Which option fits?",
      "alb",
    ],
    [
      "Aplikasi UDP memerlukan load balancer layer transport. Pilihan mana yang sesuai?",
      "A UDP app needs a transport-layer load balancer. Which option fits?",
      "nlb",
    ],
    [
      "DNS harus menjawab endpoint cadangan ketika endpoint utama gagal health check. Pilihan mana yang sesuai?",
      "DNS must return a secondary endpoint when the primary fails health checks. Which option fits?",
      "route",
    ],
    [
      "Proses checkout beberapa tahap memerlukan retry dan penanganan error eksplisit. Pilihan mana yang sesuai?",
      "A multi-step checkout needs explicit retries and error handling. Which option fits?",
      "step",
    ],
    [
      "Dokumen perlu disimpan sebagai objek melalui API tanpa ketergantungan pada satu instance. Pilihan mana yang sesuai?",
      "Documents need object storage via APIs without dependence on one instance. Which option fits?",
      "s3",
    ],
    [
      "Database perlu standby sinkron untuk ketersediaan, bukan replika analitik. Pilihan mana yang sesuai?",
      "A database needs a synchronous standby for availability rather than an analytics replica. Which option fits?",
      "multi",
    ],
    [
      "Workflow asynchronous perlu menampung backlog agar worker bisa mengejar setelah outage. Pilihan mana yang sesuai?",
      "An asynchronous workflow needs a backlog so workers can catch up after an outage. Which option fits?",
      "sqs",
    ],
  ],
  performance: [
    [
      "Gambar website perlu di-cache dekat pengguna global. Layanan mana yang sesuai?",
      "Website images need caching near global users. Which service fits?",
      "cloudfront",
    ],
    [
      "Query database yang sama diulang sangat sering dan toleran terhadap cache. Layanan mana yang mengurangi pembacaan database?",
      "The same database query repeats frequently and tolerates caching. Which service reduces database reads?",
      "cache",
    ],
    [
      "Aplikasi DynamoDB read-heavy memerlukan cache yang dirancang untuk DynamoDB. Pilihan mana yang sesuai?",
      "A read-heavy DynamoDB app needs a cache designed for DynamoDB. Which option fits?",
      "dax",
    ],
    [
      "Analis sesekali men-query file Parquet di S3 dengan SQL tanpa cluster tetap. Layanan mana yang sesuai?",
      "Analysts occasionally query Parquet files in S3 with SQL without a persistent cluster. Which service fits?",
      "athena",
    ],
    [
      "Perusahaan memerlukan data warehouse analitik terstruktur. Layanan mana yang sesuai?",
      "A company needs a structured analytics data warehouse. Which service fits?",
      "redshift",
    ],
    [
      "Sensor mengirim record berurutan ke beberapa consumer streaming dengan kemampuan replay. Layanan mana yang sesuai?",
      "Sensors send ordered records to streaming consumers that need replay. Which service fits?",
      "kinesis",
    ],
    [
      "Upload S3 harus memicu fungsi singkat untuk membuat thumbnail. Layanan mana yang sesuai?",
      "An S3 upload must trigger a short function to create a thumbnail. Which service fits?",
      "lambda",
    ],
    [
      "Tim menjalankan container ECS tetapi tidak ingin mengelola host EC2. Pilihan compute mana yang sesuai?",
      "A team runs ECS containers but does not want to manage EC2 hosts. Which compute option fits?",
      "fargate",
    ],
    [
      "Ribuan fungsi membuka koneksi database yang singkat. Komponen mana yang menyediakan pooling koneksi?",
      "Thousands of functions open short database connections. Which component provides connection pooling?",
      "proxy",
    ],
    [
      "Aplikasi memerlukan pencarian full-text atas log aplikasi yang diindeks. Layanan mana yang sesuai?",
      "An app needs full-text search over indexed application logs. Which service fits?",
      "opensearch",
    ],
    [
      "Game global berbasis UDP perlu IP anycast dan jaringan backbone AWS. Pilihan mana yang sesuai?",
      "A global UDP game needs anycast IPs and the AWS backbone network. Which option fits?",
      "accelerator",
    ],
    [
      "API HTTP merutekan /images dan /orders ke target group berbeda. Pilihan mana yang sesuai?",
      "An HTTP API routes /images and /orders to different target groups. Which option fits?",
      "alb",
    ],
    [
      "Layanan TCP membutuhkan load balancing tanpa aturan path HTTP. Pilihan mana yang sesuai?",
      "A TCP service needs load balancing without HTTP path rules. Which option fits?",
      "nlb",
    ],
    [
      "Pembacaan dashboard boleh sedikit tertinggal dari primary RDS. Pilihan mana yang meningkatkan kapasitas baca?",
      "Dashboard reads may lag slightly behind an RDS primary. Which option increases read capacity?",
      "replica",
    ],
    [
      "Beberapa container Linux perlu berbagi file melalui NFS. Storage mana yang sesuai?",
      "Several Linux containers need shared files over NFS. Which storage fits?",
      "efs",
    ],
    [
      "File data besar perlu disimpan sebagai objek dan diakses dengan key. Storage mana yang sesuai?",
      "Large data files need object storage accessed by key. Which storage fits?",
      "s3",
    ],
    [
      "Aplikasi perlu menyerap lonjakan job agar kapasitas worker tidak mengikuti lonjakan secara langsung. Pilihan mana yang sesuai?",
      "An app needs to absorb job spikes so worker capacity need not instantly match each spike. Which option fits?",
      "sqs",
    ],
  ],
  cost: [
    [
      "Job batch bisa checkpoint dan diulang saat interupsi. Opsi pembelian EC2 mana yang sesuai?",
      "A batch job can checkpoint and retry after interruption. Which EC2 purchasing option fits?",
      "spot",
    ],
    [
      "Pemakaian komputasi stabil dan perusahaan bersedia berkomitmen biaya per jam. Pilihan mana yang sesuai?",
      "Compute usage is steady and the company can commit to hourly spend. Which option fits?",
      "savings",
    ],
    [
      "Pemilik akun ingin menerima email ketika biaya mendekati batas bulanan. Layanan mana yang sesuai?",
      "An account owner wants an email when costs approach a monthly threshold. Which service fits?",
      "budget",
    ],
    [
      "Analis ingin mengetahui layanan penyebab kenaikan biaya selama tiga bulan terakhir. Layanan mana yang sesuai?",
      "An analyst wants to identify services behind a cost rise over the last three months. Which service fits?",
      "explorer",
    ],
    [
      "Pola akses objek berubah dan sulit diprediksi. Kelas S3 mana yang otomatis mengubah tier akses?",
      "Object access patterns change unpredictably. Which S3 class automatically changes access tiers?",
      "intelligent",
    ],
    [
      "Arsip tujuh tahun jarang dibaca dan pemulihan beberapa jam dapat diterima. Kelas storage mana yang sesuai?",
      "Seven-year archives are rarely read and retrieval taking hours is acceptable. Which storage class fits?",
      "glacier",
    ],
    [
      "Workload baru berjalan dua hari, tidak boleh diinterupsi, dan tidak punya komitmen jangka panjang. Opsi EC2 mana yang sesuai?",
      "A new workload runs for two days, cannot be interrupted, and has no long-term commitment. Which EC2 option fits?",
      "ondemand",
    ],
    [
      "Biaya perlu dikelompokkan menurut departemen dengan label resource. Mekanisme mana yang sesuai?",
      "Costs need grouping by department using resource labels. Which mechanism fits?",
      "tags",
    ],
    [
      "Instance dipilih berdasarkan kebutuhan nyata CPU dan memori, bukan selalu ukuran terbesar. Praktik mana yang digunakan?",
      "Instances are selected using actual CPU and memory needs rather than always choosing the largest size. Which practice is used?",
      "rights",
    ],
    [
      "Fungsi hanya berjalan saat ada file masuk dan tidak memerlukan server idle. Opsi compute mana yang sesuai?",
      "A function runs only when a file arrives and requires no idle server. Which compute option fits?",
      "lambda",
    ],
    [
      "Instance privat mengakses S3 lewat NAT dan ingin menghindari jalur NAT untuk trafik tersebut. Komponen mana yang sesuai?",
      "Private instances access S3 through NAT and want to avoid that NAT path. Which component fits?",
      "endpoint",
    ],
    [
      "Tim ingin menganalisis file S3 hanya beberapa kali per bulan tanpa menjaga cluster query tetap hidup. Pilihan mana yang sesuai?",
      "A team queries S3 files only a few times monthly without maintaining a query cluster. Which option fits?",
      "athena",
    ],
    [
      "Trafik naik turun tajam dan web tier harus mengurangi kapasitas ketika sepi. Layanan mana yang membantu?",
      "Traffic varies sharply and a web tier must reduce capacity when quiet. Which service helps?",
      "asg",
    ],
    [
      "Pemilik produk perlu peringatan penggunaan mendekati anggaran, bukan sekadar grafik historis. Layanan mana yang sesuai?",
      "A product owner needs alerts as usage approaches a budget rather than just historical charts. Which service fits?",
      "budget",
    ],
  ],
};
export function expand(group) {
  const rows = cases[group],
    alternatives = [...new Set(rows.map((r) => r[2]))];
  return rows.map(([id, en, key], index) => {
    const keys = [
      key,
      ...alternatives
        .filter((k) => k !== key)
        .slice(index % Math.max(1, alternatives.length - 3)),
      ...alternatives.filter((k) => k !== key),
    ]
      .filter((k, i, a) => a.indexOf(k) === i)
      .slice(0, 4);
    const reasonId = concepts[key][1],
      reasonEn = concepts[key][2];
    return [
      id,
      en,
      keys.map((k) => concepts[k][0]),
      reasonId,
      reasonEn,
      null,
      {
        sourceUrl: concepts[key][3],
        notesId: keys.map((k) => concepts[k][1]),
        notesEn: keys.map((k) => concepts[k][2]),
      },
    ];
  });
}
export function optionConcept(text) {
  return Object.values(concepts).find(
    (c) => c[0].toLowerCase() === text.toLowerCase(),
  );
}

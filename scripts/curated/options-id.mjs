// Translate prose; AWS service names, CLI/API identifiers and product features stay recognizable.
const pairs = `Variable expense|Biaya variabel
Fixed provisioning|Penyediaan kapasitas tetap
Hardware for peak capacity|Perangkat keras untuk kapasitas puncak
Always-on unused servers|Server yang tetap menyala meskipun tidak digunakan
Owned data center|Pusat data milik sendiri
Elasticity|Elastisitas
Scalability|Skalabilitas
Agility|Kelincahan
Encryption|Enkripsi
Audit logging|Pencatatan audit
Resource tagging|Pemberian tag pada sumber daya
Data residency|Lokasi penyimpanan data
Single tenancy|Infrastruktur khusus satu pelanggan
Permanent overprovisioning|Penyediaan kapasitas berlebih secara permanen
Speed and agility|Kecepatan dan kelincahan
Long procurement cycles|Proses pengadaan yang panjang
Manual hardware assembly|Perakitan perangkat keras secara manual
Global reach|Jangkauan global
Ownership of all facilities|Kepemilikan seluruh fasilitas
Only one local server|Hanya satu server lokal
Zero network latency|Tanpa latensi jaringan
Economies of scale|Skala ekonomi
Dedicated server per customer|Server khusus untuk setiap pelanggan
No operating costs|Tanpa biaya operasional
Free electricity|Listrik gratis
Reduce data-center operations|Mengurangi pengelolaan pusat data
Own more power systems|Memiliki lebih banyak sistem kelistrikan
Inspect cooling equipment|Memeriksa perangkat pendingin
Manage more physical cabling|Mengelola lebih banyak kabel fisik
Connected on-premises and cloud resources|Sumber daya on-premises yang terhubung dengan cloud
No internet connectivity|Tanpa koneksi internet
Exactly two AWS accounts|Tepat dua akun AWS
Only one Availability Zone|Hanya satu Availability Zone
Fault tolerance|Toleransi terhadap kegagalan
Single point of failure|Satu titik kegagalan
Manual billing|Penagihan manual
Unencrypted storage|Penyimpanan tanpa enkripsi
Limit single-AZ failure impact|Membatasi dampak kegagalan satu AZ
Guarantee zero cost|Menjamin tidak ada biaya
Guaranteed zero cost|Menjamin tidak ada biaya sama sekali
Eliminate backups|Menghilangkan pencadangan
Use one physical building|Menggunakan satu gedung fisik
Reduce undifferentiated heavy lifting|Mengurangi pekerjaan operasional rutin yang tidak membedakan produk
Remove all customer responsibility|Menghapus seluruh tanggung jawab pelanggan
Manage more physical servers|Mengelola lebih banyak server fisik
Increase manual OS work|Menambah pekerjaan sistem operasi secara manual
Idle capacity during low demand|Kapasitas menganggur saat permintaan rendah
Demand never changes|Permintaan tidak pernah berubah
Servers always fully utilized|Server selalu digunakan sepenuhnya
Unused resources always free|Sumber daya yang tidak digunakan selalu gratis
Independent component failure and scaling|Kegagalan dan penskalaan komponen dapat ditangani secara terpisah
All failures stop every component|Setiap kegagalan menghentikan semua komponen
Every component shares one process|Semua komponen berbagi satu proses
Retries prohibited|Percobaan ulang dilarang
Frequent measured experiments|Eksperimen berkala dengan hasil yang diukur
Irreversible changes only|Hanya perubahan yang tidak dapat dibatalkan
Avoid monitoring|Menghindari pemantauan
Buy hardware for every experiment|Membeli perangkat keras untuk setiap eksperimen
No; sizing and usage need optimization|Tidak; ukuran dan penggunaan sumber daya perlu dioptimalkan
Yes; idle resources never cost money|Ya; sumber daya menganggur tidak pernah dikenai biaya
Yes; monitoring unnecessary|Ya; pemantauan tidak diperlukan
Yes; all resources are free|Ya; semua sumber daya gratis
Consistent reproducible environments|Lingkungan konsisten yang dapat dibuat ulang
Unlimited free resources|Sumber daya gratis tanpa batas
No permission review needed|Peninjauan izin tidak diperlukan
Guaranteed failure-free systems|Sistem dijamin tidak pernah gagal
Origin Access Control with scoped bucket policy|Origin Access Control dengan kebijakan bucket yang dibatasi
Remove bucket policies|Menghapus kebijakan bucket
Public-read ACL|ACL yang mengizinkan pembacaan publik
Unrestricted website endpoint|Endpoint situs web tanpa pembatasan akses
Public IP per instance|Alamat IP publik untuk setiap instance
Internet gateway route only|Hanya rute melalui internet gateway
Open all inbound ports|Membuka semua port masuk
Shared root password|Berbagi kata sandi pengguna root
Role trust and caller AssumeRole permission|Trust policy pada role dan izin AssumeRole bagi pemanggil
Only security group rule|Hanya aturan security group
Only S3 lifecycle policy|Hanya kebijakan siklus hidup S3
Service control policy|Service control policy (SCP)
CloudFront cache policy|Kebijakan cache CloudFront
Always needs separate return rules|Selalu memerlukan aturan khusus untuk lalu lintas balasan
Requires explicit deny rules|Memerlukan aturan penolakan eksplisit
Always routed to another VPC|Selalu diarahkan ke VPC lain
Automatically allowed by stateful behavior|Diizinkan otomatis karena security group bersifat stateful
IAM password policy|Kebijakan kata sandi IAM
Security group deny rule|Aturan penolakan pada security group
Deny with aws:SecureTransport=false|Menolak permintaan dengan aws:SecureTransport=false
Shorter object names|Memperpendek nama objek
Make bucket public|Menjadikan bucket dapat diakses publik
Disable versioning|Menonaktifkan versioning
Required actions scoped to table ARN|Hanya tindakan yang diperlukan pada ARN tabel tersebut
All account resources|Seluruh sumber daya dalam akun
Root access key|Access key pengguna root
IAM user per website visitor|Pengguna IAM untuk setiap pengunjung situs
Open DB port to all IPs|Membuka port basis data untuk semua alamat IP
Public S3 ACL|ACL S3 yang mengizinkan akses publik
Disable database TLS|Menonaktifkan TLS pada basis data
Inbound source is app SG|Sumber aturan masuk adalah security group aplikasi
Multi-factor authentication|Autentikasi multifaktor (MFA)
Public access keys|Access key yang dipublikasikan
Shared password|Kata sandi bersama
Disable audit logs|Menonaktifkan log audit
ALB and multi-AZ Auto Scaling|ALB dan Auto Scaling di beberapa AZ
One instance in one AZ|Satu instance dalam satu AZ
Two instances in same AZ only|Dua instance hanya dalam AZ yang sama
One local disk snapshot|Satu snapshot disk lokal
Shared process memory|Memori bersama dalam satu proses
DNS round robin only|Hanya DNS round robin
Synchronous direct calls only|Hanya pemanggilan langsung secara sinkron
Disable consumer logs|Menonaktifkan log aplikasi penerima pesan
SQS DLQ with redrive policy|SQS dead-letter queue dengan redrive policy
Delete every failed message|Menghapus setiap pesan yang gagal diproses
Increase DNS TTL|Menaikkan TTL DNS
Idempotent processing|Pemrosesan idempoten
Assume exactly-once delivery|Menganggap pesan selalu dikirim tepat sekali
Disable visibility timeout|Menonaktifkan visibility timeout
Remove all retries|Menghilangkan semua percobaan ulang
One local FIFO file|Satu berkas FIFO lokal
Single synchronous consumer|Satu aplikasi penerima sinkron
EBS as notification service|EBS sebagai layanan notifikasi
SNS topic with SQS subscriptions|Topik SNS dengan langganan antrean SQS
Random message shuffle|Mengacak urutan pesan
Messages stored in DNS|Menyimpan pesan dalam DNS
SQS FIFO with customer message group|SQS FIFO dengan grup pesan per pelanggan
SQS standard without ordering|SQS Standard tanpa jaminan urutan
Longer connection timeout|Memperpanjang batas waktu koneksi
RDS backups with point-in-time recovery|Cadangan RDS dengan pemulihan ke titik waktu tertentu
ALB health check|Pemeriksaan kesehatan ALB
Security group allow rule|Aturan izin pada security group
One instance store disk|Satu disk instance store
One EBS volume across AZs|Satu volume EBS di beberapa AZ
Local temporary directory|Direktori sementara lokal
One static A record|Satu record A statis
KMS rotation|Rotasi kunci KMS
Route 53 failover with health checks|Failover Route 53 dengan pemeriksaan kesehatan
Suitable shared session store|Penyimpanan sesi bersama yang sesuai
More memory on the same server|Menambah memori pada server yang sama
Disable load balancing|Menonaktifkan penyeimbangan beban
Longer DNS TTL|Memperpanjang TTL DNS
CloudFront edge caching|Cache pada edge location CloudFront
Larger origin disk only|Hanya memperbesar disk server asal
Route requests via laptop|Mengarahkan permintaan melalui laptop
Disable caching|Menonaktifkan cache
Increase volume IOPS|Menaikkan IOPS volume
Remove indexes indiscriminately|Menghapus indeks tanpa pertimbangan
Multi-AZ DB-instance standby for reads|Menggunakan instance standby Multi-AZ untuk kueri baca
Different Region per node|Region berbeda untuk setiap node
Spread across distant AZs|Menyebarkan instance ke AZ yang berjauhan
Provisioned concurrency|Kapasitas eksekusi siap pakai (provisioned concurrency)
Mutable environment variable|Variabel lingkungan yang dapat diubah
Longer IAM session|Memperpanjang sesi IAM
Public S3 bucket|Bucket S3 publik
RAM as permanent storage|RAM sebagai penyimpanan permanen
Instance store only|Hanya instance store
Maximum provisioned capacity forever|Mempertahankan kapasitas maksimum secara permanen
Lifecycle to suitable archive class|Aturan siklus hidup ke kelas arsip yang sesuai
Standard storage forever|Menggunakan kelas Standard selamanya
Unnecessary duplicate objects|Duplikasi objek yang tidak diperlukan
One Zone-IA automatic tiering|Pemindahan tingkat otomatis melalui One Zone-IA
Scheduled stop/start|Penghentian dan penyalaan terjadwal
Keep unused instances running|Membiarkan instance tidak terpakai tetap menyala
Larger night-time instances|Memperbesar instance pada malam hari
Remove tags only|Hanya menghapus tag
On-demand capacity|Kapasitas sesuai permintaan (on-demand)
Public bucket|Bucket publik
DNS TTL as capacity|Menggunakan TTL DNS sebagai kapasitas
Keep all snapshots forever|Menyimpan semua snapshot selamanya
Classify and protect application data|Mengklasifikasikan dan melindungi data aplikasi
Configure appropriate IAM access|Mengonfigurasi akses IAM yang sesuai
Repair physical host hardware|Memperbaiki perangkat keras host fisik
Maintain AWS data-center cooling|Memelihara pendingin pusat data AWS
Cost allocation tags|Tag alokasi biaya
Right-sizing|Penyesuaian ukuran sumber daya (right-sizing)
Elastic capacity|Kapasitas elastis
Mandatory peak hardware purchase|Kewajiban membeli perangkat keras untuk beban puncak
Usage-based variable expense|Biaya variabel sesuai penggunaan
Loose coupling|Kopling longgar antar komponen
Shared responsibility model|Model tanggung jawab bersama
Infrastructure as code|Infrastruktur sebagai kode (IaC)
Serverless computing|Komputasi tanpa pengelolaan server (serverless)
IAM role with least-privilege policy|IAM role dengan kebijakan hak akses minimum
Public database endpoint|Endpoint basis data publik
CloudTrail cost dashboard|Dasbor biaya CloudTrail
Disable CloudWatch|Menonaktifkan CloudWatch
IAM password change|Mengubah kata sandi IAM
Instance store DB|Basis data pada instance store
NLB HTTP path rules|Aturan jalur HTTP pada NLB
Standard without lifecycle|Kelas Standard tanpa aturan siklus hidup`;
const translations = Object.fromEntries(
  pairs.split("\n").map((row) => row.split("|")),
);
export const localizeOption = (text) => translations[text] || text;

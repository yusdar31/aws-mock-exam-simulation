# AWS Mock Exam Simulator

Simulator ujian AWS Solutions Architect Associate berbasis `React + TypeScript + Vite` dengan backend terpisah untuk pipeline bank soal.

## Fitur

- exam UI bergaya engine ujian asli
- timer, mark for review, final review screen, dan result review
- bank soal hardcoded untuk demo exam (12 soal)
- backend untuk import raw dump dan normalisasi soal
- admin review panel dengan filter status, edit soal, approve/reject
- exam mode membaca soal approved dari backend (fallback ke demo jika kosong)

## Struktur project

- `src/` untuk frontend exam simulator
- `backend/src/` untuk API import dump dan review soal
- `backend/data/questions.json` untuk bank soal hasil import
- `src/data/questionBank.ts` untuk demo questions (fallback)

## Menjalankan fullstack dengan Docker

```bash
docker compose up --build
```

Service yang tersedia:

- frontend: `http://localhost:4173`
- backend API: `http://localhost:4000`

## Menjalankan fullstack tanpa Docker

Frontend:

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173
```

Backend:

```bash
cd backend
npm install
npm run dev
```

## Konfigurasi backend

Contoh `backend/.env`:

```bash
PORT=4000
```

## Endpoint backend

- `GET /health`
- `GET /api/questions` — semua soal (admin)
- `GET /api/questions/approved` — soal approved saja (exam mode)
- `POST /api/questions/import-dump-fast` — import raw dump
- `PUT /api/questions/:id` — edit soal
- `POST /api/questions/:id/approve` — approve soal
- `POST /api/questions/:id/reject` — reject soal

Contoh body import:

```json
{
  "sourceRef": "aws-saa-dump-apr-2026",
  "rawText": "1] A company ..."
}
```

## Workflow

1. Import soal via admin panel (paste raw dump text)
2. Review dan edit soal satu per satu
3. Approve soal yang sudah siap
4. Soal approved otomatis tampil di exam mode saat "Begin Exam" diklik

## Deployment (Opsional)

Jika ingin memindahkan aplikasi ini (terutama AI Scheduler) ke AWS secara *autopilot*, Anda bisa menggunakan skrip **Terraform** yang ada di direktori `terraform/`.

1. Masuk ke direktori terraform: `cd terraform`
2. Jalankan inisialisasi: `terraform init`
3. Tinjau apa yang akan dibuat: `terraform plan`
4. Deploy ke AWS (akan makan waktu sekitar 1 menit): `terraform apply`

Nanti Anda akan mendapatkan output IP *Server (Misal: http://13.250.x.x:4173)* dan SSH file (otomatis tercetak sebagai `.pem`). Di dalam server tersebut Docker akan otomatis menyala.

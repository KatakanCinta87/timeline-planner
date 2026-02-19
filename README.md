# Timeline Planner

Aplikasi planner berbasis HTML + JavaScript untuk mengelola task dengan tampilan tabel dan timeline.

## Fitur Saat Ini

- CRUD task lewat halaman terpisah:
  - `index.html` (dashboard + filter + timeline)
  - `added_task.html` (tambah task)
  - `edit.html` (edit task + manajemen lampiran)
  - `task.html` (detail task + update cepat)
- Status task: `Planned`, `In Progress`, `Done`
- Checklist selesai yang otomatis sinkron dengan progress 100%
- Lampiran file (DOCX, PDF, XLSX, image/*) dengan batas ukuran per file dan total per task
- Export data:
  - dari index: JSON, XLSX, PDF (semua task)
  - dari detail task: JSON, XLSX, PDF (single task)
- Fitur `Load Plan` template berdasarkan rentang tanggal
- Penyimpanan data lokal browser (`localStorage`) dengan key `timeline_planner_tasks_v2`

## Prasyarat

- Node.js 18+ (disarankan LTS terbaru)

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka:

- `http://localhost:5173/index.html`
- `http://localhost:5173/added_task.html`
- `http://localhost:5173/edit.html?id=<task-id>`
- `http://localhost:5173/task.html?id=<task-id>`

## Build Production

```bash
npm run build
npm run preview
```

Output build ada di folder `dist/`.

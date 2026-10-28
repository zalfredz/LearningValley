# Learning Valley 🌱

Ruang fokus bersama bergaya pixel art. Jelajahi peta, pilih aktivitas, lalu belajar dengan timer Pomodoro sementara karaktermu beraktivitas.

## Fitur

- Timer fokus dan istirahat dengan pemulihan sesi setelah refresh.
- Karakter yang dapat disesuaikan dan digerakkan dengan WASD atau tombol panah.
- Aktivitas bersama dengan tempat yang terkunci saat digunakan.
- Editor jalur, area, dan posisi aktivitas; tekan **Ctrl** untuk melihat grid.

## Menjalankan secara lokal

Butuh Node.js **22.13+** dan npm.

```bash
npm ci
npm run build
```

Untuk database lokal baru, jalankan migrasi sekali, lalu mulai server:

```bash
for migration in drizzle/*.sql; do
  node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file "$migration"
done
npm run dev
```

Buka URL yang ditampilkan, lalu masuk melalui `/signin-with-chatgpt?return_to=/` untuk menggunakan identitas lokal. Jangan jalankan ulang semua migrasi pada database yang sudah dibuat.

## Teknologi

React, Vinext, Cloudflare Workers dan D1, serta Drizzle ORM. Proyek ini masih prototipe. Deployment memerlukan konfigurasi Workers, D1, dan autentikasi sendiri.

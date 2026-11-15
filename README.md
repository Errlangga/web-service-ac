# EFASA TEKNIK

Website layanan service AC, katalog penjualan AC, dokumentasi pekerjaan, formulir keluhan, dan dashboard admin.

## Setup

1. Install dependencies: `npm install`
2. Set `DATABASE_URL` (Neon Postgres pooled connection string).
3. Set `BLOB_READ_WRITE_TOKEN` (Vercel Blob).
4. Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` as Vercel environment variables.
5. Run `npm run dev`.

The application initializes its tables automatically on first server request. Deploy on Vercel with the repository root as the project root.

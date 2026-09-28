# Cloudflare hosting

Worker: `demostoke-designsystem`. Build: `npm ci && npm run build`. Deploy: `npx wrangler@4.142.0 deploy`. Production branch: `main`. Assets: `build`. SPA routes fall back to index.html; existing widget.html and loader assets remain separate files.

DigitalOcean remains available for rollback. Supabase and its functions are unchanged. Only public Vite configuration belongs in build variables; do not copy server secrets into static builds.

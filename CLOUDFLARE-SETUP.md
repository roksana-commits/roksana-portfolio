# Cloudflare Workers deployment

This project is a React/Vite single-page portfolio. It uses Cloudflare Workers Static Assets (assets-only Worker), not the old Pages upload flow.

## Workers Builds settings

- Production branch: `main`
- Build command: `pnpm run build`
- Deploy command: `npx wrangler deploy`

Do not use the direct "Upload and deploy" uploader for this source project.

The repository includes `wrangler.jsonc`, which tells Wrangler to deploy `dist/public` as static assets and use SPA fallback routing. This prevents Wrangler from trying to auto-modify `vite.config.ts`.

## Important

The site assets are local under `client/public/assets/`; the previous `/manus-storage/` image paths have been replaced.

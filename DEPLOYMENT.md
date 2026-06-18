# Deployment Guide

This project is a TanStack Start app built with Vite + Nitro. Nitro lets the
same source produce a build for **Vercel** (serverless) or a **Hostinger VPS**
(Node server) without code changes — only the `NITRO_PRESET` differs.

The build output always lives in `.output/`.

---

## 1. Vercel

Vercel auto-detects Nitro's `vercel` preset (it sets `VERCEL=1` during the
build), so no manual preset flag is needed.

**Setup**

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Vercel → **New Project** → import the repo.
3. Framework preset: **Other** (already configured via `vercel.json`).
4. Build command: `bun run build` (default from `vercel.json`).
5. Install command: `bun install` (default from `vercel.json`).
6. Output directory: leave blank — Nitro writes the Vercel-native layout into
   `.vercel/output` automatically.
7. Add any `VITE_*` / server env vars under **Settings → Environment Variables**.
8. Click **Deploy**.

Subsequent pushes deploy automatically.

---

## 2. Hostinger VPS (Node server)

Use Nitro's `node-server` preset. The result is a self-contained Node app at
`.output/server/index.mjs` that listens on `PORT` (default `3000`).

Static images and other public files are copied into `.output/public` during
the build. On Hostinger, deploy the full `.output` folder and run the server
from the project root so URLs like `/wecare2-logo.webp` and
`/mason-ward-director.webp` resolve correctly.

### One-time VPS setup

SSH into the VPS, then:

```bash
# Node 20+ (use nvm or Hostinger's Node template)
curl -fsSL https://bun.sh/install | bash      # bun for installs/builds
npm i -g pm2                                   # process manager
sudo apt-get install -y nginx                  # reverse proxy + TLS termination
```

### Build & run

```bash
# Clone (or pull) the repo on the VPS
git clone <your-repo-url> wecare2 && cd wecare2

# Install deps
bun install

# Build for Node
NITRO_PRESET=node-server bun run build

# Confirm public images were copied into the deployable output
ls .output/public/wecare2-logo.webp .output/public/mason-ward-director.webp

# Start with PM2 using the provided ecosystem file
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup        # follow the printed command to enable boot-start
```

The app is now running on `http://127.0.0.1:3000`.

### Nginx reverse proxy

Create `/etc/nginx/sites-available/wecare2`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable it and add HTTPS via Certbot:

```bash
sudo ln -s /etc/nginx/sites-available/wecare2 /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Updating the site

```bash
cd ~/wecare2
git pull
bun install
NITRO_PRESET=node-server bun run build
pm2 restart wecare2
```

### Environment variables

For VPS runtime env, edit `ecosystem.config.cjs` and add to the `env` block,
then `pm2 restart wecare2 --update-env`. `VITE_*` vars must be present at
**build time** (export them before `bun run build`).

---

## Notes

- The repo's default build inside the Lovable editor still targets Cloudflare —
  that path is untouched. The `NITRO_PRESET` switch only applies when building
  outside the Lovable sandbox.
- Other Nitro presets also work out of the box (e.g. `netlify`, `bun`,
  `deno-server`) — just set `NITRO_PRESET` accordingly.

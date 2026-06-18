// PM2 process file for Hostinger VPS (or any Node host).
// Run after `NITRO_PRESET=node-server bun run build`:
//   pm2 start ecosystem.config.cjs
//   pm2 save && pm2 startup
module.exports = {
  apps: [
    {
      name: "wecare2",
      script: ".output/server/index.mjs",
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "0.0.0.0",
      },
    },
  ],
};

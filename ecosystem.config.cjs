// PM2 process config. See docs/08-deploy-digitalocean.md.
module.exports = {
  apps: [
    {
      name: 'canyon-construction',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      max_memory_restart: '500M',
    },
  ],
};

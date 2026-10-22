// PM2 process config. See docs/08-deploy-digitalocean.md.
module.exports = {
  apps: [
    {
      name: 'canyon-construction',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start -H 127.0.0.1',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3008,
      },
      max_memory_restart: '500M',
    },
  ],
};

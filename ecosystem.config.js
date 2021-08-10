module.exports = {
  apps: [
    {
      name: 'easyvui',
      watch: ['build'],
      script: 'service.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: ['172.16.101.251'],
      ref: 'origin/master',
      repo: 'ssh://git@gitlab.prod.dtstack.cn:10022/visdev/easyvui.git',
      path: '/root/easyvui',
      'post-deploy': 'npm i --unsafe-perm=true && npm run site',
      'pre-deploy-local': `echo 'Deploy Done!'`,
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};

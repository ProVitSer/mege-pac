/* eslint-disable prettier/prettier */
module.exports = {
    apps : [{
      name: 'mege-1c',
      script: 'dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'prod',
      },
    }],
}
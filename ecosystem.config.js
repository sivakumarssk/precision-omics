module.exports = {
    apps: [
      {
        name: 'precision-omics-client',
        script: 'npx',
        args: 'serve out -l 30010', // Serve the static files on port 3000
        cwd: '.',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
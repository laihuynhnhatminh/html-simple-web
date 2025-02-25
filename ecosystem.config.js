module.exports = {
    apps: [
        {
            name: "html-simple-app",
            script: "serve",
            env: {
                PM2_SERVE_PATH: '.',
                PM2_SERVE_PORT: 8080
            }
        },
    ],
};

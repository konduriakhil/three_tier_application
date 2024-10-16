module.exports = {
  devServer: {
    disableHostCheck: true,
    public: process.env.HOSTNAME ? `http://${process.env.HOSTNAME}` : undefined,
    progress: false,
    proxy: {
      '^/api': {
        target: process.env.API_SERVER_URL ? process.env.API_SERVER_URL: 'http://localhost:8080' ,
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
      },
      '^/socket.io': {
        target: 'http://result',
        changeOrigin: true,
        secure: false,
        ws: true,
        logLevel: 'debug',
      },
    },
  },
};

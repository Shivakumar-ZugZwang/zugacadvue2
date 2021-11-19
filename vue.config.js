module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue/'
      : '/',
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
}
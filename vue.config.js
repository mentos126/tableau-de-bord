module.exports = {
  baseUrl: '/',
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/tableau-de-bord/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_main.scss";'
      }
    }
  }
}

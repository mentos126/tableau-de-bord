module.exports = {
  baseUrl: '/',
  outputDir: 'docs',
  publicPath: '/tableau-de-bord/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_main.scss";'
      }
    }
  }
}

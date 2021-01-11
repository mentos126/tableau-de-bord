module.exports = {
  publicPath: '/tableau-de-bord/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_main.scss";'
      }
    }
  }
}

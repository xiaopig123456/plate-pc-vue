module.exports = {
  publicPath:'/',
  outputDir:'dist',
  productionSourceMap:false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_URL_DEV,
        ws: true,
        changeOrigin: true,
      },
    }
  }
}
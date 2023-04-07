const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   // 设置本地服务器打开的域名
  //   host: "127.0.0.1",
  //   // 设置本地服务器打开的端口号
  //   port: "8080",
  //   // 配置跨立代域问题
  //   proxy: {
  //     // api：请求路径当中需要携带/api，代理服务器才会工作
  //     '/api': {
  //       target: '',
  //       // pathRewrite: { '^/dev-api': '' },
  //       // pathRewrite: { '^/api': '' },  //路径不需要重写，因为此服务器路径当中携带/api
  //     },
  //   }
  // }
})

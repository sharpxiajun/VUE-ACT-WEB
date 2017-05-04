// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',// 这个目录不要随便改，要不生成的目录会发生变化
    assetsPublicPath: '/VUE-ACT-WEB/dist/',//会替换js和css引入的路径，这个在开发时候要注意
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    entryAppJs:'./src/main.js'
  },
  dev: {
    env: require('./dev.env'),
    port: 80,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    /*proxyTable: {
      '/VUE-ACT-WEB': {
        target: 'http://www.taobao.com',
        changeOrigin: true,
        pathRewrite: {
          '^/VUE-ACT-WEB': ''
        }
      }
    },*/
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    entryAppJs:'./src/main.js'
  },
  devElem: {
    env: require('./dev.elem'),
    port: 8033,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // 以下配置可以做服务端和客户端联调测试，注意：联调时候要把main.js中的模拟数据注释掉
    /*proxyTable: {
       '/VUE-ACT-ELEMENTUI/': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
       '^/VUE-ACT-ELEMENTUI': ''
        }
       }
     },*/
    cssSourceMap: false,
    entryAppJs:'./src/mainElem.js'
  }
}

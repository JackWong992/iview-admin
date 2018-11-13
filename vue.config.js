const path = require('path')
const resolve = dir=>path.join(__dirname, dir)

//判断当前的环境是开发环境还是上线环境：上线环境路径为/iview-admin;开发环境路径为:/
const BASE_URL = process.env.NODE_ENV === 'production'?'/iview-admin':'/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL, //路径
  chainWebpack: config =>{ //颗粒化的配置webpack
    config.resolve.alias
      .set('@', resolve('src')) //路径alias配置
      .set('_c', resolve('src/components'))
  },
  //打包时不生成.map文件
  productionSourceMap:false,
  devServer: {
    proxy:'http://localhost:4000'
  }
}

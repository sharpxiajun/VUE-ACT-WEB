/**
 * Created by 俊 on 2017/5/3.
 */
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development-elementUI"'
})

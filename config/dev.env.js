'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 开发环境使用的代理 所以前缀为空
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  qqPrefix: '""',
  mkPrefix: '""',
  nodePrefix: '""'
})


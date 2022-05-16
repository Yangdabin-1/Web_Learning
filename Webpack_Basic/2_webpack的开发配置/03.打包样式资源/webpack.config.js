/* 
  webpack的基本信息配置文件
  作用：指示webpack需要做什么
  什么时候用到？运行webpeck指令时，会加载里面的配置
  配置作为对象，向外暴露
  所有构建工具都是基于node.js平台运行的，模块化采用commonjs
*/
const path = require('path')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:path.join(__dirname + '/build') 
  },
  module:{
    rules:[
      //1.处理css资源
      {
      test:/\.css$/,
      use:[
        //npm i css-loader@3.4.2 style-loader@1.1.3 -D
        'style-loader',
        'css-loader'
      ]
      },
      //2.处理less资源
      {
        test:/\.less$/,
        use:[
          // 将样式资源放入样式标签内，并且标签放入header中
          'style-loader',
          // css变成js
          'css-loader',
          // less->css
          'less-loader'
        ]
      }
  ]
  },
  // plugins:{},
  mode:'development'
  // mode:'production'
}

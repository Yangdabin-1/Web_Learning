const path = require('path')
// 1.下载html-webpack-plugin
//2.引用这个plugins
const HtmlWebpackPlugins = require('html-webpack-plugin')
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
  ]
  },
  plugins:[
    //3.使用plugins
    // 这会在build里生成一个新的页面，页面自动引入了bulit.js文件
    //但这个页面是空的页面，所以需要原页面的模板
    new HtmlWebpackPlugins(
      //4.设置模板
      {template:'./src/index.html'}
    )
  ],
  mode:'development'
  // mode:'production'
}

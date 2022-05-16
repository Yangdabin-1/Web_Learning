const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports ={
  entry:'./src/js/index.js',
  output:{
    filename:'js/built.js',
    path:path.join(__dirname,'build')
  },
  module:{
    rules:[
      //处理css
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      //处理其他资源
      {
        exclude:/.(css|js|less|jpg|html)/,
        use:{
          loader:'file-loader',
          options:{
            name:'[hash:10].[ext]',
            path:'./build/media'
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development',
  /* 
  开启服务器 devServer
  作用：开启自动化（自动编译/自动刷新浏览器）
  特点：只会在内存中编译，不会把资源打包到build里
  */
  devServer:{
    contentBase:path.join(__dirname, 'build'),
    //开启gzip压缩
    compress:true,
    //服务器端口号
    port:3000,
    //是否打开页面
    open:true
  },
}
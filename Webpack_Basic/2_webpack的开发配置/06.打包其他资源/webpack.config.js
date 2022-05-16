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
  mode:'development'
}
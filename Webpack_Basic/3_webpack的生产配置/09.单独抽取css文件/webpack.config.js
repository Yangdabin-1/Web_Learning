const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'js/built.js',
    path:path.join(__dirname,'build')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
        //将样式放入script标签中，在引入html中
        // 'style-loader',
        //用这个取代style-loader，将css从js文件中抽离出来，在通过link引入html中
        MinCssExtractPlugin.loader,
        //将css编译成js文件
        'css-loader'
      ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MinCssExtractPlugin({
      filename:'css/built.css'
    })

  ]
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

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
        MinCssExtractPlugin.loader,
        'css-loader',
        {
          loader:'postcss-loader',
          options:{
            ident:'postcss',
            plugins:()=>[
              require('postcss-preset-env')()
            ]
          }
        }
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
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode:'development'
}
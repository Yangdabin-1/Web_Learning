const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinCssExtractPlugin = require('mini-css-extract-plugin')

//设置nodejs的环境变量为开发环境
// process.env.NODE_ENV="development"

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
        // 设置兼容新loader
        {
          loader:'postcss-loader',
          options:{
            ident:'postcss',
            plugins:()=>[
              require('postcss-preset-env')()
            ]
          }
        }
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //       postcssOptions: {
        //           plugins: [
        //             ['postcss-preset-env',{}]
        //           ]
        //       }
        //   }
        // }
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
  ],
  mode:'development'
}
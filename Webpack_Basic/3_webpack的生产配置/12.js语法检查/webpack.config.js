const path = require('paht')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:path.join(__dirname,'build')
  },
  module:{
    rules:[
      //下载第三方库eslint-loader和eslint，进行语法检查
      //而检查规范遵从Airbnb的规范
      //使用这个规范需要下载airbnb的使用规则
      // eslint-config-airbnb-base-----eslint-plugin-import--------eslint
      /* 
        引入Airbnb的使用规则，在package.json设置新的配置项 "eslintConfig"
      */
      {
        test:/\.js$/,
        //不需要规范第三方库
        exclude:/node_modules/,
        loader:'eslint-loader',
        options:{
          //遇到不规范是否自动规范
          fix:true
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}
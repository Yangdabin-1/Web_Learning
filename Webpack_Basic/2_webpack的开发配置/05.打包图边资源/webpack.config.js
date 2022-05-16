const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:path.join(__dirname,'./build')
  },
  module:{
    rules:[
      //1.处理less
      {
      test:/\.less$/,
      use:[
        "style-loader",
        'css-loader',
        'less-loader'
      ]
      },
      //2.处理图片资源,不能处理html里的图片资源
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              /* 对于大小 < 6kb 的图片，将图片转换为base64的格式
                优点：base64可以减少网络请求（缓解服务器压力）
                缺点：图片体积会变大（文件请求速度边慢）
                所以：对于小体积（6-12kb）可以使用这种方法
              */
              limit: 6*1024,
              /* 
                再对html文件处理html图片时，url-loader默认使用ES6模块化解析，而html-withimg-loader
                使用的是commonjs
                解析时会出现问题：[object Module]
                办法：关闭url-loader的es6模块化解析
              */
              esModule:false,
              //name设置,解析后的图片的名称为  哈希值前十位.文件扩展名
              name:'[hash:10].[ext]'
            },   
          },
        ]
      },
      //3.处理html里的图片资源
      {
        test:/\.html$/,
        use:[
          {
            //负责能够在页面引入图片，但是具体操作由url-loader处理
            loader:'html-withimg-loader'
          }
        ]
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
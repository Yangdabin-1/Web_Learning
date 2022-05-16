// 1.下载Mongoose npm i mongoose -S
// 2.引入mongoose
const mongoose = require('mongoose')
// 3.连接数据库
// 字符串解读 ==> '连接的数据库://连接的ip:端口号/连接的数据库'
// 端口号如果是12701,可以不用写，默认就是
mongoose.connect('mongodb://localhost/est')
// 4.监听数据库的链接
mongoose.connection.once('open',function(){
  console.log('connection success...')
})
mongoose.connection.once('close',function(){
  console.log('connection closed...')
})
//5.断开链接
mongoose.disconnect()

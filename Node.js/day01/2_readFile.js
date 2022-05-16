//导入fs模块
const fs = require('fs')

//读取文件


fs.readFile(__dirname + './files/poem1.txt','utf-8',function(err,result){
  //读取成功：err=undefined result=内容
  //读取失败: err=失败的原因 result=undefined
  if(err) return console.log('读取失败:\r' + err.message)
  console.log('读取成功:\r' + result)
})
//1.引入fs模块
const fs = require('fs')
//2.读取文件
fs.readFile('./poem/古诗一.md','utf-8',(err,data)=>{
  //调用tostring不会乱码
  console.log(data.toString())
  //通过终端打开这个js文件
})

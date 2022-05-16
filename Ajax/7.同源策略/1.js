const { response, request } = require('express')
const express = require('express')
const app  =express()
app.all('/home',(reques,response)=>{
  //响应一个页面
  //__dirname:绝对路径
  //地址：http://127.0.0.1:9000/home
  response.sendFile(__dirname+'/1.html')
})
app.all('/data',(request,response)=>{
  response.send('用户数据')
})
app.listen(9000,()=>{
  console.log("9000端口已打开")
})
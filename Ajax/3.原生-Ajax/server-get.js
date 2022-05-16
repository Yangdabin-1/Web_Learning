const { request, response } = require("express")
const express = require("express")
const app = express()

//all可以接受任意类型的请求
app.all('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
          //添加新的请求头类型
  response.setHeader('Access-Control-Allow-Headers','*')
  //设置响应体
  //send只能放字符串类型
  response.send('hello server.js')
 
  

})
//4.监听端口启动服务
app.listen(8000,()=>{
  console.log("服务已启动，8000端口监听ing...")
})
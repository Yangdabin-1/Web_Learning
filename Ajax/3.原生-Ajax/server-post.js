const { request, response } = require("express")
const express = require("express")
const app = express()

//改变发送请求
app.post('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  //设置响应体
  response.send('hello server post')
  

})
//4.监听端口启动服务
app.listen(8000,()=>{
  console.log("服务已启动，8000端口监听ing...")
})
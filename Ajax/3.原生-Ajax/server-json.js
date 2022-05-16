const { request, response } = require("express")
const express = require("express")
const app = express()

//返回JSON字符串的响应报文
app.all('/json-server',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  
  //服务器响应一个数据
  const data = {
    name : "lily",
    age : 23
  }
  //发送数据，这个数据只能是字符串，所有需要转换为JSON
  const result = JSON.stringify(data)
  response.send(result)
})
//有延时的响应的报文
app.all('/delay',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(() => {
    response.send('延时三秒')
  }, 3000);
})

//监听端口8000
app.listen(8000,()=>{
  console.log("8000listening....")
})
const { request, response } = require("express");
const express = require("express");
const app = express();

//axios-fecth服务的路由规则
app.all('/axios-fetch',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const result = {
    name:'response',
    type:'fetch'
  }
  response.send(JSON.stringify(result))
});



app.listen(8000,()=>{
  console.log("服务axios已启动，8000端口监听中...");
})
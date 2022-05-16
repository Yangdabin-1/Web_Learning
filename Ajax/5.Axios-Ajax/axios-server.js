const { request, response } = require("express");
const express = require("express");
const app = express();
//axios-get服务的路由规则
app.all('/axios-get',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const result = {
    name:'response',
    type:'get'
  }
  response.send(JSON.stringify(result))
});
//axios-post服务的路由规则
app.all('/axios-post',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const result = {
    name:'response',
    type:'post'
  }
  response.send(JSON.stringify(result))
});
//axios通用服务的路由规则
app.all('/axios',(request,response)=>{
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const result = {
    name:'response',
    type:'all'
  }
  response.send(JSON.stringify(result))
});


app.listen(8000,()=>{
  console.log("服务axios已启动，8000端口监听中...");
})
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
//jsonp服务：只支持GET请求
app.all('/jsonp',(request,response)=>{
  // response.send('hello jsonp')
  // response.send('console.log("hello jsonp")')
  const data = {
    name:'jsonp-server'
  }
  let result = JSON.stringify(data)
  //end()不会加特殊响应头
  //``特殊字符串可以在其中加入可变的字符串
  response.end(`displays(${result})`)
              //displays({"name":"jsonp-server"})

})
//cors服务
app.all('/cors',(request,response)=>{
  //设置响应头 设置允许所有网页跨域
  // response.setHeader('Access-Control-Allow-Origin','*')
  //设置只有5000端口才可以访问
  response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
  response.send("hahahah")
})
//开启8000端口的监听
app.listen(8000,()=>{
  console.log("服务all已启动，8000端口监听中...");
})
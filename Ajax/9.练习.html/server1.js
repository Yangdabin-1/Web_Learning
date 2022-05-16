const { request, response } = require("express");
const express = require("express");
const app = express();
//1.check-input服务的路由规则
app.all('/check-input',(request,response)=>{
  //2.创建返回的对象
  const data = {
    msg:'用户已经存在'
  }
  //3.将对象转为JSON字符串
  const result = JSON.stringify(data)
  //4.返回一个函数的调用
  response.end(`change(${result})`)
});
app.listen(8000,()=>{
  console.log("server1已启动，8000端口监听中...");
})

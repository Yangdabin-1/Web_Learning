const express = require("express")
const app = express()

//1.加载自定义中间件模块
const bodyParse = require('./5.6.3_body-parse')
//2.注册模块
app.use(bodyParse)
//3.设置路由
app.get('/users',(req,res)=>{
  res.send(req.body)
  console.log(req.body)
})
app.listen(80,()=>{
  console.log('80 listening.....')
})

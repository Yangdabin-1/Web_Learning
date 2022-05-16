const express = require("express")
const app = express()
//1.引入body-parser组件
const parser = require("body-parser")
//2.注册这个组件
app.use(parser.urlencoded({extended:false}))
app.get('/users',(req,res)=>{
  //终端打印请求体数据
    console.log(req.body)
})
app.listen(80,()=>{
  console.log('80 listening.....')
})
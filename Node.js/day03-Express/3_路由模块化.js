const express = require('express')
const app = express()

//导入路由模块
const router = require('./3.1_router.js')
//用app.ues注册路由模块
app.use('/api',router)
//监听
app.listen(80,()=>{
  console.log("80  listening....")
})
 
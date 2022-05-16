//1.创建服务器实例对象
const express = require('express')
const app = express()
//5.加载，注册 解决跨域的中间件 cors:跨域资源共享
const cors = require('cors')
app.use(cors())

//4.注册解析请求体数据的中间件
app.use(express.urlencoded({extended:false}))

//2.加载router
const router = require('./6.2_router')
//3.注册router
app.use('/api',router)
app.listen(80,()=>{
  console.log("80 listening....")
})
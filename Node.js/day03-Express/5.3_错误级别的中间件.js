const express = require('express')
const app = express()

app.get('/user',(req,res)=>{
  throw new Error("服务器发送错误")
  res.send('返回结果:' + req.body)
})


app.use((err,req,res,next)=>{
  res.send('有错误,信息为:'+ err.message)
})
app.listen(80,()=>{
  console.log('80 listening...')
})
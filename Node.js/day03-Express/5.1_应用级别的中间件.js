const express = require('express')
const app = express()

//应用级的中间件
app.use((req,res,next)=>{
  console.log('应用级全局中间件1')
  next()
})
const mw = (req,res,next)=>{
  console.log('应用级局部中间件2')
  next()
}

app.get('/user',mw,(req,res)=>{
  console.log(req.body)
  res.send('返回结果:' + req.body)
})
app.listen(80,()=>{
  console.log('80 listening...')
})
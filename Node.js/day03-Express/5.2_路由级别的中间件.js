const express = require('express')
const app = express()
const router = express.Router('./3.1_router.js')

router.use((req,res,next)=>{
    console.log('这是路由级别的中间件')
    next()
})

app.get('/user',(req,res)=>{
  res.send('响应的一段文字')
})
app.listen(80,()=>{
  console.log('80 listening...')
})
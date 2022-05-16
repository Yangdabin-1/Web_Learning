const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//浏览器传送body 为json格式{"name":"张三"，"age" : 32}
//返回请求数据为undefined
app.get('/user',(req,res)=>{
  console.log(req.body)
  res.send('返回请求体数据:' + req.body)
})


app.listen(80,()=>{
  console.log('80 listening...')
})
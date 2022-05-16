const express = require('express')
const app = express()

//浏览器输入地址，先运行中间件，再运行下一个中间件/路由

//定义全局中间件一的函数
const mw = (req,res,next)=>{
  console.log('这是中间件一')
  const time = Date.now()
  req.startTime = time
  next()
}
//定义局部中间件的函数
const mw2 = (req,res,next)=>{
  console.log('这是局部中间件2')
  next()
}
const mw3 = (req,res,next)=>{
  console.log('这是局部中间件1')
  next()
}

//注册全局中间件一
app.use(mw)
//中间件的省略写法 定义+注册
app.use((req,res,next)=>{
  console.log('这是中间件二')
  next()
})

app.get('/user',(req,res)=>{
  res.send('路由1:'+req.startTime)
})
//注册局部中间件
app.get('/users',[mw2,mw3],(req,res)=>{
  res.send('路由users,局部中间件')
})
app.listen(80,()=>{
  console.log("server opended....")
})
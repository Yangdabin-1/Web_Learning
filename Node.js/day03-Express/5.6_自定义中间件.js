const express = require("express")
const app = express()

//获取内置中间件,字符串->对象
const qs = require("node:querystring")
app.use((req,res,next)=>{
  //1.获取客户端请求的数据,s是字符串格式
  let str = ''
  // 1.1数据量如果太大,客户端会自动分割成许多部分,所以需要手动拼接每次得到的数据
  req.on('data',(chunk)=>{
      //chunk,每次得到的数据
      str += chunk
  })
  //2.1 服务器接收完请求后,end事件会自动触发,得到完整的请求体数据
  req.on('end',()=>{
    //终端输出请求体数据
    console.log("解析前:"+str)
    //3.利用express内置中间件的parse方法,把JSON字符串转为对象
    const body = qs.parse(str)
    //4.将body挂载到req的body上
    req.body = body
    next()
  })

})
app.get('/users',(req,res)=>{
  //终端打印请求体数据
  res.send(req.body)
  console.log("解析后:\n")
    console.log(req.body)
})
app.listen(80,()=>{
  console.log('80 listening.....')
})
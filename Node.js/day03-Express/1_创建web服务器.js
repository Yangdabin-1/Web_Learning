//加载express模块
const express = require('express')
//创建服务器
const app = express()

//监听客户端请求
app.get('/user',(req,res)=>{
  //req.query获取客户端URL携带的 查询参数 
  res.send(req.query)
})
app.post('/user',(req,res)=>{
  res.send({name:'sd',age:19})
})
app.get('/user/a/:id',(req,res)=>{
  //req.params 获取URL中的动态参数
  // http://127.0.0.1/user/a/3  id:3
  res.send(req.params)
})
app.get('/user/b/:id/:name',(req,res)=>{
  //req.params 获取URL中的动态参数
  // http://127.0.0.1/user/b/3/好   id:3
  res.send(req.params)
})
//托管静态资源
//创建一个静态资源服务器，可以访问index文件夹里的所有文件
// http://127.0.0.1/newHtml.html
app.use(express.static('./index'))
app.use(express.static('./indexx'))
// 挂载路径前缀
app.use('./index',express.static('./indexx'))
//启动服务器
app.listen(80,()=>{
  console.log("服务器已经启动，80端口监听中......")
})
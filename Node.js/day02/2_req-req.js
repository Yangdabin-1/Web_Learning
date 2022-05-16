const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
  // 解决响应中文为乱码的情况
  res.setHeader('Content-Type','text/html;charset=utf-8')
  //请求的路径
  const url = req.url
  //请求的类型
  const method = req.method
  //响应的内容
  res.end('响应值')
})
server.listen(80,()=>{
  console.log('80端口以打开，正在监听....')
})
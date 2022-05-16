//1.创建http模块
const http = require('http')
//2.创建web服务器实例
const server = http.createServer()
//3.为服务器实例绑定request事件
server.on('request',(res,req)=>{
  console.log('someone visit this webserver')
})
//4.开启服务器端口监听
server.listen(80,()=>{
  console.log('server running in http://127.0.0.1:80')
})
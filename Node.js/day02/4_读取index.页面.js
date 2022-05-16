const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')

server.on('request',(req,res)=>{
  //只有HTML文件才设置头
  // res.setHeader('Content-Type','text/html;charset=utf-8')

  //把请求的url 映射为文件具体存放的位置
  fs.readFile(path.join(__dirname,'../day01/index',req.url),'utf-8',(err,result)=>{
    if(err){ 
      res.end('404 is not founded')
    }else{
      res.end(result)
    }
  })
  
})
server.listen(80,()=>{
  console.log('80 listening....')
  console.log(__dirname)
})
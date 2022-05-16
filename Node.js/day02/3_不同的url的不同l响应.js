const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
  res.setHeader('Content-Type','text/html;charset=utf-8')
  let content = '<h3>404 not found</h3>'
  if(req.url === '/' || req.url ==='/index.html'){
    content = '第一种'
  }else if(req.url ==='/about.html'){
    content = '<h3>关于页面</h3>'
  }
  res.end(content)
})
server.listen(80,()=>{
  console.log('80 listening....')
  console.log(__dirname)
})
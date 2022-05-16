//模块

//1.加载解析字符串中间件
const qs = require("node:querystring")
//2.创建函数,能解析表单数据
const bodyparse = (req,res,next)=>{
  let str = ''
  req.on('data',(chunk)=>{
   str += chunk
  })
  req.on('end',()=>{
    console.log("解析前:"+str)
    const body = qs.parse(str)
    req.body = body
    next()
  })
}
//3向外暴露函数
module.exports = bodyparse
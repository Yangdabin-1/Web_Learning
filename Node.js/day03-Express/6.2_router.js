//1.加载expres
const express = require('express')
//2.创建路由实例对象
const router = express.Router()
//3.挂载路由
  //3.1 GET请求
router.get('/get',(req,res)=>{
  //获取查询字符串数据
  const query = req.query
  //设置响应数据
  res.send({
      status:0,//状态成功
      msg:'GET请求成功',
      data : query
  })
})
  //3.2 POST请求
router.post('/post',(req,res)=>{
  //获取请求体数据
  const body = req.body
  //设置响应数据
  res.send({
      status:0,//状态
      msg:'POST请求成功',
      data : body
  })
})
//暴露成员
module.exports = router
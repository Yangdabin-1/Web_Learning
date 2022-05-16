const express = require('express')
//创建路由对象
const router = express.Router()
//路由对象身上 挂载路由
router.get('/user/a',(req,res)=>{
  res.send('路由规则一')
})
router.get('/user/b',(req,res)=>{
  res.send('路由规则二')
})

//向外暴露路由对象
module.exports = router
const fs = require('fs')
 
fs.writeFile('./files/poem2.txt','锄禾日当午\r汗滴禾下土\r谁知盘中餐\r粒粒皆辛苦',function(err){
  //如果写入失败：err为Null
  if(err) return console.log('写入失败了'+err.message)
  console.log('写入成功了') 
})
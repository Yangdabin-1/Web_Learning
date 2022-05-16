// 连接Mongo
require('./tools/connect_mongo')
// 创建Modle
const Students = require('./models/students')
Students.find({},function(err,doc){
  console.log('sd');
})
Students.create({name:'张三'})
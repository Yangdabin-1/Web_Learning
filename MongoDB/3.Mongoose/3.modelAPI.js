const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
mongoose.connection.once('open',()=>{console.log('opened')})
mongoose.connection.once('close',()=>{console.log('closed')})

const d1 = Date.now()
const Schema = mongoose.Schema
const StuSchema = new Schema({
  name:String,
  age:Number,
  kind:{
    type:String,
    default:'human'
  },
  address:String
})
const StuModel = mongoose.model('student',StuSchema)
// 增  ==> !!!!是四个步骤中，最后执行的那个
StuModel.create([
  {name:'唐僧',age:10000,address:'大唐'},
  {name:'孙悟空',age:10000,kind:'monkey',address:'花果山'},
  {name:'猪八戒',age:1090,kind:'pig',address:'高老庄'},
  {name:'沙悟净',age:890,address:'流沙河'},
  {name:'???',age:0,address:'???',kind:'????'}
],(err)=>{
  if(!err) console.log('数据创建成功',Date.now()-d1);  
})
// 改
StuModel.updateOne({name:'沙悟净'},{$set:{kind:'未知'}},(err)=>{
  if(!err) console.log('数据修改成功',Date.now()-d1);  
})
// 删
StuModel.deleteOne({name:'???'},(err)=>{
  if(!err) console.log('数据删除成功',Date.now()-d1);  
})
// 查
StuModel.find({age:10000},"name address",function(err,docs){
  if(!err) console.log('查询到结果为',docs[0],docs[2],Date.now()-d1);
})

// StuModel.deleteOne({})
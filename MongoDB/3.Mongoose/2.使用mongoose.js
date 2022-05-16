const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
mongoose.connection.once('open',function(){
  console.log('connection success...')
})
mongoose.connection.once('close',function(){
  console.log('connection closed...')
})
//1.
var Schema = mongoose.Schema
//2.
const StuSchema = new Schema({
  name:String,
  age:Number,
  kind:{
    type:String,
    default:'human'
  },
  address:String
})
//3.
var StuModel = mongoose.model('student',StuSchema)
StuModel.create({name:"张三"},function(err){
  if(!err){
    console.log('成功插入数据');
    
  }
});

// StuModel.deleteOne({})
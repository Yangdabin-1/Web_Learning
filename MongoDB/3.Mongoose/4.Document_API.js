const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
mongoose.connection.once('open',()=>{console.log('opened')})
mongoose.connection.once('close',()=>{console.log('closed')})

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
// 1.通过Model直接创建一个新的文档对象，但这个文档对象没有写入数据库
const students = new StuModel({
  name:'张三',
  age:18,
  kind:"superman",
  address:'moon'
})
// console.log(students);
// 2.将这个文档对象写入数据库
students.save()
// 3.get的到文档的数据  
var ii = students.get('name')
console.log(ii);
students.name = '李四'
// set 修改文档的数据
ii = students.set('name','天吧')
console.log(ii);

// 在回调中实在调用document的API
StuModel.findOne({name:'天吧'},function(err,doc){
  if(!err){
    // 修改：方法一
    doc.update({name:"王五"},function(err){
      console.log('姓名修改成功为王五');
      
    })
    // 修改：方法二
    // doc.name = "张留"
    // doc.save()

    // 将文档对象转换为普通对象 ，这个对象就用不了document的API了
    // doc = doc.toObject()
  }
})






const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Stuema = new Schema({
  name:String
})
const StuModel = mongoose.model('student',Stuema)
// 暴露出这个StuModel
module.exports = StuModel
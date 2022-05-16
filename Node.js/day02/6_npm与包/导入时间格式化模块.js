//使用自定义模块抵消实现时间格式化
const TIME = require('./dataFormat')
const time = Date.now()
const newtime = TIME.dataFomat(time)
console.log('method1:------>' + newtime)

//使用包，第三方模块，高效
// 在终端输入npm i moment
const moment = require('moment')
//通过查找文档，寻找模块内的方法
const newtime2 = moment().format('YYYY-MM-DD HH:mm:ss')
console.log('method2:------>' + newtime2)

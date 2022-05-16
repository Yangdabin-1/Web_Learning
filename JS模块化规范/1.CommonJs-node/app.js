//引入第三方模块
const uniq = require('uniq')
//引入自定义模块
const module1 = require('./modules/module1.js')
const module2 = require('./modules/module2.js')
const module3 = require('./modules/module3.js')
//调用自定义模块的方法
module1.fun1()
module2()
module3.fun1()
module3.fun2()
//调用第三方模块的方法,这个uniq本质是个函数
const result = uniq(module3.arr)
console.log(result)

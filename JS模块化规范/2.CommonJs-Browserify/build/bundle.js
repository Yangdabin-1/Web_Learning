(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
//引入第三方模块
const uniq = require('uniq')
//引入自定义模块
const module1 = require('./module1.js')
const module2 = require('./module2.js')
const module3 = require('./module3.js')
//调用自定义模块的方法
module1.fun1()
module2()
module3.fun1()
module3.fun2()
//调用第三方模块的方法,这个uniq本质是个函数
const result = uniq(module3.arr)
console.log(result)
},{"./module1.js":3,"./module2.js":4,"./module3.js":5,"uniq":1}],3:[function(require,module,exports){
module.exports = {
  fun1(){
  console.log('module1.js')
  }
}
},{}],4:[function(require,module,exports){
module.exports = function(){
  console.log('module2')
}
},{}],5:[function(require,module,exports){
exports.fun1 = function(){
  console.log('moudle3.fun1')
}
exports.fun2 = function(){
  console.log('moudle3.fun2')
}
exports.arr = [1,5,2,7,3]

},{}]},{},[2]);

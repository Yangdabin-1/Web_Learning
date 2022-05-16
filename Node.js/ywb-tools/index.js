//包的入口文件

/*
//1.1定义格式化时间的函数
function dataFomat(str){
  const time = new Date(str)

  const y = time.getFullYear()
  const m = fixzero(time.getMonth()+1)
  const d = fixzero(time.getDate())
  const week =fixzero( time.getDay())

  const h = fixzero(time.getHours())
  const mm = fixzero(time.getMinutes())
  const s = fixzero(time.getSeconds())

  return `${y}/${m}/${d} - 周${week} ${h}:${m}:${s}`
}
//1.2定义事件的补零函数
function fixzero(time){
  return time<9?'0'+time:time
}
//2.此方法可以把用户输入的内容是具有结构的标签转义，从而不会影响别的结构
function htmlEscape(htmlstr){
  return htmlstr.replace(/<|>|"|&/g,(match) => {
    switch (match){
      case '<':return '&lt;'
      case '>':return '&gt;'
      case '"':return '&quot;'
      case '&':return '&amp;'
    }
  })
}
//3.此方法可以把一个转义后的HTML字符串还原
function htmlUnEscape(htmlstr){
  return htmlstr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match) => {
    switch (match){
      case '&lt;':return '<'
      case '&gt;':return '>'
      case '&quot;':return '"'
      case '&amp;':return '&'
    }
  })
}
*/
const timeformat = require('./src/dataFormat.js')
const htmlescape = require('./src/htmlEscape.js')

//向外暴露方法
module.exports = {
  // 未模块化
  // dataFomat,
  // htmlEscape,
  // htmlUnEscape

  //模块化后
  ...timeformat,
  ...htmlescape
}

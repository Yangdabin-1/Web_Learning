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

module.exports = {
  htmlUnEscape,
  htmlEscape
}
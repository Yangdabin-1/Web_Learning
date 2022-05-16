//开发一个包 ywb_tools

const tools = require("../ywb-tools/index")

const newtime = tools.dataFomat(Date.now())
console.log(newtime)

let oldhtml = "<h1>这是一个标签&nbsp;</h2>"
let newhtml = tools.htmlEscape(oldhtml)
console.log(newhtml)
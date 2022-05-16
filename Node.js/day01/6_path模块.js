const path =require('path')

//1.拼接地址
const address = path.join('D:','/a','/b/c','../','a.html')
console.log(address)


const str = 'D:\\web\\Node.js\\day01\\6_path模块.js'
//1.得到地址的最后一栏，文件名+拓展名
const both = path.basename(str)
console.log(both)

//2.1得到文件名
const basename = path.basename(str,'.js')
console.log(basename)

//3.得到文件类型
const extname = path.extname(str)
console.log(extname)
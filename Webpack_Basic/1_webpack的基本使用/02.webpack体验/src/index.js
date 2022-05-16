/* 入口文件
  1.运行指令：
  开发:webpack ./src/index.js -o ./build/built.js --mode=development
  生产:webpack ./src/index.js -o ./build/built.js --mode=production

  

*/
//不能处理css文件./data.json
// import './index.css'

//处理json文件，可以让浏览器用到ES6的模块化 
import data from './index.json'
console.log(data)

//处理js文件
function add(x,y){
  return x+y
}
console.log(add(1,2))
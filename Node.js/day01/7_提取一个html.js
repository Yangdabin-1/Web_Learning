const fs =require('fs')
const path =require('path')

//配置正则
const reg1 = /<style>[\s\S]*<\/style>/
const reg2 = /<script>[\s\S]*<\/script>/

//设置创建html,js,css文件
function gethtml(string){
  let newHtml = string.replace(reg1,'<link rel="stylesheet" href="./index.css"/>')
  newHtml = newHtml.replace(reg2,'<script src="./index.js"><\/script>')
  fs.writeFile(path.join(__dirname,'index/newHtml.html'),newHtml,(err)=>{
    if(err) return console.log('err:\n'+ err.message)
})
}
function getstyle(string){
  const newSytle = reg1.exec(string)[0]
  let indexcss = newSytle.replace('<style>','')
  indexcss = indexcss.replace('</style>','')
  indexcss = indexcss.trim()
  // console.log(indexcss)
  fs.writeFile(path.join(__dirname,'index/index.css'),indexcss,(err)=>{
      if(err) return console.log('err:\n'+ err.message)
  })
}
function getscript(string){
  const newSript = reg2.exec(string)[0]
  let indexjs = newSript.replace('<script>','')
  indexjs = indexjs.replace('</script>','')
  indexjs = indexjs.trim()
  // console.log(indexcss)
  fs.writeFile(path.join(__dirname,'index/index.js'),indexjs,(err)=>{
      if(err) return console.log('err:\n'+ err.message)
  })
}
//读取文件
fs.readFile(path.join(__dirname,'./7_index.html'),(err,result) =>{
  if(err) return console.log('deafult:\n'+err.message)
  const indexHtml = result.toString()

  //css
  getstyle(indexHtml)
  //js
  getscript(indexHtml)
  //html
  gethtml(indexHtml)
  

  
})
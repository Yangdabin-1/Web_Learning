//实现：调用一个函数便可以打印所有古诗
let fs = require('fs')

function readPoem1(){
  return new Promise((resolve,reject)=>{
    fs.readFile('./poem/古诗一.md',(err,data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
}
function readPoem2(){
  return new Promise((resolve,reject)=>{
    fs.readFile('./poem/古诗二.md',(err,data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
}
function readPoem3(){
  return new Promise((resolve,reject)=>{
    fs.readFile('./poem/古诗三.md',(err,data)=>{
      if(err) reject(err)
      resolve(data)
    })
  })
}

async function showPoem(){
  let result1 = await readPoem1()
  let result2 = await readPoem2()
  let result3 = await readPoem3()
  console.log(result1.toString())
  console.log(result2.toString())
  console.log(result3.toString())
}
showPoem()


//1.回调地狱读取多个文件
// const fs = require('fs')
// fs.readFile('./poem/古诗一.md',(err,data1)=>{
//   fs.readFile('./poem/古诗二.md',(err,data2)=>{
//     fs.readFile('./poem/古诗三.md',(err,data3)=>{
//       let result = data1 + '\n'+ data2  + '\n'+ data3 
//       console.log(result.toString())
//     }) 
//   }) 
// })


//2.promise封装
const p =new Promise((resolve,reject)=>{
  const fs = require('fs')
  fs.readFile('../poem/古诗一.md',(err,data)=>{
       resolve(data.toString())
       //此时data是第一个data
  }) 
})
p.then(value=>{
  //此时value是第一个data
  return new Promise((resolve,reject)=>{
    const fs = require('fs')
    fs.readFile('./poem/古诗二.md',(err,data)=>{
         //此时data是第二个data
        //  resolve(`${value}${data}`)
        const result = value + '\n' + data
        resolve(result)
    }) 
  })
}).then(value=>{
  //此时value 是第一个+第二个
  return new Promise((resolve,reject)=>{
    const fs = require('fs')
    fs.readFile('./poem/古诗三.md',(err,data)=>{
         //此时data是第三个data
         const result = value + '\n' + data
         resolve(result)
    }) 
  })
}).then(value=>{
  //此时的value是1+2+3
  console.log(value.toString())
})
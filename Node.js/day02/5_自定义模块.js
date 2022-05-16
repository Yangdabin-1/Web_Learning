//指定向外暴露的成员
module.exports.name =  '张三',
module.exports.sayHello = ()=>{
  console.log('hello world')
}


//向外暴露成员永远以暴露的对象为准，以上就失效了
module.exports = {
  name : '李四',
  sayHello(){
    console.log('HELLO WORLD')
  }
}


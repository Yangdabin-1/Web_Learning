//静态import
// 模块进行时,就直接引入
// import * as m1 from './hello.js'
window.onload = function(){
  let btn = document.getElementsByTagName('button')[0]
  btn.onclick = function(){
    //动态import  import函数
    import('./hello.js').then(result=>{
      //result 就是模块暴露的对象
      console.log(result)
      //调用这个对象中的一个方法
      result.hello() 
    })
  }
}
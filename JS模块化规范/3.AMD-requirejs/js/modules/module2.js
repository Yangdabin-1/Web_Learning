//依赖模块,依赖module1

define(['module1','jquery'],function(module1,$){
  let msg = "module2";
  function sayMsg(){
    
    console.log(msg,module1.sayName())  ;
  }
  $('body').css('background','red')
  return {sayMsg};
});
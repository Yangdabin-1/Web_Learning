//无依赖模块
define(function(){
  let name = "module1";
  function sayName(){
    return name;
  }
  return {sayName};
});
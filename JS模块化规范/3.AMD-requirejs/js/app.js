//这里使用IIFE：因为安全
(function(){
  //配置requirejs的信息
  requirejs.config(
    {
      //基本路径
      baseUrl:'js/',
      paths:{
         //配置基于requirejs的第三方框架引用
         jquery:'./libs/jquery-1.10.1',
         //配置不基于requirejs第三方框架的引用
         angular : 'libs/angular',
        //配置自定义模块路径
        module1:'./modules/module1',
        module2:'./modules/module2', 
      },
      //配置angular的暴露
      shim: {
        'angular' : {
          exports : 'angular'
        }
      }
    }
  );
  requirejs(['module2','angular'],function(module2,angular){
    module2.sayMsg()
    console.log(angular)
  });
})();
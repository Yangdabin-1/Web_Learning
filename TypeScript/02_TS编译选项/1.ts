// 每次更新ts都需要重新编译成js

// 可以终端输入命令(watch)
//  > tsc 1.ts -w
// 可以开启实时监视 ts 的变化,但是一个终端只能减少一个ts文件

// 怎么解决 => 添加一个配置文件 tsconfig.json => 添加配置

//  > tsc    =>默认,执行这个终端目录下的所有ts文件   
//  >

function fun1(this:any){
  alert(this);
}
function fun2(this:Window){
  alert(this);
}
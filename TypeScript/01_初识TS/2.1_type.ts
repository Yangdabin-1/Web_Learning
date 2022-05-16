//变量类型

//1. 默认识别 
let a1 = 1 //a1会自动识别为 number

//2. 字面量识别
let a2 : 1   //a2会自动识别类型,且值固定为 1 
let a3 : 'male' | "female" //a3被自动识别为字符串,且值只能是这两个其中之一
let a4 : 1 | 2 | 3
let a5 : string | boolean  //a4只能是 字符串或者布尔值 类型

// 3. any类型  => 当不知道给变量设置什么类型时 => TS不建议使用any类型 =>推荐使用unknown
let b1      //自动识别为any ==> 即可以是任意类型
let b2:any  //指定为any
  
       

// 4. unknown类型 
let c : unknown
c = true
c = "true"

// 5.  any vs unknown

let d1 : string
let d2 : number
d1 = b2   // any类型赋值给任意类型 , 不会报错
//d2 = c    // unknown 类型赋值给任意类型,会报错

// 那么如何把一个unkonwn类型的变量 赋值给 另外一个变量呢?
  // 5.1 赋值前,先判断类型
  if(typeof c === "number"){
      d2 = c
  }
  // 5.2 通过断言(判断语言)再赋值
  d2 = c as number
  d2 = <number>c

// 6.函数返回值

  function fun1(){
  }   //不设置函数的返回类型,默认返回就是void类型,任意
  function fun2(){
    return true
  }   //返回布尔值
  function fun3():number{
    // return true     
    return
  }   //只能返回数字类型  返回其他类型就会报错

  function fun4(input){
    if(input >0){
      return true
    }else{
      return "输入错误"
    }
  }   //设置返回类型为任意, 使用fun4返回类型为 boolean或string

  // void 和 never

  // void 就是函数不设置返回值
  function fun5():void{
  }
  // never 就是函数永远不会有返回值,一般用于抛出错误
  function fun6():never{
    throw new Error('抛出一段错误')
  }


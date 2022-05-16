//1.声明一个对象
let a:object  // let a:{}
a = {}
a = []
a = ()=>{}

// 可以声明一个变量为对象 且对象中必须包含某个属性,且属性类型固定 (固定对象的结构)
// 不能赋值一个没有声明过的值
let b:{name:string}
b = {
  name:'张三',
  // age:23  不能赋值
}

//可以为对象指定可填的属性  []:any -> 属性名:属性值 ==> string声明该变量的名为字符串 ,any声明该变量的值为任意类型
let c:{name:string,[propName:string]:any} 
c = {
  name:'李四',
  age:23,
  address:'北京'
}

// 2.声明一个函数
let d : Function
// 参数只能是数值 , 返回值也只能是数值
let d1 : ( a:number , b:number) => number
d1 = (n1,n2) =>{
 return n1 + n2 
}

// 3.声明一个数组
let arr1 :[]

  // 声明一个字符串数组
//let arr2 : Array<string> 
  let arr2 :string[]
  arr2 = ['1','2']

  // 声明一个数组数组
//let arr2 : Array<number>
  let arr3 :number[]
  arr3 = [1,2,3,4]


// 4.声明一个元组(tuple) => 就是固定长度,固定元素类型的 数组
let tuple1 :[string,number,string]
tuple1 = ['hah',12,'nono']


// 5.声明一个枚举类(enum)  => 一般用于 值只有几种选择的数据
enum Level{
  first = '高级',
  second = '中级',
  third = '初级',
  fouth = '初级'
}
let p1 :{name:string,age:number,level:Level}
p1 = {
  name:'李四',
  age:45,
  level:Level.first
}
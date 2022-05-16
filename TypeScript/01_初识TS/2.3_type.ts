//  & |

// 规定 这个对象中 必须要 name 和 age
let obj1 : {name:string} & {age:number}
obj1 = {
  name:'haha',
  age:13
}

// 类型的别名 => 当类型可选 => 变多时且需要复用时 => 代码冗余
let level1 : 1 | 2 | 3 | 4
let level2 : 1 | 2 | 3 | 4

type myLevelType = 1 | 2 | 3 | 4
let level3 : myLevelType

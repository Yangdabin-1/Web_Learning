const fs =require('fs')

fs.readFile('./files/oldGrade.txt','utf-8',function (err,result) {
  if(err) {
    return console.log('读取失败'+err.message)
  }else{
    console.log('读取成功:\r')
    const newArr = result.split(' ')
    const newArr2 = []
    newArr.forEach(element => {
      newArr2.push(element.replace('=',':'))
    });
    const newStr = newArr2.join('\r')
    fs.writeFile('./files/newGrade.txt',newStr,function (err) {
      if(err) return console.log('写入失败')
    })
}
})

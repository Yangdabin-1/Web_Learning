/* 
  1.使用相对路径时，实际的调取方法是，在打开终端的路径 + fs.read/writeFile里的路径
    fs.readFile('./flies/poem2.txt','utf-8',回调)
    所以如果，打开终端的路径不对，就会读取失败(例如)：  F:\flies\poem1.txt
  
  2.使用绝对路径打开，如果文件跳出当前文件夹，不便于维护
    fs.readFile('D:\\web\\Node.js\\day01\\files\\poem1.txt','utf-8',回调)
  
  3.最好方法：绝对+相对路径
    __dirname:当前文件所在的目录
    fs.readFile(__dirname + './files/poem1.txt','utf-8',回调)
*/

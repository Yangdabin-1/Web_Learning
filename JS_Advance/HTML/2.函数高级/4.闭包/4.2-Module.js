function changeWord(){
	var word = "Hello World"
	function toUp(){
		console.log(word.toUpperCase())
	}
	function toDown(){
		console.log(word.toLowerCase())
	}
	return {           //通过return向外暴露对象
		toUp : toUp,
		toDown : toDown
	}
}
(function (){
	var word = "Hello World"
	function toUp2(){
		console.log(word.toUpperCase())
	}
	function toDown2(){
		console.log(word.toLowerCase())
	}
	window.changeWord2 = {  //向外暴露一个全局变量的属性，这个属性里封装了方法
		toUp2 : toUp2,
		toDown2 : toDown2
	}
})()   //函数自调用，马上给全局变量添加属性

(function (window){
	var word = "Hello World"
	function toUp2(){
		console.log(word.toUpperCase())
	}
	function toDown2(){
		console.log(word.toLowerCase())
	}
	window.changeWord2 = {   //22->确保这里的属性名，就算压缩成w，它代表的还是全     局变量
		toUp2 : toUp2,
		toDown2 : toDown2
	}
})(window)  //把实参设置为window，确保压缩时，22
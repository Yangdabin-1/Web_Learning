function FBNQ(num){
			var add = [1,1] //1 1 2 3 5[]
			add.length = num
			for(var i = 2 ; i<num ; i++){
				add[i] = add[i-1] + add[i-2]
			}
			return add[num-1]
}
var onmessage = function(event){
	//1.储存接受到的数据
	var number  = event.data
	console.log("从主线程接收数据:" + number)
	//2.进行计算,存储结果
	var result = FBNQ(number)
	console.log("向分线程发送数据:" + result)
	//3.向主线程发送结果数据
	postMessage(result)
}
//这里没有window对象和worker对象，这里的this指向的是worker全局对象
//所有调用方法要注意
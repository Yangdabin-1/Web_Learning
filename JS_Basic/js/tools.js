/* 1.实现元素变化 
		参数:
			-obj:操作的对象
			-speed:变化的速度
			-target:对象需要变化到哪个值为止
			-value:需要变化的属性
			-fun1:回调函数,在当前定时器停止时调用
		*/
	function change(obj,speed,target,value,fun1){
		   var time;
		   //这里为什么要给定时器设置从对象的属性，要让每次对象的每个计时器都要不同
		   clearInterval(obj.time);  
		   // obj.style.left = obj.offsetLeft + 400 + "px";	
			/*  -判断移动应该是向左还是向右 
				-这个应该写在定时器外面，不然速度变成负值后，在进行一次定时，会再次取反
				所以定时器开始前就要定下来
			*/
			//这里用来把width变成offsetWidth;
		   var value2 = "offset" + value.charAt(0).toUpperCase()+value.slice(1);
		   //如果目标比现在值小,那么就反向移动
			if(target < obj[value2]){
				speed = -speed;//取反
			}
			//开启定时
			obj.time = setInterval(function(){
				//设置移动
				obj.style[value] = obj[value2] + speed + "px";	
				//这里的判断条件注意
				if(speed>0 && obj[value2] > target||speed<0 && obj[value2] < target){
					obj.style[value] = target + 'px';
					clearInterval(obj.time);
					fun1();
				}
			},100);
	}
/*2.切换类：若元素有这个类就删除，无则添加这个类*/
			//覆盖类 函数
			function coverClass(obj,inclass){
				obj.className = inclass;
			}
			//增加类 函数
			function addClass(obj,inclass){
				obj.className += " " + inclass;
			}
			//删除类 函数
			function deleteClass(obj,inclass){
				var reg = new RegExp("\\b" + inclass + "\\b");
				obj.className = obj.className.replace(reg,"");
			}
			//判断类 函数
			function judgeClass(obj,inclass){
				var reg = new RegExp("\\b" + inclass + "\\b");
				var result = reg.test(obj.className);
				return result;
			}
			function changeClass(obj,inclass){
			if(!judgeClass(obj,inclass)){
				addClass(obj,inclass);
			}else{
				 deleteClass(obj,inclass);
			}
			
}
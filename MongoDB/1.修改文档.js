插入文档
查询文档
修改文档
	1.db.collection.update({查询的对象的条件}，{新的对象})
		1.此API，默认会选择 符合条件的对象的第一个 ，然后进行替换
		2.如果不使用"修改操作符"新的对象会替换整个旧对象
		3.$set:可以修改某个指定的属性
		4.$unset:可以删除某个特定的属性

		//1.找到第一个满足 name的对象，将整个对象替换从新的对象（只有address属性）
		db.stus.update(
			{name:'张三'},
			{address:'北京'}
		)
		//2.找到第一个满足 name的对象，将这个对象中的属性修改，如果没有就添加这个属性
		db.stus.update(
			{name:'张三'},
			{
				$set:{address:'北京'}
			}
		)
		//3.找到符合条件的对象，并删除其中的address属性,key的value无论是什么都会删除
		db.stus.update(
			{name:'张三'},
			{
				$unset:{address:'北京'}
			}
		)
		//4.通过修改配置，用update => 找到符合条件的全部对象,并进行修改
		db.stus.update(
			{name:'张三'},
			{
				$unset:{address:'北京'}
			},
			{multi:true}
		)
	2.db.collection.updateMany({查询的对象的条件}，{新的对象})
	3.db.collection.updateOne({查询的对象的条件}，{新的对象})
	4.db.collection.replaceOne({查询的对象的条件}，{新的对象})
删除文档
	删除文档很少用，因为数据是最重要的东西，没必要要去删除，所以一般用（不显示某个数据）来代替（删除某个数据）
	1.db.collection.remove({age:'18'})
			默认会删除符合条件的所有文档
			添加一个属性，可以只删除匹配的第一个对象 db.collection.remove({age:'18'}，true)
	2.db.collection.remove({})
			删除这个集合里的所有文档
			有另外一种清空文档的写法更适合
			db.collection.drop()
	3.db.collection.deleteOne()
			删除第一个符合条件的文档
	4.db.collection.deleteMany()
			删除所有符合条件的文档

//27.查询工资小于2000的员工
db.emp.find({sal:{$lt:2000}})
//28.查询工资在1000-2000之间的员工
db.emp.find({sal:{$lt:1000,$gt:2000}})
//29.查询工资小于1000或大于2500的员工
db.emp.find({$or:[{sal:{$lt:1000}},{sa1:{$gt:2500}}]});
//30.查询财务部的所有员工
let deptid1 = db.dept.findOne({dname:'财务部'}).deptno
db.emp.find({depno:deptid})
//31.查询销售部的所有员工
let deptid2 = db.dept.findOne({dname:'销售部'}).deptno
db.emp.find({depno:deptid2})
//32.查询所有mgr为7698的所有员工
db.emp.find({mgr:7698})
//33.为所有薪资低于1000的员工增加工资400元
db.emp.updateMany({sal:{$lt:1000}},{$inc:{sal:400}})

db.emp.find().sort({sal:-1,depon:-1})
db.emp.find({},{ _id:0 , ename:1 , sal:1})
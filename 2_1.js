//使用字面量来创建对象
//
//傻
var p = {
	name:"jackie",
	_age:"18",
	set age(val)
	{
		console.log("set");
		this._age=val;
	},
	get age()
	{
		console.log("get");
		return this._age;
	},
	print:function() {
		console.log(this.name);
		console.log(this.age);
	},
	phoneNumber:{
		home:123,
		phone:456
	}
};
p.age=29;
console.log(p.age);
p.print();
console.log(p.phoneNumber.home);
var age = "name";
console.log(p.age);
console.log(p[age]);

function gitTest(){
	console.log("git test");
	console.log("1111");
	console.log("master ann dev");
	console.log("2222");
	function newCat(color){
		this.color = color?color:"蓝";
	}
	newCat.prototype.jump = function(y){
		return "跳起来" + y + "m"
	};
	newCat.prototype.skill = function(str){
		return "并使用" + str + "攻击你！"
	};

	var cat1 = new newCat();
	var cat2 = new newCat("红");
	console.log(cat1.color + "猫" + cat1.jump(10) + cat1.skill('"龟派气功"'));
	console.log(cat2.color + "猫" + cat2.jump(15) + cat2.skill('"小李飞镖"'));

}
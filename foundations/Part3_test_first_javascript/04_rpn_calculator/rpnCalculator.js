function Calculator(){
	this.nums = [];
	this.display = 0;
};

Calculator.prototype.push = function(input){
	this.nums.push(input);
}

Calculator.prototype.plus = function(){
	this.checkNumStash()
	var firstNum = this.nums.pop(-1);
	var secondNum = this.nums.pop(-1);
	this.display = secondNum + firstNum;
	this.nums[this.nums.length] = this.display;
}

Calculator.prototype.minus = function(){
	this.checkNumStash()
	var firstNum = this.nums.pop(-1);
	var secondNum = this.nums.pop(-1) ;
	this.display = secondNum - firstNum;
	this.nums[this.nums.length] = this.display;
}

Calculator.prototype.divide = function(){
	this.checkNumStash()
	var firstNum = this.nums.pop(-1);
	var secondNum = this.nums.pop(-1) ;
	this.display = secondNum / firstNum;
	this.nums[this.nums.length] = this.display;
}

Calculator.prototype.times = function(){
	this.checkNumStash()
	var firstNum = this.nums.pop(-1);
	var secondNum = this.nums.pop(-1) ;
	this.display = secondNum * firstNum;
	this.nums[this.nums.length] = this.display;
}

Calculator.prototype.value = function(){
	return this.display;
}

Calculator.prototype.checkNumStash = function(){
	if(this.nums.length === 0) throw "calculator is empty";
}

Calculator.prototype.setVars = function(){
	var firstNum = this.nums.pop(-1);
	var secondNum = this.nums.pop(-1);
	this.display = secondNum + firstNum;
}
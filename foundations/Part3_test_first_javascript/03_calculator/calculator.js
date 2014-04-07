Calculator = function(){
	this.display = 0;
}

Calculator.prototype.value = function(){
	return this.display;
}

Calculator.prototype.add = function(num){
	return this.display += num;
}

Calculator.prototype.subtract = function(num){
	return this.display -= num;
}
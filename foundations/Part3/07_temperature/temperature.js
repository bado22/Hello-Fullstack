function Temperature(temp){
	var f = temp;
	this.setFahrenheit = function(temp){f = temp;};
	this.setCelcius = function(temp){f = c2f(temp);};
	this.fahrenheit = function(){return f;};
	this.celcius = function(){return f2c(f);};
}

function f2c(f){
	return (f - 32) * 5 / 9;
}

function c2f(c){
	return c * 9 / 5 + 32;
}
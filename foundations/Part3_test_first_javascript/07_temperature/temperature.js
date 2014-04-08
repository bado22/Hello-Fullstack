function Temperature(temp){
	var f = temp;
	var c;
}

Temperature.prototype = {
	setFahrenheit: function(temp){f = temp;},
	setCelcius: function(temp){c = temp; },
	fahrenheit: function(){return f === undefined ? c2f(c) : f;},
	celcius: function(){return c === undefined ? f2c(f) : c;}
}

function f2c(f){
	return (f - 32) * 5 / 9;
}

function c2f(c){
	return c * 9 / 5 + 32;
}
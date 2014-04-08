function countWords(sent){
	return sent.split(" ").length;
}

function makeAdder(A){
	function addThis(B){
		return B + A;
	}
	return addThis;
}

function forEach(arr, func){
	for(var i=0; i<arr.length; i++){
		func(arr[i]);
	}
}

function map(arr, func){
	var newArr = [];
	forEach(arr, function(elem){
		newArr.push(func(elem));
	});
	return newArr;
}

function filter(arr, func){
	var newArr = [];
	forEach(arr, function(elem){
		if(func(elem) === true){
			newArr.push(elem);
		}		
	});
	return newArr;
}

function contains(coll, elem){
	if(coll.constructor === Array){
		for(var i=0; i<coll.length; i++){
			if(coll.indexOf(elem) !== -1){return true;}
		}
	} else if(coll.constructor === Object){
		for(var prop in coll){
			if(coll.hasOwnProperty(prop) && coll[prop] === elem){return true;}
		}	
	}		
	return false;
}

function reduce(arr, base, func){
	for(var i = 0; i<arr.length; i++){
		base = func(base, arr[i]);
	}
	return base;
}

function countWordsInReduce(prev, next) {
	if(typeof(prev) === "string")
		return prev.split(" ").length + next.split(" ").length;
	else 
		return prev + next.split(" ").length;
}

function sum(arr){
	return reduce(arr, 0, function(a, b){return a + b;});
}

function every(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		if (!func(arr[i])) return false;
	}
	return true;
}

function any(arr, func){
	for (var i = 0; i < arr.length; i++) {
		if(func === undefined){ 
			if(arr[i]) return true; 
		}
		else if(func(arr[i])){
			return true;
		}
	}
	return false;
}

function once(func){
	var counter = 0;
	return function(){
		if(counter === 0){
			counter++;
			return func();
		}
	}	
}

function wrapper(func, wrapperFunc){
	return function(){ return wrapperFunc(func);}
}
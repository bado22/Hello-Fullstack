var  countWords = function(sent){
  return sent.split(" ").length;
}

var makeAdder = function(A){
  return function(B){
    return A + B;
  }
}

var forEach = function(arr, action){
  for(i = 0; i<arr.length; i++){
    action(arr[i]);
  }
}

var map = function(arr, action){
  resultArr = [];
  forEach(arr, function(elem){
    resultArr.push(action(elem));
  })
  return resultArr;
}

var filter = function(coll, func){
  resultArr = [];
  forEach(coll, function(elem){
    if(func(elem)){resultArr.push(elem)};
  });
  return resultArr;
}

var contains = function(coll, match){
  for(var i in coll)
    if(match === coll[i])return true;
  return false;
}

var reduce = function(arr, start, comboFunc){
  var result = start;
  forEach(arr, function(elem){
    result = comboFunc(result, elem);
  })
  return result;
}

var countWordsInReduce = function(startingCount, phrase) {
  return startingCount + countWords(phrase);
};

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
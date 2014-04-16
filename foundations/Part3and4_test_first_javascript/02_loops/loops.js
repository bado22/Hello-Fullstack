function repeat(str, num){
	return num === 0 ? "" : str + Array(num).join(str);
}

function join(arr, del){
	var newStr = "";
	for(var i=0 ; i<arr.length ; i++){
		del === undefined ? newStr += arr[i] : newStr += arr[i] + del;
	}
	if(del !== undefined){newStr = newStr.slice(0, newStr.length -1)};
	return newStr;
}

function sum(arr){
	var newSum = 0;
	for(var i=0 ; i<arr.length ; i++){
		newSum += arr[i];
	}
	return newSum;
}

function paramify(hash){
	var hashLength = 0;
	var newStr = "";
	var hashKeys = Object.keys(hash).sort();

	for(i=0; i<hashKeys.length; i++){
		var thisKey = hashKeys[i];
		if(hash.hasOwnProperty(thisKey)){
			var keyValuePair = thisKey + "=" + hash[thisKey];
			hashLength++;
			hashLength <= 1 ? newStr += keyValuePair : newStr += "&" + keyValuePair;
		}
	}
	return newStr;
}

function factorial(n){
	var sum = 1;
	if(n === 0){
		return 1;
	} else {
		return n * factorial(n-1);
	}
	return sum;
}

function arguments(func){
	return func();
}

function concat_string(){
	var newStr = "";
	for (arg in arguments){
		newStr += arguments[arg];
	}
	return newStr;
}
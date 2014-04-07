function translate(str){
	var vowels = "aeiou";
	var newArr = str.split(" ");
	var resultArr = [];

	// Function for adding in new words. Cutoff is the index of where you
	// should cut the first part of the word off & add it to the end, followed by "ay"
	function addWord(cutoff){
		resultArr.push(thisWord.slice(cutoff,thisWord.length) + thisWord.slice(0,cutoff) + "ay")	
	}

	for(i=0; i<newArr.length; i++){
		var firstLetter = newArr[i].charAt(0);
		var secondLetter = newArr[i].charAt(1);
		var thisWord = newArr[i];

		if(thisWord.slice(0,3) === "sch"){
			addWord(3);
		}else if(thisWord.slice(0,2) === "qu"){
			addWord(2);
		}else if(thisWord.slice(1,3) === "qu"){
			addWord(3);
		}else if(vowels.indexOf(firstLetter) !== -1){
			addWord(0);
		}else if(vowels.indexOf(firstLetter) === -1 && vowels.indexOf(secondLetter) === -1){
			addWord(2);
		}else if(vowels.indexOf(firstLetter) === -1){
			addWord(1);
		}
	}
	return resultArr.join(" ");
}


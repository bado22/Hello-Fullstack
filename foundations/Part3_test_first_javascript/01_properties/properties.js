function setSomePropertiesOn(thisObj){
	thisObj.x = 7;
	thisObj['y'] = 8;
	thisObj['onePlus'] = function(x){
		return x + 1;
	}
}
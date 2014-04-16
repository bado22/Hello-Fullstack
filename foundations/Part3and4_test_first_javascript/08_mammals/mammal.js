function Mammal(name){
	this.name = name;
	this.offspring = [];
}

function Cat(name, color){
	Mammal.call(this, name); // Sets 'this' to this particular instance of cat & passes in the name variable, as Mammal requires. This actually runs the Mammal constructor function, so we get our offspring array also.
  this.color = color; // adds a color property to this Cat instance.
}

Mammal.prototype = {
	sayHello: function(){return "My name is " + this.name + ", I'm a Mammal";},
	haveBaby: function(){
		var babyName = "Baby " + this.name;
		var baby = new Mammal(babyName);
		this.offspring.push(baby);
		return baby;
	}
}
Cat.prototype = Object.create(Mammal.prototype) // Sets the Cat prototype object equal to the Mammal prototype
Cat.prototype.constructor = Cat; // Sets the constructor property equal to Cat, since it is currently Mammal because we inherited Mammal from the Mammal prototype.
Cat.prototype.haveBaby = function(color){
	var catBaby = Mammal.prototype.haveBaby.call(this); // Calls the haveBaby function from the Mammal prototype & sets the result to catBaby
	catBaby.color = color; // add the color property that was passed in as an argument to catBaby
	return catBaby;
}
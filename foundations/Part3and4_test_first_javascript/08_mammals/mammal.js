function Mammal(name){
	this.name = name;
	this.offspring = [];
}

function Cat(name, color){
	this.prototype = Object.create(Mammal.prototype); // Sets the Cat prototype object equal to an object created based on the Mammal prototype.
	this.prototype.constructor = Mammal; // Sets the constructor property equal to Mammal, since Cat is a subclass of Mammal.
	Mammal.call(this, name); // Sets 'this' to this particular instance of cat & passes in the name variable, as Mammal requires.
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

Cat.prototype.haveBaby = function(color){
	var catBaby = Mammal.prototype.haveBaby.call(this); // Calls the haveBaby function from the Mammal prototype & sets the result to catBaby
	catBaby.color = color; // add the color property that was passed in as an argument to catBaby
	return catBaby;
}
// Game constructor function ----------------------------------------
function Game(guessesAllowed, lowestPossibleNumber, highestPossibleNumber){
	// state of the game
	this.active = true;	
	this.guessesAllowed = guessesAllowed;
	this.lowestPossibleNumber = lowestPossibleNumber;
	this.highestPossibleNumber = highestPossibleNumber;
	this.randomNumber = this.randomNumber(highestPossibleNumber);

	this.guessesArray = [];
	//guessesRemaining starts as guessesAllowed but will decrease with each guess.
	this.guessesRemaining = guessesAllowed;
	// totalGuesses starts at 0, but will increment with each guess.
	this.totalGuesses = 0;
}

// Giving the Game object different methods ----------------------------------------
Game.prototype.randomNumber = function(highestPossibleNumber){
	return Math.floor((Math.random() * this.highestPossibleNumber) + 1);
};

Game.prototype.hint = function(){
	return "Add 5 to " + (this.randomNumber - 5)+ " to get the answer.";
};

Game.prototype.end = function(){
	this.active = false;
	$("#submit-button").prop('disabled', true);
	$("#start-over").addClass("startoverhighlight");
	$("#guess").prop("placeholder", "Game over.");
}

Game.prototype.restart = function(){
	location.reload();
};

// UserInput constructor function ----------------------------------------
function UserInput(guess){
	this.guess = guess;
}

// The following methods check for validity of the number, and isValidGuess then puts them combines the checks
// into a single method
UserInput.prototype.isNumber = function(){
	if(!isNaN(this.guess)){
		return true;
	} else {
		return false};
};

UserInput.prototype.guessIsWithinLimits = function(){
	if(this.guess < thisGame.lowestPossibleNumber || this.guess > thisGame.highestPossibleNumber){
		return false;
	} else{
		return true;
	};
};

UserInput.prototype.isRepeatGuess = function(){
	for(i=0;i<thisGame.guessesArray.length;i++){
		if(thisGame.guessesArray[i] === this.guess){
			return true;
		};
	};
	return false;
};

UserInput.prototype.isValidGuess = function(){
	if(this.isNumber() && this.guessIsWithinLimits() && !this.isRepeatGuess()){
		thisGame.guessesArray.push(parseInt($("#guess").val(), 10));
		thisGame.guessesRemaining -= 1;
		thisGame.totalGuesses += 1;		
		return true;
	} else{
		return false;
	};
};

// Checks for whether the user input is hot/cold & low/high ---------------------------
UserInput.prototype.isHotOrCold = function(){
	var differenceOfGuessAndNumber = Math.abs(this.guess - thisGame.randomNumber);
	
	if(differenceOfGuessAndNumber === 0){
		$("#panda").attr('src', 'img/party_panda.jpg');
		thisGame.end();
		return "You got it. Thanks for helping me remember my favorite number!";
	} else if(differenceOfGuessAndNumber <= 2) {
		$("#panda").attr('src', 'img/party_panda1.jpg');
		return "You are en fuego!";
	} else if(differenceOfGuessAndNumber <= 5) {
		$("#panda").attr('src', 'img/normal_panda.jpg');
		return "You are hot.";
	} else if(differenceOfGuessAndNumber <= 10) {
		$("#panda").attr('src', 'img/normal_panda.jpg');
		return "You are warm.";
	} else if(differenceOfGuessAndNumber <= 30) {
		$("#panda").attr('src', 'img/sad_panda1.jpg');
		return "You are cold.";
	} else {
		$("#panda").attr('src', 'img/ice_cold_panda.jpg');
		return "You are cold as ice."
	};
};

// Checks for whether the user input is low/high -------------------------------
UserInput.prototype.isHighOrLow = function(){
	if(this.guess < thisGame.randomNumber){
		return "Try guessing higher";
	} else if(this.guess > thisGame.randomNumber){
		return "Try guessing lower";
	} else{
		return "";
	}
};

// These functions are called onclick ----------------------------------------
var getGuessesRemaining = function(){
	$("#guesses-remaining").text(thisGame.guessesRemaining);
}

var getGuessesSoFar = function(){
	$("#guesses-so-far").text(thisGame.guessesArray);
}

var showHint = function(){
	$("#user-feedback-hotcold").text(thisGame.hint());
	$("#user-feedback-highlow").text("");
}

var startOver = function(){
	thisGame.restart();
}

var makeGuess = function(){
	var guess = parseInt($("#guess").val(), 10);
	var thisGuess = new UserInput(guess);
	if(thisGuess.isValidGuess()){
		$("#user-feedback-hotcold").text(thisGuess.isHotOrCold());
		$("#user-feedback-highlow").text(thisGuess.isHighOrLow());
		getGuessesRemaining();
		getGuessesSoFar();
		
		if(thisGame.guessesRemaining === 0){
			thisGame.end();
			$("#user-feedback-hotcold").text("Uh oh, looks like Panda is no longer interested. Click 'Start Over' to try again.");
			$("#user-feedback-highlow").text("");
		};

		$("#guess").val("");

	} else {
		$("#user-feedback-hotcold").text("That is not a valid guess. Make sure to input a number between " + thisGame.lowestPossibleNumber + " and "+ thisGame.highestPossibleNumber + ", and don't re-use any numbers.");
		$("#user-feedback-highlow").text("");
	};
};

// This creates the Game object & assigns is to thisGame -------------------------------------
var thisGame = new Game(5, 1, 100);

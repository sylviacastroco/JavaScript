//when you load a page
//if its too high must return "too high try again"
//if its too low must return "too low try again"

var secretNumber = 5;

//the user will have to guess a number
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//If number is guessed 
if (guess === secretNumber) {
    alert("You've guessed correctly. CONGRATS!!!");
}

//if its too high must return "too high try again"
else if (guess > secretNumber) {
    alert("Your number is too high, guess again");
}

//if its too low must return "too low try again"
else {
    alert("Your number is too low, guess again");
}

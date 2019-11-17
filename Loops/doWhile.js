var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('Im thinkint of a number between 1 and 10. What is it?')
  guessCount += 1;
  if (parseInt(guess) === randomNumber){
    correctGuess = true;
  } 
} while ( ! correctGuess ){
    document.write('<h1>Congratulations!!</p><p> YOU GUESS THE RIGHT NUMBER!!</h1>');
    document.write('<h1>It took you ' + guessCount + ' tries to guess the number!</h1>');
}

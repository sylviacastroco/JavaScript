function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');
console.log(sayHello('sylvia'));
console.log(sayHey('jon'));
console.log(sayHello('doe'));

/* High level closure 
Closures are the ability for a child function to access variables from a higher level scope even after functions have been closed or closed over*/
function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your ${gameName} game score is ${score}`;
  };
}

//Because we have created two separate win functions by using the createGame function, they have their own private variable score.
const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');

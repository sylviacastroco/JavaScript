// Simple Prompt Full Name and Age
var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var age = prompt('How old are you?');
console.log('Your Name is ' + firstName + ' ' + lastName);
console.log('You are ' + age + ' years old');

// Age Calculator
//prompt user for age
var age = prompt('Enter your age');

//calculate age including leap year!
var calculateAge = age * 365 * 4;

//console log days according to age
alert('Your age ' + age + ' ' + 'is equal to' + calculateAge + ' days');

const prompt = require('prompt-sync')();  // import prompt-sync

let userName = prompt("Please enter your name: ");
let userAge = Number(prompt("Please enter your age: "));

let currentYear = new Date().getFullYear();
let yearOfBirth = currentYear - userAge;

console.log(`Hello ${userName}! You were born in ${yearOfBirth}.`);


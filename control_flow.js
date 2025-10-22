//conditional if statements execute code when the condition being tested is true
let hours = 12;
if (hours < 18) {
    greetings = "Guten Morgen!";
}
console.log (greetings);
//conditional else statement executes if the condition is false
let age = 22;
if (age < 21) {
    text = "Drinking is not allowed to any persons under the age of 21!";
} else {
    text = "Some bottles for you mate!!";
}
console.log (text);
//else if statements used to execute if condition1 is false and condition2 is true
let greeting;
if (hours < 10) {
  greeting = "Good morning";
} else if (hours < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log (greeting);
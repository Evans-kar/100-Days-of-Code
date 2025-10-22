//Variable declaration and initialization
let name = "Evan";     //string
let age = 23;        //number
let isStudent = true;   //boolean
//Declare and initialize address as an object
address = {
    "city": "Nairobi",
    "country": "Kenya"
}
// Declare and initialize hobbies as an array
let hobbies = ["reading", "watching", "coding"];

// Declare undefinedVariable but don't initialize it
let undefinedVariable;

// Declare nullVariable and set it to null
let nullVariable = null;

// Print variables and their types
console.log(`My name is ${name}, I'm ${age} years old, and my address is ${address.city}, ${address.country}.`);
console.log("name:", name, "age:", age, "address:", address, "types:", typeof name, typeof age, typeof address);
console.log("hobbies:", hobbies, "type:", typeof hobbies);
console.log("undefinedVariable:", undefinedVariable, "type:", typeof undefinedVariable);
console.log("nullVariable:", nullVariable, "type:", typeof nullVariable);

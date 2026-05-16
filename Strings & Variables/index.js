/*
  STRINGS & VARIABLES MODULE - index.js
  
  This file demonstrates:
  1. Variable declaration using 'let' keyword
  2. Different data types: String, Number, Boolean
  3. Template literals for string interpolation
  4. Using typeof operator to check variable types
  5. Console logging and window alerts
  
  Key Concepts:
  - Variables store data values that can be used throughout your program
  - Template literals use backticks and ${} to insert variables into strings
  - Different data types: strings (text), numbers, booleans (true/false)
*/

// ===== VARIABLE DECLARATION & ASSIGNMENT =====
// Variables are containers for storing data values
// 'let' is the modern way to declare variables in JavaScript (preferred over 'var')

let age = 25; // Number type
let name = "Jerry"; // String type (note: missing semicolon)
let rank = "2nd"; // String type with ordinal format
let firstName = "Jerry"; // String type (duplicate value, for demonstration)
let favoriteFood = "Burger"; // String type
let email = "jerry@rebornloki.dev"; // String type (email address)

// ===== TYPEOF OPERATOR & CONSOLE LOGGING =====
// typeof returns the data type of a variable as a string
// console.log() outputs values to the browser console (Press F12 to view)

console.log(typeof firstName); // Outputs: "string"

// ===== TEMPLATE LITERALS & STRING INTERPOLATION =====
// Template literals use backticks (`) instead of quotes
// ${variable} syntax inserts variable values directly into strings
// This is cleaner and more readable than string concatenation

window.alert(`Hello, ${firstName}!`); // Personalized greeting
window.alert(`Your favorite food is ${favoriteFood}`); // Shows food preference
window.alert(`Your email is ${email}`); // Shows email address

// ===== BOOLEAN DATA TYPE =====
// Booleans can only have two values: true or false
// Used for storing yes/no, on/off, or state information

let online = true; // Boolean: user is online
let forSale = false; // Boolean: item is not for sale
let isStudent = true; // Boolean: user is a student

// ===== DISPLAYING BOOLEAN VALUES =====
// Booleans are displayed as "true" or "false" in console output
// You can use template literals with booleans just like any other variable

console.log(`Bro is online :${online}`); // Outputs: "Bro is online :true"
console.log(`Item is for sale :${forSale}`); // Outputs: "Item is for sale :false"
console.log(`Bro is a student :${isStudent}`); // Outputs: "Bro is a student :true"

let fullName = "Jerry Reborn Loki"; 
let age = 15;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `You are a student: ${student}`;
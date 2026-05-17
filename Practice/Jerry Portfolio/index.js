/*
  PRACTICE MODULE - Jerry Portfolio - index.js

  This file is a hands-on exercise that combines concepts from previous modules:
  1. Variable declaration using 'let' keyword
  2. Different data types: String, Number
  3. Template literals for string interpolation
  4. DOM manipulation to display personal profile information

  Key Concepts:
  - Variables store personal data (name, age, email, favorite food)
  - Template literals use backticks and ${} to insert variables into strings
  - document.getElementById() selects HTML elements to update their content
*/

// ===== VARIABLE DECLARATION & ASSIGNMENT =====
// Variables store personal profile data used throughout the portfolio page
let name = "Jerry";                    // String: portfolio owner's name
let age = 12;                          // Number: portfolio owner's age
let email = "jerry@rebornloki.dev";    // String: contact email address
let favfood = "Burger";                // String: favorite food

// ===== DOM MANIPULATION WITH TEMPLATE LITERALS =====
// document.getElementById() selects an HTML element using its ID attribute
// Template literals (backticks + ${}) insert variable values directly into the text
// .textContent sets the visible text inside the selected element

document.getElementById("p1").textContent = `Hi, my name is ${name} and i am ${age} years old.`
document.getElementById("p2").textContent = `My email is ${email}(ps it doesnt exist lol).`
document.getElementById("p3").textContent = `My favorite food is ${favfood}.`

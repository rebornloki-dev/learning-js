/*
  INTRODUCTIONS MODULE - index.js
  
  This file demonstrates fundamental JavaScript concepts:
  1. Console logging for debugging
  2. Window alerts for user interaction
  3. DOM manipulation with JavaScript
  
  Learning outcomes:
  - How to output messages to the browser console (visible with F12 > Console tab)
  - How to display alert dialogs to users
  - How to select HTML elements by ID and modify their content
*/

// ===== CONSOLE LOGGING =====
// console.log() outputs messages to the browser console for debugging
console.log("haahahha");
console.log("Hello, World!");

// ===== WINDOW ALERTS =====
// window.alert() displays a pop-up dialog box that users must click to dismiss
window.alert("How are you ");
window.alert("I am fine, thank you for asking");

// ===== DOM MANIPULATION =====
// document.getElementById() selects an HTML element using its ID attribute
// .textContent modifies the text content inside the selected element
// This demonstrates how JavaScript can dynamically update page content

document.getElementById("myH1").textContent = "Hello, World";
document.getElementById("myP").textContent = "This is a paragraph.";

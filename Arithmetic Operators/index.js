/*
  ARITHMETIC OPERATORS MODULE - index.js

  This file demonstrates JavaScript arithmetic operations, including:
  - Addition, subtraction, multiplication, division
  - Exponentiation and modulo
  - Compound assignment operators
  - Increment and decrement operators
  - Operator precedence in expressions

  Learning outcomes:
  - Understand how arithmetic operators modify numeric values
  - Learn shorthand assignment syntax
  - See how expressions are evaluated in JavaScript
*/

// ===== INITIAL VALUE =====
// Start with a numeric value stored in the variable 'students'
let students = 30;

// ===== BASIC ARITHMETIC OPERATIONS =====
// Each line assigns a new value back to the same variable
students = students + 1;   // Add 1 to students
students = students - 1;   // Subtract 1 from students
students = students * 2;   // Multiply students by 2
students = students / 2;   // Divide students by 2
students = students ** 2;  // Exponentiation: students squared
students = students % 2;   // Modulo: remainder when divided by 2

// ===== MODULO EXAMPLE =====
// Use modulo to find the remainder of a division operation
let extraStudents = students % 3;

// ===== COMPOUND ASSIGNMENT OPERATORS =====
// These operators combine arithmetic with assignment in a shorter form
students += 1; // Equivalent to students = students + 1
students -= 1; // Equivalent to students = students - 1
students *= 2; // Equivalent to students = students * 2
students /= 2; // Equivalent to students = students / 2
students **= 2; // Equivalent to students = students ** 2
students %= 2; // Equivalent to students = students % 2

// ===== INCREMENT / DECREMENT =====
// Increase or decrease the value by exactly 1
students++; // Add 1 to students
students--; // Subtract 1 from students

// Output the final students value to the console
console.log(students);

// ===== OPERATOR PRECEDENCE =====
// JavaScript evaluates multiplication and exponentiation before addition
let result = 1 + 2 * 3 + 4 ** 2;

// Output the evaluated result to the console
console.log(result);

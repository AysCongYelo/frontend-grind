"use strict";

// ====================
// ARITHMETIC OPERATORS
// ====================

let a = 10;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulo (remainder after division)
console.log(a ** b); // Exponent (10^3)

// ====================
// COMPARISON OPERATORS
// ====================

// == compares value only (performs type conversion)
console.log(10 == "10"); // true

// === compares value and data type (no type conversion)
console.log(10 === "10"); // false

// != checks if values are not equal (performs type conversion)
console.log(10 != "10"); // false

// !== checks if value OR data type are different
console.log(10 !== "10"); // true

// Greater than
console.log(10 > 5); // true

// Less than
console.log(10 < 5); // false

// Greater than or equal
console.log(10 >= 10); // true

// Less than or equal
console.log(10 <= 5); // false

// ====================
// LOGICAL OPERATORS
// ====================

// AND (both conditions must be true)
console.log(true && true); // true
console.log(true && false); // false

// OR (at least one condition must be true)
console.log(true || false); // true
console.log(false || false); // false

// NOT (reverses the boolean value)
console.log(!true); // false
console.log(!false); // true

"use strict";

// ====================
// CREATE ARRAY
// ====================

const arr = [1, 2, 3, 4, 5];

console.log(arr);

// ====================
// LENGTH
// ====================

console.log(arr.length);

// ====================
// ADD ELEMENTS
// ====================

arr.push(6); // Add to the end
console.log(arr);

arr.unshift(0); // Add to the beginning
console.log(arr);

// ====================
// REMOVE ELEMENTS
// ====================

arr.pop(); // Remove from the end
console.log(arr);

arr.shift(); // Remove from the beginning
console.log(arr);

// ====================
// ACCESS ELEMENTS
// ====================

console.log(arr[0]); // First element

console.log(arr[arr.length - 1]); // Last element

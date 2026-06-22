"use strict";

const arr = [1, 2, 3, 4, 5];

// ====================
// MAP
// ====================

const doubled = arr.map((num) => num * 2);

console.log(doubled);

// ====================
// FILTER
// ====================

const evens = arr.filter((num) => num % 2 === 0);

console.log(evens);

// ====================
// FIND
// ====================

const found = arr.find((num) => num > 3);

console.log(found);

// ====================
// SOME
// ====================

const hasEven = arr.some((num) => num % 2 === 0);

console.log(hasEven);

// ====================
// EVERY
// ====================

const allEven = arr.every((num) => num % 2 === 0);

console.log(allEven);

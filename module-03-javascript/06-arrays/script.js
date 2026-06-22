"use strict";

const arr = [1, 2, 3, 4, 5];

// ====================
// FOREACH
// ====================

arr.forEach((num) => {
  console.log(num);
});

// ====================
// REDUCE
// ====================

const sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);

// ====================
// INCLUDES
// ====================

console.log(arr.includes(3));
console.log(arr.includes(10));

// ====================
// SORT
// ====================

const numbers = [5, 3, 1, 4, 2];

numbers.sort((a, b) => a - b);

console.log(numbers);

numbers.sort((a, b) => b - a);

console.log(numbers);

// ====================
// SPREAD OPERATOR
// ====================

const newArr = [...arr, 6];

console.log(newArr);

const copy = [...arr];

console.log(copy);

"use strict";

// ====================
// FOR LOOP
// ====================

// Repeat code while condition is true
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ====================
// FOR...OF
// ====================

const fruits = ["Apple", "Mango", "Banana"];

// Loop through array values
for (const fruit of fruits) {
  console.log(fruit);
}

// ====================
// FOR...IN
// ====================

const user = {
  name: "Ace",
  age: 23,
};

// Loop through object keys
for (const key in user) {
  console.log(key, user[key]);
}

// ====================
// WHILE LOOP
// ====================

let count = 0;

// Repeat while condition is true
while (count < 5) {
  console.log(count);

  count++;
}

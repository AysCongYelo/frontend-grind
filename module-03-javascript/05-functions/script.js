"use strict";

// ====================
// FUNCTION DECLARATION
// ====================

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ace"));

// ====================
// FUNCTION EXPRESSION
// ====================

const sayHello = function (name) {
  return "Hello " + name;
};

console.log(sayHello("Eduard"));

// ====================
// ARROW FUNCTION
// ====================

const welcome = (name) => {
  return "Welcome " + name;
};

console.log(welcome("Ace"));

// ====================
// SHORT ARROW FUNCTION
// ====================

const add = (a, b) => a + b;

console.log(add(5, 3));

// ====================
// DEFAULT PARAMETERS
// ====================

const greetUser = (name = "Guest") => {
  return "Hello " + name;
};

console.log(greetUser());
console.log(greetUser("Ace"));

// ====================
// CALLBACK FUNCTION
// ====================

const doSomething = (callback) => {
  console.log("Doing something...");
  callback();
};

doSomething(() => {
  console.log("Done!");
});

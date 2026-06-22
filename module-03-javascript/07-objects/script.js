"use strict";

// ====================
// CREATE OBJECT
// ====================

const person = {
  name: "Ace",
  age: 23,
  city: "Tanay",

  greet: function () {
    return "Hello " + this.name;
  },
};

console.log(person);

// ====================
// ACCESS PROPERTIES
// ====================

console.log(person.name);

console.log(person["age"]);

// ====================
// ADD / UPDATE
// ====================

person.job = "Developer";

person.age = 24;

console.log(person);

// ====================
// DELETE PROPERTY
// ====================

delete person.city;

console.log(person);

// ====================
// DESTRUCTURING
// ====================

const { name, age } = person;

console.log(name);
console.log(age);

// ====================
// SPREAD OPERATOR
// ====================

const newPerson = {
  ...person,
  country: "Philippines",
};

console.log(newPerson);

// ====================
// LOOP THROUGH OBJECT
// ====================

for (const key in person) {
  console.log(key, person[key]);
}

// ====================
// OBJECT METHODS
// ====================

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

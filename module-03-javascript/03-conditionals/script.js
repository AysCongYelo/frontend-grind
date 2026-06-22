"use strict";

// ====================
// IF / ELSE
// ====================

const age = 23;

// If condition is true, execute the IF block
// Otherwise, execute the ELSE block
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ====================
// ELSE IF
// ====================

const score = 85;
let grade;

// Check multiple conditions in order
// The first true condition will execute
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log(grade);

// ====================
// SWITCH
// ====================

const day = "Monday";

// Compare a value against multiple cases
switch (day) {
  case "Monday":
    console.log("Start of week");
    break; // Exit the switch statement

  case "Friday":
    console.log("TGIF!");
    break; // Exit the switch statement

  default:
    // Execute if no case matches
    console.log("Other day");
}

// ====================
// TERNARY OPERATOR
// ====================

// Short version of if/else
const status = age >= 18 ? "Adult" : "Minor";

console.log(status);

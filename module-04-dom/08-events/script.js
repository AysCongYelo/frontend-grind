"use strict";

const button = document.getElementById("btn");
const input = document.getElementById("username");
const form = document.getElementById("form");

// ====================
// CLICK EVENT
// ====================

// Listen for a click event on the button
button.addEventListener("click", () => {
  console.log("Button Clicked!");
});

// ====================
// INPUT EVENT
// ====================

// Runs every time the user types
input.addEventListener("input", (e) => {
  // e.target = element that triggered the event
  // e.target.value = current value of the input
  console.log(e.target.value);
});

// ====================
// SUBMIT EVENT
// ====================

// Runs when the form is submitted
form.addEventListener("submit", (e) => {
  // Prevent the default browser behavior
  // (page refresh after form submission)
  e.preventDefault();

  console.log("Submitted");
});

// ====================
// KEYDOWN EVENT
// ====================

// Runs whenever a key is pressed
document.addEventListener("keydown", (e) => {
  // e.key = actual key that was pressed
  console.log(e.key);
});

// Example: Detect Enter key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Pressed Enter");
  }
});

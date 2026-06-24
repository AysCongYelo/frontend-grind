"use strict";

// ====================
// SETTIMEOUT
// ====================

setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);

// ====================
// SETINTERVAL
// ====================

const intervalId = setInterval(() => {
  console.log("Every 1 second");
}, 1000);

// Stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval Stopped");
}, 5000);

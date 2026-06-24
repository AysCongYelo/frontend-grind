"use strict";

// ====================
// CREATE PROMISE
// ====================

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

// ====================
// HANDLE SUCCESS
// ====================

promise.then((data) => {
  console.log(data);
});

// ====================
// HANDLE ERROR
// ====================

promise.catch((error) => {
  console.log(error);
});

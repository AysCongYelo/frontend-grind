"use strict";

// ====================
// PROMISE
// ====================

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

// ====================
// ASYNC / AWAIT
// ====================

async function getData() {
  const data = await promise;

  console.log(data);
}

getData();

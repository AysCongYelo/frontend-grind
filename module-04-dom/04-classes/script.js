"use strict";

const title = document.getElementById("title");

// ====================
// ADD CLASS
// ====================

title.classList.add("active");

// ====================
// REMOVE CLASS
// ====================

title.classList.remove("active");

// ====================
// TOGGLE CLASS
// ====================

title.classList.toggle("active");

// ====================
// CHECK CLASS
// ====================

console.log(title.classList.contains("active"));

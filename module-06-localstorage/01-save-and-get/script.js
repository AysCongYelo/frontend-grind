"use strict";

// ====================
// SAVE DATA
// ====================

localStorage.setItem("username", "Ace");

// ====================
// GET DATA
// ====================

const username = localStorage.getItem("username");

console.log(username);

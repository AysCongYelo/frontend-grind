"use strict";

const photo = document.getElementById("photo");
const button = document.getElementById("btn");

// ====================
// GET ATTRIBUTE
// ====================

console.log(photo.getAttribute("src"));

console.log(photo.getAttribute("alt"));

// ====================
// SET ATTRIBUTE
// ====================

photo.setAttribute("src", "new-image.jpg");

photo.setAttribute("alt", "New Image");

// ====================
// REMOVE ATTRIBUTE
// ====================

button.removeAttribute("disabled");

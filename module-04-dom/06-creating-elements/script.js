"use strict";

const container = document.querySelector("#container");

// ====================
// CREATE ELEMENT
// ====================

const heading = document.createElement("h1");

const paragraph = document.createElement("p");

// ====================
// ADD CONTENT
// ====================

heading.textContent = "Hello World";

paragraph.textContent = "Oy oy oy";

// ====================
// APPEND ELEMENT
// ====================

container.appendChild(heading);
container.appendChild(paragraph);

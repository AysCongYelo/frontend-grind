"use strict";

// ====================
// TEXT CONTENT
// ====================

const title = document.getElementById("title");

title.textContent = "New Title";

// ====================
// INNER HTML
// ====================

const container = document.getElementById("container");

container.innerHTML = `
  <h2>Hello World</h2>
  <p>This is a paragraph.</p>
`;

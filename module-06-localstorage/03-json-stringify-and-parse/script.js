"use strict";

// ====================
// ARRAY
// ====================

const todos = ["Task 1", "Task 2", "Task 3"];

// ====================
// SAVE ARRAY
// ====================

localStorage.setItem("todos", JSON.stringify(todos));

// ====================
// GET ARRAY
// ====================

const savedTodos = JSON.parse(localStorage.getItem("todos"));

console.log(savedTodos);

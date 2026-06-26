"use strict";

const input = document.getElementById("input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("lists");

let todos = [];

// I-save ang todos array sa localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// I-render lahat ng todos mula sa array
function renderAll() {
  taskList.innerHTML = "";

  todos.forEach((todo) => {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");

    taskText.textContent = todo.text;

    if (todo.completed) {
      taskText.classList.add("completed");
      doneButton.textContent = "Undone";
    } else {
      doneButton.textContent = "Done";
    }

    removeButton.textContent = "Remove";

    // Alisin ang todo sa array by id, i-save, i-render
    removeButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      saveTodos();
      renderAll();
    });

    // I-flip ang completed status, i-save, i-render
    doneButton.addEventListener("click", () => {
      const foundTodo = todos.find((t) => t.id === todo.id);
      if (foundTodo) {
        foundTodo.completed = !foundTodo.completed;
        saveTodos();
        renderAll();
      }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);
  });
}

// I-trigger ang add button kapag pinindot ang Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

// Mag-add ng bagong todo sa array
addButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const newTodo = {
    id: Date.now(),
    text: input.value.trim(),
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  renderAll();

  input.value = "";
});

// I-load ang saved todos mula sa localStorage sa page load
function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
  }
  renderAll();
}

loadTodos();

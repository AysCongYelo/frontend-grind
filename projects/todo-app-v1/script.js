"use strict";

const input = document.getElementById("input");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("lists");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

addButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  console.log(input.value);
  const taskItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const taskText = document.createElement("span");
  const doneButton = document.createElement("button");

  taskText.textContent = input.value;
  taskItem.appendChild(taskText);

  taskList.appendChild(taskItem);
  input.value = "";

  removeButton.textContent = "Remove";
  taskItem.appendChild(removeButton);

  doneButton.textContent = "Done";
  taskItem.appendChild(doneButton);

  removeButton.addEventListener("click", () => {
    taskItem.remove();
  });

  doneButton.addEventListener("click", () => {
    taskText.classList.toggle("completed");

    if (taskText.classList.contains("completed")) {
      doneButton.textContent = "Undone";
    } else {
      doneButton.textContent = "Done";
    }
  });
});

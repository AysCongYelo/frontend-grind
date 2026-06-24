"use strict";

async function createUser() {
  try {
    const userData = {
      name: "Ace",
      email: "ace@example.com",
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const newUser = await response.json();

    console.log(newUser);
  } catch (error) {
    console.log(error.message);
  }
}

createUser();

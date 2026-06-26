"use strict";

const searchButton = document.getElementById("search-btn");
const input = document.getElementById("input");
const container = document.querySelector(".container");

searchButton.addEventListener("click", async () => {
  const username = input.value.trim();
  if (username === "") return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      console.log("Hindi nahanap ang user!");
      alert("User not found!");
      return;
    }
    const data = await response.json();

    console.log(data);

    const existingCard = document.getElementById("profile-card");
    if (existingCard) {
      existingCard.remove();
    }
    const profileContainer = document.createElement("div");
    profileContainer.id = "profile-card";
    profileContainer.innerHTML = `
  <img src="${data.avatar_url}" alt="Avatar" width="150" style="border-radius: 50%;">
  <h2>${data.name || data.login}</h2>
  <p>${data.bio || "No bio available"}</p>
  <p><strong>Followers:</strong> ${data.followers} | <strong>Following:</strong> ${data.following}</p>
  <p><strong>Public Repos:</strong> ${data.public_repos}</p>
  <a href="${data.html_url}" target="_blank">View GitHub Profile</a>
`;
    container.appendChild(profileContainer);
  } catch (error) {
    console.error("Network error o ibang problema:", error);
  }
});

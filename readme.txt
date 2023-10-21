import axios from "axios";

const getTours = async () => {
  const res = await fetch("http://localhost:3000/tours", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);
    renderCards(data);
  } else {
    console.error(`Error: ${res.status} - ${res.statusText}`);
  }
};

const renderCards = (...cardDataFromBackend) => {
  const cardContainer = document.getElementById("cardContainer");

  cardDataFromBackend.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card__header">
        <div class="card__picture">
          <img class="card__picture-img" src="" alt="Tour" />
        </div>
      </div>
      <div class="card__details">
        <h4 class="card__sub-heading">${data.title}</h4>
        <p class="card__text">${data.description}</p>
        <div class="card__data-container">
          <div class="card__data">
            <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
            </svg>
            <span>${data.location}</span>
          </div>
          <div class="card__data">
            <span>${data.price}</span>
          </div>
        </div>
      </div>`;

    cardContainer.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getTours();
});

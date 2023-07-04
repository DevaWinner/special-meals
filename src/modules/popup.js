const showPopup = (meal) => {
  const popup = document.createElement("div");
  popup.className = "popup";

  const closePopupButton = document.createElement("button");
  closePopupButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  closePopupButton.className = "close-popup-button";
  popup.appendChild(closePopupButton);
  
  const popupContent = document.createElement("div");
  popupContent.className = "popup-content";

  const mealImage = document.createElement("img");
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  popupContent.appendChild(mealImage);

  const mealTitle = document.createElement("h2");
  mealTitle.textContent = meal.strMeal;
  popupContent.appendChild(mealTitle);

  const mealInstructions = document.createElement("p");
  mealInstructions.textContent = meal.strInstructions;
  popupContent.appendChild(mealInstructions);

  closePopupButton.addEventListener("click", () => {
    popup.remove();
  });

  popup.appendChild(popupContent);
  document.body.appendChild(popup);
};

export default showPopup;
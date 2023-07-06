import './styles/style.css';
import './styles/popup.css';
import logo from './assets/logo.png';
import fetchMeals from './api/fetchmeals.js';

import { createMealCard, truncateTitle } from './modules/utils.js';
import displayPopup from './modules/popup.js';

document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');
  try {
    const meals = await fetchMeals('Seafood');
    meals.forEach((meal) => {
      const mealCard = createMealCard(meal, truncateTitle);
      const commentButton = mealCard.querySelector('.comments-button');
      commentButton.addEventListener('click', () => {
        displayPopup(meal);
      });
      mealContainer.appendChild(mealCard);
    });
  } catch (error) {
    mealContainer.innerHTML = 'Failed to fetch meals.';
  }
});

const logoImage = document.getElementById('logo');
logoImage.src = logo;
import './styles/style.css';
import './styles/popup.css';
import logo from './assets/logo.png';
import fetchMeals from './api/fetchmeals.js';
import { truncateTitle } from './modules/utils.js';
import createMealCard from './modules/createmeals.js';
import showPopup from './modules/popup.js';

document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');
  try {
    const meals = await fetchMeals('Seafood');
    meals.forEach((meal, index) => {
      const mealCard = createMealCard(meal, truncateTitle);

      mealCard.id = `mealCard-${index + 1}`;

      const commentButton = mealCard.querySelector('.comments-button');
      commentButton.addEventListener('click', () => {
        showPopup(meal);
      });

      mealContainer.appendChild(mealCard);
    });
  } catch (error) {
    mealContainer.innerHTML = 'Failed to fetch meals.';
  }
});

const logoImage = document.getElementById('logo');
logoImage.src = logo;
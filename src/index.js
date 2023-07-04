import './styles/style.css';
import logo from './assets/logo.png';
import fetchMeals from './api/fetchmeals.js';
import { createMealCard, truncateTitle } from './modules/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  const mealContainer = document.getElementById('mealContainer');
  try {
    const meals = await fetchMeals('Seafood');
    meals.forEach((meal) => {
      const mealCard = createMealCard(meal, truncateTitle);

      mealContainer.appendChild(mealCard);
    });
  } catch (error) {
    mealContainer.innerHTML = 'Failed to fetch meals.';
  }
});

const logoImage = document.getElementById('logo');
logoImage.src = logo;
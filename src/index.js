import './styles/style.css';
import './styles/popup.css';
import logo from './assets/logo.png';
import fetchMeals from './api/fetchmeals.js';
import { truncateTitle } from './modules/utils.js';
import createMealCard from './modules/createmeals.js';
import showPopup from './modules/popup.js';
import itemCounter from './modules/counter.js';

document.addEventListener('DOMContentLoaded', async () => {
  const counter = document.getElementById('count');
  const countnum = await itemCounter();
  counter.textContent = `(${countnum})meals`;
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
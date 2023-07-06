import fetchComments from '../api/fetchcomments.js';
import { formatDate } from './utils.js';

const showPopup = async (meal) => {
  const appId = "KfZAQJtzqeC2UIXf6vLd";
  const popup = document.getElementById('popup');
  const mealImage = document.getElementById('popup-img');
  const mealTitle = document.getElementById('meal-title');
  const mealInstructions = document.getElementById('meal-instructions');

  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealTitle.textContent = meal.strMeal;
  mealInstructions.textContent = meal.strInstructions;

  popup.style.display = 'block';

  const closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = ''; // Clear previously fetched comments

  const comments = await fetchComments(meal.id);
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.className = 'comment-element';

    const userBox = document.createElement('span');
    userBox.className = 'user-box';

    const commentUser = document.createElement('span');
    commentUser.className = 'comment-user';
    commentUser.textContent = comment.username;
    userBox.appendChild(commentUser);

    const commentDate = document.createElement('span');
    commentDate.className = 'comment-date';
    commentDate.textContent = comment.creation_date;
    userBox.appendChild(commentDate);

    commentElement.appendChild(userBox);

    const commentText = document.createElement('span');
    commentText.innerHTML = `- ${comment.comment}`;
    commentElement.appendChild(commentText);

    commentsList.appendChild(commentElement);
  });
};

export default showPopup;
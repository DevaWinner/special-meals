// eslint-disable-next-line no-console
// eslint-disable-next-line no-alert

import fetchComments from '../api/fetchcomments.js';
import { formatDate } from './utils.js';

const createCommentElement = (comment) => {
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
  commentDate.textContent = formatDate(comment.creation_date);
  userBox.appendChild(commentDate);

  commentElement.appendChild(userBox);

  const commentContent = document.createElement('span');
  commentContent.innerHTML = `- ${comment.comment}`;
  commentElement.appendChild(commentContent);

  return commentElement;
};

const showPopup = async (meal) => {
  const appId = 'KfZAQJtzqeC2UIXf6vLd';
  const popup = document.getElementById('popup');
  const mealImage = document.getElementById('popup-img');
  const mealTitle = document.getElementById('meal-title');
  const mealInstructions = document.getElementById('meal-instructions');
  const commentsList = document.getElementById('comments-list');
  const commentUserInput = document.getElementById('comment-user');
  const commentInput = document.getElementById('comment-input');
  const commentForm = document.getElementById('comment-form');
  const commentsCounter = document.getElementById('comment-counter');

  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealTitle.textContent = meal.strMeal;
  mealInstructions.textContent = meal.strInstructions;

  popup.style.display = 'block';

  const closePopup = document.getElementById('close-popup');
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  commentsList.innerHTML = '';
  commentsCounter.textContent = '';

  try {
    const comments = await fetchComments(meal.id);

    comments.forEach((comment) => {
      const commentElement = createCommentElement(comment);
      commentsList.appendChild(commentElement);
    });

    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = commentUserInput.value;
      const commentText = commentInput.value;

      if (username && commentText) {
        try {
          const response = await fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                item_id: meal.id,
                username,
                comment: commentText,
              }),
            },
          );

          if (response.ok) {
            const newComment = {
              username,
              comment: commentText,
              creation_date: formatDate(Date.now()),
            };
            comments.push(newComment);
            commentsList.innerHTML = '';

            comments.forEach((comment) => {
              const commentElement = createCommentElement(comment);
              commentsList.appendChild(commentElement);
            });

            commentUserInput.value = '';
            commentInput.value = '';
          } else {
            throw new Error('Failed to post comment');
          }
        } catch (error) {
          console.error(error);
          alert('Error posting comment');
        }
      }
    });
  } catch (error) {
    console.error(error);
    alert('Error fetching comments');
  }

  // Clear form inputs
  commentUserInput.value = '';
  commentInput.value = '';
};

export default showPopup;

import getLikes from './getlikes.js';

const createMealCard = (meal, truncateTitle) => {
  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';

  // Assign the meal ID to the meal card
  mealCard.id = `meal-${meal.id}`;

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealCard.appendChild(mealImage);

  const titleContainer = document.createElement('div');
  titleContainer.className = 'title';

  const mealTitle = document.createElement('p');
  mealTitle.className = 'meal-card-title';
  mealTitle.textContent = truncateTitle(meal.strMeal, 3);
  titleContainer.appendChild(mealTitle);

  const favoriteButton = document.createElement('button');
  favoriteButton.innerHTML = '<i class="fa-regular fa-heart icon"></i>';
  titleContainer.appendChild(favoriteButton);

  mealCard.appendChild(titleContainer);

  const likesCounter = document.createElement('div');
  likesCounter.className = 'likes-counter';
  const likesSpan = document.createElement('span');
  likesSpan.textContent = 'Loading...';
  likesCounter.appendChild(likesSpan);
  mealCard.appendChild(likesCounter);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons';

  const commentsButton = document.createElement('button');
  commentsButton.textContent = 'Comments';
  commentsButton.className = 'comments-button';
  buttonsContainer.appendChild(commentsButton);

  const reservationsButton = document.createElement('button');
  reservationsButton.textContent = 'Reservations';
  buttonsContainer.appendChild(reservationsButton);

  mealCard.appendChild(buttonsContainer);

  getLikes()
    .then((likes) => {
      if (likes.length === 0) {
        likesSpan.textContent = '0 likes';
      } else {
        likesSpan.innerHTML = `${likes.length} likes`;
      }
    })
    .catch((error) => {
      console.error('Error fetching likes:', error);
      likesSpan.textContent = 'N/A';
    });

  return mealCard;
};

export default createMealCard;
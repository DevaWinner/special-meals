// eslint-disable-next-line no-console

const createMealCard = (meal, truncateTitle, postLike, fetchLikes) => {
  const appId = 'KfZAQJtzqeC2UIXf6vLd';

  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';
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

  const updateLikesCounter = async () => {
    try {
      const likes = await fetchLikes(appId);
      const mealLikes = likes.filter((like) => like.item_id === meal.id);
      likesSpan.textContent = mealLikes.length > 0 ? mealLikes[0].likes : 0;
    } catch (error) {
      console.error('Failed to get likes:', error);
    }
  };

  favoriteButton.addEventListener('click', async () => {
    try {
      await postLike(appId, meal.id);
      await updateLikesCounter();
    } catch (error) {
      console.error('Failed to post like:', error);
    }
  });

  updateLikesCounter();

  return mealCard;
};

export default createMealCard;
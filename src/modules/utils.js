import getlikes from "./getlikes.js";
export const createMealCard = async (meal, truncateTitle) => {
  const mealCard = document.createElement('div');
  mealCard.className = 'meal-card';

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealImage.id = `image${meal.idMeal}`;
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
  
  const likedata = await getlikes();
  likedata.forEach(element => {
    likesCounter.textContent = element.likes
  });
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

  return mealCard;
};

export const truncateTitle = (title, maxWords) => {
  const words = title.split(' ');
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(' ')}...`;
  }
  return title;
};
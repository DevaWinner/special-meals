import fetchComments from "../api/fetchcomments.js";

const showPopup = async (meal) => {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const popupHeading = document.createElement('div');
  popupHeading.className = 'popup-heading';

  const mealImage = document.createElement('img');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  popupHeading.appendChild(mealImage);

  const closePopupButton = document.createElement('button');
  closePopupButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closePopupButton.className = 'close-popup-button';
  closePopupButton.classList.add('close-button');
  popupHeading.appendChild(closePopupButton);

  popupContent.appendChild(popupHeading);

  const popupDescription = document.createElement('div');
  popupDescription.className = 'popup-description';

  const mealTitle = document.createElement('h2');
  mealTitle.textContent = meal.strMeal;
  mealTitle.className = 'meal-title';
  popupDescription.appendChild(mealTitle);

  const instructionContainer = document.createElement('div');
  instructionContainer.className = 'instruction-container';

  const mealInstructions = document.createElement('p');
  mealInstructions.textContent = meal.strInstructions;
  mealInstructions.className = 'meal-instructions';
  instructionContainer.appendChild(mealInstructions);

  popupDescription.appendChild(instructionContainer);

  popupContent.appendChild(popupDescription);

  closePopupButton.addEventListener('click', () => {
    popup.remove();
  });


  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";

  const commentsHeading = document.createElement("h3");
  commentsHeading.innerHTML = `<p>Comments <span id="comment-counter">(3)</span> </p>`;
  commentsContainer.appendChild(commentsHeading);

  
  popupContent.appendChild(commentsContainer);

  const comments = await fetchComments(meal.id);
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.textContent = comment.text;
    commentsContainer.appendChild(commentElement);
  });

  popup.appendChild(popupContent);
  
  document.body.appendChild(popup);
};

export default showPopup;
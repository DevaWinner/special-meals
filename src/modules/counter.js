const updateMealCounter = () => {
  const mealContainer = document.getElementById('mealContainer');
  const mealCounter = document.getElementById('count');
  const mealElements = mealContainer.getElementsByClassName('meal-card');
  const mealCount = mealElements.length;

  mealCounter.textContent = `(${mealCount})`;
};

export default updateMealCounter;
const fetchMeals = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    if (!response.ok) {
      throw new Error('Failed to fetch meals.');
    }
    const data = await response.json();
 
    const mealsWithId = data.meals.map((meal, index) => ({
      ...meal,
      id: index + 1,
    }));
    return mealsWithId;
  } catch (error) {
    return [];
  }
};

export default fetchMeals;

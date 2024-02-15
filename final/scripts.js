// Define variables for DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const recipeContainer = document.getElementById('recipe-container');

// Event listener for form submission
searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    try {
        // Fetch recipe data from TheMealDB API
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();

        // Clear previous search results
        recipeContainer.innerHTML = '';

        // Check if any recipes were found
        if (data.meals === null) {
            recipeContainer.innerHTML = '<p>No recipes found</p>';
            return;
        }

        // Display recipe results
        data.meals.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.strMeal;

            const recipeInstructions = document.createElement('p');
            recipeInstructions.textContent = `Instructions: ${recipe.strInstructions}`;

            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeInstructions);

            recipeContainer.appendChild(recipeCard);
        });
    } catch (error) {
        console.error('Error occurred while fetching data:', error);
        alert('An error occurred while fetching data. Please try again.');
    }
});

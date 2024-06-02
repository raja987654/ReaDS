// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <Header />
      <RecipeList recipes={recipes} onSelectRecipe={selectRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
      <Footer />
    </div>
  );
};

export default App;

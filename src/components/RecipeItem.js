// src/components/RecipeItem.js
import React from "react";

const RecipeItem = ({ recipe, onSelectRecipe }) => {
  return (
    <div className="recipe-item" onClick={() => onSelectRecipe(recipe)}>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions.substring(0, 100)}...</p>
    </div>
  );
};

export default RecipeItem;

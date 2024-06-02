// src/components/RecipeList.js
import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.idMeal}
          recipe={recipe}
          onSelectRecipe={onSelectRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;

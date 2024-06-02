// src/components/RecipeDetail.js
import React from "react";

const RecipeDetail = ({ recipe, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;

import React from 'react';
import { IRecipe } from './types'; // Importing the IRecipe type

// Props interface for Recipe
interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="recipe">
      <h3>{recipeData.name}</h3>
      <img src={recipeData.image} alt={recipeData.name} style={{ width: '100px', height: '100px' }} />
      <h4>Ingredients</h4>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <p>
        <strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes<br />
        <strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes<br />
        <strong>Servings:</strong> {recipeData.servings}<br />
        <strong>Difficulty:</strong> {recipeData.difficulty}<br />
        <strong>Cuisine:</strong> {recipeData.cuisine}<br />
        <strong>Calories per Serving:</strong> {recipeData.caloriesPerServing}<br />
        <strong>Rating:</strong> {recipeData.rating} ({recipeData.reviewCount} reviews)<br />
      </p>
    </div>
  );
};

export default Recipe;

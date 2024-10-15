import React from 'react';
import Recipe from './Recipe'; // Import the Recipe component
import { IRecipe } from './types'; // Importing the IRecipe type

// Props interface for RecipeList
interface IRecipeListProps {
  recipes: IRecipe[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found for this tag.</p>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipeData={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;

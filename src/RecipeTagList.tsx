import React from 'react';
import RecipeTag from './RecipeTag'; // Importing the RecipeTag component

// Props interface for RecipeTagList
interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div>
      <h2>Select a Recipe Tag</h2>
      <ul>
        {tagList.map((tag) => (
          <li key={tag}>
            <RecipeTag tagName={tag} onSelectTag={onSelectTag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeTagList;

import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList'; // Import the RecipeTagList component
import RecipeList from './RecipeList'; // Import the RecipeList component
import { IRecipe } from './types'; // Assuming you have this type in a separate file

const App = () => {
  // State for tags and selected tag
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // State for recipe data
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  // Fetch recipe tags on component mount
  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then((response) => response.json())
      .then((data) => setTags(data));
  }, []);

  // Fetch recipes when a tag is selected
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes)); // Assuming API returns data in this format
    }
  }, [selectedTag]);

  // Handler to reset the selected tag (go back to tag list)
  const handleBackToTagList = () => {
    setSelectedTag(null);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      
      {selectedTag ? (
        // Show the RecipeList if a tag is selected
        <div>
          <button onClick={handleBackToTagList}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        // Show the RecipeTagList if no tag is selected
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      )}
    </div>
  );
};

export default App;

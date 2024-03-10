import { useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import { recipesData } from "../utils/recipes_data";

export default function Recipes() {
  const [recipes, setRecipes] = useState(recipesData);
  const [searchQuery, setSearchQuery] = useState(""); //will hold the user input

  //updates the search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  //searches for a recipe that matches one from the list
  const handleSubmit = (e) => {
    // e.preventDefault();
    const matchingReceipes = recipesData.filter((receipe) =>
      receipe.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setSearchQuery("");
    setRecipes(matchingReceipes);
  };

  return (
    <div>
      <PreviousSearches
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

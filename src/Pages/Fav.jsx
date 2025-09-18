import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  // Safely read favourites from localStorage; default to empty array
  const favourite = JSON.parse(localStorage.getItem("fav") || "[]");
  const renderrecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {favourite.length > 0 ? renderrecipes : "No favourites found!"}
    </div>
  );
};

export default Fav;

import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { recipecontext } from "../Context/Recipecontext";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const total = Array.isArray(data) ? data.length : 0;

  if (!total) {
    return (
      <section className="text-center py-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">Recipes</h1>
        <p className="text-white/80 mt-1">Total: 0</p>
        <div className="mt-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur p-6 inline-block">
          <p className="text-white/90">No recipes found.</p>
          <Button as={Link} to="/create" variant="primary" size="md">
            Add your first recipe
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <header className="mb-6 md:mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">Recipes</h1>
          <p className="text-white/80 mt-1">Total: {total}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipes;

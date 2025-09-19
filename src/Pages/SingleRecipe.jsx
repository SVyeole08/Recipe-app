import { useContext, useEffect, useState } from "react";
import Button from "../Components/Button";
import { recipecontext } from "../Context/Recipecontext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigator = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      img: recipe?.img,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
      category: recipe?.category,
    },
  });

  const DeleteHandler = () => {
    const filerdata = data.filter((recipe) => params.id != recipe.id);
    setData(filerdata);
    localStorage.setItem("recipe", JSON.stringify(filerdata));

    const currentFav = JSON.parse(localStorage.getItem("fav") || "[]");
    const updatedFav = currentFav.filter((f) => String(f.id) !== String(params.id));
    localStorage.setItem("fav", JSON.stringify(updatedFav));
    setFavourite(updatedFav);

    toast.success("Recipe deleted successfully");
    navigator("/recipes");
  };
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("Recipe updated successfully");
  };

  const [favourite, setFavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  useEffect(() => {}, [favourite]);
  const favHandler = () => {
    let copyFavourite = [...favourite];
    copyFavourite.push(recipe);
    setFavourite(copyFavourite);
    localStorage.setItem("fav", JSON.stringify(copyFavourite));
  };
  const UnfavHandler = () => {
    const filterFav = favourite.filter((f) => f.id != recipe?.id);
    setFavourite(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  return recipe ? (
    <section className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4 md:p-6 shadow-xl shadow-black/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Media & quick actions */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-white/20">
            <img
              className="h-64 md:h-80 w-full object-cover"
              src={recipe.img}
              alt={recipe.title}
            />
          </div>

          <button
            aria-label={favourite.find((f) => f.id == recipe?.id) ? "Remove from favourites" : "Add to favourites"}
            onClick={favourite.find((f) => f.id == recipe?.id) ? UnfavHandler : favHandler}
            className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/50 backdrop-blur border border-white/20"
          >
            {favourite.find((f) => f.id == recipe?.id) ? (
              <i className="text-2xl text-red-400 ri-heart-fill"></i>
            ) : (
              <i className="text-2xl text-red-400 ri-heart-line"></i>
            )}
          </button>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">{recipe.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/90">by {recipe.chef}</span>
            {recipe.category && (
              <span className="ml-2 rounded-full bg-white/15 border border-white/20 px-2.5 py-1 text-xs">
                {recipe.category}
              </span>
            )}
          </div>

          {recipe.desc && (
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-wider text-white/70">Description</h3>
              <p className="mt-1 text-white/90 leading-relaxed">{recipe.desc}</p>
            </div>
          )}

          {recipe.ingr && (
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-wider text-white/70">Ingredients</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-white/90">
                {(recipe.ingr || "").split(",").map((i, idx) => (
                  <li key={idx}>{i.trim()}</li>
                ))}
              </ul>
            </div>
          )}

          {recipe.inst && (
            <div className="mt-4">
              <h3 className="text-sm uppercase tracking-wider text-white/70">Instructions</h3>
              <ol className="mt-2 list-decimal list-inside space-y-1 text-white/90">
                {(recipe.inst || "").split(",").map((step, idx) => (
                  <li key={idx}>{step.trim()}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      {/* Edit form */}
      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" onSubmit={handleSubmit(SubmitHandler)}>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Image URL</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("img")}
            type="url"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("title")}
            type="text"
            placeholder="Recipe title"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Chef</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("chef")}
            type="text"
            placeholder="Chef name"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Short Description</label>
          <textarea
            placeholder="Enter short description"
            className="w-full min-h-[90px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("desc")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm mb-1">Ingredients</label>
          <textarea
            placeholder="Write ingredients separated by commas"
            className="w-full min-h-[120px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("ingr")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm mb-1">Instructions</label>
          <textarea
            placeholder="Write instructions separated by commas"
            className="w-full min-h-[120px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("inst")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm mb-1">Category</label>
          <select
            className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("category")}
          >
            <option className="bg-blue-600" value="Starter">Starter</option>
            <option className="bg-blue-600" value="Breakfast">Breakfast</option>
            <option className="bg-blue-600" value="Lunch">Lunch</option>
            <option className="bg-blue-600" value="Dinner">Dinner</option>
            <option className="bg-blue-600" value="Brunch">Brunch</option>
            <option className="bg-blue-600" value="Supper">Supper</option>
          </select>
        </div>

        <div className="md:col-span-2 flex flex-wrap gap-3 mt-1">
          <Button type="submit" variant="secondary">Update Recipe</Button>
          <Button onClick={DeleteHandler} variant="danger">Delete Recipe</Button>
        </div>
      </form>
    </section>
  ) : (
    "No recipe found!"
  );
};

export default SingleRecipe;

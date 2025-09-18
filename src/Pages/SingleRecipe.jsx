import { useContext, useEffect, useState } from "react";
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
    <div className="flex">
      <div className="left relative w-1/2 p-2 border-r">
        {favourite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnfavHandler}
            className="absolute text-3xl text-red-400 left-[68%] top-[12%] ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="absolute text-3xl text-red-400 left-[68%] top-[12%] ri-heart-line"
          ></i>
        )}
        <h1 className="text-5xl font-black font-[Cambria] mb-5">
          {recipe.title}
        </h1>
        <img
          className="mb-3 h-[30vh] rounded-md border-b border-l-2"
          src={recipe.img}
          alt=""
        />

        <h2 className="mb-2 text-sm text-red-400 font-semibold">
          {recipe.chef}
        </h2>
        <p className="mb-2 text-sm w-[17vw] font-thin">
          <span className="font-bold">
            <li type="circle">Description :- </li>
          </span>
          {recipe.desc}
        </p>
        <p className="mb-2 text-sm w-[17vw] font-thin">
          <span className="font-bold">
            <li type="circle">Instruction :- </li>
          </span>
          {recipe.inst}
        </p>
        <p className="mb-2 text-sm w-[17vw] font-thin">
          <span className="font-bold">
            <li type="circle">Ingredients :- </li>
          </span>
          {recipe.ingr}
        </p>
        <p className="mb-2 text-sm w-[17vw] font-thin">
          <span className="font-bold">
            <li type="circle">Category :- </li>
          </span>
          {recipe.category}
        </p>
      </div>

      <form className="w-1/2 p-2 ml-11" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="mb-5 block border-b outline-0 p-2"
          {...register("img")}
          type="url"
          placeholder="Enter image URL"
        />

        <input
          className="mb-5 block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe title"
        />

        <input
          className="mb-5 block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef name"
        />

        <textarea
          placeholder="Enter short description"
          className="mb-5 block border-b outline-0 p-2"
          {...register("desc")}
        ></textarea>

        <textarea
          placeholder="Write ingredients separated by commas"
          className="mb-5 block border-b outline-0 p-2"
          {...register("ingr")}
        ></textarea>

        <textarea
          placeholder="Write instructions separated by comma"
          className="mb-5 block border-b outline-0 p-2"
          {...register("inst")}
        ></textarea>

        <select
          className="block bg-gray-900 border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="Starter">Starter</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Brunch">Brunch</option>
          <option value="Supper">Supper</option>
        </select>

        <button className="mt-5 block rounded bg-blue-600 px-4 py-2">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 block rounded bg-red-600 px-4 py-2"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "No recipe found!"
  );
};

export default SingleRecipe;

import { useContext } from "react";
import { recipecontext } from "../Context/Recipecontext";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit } = useForm();

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("Recipe updated successfully");
  };
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  return recipe ? (
    <div className="flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-4xl font-black">{recipe.title}</h1>
        <img className="h-[30vh]" src={recipe.img} alt="" />
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="mb-5 block border-b outline-0 p-2"
          value={recipe.img}
          {...register("img")}
          type="url"
          placeholder="Enter image URL"
        />

        <input
          className="mb-5 block border-b outline-0 p-2"
          value={recipe.title}
          {...register("title")}
          type="text"
          placeholder="Recipe title"
        />

        <input
          className="mb-5 block border-b outline-0 p-2"
          value={recipe.chef}
          {...register("chef")}
          type="text"
          placeholder="Chef name"
        />

        <textarea
          placeholder="Enter short description"
          value={recipe.desc}
          className="mb-5 block border-b outline-0 p-2"
          {...register("desc")}
        ></textarea>

        <textarea
          placeholder="Write ingredients separated by commas"
          value={recipe.ingr}
          className="mb-5 block border-b outline-0 p-2"
          {...register("ingr")}
        ></textarea>

        <textarea
          placeholder="Write instructions separated by comma"
          value={recipe.inst}
          className="mb-5 block border-b outline-0 p-2"
          {...register("inst")}
        ></textarea>

        <select
          className="block bg-gray-900 border-b outline-0 p-2"
          value={recipe.category}
          {...register("category")}
        >
          <option value="Starter">Starter</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="brunch">Brunch</option>
          <option value="supper">Supper</option>
        </select>

        <button     className="mt-5 block rounded bg-blue-600 px-4 py-2">
          Update Recipe
        </button>
        <button className="mt-5 block rounded bg-red-600 px-4 py-2">
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "No recipe found!"
  );
};

export default SingleRecipe;

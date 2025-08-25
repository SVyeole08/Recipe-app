import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { useContext } from "react";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
    console.log(recipe);
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image URL"
      />
      <small className="text-red-400">Error</small>

      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe title"
      />
      <small className="text-red-400">Enter the title</small>

      <textarea
        placeholder="Start from here"
        className="block border-b outline-0 p-2"
        {...register("description")}
      ></textarea>
      <small className="text-red-400">Error</small>

      <textarea
        placeholder="Write ingredients separated by commas"
        className="block border-b outline-0 p-2"
        {...register("ingredients")}
      ></textarea>
      <small className="text-red-400">Error</small>

      <textarea
        placeholder="Write instructions separated by comma"
        className="block border-b outline-0 p-2"
        {...register("instructions")}
      ></textarea>
      <small className="text-red-400">Error</small>

      <select
        className="block bg-gray-900 border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="Starter">Starter</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Brunch">Brunch</option>
      </select>

      <button className="mt-5 block rounded bg-gray-900 px-4 py-2">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;

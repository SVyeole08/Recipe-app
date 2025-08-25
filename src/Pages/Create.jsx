import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { useContext } from "react";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset, formState:{ error },} = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
    console.log(recipe);
  };
  return (
    <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="mb-5 block border-b outline-0 p-2"
        {...register("image", { required: "Providing the image is mandatory" })}
        type="url"
        placeholder="Enter image URL"
      />
      <small className="text-red-400">{error?.image?.message}</small>

      <input
        className="mb-5 block border-b outline-0 p-2"
        {...register("title", { required: "Title is required" })}
        type="text"
        placeholder="Recipe title"
      />
      <small className="text-red-400">{error?.title?.message}</small>

      <textarea
        placeholder="Enter short description"
        className="mb-5 block border-b outline-0 p-2"
        {...register("description", { required: "Description is required" })}
      ></textarea>
      <small className="text-red-400">{error?.description?.message}</small>

      <textarea
        placeholder="Write ingredients separated by commas"
        className="mb-5 block border-b outline-0 p-2"
        {...register("ingredients", { required: "Ingredients are required" })}
      ></textarea>
      <small className="text-red-400">{error?.ingredients?.message}</small>

      <textarea
        placeholder="Write instructions separated by comma"
        className="mb-5 block border-b outline-0 p-2"
        {...register("instructions", { required: "Instructions are required" })}
      ></textarea>
      <small className="text-red-400">{error?.instructions?.message}</small>

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

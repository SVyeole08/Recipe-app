import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("Recipe added successfully");
    reset();
    navigate("/recipes");
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(SubmitHandler)}
    >
      <input
        className="mb-5 block border-b outline-0 p-2"
        {...register("img", { required: "Providing the image is mandatory" })}
        type="url"
        placeholder="Enter image URL"
      />
      <small className="text-red-400">{error?.img?.message}</small>

      <input
        className="mb-5 block border-b outline-0 p-2"
        {...register("title", { required: "Title is required" })}
        type="text"
        placeholder="Recipe title"
      />
      <small className="text-red-400">{error?.title?.message}</small>
      
      <input
        className="mb-5 block border-b outline-0 p-2"
        {...register("chef", { required: "Chef name is required" })}
        type="text"
        placeholder="Chef name"
      />
      <small className="text-red-400">{error?.chef?.message}</small>

      <textarea
        placeholder="Enter short description"
        className="mb-5 block border-b outline-0 p-2"
        {...register("desc", { required: "Description is required" })}
      ></textarea>
      <small className="text-red-400">{error?.desc?.message}</small>

      <textarea
        placeholder="Write ingredients separated by commas"
        className="mb-5 block border-b outline-0 p-2"
        {...register("ingr", { required: "Ingredients are required" })}
      ></textarea>
      <small className="text-red-400">{error?.ingr?.message}</small>

      <textarea
        placeholder="Write instructions separated by comma"
        className="mb-5 block border-b outline-0 p-2"
        {...register("inst", { required: "Instructions are required" })}
      ></textarea>
      <small className="text-red-400">{error?.inst?.message}</small>

      <select
        className="block bg-gray-900 border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="Starter">Starter</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="brunch">Brunch</option>
        <option value="supper">Supper</option>
      </select>

      <button className="mt-5 block rounded bg-gray-900 px-4 py-2">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;

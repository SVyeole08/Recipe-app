import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { recipecontext } from "../Context/Recipecontext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("Recipe added successfully");
    reset();
    navigate("/recipes");
  };
  return (
    <section>
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">Create a Recipe</h1>
        <p className="text-white/80 text-sm md:text-base mt-1">Add your delicious creation to the collection.</p>
      </header>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Image URL</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("img", { required: "Providing the image is mandatory" })}
            type="url"
            placeholder="https://..."
          />
          <small className="text-red-300">{errors?.img?.message}</small>
        </div>

        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe title"
          />
          <small className="text-red-300">{errors?.title?.message}</small>
        </div>

        <div>
          <label className="block text-sm mb-1">Chef</label>
          <input
            className="w-full rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("chef", { required: "Chef name is required" })}
            type="text"
            placeholder="Chef name"
          />
          <small className="text-red-300">{errors?.chef?.message}</small>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Short Description</label>
          <textarea
            placeholder="Enter short description"
            className="w-full min-h-[90px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("desc", { required: "Description is required" })}
          ></textarea>
          <small className="text-red-300">{errors?.desc?.message}</small>
        </div>

        <div>
          <label className="block text-sm mb-1">Ingredients</label>
          <textarea
            placeholder="Write ingredients separated by commas"
            className="w-full min-h-[120px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("ingr", { required: "Ingredients are required" })}
          ></textarea>
          <small className="text-red-300">{errors?.ingr?.message}</small>
        </div>

        <div>
          <label className="block text-sm mb-1">Instructions</label>
          <textarea
            placeholder="Write instructions separated by commas"
            className="w-full min-h-[120px] rounded-lg border border-white/20 bg-white/10 placeholder-white/60 px-3 py-2 outline-none focus:ring-2 focus:ring-white/50"
            {...register("inst", { required: "Instructions are required" })}
          ></textarea>
          <small className="text-red-300">{errors?.inst?.message}</small>
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

        <div className="md:col-span-2 flex justify-end">
          <Button type="submit" variant="primary" size="lg">
            Save Recipe
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Create;

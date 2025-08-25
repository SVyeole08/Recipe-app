import { useForm } from "react-hook-form";

const Create = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form>
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
      <button className="mt-5 block rounded bg-gray-900 px-4 py-2">Save Recipe</button>
    </form>
  );
};

export default Create;

import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, img, chef, desc } = props.recipe;
  return (
    <Link
      to={`/recipes/detail/${id}`}
      className="hover:scale-105 bg-teal-700 rounded-md overflow-hidden z-999 duration-150 transition-all-ease block mr-5 mb-3 w-[21vw]"
    >
      <img className="object-cover w-[30vw] h-[30vh] rounded-lg" src={img} />
      <div className="flex flex-col px-2 items-center justify-center">
        <h1 className="font-black tracking-[0.04em] mt-2">{title}</h1>
        <p className="font-thin text-sm">
          {desc.slice(0, 100)}...
          <small className="text-blue-400">more</small>
        </p>
        <small className="mt-2 text-rose-400 mb-2 font-semibold">{chef}</small>
      </div>
    </Link>
  );
};
export default RecipeCard;

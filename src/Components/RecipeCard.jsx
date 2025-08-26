import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, img, chef, desc, ingr, inst, category } = props.recipe;
  return (
    <Link
      to={`/recipes/detail/${id}`}
      className="hover:scale-105 duration-150 transition-all-ease block mr-5 mb-3 w-[23vw] rounded overflow-hidden"
    >
      <img className="object-cover w-[30vw] h-[30vh]" src={img} alt="" />
      <h1 className="font-black tracking-[0.04em] mt-2">{title}</h1>
      <p className="font-thin text-sm">
        {desc.slice(0, 100)}...
        <small className="text-blue-400">more</small>
      </p>
      {/* <p className="font-thin text-sm mt-2 w-[20vw] ">
        <span className="font-semibold tracking-wide">Ingredients :- </span>
        {ingr}
      </p>
      <p className="font-thin text-sm mt-2 w-[20vw] ">
        <span className="font-semibold tracking-wide">Instructions :- </span>
        {inst}
      </p> */}
      <small className="mt-2 text-orange-500 font-thin">{chef}</small>
    </Link>
  );
};
export default RecipeCard;

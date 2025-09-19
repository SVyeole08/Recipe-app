import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, img, chef, desc } = props.recipe;
  return (
    <Link
      to={`/recipes/detail/${id}`}
      className="group block rounded-xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={img}
          alt={title}
          loading="lazy"
        />
        <span className="absolute top-2 right-2 rounded-md bg-black/40 text-white text-xs px-2 py-1">
          by {chef}
        </span>
      </div>
      <div className="p-3 md:p-4">
        <h2 className="text-lg md:text-xl font-semibold tracking-wide line-clamp-1">{title}</h2>
        <p className="mt-1 text-sm text-white/80 line-clamp-2">
          {desc}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm text-white/90">
          <span className="opacity-80 group-hover:opacity-100 transition-opacity">View details</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h11.69l-3.72-3.72a.75.75 0 011.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06l3.72-3.72H5.25A.75.75 0 014.5 12z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  );
};
export default RecipeCard;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-20 h-[50px] text-lg py-3 mb-10 font-thin">
      <a className="" src="src\Media\Recipe Edge.png"></a>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/Recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/Create"
      >
        Create Recipe
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/Fav"
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navbar;

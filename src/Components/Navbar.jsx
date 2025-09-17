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
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")}
        to="/create"
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;

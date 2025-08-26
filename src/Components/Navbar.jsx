import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-20 text-lg mt-4 mb-10 font-thin">
      <NavLink className={(e) => (e.isActive ? "text-red-300 font-semibold" : "")} to="/">
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

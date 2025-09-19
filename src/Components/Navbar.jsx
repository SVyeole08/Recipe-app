import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClasses =
    "px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/20";
  const activeLinkClasses =
    "bg-white text-blue-600 font-semibold hover:bg-white/90";

  return (
    <nav className="sticky top-0 z-50 w-full mb-10">
      <div className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl">
        <div className="flex items-center justify-between px-4 md:px-6 h-14">
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-blue-600 font-black group-hover:rotate-6 transition-transform">🍽️</span>
            <span className="text-xl font-semibold tracking-wide">Foodie</span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/Recipes"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Recipes
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Fav"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Favourites
            </NavLink>
            <NavLink
              to="/Create"
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : "bg-green-500/20 hover:bg-green-500/30"}`
            }
            >
              Create Recipe
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/Recipes"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Recipes
            </NavLink>
            <NavLink
              to="/About"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Fav"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
            >
              Favourites
            </NavLink>
            <NavLink
              to="/Create"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : "bg-green-500/20 hover:bg-green-500/30"}`
              }
            >
              Create Recipe
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

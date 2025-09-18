import { Route, Routes } from "react-router-dom";
import Recipes from "../Pages/Recipes";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Create from "../Pages/Create";
import SingleRecipe from "../Pages/SingleRecipe";
import Pageerror from "../Pages/Pageerror";
import Fav from "../Pages/Fav";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Recipes/detail/:id" element={<SingleRecipe />} />
        <Route path="/About" element={<About />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Fav" element={<Fav />} />
        <Route path="*" element={<Pageerror />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;

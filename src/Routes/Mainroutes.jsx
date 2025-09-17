import { Route, Routes } from "react-router-dom";
import Recipes from "../Pages/Recipes";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Create from "../Pages/Create";
import SingleRecipe from "../Pages/SingleRecipe";
import Pageerror from "../Pages/Pageerror";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/detail/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Pageerror />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;

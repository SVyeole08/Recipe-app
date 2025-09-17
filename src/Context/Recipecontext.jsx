import { createContext, useEffect, useState } from "react";
export const recipecontext = createContext(null);
const Recipecontext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );  
};

export default Recipecontext;

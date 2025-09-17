import { useEffect } from "react";
import axios from "../Utilities/axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <div>Home</div>
      <button
        onClick={getproduct}
        className="mt-4 block rounded bg-[cornflowerblue] hover:bg-blue-700 px-4 py-2"
      >
        Get Products
      </button>
    </>
  );
};

export default Home;

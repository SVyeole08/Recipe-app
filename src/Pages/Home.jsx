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
      <div>Content is coming soon!!</div>
    </>
  );
};

export default Home;

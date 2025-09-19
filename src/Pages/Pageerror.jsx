import React from "react";
import { useNavigate } from "react-router-dom";

const Pageerror = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-9xl text-red-600 font-black text-center pt-10">
        Page not Found
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="mt-10 bg-teal-500 px-4 py-2 rounded text-[#ff0000] shadow-2xl font-bold text-2xl hover:bg-teal-600"
      >
        Go back to last Page
      </button>
    </div>
  );
};

export default Pageerror;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recipecontext from "./Context/Recipecontext.jsx";

createRoot(document.getElementById("root")).render(
  <Recipecontext>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        className="mt-2"
        toastClassName={() =>
          "relative flex p-4 min-h-[3.5rem] rounded-xl justify-between overflow-hidden cursor-pointer bg-white/10 backdrop-blur border border-white/20 text-white shadow-xl"
        }
        bodyClassName={() => "text-sm leading-relaxed"}
        progressClassName="bg-blue-500"
        closeButton
      />
    </BrowserRouter>
  </Recipecontext>
);
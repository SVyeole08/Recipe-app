import Navbar from "./Components/Navbar";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="overflow-x-hidden  px-[10%] py-10 font-[gilroy] bg-gray-700 text-white font-thin w-screen h-screen p-5">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;

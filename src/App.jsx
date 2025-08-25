import Navbar from "./Components/Navbar";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="px-[10%] py-10 font-[gilroy] bg-gray-700 text-white font-thin w-screen h-screen p-5">
      <Navbar />
      <div>
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;

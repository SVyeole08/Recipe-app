import Navbar from "./Components/Navbar";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <>
      <div className="relative w-screen min-h-screen overflow-x-hidden font-[gilroy] text-white">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-500" aria-hidden="true" />

        {/* Decorative overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(800px circle at 20% 0%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(600px circle at 80% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(700px circle at 50% 100%, rgba(255,255,255,0.2), transparent 40%)",
          }}
        />

        {/* Page shell */}
        <div className="relative px-[6%] py-6 md:py-10">
          <Navbar />

          <main className="mt-6 md:mt-10">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4 md:p-6 shadow-xl shadow-black/20">
              <Mainroutes />
            </div>
          </main>

          <footer className="mt-10 text-center text-white/80 text-sm">
            © {new Date().getFullYear()} Foodie — Discover, cook, and enjoy
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;

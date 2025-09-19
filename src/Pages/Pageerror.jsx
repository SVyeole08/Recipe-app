import React from "react";
import { useNavigate } from "react-router-dom";

const Pageerror = () => {
  const navigate = useNavigate();
  return (
		<div className="min-h-[70vh] flex items-center justify-center px-4">
			<div className="w-full max-w-2xl text-center bg-white/10 backdrop-blur border border-white/20 rounded-2xl shadow-xl p-8 md:p-12">
				<div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white text-blue-600 shadow-md mb-6 md:mb-8">
					<span className="text-4xl md:text-5xl font-black">404</span>
				</div>
				<h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Page not found</h1>
				<p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
					The page you are looking for doesn’t exist or was moved. Check the URL or navigate using the buttons below.
				</p>

				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
					<button
						onClick={() => navigate('/')}
						className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 bg-blue-600 text-white font-medium shadow hover:bg-blue-700 active:bg-blue-800 transition-colors"
					>
						<span className="ri-home-5-line" aria-hidden="true"></span>
						Home
					</button>
					<button
						onClick={() => navigate(-1)}
						className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 bg-white/20 text-white font-medium border border-white/30 hover:bg-white/30 transition-colors"
					>
						<span className="ri-arrow-left-line" aria-hidden="true"></span>
						Go back
					</button>
				</div>
			</div>
		</div>
  );
};

export default Pageerror;

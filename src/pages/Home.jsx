import React from "react";

function Home() {
  return (
    <div
      className="bg-black w-full flex justify-center items-center"
      style={{ height: "70vh" }}
      id="home"
    >
      <div className="w-4/5 lg:w-3/5 ">
        <h1 className="text-7xl lg:text-8xl font-bold text-slate-100">
          Nicolas Vazquez
        </h1>
        <p className="text-3xl text-slate-400 py-4">Full-Stack developer</p>
        <div className="flex gap-6 my-10">
          <a href="mailto:vazquezpizzinicolas@gmail.com" className="px-6 py-4 border-2 border-cyan-300 text-white rounded-md text-2xl hover:border-cyan-500">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

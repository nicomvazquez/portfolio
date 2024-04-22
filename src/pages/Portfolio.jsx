import React from "react";
import { proyects } from "../database/database.js";

import Proyect from "../components/Proyects.jsx";

function Portfolio() {
  const proyectActualice = proyects.reverse();

  return (
    <div className="bg-zinc-950 w-full py-20" id="portfolio">
      <div className="w-4/5 lg:w-3/5 m-auto flex flex-col gap-20">
        <h1 className="text-6xl font-bold text-white">Portfolio</h1>
        <div className="w-full m-auto grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10 justify-items-center text-white">
          {proyectActualice.map((proyect) => (
            <Proyect proyect={proyect} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="stiky t-0 w-full bg-black p-6 text-slate-100 z-10">
      <div className="flex items-center justify-between lg:w-4/5 m-auto">
        <div className="text-6xl font-bold">
          <h1>Nico</h1>
        </div>
        <div className="hidden lg:flex gap-5 text-2xl items-center">
          {/* Esta parte del código se mostrará solo en pantallas de tamaño medio (lg) o más grandes */}
          {/* Puedes agregar tu menú aquí */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:border-b-2 p-3 border-cyan-300"
          >
            Home
          </Link>
          <Link
            to="servicios"
            smooth={true}
            duration={500}
            className="hover:border-b-2 p-3 border-cyan-300"
          >
            servicios
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="hover:border-b-2 p-3 border-cyan-300"
          >
            portfolio
          </Link>
          <Link
            to="contacto"
            smooth={true}
            duration={500}
            className="hover:border-b-2 p-3 border-cyan-300"
          >
            contacto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

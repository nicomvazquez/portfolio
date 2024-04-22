import React from "react";

function Proyects({ proyect }) {
  return (
    <div className="bg-zinc-900 rounded-md text-white">
      <img src={proyect.image} alt="" className="rounded-t-md" />
      <div className="p-6 flex flex-col ">
        <h1 className="text-3xl font-medium text-cyan-300">{proyect.title}</h1>
        <p className="my-5">{proyect.description}</p>
        <div className="flex gap-5">
          {proyect.url ? (
            <a
              href={proyect.url}
              className="py-2 px-3 border-2 border-cyan-300 rounded-md hover:border-cyan-500"
            >
              Vista
            </a>
          ) : (
            <></>
          )}
          <a
            href={proyect.code}
            className="py-2 px-3 border-2 border-cyan-300 rounded-md hover:border-cyan-500"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyects;

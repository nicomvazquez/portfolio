import React from "react";

function Futher() {
  return (
    <div className="bg-zinc-950 w-full" id="contacto">
      <div className="w-4/5 lg:w-3/5 m-auto flex flex-col lg:flex-row justify-between lg:items-center gap-5 py-20">
        <div>
          <h1 className="text-5xl font-semibold text-white">Nicolas Vazquez</h1>
          <p className="text-xl text-slate-400">desarrollador de software</p>
        </div>
        <div className="text-white flex gap-5">
          <a
            href="mailto:vazquezpizzinicolas@gmail.com"
            className="text-xl hover:text-cyan-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-vazquez-2b6812284/"
            className="text-xl hover:text-cyan-300"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/nicomvazquez"
            className="text-xl hover:text-cyan-300"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Futher;

import React from "react";

function InfoCard({title, text}) {
  return (
    <div className="max-w-md bg-zinc-900 p-8 rounded-md flex flex-col gap-7">
      <h1 className="text-4xl text-cyan-300 border-b-2 pb-5 font-semibold">{title}</h1>
      <p className="text-slate-50">{text}</p>
    </div>
  );
}

export default InfoCard;

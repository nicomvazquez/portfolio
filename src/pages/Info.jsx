import React from "react";

import Card from "../components/InfoCard.jsx";

function Info() {
  return (
    <div className="w-full bg-black">
      <div className="w-4/5 lg:w-3/5 flex flex-col gap-20 m-auto pb-24">
        <div className="m-auto grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center">
          <Card
            title="Menor tiempo"
            text="Contamos con el menor tiempo de desarrollo, lo mejor para que nuestros clientes no pierdan su tiempo, lo mas importante que tienen"
          />
          <Card
            title="IA"
            text="Trabajamos con las ultimas tecnologias del mercado, y trabajamos con inteligencia artificial. Fundamental mantenerce actualizados a las ultimas tendencias"
          />
          <Card
            title="Cresimiento asegurado"
            text="Sabemos la importancia de posicionarce en el mercado digital, por eso ofrecemos software de alta calidad para seguir creciendo"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;

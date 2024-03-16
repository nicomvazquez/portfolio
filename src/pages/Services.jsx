import React from "react";

import Card from "../components/InfoCard.jsx";

function Services() {
  return (
    <div className="bg-zinc-950 w-full" id="servicios">
      <div className="w-4/5 lg:w-3/5 flex flex-col gap-20 m-auto py-24">
        <h1 className="text-6xl font-bold text-white">Servicios</h1>
        <div className="w-full m-auto grid grid-cols-1 lg:grid-cols-3 gap-3 pb-10 justify-items-center">
          <Card
            title="Paginas web"
            text="Diceñamos junto a nuestros clientes los sitios web mas competitivos del mercado, fundamental hoy en dia para posicionarce en el mundo digital"
          />
          <Card
            title="App de escritorio"
            text="deseñamos y desarrollamos software a medida para automatizar tareas, mejorar el trato con los clientes, o modernizar mecanismos que ya usas en tu negocio"
          />
          <Card
            title="App moviles"
            text="Desarrollamos aplicaciones moviles, ya sea para brindar una mejor experienca a sus clientes o mejorar el manejo dentro de su empresa"
          />
          <Card
            title="Marketing"
            text="Brindamos acesoramiento sobre marketing digital, creando campañas publicitarias, e implementando mejores estrategias de venta"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;

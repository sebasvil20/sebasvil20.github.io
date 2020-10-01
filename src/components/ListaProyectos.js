import React from "react";
import CardOne from "./projects-cards/CardOne";
import CardTwo from "./projects-cards/CardTwo";

const ListaProyectos = () => {
  const arrProyectos = [
    {
      nombre: "MERNTasks app",
      descripcion:
        "App de seguimiento de proyectos y tareas hecha con el stack MERN. Con posibilidad de login y registro, se manejan sesiones y contextos",
      link: "https://github.com/sebasvil20/MERN-tasks-client-side",
      imagen: "https://i.ibb.co/1MnVLFf/image-6.jpg",
    },
    {
      nombre: "Drink Recipes",
      descripcion:
        "¿Quieres hacer un coctel de alguna bebida en especifico? Puedes buscar cócteles por categorías y se te mostrara los ingredientes y las instrucciones de preparación",
      link: "https://github.com/sebasvil20/react-drink-recipes",
      imagen: "https://i.ibb.co/s9wr43q/image-7.jpg",
    },
    {
      nombre: "Song lyrics And Artist Info",
      descripcion:
        "Consumiendo dos APIs al tiempo, la app es capaz de mostrarte la letra de la canción que busques, y te agrega información del artista como la foto y biografía",
      link: "https://github.com/sebasvil20/React-lyrics-Artist-Info",
      imagen: "https://i.ibb.co/NxS9qMY/image-8.jpg",
    },
  ];
  const arrProyectos2 = [
    {
      nombre: "Beer API",
      descripcion:
        "Practica de desarrollo de APIs, contiene varios endpoints que brindan información sobre cervezas",
      link: "https://github.com/sebasvil20/api-nodejs-mongodb",
    },
    {
      nombre: "Da Vinci Da Game",
      descripcion:
        "Proyecto hecho para una competición local de desarrollo de videojuegos con la tematica de Leonardo DaVinci. Ganador de Retos EIA 2019",
      link: "https://github.com/sebasvil20/Da-Vinci-Da-Game",
    },
    {
      nombre: "Cotizador de criptomonedas",
      descripcion:
        "Cotizador de criptomonedas en tiempo real, soporta varias de las monedas mas famosas actualmente como: Bitcoin, Etherum, etc.",
      link: "https://github.com/sebasvil20/cotizador-criptomonedas",
    },
  ];
  return (
    <section className="text-center py-6 -mt-12">
      {/* Inicio primera lista de proyectos */}
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-4xl text-xl font-quicksand font-semibold text-white mb-4 z-50">
          Proyectos
        </h1>
        <p className="lg:w-2/3 mx-auto font-nunito text-lg font-medium text-magnolia leading-relaxed text-base px-6">
          Todos mis proyectos estan publicos en mi perfil de Github <br />
          Pero aqui te muestro los que mas me gustan &#128515;
        </p>
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {arrProyectos.map((proyecto) => (
            <CardOne
              key={proyecto.nombre}
              titulo={proyecto.nombre}
              descripcion={proyecto.descripcion}
              imagen={proyecto.imagen}
              link={proyecto.link}
            />
          ))}
        </div>
      </div>
      {/* Fin primera lista de proyectos */}

      <div className="container px-6 md:-mt-2 mx-auto">
        <div className="flex flex-wrap md:-m-6 -m-2">
          {/* Inicio segunda lista de proyectos */}
          {arrProyectos2.map((proyecto) => (
            <CardTwo
              key={proyecto.nombre}
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              link={proyecto.link}
            />
          ))}
          {/* Fin segunda lista de proyectos */}
        </div>
      </div>
    </section>
  );
};

export default ListaProyectos;

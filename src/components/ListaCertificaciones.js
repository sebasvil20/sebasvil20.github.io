import React, { useState } from "react";
import Certificacion from "./Certificacion";

const ListaCertificaciones = () => {
  const [mas, guardarMas] = useState(false);
  const [diplomas, guardarDiplomas] = useState([
    {
      id: 0,
      titulo: "Desarrollador Front End",
      subtitulo: "Capacítate para el empleo",
      diploma: "https://i.ibb.co/LShtTS1/front-end.png",
      link: "https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=6726",
    },
    {
      id: 1,
      titulo: "Desarrollo Web Online",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/ZhX30Pk/webdevelopment.png",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1350-html5-css3/diploma/detalle/",
    },
    {
      id: 2,
      titulo: "Bootstrap",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/JHdqrmc/bootstrap.png",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1331-bootstrap/diploma/detalle/",
    },
    {
      id: 3,
      titulo: "Php course",
      subtitulo: "Solo Learn",
      diploma: "https://i.ibb.co/zP3693y/php.jpg",
      link: "https://www.sololearn.com/Profile/11431813/PHP",
    },
    {
      id: 4,
      titulo: "Python",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/NyYYc7G/python.png",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1104-python-2017/diploma/detalle/",
    },
    {
      id: 5,
      titulo: "Algoritmos con C",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/PYprDsx/algoritmos-C.png",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1189-algoritmos-2017/diploma/detalle/",
    },
  ]);

  const mostrarMas = () => {
    guardarDiplomas([
      {
        id: 0,
        titulo: "Desarrollador Front End",
        subtitulo: "Capacítate para el empleo",
        diploma: "https://i.ibb.co/LShtTS1/front-end.png",
        link: "https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=6726",
      },
      {
        id: 1,
        titulo: "Desarrollo Web Online",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/ZhX30Pk/webdevelopment.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1350-html5-css3/diploma/detalle/",
      },
      {
        id: 2,
        titulo: "Bootstrap",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/JHdqrmc/bootstrap.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1331-bootstrap/diploma/detalle/",
      },
      {
        id: 3,
        titulo: "Php course",
        subtitulo: "Solo Learn",
        diploma: "https://i.ibb.co/zP3693y/php.jpg",
        link: "https://www.sololearn.com/Profile/11431813/PHP",
      },
      {
        id: 4,
        titulo: "Python",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/NyYYc7G/python.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1104-python-2017/diploma/detalle/",
      },
      {
        id: 5,
        titulo: "Algoritmos con C",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/PYprDsx/algoritmos-C.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1189-algoritmos-2017/diploma/detalle/",
      },
      {
        id: 6,
        titulo: "Seguridad Informática",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/R4bL3Mf/seguridad.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1081-seguridad-informatica-2017/diploma/detalle/",
      },
      {
        id: 7,
        titulo: "Terminal y linea de comandos",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/TrVfDRF/terminal.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1276-terminal/diploma/detalle/",
      },
      {
        id: 8,
        titulo: "Ruta de aprendizaje: BlocKChain Y Criptomonedas",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/1LzX4K3/blockchain.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/ruta/39-blockchain-criptomonedas/diploma/detalle/",
      },
      {
        id: 9,
        titulo: "Fundamentos de la Ingeniería de software",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/Br4Hj4d/ingenieria.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1098-ingenieria/diploma/detalle/",
      },
    ]);
    guardarMas(true);
  };

  const mostrarMenos = () => {
    guardarDiplomas([
      {
        id: 0,
        titulo: "Desarrollador Front End",
        subtitulo: "Capacítate para el empleo",
        diploma: "https://i.ibb.co/LShtTS1/front-end.png",
        link: "https://capacitateparaelempleo.org/pages.php?r=.tema&tagID=6726",
      },
      {
        id: 1,
        titulo: "Desarrollo Web Online",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/ZhX30Pk/webdevelopment.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1350-html5-css3/diploma/detalle/",
      },
      {
        id: 2,
        titulo: "Bootstrap",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/JHdqrmc/bootstrap.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1331-bootstrap/diploma/detalle/",
      },
      {
        id: 3,
        titulo: "Php course",
        subtitulo: "Solo Learn",
        diploma: "https://i.ibb.co/zP3693y/php.jpg",
        link: "https://www.sololearn.com/Profile/11431813/PHP",
      },
      {
        id: 4,
        titulo: "Python",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/NyYYc7G/python.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1104-python-2017/diploma/detalle/",
      },
      {
        id: 5,
        titulo: "Algoritmos con C",
        subtitulo: "Platzi",
        diploma: "https://i.ibb.co/PYprDsx/algoritmos-C.png",
        link:
          "https://platzi.com/@Sebastian_Villegas_/curso/1189-algoritmos-2017/diploma/detalle/",
      },
    ]);
    guardarMas(false);
  };

  return (
    <section className="flex-col items-center content-around justify-content-center">
      <div className="container px-5 py-24 mx-auto z-50">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-xl  font-quicksand font-semibold text-white mb-4 z-50">
            Certificaciones
          </h1>
          <p className="lg:w-2/3 mx-auto font-nunito text-lg font-medium text-magnolia leading-relaxed text-base">
            Todo el tiempo estoy aprendiendo, cada vez hago mas cursos,
            tecnicas, etc. <br />
            Aca estan listados algunos de mis certificados.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {diplomas.map((diploma) => (
            <Certificacion
              key={diploma.id}
              titulo={diploma.titulo}
              subtitulo={diploma.subtitulo}
              diploma={diploma.diploma}
              link={diploma.link}
            />
          ))}
        </div>
        <div className="flex flex-wrap m-6">
          {mas ? (
            <button
              onClick={mostrarMenos}
              className="block bg-magnolia zman mx-auto hover:bg-cerise hover:text-white text-blackchocolate font-nunito font-bold py-2 mt-6 px-4 rounded z-50 transition duration-75 ease-in-out"
            >
              Mostrar Menos
            </button>
          ) : (
              <button
                onClick={mostrarMas}
                className="block bg-magnolia zman mx-auto hover:bg-cerise hover:text-white text-blackchocolate font-nunito font-bold py-2 mt-6 px-4 rounded z-50 transition duration-75 ease-in-out"
              >
                Mostrar Más
              </button>
            )}
        </div>
      </div>
    </section>
  );
};

export default ListaCertificaciones;

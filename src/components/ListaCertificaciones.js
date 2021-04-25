import React, { useState } from "react";
import Certificacion from "./Certificacion";

const ListaCertificaciones = () => {
  const arrdiplomas = [
    {
      id: 0,
      titulo: "Desarrollo Web I (40h)",
      subtitulo: "Google Actívate",
      diploma: "https://i.ibb.co/bmzBk24/Desarrollo-web-I.jpg",
      link: "https://docdro.id/stoQEXP",
    },
    {
      id: 1,
      titulo: "Desarrollador Front End",
      subtitulo: "Capacítate para el empleo",
      diploma: "https://i.ibb.co/LZqGYTD/sv-desarrolladorfrontend-cpe.jpg",
      link: "https://capacitateparaelempleo.org/verifica/4mv7o0tbb/",
    },
    {
      id: 2,
      titulo: "Desarrollo Web Online",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/854ztyh/sv-desarrolloweb-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1350-html5-css3/diploma/detalle/",
    },
    {
      id: 3,
      titulo: "Bootstrap",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/k32qn8C/sv-bootstrap-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1331-bootstrap/diploma/detalle/",
    },
    {
      id: 4,
      titulo: "Php course",
      subtitulo: "Solo Learn",
      diploma: "https://i.ibb.co/j45JWWk/sv-php-sololearn.jpg",
      link: "https://www.sololearn.com/Profile/11431813/PHP",
    },
    {
      id: 5,
      titulo: "Python",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/StRrxBy/sv-python-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1104-python-2017/diploma/detalle/",
    },
    {
      id: 6,
      titulo: "Algoritmos con C",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/QjTF1PF/sv-algoritmosc-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1189-algoritmos-2017/diploma/detalle/",
    },
    {
      id: 7,
      titulo: "Seguridad Informática",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/TvtDWxW/sv-seguridad-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1081-seguridad-informatica-2017/diploma/detalle/",
    },
    {
      id: 8,
      titulo: "Terminal y linea de comandos",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/ss2GKzP/sv-terminal-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1276-terminal/diploma/detalle/",
    },
    {
      id: 9,
      titulo: "Ruta de aprendizaje: BlocKChain Y Criptomonedas",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/dbctn7m/sv-blockchain-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/ruta/39-blockchain-criptomonedas/diploma/detalle/",
    },
    {
      id: 10,
      titulo: "Fundamentos de la Ingeniería de software",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/8j7b5Zv/sv-introingenieria-platzi.jpg",
      link:
        "https://platzi.com/@Sebastian_Villegas_/curso/1098-ingenieria/diploma/detalle/",
    },
    {
      id: 11,
      titulo: "Python by HackerRank",
      subtitulo: "HackerRank",
      diploma: "https://i.ibb.co/V2NJg5m/sv-python-hackerrank.jpg",
      link: "https://www.hackerrank.com/certificates/6e67cdd834fc",
    },
    {
      id: 12,
      titulo: "Curador de datos",
      subtitulo: "Capacitate para el empleo",
      diploma: "https://i.ibb.co/WzrWgrF/sv-curadordatos-cpe.jpg",
      link: "https://capacitateparaelempleo.org/verifica/0c1mfq86v/",
    },
    {
      id: 13,
      titulo: "Administrador de bases de datos",
      subtitulo: "Platzi",
      diploma: "https://i.ibb.co/ByPGgXk/sv-adminbasesdatos-cpe.jpg",
      link: "https://capacitateparaelempleo.org/verifica/slfk6i60m/",
    },
  ];

  const [mas, guardarMas] = useState(1);
  const [diplomas, guardarDiplomas] = useState(arrdiplomas.slice(0, 4));

  const mostrarMas = () => {
    if (mas === 1) {
      guardarDiplomas(arrdiplomas.slice(0, 8));
      guardarMas(2);
    } else if (mas === 2) {
      guardarDiplomas(arrdiplomas.slice(0, 12));
      guardarMas(3);
    } else if (mas === 3) {
      guardarDiplomas(arrdiplomas.slice(0, 14));
      guardarMas(4);
    }
  };

  const mostrarMenos = () => {
    buscarCertifiaciones();
    setTimeout(() => {
      guardarDiplomas(arrdiplomas.slice(0, 4));
      guardarMas(1);
    }, 200);
  };

  const buscarCertifiaciones = () => {
    const certificaciones = document.querySelector(".certiSelector");
    certificaciones.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex-col items-center content-around justify-content-center" id="certificaciones">
      <div className="container px-5 py-24 mx-auto z-50 ">
        <div className="flex flex-col text-center w-full mb-20 certiSelector">
          <h1 className="sm:text-4xl text-xl  font-quicksand font-semibold text-white mb-4 z-50">
            Certificaciones
          </h1>
          <p className="lg:w-2/3 mx-auto font-nunito text-lg font-medium text-magnolia leading-relaxed text-base">
            Todo el tiempo estoy aprendiendo, cada vez hago mas cursos,
            tecnicas, etc. <br />
            Aca estan listados algunos de mis certificados.
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -m-12 justify-center">
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
          {mas === 4 ? (
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

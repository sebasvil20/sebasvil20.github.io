import React from "react";
import ListaLogos from "./ListaLogos";
import githubLogo from "../Images/github72.ico";
import fotoPersonal from "../Images/fpersonal.png";
import reactlogo from "../Images/reactjs.png";
import nodejsLogo from "../Images/NodeJs.png";
import pythonLogo from "../Images/python.png";
import htmlLogo from "../Images/html592.ico";
import mysqlLogo from "../Images/mysql.png";
import gitLogo from "../Images/git.png";
import cssLogo from "../Images/css396.ico";
import jsLogo from "../Images/js96.ico";

const Hero = () => {
  const buscarCertifiaciones = () => {
    const certificaciones = document.querySelector(".certiSelector");
    certificaciones.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <div className="container mx-auto flex px-5 sm:py-12 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 sm:w-3/6 w-4/6 object-cover object-center mb-2 sm:mb-8 z-50"
          alt="hero"
          src={fotoPersonal}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-4xl text-3xl font-quicksand font-semibold text-white mb-2 z-50">
            Sebastián Villegas
          </h1>
          <p className="leading-relaxed text-lg sm:text-xl text-alabaster z-50">
            Estudiante de Ingeniería Informática
          </p>
          <p className="leading-relaxed text-lg sm:text-xl mb-8 text-alabaster z-50">
            Amante de la programación web y de escritorio
          </p>
          <div className="flex justify-center align-center mb-4 sm:mb-12 flex-wrap  z-50">
            <ListaLogos imagen={reactlogo} />
            <ListaLogos imagen={nodejsLogo} />
            <ListaLogos imagen={htmlLogo} />
            <ListaLogos imagen={cssLogo} />
            <ListaLogos imagen={jsLogo} />
            <ListaLogos imagen={mysqlLogo} />
            <ListaLogos imagen={pythonLogo} />
            <ListaLogos imagen={gitLogo} />
            <ListaLogos imagen={githubLogo} />
          </div>
          <div className="flex justify-center h-16 z-50 ">
            <button
              className="inline-flex text-white border-0 py-2 sm:mb-4 px-6 focus:outline-none cursor-pointer"
              onClick={buscarCertifiaciones}
            >
              <span id="animacionFlecha">
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 66 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.3359 0.503849C62.7145 -0.415208 64.5771 -0.0426867 65.4962 1.3359C66.4152 2.71449 66.0427 4.57709 64.6641 5.49615L61.3359 0.503849ZM34.6641 25.4962C33.2855 26.4152 31.4229 26.0427 30.5038 24.6641C29.5848 23.2855 29.9573 21.4229 31.3359 20.5038L34.6641 25.4962ZM64.6641 5.49615L34.6641 25.4962L31.3359 20.5038L61.3359 0.503849L64.6641 5.49615Z"
                    fill="white"
                  />
                  <path
                    d="M4.6641 0.503849C3.28551 -0.415208 1.42291 -0.0426867 0.503849 1.3359C-0.415208 2.71449 -0.0426867 4.57709 1.3359 5.49615L4.6641 0.503849ZM31.3359 25.4962C32.7145 26.4152 34.5771 26.0427 35.4962 24.6641C36.4152 23.2855 36.0427 21.4229 34.6641 20.5038L31.3359 25.4962ZM1.3359 5.49615L31.3359 25.4962L34.6641 20.5038L4.6641 0.503849L1.3359 5.49615Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

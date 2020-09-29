import React from "react";
import Certificacion from "./Certificacion";

const ListaCertificaciones = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-xl  font-quicksand font-semibold text-white mb-4">
            Certificaciones
          </h1>
          <p className="lg:w-2/3 mx-auto font-nunito text-lg font-medium text-magnolia leading-relaxed text-base">
            Todo el tiempo estoy aprendiendo, cada vez hago mas cursos,
            tecnicas, etc. <br />
            Aca estan listados algunos de mis certificados.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
          <Certificacion
            titulo="Hola prueba"
            subtitulo="Sub prueba"
            descripcion="Desc Prueba"
          />
        </div>
      </div>
    </section>
  );
};

export default ListaCertificaciones;

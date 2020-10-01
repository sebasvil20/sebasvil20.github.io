import React from "react";

const CardOne = ({ imagen, titulo, descripcion, link }) => {
  return (
    <div className="p-4 lg:w-1/3 z-50 text-royalbluedark">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden  bg-magnolia">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imagen}
          alt="imagen-proyecto"
        />
        <div className="p-6">
          <h1 className="font-quicksand text-xl font-semibold mb-3">
            {titulo}
          </h1>
          <p className="leading-relaxed text-gray-800 mb-3">{descripcion}</p>
          <div className="flex items-center justify-end flex-wrap">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-royalbluedark mt-2 md:mb-2 lg:mb-0"
            >
              Ver en GitHub &#x21E2;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

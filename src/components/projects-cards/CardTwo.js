import React from "react";

const CardTwo = ({ nombre, descripcion, link }) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-200 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
        <h1 className="font-quicksand sm:text-2xl text-xl font-bold md:font-medium text-blackchocolate mb-3">
          {nombre}
        </h1>
        <p className="leading-relaxed mb-3 text-gray-800">{descripcion}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-royalbluedark inline-flex items-center"
        >
          Ver en GitHub ⇢
        </a>
      </div>
    </div>
  );
};

export default CardTwo;

import React from "react";

const Certificacion = ({ titulo, subtitulo, diploma, link }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 diplomas mb-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center diplomas"
          src={diploma}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition delay-75 duration-100 ease diplomas flex-col content-center items-center">
          <h2 className="tracking-widest text-sm mt-6 font-nunito font-light text-royalbluedark mb-1">
            {subtitulo}
          </h2>
          <h1 className="font-nunito text-lg font-medium text-blackchocolate mb-3">
            {titulo}
          </h1>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-blackchocolate font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-xl py-2 px-6 inline-flex items-center transition duration-100 ease-in-out">
              <span className="mr-2">Ver certificacion</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentcolor"
                  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificacion;

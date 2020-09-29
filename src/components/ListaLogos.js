import React from "react";

const ListaLogos = ({ imagen }) => {
  return (
    <div className="imagen-tecnologias ml-2 flex justify-center align-center z-50 ">
      <img src={imagen} alt="Logo" className=" z-50 imagen-tecnologias" />
    </div>
  );
};

export default ListaLogos;

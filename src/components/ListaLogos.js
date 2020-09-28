import React from "react";

const ListaLogos = ({ imagen }) => {
  return (
    <div className="w-12 ml-2 flex justify-center align-center z-50">
      <img src={imagen} alt="Logo react" className="w-full" />
    </div>
  );
};

export default ListaLogos;

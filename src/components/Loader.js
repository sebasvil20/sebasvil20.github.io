import React from "react";

const Loader = () => {
  return (
    <div className="fixed w-screen loading">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
};

export default Loader;

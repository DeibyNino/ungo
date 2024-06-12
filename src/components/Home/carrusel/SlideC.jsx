// SLIDE SEDES //

import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SlideC = () => {
  const navigate = useNavigate();
  return (
    <div className="content-slideC">
      <div className="info-slideC">
        <h1> Descubre Donde Se Encuentran Nuestras Instalaciones</h1>

        <button
          className="button-slideC"
          onClick={() => navigate("/sedes-page")}
        >
          {" "}
          Instalaciones Educativas{" "}
        </button>
      </div>
    </div>
  );
};

export default SlideC;

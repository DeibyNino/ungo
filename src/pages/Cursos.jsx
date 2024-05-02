import React from "react";
import CabeceraCursos from "../components/Cursos/CabeceraCursos";

import "../styles/CursosStyles.css";
import NuestrosCursos from "../components/Cursos/NuestrosCursos";

const Cursos = () => {
  return (
    <div>
      <CabeceraCursos />
      <NuestrosCursos />
    </div>
  );
};

export default Cursos;

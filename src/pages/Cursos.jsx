import React from "react";
import CabeceraCursos from "../components/Cursos/CabeceraCursos";

import "../styles/CursosStyles.css";
import NuestrosCursos from "../components/Cursos/NuestrosCursos";
import Sistemas from "../components/Cursos/Sistemas";

const Cursos = () => {
  return (
    <div>
      <CabeceraCursos />
      <NuestrosCursos />
      <Sistemas />
    </div>
  );
};

export default Cursos;

import React from "react";
import cursosArray from "../../assets/cursos";

const NuestrosCursos = () => {
  console.log(cursosArray);
  return (
    <div className="curso-cards">
      {cursosArray.map((curso) => (
        <div className="curso-card">
          <img src={curso.imagen} height="200" alt={curso.titulo} />
          <h2>{curso.titulo}</h2>
          <p>{curso.descripcion}</p>
          <h3>{curso.sedes}</h3>
        </div>
      ))}
    </div>
  );
};

export default NuestrosCursos;

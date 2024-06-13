import React from "react";

const SedesCard = ({ sede }) => {
  const { titulo, imagen, horarios, direccion, cursos, telefono } = sede;
  return (
    <div className=" border rounded-lg shadow-lg">
      <img
        src={imagen}
        alt="Sede"
        className="w-full h-1/3 object-cover rounded-t-lg shadow-sm"
      />
      <div className="p-4 ">
        <h2 className="text-xl font-bold">{titulo}</h2>
        <p className="text-sm mt-2 font-bold">
          Telefono:<span className="ml-2 font-normal">{telefono}</span>
        </p>
        <p className="text-sm mt-2 font-bold">
          Direccion:<span className="ml-2 font-normal">{direccion}</span>
        </p>
        <p className="text-sm mt-2 font-bold">Cursos:</p>
        {cursos.map((curso, index) => (
          <li key={index} className="text-sm mt-2 ml-2 font-normal">
            {curso}
          </li>
        ))}

        <p className="text-sm mt-2 font-bold">Horarios:</p>
        {horarios.map((horario, index) => (
          <li key={index} className="text-sm mt-2 ml-2 font-normal">
            {horario}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SedesCard;

import React from "react";
import DonacionesComponent from "../components/Donaciones/DonacionesComponent";

const Sedes = () => {
  return (
    <div>
      <h1>Sedes</h1>
      {/* realiza una descripcion fake de sedes educativas con imagenes y texto */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum, sapien ac ultrices ultricies, lorem nunc eleifend elit, nec
        facilisis eros ligula nec nunc. Nullam nec nunc nec nunc ultricies
        ultricies. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc
      </p>
      <DonacionesComponent />
    </div>
  );
};

export default Sedes;

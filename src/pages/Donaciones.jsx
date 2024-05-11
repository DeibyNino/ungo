import React from "react";
import "../styles/DonacionesStyles.css";
import DonacionesComponent from "../components/Donaciones/DonacionesComponent";

const Donaciones = () => {
  return (
    <div className="mainDonaciones">
      {/* <h1>Donaciones</h1> */}
      {/* <p> */}
      {/* La Fundación UNGO “estudia bien” tiene como misión el desarrollo de */}
      {/* proyectos educativos, culturales y empresariales en Colombia, con */}
      {/* metodologías de aprendizaje que permitirá la formación de jóvenes y */}
      {/* adultos íntegros, autónomos con valores y principios para la formación */}
      {/* de una mejor sociedad. */}
      {/* </p> */}
      <DonacionesComponent />
    </div>
  );
};

export default Donaciones;

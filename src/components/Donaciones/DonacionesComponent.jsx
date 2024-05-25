import React from "react";
import ungo from "../../assets/images/Donaciones/ungo.png"



const DonacionesComponent = () => {
  return (
    <div class="donaciones-rolito">
      <div class="imagen-ungo">
        <img src={ungo} alt="" />
      </div>
      <div className="title-donaciones">
        <h1>Donaciones </h1>
      </div>
      <div className="introduccion">
      <p>
        La Fundación UNGO “estudia bien” tiene como misión el desarrollo de
        proyectos educativos, culturales y empresariales en Colombia, con
        metodologías de aprendizaje que permitirá la formación de jóvenes y
        adultos íntegros, autónomos con valores y principios para la formación
        de una mejor sociedad.
      </p>
      </div>
      <div className="subtitulo">
        <h1>Contactanos si deseas realizar tu aporte</h1>
      </div>

      <div className="form-donaciones">

        <div class="input-box">
          <label>Email:</label>
          <input type="gmail" placeholder="gmail" required />
        </div>
        <div class="input-box">
          <label>Password</label>
          <input type="password" placeholder="password" required />
        </div>
        <div class="entrada-chack">
          <input type="checkbox" />
          <label for="aceptar"> aceptar condicones </label>
        </div>
        <div class="donacion">
          <button> donar -</button>
        </div>
      </div>
    </div>
  );
};

export default DonacionesComponent;

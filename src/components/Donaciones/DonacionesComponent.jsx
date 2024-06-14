import React from "react";
import Logo from "../../assets/images/Donaciones/ungo.png"
import roloimg from "../../assets/images/Donaciones/jjj.jpeg"
import { SiGmail } from "react-icons/si";
import { TbPasswordUser } from "react-icons/tb";


const DonacionesComponent = () => {
  return (

    <div class="donaciones-rolito">
      <div class="imagen-ungo">
        <img src={Logo} className="ungo1" />{""}
      </div>

      <div className="rolo1">
      <img src={roloimg} className="rolo01" />{""}
      <h1> con tu  ayuda podras ayudar a los integrantes de esta familia </h1>
      <p>
      Estudia con una metodología  de aprendizaje que permite la formación de jóvenes y adultos íntegros, autónomos con valores y principios para la constitución de una mejor sociedad.  
      </p>
      <button className="button-rolo1"> !DONACIONES DISPONIBLES¡ </button>
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
<div
style={{width:"100%",
display:"flex",
justifyContent:"center"}}
>

      <div className="form-donaciones">

        <div class="input-box">
          <SiGmail size={30} className="gmail"/>
          <label><strong>Gmail:</strong></label>
          <input type="gmail" placeholder="gmail" required />
        </div>
        <div class="input-box">
          <TbPasswordUser size={30} className="password"/>
          <label><strong>Password:</strong></label>
          <input type="password" placeholder="password" required />
        </div>
        <div class="entrada-chack">
          <input type="checkbox" />
          <label for="aceptar"> aceptar condicones </label>
        </div>
        <div class="donacion">
          <button> donar </button>
        </div>
        <Link to="/contact">Ir a contacto</Link>
</div>
      </div>
    </div>
  );
};

export default DonacionesComponent;

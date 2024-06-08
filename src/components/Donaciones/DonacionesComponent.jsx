import React from "react";
import rolito from "../../assets/images/Donaciones/ungo.png"
import rolito from "../../assets/images/Donaciones/jjj.jpeg"
import rolito from "../../assets/images/Donaciones/ppp.jpeg"
import rolito from "../../assets/images/Donaciones/cl.jpeg"
import rolito from "../../assets/images/Donaciones/seguridad.jpeg"
import rolito from "../../assets/images/Donaciones/silla.jpeg"



const DonacionesComponent = () => {
  return (
    <div class="donaciones-rolito">
      <div class="imagen-ungo">
        <img src={rolito} className="ungo1" />{""}
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
          <button> donar </button>
        </div>
        <div className="slider-box">
          <ul>
            <li>
              <img src="cl.jpeg" alt="" />
              <div className="textoc">
                <h2>Imagen 1</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident, impedit, perferendis v
                  eritatis dolorum necessitatibus consequuntur dicta mollitia id, nisi cupiditate porro reiciendis recusandae u
                  t aspernatur aliquam voluptas. Culpa, aperiam.
                </p>
              </div>
            </li>
            <li>
              <img src="jjj.jpeg" alt="" />
              <div className="textoc">
                <h2>Imagen 2</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident, impedit, perferendis v
                  eritatis dolorum necessitatibus consequuntur dicta mollitia id, nisi cupiditate porro reiciendis recusandae u
                  t aspernatur aliquam voluptas. Culpa, aperiam.
                </p>
              </div>
            </li>
            <li>
              <img src="ppp.jpeg" alt="" />
              <div className="textoc">
                <h2>Imagen 3</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident, impedit, perferendis v
                  eritatis dolorum necessitatibus consequuntur dicta mollitia id, nisi cupiditate porro reiciendis recusandae u
                  t aspernatur aliquam voluptas. Culpa, aperiam.
                </p>
              </div>
            </li>
            <li>
              <img src="seguridad.jpeg" alt="" />
              <div className="textoc">
                <h2>Imagen 4</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident, impedit, perferendis v
                  eritatis dolorum necessitatibus consequuntur dicta mollitia id, nisi cupiditate porro reiciendis recusandae u
                  t aspernatur aliquam voluptas. Culpa, aperiam.
                </p>
              </div>
            </li>
            <li>
              <img src="silla.jpeg" alt="" />
              <div className="textoc">
                <h2>Imagen 5</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum provident, impedit, perferendis v
                  eritatis dolorum necessitatibus consequuntur dicta mollitia id, nisi cupiditate porro reiciendis recusandae u
                  t aspernatur aliquam voluptas. Culpa, aperiam.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonacionesComponent;

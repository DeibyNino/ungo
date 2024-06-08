

// CONFIGURACIÓN FOOTER HOME */

import React from 'react'
import LogoFooter from "../../../assets/images/home/logoungo.png";

const FooterHome = () => {
  return (
    <footer className='section-footerHome'>
     
     <div className='grupo-1'>
     <div className='box-footer'>
     <figure>
      <a href='#'>
      <img src={LogoFooter} className='' /> {""}
      </a>
     </figure>
     </div>


     <div className='box-description-footer'>
     <h2>Sobre Nosotros</h2>
     <p>La Fundación Ungo “estudia bien” tiene como misión el desarrollo de proyectos educativos culturales y empresariales en Colombia.</p>
     <p>Metodología de aprendizaje que permite la formación de jóvenes y adultos íntegros, 
      autónomos con valores y principios para la constitución de una mejor sociedad.</p>
    </div>

     
     <div className='box-contactos-footer'>
     <h2>Contactos</h2>
     <p>Institucional: +57 316 0472448</p>
     <p>Moniquirá: +57 318 5233294 </p>
     <p>Ubaté: +57 318 6320411</p>
     <p>Togüí: +57 316 0472448</p>
     <p>Bogotá: +57 316 0519106</p>
     <p>Chía: +57 316 0519056</p>
     </div>
     </div>
    

     {/* <div className='grupo-2'>
     <small> © 2021 <b>UNGO</b> - Todos los Derechos Reservados</small>
     </div> */}

    </footer>
  )
}

export default FooterHome
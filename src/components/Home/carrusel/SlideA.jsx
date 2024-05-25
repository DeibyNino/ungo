// SLIDE ABOUT - HOME //

import React from 'react'
import LogoUngo from "../../../assets/images/home/logoungo.png"


const SlideA = () => {
  return (
    <div className='wrapper-slideA'>
    <img src={LogoUngo} className='logo-slideA'/> {""}
    
    <div className='box-title-slideA'>
      <h1>Forma Parte del Futuro Académico con Nosotros </h1>

      <p>
      Aprovecha esta oportunidad para estudiar y prepararse para el mañana 
      ven y estudia ya con nosotros.
      </p>

      <div>
      <button className='button-slideA'>Nuestra Misión </button>

      </div>
    </div>
    
    </div>
  )
}

export default SlideA
// SLIDE ABOUT - HOME //

import React from 'react'
import LogoUngo from "../../../assets/images/home/logoungo.png"
import {useNavigate} from "react-router-dom"


const SlideA = () => {
  const navigate = useNavigate()

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
      <button className='button-slideA'
      onClick={()=>navigate("/about-page")}
      >Nuestra Misión </button>

      </div>
    </div>
    
    </div>
  )
}

export default SlideA
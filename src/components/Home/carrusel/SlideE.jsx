// SLIDE CONTACTOS //

import React from 'react'
import { useNavigate } from 'react-router-dom'

const SlideE = () => {
  const navigate = useNavigate()
  return (
    <main className='slideE-content'>

    <div className='info-slideE'>

    <h1> Comuníquese con Nosotros</h1>

    <button className='button-slideB'
    onClick={()=>navigate("/contact-page")}
    >Más Información Aquí</button>
    
    </div>

    </main>
  )
}

export default SlideE

// CONFIGURACIÓN SEDES HOME //

import React from 'react'
import { useNavigate } from 'react-router-dom'


const SedesHome = () => {
  const navigate = useNavigate()
  return (
    <div className='section-home-sedes'>

    <div className='info-sedeshome'>

    <h1>Conoce Nuestra Sedes</h1>

    <button
    onClick={()=>navigate("/sedes-page")}
    > Instalaciones Educativas  </button>

    </div>
    
    </div>
  )
}

export default SedesHome
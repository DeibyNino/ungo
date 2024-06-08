// SLIDE CURSOS //

import React from 'react'
import { useNavigate } from 'react-router-dom'

const SlideB = () => {
  const navigate = useNavigate()


  return (
   
  <main className='swiper-slideB-content'>
   
  <div className='info-slideB'>
  <h1> Capacitate como Técnico Laboral </h1>
  <p>
  Estudia con una metodología  de aprendizaje que permite la formación de jóvenes y adultos íntegros, autónomos con valores y principios para la constitución de una mejor sociedad.
  </p>
  <button className='button-slideB'
  onClick={()=>navigate("/cursos-page")}
  > Cursos Disponibles </button>
  </div>

  </main>
  )
}

export default SlideB
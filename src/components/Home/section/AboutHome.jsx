
// CONFIGURACIÓN ABOUT HOME //

import React from 'react'
import AboutImage from "../../../assets/images/home/logo2ungo.png"
import { useNavigate } from 'react-router-dom'

const AboutHome = () => {
  const navigate = useNavigate()
  return (
    <div className='section-home-about'>
 
    <div className='main-sectionabout-home'>
    <img src={AboutImage} className='image-section-abouthome'/> {""}
    <div className='about-texthome'>
    <h1>Fundación Educativa Ungo</h1>
    <h4> Estudia Bien </h4>
    <p>
    Metodología de aprendizaje que permite la formación de jóvenes y adultos íntegros, 
    autónomos con valores y principios para la constitución de una mejor sociedad.
    </p>

    <button className='button-sectionabout-home'
    onClick={()=>navigate("/about-page")}
    >Conoce Más </button>
    </div>
    </div>

    </div>
  )
}

export default AboutHome
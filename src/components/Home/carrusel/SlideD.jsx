// SLIDE DONACIONES //

import React from 'react'
import ImageDonaciones from "../../../assets/images/home/donacionesungo.jpg";


const SlideD = () => {
  return (
    <div className='wrapper-slideD'>
    <img src={ImageDonaciones} className='image-slideD'/> {""}
     <div className='box-info-slideD'>

     <h1> Colabora Cambiando Vidas </h1>

     <p>
     El objetivo de la educación es la virtud y el deseo de convertirse en un buen ciudadano 
     </p>


     <div>
     <button className='button-slideD'> Es Tu Momento </button>
     </div>

     </div>

    </div>
  )
}

export default SlideD
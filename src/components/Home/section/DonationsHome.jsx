
// CONFIGURACIÓN DONACIONES HOME //

import React from 'react'
import { useNavigate } from 'react-router-dom'

const DonationsHome = () => {
  const navigate = useNavigate()
  return (
    <div className='section-donations'>

    <div className='description-donations'>
    <h1> Dona a la Fundación Educativa Ungo </h1>
    <button
    onClick={()=>navigate("/donaciones-page")}
    > Dona Ahora </button>
    </div>
    </div>
  )
}

export default DonationsHome
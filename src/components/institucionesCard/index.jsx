import React from 'react'
import "./styles.css"

 const InstitucionCard = ({image, institucionName, info}) => {
  return (
    <div className='institucionMainDiv'>
        <img src={image}/>
        <p className='instName'>{institucionName}</p>
        <p className='instInfo'>{info}</p>
    </div>
  )
}

export default InstitucionCard

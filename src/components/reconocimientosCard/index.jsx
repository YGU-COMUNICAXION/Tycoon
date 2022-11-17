import React from 'react'
import "./styles.css"

const ReconocimientoCard = ({image, firstP, secondP}) => {
  return (
    <div className='reconocimientoMainDiv'>
        <img src={image}/>
        <p>{firstP}</p>
        <p>{secondP}</p>
    </div>
  )
}

export default ReconocimientoCard
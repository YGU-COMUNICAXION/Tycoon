import React from 'react'
import "./styles.css"

export default function PaisCard({image, pais}) {
  return (
    <div className='paisCardDiv'>
        <img className='paisImage' src={image}/>
        <p className='paisName'>{pais}</p>
    </div>
  )
}

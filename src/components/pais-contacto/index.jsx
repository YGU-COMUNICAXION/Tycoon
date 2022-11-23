import React from 'react'
import "./styles.css"


const PaisCard = ({pais, image, children}) => {
  return (
    <div className='paisContactoDiv'>
        <div className='cardInfoDiv'>
            <h3 className='paisContactName'>{pais}</h3>
            {children}
        </div>
        <img src={image}/>
    </div>
  )
}

export default PaisCard
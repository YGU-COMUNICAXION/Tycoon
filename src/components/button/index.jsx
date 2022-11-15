import React from 'react'
import "./styles.css"

export default function Button({buttonText}) {
  return (
    <div className='buttonDiv'>
        <p>{buttonText}</p>
    </div>
  )
}

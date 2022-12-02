import React from 'react'
import { Link } from 'gatsby'
import "./styles.css"

export default function Button({buttonText, href}) {
  return (
    <div className='buttonDiv'>
      <Link to={href}>
        <p>{buttonText}</p>
      </Link>
    </div>
  )
}

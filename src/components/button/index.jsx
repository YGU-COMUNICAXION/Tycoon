import React from 'react'
import { Link } from 'gatsby'
import "./styles.css"

export default function Button({buttonText, href}) {
  return (
    <Link to={href}>
      <div className='buttonDiv'>
          <p>{buttonText}</p>
      </div>
    </Link>
  )
}

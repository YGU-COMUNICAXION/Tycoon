import React from 'react'
import "./styles.css"

const RedesCard = ({logoRed, nombreRed, to}) => {
  return (
      <div className='redesCardDiv'>
          <a href={to} target="_blank">
          <img className='redLogo' src={logoRed}/>
          <p className='redName'>{nombreRed}</p>
          </a>

      </div>

  )
}
export default RedesCard
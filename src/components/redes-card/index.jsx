import React from 'react'
import "./styles.css"

const RedesCard = ({logoRed, nombreRed}) => {
  return (
    <div className='redesCardDiv'>
        <img className='redLogo' src={logoRed}/>
        <p className='redName'>{nombreRed}</p>
    </div>
  )
}
export default RedesCard
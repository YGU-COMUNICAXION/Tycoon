import React from 'react'

const Banner = ({children, backgroundImage}) => {
  return (
    <div className='banner' style={{backgroundImage: `url(${backgroundImage})`}}>
        {children}
    </div>
  )
}

export default Banner

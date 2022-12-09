import React from 'react'
import "./styles.css"
import useWindowSize from '../../hooks/useWindowSize'

const SingleNews = ({children, otherP, singleTitle, singleDate, sigleFirstP}) => {
    const windowSize = useWindowSize();

  return (
    <>
        {windowSize < 752 ? (
            <div className='sigleMainDiv'>
                <div className='singleNewsBanner'/>
                <div className='sigleContentDiv'>
                    <h1>{singleTitle}</h1>
                    <p className='smallP'>{singleDate}</p>
                    <p className='smallP'>{sigleFirstP}</p>
                    {children}
                </div>
            </div>
        ):(
            <div className='sigleMainDivDesk'>
                <div className='singleNewsBannerDesk'/>
                <div className='sigleContentDivDesk'>
                    <h1>{singleTitle}</h1>
                    <p>{singleDate}</p>
                    {children}
                </div>
            </div>
        )}
    </>

    
  )
}

export default SingleNews
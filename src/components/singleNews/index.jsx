import React from 'react'
import "./styles.css"
import useWindowSize from '../../hooks/useWindowSize'

const SingleNews = ({children, otherP, singleTitle, singleDate, sigleFirstP, backgroundImage}) => {
    const windowSize = useWindowSize();

  return (
    <>
        {windowSize < 752 ? (
            <div className='MainDiv'>
                <div className='singleNewsBanner' style={{backgroundImage: `url(${backgroundImage})`}}/>
                <div className='sigleContentDiv'>
                    <h1 className='sigleNtitle'>{singleTitle}</h1>
                    <p className='regularP'>{singleDate}</p>
                    <p className='regularP'>{sigleFirstP}</p>
                    {children}
                </div>
            </div>
        ):(
            <div className='MainDivDesk'>
                <div className='singleNewsBannerDesk' style={{backgroundImage: `url(${backgroundImage})`}}/>
                <div className='sigleContentDivDesk'>
                    <h1 className='sigleNtitleDesk'>{singleTitle}</h1>
                    <p className='regularP'>{singleDate}</p>
                </div>
                {children}
            </div>
        )}
    </>

    
  )
}

export default SingleNews
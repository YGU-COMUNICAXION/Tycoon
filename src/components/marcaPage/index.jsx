import React from 'react'
import "./styles.css"
import { Link } from 'gatsby';
import { useTranslation } from "gatsby-plugin-react-i18next";
import useWindowSize from '../../hooks/useWindowSize';
import Back from "../../images/mobile/marcas/backarrow.png"

const MarcaPage = ({backgroundImage, children}) => {
    const { t } = useTranslation("brands");
    const windowSize = useWindowSize();

  return (
    <div>
    {windowSize < 752 ? (
        <div className='MainDiv'>
            <div className='banner' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className='marcaPFirstDiv'>
                <Link to="/brands">
                    <div className='backbutton'>
                        <img src={Back}/>
                        <p>{t("goback")}</p>
                    </div>
                </Link>
            </div>
            <div className='marcaPSecondDiv'>
                <div className='brandsGroup'>{children}</div>
            </div>
        </div>
    ):(
        <div className='MainDivDesk'>
            <div className='bannerDesk' style={{backgroundImage: `url(${backgroundImage})`}}></div>
            <div className='marcaPFirstDivDesk'>
                <Link to="/brands">
                    <div className='backbutton'>
                        <img src={Back}/>
                        <p>{t("goback")}</p>
                    </div>
                </Link>
            </div>
            <div className='marcaPSecondDiv'>
                <div className='brandsGroup'>{children}</div>
            </div>
        </div>
    )}

    </div>
  )
}

export default MarcaPage
import React from 'react'
import "./footer.css"
import { Link } from "gatsby";
import useWindowSize from "../../hooks/useWindowSize";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import "./footer.css"
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import RedesCard from '../redes-card';
import Facebook from "../../images/mobile/layout/footer/redes/icon-facebook.png"
import Instagram from "../../images/mobile/layout/footer/redes/icon-instagram.png"
import LinkedIn from "../../images/mobile/layout/footer/redes/icon-linkedin.png"

const Footer = () => {
    const windowSize = useWindowSize();
    const { t } = useTranslation("footer");

  return (
    <div>
        <div className='upperFooterDiv'>
            <div className='footerNav'>
                <h2 className='footerTitle'>{t("footerTitle")}</h2>
                <Link to="/about-us">{t("us")}</Link>
                <Link to="/brands">{t("brands")}</Link>
                <Link to="/news">{t("news")}</Link>
            </div>
            <div>
                <h2 className='footerTitle'>{t("footerSecondTitle")}</h2>
                <div className='paisesRow'></div>
                <div className='paisesRow'></div>
            </div>
            <div>
                <h2 className='teInteresa'>{t("footerThirdTitle")}</h2>
                <p className='escribenos'>{renderStringHMTLtoJSX(t("textus"))}</p>
            </div>
            <div>
                <h2 className='footerTitle'>{t("footerFourthTitle")}</h2>
                <RedesCard logoRed={Facebook} nombreRed={"Facebook"}/>
                <div className='footerDivider'></div>
                <RedesCard logoRed={Instagram} nombreRed={"Instagram"}/>
                <div className='footerDivider'></div>
                <RedesCard logoRed={LinkedIn} nombreRed={"Linkedin"}/>
            </div>
        </div>
        <div className='underFooterDiv'>
            <div className='underPgroup'>
                <p>{t("tycconEnterprises")}</p>
                <p>{t("todoslos")}</p>
            </div>
            <p>{t("Aviso")}</p>
        </div>
    </div>
  )
}

export default Footer
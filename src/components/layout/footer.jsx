import React from 'react'
import "./footer.css"
import { Link } from "gatsby";
// import scrollTo from 'gatsby-plugin-smoothscroll';
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./footer.css"
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import RedesCard from '../redes-card';
import Facebook from "../../images/mobile/layout/footer/redes/icon-facebook.png"
import Instagram from "../../images/mobile/layout/footer/redes/icon-instagram.png"
import LinkedIn from "../../images/mobile/layout/footer/redes/icon-linkedin.png"
import PaisCard from "../pais-card"
import Argentina from "../../images/mobile/layout/footer/paises/argentina.png"
import Brasil from "../../images/mobile/layout/footer/paises/brasil.png"
import Cam from "../../images/mobile/layout/footer/paises/cam.png"
import Chile from "../../images/mobile/layout/footer/paises/chile.png"
import Colombia from "../../images/mobile/layout/footer/paises/colombia.png"
import Ecuador from "../../images/mobile/layout/footer/paises/Ecuador.png"
import Mexico from "../../images/mobile/layout/footer/paises/mexico.png"
import Peru from "../../images/mobile/layout/footer/paises/peru.png"
import Logo from "../../images/desktop/layout/footer/logofooter.png"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
    const windowSize = useWindowSize();
    const { t } = useTranslation("footer");

  return (
    
    <div>
    {windowSize < 752 ? (
        <>
        <div className='upperFooterDiv'>
            <div className='footerNav'>
                <h2 className='footerTitle'>{t("footerTitle")}</h2>
                <Link to="/about-us">{t("us")}</Link>
                <Link to="/brands">{t("brands")}</Link>
                <Link to="/news">{t("news")}</Link>
            </div>
            <div>
                <h2 className='footerTitle'>{t("footerSecondTitle")}</h2>
                <div className='paisesRow'>
                    <AnchorLink to="/contact#contArg">
                        <PaisCard image={Argentina} pais={t("argentina")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contBz">
                        <PaisCard image={Brasil} pais={t("brasil")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contCam">
                        <PaisCard image={Cam} pais={t("cam")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contCh">
                        <PaisCard image={Chile} pais={t("chile")}/>
                    </AnchorLink>
                </div>
                <div className='paisesRow'>
                    <AnchorLink to="/contact#contCol">
                        <PaisCard image={Colombia} pais={t("colombia")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contEc">
                        <PaisCard image={Ecuador} pais={t("ecuador")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contMex">
                        <PaisCard image={Mexico} pais={t("mexico")}/>
                    </AnchorLink>
                    <AnchorLink to="/contact#contPeru">
                        <PaisCard image={Peru} pais={t("peru")}/>
                    </AnchorLink>
                </div>
            </div>
            <div className='teInteresaDiv'>
                <h2 className='teInteresa'>{t("footerThirdTitle")}</h2>
                <a href="mailto:info@tycoon.mx" className='escribenosLink'>
                    <p className='escribenos'>{renderStringHMTLtoJSX(t("textus"))}</p>
                </a>
            </div>
            <div>
                <h2 className='footerTitle'>{t("footerFourthTitle")}</h2>
                <RedesCard logoRed={Facebook} nombreRed={"Facebook"} to={"https://www.facebook.com/TycoonEnterprises/"}/>
                <div className='footerDivider'></div>
                <RedesCard logoRed={Instagram} nombreRed={"Instagram"} to={"https://www.instagram.com/tycoon.enterprises/"}/>
                <div className='footerDivider'></div>
                <RedesCard logoRed={LinkedIn} nombreRed={"Linkedin"} to={"https://www.linkedin.com/company/tycoon-enterprises/"}/>
            </div>
        </div>
        <div className='underFooterDiv'>
            <div className='underPgroup'>
                <p>{t("tycconEnterprises")}</p>
                <p>{t("todoslos")}</p>
            </div>
            <p>{t("Aviso")}</p>
        </div>
        </>
    ):(
        <>
            <div className='upperDeskDiv'>
                <div className='upperMainDesk'>
                    <div className='footerLogoDesk'>
                        <img src={Logo}/>
                    </div>
                    <div className='pagsDiv'>
                        <h2 className='footerTitle'>{t("footerTitle")}</h2>
                        <Link to="/about-us">{t("us")}</Link>
                        <Link to="/brands">{t("brands")}</Link>
                        <Link to="/news">{t("news")}</Link>
                    </div>
                    <div className='paisesDivDesk'>
                        <h2 className='footerTitle'>{t("footerSecondTitle")}</h2>
                        <div className='paisesRow'>
                            <AnchorLink to="/contact#contArg">
                                <PaisCard image={Argentina} pais={t("argentina")}/>
                                <PaisCard image={Brasil} pais={t("brasil")}/>
                                <PaisCard image={Cam} pais={t("cam")}/>
                                <PaisCard image={Chile} pais={t("chile")}/>
                                <PaisCard image={Colombia} pais={t("colombia")}/>
                                <PaisCard image={Ecuador} pais={t("ecuador")}/>
                                <PaisCard image={Mexico} pais={t("mexico")}/>
                                <PaisCard image={Peru} pais={t("peru")}/>
                            </AnchorLink>
                        </div>
                    </div>
                    <div className='redesDeskDiv'>
                        <h2 className='footerTitle'>{t("footerFourthTitle")}</h2>
                        <RedesCard logoRed={Facebook} nombreRed={"Facebook"} to={"https://www.facebook.com/TycoonEnterprises/"}/>
                        <div className='footerDivider'></div>
                        <RedesCard logoRed={Instagram} nombreRed={"Instagram"} to={"https://www.instagram.com/tycoon.enterprises/"}/>
                        <div className='footerDivider'></div>
                        <RedesCard logoRed={LinkedIn} nombreRed={"Linkedin"} to={"https://www.linkedin.com/company/tycoon-enterprises/"}/>
                    </div>
                </div>
                <div className='upperContact'>
                    <h2 className='teInteresa'>{t("footerThirdTitle")}</h2>
                    <p className='escribenos'>{renderStringHMTLtoJSX(t("textus"))}</p>
                </div>
            </div>
            <div className='underDeskDiv'>
                <div>
                    <p>{t("tycconEnterprisesDesk")}</p>
                </div>
                <div>
                    <p>{t("Aviso")}</p>
                </div>
            </div>
        </>
    )}

    </div>
  )
}

export default Footer
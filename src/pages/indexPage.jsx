import React from "react"
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/home.css"
import NoticiasRecientes from "../components/noticias-recientes"
import Button from "../components/button"
import useWindowSize from "../hooks/useWindowSize";
import Oficinadesk from "../images/desktop/home/oficina.png"
import NoticiasCard from "../components/noticias-card";
import Nuevo from "../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../images/mobile/noticias/noticiasRecientes/among.png"
import Mas from "../images/mobile/noticiasCard/botón-mas.png"
import useGeo from "../hooks/useGeo";
import esBackground from "../images/mobile/home/bannerHomeEsp.webp"
import enBackground from "../images/mobile/home/PORTADA-HOME-INGLES-MOBILE.png"
import esBackgroundDesk from "../images/desktop/home/bannerHomeEsp.webp"
import enBackgroundDesk from "../images/desktop/home/PORTADA-HOME-INGLES-DESKTOP.webp"

const imgMap = {en: enBackground, es: esBackground}
const imgMapDesk = {en: enBackgroundDesk, es: esBackgroundDesk}


const IndexPage = () => {
  const { t } = useTranslation("home");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const windowSize = useWindowSize();
  const geo = useGeo();  
  return (
    <Layout>
    {windowSize < 752 ? (
      <div className="MainDiv">
        <div className="homeFirstSection" style={{backgroundImage:`url("${imgMap[i18n.language]}")`}}>
        </div>
        <div className="homeSecondSection">
            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
              <NoticiasRecientes>
                <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate2")}>
                  <Link to='/news/nuevo-en-tycoon'>
                    <img src={Mas} className="mas"/>
                  </Link>
                </NoticiasCard>
                <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate2")}>
                  <Link to='/news/cobra-kai'>
                    <img src={Mas} className="mas"/>
                  </Link>
                </NoticiasCard>
                <NoticiasCard image={Among} title={t("among")} date={t("amongDate2")}>
                  <Link to='/news/among-us'>
                    <img src={Mas} className="mas"/>
                  </Link>
                </NoticiasCard>
              </NoticiasRecientes>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButton">
                <Button buttonText={t("more")} href={"/news"}/>
              </div>
            </div>
        </div>
        <div className="homeThirdSection">
            <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("newBussiness"))}</h2>
            <p className="regularP">{t("areyouinterested")}</p>
            <div className="thirdSectionButton">
              <Button buttonText={t("contact")} href={"/contact"}/>
            </div>
        </div> 
        <div className="homeFourthSection"/>    
      </div>
    ):(
      <div className="MainDivDesk">
        <div className="homeFirstSectionDesk" style={{backgroundImage:`url("${imgMapDesk[i18n.language]}")`}}>
        </div>
        <div className="homeSecondSectionDesk">
            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
            <NoticiasRecientes>
              <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                <Link to='/news/nuevo-en-tycoon'>
                  <img src={Mas} className="mas"/>
                </Link>
              </NoticiasCard>
              <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                <Link to='/news/cobra-kai'>
                  <img src={Mas} className="mas"/>
                </Link>
              </NoticiasCard>
              <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
                <Link to='/news/among-us'>
                  <img src={Mas} className="mas"/>
                </Link>
              </NoticiasCard>
            </NoticiasRecientes>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButtonDesk">
                <Button buttonText={t("more")} href={"/news"}/>
              </div>
            </div>
        </div>
        <div className="homeThridSectionDesk">
          <div className="homeContactDiv">
            <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("newBussiness"))}</h2>
            <p className="regularP">{t("areyouinterested")}</p>
            <div className="thirdSectionButton">
              <Button buttonText={t("contact")} href={"/contact"}/>
            </div>
          </div>
          <img src={Oficinadesk} className="oficinaDesk"/>
        </div>
      </div>
    )}
    </Layout>
  )
}

export default IndexPage
import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/home.css"
import NoticiasRecientes from "../components/noticias-recientes"
import Button from "../components/button"
import useWindowSize from "../hooks/useWindowSize";
import Oficinadesk from "../images/desktop/home/oficina.png"

const IndexPage = () => {
  const { t } = useTranslation("home");
  const windowSize = useWindowSize();

  return (
    <Layout>
    {windowSize < 752 ? (
      <div className="MainDiv">
        <div className="homeFirstSection"></div>
        <div className="homeSecondSection">
            <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButton">
                <Button buttonText={t("more")}/>
              </div>
            </div>
        </div>
        <div className="homeThirdSection">
            <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("newBussiness"))}</h2>
            <p className="regularP">{t("areyouinterested")}</p>
            <div className="thirdSectionButton">
              <Button buttonText={t("contact")}/>
            </div>
        </div> 
        <div className="homeFourthSection"/>    
      </div>
    ):(
      <div className="MainDivDesk">
        <div className="homeFirstSectionDesk"></div>
        <div className="homeSecondSectionDesk">
            <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButtonDesk">
                <Button buttonText={t("more")}/>
              </div>
            </div>
        </div>
        <div className="homeThridSectionDesk">
          <div className="homeContactDiv">
            <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("newBussiness"))}</h2>
            <p className="regularP">{t("areyouinterested")}</p>
            <div className="thirdSectionButton">
              <Button buttonText={t("contact")}/>
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
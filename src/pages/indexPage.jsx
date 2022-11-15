import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/home.css"
import NoticiasRecientes from "../components/noticias-recientes"
import Button from "../components/button"

const IndexPage = () => {
  const { t } = useTranslation("home");

  return (
    <Layout>
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
    </Layout>
  )
}

export default IndexPage
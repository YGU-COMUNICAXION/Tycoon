import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/news.css"
import NoticiasRecientes from "../components/noticias-recientes"
import NoticiasNav from "../components/nav-noticias"

const NewsPage = () => {
    const { t } = useTranslation("news");

    return (
        <Layout>
            <div className="MainDiv">
                <div className="newsFirstSection"/>
                <div className="newsSecondSection">
                    <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
                </div>
                <div className="newsThirdSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("news"))}</h2>
                    <NoticiasNav/>
                </div>
            </div>
        </Layout>
    )
}

export default NewsPage

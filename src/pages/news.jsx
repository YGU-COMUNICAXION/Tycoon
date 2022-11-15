import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/news.css"
import NoticiasRecientes from "../components/noticias-recientes"


const NewsPage = () => {
    const { t } = useTranslation("news");

    return (
        <Layout>
            <div className="MainDiv">
                <div className="newsFirstSection"/>
                <div className="newsSecondSection">
                    <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
                </div>
                <div className="newsThirdSection"></div>
            </div>
        </Layout>
    )
}

export default NewsPage
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
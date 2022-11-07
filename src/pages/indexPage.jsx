import React from "react"
import Layout from "../components/layout"
import "../css/home.css"
import NoticiasRecientes from "../components/noticias-recientes"
import BannerHome from "../images/mobile/home/banner-home-mobile.png"

const IndexPage = () => {
  return (
    <Layout>
        <div className="homeFirstSection"></div>
        <div className="homeSecondSection">
            <NoticiasRecientes/>
        </div>
        <div className="homeThirdSection">
            <h2 className="sectionTitle"></h2>
            <p></p>
        </div> 
        <div className="homeFourthSection"/>      
    </Layout>
  )
}

export default IndexPage
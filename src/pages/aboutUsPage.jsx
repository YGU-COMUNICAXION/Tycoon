import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/contact.css"

const AboutUsPage = () => {
    const { t } = useTranslation("aboutus");

    return (
        <Layout>
            <div className="contactFirstSection"/>
            <div className="contactSecondSection">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className="contactThirdSection">
                <h2></h2>
                <p></p>
                <img/>
            </div>
            <div className="contactFourthSection">
                <h2></h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <img/>
            </div>
            <div className="contactFifhtSection">
                <img/>
                <h2></h2>
                <p></p>
                <p></p>
                <p></p>
                <img/>
            </div>
            <div className="contactSixthSection">
                <h2></h2>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h2></h2>
                <div></div>
                <div></div>
            </div>
            <div className="contactSeventhSection">
                <img/>
                <h2></h2>
                {/* institucionesCards */}
            </div>
        </Layout>
    )
}

export default AboutUsPage

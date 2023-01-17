import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import NavMarcas from "../components/nav-marcas";
import "../css/brands.css";
import useWindowSize from "../hooks/useWindowSize";
import esBackground from "../images/mobile/marcas/bannerMarcasEsp.png"
import enBackground from "../images/desktop/marcas/PORTADA-BRANDS-eng.png"
import esBackgroundDesk from "../images/mobile/marcas/bannerMarcasEspDesk.png"
import enBackgroundDesk from "../images/desktop/marcas/PORTADA-BRANDS-eng.png"

const imgMap = {en: enBackground, es: esBackground}
const imgMapDesk = {en: enBackgroundDesk, es: esBackgroundDesk}

const BrandsPage = () => {
  const windowSize = useWindowSize();
  const { i18n } = useTranslation();

  return (
    <Layout>
      <div className="MainDiv nomargin">
      {windowSize < 752 ? (
        <div className='brandsFirstSection' style={{backgroundImage:`url("${imgMap[i18n.language]}")`}}></div>
      ):(
        <div className='brandsFirstSectionDesk' style={{backgroundImage:`url("${imgMapDesk[i18n.language]}")`}}></div>
      )}
        <div className="brandsSecondSection">
          <NavMarcas />
        </div>
      </div>
    </Layout>
  );
};

export default BrandsPage;

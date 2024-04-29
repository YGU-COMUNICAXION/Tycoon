import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import AbgCelebsBanner from "../../images/desktop/marcas/abgBanner.png";
import Aereopostal from "../../images/desktop/marcas/abgfashion/aereopostale.png";
import Airwalk from "../../images/desktop/marcas/abgfashion/airwalk.png";
import Eddiebauer from "../../images/desktop/marcas/abgfashion/eddiebauer.png";
import Elvis from "../../images/desktop/marcas/abgceleb/elvis.png";
import izod from "../../images/desktop/marcas/abgceleb/izod.png";
import Jones from "../../images/desktop/marcas/abgfashion/jones.png";
import Juicy from "../../images/desktop/marcas/abgfashion/juicy.png";
import luckybrand from "../../images/desktop/marcas/abgceleb/luckybrand.png";
import Marilyn from "../../images/desktop/marcas/abgceleb/marilyn.png";
import Muhhamad from "../../images/desktop/marcas/abgceleb/muhhamad.png";
import Nautica from "../../images/desktop/marcas/abgfashion/nautica.png";
import Nine from "../../images/desktop/marcas/abgfashion/nine.png";
import princepadel from "../../images/desktop/marcas/abgceleb/princepadel.png";
import reebok from "../../images/desktop/marcas/abgceleb/reebok.png";
import Shaq from "../../images/desktop/marcas/abgceleb/shaq.png";
import spider from "../../images/desktop/marcas/abgceleb/spider.png";
import sportsillustrated from "../../images/desktop/marcas/abgceleb/sportsillustrated.png";
import tapout from "../../images/desktop/marcas/abgceleb/tapout.png";
import visionstreetwear from "../../images/desktop/marcas/abgceleb/visionstreetwear.png";

import Thalia from "../../images/desktop/marcas/abgceleb/thalia.png";

const Index = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={AbgCelebsBanner}>
        <img src={Aereopostal} alt="marca-img" />
        <img src={Airwalk} alt="marca-img" />
        <img src={Eddiebauer} alt="marca-img" />
        <img src={Elvis} alt="marca-img" />
        <img src={izod} alt="marca-img" />
        <img src={Jones} alt="marca-img" />
        <img src={Juicy} alt="marca-img" />
        <img src={luckybrand} alt="marca-img" />
        <img src={Marilyn} alt="marca-img" />
        <img src={Muhhamad} alt="marca-img" />
        <img src={Nautica} alt="marca-img" />
        <img src={Nine} alt="marca-img" />
        <img src={princepadel} alt="marca-img" />
        <img src={reebok} alt="marca-img" />
        <img src={Shaq} alt="marca-img" />
        <img src={spider} alt="marca-img" />
        <img src={sportsillustrated} alt="marca-img" />
        <img src={tapout} alt="marca-img" />
        <img src={Thalia} alt="marca-img" />
        <img src={visionstreetwear} alt="marca-img" />
      </MarcaPage>
    </Layout>
  );
};

export default Index;

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

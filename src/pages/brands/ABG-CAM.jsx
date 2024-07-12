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
        <img alt="marca" src={Aereopostal} />
        <img alt="marca" src={Airwalk} />
        <img alt="marca" src={Eddiebauer} />
        <img alt="marca" src={Elvis} />
        <img alt="marca" src={izod} />
        <img alt="marca" src={Jones} />
        <img alt="marca" src={Juicy} />
        <img alt="marca" src={luckybrand} />
        <img alt="marca" src={Marilyn} />
        <img alt="marca" src={Muhhamad} />
        <img alt="marca" src={Nautica} />
        <img alt="marca" src={Nine} />
        <img alt="marca" src={princepadel} />
        <img alt="marca" src={reebok} />
        <img alt="marca" src={Shaq} />
        <img alt="marca" src={spider} />
        <img alt="marca" src={sportsillustrated} />
        <img alt="marca" src={tapout} />
        <img alt="marca" src={Thalia} />
        <img alt="marca" src={visionstreetwear} />
      </MarcaPage>
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Tycoon - ABG</title>;

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

import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import Banner from "../../images/desktop/marcas/spinmaster/spinmasterBanner.png";
import Rubik from "../../images/desktop/marcas/spinmaster/rubiks.png";
import useGeo from "../../hooks/useGeo";

const SpinMaster = () => {
  const geo = useGeo();

  return (
    <Layout>
      <MarcaPage backgroundImage={Banner}>
        <img src={Rubik} />
      </MarcaPage>
    </Layout>
  );
};

export default SpinMaster;

export const Head = () => <title>Tycoon - Spin master</title>;

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
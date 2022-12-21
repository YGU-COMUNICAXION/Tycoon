import React from "react";
import { graphql } from "gatsby";
import CaminaPage from "./caminaPage";

const Index = () => {
  return <CaminaPage />;
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

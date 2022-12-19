import React from "react";
import { graphql } from "gatsby";
import IconicPage from "./iconicaPromocionPage";

const Index = () => {
  return <IconicPage />;
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

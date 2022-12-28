import React from "react";
import { graphql } from "gatsby";
import PepsicoPage from "./pepsicoPage";

const Index = () => {
  return <PepsicoPage />;
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

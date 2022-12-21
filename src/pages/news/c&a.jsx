import React from "react";
import { graphql } from "gatsby";
import CaPage from "./c&aPage";

const Index = () => {
  return <CaPage />;
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

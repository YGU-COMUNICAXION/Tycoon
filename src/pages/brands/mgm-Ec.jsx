import React from "react";
import { graphql } from "gatsby";
import MgmEcPage from "./mgmEcPage";

const Index = () => {
  return <MgmEcPage />;
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

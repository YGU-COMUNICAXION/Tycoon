import React from "react";
import { graphql } from "gatsby";
import KingsCAMPage from "./kingFeaturesCAMPage";

const Index = () => {
  return <KingsCAMPage/>;
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
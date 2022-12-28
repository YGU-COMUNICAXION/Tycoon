import React from "react";
import { graphql } from "gatsby";
import KingFeaturesPage from "./kingFeaturesPage";

const Index = () => {
  return <KingFeaturesPage />;
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

import React from "react";
import { graphql } from "gatsby";
import KingMxPage from "./kingFeaturesMxPage";

const Index = () => {
  return <KingMxPage/>;
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
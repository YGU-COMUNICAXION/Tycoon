import React from "react";
import { graphql } from "gatsby";
import KingColPage from "./kingFeaturesColPage";

const Index = () => {
  return <KingColPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - King Features</title>;

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
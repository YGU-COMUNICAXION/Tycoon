import React from "react";
import { graphql } from "gatsby";
import UniversalPage from "./universalPage";

const Index = () => {
  return <UniversalPage />;
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

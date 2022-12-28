import React from "react";
import { graphql } from "gatsby";
import DistrollerPage from "./distrollerPage";

const Index = () => {
  return <DistrollerPage />;
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

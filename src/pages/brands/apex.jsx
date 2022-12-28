import React from "react";
import { graphql } from "gatsby";
import ApexPage from "./apexPage";

const Index = () => {
  return <ApexPage />;
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

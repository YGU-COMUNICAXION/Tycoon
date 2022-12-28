import React from "react";
import { graphql } from "gatsby";
import WarnerPage from "./warnerPage";

const Index = () => {
  return <WarnerPage />;
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

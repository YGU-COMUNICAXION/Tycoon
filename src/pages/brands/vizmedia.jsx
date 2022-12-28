import React from "react";
import { graphql } from "gatsby";
import VizPage from "./vizmediaPage";

const Index = () => {
  return <VizPage />;
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

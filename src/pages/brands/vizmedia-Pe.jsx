import React from "react";
import { graphql } from "gatsby";
import VizmediaPePage from "./vizmediaPePage";

const Index = () => {
  return <VizmediaPePage/>;
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
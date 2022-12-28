import React from "react";
import { graphql } from "gatsby";
import HasbroPage from "./hasbroPage";

const Index = () => {
  return <HasbroPage />;
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

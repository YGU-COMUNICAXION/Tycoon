import React from "react";
import { graphql } from "gatsby";
import ActivisionPage from "./activisionPage";

const Index = () => {
  return <ActivisionPage />;
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

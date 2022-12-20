import React from "react";
import { graphql } from "gatsby";
import EndemolPage from "./endemolPage";

const Index = () => {
  return <EndemolPage />;
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

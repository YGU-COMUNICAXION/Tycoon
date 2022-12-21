import React from "react";
import { graphql } from "gatsby";
import ColPage from "./colombiaPage";

const Index = () => {
  return <ColPage />;
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

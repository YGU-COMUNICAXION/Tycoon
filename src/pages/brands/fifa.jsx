import React from "react";
import { graphql } from "gatsby";
import FifaPage from "./fifaPage";

const Index = () => {
  return <FifaPage />;
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

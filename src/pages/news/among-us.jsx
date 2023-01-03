import React from "react";
import { graphql } from "gatsby";
import AmongusPage from "./amongusPage";

const Index = () => {
  return <AmongusPage />;
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

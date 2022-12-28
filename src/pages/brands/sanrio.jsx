import React from "react";
import { graphql } from "gatsby";
import SanrioPage from "./sanrioPage";

const Index = () => {
  return <SanrioPage />;
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

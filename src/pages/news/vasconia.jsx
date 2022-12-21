import React from "react";
import { graphql } from "gatsby";
import VasconiaPage from "./vasconiaPage";

const Index = () => {
  return <VasconiaPage />;
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

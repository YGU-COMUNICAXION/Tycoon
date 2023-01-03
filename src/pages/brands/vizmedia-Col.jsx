import React from "react";
import { graphql } from "gatsby";
import VizmediaColPage from "./vizmediaColPage";

const Index = () => {
  return <VizmediaColPage/>;
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
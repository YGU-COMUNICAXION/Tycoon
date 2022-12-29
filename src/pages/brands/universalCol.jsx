import React from "react";
import { graphql } from "gatsby";
import UniversalColPage from "./universalColPage";

const Index = () => {
  return <UniversalColPage/>;
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
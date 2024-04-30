import React from "react";
import { graphql } from "gatsby";
import UniversalEcPage from "./universalEcPage";

const Index = () => {
  return <UniversalEcPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Universal</title>;

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
import React from "react";
import { graphql } from "gatsby";
import UniversalCAMPage from "./universalCAMPage";

const Index = () => {
  return <UniversalCAMPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import UniversalChPage from "./universalChPage";

const Index = () => {
  return <UniversalChPage/>;
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
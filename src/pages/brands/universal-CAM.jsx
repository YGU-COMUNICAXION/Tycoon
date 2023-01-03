import React from "react";
import { graphql } from "gatsby";
import UniversalCAMPage from "./universalCAMPage";

const Index = () => {
  return <UniversalCAMPage/>;
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
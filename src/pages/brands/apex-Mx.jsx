import React from "react";
import { graphql } from "gatsby";
import ApexMxPage from "./apexMxPage";

const Index = () => {
  return <ApexMxPage/>;
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
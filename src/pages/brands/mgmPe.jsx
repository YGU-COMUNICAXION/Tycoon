import React from "react";
import { graphql } from "gatsby";
import MgmPePage from "./mgmPePage";

const Index = () => {
  return <MgmPePage/>;
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
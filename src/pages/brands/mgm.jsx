import React from "react";
import { graphql } from "gatsby";
import MGMpage from "./mgmPage";

const Index = () => {
  return <MGMpage />;
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

import React from "react";
import { graphql } from "gatsby";
import MGMBzPage from "./mgmBzPage";

const Index = () => {
  return <MGMBzPage/>;
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
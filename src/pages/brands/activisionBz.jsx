import React from "react";
import { graphql } from "gatsby";
import ActivisionBzPage from "./activisionBzPage";

const Index = () => {
  return <ActivisionBzPage/>;
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
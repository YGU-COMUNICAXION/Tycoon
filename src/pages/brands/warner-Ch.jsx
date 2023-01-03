import React from "react";
import { graphql } from "gatsby";
import WarnerChPage from "./warnerChPage";

const Index = () => {
  return <WarnerChPage/>;
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
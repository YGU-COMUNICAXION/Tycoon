import React from "react";
import { graphql } from "gatsby";
import SanrioMxPage from "./sanrioMxPage";

const Index = () => {
  return <SanrioMxPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import SanrioChPage from "./sanrioChPage";

const Index = () => {
  return <SanrioChPage/>;
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
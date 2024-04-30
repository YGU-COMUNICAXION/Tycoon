import React from "react";
import { graphql } from "gatsby";
import SanrioEcPage from "./sanrioEcPage";

const Index = () => {
  return <SanrioEcPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Sanrio</title>;

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
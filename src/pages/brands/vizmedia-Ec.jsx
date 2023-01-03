import React from "react";
import { graphql } from "gatsby";
import VizmediaEcPage from "./vizmediaEcPage";

const Index = () => {
  return <VizmediaEcPage/>;
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
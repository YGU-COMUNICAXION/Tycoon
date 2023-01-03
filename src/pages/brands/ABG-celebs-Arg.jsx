import React from "react";
import { graphql } from "gatsby";
import ABGcelebsArgPage from "./ABGcelebsArgPage";

const Index = () => {
  return <ABGcelebsArgPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import ABGpePage from "./ABG-PePage";

const Index = () => {
  return <ABGpePage/>;
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
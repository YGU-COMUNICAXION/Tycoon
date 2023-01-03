import React from "react";
import { graphql } from "gatsby";
import ABGcelebsPePage from "./ABGcelebsPePage";

const Index = () => {
  return <ABGcelebsPePage/>;
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
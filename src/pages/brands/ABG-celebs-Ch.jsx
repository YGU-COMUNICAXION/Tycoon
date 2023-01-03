import React from "react";
import { graphql } from "gatsby";
import ABGcelebsChPage from "./ABGcelebsChPage";

const Index = () => {
  return <ABGcelebsChPage/>;
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
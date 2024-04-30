import React from "react";
import { graphql } from "gatsby";
import VizMediaChPage from "./vizmediaChPage";

const Index = () => {
  return <VizMediaChPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Viz Media</title>;

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
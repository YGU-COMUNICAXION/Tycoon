import React from "react";
import { graphql } from "gatsby";
import ABGchPage from "./ABG-ChPage";

const Index = () => {
  return <ABGchPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - ABG</title>;

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
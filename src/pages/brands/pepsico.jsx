import React from "react";
import { graphql } from "gatsby";
import PepsiPage from "./pepsicoPage";

const Index = () => {
  return <PepsiPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import ABFfashionChPage from "./ABGfashionChPage";

const Index = () => {
  return <ABFfashionChPage/>;
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
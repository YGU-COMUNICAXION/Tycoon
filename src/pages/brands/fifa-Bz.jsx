import React from "react";
import { graphql } from "gatsby";
import FifaBzPage from "./fifaBzPage";

const Index = () => {
  return <FifaBzPage/>;
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
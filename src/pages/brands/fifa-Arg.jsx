import React from "react";
import { graphql } from "gatsby";
import FifaArgPage from "./fifaArgPage";

const Index = () => {
  return <FifaArgPage/>;
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
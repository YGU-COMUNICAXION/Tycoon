import React from "react";
import { graphql } from "gatsby";
import FifaColPage from "./fifaColPage";

const Index = () => {
  return <FifaColPage/>;
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
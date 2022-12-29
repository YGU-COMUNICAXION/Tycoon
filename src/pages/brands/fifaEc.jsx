import React from "react";
import { graphql } from "gatsby";
import FifaEcPage from "./fifaEcPage";

const Index = () => {
  return <FifaEcPage/>;
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
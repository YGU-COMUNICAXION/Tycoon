import React from "react";
import { graphql } from "gatsby";
import FifaCamPage from "./fifaCAMPage";

const Index = () => {
  return <FifaCamPage/>;
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
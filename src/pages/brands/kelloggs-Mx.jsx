import React from "react";
import { graphql } from "gatsby";
import KelloggsMxPage from "./kelloggsMxPage";

const Index = () => {
  return <KelloggsMxPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Kelloggs</title>;

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
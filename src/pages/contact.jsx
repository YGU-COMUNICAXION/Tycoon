import React from "react";
import { graphql } from "gatsby";
import IndexPage from "./indexPage";

const Index = () => {
  return <IndexPage />;
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

import React from "react";
import { graphql } from "gatsby";
import mgmArgPage from "./mgmArgPage";

const Index = () => {
  return <mgmArgPage/>;
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
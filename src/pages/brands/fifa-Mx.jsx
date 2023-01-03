import React from "react";
import { graphql } from "gatsby";
import FifaMxPage from "./fifaMxPage";

const Index = () => {
  return <FifaMxPage/>;
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
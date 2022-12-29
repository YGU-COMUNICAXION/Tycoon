import React from "react";
import { graphql } from "gatsby";
import mgmEcPage from "./mgmEcPage";

const Index = () => {
  return <mgmEcPage/>;
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
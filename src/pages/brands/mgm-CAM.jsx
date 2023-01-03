import React from "react";
import { graphql } from "gatsby";
import MgmCAMPage from "./mgmCAMPage";

const Index = () => {
  return <MgmCAMPage/>;
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
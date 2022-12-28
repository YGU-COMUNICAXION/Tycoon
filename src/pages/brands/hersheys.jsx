import React from "react";
import { graphql } from "gatsby";
import HersheysPage from "./hersheysPage";

const Index = () => {
  return <HersheysPage/>;
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

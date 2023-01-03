import React from "react";
import { graphql } from "gatsby";
import HersheysColPage from "./hersheysColPage";

const Index = () => {
  return <HersheysColPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import HersheysEcPage from "./hersheysEcPage";

const Index = () => {
  return <HersheysEcPage/>;
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
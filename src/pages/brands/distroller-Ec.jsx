import React from "react";
import { graphql } from "gatsby";
import DistrollerEcPage from "./distrollerEcPage";

const Index = () => {
  return <DistrollerEcPage/>;
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
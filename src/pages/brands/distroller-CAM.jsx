import React from "react";
import { graphql } from "gatsby";
import DistrollerCamPage from "./distrollerCAMPage";

const Index = () => {
  return <DistrollerCamPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - ABG</title>;

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
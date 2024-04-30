import React from "react";
import { graphql } from "gatsby";
import MoonbugPage from "./moonbugPage";

const Index = () => {
  return <MoonbugPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Moonbug</title>;

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
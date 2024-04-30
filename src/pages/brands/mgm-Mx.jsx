import React from "react";
import { graphql } from "gatsby";
import MgmMxPage from "./mgmMxPage";

const Index = () => {
  return <MgmMxPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - MGM</title>;


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
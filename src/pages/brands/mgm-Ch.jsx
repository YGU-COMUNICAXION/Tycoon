import React from "react";
import { graphql } from "gatsby";
import MgmChPage from "./mgmChPage";

const Index = () => {
  return <MgmChPage/>;
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
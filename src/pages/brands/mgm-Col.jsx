import React from "react";
import { graphql } from "gatsby";
import MgmColPage from "./mgmColPage";

const Index = () => {
  return <MgmColPage/>;
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
import React from "react";
import { graphql } from "gatsby";
import WarnerArgPage from "./warnerArgPage";

const Index = () => {
  return <WarnerArgPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Warner</title>;

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
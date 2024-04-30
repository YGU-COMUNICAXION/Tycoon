import React from "react";
import { graphql } from "gatsby";
import HasbroBzPage from "./hasbroBzPage";

const Index = () => {
  return <HasbroBzPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Hasbro</title>;

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
import React from "react";
import { graphql } from "gatsby";
import MicrosoftPage from "./microsoftPage";

const Index = () => {
  return <MicrosoftPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Microsoft</title>;

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
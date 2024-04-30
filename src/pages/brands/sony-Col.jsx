import React from "react";
import { graphql } from "gatsby";
import SonyColPage from "./sonyColPage";

const Index = () => {
  return <SonyColPage/>;
};

export default Index;

export const Head = () => <title>Tycoon - Sony</title>;

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
import React from "react";
import { graphql } from "gatsby";
import SonyMxPage from "./sonyMxPage";

const Index = () => {
  return <SonyMxPage/>;
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
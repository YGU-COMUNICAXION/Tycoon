import React from "react";
import { graphql } from "gatsby";
import SonyPage from "./sonyPage";

const Index = () => {
  return <SonyPage/>;
};

export default Index;

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

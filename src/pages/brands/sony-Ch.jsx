import React from "react";
import { graphql } from "gatsby";
import SonyCHPage from "./sonyChPage";

const Index = () => {
  return <SonyCHPage/>;
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
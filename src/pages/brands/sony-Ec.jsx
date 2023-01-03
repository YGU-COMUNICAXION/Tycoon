import React from "react";
import { graphql } from "gatsby";
import SonyEcPage from "./sonyEcPage";

const Index = () => {
  return <SonyEcPage/>;
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
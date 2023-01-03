import React from "react";
import { graphql } from "gatsby";
import HersheysMxPage from "./hersheysMxPage";

const Index = () => {
  return <HersheysMxPage/>;
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
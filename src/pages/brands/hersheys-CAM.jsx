import React from "react";
import { graphql } from "gatsby";
import HersheysCamPage from "./hersheysCAMPage";

const Index = () => {
  return <HersheysCamPage/>;
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
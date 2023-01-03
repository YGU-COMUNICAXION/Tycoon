import React from "react";
import { graphql } from "gatsby";
import SanrioCAMPage from "./sanrioCAMPage";

const Index = () => {
  return <SanrioCAMPage/>;
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
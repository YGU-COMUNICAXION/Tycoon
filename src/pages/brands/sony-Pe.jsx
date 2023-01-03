import React from "react";
import { graphql } from "gatsby";
import SonyPePAGE from "./sonyPePage";

const Index = () => {
  return <SonyPePAGE/>;
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
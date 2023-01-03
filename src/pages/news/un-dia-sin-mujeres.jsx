import React from "react";
import { graphql } from "gatsby";
import UnDiaPage from "./unDiaSinMujeresPage";

const Index = () => {
  return <UnDiaPage />;
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

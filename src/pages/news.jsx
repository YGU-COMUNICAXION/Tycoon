import React from "react";
import { graphql } from "gatsby";
import NewsPage from "./newsPage";

const Index = () => {
  return <NewsPage />;
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

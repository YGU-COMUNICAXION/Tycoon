import React from "react";
import { graphql } from "gatsby";
import PrivacyPage from "./PrivacyPage";

const Index = () => {
  return <PrivacyPage />;
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

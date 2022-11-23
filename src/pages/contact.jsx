import React from "react";
import { graphql } from "gatsby";
import ContactPage from "./contactPage";

const Index = () => {
  return <ContactPage />;
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

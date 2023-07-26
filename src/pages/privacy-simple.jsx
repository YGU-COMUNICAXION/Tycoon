import React from "react";
import Layout from "../components/layout";
import AvisoPrivacidad from "../components/aviso-privacidad";

const Index = () => {
  return (
    <Layout>
      <AvisoPrivacidad isSimple={true} />
    </Layout>
  );
};

export default Index;

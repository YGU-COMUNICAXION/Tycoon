import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import imgBannerParamount from "../../images/desktop/marcas/paramount/paramountBanner.webp";

import imgPawPatrol from "../../images/desktop/marcas/paramount/PAW_Patrol_logo.webp";
import imgRubbleCrew from "../../images/desktop/marcas/paramount/Rubble_Crew_logo.webp";
import imgPitufos from "../../images/desktop/marcas/paramount/pitufos.webp";
import imgBlue from "../../images/desktop/marcas/paramount/blue.webp";
import imgTMNT from "../../images/desktop/marcas/paramount/TMNT.png";
import imgDora from "../../images/desktop/marcas/paramount/dora.png";
import imgBob from "../../images/desktop/marcas/paramount/Bob_Esponja_logo.webp";
import imgGarfield from "../../images/desktop/marcas/paramount/Nickelodeon_Garfield_logo.webp";
import imgBabyShark from "../../images/desktop/marcas/paramount/baby-shark.png";
import imgAvatar from "../../images/desktop/marcas/paramount/Avatar_The_Last_Airbender_Logo.jpg";
import imgStarTrek from "../../images/desktop/marcas/paramount/startrek.png";
import imgYellow from "../../images/desktop/marcas/paramount/yellowstone.png";
import imgRugrats from "../../images/desktop/marcas/paramount/Rugrats.png";
import imgHeyArnold from "../../images/desktop/marcas/paramount/Hey_Arnold_Logo.webp";
import imgRenStimpy from "../../images/desktop/marcas/paramount/RenSimpy.jpg";
import imgMtv from "../../images/desktop/marcas/paramount/mtv.png";
import imgEmily from "../../images/desktop/marcas/paramount/emily.jpg";
import imgSourthPark from "../../images/desktop/marcas/paramount/southpark.jpg";
import imgDaria from "../../images/desktop/marcas/paramount/Daria_Logo.svg";
import imgBB from "../../images/desktop/marcas/paramount/B&B.png";
import imgJackass from "../../images/desktop/marcas/paramount/jackass.jpg";
import imgCatdog from "../../images/desktop/marcas/paramount/catdog.png";
import imgRocko from "../../images/desktop/marcas/paramount/Rocko.webp";
import imgRocketPower from "../../images/desktop/marcas/paramount/rocketpower.png";
import imgClueless from "../../images/desktop/marcas/paramount/clueless.png";
import imgMeanGirls from "../../images/desktop/marcas/paramount/meangirls.png";
import imgGrease from "../../images/desktop/marcas/paramount/grease.png";
import imgBreakFast from "../../images/desktop/marcas/paramount/breakfast.jpg";
import imgPadrino from "../../images/desktop/marcas/paramount/padrino.png";
import imgTopGun from "../../images/desktop/marcas/paramount/topgun.jpg";
import imgMissionImposible from "../../images/desktop/marcas/paramount/imposible.jpg";

const Index = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={imgBannerParamount}>
        <img alt="paw patrol" src={imgPawPatrol} />
        <img alt="rubble crew" src={imgRubbleCrew} />
        <img alt="pitufos" src={imgPitufos} />
        <img alt="dora" src={imgDora} />
        <img alt="bob" src={imgBob} />
        <img alt="garfield" src={imgGarfield} />
        <img alt="marca" src={imgTMNT} />
        <img alt="pistas de blue" src={imgBlue} />
        <img alt="baby shark" src={imgBabyShark} />
        <img alt="avatar" src={imgAvatar} />
        <img alt="star trek" src={imgStarTrek} />
        <img alt="yellow stone" src={imgYellow} />
        <img alt="rugrats" src={imgRugrats} />
        <img alt="hey Arnold" src={imgHeyArnold} />
        <img alt="Ren & Stimpy" src={imgRenStimpy} />
        <img alt="Mtv" src={imgMtv} />
        <img alt="Emily in paris" src={imgEmily} />
        <img alt="south park" src={imgSourthPark} />
        <img alt="Daria" src={imgDaria} />
        <img alt="Beavis & Butt head" src={imgBB} />
        <img alt="Jackass" src={imgJackass} />
        <img alt="Cat Dog" src={imgCatdog} />
        <img alt="La vida moderna de rocko" src={imgRocko} />
        <img alt="Rocket power" src={imgRocketPower} />
        <img alt="clueless" src={imgClueless} />
        <img alt="mean girls" src={imgMeanGirls} />
        <img alt="grease" src={imgGrease} />
        <img alt="break fast at Tiffany's" src={imgBreakFast} />
        <img alt="el padrino" src={imgPadrino} />
        <img alt="Top Gun" src={imgTopGun} />
        <img alt="Mission imposible" src={imgMissionImposible} />
      </MarcaPage>
    </Layout>
  );
};

export default Index;

export const Head = () => <title>Tycoon - Paramount</title>;

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

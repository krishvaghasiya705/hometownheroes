import React from "react";
import Tomvon from "../../components/Lwandlecomponents/Tomvonsection";
import Lwandleherobanner from "../../components/Lwandlecomponents/Lwandleherobanner";
import Clocksection from "./../../components/Homepagecomponents/clocksection/index";


import { Helmet } from "react-helmet";

function Donate() {

  return (
    <>
      <Helmet>
        <title>HOMETOWNHEROES - Donate</title>
      </Helmet>


      <Lwandleherobanner hideImage={true} showText={true} />
      <Tomvon />
      <Clocksection
        borderColor="#F6F1E5"
        boxBackgroundColor="#F6F1E5"
        boxFontColor="#1B1B1B"
        labelFontColor="#F6F1E5"
        headerFontColor="#F6F1E5"
      />
    </>
  );
}

export default Donate;

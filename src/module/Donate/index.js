import React from "react";
import Tomvon from "../../components/Lwandlecomponents/Tomvonsection";
import Lwandleherobanner from "../../components/Lwandlecomponents/Lwandleherobanner";
import Clocksection from "./../../components/Homepagecomponents/clocksection/index";
import { Helmet } from "react-helmet";

import "./donate.scss";
import Omricon from "../../assets/svg/omricon";
import Canonicon from "../../assets/svg/canonicon";
import Jesamblankicon from "../../assets/svg/jesamblankicon";

function Donate() {
  const donateParagraph = `
    Es gibt viele verschiedene Möglichkeiten, unser Projekt Hometown Heroes zu unterstützen. 
    Ob durch die Verbreitung der Geschichten, die wir erzählen, die Teilnahme an unseren Veranstaltungen 
    oder die finanzielle Unterstützung – jede Form der Mithilfe trägt dazu bei, die Stimmen der Menschen 
    in unterdrückten Gemeinschaften zu stärken und ihnen eine Bühne zu geben.
  `;

  return (
    <>
      <Helmet>
        <title>HOMETOWNHEROES - Donate</title>
      </Helmet>

      <div className="lwandle-donate-compo">
        <Lwandleherobanner
          hideImage={true}
          showText={true}
          title="HOMETOWN HEROES 2024"
          paragraph={donateParagraph}
          showBidButton={false}
          showMessageButton={true}
        />
      </div>
      <Tomvon />
      <div className="clocksection-donate">
        <Clocksection
          borderColor="#F6F1E5"
          boxBackgroundColor="#F6F1E5"
          boxFontColor="#1B1B1B"
          labelFontColor="#F6F1E5"
          headerFontColor="#F6F1E5"
        />
      </div>

      <div className="sponser-and-partner-div">
        <h1>SPONSOREN & PARTNER</h1>
        <div className="sponser-logo-div-main">
          <Omricon />
          <Canonicon />
          <Jesamblankicon />
        </div>
      </div>
    </>
  );
}

export default Donate;
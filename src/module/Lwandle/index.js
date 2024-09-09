import React from "react";
import Lwandleherobanner from "../../components/Lwandlecomponents/Lwandleherobanner";
import Tomvon from "../../components/Lwandlecomponents/Tomvonsection";
import Clocksection from "../../components/Homepagecomponents/clocksection";


import { Helmet } from "react-helmet";

function Lwandle() {

  const Lwandleperagraph = `Jetzt Gebot abgeben und das Projekt unterstützen. Gib einfach deine Kontaktdaten in das Eingabefeld und dein Gebot für das Bild ab.`

  return (
    <>

      <Helmet>
        <title>HOMETOWNHEROES - Lwandle</title>
      </Helmet>


      <Lwandleherobanner hideImage={false}
        showText={false}
        paragraph={Lwandleperagraph}
        showBidButton={true}
        showMessageButton={false}
      />
      <Tomvon />
      <div className="lwandle-clock-section">
        <Clocksection
          borderColor="#F6F1E5"
          boxBackgroundColor="#F6F1E5"
          boxFontColor="#1B1B1B"
          labelFontColor="#F6F1E5"
          headerFontColor="#F6F1E5"
        />
      </div>
    </>
  );
}

export default Lwandle;

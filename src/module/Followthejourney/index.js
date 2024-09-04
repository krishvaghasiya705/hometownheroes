import React from "react";
import Theideasection from "../../components/Ausstellung2023components/TheIdeadiv";
import Thevision from "../../components/Ausstellung2023components/Thevision";
import Thegallerysection from "../../components/Ausstellung2023components/Thegallerysection";
import Hometownheroesperasection from "../../components/Ausstellung2023components/Hometownheroesperasection";
import Qvarterimagesection from "../../components/Ausstellung2023components/Qvarterimagesection";
import Thebooksection from "../../components/Ausstellung2023components/Thebooksection";
import Samplesection from "../../components/Ausstellung2023components/Samplesection";
import Theappearlsection from "../../components/Ausstellung2023components/Theappearlsection";
import Hometownheroessection from "../../components/Ausstellung2023components/Hometownheroessection";
import Thanksection from "../../components/Ausstellung2023components/Thanksection";
import Followthejourneyherobanner from "../../components/Followthejourneycomponent/Followthejourneyherobanner";
import { Helmet } from "react-helmet";

function Followthejourney() {
  return (
    <>

      <Helmet>
        <title>HOMETOWNHEROES - Followthejourney</title>
      </Helmet>


      <Followthejourneyherobanner />
      <Theideasection />
      <Thevision />
      <Thegallerysection />
      <Hometownheroesperasection />
      <Qvarterimagesection />
      <Thebooksection />
      <Samplesection />
      <Theappearlsection />
      <Hometownheroessection />
      <Thanksection />
    </>
  );
}

export default Followthejourney;

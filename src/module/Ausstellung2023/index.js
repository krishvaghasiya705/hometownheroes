import React from "react";

import Ausstellung2023Herobanner from "../../components/Ausstellung2023components/Ausstellung2023Herobanner";
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



import { Helmet } from "react-helmet";

function Ausstellung2023() {
  return (
    <div>

      <Helmet>
        <title>HOMETOWNHEROES - Ausstellung2023</title>
      </Helmet>


      <Ausstellung2023Herobanner />
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
    </div>
  );
}

export default Ausstellung2023;

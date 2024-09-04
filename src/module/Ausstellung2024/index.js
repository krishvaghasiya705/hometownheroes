import React from "react";
import Ausstellung2024herobanner from "../../components/Ausstellung2024components/Ausstellung2024herobanner";
import Ausstellung2024pagelinks from "../../components/Ausstellung2024components/Ausstellung2024Pagelinks";


import { Helmet } from "react-helmet";

function Ausstellung2024() {
  return (
    <>

      <Helmet>
        <title>HOMETOWNHEROES - Ausstellung2024</title>
      </Helmet>
      <Ausstellung2024herobanner />
      <Ausstellung2024pagelinks />
    </>
  );
}

export default Ausstellung2024;

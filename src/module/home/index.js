import React from "react";
import Herobanner from "../../components/Homepagecomponents/Herobanner";

import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HOMETOWNHEROES - Home</title>
      </Helmet>

      <Herobanner />
    </>
  );
}

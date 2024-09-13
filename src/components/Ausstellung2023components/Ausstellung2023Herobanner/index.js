import React from "react";
import "./ausstellung2023.scss";

import Hometownheroesbannerimage2 from "../../../assets/image/hometownheroesbannerimage2.webp";

function Ausstellung2023Herobanner() {
  return (
    <div className="ausstellung2023-main">
      <div className="container-main">
        <div className="ausstellung2023-content-alignment">
          <div className="intro-title">
            <div className="intro-title-div">
              <h1>INTRO</h1>
            </div>
            <p>
              “Welcome to this comprehensive document that encapsulates the
              essence and journey of HOMETOWN HEROES. Within this page, you will
              find a vivid portrayal of our mission, our experiences, and our
              unwavering commitment to driving positive change. Explore how
              HOMETOWN HEROES, with its roots in the townships of Cape Town,
              will blossom into a platform of compassion, artistry, and
              impactful collaborations.“
            </p>
          </div>
          <div className="date-alignment">
            <h1>2023</h1>
          </div>
          <div className="hometownheroesbannerimage2">
            <img
              src={Hometownheroesbannerimage2}
              alt="Hometownheroesbannerimage2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ausstellung2023Herobanner;

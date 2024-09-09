import React from "react";
import "./ausstellung2024herobanner.scss";

import hometownheroesbannerimage from "../../../assets/image/hometownheroesbannerimage.png";

function Ausstellung2024herobanner() {
  return (
    <div className="ausstellung-2024-herobanner-main">
      <div className="ausstellung-2024-herobanner-container">
        <div className="ausstellung-2024-herobanner">
          <div className="year-title">
            <h1>2024</h1>
          </div>
          <div className="hometownheroesbannerimage">
            <img
              src={hometownheroesbannerimage}
              alt="hometownheroesbannerimage"
            />
          </div>
          <div>
            <h1>INTRO</h1>
            <p>
              “Welcome to this comprehensive document that encapsulates the
              essence and journey of HOMETOWN HEROES. Within these pages, you
              will find a vivid portrayal of our mission, our experiences, and
              our unwavering commitment to driving positive change. Explore how
              HOMETOWN HEROES, with its roots in the townships of Cape Town,
              will blossom into a platform of compassion, artistry, and
              impactful collaborations.“
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ausstellung2024herobanner;

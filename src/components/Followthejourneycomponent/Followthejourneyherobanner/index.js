import React from "react";
import "./followthejourneyherobanner.scss";

import Hometownheroesbannerimage from "../../../assets/image/hometownheroesbannerimage.png";
import Hometownheroesbannerimage2 from "../../../assets/image/hometownheroesbannerimage2.png";

function Followthejourneyherobanner() {
  return (
    <div className="follow-the-journey-herobanner-main">
      <div className="follow-the-journey-herobanner-container">
        <div className="follow-the-journey-herobanner">
          <div className="folow-the-journey-title">
            <h1>FOLLOW THE JOURNEY</h1>
          </div>
          <div className="follow-the-journey-herobanner-items1">
            <h1>INTRO</h1>
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
          <div className="follow-the-journey-herobanner-items2">
            <div className="magazine-image-one">
              <img
                src={Hometownheroesbannerimage}
                alt="Hometownheroesbannerimage"
              />
            </div>
            <div className="magazine-image-two">
              <img
                src={Hometownheroesbannerimage2}
                alt="Hometownheroesbannerimage2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followthejourneyherobanner;

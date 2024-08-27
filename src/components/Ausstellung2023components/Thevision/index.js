import React from "react";
import "./thevision.scss";

import Hometownheroesmen1 from "../../../assets/image/hometownheroesmen1.png";

function Thevision() {
  return (
    <div className="the-vision-section-main">
      <div className="the-vision-section-container">
        <div className="the-vision-section">
          <div className="the-vision-content-aliognment">
            <div>
              <img src={Hometownheroesmen1} alt="Hometownheroesmen1" />
              <h1>THE VISION</h1>
            </div>
            <div>
              <p>
                We believe in the power of collective action. Consequently, we
                want to work closely with established local organizations to
                facilitate lasting changes and positive impacts in each country.
                <br />
                <br />
                As we set our sights on the future, our vision includes
                orchestrating exhibitions across Germany, leveraging our robust
                network of partners, clients, and friends. Our aspiration is to
                showcase each unique edition in key cities throughout the
                nation, mirroring the immersive experiences we've thoughtfully
                curated. These events will encompass galleries and collaborative
                sponsorships, aiming to infuse the essence of Hometown Heroes
                into local communities, fostering awareness, solidarity, and
                impactful change. Moreover, these gatherings will serve as
                impactful platforms for raising funds, which will also be
                channeled to organizations within the respective countries.
                These organizations are dedicated to supporting and aiding the
                individuals whose stories we document and whose lives we aim to
                improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thevision;

import React from "react";
import "./herobanner.scss";

import Hometownheroesbannerimage from "../../../assets/image/hometownheroesbannerimage.png";

function Herobanner() {
  return (
    <div className="herobanner-main">
      <div className="herobanner-container">
        <div className="herobanner-hometown-div">
          <div>
            <h1>HOME TOWN HEROES</h1>
          </div>

          <div>
            <p>A PHOTOGRAPHIC JOURNEY THROUGH THE TOWNSHIPS OF CAPE TOWN</p>
          </div>

          <div>
            <img
              src={Hometownheroesbannerimage}
              alt="Hometownheroesbannerimage"
            />
          </div>
        </div>

        <div className="auktion-date-div-main">
          <div>
            <h3>AUKTION 2024 NOCH</h3>

            <div className="auktion-date-alignment-main">
              <div className="auktion-date-alignment">
                <div className="auktion-date-border"></div>
                <div className="auktion-date-show-box-alignment">
                  <div className="auktion-date-show-box">
                    <span>13</span>
                  </div>
                  <p>DAYS</p>
                </div>
                <div className="auktion-date-show-box-alignment">
                  <div className="auktion-date-show-box">
                    <span>23</span>
                  </div>
                  <p>HOURS</p>
                </div>
                <div className="auktion-date-show-box-alignment">
                  <div className="auktion-date-show-box">
                    <span>59</span>
                  </div>
                  <p>MINUTES</p>
                </div>
                <div className="auktion-date-show-box-alignment">
                  <div className="auktion-date-show-box">
                    <span>59</span>
                  </div>
                  <p>seconds</p>
                </div>
              </div>
            </div>

            <div className="fundamental-peragraph-main">
              <p>
                The fundamental idea behind Hometown Heroes is to create a
                platform that amplifies the voices of people in suppressed
                communities. Hometown Heroes represents not just a creative
                endeavor, but an inspiring movement dedicated to supporting
                those who are oppressed in their hometowns - be it due to
                political, religious, or racial circumstances, including
                government corruption. Our mission is to tell their stories of
                oppression and spread the universal message of equality and
                humanity - "Equal as Humans - Despite differences". We harness
                the power of art to raise awareness, nurture empathy, and drive
                social change. Our endeavors aim to strengthen commitment and
                solidarity for a more just world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;

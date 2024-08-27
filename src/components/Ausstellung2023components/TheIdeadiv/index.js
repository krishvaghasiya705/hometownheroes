import React from "react";
import "./theideassection.scss";

import Hometownheroeskid1 from "../../../assets/image/hometownheroeskid1.png";
import Hometownheroeskid2 from "../../../assets/image/hometownheroeskid2.png";
import Hometownheroeskid3 from "../../../assets/image/hometownheroeskid3.png";

function Theideasection() {
  return (
    <div className="the-ideas-section-main">
      <div className="the-ideas-section-container">
        <div>
          <div className="the-ideas-section">
            <div className="hometownheroeskid1-div">
              <img src={Hometownheroeskid1} alt="Hometownheroeskid1" />
            </div>
            <div className="the-idea-title">
              <h1>THE IDEA</h1>
            </div>
          </div>
          <div className="the-ideas-section">
            <p>
              The fundamental idea behind Hometown Heroes is to create a
              platform that amplifies the voices of people in suppressed
              communities. Hometown Heroes represents not just a creative
              endeavor, but an inspiring movement dedicated to supporting those
              who are oppressed in their hometowns - be it due to political,
              religious, or racial circumstances, including government
              corruption. Our mission is to tell their stories of oppression and
              spread the universal message of equality and humanity - "Equal as
              Humans - Despite differences". We harness the power of art to
              raise awareness, nurture empathy, and drive social change. Our
              endeavors aim to strengthen commitment and solidarity for a more
              just world.
            </p>
          </div>
        </div>

        <div className="approach-div-main">
          <div>
            <div className="approach-title">
              <h1>APP RO ACH</h1>
              <div className="hometownheroeskid2-image">
                <img src={Hometownheroeskid2} alt="Hometownheroeskid2" />
              </div>
            </div>
            <p>
              On-Site Documentation and Collaboration with Local Empowerment
              Organizations: Through purposeful journeys to diverse countries,
              we establish authentic connections with the local people. We not
              only listen to their stories, capture their aspirations, and
              preserve them through compelling photographs and films, but we
              also actively collaborate with organizations on the ground that
              provide assistance to the individuals we portray and whose stories
              we accompany and document.
            </p>
          </div>
          <div>
            <img src={Hometownheroeskid3} alt="Hometownheroeskid3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theideasection;

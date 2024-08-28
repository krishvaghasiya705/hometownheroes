import React from "react";
import "./thamnksection.scss";

import Footerimage1 from "../../../assets/footer/footerimage1.png";
import Footerimage2 from "../../../assets/footer/footerimage2.png";

function Thanksection() {
  return (
    <div className="thanks-section-main">
      <div className="thanks-section-container">
        <div className="thanks-section-hometownheroes-div-one">
          <p>
            <span>NOVEMBER 2023</span> In November, Hometown Heroes embarks on a
            transformative journey to Lebanon. Our three-week mission is more
            than just a trip; it's a commitment to stand with those who have
            faced immense adversity. 
            <br />
            <br />
            The situation in Lebanon is dire. The devastating explosion in
            Beirut left countless people without homes, and widespread protests
            reflect the urgency for change in the country. Amidst these
            challenges, we are determined to make a difference. Collaborating
            with local organizations, we will document the stories of
            resilience, hope, and the fight for a better future. 
            <br />
            <br />
            By shedding light on the struggles faced by these brave individuals,
            we aim to inspire change, not only within Lebanon but around the
            world. Together, we can amplify their voices and support the
            organizations working tirelessly to rebuild lives and restore hope.
            Stay tuned for updates on our journey, as we strive to bring about
            positive change in the lives of those who need it most.
          </p>
          <div className="thanks-sectionimage-div-main">
            <h1>HOMETOWN HEROES</h1>
            <img src={Footerimage1} alt="Footerimage1" />
            <span>LEBANON</span>
          </div>
        </div>
        <div className="thanks-section-hometownheroes-div-two">
          <div className="thanks-sectionimage-div-main thanks-sectionimage-div-main-sc">
            <h1>THANK YOU</h1>
            <img src={Footerimage2} alt="Footerimage2" />
          </div>
          <p>
            We extend our heartfelt gratitude for taking the time to explore the
            story, mission, and future of Hometown Heroes. 
            <br />
            <br />
            Your commitment to understanding our vision is deeply appreciated.
            We believe that positive change begins with awareness, and your
            engagement is a vital step in that direction. Together, we can
            amplify our message of equality, humanity, and compassion, and
            inspire the world to make a difference. 
            <br />
            <br />
            We look forward to the possibility of joining forces with you to
            create a brighter, more equitable future for all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thanksection;

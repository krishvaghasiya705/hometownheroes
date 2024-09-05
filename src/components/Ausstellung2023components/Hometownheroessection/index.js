import React from "react";
import "./hometownheroessection.scss";

import hometownheroeskid4 from "../../../assets/image/hometownheroeskid4.png";
import hometownheroeswomen1 from "../../../assets/image/hometownheroeswomen1.png";

function Hometownheroessection() {
  return (
    <div className="home-town-heroes-section-main">
      <div className="home-town-heroes-section-container">
        <div className="home-town-heroes-section">
          <h1>HOMETOWN HEROES</h1>
          <img src={hometownheroeskid4} alt="hometownheroeskid4" />
          <div>
            <span>“EQUAL AS HUMANS - DESPITE DIFFERENCES“</span>
            <h1>THE FUTURE</h1>
          </div>
        </div>

        <div className="home-town-heroes-section-pera">
          <img src={hometownheroeswomen1} alt="hometownheroeswomen1" />
          <div>
            <p>
              We invite you to join us on a remarkable journey - a journey that
              transcends borders, cultures, and disparities. Hometown Heroes is
              not just a project; it is a profound movement that harnesses the
              power of art, compassion, and collective action to change lives
              and inspire hope.
            </p>
            <p>
              At the heart of Hometown Heroes lies a powerful mission - to shed
              light on the stories of those living in their hometowns, bound by
              circumstances that often oppress them - be it political,
              religious, or racial, including government corruption. Our mission
              is to capture their narratives of struggle and resilience and
              amplify the universal message of equality and humanity:
            </p>
            <p>"Equal as Humans, Despite Differences."</p>
            <p>
              We wholeheartedly invite you to become a part of this
              transformative journey. Your support and partnership can help
              catalyze global change and give a voice to those who need it most.
              Together, we can carry the message of Hometown Heroes to the world
              and drive profound transformations.
            </p>
            <p>
              In becoming a sponsor or patron, you're not just supporting a
              project; you're investing in a movement that stands for equality,
              human rights, and the fight against corruption. Contact us today
              to explore how we can create positive change together.
            </p>
            <p>
              Thank you for considering Hometown Heroes as a platform for your
              philanthropic endeavors. We eagerly await your partnership in
              building a brighter, more compassionate world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hometownheroessection;

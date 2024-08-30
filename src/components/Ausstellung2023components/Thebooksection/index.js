import React from "react";
import "./thebooksection.scss";

import Hometownheroescoffeewithpaperimage from "../../../assets/image/hometownheroescoffeewithpaperimage.png";

function Thebooksection() {
  return (
    <div className="thebook-section-main">
      <div className="thebook-section-container">
        <div className="thebook-section">
          <div>
            <h1>THE BOOK</h1>
          </div>
          <div className="hometownheroescoffeewithpaperimage">
            <img
              src={Hometownheroescoffeewithpaperimage}
              alt="Hometownheroescoffeewithpaperimage"
            />
          </div>
          <div>
            <p>
              The Hometown Heroes Photobook is more than just pictures; it's an
              emotional journey through Cape Town's vibrant life. Across 144
              pages, it brings you face-to-face with the hopes and struggles of
              the people we met.
            </p>
            <p>
              As you flip through, you'll dive into the heart of Cape Town,
              feeling the authenticity of each image. It's not just a book; it's
              a commitment to change.
            </p>
            <p>
              Each purchase supports organizations on the ground, making a real
              impact in the lives we capture. This is just the beginning. For
              every Hometown Heroes edition in the future, there will be a
              corresponding photobook—a captivating coffee table book.
            </p>
            <p>
              Each book purchase continues to make a difference, contributing to
              organizations dedicated to supporting those in need in each
              respective country.
            </p>
            <p>
              Join us as we explore the world through our lens, capturing the
              essence of humanity in every corner of the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thebooksection;

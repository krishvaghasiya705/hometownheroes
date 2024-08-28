import React from "react";
import "./Lwandleherobanner.scss";

import lwandeimage from "../../../assets/homtownheroesminipageimages/lwandle.png";
function Lwandleherobanner() {
  return (
    <>
      <div className="lwandle-herobanner-main">
        <div className="lwandle-herobanner-container">
          <div className="lwandle-herobanner">
            <div className="homtownheroes-mini-page-image-alignment">
              <img src={lwandeimage} alt="lwandeimage" />
            </div>
            <div className="lwandle-herobanner-content">
              <div className="lwandle-title">
                <h1>LWANDLE</h1>
                <p>
                  Jetzt Gebot abgeben und das Projekt unterstützen. Gib einfach
                  deine Kontaktdaten in das Eingabefeld und dein Gebot für das
                  Bild ab.
                </p>
              </div>
              <form>
                <h2>Startgebot pro Bild: 300€</h2>
                <div className="input-div-main">
                  <label>Vorname *</label>
                  <input type="text" name="" id="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lwandleherobanner;

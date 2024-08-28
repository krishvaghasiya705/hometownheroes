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
                <div className="input-div-main-alignment">
                  <div className="input-div-main">
                    <label>Vorname *</label>
                    <input type="text" placeholder="Vorname *" />
                  </div>
                  <div className="input-div-main">
                    <label>Nachname *</label>
                    <input type="text" placeholder="Nachname *" />
                  </div>
                </div>
                <div className="input-div-main">
                  <label>Firma</label>
                  <input type="text" placeholder="Firma" />
                </div>
                <div className="input-div-main">
                  <label>E-Mail-Adresse *</label>
                  <input type="text" placeholder="E-Mail-Adresse *" />
                </div>
              </form>
              <div className="gebot-div-main">
                <h3>Gebot</h3>
                <div className="input-div-main-alignment">
                  <div className="input-div-main">
                    <label>Gebot in € *</label>
                    <input type="text" placeholder="300€" />
                  </div>
                  <div className="input-div-main"></div>
                </div>
                <div className="redio-input-main">
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <p>
                    Es gelten die AGB. Ich habe die Datenschutzerklärung zur
                    Kenntnis genommen.
                  </p>
                </div>
                <div className="gebot-button-main">
                  <button>Gebot abgeben</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lwandleherobanner;

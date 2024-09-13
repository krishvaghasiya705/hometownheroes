import React from "react";
import "./Lwandleherobanner.scss";
import { useLocation } from "react-router-dom";
import lwandeimage1 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages1.webp";

function Lwandleherobanner({ hideImage = false, showText = false, title: propTitle, paragraph, showBidButton = true, showMessageButton = true }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = propTitle || queryParams.get("title") || "LWANDLE";
  const imageSrc = queryParams.get("image") || lwandeimage1;

  const isDonatePage = location.pathname === "/donate";

  return (
    <div className="lwandle-herobanner-main">
      <div className="lwandle-herobanner-container">
        <div className="lwandle-herobanner">
          <div className="homtownheroes-mini-page-image-alignment">
            {!hideImage && <img src={imageSrc} alt={title} rel="preload" />}
            {showText && <h1>DONATE</h1>}
          </div>
          <div className="lwandle-herobanner-content-main">
            <div className="lwandle-herobanner-content">
              <div className="lwandle-title">
                <h1>{title}</h1>
                <p>{paragraph}</p>
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

                {isDonatePage && (
                  <div className="donate-telefon-nachricht-div">
                    <div className="input-div-main">
                      <label>Telefonnummer *</label>
                      <input type="text" placeholder="Telefonnummer *" />
                    </div>
                    <div className="input-div-main">
                      <label>Nachricht an uns *</label>
                      <input type="text" placeholder="Nachricht an uns *" />
                    </div>
                  </div>
                )}
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
                  <input type="checkbox" id="agb" name="agb" value="agb" />
                  <p>
                    Es gelten die AGB. Ich habe die Datenschutzerklärung zur
                    Kenntnis genommen.
                  </p>
                </div>
                <div className="gebot-button-main">
                  {showBidButton && <button>Gebot abgeben</button>}
                  {showMessageButton && <button>Nachricht senden</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lwandleherobanner;
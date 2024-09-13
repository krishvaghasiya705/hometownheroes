import React from "react";
import "./Impressumsection.scss";
import { NavLink } from "react-router-dom";

function Impressumsection() {
  return (
    <div className="impressum-section-main">
      <div className="impressum-container">
        <div className="impressum-section">
          <div className="impressum-title-web">
            <h1>IMPRESSUM</h1>
          </div>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
            sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
            sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
            der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            Sämtliche Bilder und Grafiken sind rechtlich geschützt und gehören
            Tom von Below.
          </p>
          <div className="contact-details-impressum">
            <div>
              <p>Angaben gemäß § 5 TMG</p>
            </div>
            <div className="link-div">
              <h2>HOMETOWN HEROES</h2>
              <NavLink to={"/"} aria-label="home">Vertreten durch:</NavLink>
              <NavLink to={"/"} aria-label="home">Tom von Below</NavLink>
            </div>
            <div className="link-div">
              <h2>Kontakt:</h2>
              <NavLink to={"/"} aria-label="home">Frickestraße 83</NavLink>
              <NavLink to={"/"} aria-label="home">20251 Hamburg</NavLink>
            </div>
            <div className="link-div">
              <h2>E-Mail:</h2>
              <h2>
                <a href="mailto:info@hometown-heroes.de">info@hometown-heroes.de</a>
              </h2>
              <NavLink to={"/"} aria-label="home">Haftungsausschluss:</NavLink>
              <NavLink to={"/"} aria-label="home">Haftung für Inhalte</NavLink>
            </div>
          </div>
          <div className="impressum-title-mobile">
            <h1>IMPRESSUM</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressumsection;

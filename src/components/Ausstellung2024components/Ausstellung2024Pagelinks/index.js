import React from "react";
import "./ausstellung2024pagelinks.scss";
import { NavLink } from "react-router-dom";

/* <------------------- images -------------------> */
import lwandeimage1 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages1.png";
import lwandeimage2 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages2.png";
import lwandeimage3 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages3.png";
import lwandeimage4 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages4.png";
import lwandeimage5 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages5.png";
import lwandeimage6 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages6.png";
import lwandeimage7 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages7.png";
import lwandeimage8 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages8.png";
import lwandeimage9 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages9.png";
import lwandeimage10 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages10.png";
import lwandeimage11 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages11.png";
import lwandeimage12 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages12.png";
import lwandeimage13 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages13.png";
import lwandeimage14 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages14.png";
import lwandeimage15 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages15.png";
import lwandeimage16 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages16.png";
import lwandeimage17 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages17.png";
import lwandeimage18 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages18.png";
import lwandeimage19 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages19.png";
import lwandeimage20 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages20.png";
import lwandeimage21 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages21.png";
import lwandeimage22 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages22.png";
import lwandeimage23 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages23.png";
import lwandeimage24 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages24.png";
import lwandeimage25 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages25.png";
import lwandeimage26 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages26.png";
import lwandeimage27 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages27.png";
import lwandeimage28 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages28.png";
import lwandeimage29 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages29.png";
import lwandeimage30 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages30.png";
import lwandeimage31 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages31.png";
import lwandeimage32 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages32.png";
import lwandeimage33 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages33.png";
import lwandeimage34 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages34.png";
import lwandeimage35 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages35.png";
import lwandeimage36 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages36.png";
import lwandeimage37 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages37.png";
import lwandeimage38 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages38.png";
import lwandeimage39 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages39.png";
import lwandeimage40 from "../../../assets/homtownheroesminipageimages/homtownheroesminipageimages40.png";

const links = [
  {
    path: "/tomvonbelow",
    labelnumbers: "# 1 ",
    labeltext: "LWANDLE",
    image: lwandeimage1,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 2 ",
    labeltext: "BETWEEN WALLS OF REALITY",
    image: lwandeimage2,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 3 ",
    labeltext: "UNTROUBLED SPIRITS",
    image: lwandeimage3,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 4 ",
    labeltext: "The Bond of Resilience",
    image: lwandeimage4,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 5 ",
    labeltext: "Small Protector",
    image: lwandeimage5,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 6 ",
    labeltext: "Sweet like grapes",
    image: lwandeimage6,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 7 ",
    labeltext: "Through my lens",
    image: lwandeimage7,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 8 ",
    labeltext: "Troublemaker",
    image: lwandeimage8,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 9 ",
    labeltext: "The CEO",
    image: lwandeimage9,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 10 ",
    labeltext: "Snackprotector",
    image: lwandeimage10,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 11 ",
    labeltext: "Where Every Corner Speaks",
    image: lwandeimage11,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 12 ",
    labeltext: "Unfixed views",
    image: lwandeimage12,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 13 ",
    labeltext: "Lines of Light",
    image: lwandeimage13,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 14 ",
    labeltext: "Kissed by the Rain I.",
    image: lwandeimage14,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 15 ",
    labeltext: "Kissed by the Rain II.",
    image: lwandeimage15,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 16 ",
    labeltext: "Kissed by the Rain III.",
    image: lwandeimage16,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 17 ",
    labeltext: "Life is Contrast",
    image: lwandeimage17,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 18 ",
    labeltext: "Pampers",
    image: lwandeimage18,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 19 ",
    labeltext: "Ubuntu",
    image: lwandeimage19,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 20 ",
    labeltext: "Be a man",
    image: lwandeimage20,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 21 ",
    labeltext: "My Home",
    image: lwandeimage21,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 22 ",
    labeltext: "Truckload full of Joy",
    image: lwandeimage22,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 23 ",
    labeltext: "PEACE",
    image: lwandeimage23,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 24 ",
    labeltext: "Crossroad",
    image: lwandeimage24,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 25 ",
    labeltext: "Lollipop Eyes",
    image: lwandeimage25,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 26 ",
    labeltext: "Cycle of Life",
    image: lwandeimage26,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 27 ",
    labeltext: "Circle of Wisdom",
    image: lwandeimage27,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 28 ",
    labeltext: "Seeds of Tomorrow",
    image: lwandeimage28,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 29 ",
    labeltext: "Glance of Memory",
    image: lwandeimage29,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 30 ",
    labeltext: "Legacy of Light",
    image: lwandeimage30,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 31 ",
    labeltext: "Minds in Motion",
    image: lwandeimage31,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 32 ",
    labeltext: "Heartstrings",
    image: lwandeimage32,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 33 ",
    labeltext: "In the Blink of an Eye",
    image: lwandeimage33,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 34 ",
    labeltext: "Rhythms of the Night",
    image: lwandeimage34,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 35 ",
    labeltext: "Silent Shadows",
    image: lwandeimage35,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 36 ",
    labeltext: "Windows to the Soul",
    image: lwandeimage36,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 37 ",
    labeltext: "Echoes of the Past",
    image: lwandeimage37,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 38 ",
    labeltext: "Spirit of the Streets",
    image: lwandeimage38,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 39 ",
    labeltext: "Hues of Happiness",
    image: lwandeimage39,
  },
  {
    path: "/tomvonbelow",
    labelnumbers: "# 40 ",
    labeltext: "Colors of the Wind",
    image: lwandeimage40,
  },
];

function Ausstellung2024pagelinks() {
  return (
    <div className="ausstellung-2024-page-links-main">
      {links.map((link, index) => (
        <div key={index} className="ausstellung-2024-page-link">
          <NavLink
            to={`${link.path}?title=${encodeURIComponent(
              link.labeltext
            )}&image=${encodeURIComponent(link.image)}`}
          >
            {link.labelnumbers}
            {link.labeltext}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Ausstellung2024pagelinks;

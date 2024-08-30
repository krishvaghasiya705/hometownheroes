import React from "react";
import "./ausstellung2024pagelinks.scss";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/tomvonbelow", label: "# 1 LWANDLE" },
  { path: "/tomvonbelow", label: "# 2 BETWEEN WALLS OF REALITY" },
  { path: "/tomvonbelow", label: "# 3 UNTROUBLED SPIRITS" },
  { path: "/tomvonbelow", label: "# 4 The Bond of Resilience" },
  { path: "/tomvonbelow", label: "# 5 Small Protector" },
  { path: "/tomvonbelow", label: "# 6 Sweet like grapes" },
  { path: "/tomvonbelow", label: "# 7 Through my lens" },
  { path: "/tomvonbelow", label: "# 8 Troublemaker" },
  { path: "/tomvonbelow", label: "# 9 The CEO" },
  { path: "/tomvonbelow", label: "# 10 Snackprotector" },
  { path: "/tomvonbelow", label: "# 11 Where Every Corner Speaks" },
  { path: "/tomvonbelow", label: "# 12 Unfixed views" },
  { path: "/tomvonbelow", label: "# 13 Lines of Light" },
  { path: "/tomvonbelow", label: "# 14 Kissed by the Rain I." },
  { path: "/tomvonbelow", label: "# 15 Kissed by the Rain II." },
  { path: "/tomvonbelow", label: "# 16 Kissed by the Rain III." },
  { path: "/tomvonbelow", label: "# 17 Life is Contrast" },
  { path: "/tomvonbelow", label: "# 18 Pampers" },
  { path: "/tomvonbelow", label: "# 19 Ubuntu" },
  { path: "/tomvonbelow", label: "# 20 Be a man" },
  { path: "/tomvonbelow", label: "# 21 My Home" },
  { path: "/tomvonbelow", label: "# 22 Truckload full of Joy" },
  { path: "/tomvonbelow", label: "# 23 PEACE" },
  { path: "/tomvonbelow", label: "# 24 Outer World" },
  { path: "/tomvonbelow", label: "# 25 Take my Hand" },
  { path: "/tomvonbelow", label: "# 26 Still Growing" },
  { path: "/tomvonbelow", label: "# 27 Are you a Photographer?" },
  { path: "/tomvonbelow", label: "# 28 Imizamo Yethu" },
  { path: "/tomvonbelow", label: "# 29 Still Smiling" },
  { path: "/tomvonbelow", label: "# 30 Too Slow" },
  { path: "/tomvonbelow", label: "# 31 Small Gestures" },
  { path: "/tomvonbelow", label: "# 32 Hometown Hero" },
  { path: "/tomvonbelow", label: "# 33 Little Ms. Sunshine" },
  { path: "/tomvonbelow", label: "# 34 Garfield" },
  { path: "/tomvonbelow", label: "# 35 Barbershop" },
  { path: "/tomvonbelow", label: "# 36 Streetwear" },
  { path: "/tomvonbelow", label: "# 37 The Gentlemen" },
  { path: "/tomvonbelow", label: "# 38 Hats Low, Spirits High" },
  { path: "/tomvonbelow", label: "# 39 Likho" },
  { path: "/tomvonbelow", label: "# 40 Young Gentlemen" },
];

function Ausstellung2024pagelinks() {
  return (
    <div className="ausstellung-2024-page-links-main">
      {links.map((link, index) => (
        <div key={index} className="ausstellung-2024-page-link">
          <NavLink to={link.path}>{link.label}</NavLink>
        </div>
      ))}
    </div>
  );
}

export default Ausstellung2024pagelinks;

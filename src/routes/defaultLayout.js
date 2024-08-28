import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import useBodyBackgroundColor from "../components/useBodyBackgroundColor";
import ScrollToTop from "../components/ScrollToTop";

export default function DefaultLayout() {
  useBodyBackgroundColor();
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

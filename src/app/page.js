import React from "react";
import Banner from "./component/Banner";
import "./globals.css";
import About from "./component/About";
import Service from "./component/Service";
import TruAi from "./component/TruAi";
import Card from "./component/Card";
import Vision from "./component/Vision";
import Blog from "./component/Blog";
import Accordian from "./component/Accordian";
import Map from "./component/Map";
import Footer from "./component/Footer";

function page() {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <TruAi />
      <Card />
      <Vision />
      <Blog />
      <Accordian />
      <Map />
    </>
  );
}

export default page;

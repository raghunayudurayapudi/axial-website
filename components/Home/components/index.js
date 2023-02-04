import React from "react";
import About from "./about";
import Technologies from "./technologies";
import Clients from "./clients";
import GetInTouch from "./getintouch";
import HeroSection from "./heroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Technologies />
      <Clients />
      <GetInTouch />
    </>
  );
};

export default Home;

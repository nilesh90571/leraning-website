import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import AboutCard from "../About/AboutCard";
import HAbout from "./HAbout";
import Testimonal from "../Testimonial/Testimonal";
import Hblog from "./Hblog";
import Hprice from "./Hprice";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  );
};

export default Home;

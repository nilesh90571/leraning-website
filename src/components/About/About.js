import React, { useEffect } from "react";
import Back from "../Home/back";
import AboutCard from "./AboutCard";

const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page");
    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);
  return (
    <>
      <Back title="About Us" />
      <AboutCard />
    </>
  );
};

export default About;

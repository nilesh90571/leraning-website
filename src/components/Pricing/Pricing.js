import React, { useEffect } from "react";
import Back from "../Home/back";
import PriceCard from "./PriceCard";
import "./price.css";
import Faq from "./Faq";

const Pricing = () => {
  useEffect(() => {
    document.body.classList.add("price-page");
    return () => {
      document.body.classList.remove("price-page");
    };
  }, []);
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;

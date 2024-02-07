import React from "react";
import Heading from "../Hero/Title";
import PriceCard from "../Pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
        <div className="price container">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;

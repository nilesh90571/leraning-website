import React, { useEffect } from "react";
import Back from "../Home/back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../About/Awrapper";
import "../About/about.css";

const Team = () => {
  useEffect(() => {
    document.body.classList.add("team-page");
    return () => {
      document.body.classList.remove("team-page");
    };
  }, []);
  return (
    <>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default Team;

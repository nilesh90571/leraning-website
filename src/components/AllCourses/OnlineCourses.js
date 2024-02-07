import React from "react";
import "./courses.css";
import { online } from "../../dummydata.js";
import Title from "../Hero/Title";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="COURSES" title="Browse Our Online Courses" />
          <div className="content onlinecou">
            {online.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <img src={val.hoverCover} alt="" className="show" />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;

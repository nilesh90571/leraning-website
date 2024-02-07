import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <Link to="/">
              <h1>EDUCATION</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </Link>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;

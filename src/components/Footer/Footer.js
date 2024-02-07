import React from "react";
import { blog } from "../../dummydata";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container news">
          <div className="left row">
            <h1>
              Subscribe to our latest newsletter to get news about upcoming
              details
            </h1>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer className="footer-block">
        <div className="container padding">
          <div className="box logo">
            <Link to="/">
              <h1>EDUCATION</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/courses">
                <li>Courses</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
              <Link to="/team">
                <li>Team</li>
              </Link>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                JTM Mall, Jaipur
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +1234567895
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                abc@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 All rights reserved by Nilesh</p>
      </div>
    </>
  );
};

export default Footer;

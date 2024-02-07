import React, { useEffect, useState } from "react";
import Back from "../Home/back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      Comment: ''
    });
    setIsSubmitted(true);
  };
  const isSubmitDisabled = Object.values(formData).some((value) => value === '');
  useEffect(() => {
    document.body.classList.add("contact-page");
    return () => {
      document.body.classList.remove("contact-page");
    };
  }, []);
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>JTM Mall, Jaipur</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> abc@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +1234567895</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10"
                type="text"
                name="Comment"
                id="comment"
                placeholder="Message"
                value={formData.Comment}
                onChange={handleChange}
              />
              <button type="submit" className="primary-btn" disabled={isSubmitDisabled}>SEND MESSAGE</button>
              {isSubmitted && (
                <p className="text-green-600 mt-3">Form submitted successfully!</p>
              )}
            </form>

            <h3>Follow us here</h3>
            <span>
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

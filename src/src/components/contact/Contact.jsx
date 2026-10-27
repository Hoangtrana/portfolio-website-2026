import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Contact information</h5>
      <h2>Get in touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-heading">
              <MdOutlineMail className="contact__option-icon" aria-hidden="true" />
              <h4>Email</h4>
            </div>
            <p className="contact__address">hoanganh.tnvn@gmail.com</p>
            <a className="contact__link" href="mailto:hoanganh.tnvn@gmail.com">
              Send an email <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="contact__option">
            <div className="contact__option-heading">
              <BsLinkedin className="contact__option-icon" aria-hidden="true" />
              <h4>LinkedIn</h4>
            </div>
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/ahoangtran/"
              target="_blank"
              rel="noreferrer"
            >
              Visit my LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;

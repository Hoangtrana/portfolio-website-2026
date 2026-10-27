import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
          </ul>
        </article>

        {/*End of UI UX*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
          </ul>
        </article>
        {/*End of Webdevelopment*/}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ..... </p>
            </li>
          </ul>
        </article>
        {/**End of Contend creation */}
      </div>
    </section>
  );
}

export default Services;

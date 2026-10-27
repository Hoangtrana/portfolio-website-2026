import React from "react";
import "./footer.css";
import MyLogo from "../../assets/MyLogo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer__copyright">
        <img src={MyLogo} alt="logo" className="footer__image" />
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "../Assets/css/info-footer.css";
import phone from "../Assets/img/phone.png";
import adress from "../Assets/img/location.png";
import email_logo from "../Assets/img/email.png";

export default function Footer() {
  return (
    <div className="info-footer">
      <div className="info-footer-div">
        <h6>
          {" "}
          <img src={adress} alt=""></img>האורגים 25, אשדוד
        </h6>{" "}
        <a href="mailto:office@fastway.co.il">
          <h5>
            {" "}
            <img src={email_logo} alt=""></img>
            office@fastway.co.il
          </h5>
        </a>
        <a href="tel:050-950-5955">
          {" "}
          <h5>
            <img src={phone} alt=""></img> 050-950-5955
          </h5>
        </a>
        <h6>
          <div style={{ color: "#333" }}>#</div> כל הזכויות שמורות © 2020 פאסט
          וואי אקספרס בע”מ
        </h6>
      </div>
    </div>
  );
}

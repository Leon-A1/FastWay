import React from "react";
import wa from "../Assets/img/whatsapp.png";
import gmail from "../Assets/img/gmail.png";
import call_phone from "../Assets/img/call_phone.png";
import messanger from "../Assets/img/messanger.png";
import "../Assets/css/side-icon-links.css";
export default function SideIconLinks() {
  return (
    <div className="links-bar">
      <a href="tel:050-950-5955">
        <img src={call_phone} alt="" />
      </a>
      <a href="https://messenger/t/fastway.co.il/+97250-950-5955">
        <img src={messanger} alt=""></img>
      </a>
      <a href="https://wa.me/+97250-950-5955">
        <img src={wa} alt=""></img>{" "}
      </a>
      <a href="mailto:office@fastway.co.il">
        <img src={gmail} alt=""></img>
      </a>{" "}
    </div>
  );
}

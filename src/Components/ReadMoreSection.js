import React from "react";
import logo_image from "../Assets/img/logo.png";

import "../Assets/css/aos.css";
import "../Assets/css/read-more-section.css";

export default function ReadMoreSection() {
  return (
    <div className="read-more-section">
      <p>מערכת מעקב אחר משלוחים</p>
      <button>מידע נוסף</button>
      <img src={logo_image} alt=""></img>
    </div>
  );
}

import React from "react";
import del_img from "../Assets/img/delivery3.jpg";
// import del_img2 from "../Assets/img/delivery2.jpg";
import "../Assets/css/header.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Fast Way Carousel</h1>
      <img className="carousel-img-one" src={del_img} alt=""></img>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/SlidingResponsiveNavbar.css";
import logo from "../Assets/img/logo.png";
import "../Assets/css/aos.css";
import call_phone from "../Assets/img/call_phone.png";

// import Home from "./Home";
// import CompanyProfile from "./CompanyProfile";
// import GetInContact from "./GetInContact";

export default function SlidingResponsiveNavbar() {
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("mobile-call_now_container_id").style.transform =
  //       "translateY(0)";
  //     document.getElementById("navBarLogo").style.top = "40px";
  //     document.getElementById("hamburger-button-id").style.top = "65px";
  //     // document.getElementById("topNavbarItems").style.height = "120px";
  //   } else {
  //     document.getElementById("mobile-call_now_container_id").style.transform =
  //       "translateY(-100px)";
  //     document.getElementById("navBarLogo").style.top = "10px";
  //     document.getElementById("hamburger-button-id").style.top = "35px";
  //     // document.getElementById("topNavbarItems").style.height = "100px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  function openSlideMenu() {
    document.getElementById("links-bar").style.transform = "translateX(300px)";

    document.getElementById("side-menu").style.width = "250px";
    // document.getElementById("navBarLogo").style.opacity = "30%";
    // document.getElementById("topNavbarItems").style.opacity = "30%";
    document.getElementById("home-small-nav-item").style.opacity = "1";
    document.getElementById("about-small-nav-item").style.opacity = "1";
    document.getElementById("ecom-small-nav-item").style.opacity = "1";
    document.getElementById("services-small-nav-item").style.opacity = "1";
    document.getElementById("needed-small-nav-item").style.opacity = "1";
    document.getElementById("contact-small-nav-item").style.opacity = "1";

    document.getElementById("home-small-nav-item").style.transition =
      "300ms ease-in 400ms";
    document.getElementById("about-small-nav-item").style.transition =
      "300ms ease-in 500ms";
    document.getElementById("ecom-small-nav-item").style.transition =
      "300ms ease-in 600ms";
    document.getElementById("services-small-nav-item").style.transition =
      "300ms ease-in 700ms";
    document.getElementById("needed-small-nav-item").style.transition =
      "300ms ease-in 800ms";

    document.getElementById("contact-small-nav-item").style.transition =
      "300ms ease-in 900ms";
  }

  function closeSlideMenu() {
    // document.getElementById("links-bar").style.width = "50px";
    document.getElementById("links-bar").style.transform = "translateX(0)";

    document.getElementById("home-small-nav-item").style.opacity = "0";
    document.getElementById("about-small-nav-item").style.opacity = "0";
    document.getElementById("services-small-nav-item").style.opacity = "0";
    document.getElementById("needed-small-nav-item").style.opacity = "0";
    document.getElementById("ecom-small-nav-item").style.opacity = "0";
    document.getElementById("contact-small-nav-item").style.opacity = "0";

    document.getElementById("home-small-nav-item").style.transition = "100ms";
    document.getElementById("about-small-nav-item").style.transition = "100ms";
    document.getElementById("services-small-nav-item").style.transition =
      "100ms";
    document.getElementById("needed-small-nav-item").style.transition = "100ms";
    document.getElementById("ecom-small-nav-item").style.transition = "100ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "100ms";

    document.getElementById("side-menu").style.width = "0";
  }

  return (
    <div style={{ zIndex: 100, position: "fixed" }}>
      <nav className="navbar">
        <span id="hamburger-button-id">
          <button className="open-slide" onClick={openSlideMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#d94948" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#d94948" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#d94948" strokeWidth="5" />
            </svg>
          </button>
        </span>
        <ul id="topNavbarItems">
          <li>
            <NavLink to="/" exact>
              בית
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              אודות
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              e-Commerce
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              שירותי חברה
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              דרושים
            </NavLink>
          </li>
          <li>
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
        </ul>
        <div
          id="mobile-call_now_container_id"
          className="mobile-call_now_container"
        >
          <a href="tel:050-950-5955">
            {/* <h5>?צריכים שליח</h5> */}
            050-950-5955
            {/* <span>&#9742;</span> */}
            <span role="img" aria-hidden>
              &#128222;
            </span>
          </a>
        </div>
        <div className="call_now_container">
          <a href="tel:050-950-5955">
            <img className="call_now_icon" src={call_phone} alt=""></img>
            <h5>?צריכים שליח</h5>
            <h3>050-950-5955</h3>
          </a>
        </div>

        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li id="home-small-nav-item">
            <NavLink to="/" exact>
              בית
            </NavLink>
          </li>
          <li id="about-small-nav-item">
            <NavLink to="/" exact>
              אודות
            </NavLink>
          </li>
          <li id="ecom-small-nav-item">
            <NavLink to="/" exact>
              e-Commerce
            </NavLink>
          </li>
          <li id="services-small-nav-item">
            <NavLink to="/" exact>
              שירותי חברה
            </NavLink>
          </li>
          <li id="needed-small-nav-item">
            <NavLink to="/" exact>
              דרושים
            </NavLink>
          </li>
          <li id="contact-small-nav-item">
            <NavLink to="/" exact>
              צור קשר
            </NavLink>
          </li>
        </ul>

        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>
      </div>
    </div>
  );
}

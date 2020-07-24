import React from "react";
import { NavLink } from "react-router-dom";
import "../Assets/css/SlidingResponsiveNavbar.css";
import logo from "../Assets/img/logo.png";
import "../Assets/css/aos.css";
// import Home from "./Home";
// import CompanyProfile from "./CompanyProfile";
// import GetInContact from "./GetInContact";

export default function SlidingResponsiveNavbar() {
  function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
    // document.getElementById("navBarLogo").style.opacity = "30%";
    // document.getElementById("topNavbarItems").style.opacity = "30%";
    document.getElementById("home-small-nav-item").style.opacity = "1";
    document.getElementById("profile-small-nav-item").style.opacity = "1";
    document.getElementById("contact-small-nav-item").style.opacity = "1";
    document.getElementById("home-small-nav-item").style.transition =
      "300ms ease-in 300ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "300ms ease-in 500ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "300ms ease-in 700ms";
  }

  function closeSlideMenu() {
    document.getElementById("home-small-nav-item").style.opacity = "0";
    document.getElementById("profile-small-nav-item").style.opacity = "0";
    document.getElementById("contact-small-nav-item").style.opacity = "0";

    document.getElementById("side-menu").style.width = "0";
    // document.getElementById("topNavbarItems").style.opacity = "100%";
    // document.getElementById("navBarLogo").style.opacity = "100%";
    document.getElementById("home-small-nav-item").style.transition = "200ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "150ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "100ms";
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
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
          <li>
            <NavLink to="/companyprofile">פרופיל חברה</NavLink>
          </li>
          <li>
            <NavLink to="/" exact>
              עמוד הבית
            </NavLink>
          </li>
        </ul>
        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li id="home-small-nav-item">
            <NavLink to="/" exact>
              עמוד הבית
            </NavLink>
          </li>
          <li id="profile-small-nav-item">
            <NavLink to="/companyprofile">פרופיל חברה</NavLink>
          </li>
          <li id="contact-small-nav-item">
            <NavLink to="/getintouch">צור קשר</NavLink>
          </li>
        </ul>

        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>
      </div>
    </div>
  );
}

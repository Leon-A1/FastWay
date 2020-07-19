import React from "react";
import "../Assets/css/company-profile.css";

// import headerBackgroundImg from "../Assets/img/page-header-background.jpg";
import Footer from "../Components/InfoFooter";

export default function GetInContact() {
  return (
    <div class="Page-layout-div">
      <div className="page-header">
        {/* <img className="header-image" src={headerBackgroundImg} alt=""></img> */}
      </div>
      <div className="company-profile-content">
        <div className="access-navbar">
          {" "}
          <a href="/">דף הבית</a> » <a href="/getintouch">צרו קשר</a>
        </div>
        <h2>צרו קשר</h2>
        <h3 style={{ padding: 10 }}>קבוצת ס.א.ד בע"מ</h3>
        <p>515861862</p>
        <p>קבלן רשום בסיווג 100 ג1 </p>
        <p> מס' קבלן (רישיון): 33404</p>
        <p>danieldvxl@gmail.com</p>
        <p>אשדוד</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

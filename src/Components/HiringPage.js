import React, { useEffect } from "react";
import SideIconLinks from "./SideIconLinks";
import InfoFooter from "./InfoFooter";
import "../Assets/css/hiring-page.css";
import LandingPageForm from "./LandingPageForm.js";
import del_img from "../Assets/img/delivery2.jpg";
import truck_icon from "../Assets/img/truck_icon.png";

import Aos from "aos";

function HiringPage() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <div>
      <div className="hiring-page-header">
        <div className="header-backlight"></div>
        <img src={del_img} alt=""></img>
        <h1>דרושים</h1>
      </div>
      <div className="hiring-page-wrapper">
        <div className="hiring-page-content">
          <div className="open-positions-container">
            <div className="open-position">
              <img src={truck_icon} alt=""></img>

              <h3>דרוש/ה נהג/ת קטנוע</h3>
              <h4>לחברת שליחויות באשדוד דרושים שליחים</h4>
              <p>
                משרה מלאה בימים א’-ו’, אפשרות לעבודה במוצש. שכר גבוהה למתאימים
                אפשרות למשרה חלקית, משמרות. המשרה מתאימה לחיילים, סטודנטים
                ותלמידים כאחד
              </p>
              <h6>רישיון נהיגה לקטנוע בתוקף (חובה)</h6>
              <h6>ניסיון בשליחויות (יתרון)</h6>
              <h6>נכונות לעבודה קשה</h6>
              <h6>אמינות</h6>
              <h6>תודעת שירות גבוה וחריצות</h6>
              <h6>יחסי אנוש מצויינים</h6>
              <h6>נכונות לשעות נוספות</h6>
              <h6> !!!עבר ללא דופי </h6>
            </div>
          </div>
        </div>
      </div>
      <LandingPageForm />
      <SideIconLinks />

      <div id="hiring-page-footer">
        <InfoFooter />
      </div>
    </div>
  );
}

export default HiringPage;

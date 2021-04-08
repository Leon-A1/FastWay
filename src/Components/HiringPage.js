import React, { useEffect } from "react";
import SideIconLinks from "./SideIconLinks";
import InfoFooter from "./InfoFooter";
import "../Assets/css/hiring-page.css";
import del_img from "../Assets/img/delivery2.jpg";
import del_img2 from "../Assets/img/delivery4.jpg";
import truck_icon from "../Assets/img/truck_icon.png";
import rocket_icon from "../Assets/img/rocket_icon.png";

import Aos from "aos";

function HiringPage() {
  useEffect(() => {
    Aos.init({ duration: 800 });
    document.querySelector("#page-loader-wrapper").style.opacity = 0;
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
            <div
              data-aos="zoom-in-right"
              data-aos-offset="-50"
              data-aos-delay="350"
              className="open-position"
            >
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
      <div className="red-form-wrapper">
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + del_img2 + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          className="landing-page-form"
        >
          <form>
            <h1 data-aos="fade-down" data-aos-offset="50">
              שליחת פרטים לגבי משרה
            </h1>
            <h2>השאירו פרטים ואנחנו כבר חוזרים</h2>
            <input
              data-aos="zoom-in-right"
              data-aos-offset="50"
              type="text"
              placeholder="שם מלא"
            ></input>
            <input
              data-aos="zoom-in-left"
              data-aos-offset="50"
              type="email"
              placeholder="אימייל"
            ></input>
            <input
              data-aos="zoom-in-right"
              data-aos-offset="50"
              type="text"
              placeholder="טלפון"
            ></input>
            <span>קורות חיים</span>
            <input
              data-aos="zoom-in-right"
              data-aos-offset="50"
              type="file"
              placeholder=""
            ></input>

            <button data-aos="zoom-in-up" data-aos-offset="30">
              <img src={rocket_icon} alt=""></img>שגר טופס
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
      <SideIconLinks />

      <div id="hiring-page-footer">
        <InfoFooter />
      </div>
    </div>
  );
}

export default HiringPage;

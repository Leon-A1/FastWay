import React, { useEffect } from "react";
import SideIconLinks from "./SideIconLinks";
import InfoFooter from "./InfoFooter";
import "../Assets/css/get-in-touch-page.css";
import del_img from "../Assets/img/delivery3.jpg";
// import "../Assets/css/get-in-touch-page-form.css";
import "../Assets/css/get-in-touch-page-form.css";
import rocket_icon from "../Assets/img/rocket_icon.png";

import Aos from "aos";

function GetInTouch() {
  useEffect(() => {
    Aos.init({ duration: 800 });
    document.querySelector("#page-loader-wrapper").style.opacity = 0;
  }, []);
  return (
    <div>
      <div className="get-in-touch-page-header">
        <div className="header-backlight"></div>
        <img src={del_img} alt=""></img>
        <h1>צור קשר</h1>
      </div>
      <div className="get-in-touch-page-wrapper">
        <div className="get-in-touch-page-content">
          <div className="get-in-touch-page-left-col">
            {" "}
            <div className="get-in-touch-page-form">
              <form>
                <h1
                  data-aos="fade-down"
                  data-aos-offset="-50"
                  data-aos-delay="350"
                >
                  ? רוצים שליח
                </h1>

                <h2>השאירו פרטים ואנחנו כבר חוזרים</h2>
                <input
                  data-aos="fade-right"
                  data-aos-offset="-50"
                  data-aos-delay="350"
                  type="text"
                  placeholder="שם מלא"
                ></input>
                <input
                  data-aos="fade-left"
                  data-aos-offset="-50"
                  data-aos-delay="350"
                  type="email"
                  placeholder="אימייל"
                ></input>
                <input
                  data-aos="fade-right"
                  data-aos-offset="-50"
                  data-aos-delay="350"
                  type="text"
                  placeholder="טלפון"
                ></input>
                <select
                  data-aos="fade-left"
                  data-aos-offset="-50"
                  data-aos-delay="350"
                  name="form-type"
                >
                  <option value="none">בחר שירות</option>
                  <option value="today">שליחויות מהיום להיום</option>
                  <option value="tomorrow">שליחויות מהיום למחר</option>
                  <option value="private">שליחיות לבתי עסק פרטיים</option>
                  <option value="ecom">e-Commerce</option>
                  <option value="legal">שליחות משפטית</option>
                  <option value="baldar">הצמדת בלדר</option>
                </select>

                <button data-aos="slide-up" data-aos-offset="30">
                  <img src={rocket_icon} alt=""></img>שגר טופס
                </button>
              </form>
            </div>
          </div>
          <div
            input
            data-aos="zoom-in-up"
            data-aos-offset="-50"
            data-aos-delay="350"
            className="get-in-touch-page-right-col"
          >
            {" "}
            <h2>לפרטים ומידע נוסף</h2>
            <p>050-950-5955</p>
            <p>office@fastway.co.il</p>
            <p>האורגים 25, אשדוד</p>
            <h4>:שעות פעילות</h4>
            <h6>א’-ה’: 07:00-17:00</h6>
            <h6>ו’: 07:00-14:00 </h6>
          </div>

          {/* </div> */}
        </div>
      </div>

      <SideIconLinks />

      <div id="get-in-touch-page-footer">
        <InfoFooter />
      </div>
    </div>
  );
}

export default GetInTouch;

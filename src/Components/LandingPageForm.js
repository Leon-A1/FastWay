import React from "react";
import "../Assets/css/landing-page-form.css";
import del_img from "../Assets/img/delivery2.jpg";
import rocket_icon from "../Assets/img/rocket_icon.png";

export default function LandingPageForm() {
  return (
    <div className="red-form-wrapper">
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(" + del_img + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="landing-page-form"
      >
        <form>
          <h1 data-aos="fade-down" data-aos-offset="50">
            ?רוצים להזמין שירות
          </h1>
          <h2>השאירו פרטים ואנחנו כבר חוזרים</h2>
          <input
            data-aos="slide-right"
            data-aos-offset="50"
            type="text"
            placeholder="שם מלא"
          ></input>
          <input
            data-aos="slide-left"
            data-aos-offset="50"
            type="email"
            placeholder="אימייל"
          ></input>
          <input
            data-aos="slide-right"
            data-aos-offset="50"
            type="text"
            placeholder="טלפון"
          ></input>
          <select data-aos="slide-left" name="form-type">
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
  );
}

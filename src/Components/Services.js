import React from "react";
import truck_icon from "../Assets/img/truck_icon.png";
import store_icon from "../Assets/img/store_icon.png";
import gift_icon from "../Assets/img/gift_icon.png";
import "../Assets/css/aos.css";
import "../Assets/css/services.css";
import del_img from "../Assets/img/delivery.jpg";

export default function Services() {
  return (
    <div
      style={{ backgroundImage: "url(" + del_img + ")" }}
      className="services-section"
    >
      <div className="backlight-background-div">
        <div className="col">
          <img src={truck_icon} alt=""></img>

          <h3>שליחויות מהיום להיום</h3>
          <p>
            לאדם הממוצע יש אינספור דברים שהוא צריך להעביר ממקום למקום במהלך
            החודש/השנה. טוב לשמור מספר טלפון של חברת משלוחים שיכולה לספק
            שליחויות מהיום להיום בין אם לעבודה בשוטף ובין אם לצרכי חירום.
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="col">
          <img src={store_icon} alt=""></img>

          <h3>e-Commerce</h3>
          <p>
            הקמת חנות אלקטרונית הפכה בשנים האחרונות למאוד פופולרית. בעוד המצב
            בקניונים הולך ומחמיר, אנשים מזמינים יותר מהאינטרנט מאשר יוצאים
            לקניות לרכוש דברים, כך יותר יזמים מקימים חנויות אינטרנטיות ומשווקים
            שם את המוצרים שלהם. לאינטרנט גם יתרון גדול יותר והוא העלויות הזניחות
            של אחזקת חנות, אין הגבלה על כמות המוצרים שאפשר להחזיק בחנות וכל
            החיסכון הזה בעלויות של חנות פיזית, מחסנים ואחזקת סחורה יכול להיות
            מושקע בפרסום.{" "}
          </p>
        </div>{" "}
        <div className="col">
          <img src={gift_icon} alt=""></img>

          <h3>שליחויות לבתי עסק ופרטיים</h3>
          <p>
            שירותי שליחויות הנם שירותים נפוצים מאוד בכל רחבי הארץ. בין אם צריך
            להעביר מכתב, כסף או חבילה כזו או אחרת ניעזר בחברת שליחויות לעשות
            זאת. גם בתי עסק עובדים באופן שוטף עם חברות שליחויות על מנת לספק
            שירותי משלוחים בתוך העסק או שירותי שילוח של מוצרים אל בית הלקוח.
            שליחויות לבתי עסק ופרטיים תיעשה על ידי חברת שליחויות מקצועית, אמינה
            ומהירה שתוכל לספק לכם את השירות בזמינות מלאה ובהתאם לצורך שלכם.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

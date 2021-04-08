import React from "react";
import pic_1 from "../Assets/img/delivery.jpg";

import "../Assets/css/custom-slider.css";

export default function LACustomSlider() {
  return (
    <div className="slider-wrapper">
      <div className="images-container">
        <a href="/">
          <div id="content_1" className="content">
            <h1>e-Commerce</h1>
            <p>
              {" "}
              בעל חנות אינטרנטית? מחפש חברה אמינה ויציבה לביצוע משלוחי מוצרים
            </p>{" "}
            <strong>
              <br></br>

              <p>
                שירות המשלוחים שלנו <p>e-commerce לחנויות</p>יתן לך את המענה
                המדיוק
              </p>
            </strong>
            <button>מידע נוסף</button>
          </div>
        </a>
        <div id="content_2" className="content">
          <h1>שליחויות לעסקים</h1>
          <p>? בעל עסק נותן שירות משלוחים</p>
          <br></br>

          <strong>
            {" "}
            <p>פאסט ווטי אקספרס מספק שירותים לכל סוגי העסקים</p>
          </strong>

          <button>מידע נוסף</button>
        </div>
        <div id="content_3" className="content">
          <h1>שליחויות מהיום להיום</h1>
          <p> יש לך שליחות דחופה</p>
          <p>
            <span>?</span> מבית העסק
          </p>
          <br></br>
          <p> צריך לשלוח מסמכים</p>
          <p>
            <span>?</span> מהיום להיום
          </p>
          <br></br>

          <strong>
            {" "}
            <p>שירות משלוחים מהיום להיום נועד בדיוק עבורך</p>{" "}
          </strong>
          <button>מידע נוסף</button>
        </div>
        <img
          id="sliding_image_1"
          src={pic_1}
          alt=""
          onLoad={() => {
            document.querySelector("#page-loader-wrapper").style.opacity = 0;
          }}
        ></img>
      </div>
    </div>
  );
}

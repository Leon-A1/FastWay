import React, { useState } from "react";
import pic_1 from "../Assets/img/delivery.jpg";
import pic_2 from "../Assets/img/delivery2.jpg";
import pic_3 from "../Assets/img/delivery3.jpg";

import "../Assets/css/custom-slider.css";

export default function LACustomSlider() {
  const [slidingCurrentImage, setSlidingCurrentImage] = useState(
    "sliding_image_1"
  );
  const [nextSlidingCurrentImage, setNextSlidingCurrentImage] = useState(
    "sliding_image_2"
  );

  function nextSlide() {
    if (slidingCurrentImage === "sliding_image_1") {
      setSlidingCurrentImage("sliding_image_2");
      setNextSlidingCurrentImage("sliding_image_3");
    }
    if (slidingCurrentImage === "sliding_image_2") {
      setSlidingCurrentImage("sliding_image_3");
      setNextSlidingCurrentImage("sliding_image_1");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_1");
      setNextSlidingCurrentImage("sliding_image_2");
    }
    document.getElementById(slidingCurrentImage).style.transform =
      "translateX(250px)";
    document.getElementById(slidingCurrentImage).style.opacity = "0";
    document.getElementById(nextSlidingCurrentImage).style.transform =
      "translateX(0px)";
    document.getElementById(nextSlidingCurrentImage).style.opacity = "1";
  }

  function prevSlide() {
    if (slidingCurrentImage === "sliding_image_1") {
      setSlidingCurrentImage("sliding_image_3");
      setNextSlidingCurrentImage("sliding_image_2");
    }
    if (slidingCurrentImage === "sliding_image_2") {
      setSlidingCurrentImage("sliding_image_1");
      setNextSlidingCurrentImage("sliding_image_3");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_2");
      setNextSlidingCurrentImage("sliding_image_1");
    }
    document.getElementById(slidingCurrentImage).style.transform =
      "translateX(250px)";
    document.getElementById(slidingCurrentImage).style.opacity = "0";
    document.getElementById(nextSlidingCurrentImage).style.transform =
      "translateX(0px)";
    document.getElementById(nextSlidingCurrentImage).style.opacity = "1";
  }
  return (
    <div className="slider-wrapper">
      <button onClick={nextSlide}>next</button>
      <div className="images-container">
        <div className="content">
          <h1>e-Commerce</h1>
          <p>
            {" "}
            בעל חנות אינטרנטית. מחפש חברה אמינה ויציבה לביצוע משלוחי המוצרים?
          </p>
          <p>שירות משלוחים לחנויות שלנו יתן לך את המענה המדיוק</p>
          e-commerce
          <button>מידע נוסף</button>
        </div>
        <img id="sliding_image_1" src={pic_1} alt=""></img>
        <img id="sliding_image_2" src={pic_2} alt=""></img>
        <img id="sliding_image_3" src={pic_3} alt=""></img>
      </div>
      <button onClick={prevSlide}>prev</button>
    </div>
  );
}
// יש לך שליחות דחופה מבית העסק ד

// צריך לשלוח מסמכים מהיום להיום
// שירות משלוחים מהיום להיום נועד בדיוק עבורך

// בעל עסק נותן שירות משלוחים? פאסט ווטי אקספרס מספק שירותים לכלם סוגי העסקים

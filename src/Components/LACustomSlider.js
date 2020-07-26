import React, { useState, useEffect } from "react";
import pic_1 from "../Assets/img/delivery.jpg";
import pic_2 from "../Assets/img/delivery2.jpg";
import pic_3 from "../Assets/img/delivery3.jpg";

import "../Assets/css/custom-slider.css";

export default function LACustomSlider() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`${year}-10-1`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      nextSlide();
    }, 5000);
  });

  const [slidingCurrentImage, setSlidingCurrentImage] = useState(
    "sliding_image_1"
  );
  const [nextSlidingCurrentImage, setNextSlidingCurrentImage] = useState(
    "sliding_image_2"
  );
  const [slidingCurrentContent, setSlidingCurrentContent] = useState(
    "content_1"
  );
  const [nextSlidingCurrentContent, setNextSlidingCurrentContent] = useState(
    "content_2"
  );

  function nextSlide() {
    if (slidingCurrentImage === "sliding_image_1") {
      setSlidingCurrentImage("sliding_image_2");
      setNextSlidingCurrentImage("sliding_image_3");

      setSlidingCurrentContent("content_2");
      setNextSlidingCurrentContent("content_3");
    }
    if (slidingCurrentImage === "sliding_image_2") {
      setSlidingCurrentImage("sliding_image_3");
      setNextSlidingCurrentImage("sliding_image_1");

      setSlidingCurrentContent("content_3");
      setNextSlidingCurrentContent("content_1");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_1");
      setNextSlidingCurrentImage("sliding_image_2");

      setSlidingCurrentContent("content_1");
      setNextSlidingCurrentContent("content_2");
    }
    document.getElementById(slidingCurrentImage).style.transform =
      "translateX(250px)";
    document.getElementById(slidingCurrentImage).style.opacity = "0";
    document.getElementById(nextSlidingCurrentImage).style.transform =
      "translateX(0px)";
    document.getElementById(nextSlidingCurrentImage).style.opacity = "1";

    document.getElementById(slidingCurrentContent).style.transform =
      "translateY(150px)";
    document.getElementById(slidingCurrentContent).style.opacity = "0";
    document.getElementById(nextSlidingCurrentContent).style.transform =
      "translateY(0px)";
    document.getElementById(nextSlidingCurrentContent).style.opacity = "1";
  }
  function prevSlide() {
    if (slidingCurrentImage === "sliding_image_1") {
      setSlidingCurrentImage("sliding_image_3");
      setNextSlidingCurrentImage("sliding_image_2");
      setSlidingCurrentContent("content_3");
      setNextSlidingCurrentContent("content_2");
    }
    if (slidingCurrentImage === "sliding_image_2") {
      setSlidingCurrentImage("sliding_image_1");
      setNextSlidingCurrentImage("sliding_image_3");
      setSlidingCurrentContent("content_1");
      setNextSlidingCurrentContent("content_3");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_2");
      setNextSlidingCurrentImage("sliding_image_1");
      setSlidingCurrentContent("content_2");
      setNextSlidingCurrentContent("content_1");
    }
    document.getElementById(slidingCurrentImage).style.transform =
      "translateX(250px)";
    document.getElementById(slidingCurrentImage).style.opacity = "0";
    document.getElementById(nextSlidingCurrentImage).style.transform =
      "translateX(0px)";
    document.getElementById(nextSlidingCurrentImage).style.opacity = "1";
    document.getElementById(slidingCurrentContent).style.transform =
      "translateY(150px)";
    document.getElementById(slidingCurrentContent).style.opacity = "0";
    document.getElementById(nextSlidingCurrentContent).style.transform =
      "translateY(0px)";
    document.getElementById(nextSlidingCurrentContent).style.opacity = "1";
  }
  console.log(timeLeft);
  // console.log(timer);
  return (
    <div className="slider-wrapper">
      <button onClick={nextSlide}>
        {" "}
        <div id="arrow-left" className="arrow"></div>
      </button>
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
        <img id="sliding_image_1" src={pic_1} alt=""></img>
        <img id="sliding_image_2" src={pic_2} alt=""></img>
        <img id="sliding_image_3" src={pic_3} alt=""></img>
      </div>
      <button onClick={prevSlide}>
        <div className="arrow"></div>
      </button>
    </div>
  );
}

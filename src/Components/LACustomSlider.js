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
  const [slidingCurrentContent, setSlidingCurrentContent] = useState("content");
  const [nextSlidingCurrentContent, setNextSlidingCurrentContent] = useState(
    "content_2"
  );
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    const x = document.getElementsByClassName("content");

    for (i = 0; i < x.length; i++) {
      x[i].style.translateX = "100vh";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    } else {
      x[slideIndex - 1].style.translateX = "0";
    }
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
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
      setNextSlidingCurrentContent("content");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_1");
      setNextSlidingCurrentImage("sliding_image_2");

      setSlidingCurrentContent("content");
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
      setSlidingCurrentContent("content");
      setNextSlidingCurrentContent("content_3");
    }
    if (slidingCurrentImage === "sliding_image_3") {
      setSlidingCurrentImage("sliding_image_2");
      setNextSlidingCurrentImage("sliding_image_1");
      setSlidingCurrentContent("content_2");
      setNextSlidingCurrentContent("content");
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
  return (
    <div className="slider-wrapper">
      <button onClick={nextSlide}>
        {" "}
        <div id="arrow-left" class="arrow"></div>
      </button>
      <div className="images-container">
        <a href="/">
          <div id="content" className="content">
            <h1>e-Commerce</h1>
            <p>
              {" "}
              בעל חנות אינטרנטית? מחפש חברה אמינה ויציבה לביצוע משלוחי מוצרים
            </p>
            <p>? e-commerce לחנויות</p>
            <p>שירות משלוחים שלנו יתן לך את המענה המדיוק</p>

            <button id="button_content_1">מידע נוסף </button>
          </div>
        </a>
        <div id="content_2" className="content">
          <h1>שליחויות לעסקים</h1>
          <p> בעל עסק נותן שירות משלוחים?</p>
          <p>פאסט ווטי אקספרס מספק שירותים לכלם סוגי העסקים</p>

          <button className="button_2">מידע נוסף</button>
        </div>
        <div id="content_3" className="content">
          <h1>שליחויות מהיום להיום</h1>
          <p> יש לך שליחות דחופה מבית העסק,צריך לשלוח מסמכים מהיום להיום </p>
          <p>שירות משלוחים מהיום להיום נועד בדיוק עבורך</p>

          <button className="button_3"> מידע נוסף</button>
        </div>
        <img id="sliding_image_1" src={pic_1} alt=""></img>
        <img id="sliding_image_2" src={pic_2} alt=""></img>
        <img id="sliding_image_3" src={pic_3} alt=""></img>
      </div>
      <button onClick={prevSlide}>
        <div class="arrow"></div>
      </button>
    </div>
  );
}

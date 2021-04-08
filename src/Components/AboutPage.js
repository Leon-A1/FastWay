import React, { useEffect } from "react";
import SideIconLinks from "./SideIconLinks";
import InfoFooter from "./InfoFooter";
import "../Assets/css/about-page.css";
import LandingPageForm from "./LandingPageForm.js";
import del_img from "../Assets/img/delivery2.jpg";
import del_img2 from "../Assets/img/delivery4.jpg";

import Aos from "aos";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
    document.querySelector("#page-loader-wrapper").style.opacity = 0;
  }, []);
  return (
    <div>
      <div className="about-page-header">
        <div className="header-backlight"></div>
        <img src={del_img} alt=""></img>
        <h1>אודות החברה</h1>
      </div>
      <div className="about-page-wrapper">
        <div className="about-page-content">
          <div className="left-col">
            <img src={del_img2} alt=""></img>
          </div>
          <div className="right-col">
            {" "}
            <p
              data-aos="zoom-out-down"
              data-aos-offset="-50"
              data-aos-delay="350"
            >
              חברת פאסט וואי אקספרס הנה חברת שליחויות המספקת שירותי שליחויות בכל
              הארץ. בין שירותי החברה תוכלו ליהנות ממשלוחי אקספרס מהיום להיום,
              משלוחים מהיום למחר, משלוחים חסויים, משלוחים לבתי עסק וחנויות באופן
              שוטף, שליחויות משפטיות, שירותי הצמדת בלדר ועוד. החברה בעלת ניסיון
              רב בתחום ומכירה באחראיות ובחשיבות של העברת המשלוח בזמן, אל היעד
              הנכון ובצורה הבטוחה ביותר.
            </p>{" "}
            <h2>:חזון החברה</h2>
            <p
              data-aos="zoom-out-down"
              data-aos-offset="-50"
              data-aos-delay="350"
            >
              החברה פועלת מתוך חזון אמיתי להעניק שירותי שליחויות מהירות, בטוחות
              ומקצועיות לאנשים פרטיים ועסקים. בתחום שבו מעביר המשלוח הוא גורם
              אנושי – אנו מאמינים כי האמינות היא הגורם המכריע ביותר. בעוד קשה
              למצוא חברות אמינות בשוק אנו חורטים על דגלנו ערך זה לצד מקצוענות
              ואחראיות ומספקים שירותינו באהבה ומסירות לכל לקוח.
            </p>
            <h2>:עבודה מול בתי עסק</h2>
            <p
              data-aos="zoom-out-down"
              data-aos-offset="-50"
              data-aos-delay="350"
            >
              מלבד אנשים פרטיים הזקוקים לשירותי שילוח חבילות קטנות ומסמכים הרי
              שגם בתי עסק זקוקים לשירותי שילוח ולרוב יהיו אלה משלוחים מהירים
              מהיום להיום או מהיום למחר. דוגמאות לבתי עסק הזקוקים לשירותי שילוח:
            </p>
            <ul>
              <li>.בנקים המעבירים דואר פנימי בין הבנקים</li>
              <li>
                חברות אשראי הזקוקות להחתמת הלקוח על מסמכים לצורך מתן הלוואה
              </li>

              <li>
                חנויות פיזית או חנויות מסחר אלקטרוני הזקוקות למשלוחי מוצרים עד
                בית הלקוח ורוצות לתת שירות מעולה של משלוח אקספרס
              </li>
              <li>
                בתי עסק המזמינים משלוחים גדולים של סחורות, ציוד או כל דבר שהם
                זקוקים לשימוש העסק או מכירה ללקוחות
              </li>
              <li>…ועוד</li>
            </ul>
          </div>
          <div className="bottom-col">
            <p
              data-aos="zoom-out-down"
              data-aos-offset="-50"
              data-aos-delay="350"
            >
              שירותי שליחויות במקרים רבים הנם נושא עדין. כאשר מדובר בחבילות
              ומוצרים לשילוח עד בית הלקוח יש חשיבות לא רק למתן צפי הגעה אמין
              ללקוח אלא גם להגעה בטוחה של המוצר. כאשר מדובר בהעברת מסמכים, שיקים
              או כל דבר בסגנון זה – ישנה חשיבות מכרעת גם להגעה בזמן, גם אל היעד
              הנכון וגם של חיסיון המשלוח
            </p>
            <h2>:שירותי שילוח לאנשים פרטיים</h2>
            <p
              data-aos="zoom-out-down"
              data-aos-offset="-50"
              data-aos-delay="350"
            >
              אנשים פרטיים מעבירים משלוחים קטנים בדרך כלל כמו מסמכים רפואיים או
              משפטיים, כמו כסף לבני המשפחה הגרים באזור אחר בארץ, אדם פרטי המזמין
              מוצר מהאינטרנט ובית העסק רוצה לשלוח לו את המוצר עד הבית ועוד.
              לפרטים נוספים והזמנת שירותי שליחויות באופן פרטי או לבית העסק שלכם
              אנו מזמינים אתכם ליצור קשר באתר או בטלפון ונשמח לתת לכם הצעת מחיר
              אטרקטיבית ושירות ברמה הגבוהה ביותר
            </p>
          </div>
        </div>
      </div>
      <LandingPageForm />
      <SideIconLinks />

      <div id="about-page-footer">
        <InfoFooter />
      </div>
    </div>
  );
}

export default AboutPage;

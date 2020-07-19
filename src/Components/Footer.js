import React, { useState } from "react";
import "../Assets/css/footer.css";

export default function Footer() {
  const [showForm, setShowForm] = useState("0");

  function showFormToggle() {
    if (showForm === "0") {
      setShowForm("400px");
    } else {
      setShowForm("0");
    }
  }
  return (
    <div className="row">
      <div className="col">
        <div className="footer">
          <div className="hidden-footer-form" style={{ height: showForm }}>
            <form className="leave-contact-form">
              <input typpe="text" placeholder="שם מלא"></input>
              <input typpe="text" placeholder="דואל"></input>
              <input typpe="text" placeholder="טלפון"></input>
              <button
                onClick={showFormToggle}
                className="leave-contact-button-send"
              >
                שלח
              </button>
            </form>
            <button
              onClick={showFormToggle}
              className="close-hidden-footer-form-button"
            >
              סגור
            </button>
          </div>
          <div className="col-content">
            <button onClick={showFormToggle} className="leave-contact-button">
              תנו לי הצעת מחיר בחינם
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

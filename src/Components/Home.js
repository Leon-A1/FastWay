import React, { useEffect } from "react";
import Services from "./Services";
import ReadMoreSection from "./ReadMoreSection";
// import Header from "./Header";
import InfoFooter from "./InfoFooter";
import LandingPageForm from "./LandingPageForm.js";
import LACustomSlider from "./LACustomSlider.js";
// import SplitScreenRowContentFirst from "./SplitScreenRowContentFirst";
import "../Assets/css/layout.css";
import "../Assets/css/aos.css";

import "../Assets/css/split-row.css";
import Aos from "aos";
import SideIconLinks from "./SideIconLinks";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  return (
    <div className="main">
      <LACustomSlider />

      <ReadMoreSection />
      <Services />
      <LandingPageForm />
      <SideIconLinks />
      <InfoFooter />
    </div>
  );
}

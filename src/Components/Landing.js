import React from "react";
import Home from "./Home";
import CompanyProfile from "./CompanyProfile";
import NavBar from "./navBar";
import getintouch from "./GetInTouchPage";
import AboutPage from "./AboutPage";
import EcommercePage from "./EcommercePage";
import HiringPage from "./HiringPage";
import DeliveryTodayPage from "./DeliveryTodayPage";
import { Switch, Route } from "react-router-dom";

function Landing() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/companyprofile" component={CompanyProfile} />
        <Route path="/getintouch" component={getintouch} />
        <Route path="/about" component={AboutPage} />
        <Route path="/hiring-page" component={HiringPage} />
        <Route path="/delivery-today" component={DeliveryTodayPage} />
        <Route path="/ecommerce" component={EcommercePage} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default Landing;

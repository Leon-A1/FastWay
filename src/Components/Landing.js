import React from "react";
import Home from "./Home";
import CompanyProfile from "./CompanyProfile";
import NavBar from "./navBar";
import GetInContact from "./GetInContact";
import { Switch, Route } from "react-router-dom";

function Landing() {
  return (
    // <div style={{ width: "100%" }}>
    <>
      <NavBar />

      <Switch>
        <Route path="/companyprofile" component={CompanyProfile} />
        <Route path="/getintouch" component={GetInContact} />
        <Route path="/" component={Home} />
      </Switch>
    </>
    // </div>
  );
}

export default Landing;

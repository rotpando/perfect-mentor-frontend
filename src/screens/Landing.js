import React from "react";
import "../styles/Landing/Landing.css";
import sally from "../assets/Saly-1.png";
import Button from "../components/Button";

function Landing() {
  return (
    <div className="landingRootContainer">
      <img className="sally" src={sally} alt="landingPagePicture"></img>
      <div className="landingButtonsContainer">
        <h1 className="landingTitle">THE PERFECT MENTOR</h1>
        <Button title="Sign up" background="#444444" color="white" />
        <Button
          title="Log in"
          style={{ border: "2px solid #444444", marginTop: "2%" }}
        />
      </div>
    </div>
  );
}

export default Landing;

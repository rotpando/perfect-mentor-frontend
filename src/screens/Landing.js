import React from "react";
import "../styles/Landing/Landing.css";
import sally from "../assets/Saly-1.png";
import Button from "../components/Button";
import Title from "../components/Title";

function Landing() {
  return (
    <div className="landingRootContainer">
      <img className="sally" src={sally} alt="landingPagePicture"></img>
      <div className="landingButtonsContainer">
        <Title/>
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

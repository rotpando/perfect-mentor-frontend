import React from "react";
import InfoCard from "../components/InfoCard";
import "../styles/Stadistics/Stadistics.css";

function Stadistics() {
  return (
    <div className="stadisticsRootContainer">
      <div className="titleContainer">
        <h1 className="stadisticsTitle">Stadistics</h1>
      </div>
      <div className="stadisticsInfoContainer">
        <InfoCard title="TOTAL OF USERS" />
        <InfoCard title="TOTAL OF NEW USERS" />
      </div>
    </div>
  );
}

export default Stadistics;

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
        <div className="cardInfoContainer">
          <InfoCard title="TOTAL OF USERS" />
          <InfoCard title="TOTAL OF NEW USERS" />
        </div>

        <div className="graphContainer">
          <h1 className='graphContainerTitle'>SIGN UPS PER MONTH</h1>
        </div>
      </div>
    </div>
  );
}

export default Stadistics;

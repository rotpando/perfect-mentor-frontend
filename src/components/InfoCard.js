import React from "react";
import "./Components.css";

function InfoCard({ title, cardInfo }) {
  const dummyInfo = { Mentees: 750, Mentors: 250, "Total users": 1000 };
  return (
    <div className="infoCardContainer">
      <h1 className="cardTitle">{title}</h1>
      {Object.keys(dummyInfo).map((key, index) => (
        <div
          style={
            index !== Object.keys(dummyInfo).length - 1
              ? { borderBottom: "0.5px solid rgba(68, 68, 68, 0.3)" }
              : {}
          }
          className="cardItem"
        >
          <h1 className="cardItemTitle">{key}</h1>
          <p className="cardItemValue">{dummyInfo[key]}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;

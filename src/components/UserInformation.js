import React from "react";

function UserInformation() {
  const userData = [
    "Michael David",
    25,
    "ma.da@gmail.com",
    "Mentor",
    "Jan 13, 2022",
    "Unverified",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderLeft:
          userData[userData.length - 1] === "Unverified"
            ? "3px solid red"
            : "3px solid green",
        background:
          userData[userData.length - 1] === "Unverified"
            ? "rgba(230, 21, 135, 0.1)"
            : "rgba(57, 181, 74, 0.1)",
      }}
    >
      {userData.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
    </div>
  );
}

export default UserInformation;

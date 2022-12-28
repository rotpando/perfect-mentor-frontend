import React, { useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import "../styles/Sidebar/Sidebar.css";
import { HiOutlineUsers, HiOutlineUser } from "react-icons/hi2";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoStatsChartOutline, IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const sideBarItems = ["Users", "Stadistics", "Reports", "Profile", "Log out"];
  const sideBarIcons = [
    <HiOutlineUsers size={21} color={"#44444480"} />,
    <IoStatsChartOutline size={21} color={"#44444480"} />,
    <HiOutlineDocumentReport size={21} color={"#44444480"} />,
    <HiOutlineUser size={21} color={"#44444480"} />,
    <IoLogOutOutline size={21} color="#44444480" />,
  ];
  const activeHandler = (e) => {
    const landingButtons = document.querySelectorAll(".landingButton");
    landingButtons.forEach((el) => {
      if (el.id !== e.id) {
        el.classList.remove("active");
      }
    });
    document.getElementById(e.target.id).classList.add("active");
  };
  return (
    <div className="sidebarRootContainer">
      <Title />
      <div className="landingButtons">
        {sideBarItems.map((item, index) => (
          <Button
            title={item}
            fontSize={16}
            color="#44444480"
            onClick={(e) => {
              navigate(item);
              activeHandler(e);
            }}
            className={`landingButton`}
            id={item}
            flat={true}
            icon={sideBarIcons[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

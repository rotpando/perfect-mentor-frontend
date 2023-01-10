import React from "react";
import "./Components.css";

function Button({
  title,
  background,
  fontSize,
  color,
  style,
  onClick,
  className,
  flat,
  icon,
  id,
}) {
  return (
    <div
      className={`${className} pmButton`}
      id={id}
      style={{
        ...style,
        background: background,
        borderRadius: flat ? "0px" : "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "6%",
        paddingRight: "6%",
        paddingTop: "2%",
        paddingBottom: "2%",
        cursor: "pointer",
        userSelect: "none",
        gap: "2%",
      }}
      onClick={onClick}
    >
      <p
      id={id}
        style={{
          display: "flex",
          gap: "5%",
          fontSize: fontSize,
          color: color,
          width: "fit-content",
          whiteSpace: "nowrap",
        }}
      >
        {icon ? icon : <></>}
        {title}
      </p>
    </div>
  );
}

export default Button;

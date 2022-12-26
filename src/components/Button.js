import React from "react";
import "./Components.css";

function Button({
  title,
  background,
  fontSize,
  color,
  style,
  onPress,
  className,
}) {
  return (
    <div
      className={`${className} pmButton`}
      style={{
        ...style,
        background: background,
        borderRadius: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "6%",
        paddingRight: "6%",
        paddingTop: "2%",
        paddingBottom: "2%",
        cursor: "pointer",
        userSelect: "none",
      }}
      onPress={onPress}
    >
      <p style={{ fontSize: fontSize, color: color }}>{title}</p>
    </div>
  );
}

export default Button;

import React from "react";
import "./Components.css";
function Input({ icon, placeholder, onChange, className, style }) {
  return (
    <div style={style} className={`inputContainer ${className}`}>
      {icon ? icon : <></>}
      <input placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
}

export default Input;

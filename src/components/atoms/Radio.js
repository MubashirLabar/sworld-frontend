import React from "react";

function Radio({ className, check, setCheck }) {
  return (
    <div
      className={`app-radio ${check ? "active" : ""} ${className}`}
      onClick={() => setCheck(!check)}
    ></div>
  );
}

export default Radio;

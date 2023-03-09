import { CheckIcon } from "assets/icons";
import React from "react";

function Checkbox({ className, check, setCheck }) {
  return (
    <div
      className={`app-checkbox ${className} ${check ? "checked" : ""}`}
      onClick={() => setCheck(!check)}
    >
      <CheckIcon />
    </div>
  );
}

export default Checkbox;

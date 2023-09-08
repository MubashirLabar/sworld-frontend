import { useState } from "react";
import { AIIcon } from "assets/icons";

function AISearchField() {
  const [address, setAddress] = useState(
    JSON.parse(window.localStorage.getItem("address"))
      ? JSON.parse(window.localStorage.getItem("address"))
      : ""
  );

  return (
    <div className="ai-search-section">
      <div className="search-field">
        <div className="field">
          <input
            type="text"
            placeholder={`Where would you like to go near the "Colosseum"?`}
            className="input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="search-btn">
          <AIIcon />
        </button>
      </div>
    </div>
  );
}

export default AISearchField;

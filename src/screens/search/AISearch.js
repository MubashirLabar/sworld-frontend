import { AIIcon } from "assets/icons";
import React from "react";

function AISearch() {
  return (
    <div className="ai-search-section">
      <div className="search-field">
        <div className="field">
          <input
            type="text"
            placeholder={`Where would you like to go near the "Colosseum"?`}
            className="input"
          />
        </div>
        <button className="search-btn">
          <AIIcon />
        </button>
      </div>
    </div>
  );
}

export default AISearch;

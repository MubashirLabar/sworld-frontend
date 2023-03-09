import { SearchIcon } from "assets/icons";
import React from "react";

function ChatFooter() {
  return (
    <div className="chatbot_chat-footer">
      <div className="message-field">
        <input
          className="input"
          placeholder="Ask to our Artificial Intelligence"
        />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;

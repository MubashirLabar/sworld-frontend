import Typewriter from "components/atoms/Typewriter";
import React from "react";

function UserMessage({ message }) {
  return (
    <div
      className={`chatbot_message from-user ${
        message.isUser ? "from-user" : ""
      }`}
    >
      <div className="dp">You</div>
      <div className="meta">
        <div className="text">{message.answer}</div>
      </div>
    </div>
  );
}

export default UserMessage;
